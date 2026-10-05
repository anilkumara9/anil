import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_og_image():
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), color="#0c0d14")
    
    # 1. Subtle, elegant background lighting (deep indigo & violet glow)
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([60, 40, 680, 560], fill=(79, 70, 229, 70))
    glow_draw.ellipse([500, 200, 1100, 700], fill=(99, 102, 241, 45))
    glow = glow.filter(ImageFilter.GaussianBlur(90))
    img.paste(glow, (0, 0), glow)

    draw = ImageDraw.Draw(img)

    # 2. Outer subtle luxury border
    draw.rounded_rectangle([18, 18, W - 18, H - 18], radius=24, outline="#232538", width=1)

    # 3. System Fonts
    font_bold = "C:/Windows/Fonts/segoeuib.ttf"
    font_semibold = "C:/Windows/Fonts/seguisb.ttf" if os.path.exists("C:/Windows/Fonts/seguisb.ttf") else font_bold
    font_reg = "C:/Windows/Fonts/segoeui.ttf"

    f_eyebrow = ImageFont.truetype(font_semibold, 16)
    f_name = ImageFont.truetype(font_bold, 58)
    f_role = ImageFont.truetype(font_bold, 36)
    f_desc = ImageFont.truetype(font_reg, 24)
    f_tag = ImageFont.truetype(font_semibold, 19)
    f_foot = ImageFont.truetype(font_semibold, 18)

    # 4. Eyebrow Badge (Clean & Minimal)
    eyebrow_text = "PORTFOLIO  •  SWE & APPLIED AI"
    draw.rounded_rectangle([64, 60, 410, 96], radius=18, fill="#161828", outline="#312e81", width=1)
    draw.ellipse([80, 73, 90, 83], fill="#10b981")  # Live emerald dot
    draw.text((102, 69), eyebrow_text, font=f_eyebrow, fill="#c7d2fe")

    # 5. Main Name
    draw.text((64, 120), "Meda Anilkumar", font=f_name, fill="#ffffff")

    # 6. Primary Role
    draw.text((64, 200), "Software & AI Engineer", font=f_role, fill="#818cf8")

    # 7. Clean, Humanized Subtitle (Legible at all preview scales)
    draw.text((64, 262), "Building high-impact software, production AI systems,", font=f_desc, fill="#cbd5e1")
    draw.text((64, 298), "and probing foundation model representations.", font=f_desc, fill="#94a3b8")

    # 8. Three Clean Highlight Badges (Spacious, modern, never cluttered)
    badges = [
        ("⚡", "Founder of Spora (200+ Users)"),
        ("📄", "Springer-Accepted AI Research"),
        ("🏆", "REVA Hackathon Winner"),
    ]

    bx = 64
    by = 368
    for icon, label in badges:
        # Measure text width
        bbox = draw.textbbox((0, 0), f"{icon}  {label}", font=f_tag)
        bw = (bbox[2] - bbox[0]) + 36
        draw.rounded_rectangle([bx, by, bx + bw, by + 46], radius=23, fill="#131422", outline="#292c44", width=1)
        draw.text((bx + 16, by + 11), f"{icon}  {label}", font=f_tag, fill="#f1f5f9")
        bx += bw + 14

    # Second row tag: Location & Status
    draw.rounded_rectangle([64, 430, 310, 474], radius=22, fill="#11121d", outline="#202235", width=1)
    draw.text((82, 442), "📍 Bengaluru, Karnataka", font=f_foot, fill="#94a3b8")

    # 9. Clean Domain Watermark (Bottom Left)
    draw.text((64, 538), "anilkumara9.github.io/anil", font=f_foot, fill="#6366f1")

    # 10. Portrait on the Right (Framed & Refined)
    anil_path = "public/anil.png"
    if os.path.exists(anil_path):
        portrait = Image.open(anil_path).convert("RGBA")
        pw, ph = 410, 490
        portrait = portrait.resize((pw, ph), Image.Resampling.LANCZOS)

        # Rounded mask for portrait
        mask = Image.new("L", (pw, ph), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.rounded_rectangle([0, 0, pw, ph], radius=30, fill=255)

        # Position portrait
        px = 730
        py_pos = 70

        # Soft shadow behind portrait
        shadow = Image.new("RGBA", (pw + 40, ph + 40), (0, 0, 0, 0))
        shadow_draw = ImageDraw.Draw(shadow)
        shadow_draw.rounded_rectangle([12, 12, pw + 28, ph + 28], radius=36, fill=(0, 0, 0, 150))
        shadow = shadow.filter(ImageFilter.GaussianBlur(18))
        img.paste(shadow, (px - 20, py_pos - 10), shadow)

        # Subtle luxury outer border
        draw.rounded_rectangle([px - 2, py_pos - 2, px + pw + 2, py_pos + ph + 2], radius=32, outline="#3730a3", width=2)
        img.paste(portrait, (px, py_pos), mask)

        # Elegant Status Pill overlay at bottom of portrait
        stat_w = 260
        stat_x = px + (pw - stat_w) // 2
        stat_y = py_pos + ph - 46
        draw.rounded_rectangle([stat_x, stat_y, stat_x + stat_w, stat_y + 36], radius=18, fill="#0c0d16", outline="#312e81", width=1)
        draw.ellipse([stat_x + 16, stat_y + 12, stat_x + 26, stat_y + 22], fill="#10b981")
        draw.text((stat_x + 36, stat_y + 8), "Available for Opportunities", font=f_eyebrow, fill="#e2e8f0")

    # 11. Save Optimized Images
    os.makedirs("public", exist_ok=True)
    os.makedirs("dist", exist_ok=True)

    # Save JPEG version (universal WhatsApp / Facebook / Twitter support, quality 90, < 120KB)
    img.save("public/og-preview.jpg", "JPEG", quality=90, optimize=True)
    img.save("dist/og-preview.jpg", "JPEG", quality=90, optimize=True)

    # Save PNG version (crisp 8-bit adaptive palette, < 110KB, under 300KB WhatsApp limit)
    img_quant = img.convert('P', palette=Image.Palette.ADAPTIVE, colors=256)
    img_quant.save("public/og-preview.png", "PNG", optimize=True)
    img_quant.save("dist/og-preview.png", "PNG", optimize=True)

    # Square avatar (400x400) for messenger thumbnails
    if os.path.exists(anil_path):
        sq = Image.open(anil_path).convert("RGB")
        w_sq, h_sq = sq.size
        min_dim = min(w_sq, h_sq)
        left = (w_sq - min_dim) // 2
        top = 0
        sq_cropped = sq.crop((left, top, left + min_dim, top + min_dim))
        sq_cropped = sq_cropped.resize((400, 400), Image.Resampling.LANCZOS)
        sq_cropped.save("public/avatar.jpg", "JPEG", quality=90, optimize=True)
        sq_cropped.save("dist/avatar.jpg", "JPEG", quality=90, optimize=True)

    print(f"Generated clean og-preview.png ({os.path.getsize('public/og-preview.png')} bytes)")
    print(f"Generated clean og-preview.jpg ({os.path.getsize('public/og-preview.jpg')} bytes)")
    if os.path.exists("public/avatar.jpg"):
        print(f"Generated clean avatar.jpg ({os.path.getsize('public/avatar.jpg')} bytes)")

if __name__ == "__main__":
    create_og_image()
