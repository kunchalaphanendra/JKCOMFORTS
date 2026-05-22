import os
from PIL import Image, ImageDraw
import numpy as np

def create_radial_gradient_canvas(width, height):
    # Create a canvas with a radial gradient matching:
    # radial-gradient(circle at center, #ffffff 10%, #f3f6fa 70%, #eef1f6 100%)
    canvas = Image.new("RGBA", (width, height), (238, 241, 246, 255))
    draw = ImageDraw.Draw(canvas)
    
    cx, cy = width / 2, height / 2
    max_r = np.sqrt(cx**2 + cy**2)
    
    for r in range(int(max_r), 0, -1):
        ratio = r / max_r
        if ratio < 0.1:
            color = (255, 255, 255, 255)
        elif ratio < 0.7:
            t = (ratio - 0.1) / 0.6
            r_val = int(255 + (243 - 255) * t)
            g_val = int(255 + (246 - 255) * t)
            b_val = int(255 + (250 - 255) * t)
            color = (r_val, g_val, b_val, 255)
        else:
            t = (ratio - 0.7) / 0.3
            r_val = int(243 + (238 - 243) * t)
            g_val = int(246 + (241 - 246) * t)
            b_val = int(250 + (246 - 250) * t)
            color = (r_val, g_val, b_val, 255)
        
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color)
        
    return canvas

def process_product_image(src_path, dest_path, threshold):
    img = Image.open(src_path).convert("RGBA")
    data = np.array(img)
    
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    gray = 0.2989 * r + 0.5870 * g + 0.1140 * b
    
    # Exclude outer 2% edges to ignore border vignettes
    h, w = gray.shape
    bx = 20
    by = 20
    inner_gray = gray[by:h-by, bx:w-bx]
    
    mask = inner_gray < threshold
    rows = np.any(mask, axis=1)
    cols = np.any(mask, axis=0)
    
    if np.any(rows) and np.any(cols):
        ymin, ymax = np.where(rows)[0][[0, -1]] + by
        xmin, xmax = np.where(cols)[0][[0, -1]] + bx
        
        # Add padding to cropped product
        padding_y = 15
        padding_x = 15
        ymin = max(0, ymin - padding_y)
        ymax = min(h, ymax + padding_y)
        xmin = max(0, xmin - padding_x)
        xmax = min(w, xmax + padding_x)
        
        cropped = img.crop((xmin, ymin, xmax, ymax))
    else:
        print(f"Warning: Threshold {threshold} yielded no bounds for {src_path}. Using default crop.")
        cropped = img.crop((100, 100, w-100, h-100))
        
    # Standard output canvas sizing
    canvas_w, canvas_h = 904, 440
    canvas = create_radial_gradient_canvas(canvas_w, canvas_h)
    
    # Scale to occupy 82% of the height or width of the canvas
    max_fit_w = int(canvas_w * 0.82)
    max_fit_h = int(canvas_h * 0.82)
    
    crop_w, crop_h = cropped.size
    scale = min(max_fit_w / crop_w, max_fit_h / crop_h)
    
    new_w = int(crop_w * scale)
    new_h = int(crop_h * scale)
    
    resized_ac = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Paste centered
    paste_x = int((canvas_w - new_w) / 2)
    paste_y = int((canvas_h - new_h) / 2)
    
    canvas.paste(resized_ac, (paste_x, paste_y), resized_ac)
    canvas.save(dest_path, "PNG")
    print(f"Standardized {os.path.basename(src_path)} -> {os.path.basename(dest_path)} (Cropped size: {cropped.size}, Resized to {new_w}x{new_h})")

if __name__ == "__main__":
    public_dir = r"c:\JKCOMFORTS(PREMIUM)\public"
    brain_dir = r"C:\Users\kunch\.gemini\antigravity\brain\b59b6ec3-dde2-4838-90d1-8f1c1892568f"
    
    images_mapping = {
        "carrier_cassette_cutout_1779389405812.png": ("carrier_cassette_cutout.png", 165),
        "carrier_floor_cutout_1779389426700.png": ("carrier_floor_cutout.png", 160),
        "carrier_ducted_cutout_1779389450766.png": ("carrier_ducted_cutout.png", 165),
        "carrier_packaged_cutout_1779389471232.png": ("carrier_packaged_cutout.png", 165),
        "toshiba_console_cutout_1779389492590.png": ("toshiba_console_cutout.png", 165),
        "toshiba_cassette_cutout_1779389514540.png": ("toshiba_cassette_cutout.png", 165),
        "toshiba_ducted_cutout_1779389536303.png": ("toshiba_ducted_cutout.png", 165),
        "toshiba_vrf_cutout_1779389556561.png": ("toshiba_vrf_cutout.png", 165),
        "carrier_split_cutout_clean_1779388588611.png": ("carrier_split_cutout.png", 170),
        "toshiba_split_cutout_1779388555927.png": ("toshiba_split_cutout.png", 170)
    }
    
    for src_name, (dest_name, threshold) in images_mapping.items():
        src_path = os.path.join(brain_dir, src_name)
        dest_path = os.path.join(public_dir, dest_name)
        if os.path.exists(src_path):
            process_product_image(src_path, dest_path, threshold)
        else:
            print(f"Warning: Source not found: {src_path}")
