from PIL import Image
import os

img_path = r"C:\Users\kunch\.gemini\antigravity\brain\b59b6ec3-dde2-4838-90d1-8f1c1892568f\media__1779383654283.png"
img = Image.open(img_path)
width, height = img.size

# Output directory
output_dir = r"c:\JKCOMFORTS(PREMIUM)\public\logos"
os.makedirs(output_dir, exist_ok=True)

# Grid layout parameters
col_start_x = 192
row_start_y = 126
col_step = 88.33  # calculated step
row_step = 61.0   # calculated step
box_w = 77
box_h = 47

# 38 clients mapped by (row, col)
GRID_MAP = {
    # Row 0
    (0, 0): "pratyusha",
    (0, 1): "varsity",
    (0, 2): "foodbazaar",
    (0, 3): "reliancefresh",
    (0, 4): "bommarillu",
    (0, 5): "accenture",
    (0, 6): "hdfcbank",
    # Row 1
    (1, 0): "lahari",
    (1, 1): "chaitanya",
    (1, 2): "hdbfinance",
    (1, 3): "publicschool",
    (1, 4): "icicibank",
    (1, 5): "sureshtextiles",
    (1, 6): "nissan",
    # Row 2
    (2, 0): "nclgroup",
    (2, 1): "unisys",
    (2, 2): "invecas",
    (2, 3): "apollo",
    (2, 4): "mythri",
    (2, 5): "thumby",
    (2, 6): "sanzyme",
    # Row 3
    (3, 0): "eamobile",
    (3, 1): "eprocure",
    (3, 2): "axisbank",
    (3, 3): "amazon",
    (3, 4): "govtemblem",
    (3, 5): "hyundai",
    (3, 6): "mmtc",
    # Row 4
    (4, 0): "varunmotors",
    (4, 1): "lic",
    (4, 2): "kfc",
    (4, 3): "macconstruct",
    (4, 4): "idbibank",
    (4, 5): "adityabirla",
    (4, 6): "lodha",
    # Row 5
    (5, 0): "vasaneyecare",
    (5, 1): "indiacements",
    (5, 2): "more"
}

def make_transparent(cropped_img):
    # Convert image to RGBA
    rgba = cropped_img.convert("RGBA")
    datas = rgba.getdata()
    
    newData = []
    for item in datas:
        # If pixel is white or very close to white, make it transparent
        # In the logo card, the background is white (255, 255, 255)
        # We also want to exclude the blue border of the card itself.
        # Blue border typically has: r < 150, g > 150, b > 200
        r, g, b, a = item
        
        # Check for white background
        if r > 240 and g > 240 and b > 240:
            newData.append((255, 255, 255, 0))
        # Check for blue border line (let's remove it)
        elif r < 180 and g > 130 and b > 180:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    rgba.putdata(newData)
    return rgba

print("Cropping and processing all 38 logos...")
cropped_count = 0

for (r, c), brand_id in GRID_MAP.items():
    # Calculate box coordinates
    x = int(col_start_x + c * col_step)
    y = int(row_start_y + r * row_step)
    
    # Crop slightly inside (inset 1px) to avoid outer black/blue borders
    crop_box = (x + 1, y + 1, x + box_w - 1, y + box_h - 1)
    cropped = img.crop(crop_box)
    
    # Process transparency
    processed = make_transparent(cropped)
    
    # Save image
    output_path = os.path.join(output_dir, f"{brand_id}.png")
    processed.save(output_path, "PNG")
    cropped_count += 1
    print(f"Cropped and saved: {brand_id}.png")

print(f"Successfully processed {cropped_count} brand logos!")
