from PIL import Image

img_path = r"C:\Users\kunch\.gemini\antigravity\brain\b59b6ec3-dde2-4838-90d1-8f1c1892568f\media__1779383654283.png"
img = Image.open(img_path)
width, height = img.size
print(f"Image width: {width}, height: {height}")
