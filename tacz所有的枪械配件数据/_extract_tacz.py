#!/usr/bin/env python3
"""Extract TACZ gun and attachment data from gunpacks"""
import os, json, re, sys

def clean_json(text):
    text = re.sub(r'//.*?(\n|$)', '\n', text)
    text = re.sub(r'/\*.*?\*/', '', text, flags=re.DOTALL)
    return text

def read_json(path):
    if not os.path.exists(path):
        return None
    with open(path, 'r', encoding='utf-8') as f:
        return json.loads(clean_json(f.read()))

def extract_gunpack(gunpack_path, namespace, output_prefix):
    """Extract guns and attachments from a gunpack"""
    lang_cn = read_json(os.path.join(gunpack_path, f'assets/{namespace}/lang/zh_cn.json')) or {}
    lang_en = read_json(os.path.join(gunpack_path, f'assets/{namespace}/lang/en_us.json')) or {}
    
    guns_dir = os.path.join(gunpack_path, f'data/{namespace}/index/guns')
    guns_data_dir = os.path.join(gunpack_path, f'data/{namespace}/data/guns')
    att_dir = os.path.join(gunpack_path, f'data/{namespace}/index/attachments')
    att_data_dir = os.path.join(gunpack_path, f'data/{namespace}/data/attachments')
    
    results = {'guns': [], 'attachments': []}
    
    # Guns
    if os.path.exists(guns_dir):
        for fname in sorted(os.listdir(guns_dir)):
            if not fname.endswith('.json'):
                continue
            gun_id = fname.replace('.json', '')
            full_id = f'{namespace}:{gun_id}'
            idx = read_json(os.path.join(guns_dir, fname))
            if not idx:
                continue
            gun_type = idx.get('type', 'unknown')
            name_key = idx.get('name', '')
            
            gun_name = lang_en.get(name_key, gun_id)
            gun_name_cn = lang_cn.get(name_key, gun_name)
            
            data_fname = gun_id + '_data.json'
            data = read_json(os.path.join(guns_data_dir, data_fname))
            allow_types = data.get('allow_attachment_types', []) if data else []
            
            results['guns'].append({
                'id': gun_id,
                'full_id': full_id,
                'name_en': gun_name,
                'name_cn': gun_name_cn,
                'type': gun_type,
                'allow_attachment_types': allow_types
            })
    
    # Attachments
    if os.path.exists(att_dir):
        for fname in sorted(os.listdir(att_dir)):
            if not fname.endswith('.json'):
                continue
            att_id = fname.replace('.json', '')
            full_id = f'{namespace}:{att_id}'
            idx = read_json(os.path.join(att_dir, fname))
            if not idx:
                continue
            att_type = idx.get('type', 'unknown')
            name_key = idx.get('name', '')
            
            att_name = lang_en.get(name_key, att_id)
            att_name_cn = lang_cn.get(name_key, att_name)
            
            results['attachments'].append({
                'id': att_id,
                'full_id': full_id,
                'name_en': att_name,
                'name_cn': att_name_cn,
                'type': att_type
            })
    
    return results


def extract_zip_gunpack(zip_path, namespace):
    """Extract from a zip file using zipfile module"""
    import zipfile, io
    results = {'guns': [], 'attachments': []}
    
    lang_cn = {}
    lang_en = {}
    
    # Read lang files
    with zipfile.ZipFile(zip_path, 'r') as z:
        # Lang
        for lang_path in [f'assets/{namespace}/lang/zh_cn.json', f'assets/{namespace}/lang/en_us.json']:
            try:
                content = z.read(lang_path).decode('utf-8')
                content = clean_json(content)
                lang_data = json.loads(content)
                if 'zh_cn' in lang_path:
                    lang_cn = lang_data
                else:
                    lang_en = lang_data
            except KeyError:
                pass
        
        # Guns index
        guns_prefix = f'data/{namespace}/index/guns/'
        guns_data_prefix = f'data/{namespace}/data/guns/'
        att_prefix = f'data/{namespace}/index/attachments/'
        
        for name in z.namelist():
            if name.startswith(guns_prefix) and name.endswith('.json'):
                gun_id = name.replace(guns_prefix, '').replace('.json', '')
                full_id = f'{namespace}:{gun_id}'
                content = z.read(name).decode('utf-8')
                idx = json.loads(clean_json(content))
                
                gun_type = idx.get('type', 'unknown')
                name_key = idx.get('name', '')
                gun_name = lang_en.get(name_key, gun_id)
                gun_name_cn = lang_cn.get(name_key, gun_name)
                
                # Read data file
                data_name = guns_data_prefix + gun_id + '_data.json'
                allow_types = []
                try:
                    data_content = z.read(data_name).decode('utf-8')
                    data = json.loads(clean_json(data_content))
                    allow_types = data.get('allow_attachment_types', [])
                except KeyError:
                    pass
                except:
                    pass
                
                results['guns'].append({
                    'id': gun_id,
                    'full_id': full_id,
                    'name_en': gun_name,
                    'name_cn': gun_name_cn,
                    'type': gun_type,
                    'allow_attachment_types': allow_types
                })
        
        for name in z.namelist():
            if name.startswith(att_prefix) and name.endswith('.json'):
                att_id = name.replace(att_prefix, '').replace('.json', '')
                full_id = f'{namespace}:{att_id}'
                content = z.read(name).decode('utf-8')
                idx = json.loads(clean_json(content))
                
                att_type = idx.get('type', 'unknown')
                name_key = idx.get('name', '')
                att_name = lang_en.get(name_key, att_id)
                att_name_cn = lang_cn.get(name_key, att_name)
                
                results['attachments'].append({
                    'id': att_id,
                    'full_id': full_id,
                    'name_en': att_name,
                    'name_cn': att_name_cn,
                    'type': att_type
                })
    
    return results


def main():
    base = r"d:/WDSJ/我的世界/.minecraft/versions/1.21.1-NeoForge_21.1.228航空学攻防战-9/tacz"
    out_dir = r"d:/WDSJ/我的世界/.minecraft/versions/1.21.1-NeoForge_21.1.228航空学攻防战-9/kubejs/tacz所有的枪械配件数据"
    
    all_data = {}
    
    # 1. TACZ Default
    tacz_path = os.path.join(base, 'tacz_default_gun')
    print("Processing: tacz_default_gun...", file=sys.stderr)
    all_data['tacz_default_gun'] = extract_gunpack(tacz_path, 'tacz', 'tacz')
    
    # 2. Lavender
    lav_path = os.path.join(base, 'lavender_converted')
    print("Processing: lavender_converted...", file=sys.stderr)
    all_data['lavender_converted'] = extract_gunpack(lav_path, 'lavender', 'lavender')
    
    # 3. Apocalypse
    zip_path = os.path.join(base, 'Apocalypse_v1.1.7_G.zip')
    print("Processing: Apocalypse_v1.1.7_G.zip...", file=sys.stderr)
    all_data['apocalypse'] = extract_zip_gunpack(zip_path, 'bf1')
    
    # Save raw data
    import json as j
    for pack_name, data in all_data.items():
        filepath = os.path.join(out_dir, f'_raw_{pack_name}.json')
        with open(filepath, 'w', encoding='utf-8') as f:
            j.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Saved: {filepath}", file=sys.stderr)
    
    print("\nDone! All data extracted.", file=sys.stderr)

if __name__ == '__main__':
    main()