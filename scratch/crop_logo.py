import math
from PIL import Image

def process_logo():
    # Load original uploaded logo
    img = Image.open(r"C:\Users\kunch\.gemini\antigravity\brain\f784e442-c01c-489c-bd35-cead224cc9e4\media__1779427975249.png").convert("RGBA")
    width, height = img.size

    # 1. Find boundaries of the non-white circular logo
    # We look for pixels that are not close to pure white (threshold = 245)
    threshold = 245
    left, right, top, bottom = width, 0, height, 0

    for y in range(height):
        for x in range(width):
            r, g, b, a = img.getpixel((x, y))
            # If pixel is not white
            if r < threshold or g < threshold or b < threshold:
                if x < left: left = x
                if x > right: right = x
                if y < top: top = y
                if y > bottom: bottom = y

    print(f"Detected bounds: Left={left}, Right={right}, Top={top}, Bottom={bottom}")

    # Calculate center and radius
    center_x = (left + right) / 2
    center_y = (top + bottom) / 2
    radius_x = (right - left) / 2
    radius_y = (bottom - top) / 2
    radius = (radius_x + radius_y) / 2

    print(f"Center: ({center_x}, {center_y}), Radius: {radius}")

    # 2. Create a square transparent image
    pad = 10
    size = int(2 * radius + 2 * pad)
    output = Image.new("RGBA", (size, size), (0, 0, 0, 0))

    # Center of output image
    out_center = size / 2

    for oy in range(size):
        for ox in range(size):
            # Distance from output center
            dx = ox - out_center
            dy = oy - out_center
            dist = math.sqrt(dx*dx + dy*dy)

            if dist <= radius + 2:
                # Map back to original image
                orig_x = int(center_x + dx)
                orig_y = int(center_y + dy)

                if 0 <= orig_x < width and 0 <= orig_y < height:
                    r, g, b, a = img.getpixel((orig_x, orig_y))
                    
                    # Anti-aliasing at the very outer edge of the circle (smooth alpha transition)
                    if dist > radius - 1:
                        # Fade alpha from 255 to 0 between (radius - 1) and (radius + 2)
                        alpha_factor = 1.0 - (dist - (radius - 1)) / 3.0
                        alpha_factor = max(0.0, min(1.0, alpha_factor))
                        a = int(a * alpha_factor)
                        
                    # Also make white background pixels inside this tiny transition zone transparent
                    if r > threshold and g > threshold and b > threshold:
                        if dist > radius - 1.5:
                            a = 0

                    output.putpixel((ox, oy), (r, g, b, a))

    # Save to public folder
    output.save("public/logo_transparent.png", "PNG")
    print("Successfully processed and saved public/logo_transparent.png")

if __name__ == "__main__":
    process_logo()
