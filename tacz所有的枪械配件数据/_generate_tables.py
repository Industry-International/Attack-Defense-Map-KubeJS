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

# Ammo name mappings (built from gunpack lang files)
AMMO_NAMES = {}
def build_ammo_names():
    """Build mapping from ammo ID to readable name"""
    # TACZ default ammo
    tacz_ammo = {
        'tacz:9mm': '9mm手枪弹', 'tacz:12g': '12号口径霰弹',
        'tacz:308': '.308步枪弹', 'tacz:30_06': '.30-06步枪弹',
        'tacz:338': '.338狙击弹', 'tacz:357mag': '.357马格南手枪弹',
        'tacz:40mm': '40mm榴弹', 'tacz:45acp': '.45手枪弹',
        'tacz:45_70': '45-70步枪弹', 'tacz:46x30': '4.6mm穿甲弹',
        'tacz:50ae': '.50 AE手枪弹', 'tacz:50bmg': '.50 BMG狙击弹',
        'tacz:545x39': '5.45x39mm步枪弹', 'tacz:556x45': '5.56x45mm步枪弹',
        'tacz:57x28': '5.7x28mm穿甲弹', 'tacz:58x42': '5.8mm步枪弹',
        'tacz:68x51fury': '6.8x51mm步枪弹', 'tacz:762x25': '7.62x25mm手枪弹',
        'tacz:762x39': '7.62x39mm步枪弹', 'tacz:762x54': '7.62x54mm步枪弹',
        'tacz:rpg_rocket': 'RPG-7火箭弹',
    }
    # Lavender ammo (from lang file inspection)
    lav_ammo = {
        'lavender:parabelum9mm': '9mm帕拉贝鲁姆',
        'lavender:british0x303': '.303英式步枪弹',
        'lavender:british0x455': '.455英式手枪弹',
        'lavender:british0x442': '.442英式手枪弹',
        'lavender:british0x577': '.577英式步枪弹',
        'lavender:mauser7.92x57': '7.92x57mm毛瑟弹',
        'lavender:russia7.62x54r': '7.62x54mmR步枪弹',
        'lavender:russia7.62x38r': '7.62x38mmR手枪弹',
        'lavender:lebel8x50': '8x50mm勒贝尔弹',
        'lavender:8x56mannlicher': '8x56mm曼利夏弹',
        'lavender:8x50rmannlicher': '8x50mm曼利夏弹',
        'lavender:steyr7.63': '7.63x25mm斯太尔手枪弹',
        'lavender:steyr9x23': '9x23mm斯太尔手枪弹',
        'lavender:luger7.65': '7.65mm帕拉贝鲁姆',
        'lavender:luger9x18': '9x18mm帕拉贝鲁姆',
        'lavender:borchardt7.65': '7.65mm博查特弹',
        'lavender:browning7.65': '7.65mm勃朗宁弹',
        'lavender:griffin9x19': '9x19mm格里芬弹',
        'lavender:revolver11mm': '11mm转轮手枪弹',
        'lavender:revolver10.35': '10.35mm转轮手枪弹',
        'lavender:revolver8mm': '8mm转轮手枪弹',
        'lavender:revolver10.6x25': '10.6x25mm转轮手枪弹',
        'lavender:10.4x47mm': '10.4x47mm步枪弹',
        'lavender:11.3x36mm': '11.3x36mm步枪弹',
        'lavender:12ga': '12号霰弹',
        'lavender:13.2mm': '13.2mm反坦克弹',
        'lavender:6.52x5mannlicher': '6.5x52mm曼利夏步枪弹',
        'lavender:40mmap': '40mm穿甲榴弹',
        'lavender:ribeyrolles8x35': '8x35mm利贝罗勒弹',
        'lavender:spring7.62x63': '7.62x63mm春田步枪弹',
        'lavender:signal_ammo': '信号弹',
        'lavender:oil': '润滑油',
        'lavender:physical_strength': '体力',
    }
    # Apocalypse ammo
    bf1_ammo = {
        'bf1:792x57': '7.92x57mm毛瑟弹',
        'bf1:792x57semi': '7.92x57mm半自动弹',
        'bf1:303': '.303英式步枪弹',
        'bf1:450': '.450马提尼弹',
        'bf1:44sw': '.44 S&W手枪弹',
        'bf1:132x92': '13.2x92mm反坦克弹',
        'bf1:fuel': '燃料',
        'bf1:hvp': 'HVP高速弹',
        'bf1:65x50': '6.5x50mm步枪弹',
        'bf1:medkit': '医疗包',
    }
    AMMO_NAMES.update(tacz_ammo)
    AMMO_NAMES.update(lav_ammo)
    AMMO_NAMES.update(bf1_ammo)

def ammo_to_name(ammo_id):
    """Convert ammo ID like 'tacz:762x39' to readable name"""
    if not ammo_id:
        return '无'
    if ammo_id in AMMO_NAMES:
        return AMMO_NAMES[ammo_id]
    # Fallback: extract the last part
    parts = ammo_id.split(':')
    if len(parts) > 1:
        return parts[1]
    return ammo_id

build_ammo_names()

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
        ammo_name = ammo_to_name(g.get('ammo', ''))
        ip = find_gun_image(g['id'], pack_key)
        ih = img_tag(ip, g['name_cn'])
        gun_lines.append(f"| {ih} | `{namespace}:{g['id']}` | {g['name_cn']} | {type_to_cn(g['type'])} | `{g.get('ammo', '')}` | {ammo_name} | {slots_cn} |")

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

| 图片 | NBT GunId (GunId标签) | 枪械名称 | 枪械类型 | 弹药ID | 弹药名称 | 支持的配件槽位 |
|---|---|---|---|---|---|---|
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
                'ammo': g.get('ammo', ''),
                'allow_attachment_types': g['allow_attachment_types']
            })

    lines = []
    for g in all_guns:
        sc = ', '.join([slot_to_cn(s) for s in g['allow_attachment_types']]) if g['allow_attachment_types'] else '无'
        ammo_name = ammo_to_name(g.get('ammo', ''))
        lines.append(f"| {g['pack']} | {g['img']} | `{g['full_id']}` | {g['name_cn']} | {type_to_cn(g['type'])} | `{g.get('ammo', '')}` | {ammo_name} | {sc} |")

    md = f"""# 所有枪包综合概览

## 🔫 全部枪械总表

| 所属枪包 | 图片 | NBT GunId (GunId标签) | 枪械名称 | 枪械类型 | 弹药ID | 弹药名称 | 支持的配件槽位 |
|---|---|---|---|---|---|---|---|
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

def generate_vscode_config():
    """Generate VS Code config files (jsconfig.json + types/tacz.d.ts)"""
    kubejs_dir = r"d:/WDSJ/我的世界/.minecraft/versions/1.21.1-NeoForge_21.1.228航空学攻防战-9/kubejs"
    
    # === types/tacz.d.ts → 放到 ./tacz所有的枪械配件数据/types/ 下 ===
    types_dir = os.path.join(out_dir, 'types')
    os.makedirs(types_dir, exist_ok=True)
    tacz_types_rel = './tacz所有的枪械配件数据/types'
    
    # === jsconfig.json ===
    jsconfig = {
        "compilerOptions": {
            "baseUrl": ".",
            "target": "ES6",
            "module": "preserve",
            "checkJs": False,
            "paths": {
                "@package/*": ["./给AI阅读的文档/.probe/@package/*"],
                "@side-only/*": ["./给AI阅读的文档/.probe/@side-only/*"],
                "@special/*": ["./给AI阅读的文档/.probe/@special/*"]
            },
            "typeRoots": [
                tacz_types_rel,
                "./给AI阅读的文档/.probe/@package",
                "./node_modules/@types"
            ]
        },
        "include": [
            f"{tacz_types_rel}/**/*.d.ts",
            "startup_scripts/**/*.js",
            "server_scripts/**/*.js",
            "client_scripts/**/*.js"
        ],
        "exclude": ["node_modules"]
    }
    jsconfig_path = os.path.join(kubejs_dir, 'jsconfig.json')
    with open(jsconfig_path, 'w', encoding='utf-8') as f:
        json.dump(jsconfig, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print("  ✓ jsconfig.json")
    
    all_packs_data = [
        ('tacz', 'TACZ默认枪包', load_raw('tacz_default_gun')),
        ('lavender', '薰衣草枪包', load_raw('lavender_converted')),
        ('bf1', '启示录枪包', load_raw('apocalypse')),
    ]
    
    # Collect all gun IDs, attachment IDs, ammo IDs
    all_guns = {}  # namespace:gun_id -> name
    all_attachments = {}  # namespace:att_id -> name
    all_ammo = {}  # namespace:ammo_id -> name
    guns_by_ns = {}
    atts_by_ns = {}
    
    for ns, pack_name, data in all_packs_data:
        ns_guns = {}
        ns_atts = {}
        for g in data['guns']:
            fid = f"{ns}:{g['id']}"
            all_guns[fid] = g['name_cn']
            ns_guns[g['id']] = g['name_cn']
        for a in data['attachments']:
            fid = f"{ns}:{a['id']}"
            all_attachments[fid] = a['name_cn']
            ns_atts[a['id']] = a['name_cn']
        # Ammo from gun data
        for g in data['guns']:
            ammo = g.get('ammo', '')
            if ammo and ammo not in all_ammo:
                all_ammo[ammo] = ammo_to_name(ammo)
        guns_by_ns[ns] = ns_guns
        atts_by_ns[ns] = ns_atts
    
    # Generate JSDoc comment blocks + constant declarations
    lines = []
    lines.append('// ============================================================')
    lines.append('// TACZ 枪械/配件/弹药 类型声明')
    lines.append('// 自动生成 — 由 _generate_tables.py 生成')
    lines.append('// 作用：为 VS Code 提供 TACZ 相关 ID 的自动补全和类型提示')
    lines.append('// ============================================================')
    lines.append('')
    lines.append('// ==================== 枪械 ID 常量 ====================')
    lines.append('')
    
    for ns, pack_name, data in all_packs_data:
        ns_guns = guns_by_ns[ns]
        lines.append(f'// --- {pack_name} ({ns}) ---')
        for gid, gname in sorted(ns_guns.items()):
            safe_name = gid.replace('.', '_').replace('-', '_')
            lines.append(f'/** {gname} (GunId: "{ns}:{gid}") */')
            lines.append(f'declare const TACZ_GUN_{ns.upper()}_{safe_name.upper()}: "{ns}:{gid}";')
        lines.append('')
    
    # Gun ID union type
    all_gun_ids = [f'"{fid}"' for fid in sorted(all_guns.keys())]
    lines.append(f'/** 所有已知的 TACZ 枪械 GunId 联合类型 */')
    lines.append(f'declare type TaczGunId = { " | ".join(all_gun_ids) if all_gun_ids else "string" };')
    lines.append('')
    
    lines.append('// ==================== 配件 ID 常量 ====================')
    lines.append('')
    for ns, pack_name, data in all_packs_data:
        ns_atts = atts_by_ns[ns]
        lines.append(f'// --- {pack_name} ({ns}) ---')
        for aid, aname in sorted(ns_atts.items()):
            safe_name = aid.replace('.', '_').replace('-', '_')
            lines.append(f'/** {aname} (AttachmentId: "{ns}:{aid}") */')
            lines.append(f'declare const TACZ_ATT_{ns.upper()}_{safe_name.upper()}: "{ns}:{aid}";')
        lines.append('')
    
    all_att_ids = [f'"{fid}"' for fid in sorted(all_attachments.keys())]
    lines.append(f'/** 所有已知的 TACZ 配件 ID 联合类型 */')
    lines.append(f'declare type TaczAttachmentId = { " | ".join(all_att_ids) if all_att_ids else "string" };')
    lines.append('')
    
    lines.append('// ==================== 弹药 ID 常量 ====================')
    lines.append('')
    for ammo_id, ammo_name in sorted(all_ammo.items()):
        safe_name = ammo_id.replace(':', '_').replace('.', '_').replace('-', '_')
        lines.append(f'/** {ammo_name} */')
        lines.append(f'declare const TACZ_AMMO_{safe_name.upper()}: "{ammo_id}";')
    lines.append('')
    
    all_ammo_ids = [f'"{fid}"' for fid in sorted(all_ammo.keys())]
    lines.append(f'/** 所有已知的 TACZ 弹药 ID 联合类型 */')
    lines.append(f'declare type TaczAmmoId = { " | ".join(all_ammo_ids) if all_ammo_ids else "string" };')
    lines.append('')
    
    # --- Gun data lookup helpers (JSDoc typed) ---
    lines.append('// ==================== 辅助查找 ====================')
    lines.append('')
    lines.append('/**')
    lines.append(' * 按 namespace 获取枪械数据')
    lines.append(' * @param {"tacz" | "lavender" | "bf1"} namespace - 枪包命名空间')
    lines.append(' * @returns {Array<{id: TaczGunId, name: string, type: string, ammo: TaczAmmoId, slots: string[]}>}')
    lines.append(' */')
    lines.append('declare function getTaczGuns(namespace: string): any[];')
    lines.append('')
    lines.append('/**')
    lines.append(' * 获取指定枪械的配件兼容槽位')
    lines.append(' * @param {TaczGunId} gunId')
    lines.append(' * @returns {string[]} 支持的配件槽位列表 (scope, muzzle, stock, grip, laser, extended_mag)')
    lines.append(' */')
    lines.append('declare function getTaczGunSlots(gunId: string): string[];')
    lines.append('')
    
    type_content = '\n'.join(lines)
    
    type_path = os.path.join(types_dir, 'tacz.d.ts')
    with open(type_path, 'w', encoding='utf-8') as f:
        f.write(type_content)
    print(f"  ✓ types/tacz.d.ts ({(len(all_guns))} guns, {len(all_attachments)} attachments, {len(all_ammo)} ammo types)")

    # 清理旧位置（如果存在）
    old_type_path = os.path.join(kubejs_dir, 'types', 'tacz.d.ts')
    if os.path.exists(old_type_path):
        os.remove(old_type_path)
        print("  (已清理旧位置 kubejs/types/tacz.d.ts)")


def main():
    print("Step 1: Copying images...")
    copy_images()

    print("\nStep 2: Generating pack tables...")
    generate_pack_table('tacz_default_gun', 'TACZ 默认枪包 (tacz_default_gun)', 'tacz', '00_TACZ默认枪包.md')
    generate_pack_table('lavender_converted', '薰衣草枪包 (lavender_converted) — 一战主题', 'lavender', '01_薰衣草枪包_lavender.md')
    generate_pack_table('apocalypse', '启示录枪包 (Apocalypse v1.1.7) — BF1 一战/二战主题', 'bf1', '02_启示录枪包_Apocalypse.md')

    print("\nStep 3: Generating summary...")
    generate_summary()

    print("\nStep 4: Generating VS Code config (jsconfig.json + types)...")
    generate_vscode_config()

    print("\n✅ 所有表格和类型声明已生成!")

if __name__ == '__main__':
    main()
