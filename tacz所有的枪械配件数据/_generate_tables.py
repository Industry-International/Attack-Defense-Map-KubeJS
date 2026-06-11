#!/usr/bin/env python3
"""Generate markdown tables for TACZ guns and attachments (with images)"""
import json, os, sys, shutil, zipfile, re

out_dir = r"d:/WDSJ/我的世界/.minecraft/versions/1.21.1-NeoForge_21.1.228航空学攻防战-9/kubejs/tacz所有的枪械配件数据"
tacz_base = r"d:/WDSJ/我的世界/.minecraft/versions/1.21.1-NeoForge_21.1.228航空学攻防战-9/tacz"
images_dir = os.path.join(out_dir, 'images')

def load_raw(name):
    with open(os.path.join(out_dir, f'_raw_{name}.json'), 'r', encoding='utf-8') as f:
        return json.load(f)

def type_to_cn(t):
    m = {'rifle': '步枪', 'pistol': '手枪', 'smg': '冲锋枪',
         'shotgun': '霰弹枪', 'sniper': '狙击枪', 'mg': '机枪',
         'rpg': '重型武器', 'unknown': '未知'}
    return m.get(t, t)

def slot_to_cn(s):
    m = {'scope': '瞄具', 'muzzle': '枪口', 'stock': '枪托',
         'grip': '握把', 'laser': '激光', 'extended_mag': '扩容弹匣'}
    return m.get(s, s)

def copy_images():
    """Copy slot/HUD textures into images/ directory organized by pack"""
    os.makedirs(images_dir, exist_ok=True)
    copied = {'guns': 0, 'attachments': 0}

    # 1. TACZ Default - gun slot textures
    tacz_slot = os.path.join(tacz_base, 'tacz_default_gun/assets/tacz/textures/gun/slot')
    if os.path.exists(tacz_slot):
        for f in os.listdir(tacz_slot):
            if f.endswith('.png'):
                dst = os.path.join(images_dir, 'tacz_default_gun', 'guns', f)
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                shutil.copy2(os.path.join(tacz_slot, f), dst)
                copied['guns'] += 1

    # 2. TACZ Default - attachment slot textures
    tacz_att_slot = os.path.join(tacz_base, 'tacz_default_gun/assets/tacz/textures/attachment/slot')
    if os.path.exists(tacz_att_slot):
        for f in os.listdir(tacz_att_slot):
            if f.endswith('.png'):
                dst = os.path.join(images_dir, 'tacz_default_gun', 'attachments', f)
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                shutil.copy2(os.path.join(tacz_att_slot, f), dst)
                copied['attachments'] += 1

    # 3. Lavender - gun HUD textures (no slot textures available)
    lav_hud = os.path.join(tacz_base, 'lavender_converted/assets/lavender/textures/gun/hud')
    if os.path.exists(lav_hud):
        for f in os.listdir(lav_hud):
            if f.endswith('.png'):
                dst = os.path.join(images_dir, 'lavender_converted', 'guns', f)
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                shutil.copy2(os.path.join(lav_hud, f), dst)
                copied['guns'] += 1

    # 4. Lavender - attachment slot textures
    lav_att_slot = os.path.join(tacz_base, 'lavender_converted/assets/lavender/textures/attachment/slot')
    if os.path.exists(lav_att_slot):
        for f in os.listdir(lav_att_slot):
            if f.endswith('.png'):
                dst = os.path.join(images_dir, 'lavender_converted', 'attachments', f)
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                shutil.copy2(os.path.join(lav_att_slot, f), dst)
                copied['attachments'] += 1

    # 5. Apocalypse - gun slot + attachment slot textures (from zip)
    zip_path = os.path.join(tacz_base, 'Apocalypse_v1.1.7_G.zip')
    if os.path.exists(zip_path):
        with zipfile.ZipFile(zip_path, 'r') as z:
            for name in z.namelist():
                if name.endswith('.png'):
                    if '/gun/slot/' in name:
                        dst = os.path.join(images_dir, 'apocalypse', 'guns', os.path.basename(name))
                        os.makedirs(os.path.dirname(dst), exist_ok=True)
                        with open(dst, 'wb') as f:
                            f.write(z.read(name))
                        copied['guns'] += 1
                    elif '/attachment/slot/' in name:
                        dst = os.path.join(images_dir, 'apocalypse', 'attachments', os.path.basename(name))
                        os.makedirs(os.path.dirname(dst), exist_ok=True)
                        with open(dst, 'wb') as f:
                            f.write(z.read(name))
                        copied['attachments'] += 1

    print(f"  Copied {copied['guns']} gun images, {copied['attachments']} attachment images")
    return copied

def find_gun_image(gun_id, pack_key):
    """Find the image path for a gun, return relative markdown path"""
    base = os.path.join(images_dir, pack_key, 'guns')
    if not os.path.exists(base):
        return None

    # Known special filenames
    tacz_rename = {
        'b93r': ['b93r_slot.png'],
        'spr15hb': ['spr15hb_slot.png'],
        'springfield1873': ['springfield1873_slot.png'],
        'timeless50': ['timeless50_slot.png'],
    }
    if pack_key == 'tacz_default_gun' and gun_id in tacz_rename:
        for fn in tacz_rename[gun_id]:
            if os.path.exists(os.path.join(base, fn)):
                return f"./images/{pack_key}/guns/{fn}"

    patterns = [f"{gun_id}.png", f"{gun_id}_slot.png", f"{gun_id}_hud.png"]
    for p in patterns:
        if os.path.exists(os.path.join(base, p)):
            return f"./images/{pack_key}/guns/{p}"

    return None

def find_attachment_image(att_id, pack_key):
    """Find the image path for an attachment"""
    base = os.path.join(images_dir, pack_key, 'attachments')
    if not os.path.exists(base):
        return None
    patterns = [f"{att_id}.png", f"{att_id}_slot.png"]
    for p in patterns:
        if os.path.exists(os.path.join(base, p)):
            return f"./images/{pack_key}/attachments/{p}"
    return None

def img_tag(path, alt, size=32):
    if path:
        full = os.path.join(out_dir, path)
        if os.path.exists(full):
            return f'<img src="{path}" alt="{alt}" width="{size}">'
    return ''

def generate_pack_table(pack_key, pack_name, namespace, file_suffix):
    data = load_raw(pack_key)
    guns = data['guns']
    atts = data['attachments']

    # Gun table
    gun_lines = []
    for g in guns:
        slots_cn = ', '.join([slot_to_cn(s) for s in g['allow_attachment_types']]) if g['allow_attachment_types'] else '无'
        ip = find_gun_image(g['id'], pack_key)
        ih = img_tag(ip, g['name_cn'])
        gun_lines.append(f"| {ih} | `{namespace}:{g['id']}` | {g['name_cn']} | {type_to_cn(g['type'])} | {slots_cn} |")

    # Attachment table
    att_lines = []
    for a in atts:
        compatible_types = []
        for g in guns:
            if a['type'] in g['allow_attachment_types']:
                ct = type_to_cn(g['type'])
                if ct not in compatible_types:
                    compatible_types.append(ct)
        comp_str = ', '.join(compatible_types) if compatible_types else '（视具体枪械）'
        ip = find_attachment_image(a['id'], pack_key)
        ih = img_tag(ip, a['name_cn'])
        att_lines.append(f"| {ih} | `{namespace}:{a['id']}` | {a['name_cn']} | {slot_to_cn(a['type'])} | {comp_str} |")

    md = f"""# {pack_name}

## 🔫 枪械列表

| 图片 | NBT GunId (GunId标签) | 枪械名称 | 枪械类型 | 支持的配件槽位 |
|---|---|---|---|---|
{chr(10).join(gun_lines)}

## 🔧 配件列表

| 图片 | 配件ID | 配件名称 | 配件类型 | 适配的枪械类型 |
|---|---|---|---|---|
{chr(10).join(att_lines)}
"""
    with open(os.path.join(out_dir, file_suffix), 'w', encoding='utf-8') as f:
        f.write(md)
    print(f"  ✓ {file_suffix}")

def generate_summary():
    all_guns = []
    all_packs = [
        ('tacz_default_gun', 'TACZ默认枪包', 'tacz'),
        ('lavender_converted', '薰衣草枪包', 'lavender'),
        ('apocalypse', '启示录枪包', 'bf1')
    ]
    for pack_key, pack_name, ns in all_packs:
        data = load_raw(pack_key)
        for g in data['guns']:
            ip = find_gun_image(g['id'], pack_key)
            ih = img_tag(ip, g['name_cn'])
            all_guns.append({
                'pack': pack_name, 'img': ih, 'full_id': g['full_id'],
                'name_cn': g['name_cn'], 'type': g['type'],
                'allow_attachment_types': g['allow_attachment_types']
            })

    lines = []
    for g in all_guns:
        sc = ', '.join([slot_to_cn(s) for s in g['allow_attachment_types']]) if g['allow_attachment_types'] else '无'
        lines.append(f"| {g['pack']} | {g['img']} | `{g['full_id']}` | {g['name_cn']} | {type_to_cn(g['type'])} | {sc} |")

    md = f"""# 所有枪包综合概览

## 🔫 全部枪械总表

| 所属枪包 | 图片 | NBT GunId (GunId标签) | 枪械名称 | 枪械类型 | 支持的配件槽位 |
|---|---|---|---|---|---|
{chr(10).join(lines)}

---

### 配件槽位说明

| 槽位类型 | 说明 | 可安装的配件类别 |
|---|---|---|
| scope | 瞄具 | 红点、全息、倍镜、光学瞄具等 |
| muzzle | 枪口 | 消音器、制退器、补偿器、刺刀等 |
| stock | 枪托 | 各类枪托、肩托等 |
| grip | 握把 | 前握把、角握把、bipod脚架等 |
| laser | 激光 | 激光指示器 |
| extended_mag | 扩容弹匣 | 各类扩容弹匣/供弹具 |

> 图片资源来自各枪包中的 slot/HUD 纹理，位于 `./images/` 目录下。
> 如某些条目没有图片，表示该枪包未提供对应的图标纹理。
"""
    with open(os.path.join(out_dir, 'README.md'), 'w', encoding='utf-8') as f:
        f.write(md)
    print("  ✓ README.md")

def main():
    print("Step 1: Copying images...")
    copy_images()

    print("\nStep 2: Generating pack tables...")
    generate_pack_table('tacz_default_gun', 'TACZ 默认枪包 (tacz_default_gun)', 'tacz', '00_TACZ默认枪包.md')
    generate_pack_table('lavender_converted', '薰衣草枪包 (lavender_converted) — 一战主题', 'lavender', '01_薰衣草枪包_lavender.md')
    generate_pack_table('apocalypse', '启示录枪包 (Apocalypse v1.1.7) — BF1 一战/二战主题', 'bf1', '02_启示录枪包_Apocalypse.md')

    print("\nStep 3: Generating summary...")
    generate_summary()

    print("\n✅ 所有表格已生成!")

if __name__ == '__main__':
    main()
