"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface RailCard {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface RailItem {
  id: string;
  label: string;
  href?: string;
  card?: RailCard;
}

export interface SectionRailProps {
  items: RailItem[];
  activeId?: string;
  variant?: "viewport" | "contained";
  scrollRootRef?: React.RefObject<HTMLElement | null>;
  className?: string;
}

export function SectionRail({
  items,
  activeId: controlledActiveId,
  variant = "viewport",
  scrollRootRef,
  className,
}: SectionRailProps) {
  const [internalActiveId, setInternalActiveId] = useState<string>(
    controlledActiveId || items[0]?.id || ""
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const activeId = controlledActiveId !== undefined ? controlledActiveId : internalActiveId;
  const currentTargetId = hoveredId || activeId;

  // Active index for waveform calculation
  const activeIndex = useMemo(() => {
    const idx = items.findIndex((item) => item.id === currentTargetId);
    return idx >= 0 ? idx : 0;
  }, [items, currentTargetId]);

  // Scroll tracking with reading band detection + reliable final section
  useEffect(() => {
    if (controlledActiveId !== undefined) return;

    const handleScroll = () => {
      // Reliable final section check: Reaching bottom activates the last item
      if (variant === "viewport") {
        const scrollPosition = window.scrollY + window.innerHeight;
        const totalHeight = document.documentElement.scrollHeight;
        if (totalHeight - scrollPosition < 80 && items.length > 0) {
          setInternalActiveId(items[items.length - 1].id);
          return;
        }
      } else if (scrollRootRef?.current) {
        const container = scrollRootRef.current;
        if (
          container.scrollHeight - (container.scrollTop + container.clientHeight) < 40 &&
          items.length > 0
        ) {
          setInternalActiveId(items[items.length - 1].id);
          return;
        }
      }

      // Check which section is nearest reading center band (~40% from top)
      const viewportTargetY =
        variant === "viewport"
          ? window.innerHeight * 0.4
          : (scrollRootRef?.current?.clientHeight || 400) * 0.4;

      let closestId = items[0]?.id || "";
      let minDistance = Infinity;

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height * 0.3;
        const distance = Math.abs(elCenter - viewportTargetY);

        if (distance < minDistance) {
          minDistance = distance;
          closestId = item.id;
        }
      }

      if (closestId) {
        setInternalActiveId(closestId);
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    if (variant === "viewport") {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
    } else if (scrollRootRef?.current) {
      scrollRootRef.current.addEventListener("scroll", onScroll, { passive: true });
    }

    handleScroll();

    return () => {
      if (variant === "viewport") {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      } else if (scrollRootRef?.current) {
        scrollRootRef.current.removeEventListener("scroll", onScroll);
      }
    };
  }, [items, controlledActiveId, variant, scrollRootRef]);

  // Smooth scroll handler
  const handleSelect = (item: RailItem) => {
    if (item.href) {
      window.location.href = item.href;
      return;
    }

    const targetEl = document.getElementById(item.id);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      setInternalActiveId(item.id);
    }
  };

  const activeItem = items[activeIndex] || items[0];

  return (
    <nav
      aria-label="Section navigation rail"
      className={cn(
        variant === "viewport"
          ? "fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-start select-none"
          : "absolute left-0 top-1/2 -translate-y-1/2 z-20 flex flex-col items-start select-none",
        className
      )}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div className="relative flex flex-col items-start gap-[2px] py-1">
        {items.map((item, index) => {
          const isSelected = item.id === currentTargetId;
          const distance = Math.abs(index - activeIndex);

          // Waveform lengths matching the user screenshot (enlarged for prominence):
          // Active bar: longest pure white (~64px)
          // Neighbors: smoothly tapering in width and brightness
          let barWidth = 18;
          let barHeight = "h-[2px]";
          let barColor = "#333333";
          let opacity = 0.55;

          if (isSelected) {
            barWidth = 64;
            barHeight = "h-[3px]";
            barColor = "#FFFFFF";
            opacity = 1;
          } else if (distance === 1) {
            barWidth = 46;
            barHeight = "h-[2.5px]";
            barColor = "#999999";
            opacity = 0.88;
          } else if (distance === 2) {
            barWidth = 34;
            barHeight = "h-[2px]";
            barColor = "#666666";
            opacity = 0.75;
          } else if (distance === 3) {
            barWidth = 24;
            barHeight = "h-[2px]";
            barColor = "#444444";
            opacity = 0.65;
          }

          return (
            <div key={item.id} className="relative flex items-center">
              <button
                type="button"
                aria-label={`Jump to section ${item.label}`}
                aria-current={isSelected ? "true" : undefined}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setHoveredId(item.id)}
                className="group relative flex h-[7px] items-center justify-start outline-none cursor-pointer pl-0 pr-2"
              >
                {/* Horizontal tick bar starting flush on left border with zero shadow */}
                <motion.span
                  layout
                  animate={{
                    width: barWidth,
                    backgroundColor: barColor,
                    opacity,
                  }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 420, damping: 28 }
                  }
                  className={cn(
                    barHeight,
                    "rounded-none origin-left transition-colors duration-150 group-hover:!bg-white group-hover:!opacity-100 shadow-none drop-shadow-none"
                  )}
                />
              </button>

              {/* White Speech Bubble attached to the active tick mark (enlarged and bold, zero shadow) */}
              {isSelected && (
                <motion.div
                  layoutId="activeSpeechBubble"
                  className="pointer-events-none absolute left-[70px] z-50 flex items-center select-none shadow-none drop-shadow-none"
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 450, damping: 30 }
                  }
                >
                  {/* Left pointing triangle tail */}
                  <div className="w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-white shrink-0 -mr-[1px] shadow-none drop-shadow-none" />

                  {/* Speech bubble badge with dark text and zero shadow */}
                  <div className="bg-white text-[#0A0A0C] font-sans text-[13.5px] font-bold px-3 py-1.5 rounded-[7px] shadow-none drop-shadow-none whitespace-nowrap leading-none flex items-center">
                    {item.label}
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default SectionRail;
