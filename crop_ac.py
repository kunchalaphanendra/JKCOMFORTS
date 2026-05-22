from PIL import Image
import os

def crop_fixed(img_path, output_path):
    img = Image.open(img_path)
    # The AC unit is centered. Let's crop it to remove empty space at top/bottom and sides
    # Image size is 1024x1024.
    # We crop: xmin=60, ymin=250, xmax=964, ymax=690
    cropped = img.crop((60, 250, 964, 690))
    cropped.save(output_path, "PNG")
    print(f"Fixed Cropped {img_path} from {img.size} to {cropped.size} and saved to {output_path}")

if __name__ == "__main__":
    public_dir = r"c:\JKCOMFORTS(PREMIUM)\public"
    crop_fixed(os.path.join(public_dir, "carrier_split_cutout.png"), os.path.join(public_dir, "carrier_split_cutout.png"))
    crop_fixed(os.path.join(public_dir, "toshiba_split_cutout.png"), os.path.join(public_dir, "toshiba_split_cutout.png"))
