import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_og_image():
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), color="#0c0d12")
    draw = ImageDraw.Draw(img)

    # Ambient glow gradients
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([80, -100, 700, 450], fill=(79, 70, 229, 65))
    glow_draw.ellipse([650, 250, 1250, 750], fill=(99, 102, 241, 45))
    glow_draw.ellipse([300, 300, 900, 800], fill=(16, 185, 129, 30))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    img.paste(glow, (0, 0), glow)
    draw = ImageDraw.Draw(img)

    # Outer subtle border
    draw.rounded_rectangle([20, 20, W - 20, H - 20], radius=28, outline="#26273b", width=2)
    draw.rounded_rectangle([22, 22, W - 22, H - 22], radius=26, outline="#161726", width=1)

    # Fonts
    font_bold = "C:/Windows/Fonts/segoeuib.ttf"
    font_reg = "C:/Windows/Fonts/segoeui.ttf"
    font_mono = "C:/Windows/Fonts/consola.ttf" if os.path.exists("C:/Windows/Fonts/consola.ttf") else font_reg

    f_badge = ImageFont.truetype(font_mono, 18)
    f_title = ImageFont.truetype(font_bold, 56)
    f_sub = ImageFont.truetype(font_reg, 26)
    f_pill = ImageFont.truetype(font_bold, 20)
    f_foot = ImageFont.truetype(font_reg, 19)
    f_url = ImageFont.truetype(font_bold, 20)

    # Top Badge
    badge_text = "PORTFOLIO  •  SOFTWARE & AI SYSTEMS ENGINEER"
    bx, by = 60, 60
    bw = 530
    draw.rounded_rectangle([bx, by, bx + bw, by + 36], radius=18, fill="#181a29", outline="#3730a3", width=1)
    # Green pulse dot
    draw.ellipse([bx + 16, by + 12, bx + 28, by + 24], fill="#10b981")
    draw.text((bx + 38, by + 7), badge_text, font=f_badge, fill="#c7d2fe")

    # Name Title
    draw.text((60, 125), "Meda Anilkumar", font=f_title, fill="#ffffff")

    # Headline
    draw.text((60, 205), "Full-Stack AI Engineer & Researcher", font=f_sub, fill="#a5b4fc")
    draw.text((60, 245), "Specializing in Applied AI, Real-Time Systems & Interpretability", font=f_sub, fill="#9ca3af")

    # Highlight Cards
    pills = [
        ("🚀 Spora", "200+ Active Creators · Founder"),
        ("📄 SCBI Research", "Springer Accepted · LLM Interpretability"),
        ("🏆 REVA Hackathon", "2nd Prize Winner · 50+ Teams"),
    ]

    py = 315
    for title, desc in pills:
        draw.rounded_rectangle([60, py, 680, py + 56], radius=14, fill="#13141f", outline="#25273d", width=1)
        draw.text((78, py + 15), title, font=f_pill, fill="#e0e7ff")
        draw.text((280, py + 16), "·  " + desc, font=f_foot, fill="#94a3b8")
        py += 68

    # Bottom Footer
    draw.text((60, 545), "📍 Bengaluru, India   •   Open for SWE & AI Roles", font=f_foot, fill="#64748b")
    draw.text((480, 544), "anilkumara9.github.io/anil", font=f_url, fill="#818cf8")

    # Load and process Anil's photo on the right
    anil_path = "public/anil.png"
    if os.path.exists(anil_path):
        portrait = Image.open(anil_path).convert("RGBA")
        pw, ph = 400, 480
        portrait = portrait.resize((pw, ph), Image.Resampling.LANCZOS)

        # Rounded mask for portrait
        mask = Image.new("L", (pw, ph), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.rounded_rectangle([0, 0, pw, ph], radius=32, fill=255)

        # Portrait position
        px, py_pos = 740, 75
        
        # Soft shadow behind portrait
        shadow = Image.new("RGBA", (pw + 40, ph + 40), (0, 0, 0, 0))
        shadow_draw = ImageDraw.Draw(shadow)
        shadow_draw.rounded_rectangle([10, 10, pw + 30, ph + 30], radius=36, fill=(0, 0, 0, 120))
        shadow = shadow.filter(ImageFilter.GaussianBlur(15))
        img.paste(shadow, (px - 20, py_pos - 10), shadow)

        # Border box
        draw.rounded_rectangle([px - 3, py_pos - 3, px + pw + 3, py_pos + ph + 3], radius=35, outline="#4338ca", width=2)
        img.paste(portrait, (px, py_pos), mask)

        # Bottom badge overlay on portrait
        pb_w = 260
        pb_x = px + (pw - pb_w) // 2
        pb_y = py_pos + ph - 48
        draw.rounded_rectangle([pb_x, pb_y, pb_x + pb_w, pb_y + 36], radius=18, fill="#0b0c16", outline="#312e81", width=1)
        draw.ellipse([pb_x + 14, pb_y + 12, pb_x + 24, pb_y + 22], fill="#10b981")
        draw.text((pb_x + 34, pb_y + 7), "Actively Interviewing", font=f_badge, fill="#e2e8f0")

    # Save to public and dist
    os.makedirs("public", exist_ok=True)
    os.makedirs("dist", exist_ok=True)

    # Save highly compressed JPG version (~115KB) - Universal support
    img.save("public/og-preview.jpg", "JPEG", quality=88, optimize=True)
    img.save("dist/og-preview.jpg", "JPEG", quality=88, optimize=True)

    # Convert to 8-bit adaptive palette for super compact PNG (~160KB)
    img_quant = img.convert('P', palette=Image.Palette.ADAPTIVE, colors=256)
    img_quant.save("public/og-preview.png", "PNG", optimize=True)
    img_quant.save("dist/og-preview.png", "PNG", optimize=True)

    # Create square avatar for WhatsApp / iMessage fallback
    if os.path.exists(anil_path):
        sq = Image.open(anil_path).convert("RGB")
        w_sq, h_sq = sq.size
        min_dim = min(w_sq, h_sq)
        left = (w_sq - min_dim) // 2
        top = 0
        sq_cropped = sq.crop((left, top, left + min_dim, top + min_dim))
        sq_cropped = sq_cropped.resize((400, 400), Image.Resampling.LANCZOS)
        sq_cropped.save("public/avatar.jpg", "JPEG", quality=88, optimize=True)
        sq_cropped.save("dist/avatar.jpg", "JPEG", quality=88, optimize=True)

    print(f"Generated: og-preview.png ({os.path.getsize('public/og-preview.png')} bytes)")
    print(f"Generated: og-preview.jpg ({os.path.getsize('public/og-preview.jpg')} bytes)")
    if os.path.exists("public/avatar.jpg"):
        print(f"Generated: avatar.jpg ({os.path.getsize('public/avatar.jpg')} bytes)")

if __name__ == "__main__":
    create_og_image()
