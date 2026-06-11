#!/usr/bin/env python3
"""Generate markdown tables for TACZ guns and attachments"""
import json, os, sys

out_dir = r"d:/WDSJ/我的世界/.minecraft/versions/1.21.1-NeoForge_21.1.228航空学攻防战-9/kubejs/tacz所有的枪械配件数据"

def load_raw(name):
    with open(os.path.join(out_dir, f'_raw_{name}.json'), 'r', encoding='utf-8') as f:
        return json.load(f)

def type_to_cn(t):
    m = {
        'rifle': '步枪', 'pistol': '手枪', 'smg': '冲锋枪',
        'shotgun': '霰弹枪', 'sniper': '狙击枪', 'mg': '机枪',
        'rpg': '重型武器', 'unknown': '未知'
    }
    return m.get(t, t)

def slot_to_cn(s):
    m = {
        'scope': '瞄具', 'muzzle': '枪口', 'stock': '枪托',
        'grip': '握把', 'laser': '激光', 'extended_mag': '扩容弹匣'
    }
    return m.get(s, s)

# ======================== TACZ Default Gun Pack ========================
data = load_raw('tacz_default_gun')
guns = data['guns']
atts = data['attachments']

gunlines = []
for g in guns:
    slots_cn = ', '.join([slot_to_cn(s) for s in g['allow_attachment_types']]) if g['allow_attachment_types'] else '无'
    gunlines.append(f"| `tacz:{g['id']}` | {g['name_cn']} | {type_to_cn(g['type'])} | {slots_cn} |")

attlines = []
for a in atts:
    # Determine which gun types this attachment type works with
    compatible_guns = []
    for g in guns:
        if a['type'] in g['allow_attachment_types']:
            if type_to_cn(g['type']) not in compatible_guns:
                compatible_guns.append(type_to_cn(g['type']))
    comp_str = ', '.join(compatible_guns) if compatible_guns else '（不通用，需看具体枪械）'
    attlines.append(f"| `tacz:{a['id']}` | {a['name_cn']} | {slot_to_cn(a['type'])} | {comp_str} |")

tacz_md = f"""# TACZ 默认枪包 (tacz_default_gun)

## 🔫 枪械列表

| NBT GunId (GunId标签) | 枪械名称 | 枪械类型 | 支持的配件槽位 |
|---|---|---|---|
{chr(10).join(gunlines)}

## 🔧 配件列表

| 配件ID | 配件名称 | 配件类型 | 适配的枪械类型 |
|---|---|---|---|
{chr(10).join(attlines)}
"""

with open(os.path.join(out_dir, '00_TACZ默认枪包.md'), 'w', encoding='utf-8') as f:
    f.write(tacz_md)
print("✓ 00_TACZ默认枪包.md")

# ======================== Lavender Gun Pack ========================
data = load_raw('lavender_converted')
guns = data['guns']
atts = data['attachments']

gunlines = []
for g in guns:
    slots_cn = ', '.join([slot_to_cn(s) for s in g['allow_attachment_types']]) if g['allow_attachment_types'] else '无'
    gunlines.append(f"| `lavender:{g['id']}` | {g['name_cn']} | {type_to_cn(g['type'])} | {slots_cn} |")

attlines = []
for a in atts:
    compatible_guns = []
    for g in guns:
        if a['type'] in g['allow_attachment_types']:
            if type_to_cn(g['type']) not in compatible_guns:
                compatible_guns.append(type_to_cn(g['type']))
    comp_str = ', '.join(compatible_guns) if compatible_guns else '（不通用，需看具体枪械）'
    attlines.append(f"| `lavender:{a['id']}` | {a['name_cn']} | {slot_to_cn(a['type'])} | {comp_str} |")

lav_md = f"""# 薰衣草枪包 (lavender_converted) — 一战主题

## 🔫 枪械列表

| NBT GunId (GunId标签) | 枪械名称 | 枪械类型 | 支持的配件槽位 |
|---|---|---|---|
{chr(10).join(gunlines)}

## 🔧 配件列表

| 配件ID | 配件名称 | 配件类型 | 适配的枪械类型 |
|---|---|---|---|
{chr(10).join(attlines)}
"""

with open(os.path.join(out_dir, '01_薰衣草枪包_lavender.md'), 'w', encoding='utf-8') as f:
    f.write(lav_md)
print("✓ 01_薰衣草枪包_lavender.md")

# ======================== Apocalypse Gun Pack ========================
data = load_raw('apocalypse')
guns = data['guns']
atts = data['attachments']

gunlines = []
for g in guns:
    slots_cn = ', '.join([slot_to_cn(s) for s in g['allow_attachment_types']]) if g['allow_attachment_types'] else '无'
    gunlines.append(f"| `bf1:{g['id']}` | {g['name_cn']} | {type_to_cn(g['type'])} | {slots_cn} |")

attlines = []
for a in atts:
    compatible_guns = []
    for g in guns:
        if a['type'] in g['allow_attachment_types']:
            if type_to_cn(g['type']) not in compatible_guns:
                compatible_guns.append(type_to_cn(g['type']))
    comp_str = ', '.join(compatible_guns) if compatible_guns else '（不通用，需看具体枪械）'
    attlines.append(f"| `bf1:{a['id']}` | {a['name_cn']} | {slot_to_cn(a['type'])} | {comp_str} |")

apo_md = f"""# 启示录枪包 (Apocalypse v1.1.7) — BF1 一战/二战主题

## 🔫 枪械列表

| NBT GunId (GunId标签) | 枪械名称 | 枪械类型 | 支持的配件槽位 |
|---|---|---|---|
{chr(10).join(gunlines)}

## 🔧 配件列表

| 配件ID | 配件名称 | 配件类型 | 适配的枪械类型 |
|---|---|---|---|
{chr(10).join(attlines)}
"""

with open(os.path.join(out_dir, '02_启示录枪包_Apocalypse.md'), 'w', encoding='utf-8') as f:
    f.write(apo_md)
print("✓ 02_启示录枪包_Apocalypse.md")

# ======================== Cross-Pack Summary ========================
# Combine all guns from all packs with detailed info
all_guns = []
all_packs = [
    ('tacz_default_gun', 'TACZ默认枪包'),
    ('lavender_converted', '薰衣草枪包'),
    ('apocalypse', '启示录枪包')
]

for pack_key, pack_name in all_packs:
    data = load_raw(pack_key)
    for g in data['guns']:
        all_guns.append({
            'pack': pack_name,
            'id': g['id'],
            'full_id': g['full_id'],
            'name_cn': g['name_cn'],
            'name_en': g['name_en'],
            'type': g['type'],
            'allow_attachment_types': g['allow_attachment_types']
        })

summary_lines = []
for g in all_guns:
    slots_cn = ', '.join([slot_to_cn(s) for s in g['allow_attachment_types']]) if g['allow_attachment_types'] else '无'
    summary_lines.append(f"| {g['pack']} | `{g['full_id']}` | {g['name_cn']} | {type_to_cn(g['type'])} | {slots_cn} |")

summary_md = f"""# 所有枪包综合概览

## 🔫 全部枪械总表

| 所属枪包 | NBT GunId (GunId标签) | 枪械名称 | 枪械类型 | 支持的配件槽位 |
|---|---|---|---|---|
{chr(10).join(summary_lines)}

---

### 配件槽位说明

| 槽位类型 | 说明 | 可安装的配件类别 |
|---|---|---|
| scope | 瞄具 | 红点、全息、倍镜、光学瞄具等 |
| muzzle | 枪口 | 消音器、制退器、补偿器、刺刀等 |
| stock | 枪托 | 各类枪托、肩托等 |
| grip | 握把 | 前握把、角握把、 bipod 脚架等 |
| laser | 激光 | 激光指示器 |
| extended_mag | 扩容弹匣 | 各类扩容弹匣/供弹具 |
"""

with open(os.path.join(out_dir, 'README.md'), 'w', encoding='utf-8') as f:
    f.write(summary_md)
print("✓ README.md")

print("\n✅ 所有表格已生成!")
