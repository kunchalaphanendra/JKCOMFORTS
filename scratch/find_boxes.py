from PIL import Image
import os

img_path = r"C:\Users\kunch\.gemini\antigravity\brain\b59b6ec3-dde2-4838-90d1-8f1c1892568f\media__1779383654283.png"
img = Image.open(img_path)
width, height = img.size

# Convert image to RGB
rgb_img = img.convert('RGB')

# Let's find vertical projections of non-white pixels to see the columns,
# and horizontal projections to see the rows.
# Or, scan for the blue-ish border.
# Let's print out rows and columns of boxes.
# Since it's a fixed grid, let's estimate first:
# We have 7 columns and 6 rows.
# Row 1 start: around y = 120 (since there is a banner on top)
# Row 6 end: around y = 490
# Let's scan every pixel and group connected components of borders.

# A simple bounding box finder:
# Scan left-to-right, top-to-bottom for border color:
# Let's check for pixels that have blue-ish color, e.g. R < 100, G > 140, B > 200 (for the blue border).
# Or just scan for any pixel that is not white (R < 250 or G < 250 or B < 250) and group them.

visited = set()
boxes = []

for y in range(110, height - 10):
    for x in range(10, width - 10):
        if (x, y) in visited:
            continue
        
        # Check if this pixel is part of a box border
        r, g, b = rgb_img.getpixel((x, y))
        # Blue border typically has high blue and lower red.
        # Let's check if it's the blue border: 0 < r < 200, 100 < g < 220, 180 < b <= 255
        is_border = (r < 220 and g > 120 and b > 180 and b > r + 30)
        
        if is_border:
            # We found a top-left corner of a box!
            # Let's trace the width and height of the box by walking right and down.
            bx = x
            by = y
            
            # Walk right to find width
            bw = 0
            while bx + bw < width:
                pr, pg, pb = rgb_img.getpixel((bx + bw, by))
                if not (pr < 220 and pg > 120 and pb > 180):
                    break
                bw += 1
                
            # Walk down to find height
            bh = 0
            while by + bh < height:
                pr, pg, pb = rgb_img.getpixel((bx, by + bh))
                if not (pr < 220 and pg > 120 and pb > 180):
                    break
                bh += 1
                
            # Let's filter out very small noise
            if bw > 50 and bh > 30:
                # Add box (x, y, w, h)
                boxes.append((bx, by, bw, bh))
                # Mark all pixels inside this box as visited to avoid double counting
                for dy in range(bh):
                    for dx in range(bw):
                        visited.add((bx + dx, by + dy))

print(f"Found {len(boxes)} boxes via border trace:")
for idx, box in enumerate(boxes):
    print(f"Box {idx+1}: {box}")
