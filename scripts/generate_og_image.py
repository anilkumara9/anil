import os
from PIL import Image, ImageEnhance

def generate_og_image():
    W, H = 1200, 630
    bg_color = (239, 236, 228)  # Theme background #EFECE4

    src_path = "asset/hero-screenshot.png"
    if not os.path.exists(src_path):
        src_path = "public/og-preview-v2.jpg"

    if not os.path.exists(src_path):
        print(f"Source image not found: {src_path}")
        return

    im = Image.open(src_path)
    # Remove top window 1px line and right scrollbar artifact
    clean = im.crop((0, 1, min(im.width, 1018), im.height)).convert("RGB")

    # Crop content area with full shadows and padding
    crop_box = (56, 3, min(clean.width, 963), min(clean.height, 427))
    content = clean.crop(crop_box)

    # Scale factor for balanced framing on 1200x630
    scale = 1.20
    target_w = int(content.width * scale)
    target_h = int(content.height * scale)
    scaled = content.resize((target_w, target_h), Image.Resampling.LANCZOS)

    # Subtle sharpening to maintain crisp micro-typography
    enhancer = ImageEnhance.Sharpness(scaled)
    crisp = enhancer.enhance(1.15)

    # Create canvas with theme background
    canvas = Image.new("RGB", (W, H), bg_color)
    pos_x = (W - target_w) // 2
    pos_y = (H - target_h) // 2
    canvas.paste(crisp, (pos_x, pos_y))

    # Target destinations
    targets = [
        "public/og-preview-v3.jpg",
        "public/og-preview-v3.png",
        "public/og-preview-v2.jpg",
        "public/og-preview-v2.png",
        "public/og-preview.jpg",
        "public/og-preview.png",
        "dist/og-preview-v3.jpg",
        "dist/og-preview-v3.png",
        "dist/og-preview-v2.jpg",
        "dist/og-preview-v2.png",
        "dist/og-preview.jpg",
        "dist/og-preview.png",
    ]

    for t in targets:
        os.makedirs(os.path.dirname(t), exist_ok=True)
        if t.endswith(".jpg"):
            canvas.save(t, "JPEG", quality=92, optimize=True)
        elif t.endswith(".png"):
            canvas.save(t, "PNG", optimize=True)
        print(f"Generated {t} ({os.path.getsize(t)} bytes)")

    print(f"OG Preview generation complete: 1200x630, margins L={pos_x} R={W - pos_x - target_w} T={pos_y} B={H - pos_y - target_h}")

if __name__ == "__main__":
    generate_og_image()
