from PIL import Image
import os

logo_dir = r"c:\JKCOMFORTS(PREMIUM)\public\logos"

print("Trimming transparent padding from all logos...")
trimmed_count = 0

for filename in os.listdir(logo_dir):
    if filename.endswith(".png"):
        filepath = os.path.join(logo_dir, filename)
        img = Image.open(filepath)
        
        # getbbox returns bounding box of non-zero pixels
        bbox = img.getbbox()
        if bbox:
            # Crop to the bounding box
            trimmed = img.crop(bbox)
            
            # Let's add a tiny 2px transparent padding around it so it doesn't touch the very edges of the image file
            w, h = trimmed.size
            padded = Image.new("RGBA", (w + 4, h + 4), (0, 0, 0, 0))
            padded.paste(trimmed, (2, 2))
            
            padded.save(filepath, "PNG")
            trimmed_count += 1
            print(f"Trimmed: {filename} (new size: {w}x{h})")
        else:
            print(f"Skipped (empty): {filename}")

print(f"Successfully trimmed {trimmed_count} logos!")
