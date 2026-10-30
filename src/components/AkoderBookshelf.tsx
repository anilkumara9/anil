import React, { useState } from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
  height: number;
  spineWidth: number;
  coverRatio: number;
  cover: string;
  spine: string;
  takeaway: string;
}

export default function AkoderBookshelf() {
  const [openBookId, setOpenBookId] = useState<string | null>('48-laws-of-power');

  // Exact 10 books from akoder.xyz with authentic dimensions and SVGs
  const books: Book[] = [
    {
      id: 'atomic-habits',
      title: 'Atomic Habits',
      author: 'James Clear',
      height: 308,
      spineWidth: 36,
      coverRatio: 0.653125,
      cover: '/books/atomic-habits.svg',
      spine: '/books/atomic-habits-spine.svg',
      takeaway: 'Small 1% daily increments compound into exponential mastery and lasting engineering excellence.'
    },
    {
      id: '48-laws-of-power',
      title: 'The 48 Laws of Power',
      author: 'Robert Greene',
      height: 340,
      spineWidth: 66,
      coverRatio: 0.7025,
      cover: '/books/48-laws-of-power.svg',
      spine: '/books/48-laws-of-power-spine.svg',
      takeaway: 'Master self-discipline, understand human incentives, and always guard your reputation.'
    },
    {
      id: 'shoe-dog',
      title: 'Shoe Dog',
      author: 'Phil Knight',
      height: 318,
      spineWidth: 45,
      coverRatio: 0.666875,
      cover: '/books/shoe-dog.svg',
      spine: '/books/shoe-dog-spine.svg',
      takeaway: 'The coward never started and the weak died along the way. That leaves us.'
    },
    {
      id: 'book-of-elon',
      title: 'The Book of Elon',
      author: 'Eric Jorgenson',
      height: 325,
      spineWidth: 43,
      coverRatio: 0.646875,
      cover: '/books/book-of-elon.svg',
      spine: '/books/book-of-elon-spine.svg',
      takeaway: 'Think from first principles, delete unnecessary constraints, and iterate maniacally fast.'
    },
    {
      id: 'steve-jobs',
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      height: 350,
      spineWidth: 56,
      coverRatio: 0.656875,
      cover: '/books/steve-jobs.svg',
      spine: '/books/steve-jobs-spine.svg',
      takeaway: 'Simplicity is the ultimate sophistication. Relentless passion for beautiful craftsmanship.'
    },
    {
      id: 'subtle-art',
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      height: 296,
      spineWidth: 42,
      coverRatio: 0.666667,
      cover: '/books/subtle-art.svg',
      spine: '/books/subtle-art-spine.svg',
      takeaway: 'Choose your struggles wisely. What you care about defines the quality of your craft.'
    },
    {
      id: 'psychology-of-money',
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      height: 311,
      spineWidth: 42,
      coverRatio: 0.646875,
      cover: '/books/psychology-of-money.svg',
      spine: '/books/psychology-of-money-spine.svg',
      takeaway: 'Doing well with money and systems has a little to do with how smart you are and a lot to do with how you behave.'
    },
    {
      id: 'meditations',
      title: 'Meditations',
      author: 'Marcus Aurelius',
      height: 311,
      spineWidth: 43,
      coverRatio: 0.650562,
      cover: '/books/meditations.svg',
      spine: '/books/meditations-spine.svg',
      takeaway: 'The soul becomes dyed with the color of its thoughts. Control your internal locus of reaction.'
    },
    {
      id: 'if-anyone-builds-it',
      title: 'If Anyone Builds It, Everyone Dies',
      author: 'Eliezer Yudkowsky & Nate Soares',
      height: 311,
      spineWidth: 43,
      coverRatio: 0.645,
      cover: '/books/if-anyone-builds-it.svg',
      spine: '/books/if-anyone-builds-it-spine.svg',
      takeaway: 'Existential safety, technical rigor, and alignment cannot be left as an afterthought.'
    },
    {
      id: 'habit-of-winning',
      title: 'The Habit of Winning',
      author: 'Prakash Iyer',
      height: 308,
      spineWidth: 37,
      coverRatio: 0.681538,
      cover: '/books/habit-of-winning.svg',
      spine: '/books/habit-of-winning-spine.svg',
      takeaway: 'Winning is not a one-time event; it is a mindset shaped by small daily disciplines.'
    }
  ];

  return (
    <section id="bookshelf" className="relative px-4 sm:px-8 py-10 sm:py-14 scroll-mt-20">
      {/* Outside Hand-drawn Note, Power Book Image & Sketched Arrow on LEFT SIDE in gutter */}
      <div
        aria-hidden="true"
        className="absolute -left-24 sm:-left-30 md:-left-38 lg:-left-44 xl:-left-48 top-16 sm:top-22 md:top-26 z-20 select-none hidden xl:flex flex-col items-end rotate-[-2deg] pointer-events-none"
      >
        {/* 48 Laws of Power Book Image Sticker ABOVE */}
        <div
          onClick={() => {
            setOpenBookId('48-laws-of-power');
            const el = document.getElementById('bookshelf');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="cursor-pointer hover:scale-105 hover:rotate-1 transition-transform duration-300 pointer-events-auto mb-2"
          title="The 48 Laws of Power - Robert Greene"
        >
          <img
            src="/books/48-laws-of-power.svg"
            alt="The 48 Laws of Power Book Cover"
            className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] rotate-[-4deg] rounded-none border border-amber-900/40"
          />
        </div>

        {/* Handwritten text in Caveat script font */}
        <div className="font-['Caveat',_'Shantell_Sans',_cursive] text-[18px] sm:text-[21px] lg:text-[23px] text-zinc-100 leading-tight font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] text-right whitespace-nowrap">
          <div>Books I keep</div>
          <div className="-mt-0.5">coming back to</div>
        </div>

        {/* Sketched Hand-drawn Curving Arrow pointing across border into Bookshelf */}
        <svg 
          width="48" 
          height="40" 
          viewBox="0 0 48 40" 
          fill="none" 
          className="text-zinc-300 drop-shadow-md mt-1 mr-0 sm:mr-1 rotate-[4deg]"
        >
          <path 
            d="M8 4 C18 14, 26 22, 42 28" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M32 28 L42 28 L38 18" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      {/* Clean Minimalist Section Title matching other sections */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[20px] sm:text-[22px] font-medium text-[#F4F4F5] tracking-tight">
          Bookshelf
        </h2>
        <span className="text-[12px] font-mono text-zinc-400">
          Click any book to open
        </span>
      </div>

      {/* Bookshelf Container - Clean, borderless shelf with floating baseline */}
      <div className="relative pt-4 pb-2">

        {/* Books Rail with smooth horizontal scroll on smaller viewports */}
        <div className="relative overflow-x-auto no-scrollbar overscroll-x-contain py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-end justify-start sm:justify-center min-w-max gap-[3px] mx-auto px-2 sm:px-8 min-h-[365px]">
            {books.map((book) => {
              const isOpen = openBookId === book.id;
              const depth = book.spineWidth;
              const openWidth = Math.round(book.height * book.coverRatio);

              return (
                <button
                  key={book.id}
                  type="button"
                  data-bookshelf-book={book.id}
                  data-open={isOpen}
                  onClick={() => setOpenBookId(isOpen ? null : book.id)}
                  className="relative group shrink-0 transition-[width,transform] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 select-none block"
                  style={{
                    height: `${book.height}px`,
                    width: isOpen ? `${openWidth + 6}px` : `${depth + 4}px`,
                    zIndex: isOpen ? 20 : 1,
                    borderRadius: '0px', // Straight rectangular corners
                  }}
                  title={`${book.title} by ${book.author} — click to ${isOpen ? 'close' : 'open'}`}
                  aria-pressed={isOpen}
                >
                  <div 
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    style={{ borderRadius: '0px' }}
                  >
                    {/* Full Front Cover - Smoothly revealed in-place when open */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ease-in-out bg-[#121215] ${
                        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                      style={{ borderRadius: '0px' }}
                    >
                      <img
                        src={book.cover}
                        alt={`${book.title} cover`}
                        className="w-full h-full object-fill block"
                        style={{ borderRadius: '0px' }}
                      />
                      {/* Straight Edge Clean Outline - NO CURVED BORDER */}
                      <div
                        className="absolute inset-0 pointer-events-none border border-white/20 shadow-[0_16px_36px_rgba(0,0,0,0.95)]"
                        style={{ borderRadius: '0px' }}
                      />
                    </div>

                    {/* Spine View - Visible when closed */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                        isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:-translate-y-2'
                      }`}
                      style={{
                        width: `${depth}px`,
                        left: '2px',
                        borderRadius: '0px',
                      }}
                    >
                      <img
                        src={book.spine}
                        alt={`${book.title} spine`}
                        className="w-full h-full object-fill block drop-shadow-[0_6px_14px_rgba(0,0,0,0.75)]"
                        style={{ borderRadius: '0px' }}
                      />
                      {/* Straight border outline */}
                      <div
                        className="absolute inset-0 pointer-events-none border border-white/10"
                        style={{ borderRadius: '0px' }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Solid Shelf Baseline Bar - Crisp straight edges (no curved borders) */}
          <div 
            className="w-full max-w-[880px] mx-auto h-[6px] bg-[#27272a] border-t border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.9)]" 
            style={{ borderRadius: '0px' }}
          />
        </div>
      </div>
    </section>
  );
}
