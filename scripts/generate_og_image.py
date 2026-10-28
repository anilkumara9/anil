import os
import shutil
from PIL import Image

def sync_link_preview():
    src = "public/link.png"
    if not os.path.exists(src):
        print("Error: public/link.png does not exist")
        return

    im = Image.open(src)
    print(f"Loaded {src}: size={im.size}, mode={im.mode}")

    targets = [
        "public/og-preview-v3.png",
        "public/og-preview-v3.jpg",
        "public/og-preview-v2.png",
        "public/og-preview-v2.jpg",
        "public/og-preview.png",
        "public/og-preview.jpg",
        "dist/link.png",
        "dist/og-preview-v3.png",
        "dist/og-preview-v3.jpg",
        "dist/og-preview-v2.png",
        "dist/og-preview-v2.jpg",
        "dist/og-preview.png",
        "dist/og-preview.jpg",
    ]

    rgb_im = im.convert("RGB")

    for t in targets:
        os.makedirs(os.path.dirname(t), exist_ok=True)
        if t.endswith(".png"):
            im.save(t, "PNG", optimize=True)
        elif t.endswith(".jpg"):
            rgb_im.save(t, "JPEG", quality=95, optimize=True)
        print(f"Synced {t} ({os.path.getsize(t)} bytes)")

    print(f"Link preview sync complete using exact image public/link.png ({im.size[0]}x{im.size[1]})")

if __name__ == "__main__":
    sync_link_preview()
