import os
from PIL import Image
import numpy as np

def make_transparent_cutout(src_path, dest_path, crop_threshold):
    img = Image.open(src_path).convert("RGBA")
    data = np.array(img)
    
    r, g, b, a = data[:,:,0].astype(float), data[:,:,1].astype(float), data[:,:,2].astype(float), data[:,:,3].astype(float)
    gray = 0.2989 * r + 0.5870 * g + 0.1140 * b
    
    # Exclude outer edges
    h, w = gray.shape
    bx, by = 20, 20
    inner_gray = gray[by:h-by, bx:w-bx]
    
    mask = inner_gray < crop_threshold
    rows = np.any(mask, axis=1)
    cols = np.any(mask, axis=0)
    
    if np.any(rows) and np.any(cols):
        ymin, ymax = np.where(rows)[0][[0, -1]] + by
        xmin, xmax = np.where(cols)[0][[0, -1]] + bx
        
        # Padding
        padding_y = 15
        padding_x = 15
        ymin = max(0, ymin - padding_y)
        ymax = min(h, ymax + padding_y)
        xmin = max(0, xmin - padding_x)
        xmax = min(w, xmax + padding_x)
        
        cropped_img = img.crop((xmin, ymin, xmax, ymax))
    else:
        cropped_img = img.crop((100, 100, w-100, h-100))
        
    # Now, let's make the background of cropped_img transparent!
    # Convert cropped image to numpy array
    c_data = np.array(cropped_img)
    cr, cg, cb, ca = c_data[:,:,0].astype(float), c_data[:,:,1].astype(float), c_data[:,:,2].astype(float), c_data[:,:,3].astype(float)
    c_gray = 0.2989 * cr + 0.5870 * cg + 0.1140 * cb
    
    # Alpha transition:
    # Any pixel with gray > 248 becomes transparent (alpha = 0)
    # Any pixel with gray < 225 remains fully opaque (alpha = 255)
    # Linear interpolation in between for smooth edges and soft shadows
    new_alpha = np.ones_like(c_gray) * 255.0
    
    # Where gray > 225
    mask_transition = c_gray > 225
    new_alpha[mask_transition] = 255.0 * (1.0 - (c_gray[mask_transition] - 225.0) / (248.0 - 225.0))
    new_alpha = np.clip(new_alpha, 0.0, 255.0).astype(np.uint8)
    
    c_data[:,:,3] = new_alpha
    transparent_cropped = Image.fromarray(c_data, "RGBA")
    
    # Now, let's create a standard transparent canvas of size 904x440
    canvas_w, canvas_h = 904, 440
    canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    
    # Scale product to occupy 82% of canvas height/width
    max_fit_w = int(canvas_w * 0.82)
    max_fit_h = int(canvas_h * 0.82)
    
    crop_w, crop_h = transparent_cropped.size
    scale = min(max_fit_w / crop_w, max_fit_h / crop_h)
    
    new_w = int(crop_w * scale)
    new_h = int(crop_h * scale)
    
    resized_ac = transparent_cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Paste centered
    paste_x = int((canvas_w - new_w) / 2)
    paste_y = int((canvas_h - new_h) / 2)
    
    canvas.paste(resized_ac, (paste_x, paste_y), resized_ac)
    canvas.save(dest_path, "PNG")
    print(f"Generated transparent: {os.path.basename(dest_path)}")

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
            make_transparent_cutout(src_path, dest_path, threshold)
        else:
            print(f"Warning: Source not found: {src_path}")
