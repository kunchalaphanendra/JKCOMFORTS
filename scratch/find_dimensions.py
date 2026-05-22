from PIL import Image

img = Image.open(r"C:\Users\kunch\.gemini\antigravity\brain\f784e442-c01c-489c-bd35-cead224cc9e4\media__1779427975249.png")
width, height = img.size
print(f"Dimensions: {width}x{height}")
