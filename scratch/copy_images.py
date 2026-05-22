import shutil
import os

src_dir = r"C:\Users\kunch\.gemini\antigravity\brain\b59b6ec3-dde2-4838-90d1-8f1c1892568f"
dest_dir = r"c:\JKCOMFORTS(PREMIUM)\public"

mapping = {
    "hvac_split_indoor_1779386840968.png": "hvac_split_indoor.png",
    "hvac_cassette_ceiling_1779386863012.png": "hvac_cassette_ceiling.png",
    "hvac_ducted_unit_1779386883110.png": "hvac_ducted_unit.png",
    "hvac_vrf_outdoor_1779386904798.png": "hvac_vrf_outdoor.png"
}

for src_name, dest_name in mapping.items():
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy(src_path, dest_path)
        print(f"Copied {src_name} to {dest_name}")
    else:
        print(f"File not found: {src_path}")
