# SBW Vehicle Database — Data Pack Filling Guide

## Directory Structure

```
kubejs/data/sbw_vehicle_db/
├── _registry.json                          ← Registry (categories + file lists)
├── _ammo_types.json                        ← Ammo type definitions
├── guide.md                                ← This file
│
├── main_battle_tank/                       ← Category directory
│   ├── superbwarfare--m_1a_2.json          ← Vehicle file: <mod>--<baseName>.json
│   ├── mcsp--m1a2.json
│   └── ...
├── infantry_fighting_vehicle/
├── artillery/
├── air_defense/
├── aircraft/
├── helicopter/
├── defense_turret/
├── drone/
├── naval/
└── utility_vehicle/
```

**Rules:**
- Each category is a directory matching a key in `_registry.json`
- Vehicle files sit flat inside the category directory (no sub-classification)
- File naming: `<mod_prefix>--<baseName>.json`

---

## 1. `_registry.json` — Category Registry

Declares all categories and their vehicle file lists. The loader only depends on this file.

```json
{
  "version": 2,
  "categories": {
    "main_battle_tank": {
      "enabled": true,
      "displayName": "主战坦克",
      "description": "Main Battle Tanks",
      "files": [
        "superbwarfare--m_1a_2.json",
        "mcsp--m1a2.json"
      ]
    },
    "helicopter": {
      "enabled": true,
      "displayName": "直升机",
      "description": "Helicopters",
      "files": [
        "superbwarfare--ah_6.json"
      ]
    }
  }
}
```

| Field | Required | Description |
|-------|----------|-------------|
| `enabled` | ✗ | Default `true`. Set to `false` to skip the entire category |
| `displayName` | Recommended | Chinese display name for admin UI |
| `description` | Recommended | English description |
| `files` | ✓ | File paths relative to the category directory |

> **All files are relative to the category dir**: `superbwarfare--m_1a_2.json` → `<category>/superbwarfare--m_1a_2.json`.

---

## 2. `_ammo_types.json` — Ammo Type Registry

Defines all ammo types that the ammo replenishment system recognizes.

```json
{
  "version": 1,
  "ammoTypes": {
    "large_shell_ap": {
      "id": "superbwarfare:large_shell_ap",
      "displayName": "§6大口径AP弹",
      "enName": "Large AP Shell",
      "maxStack": 64
    },
    "missile": {
      "id": "superbwarfare:missile",
      "displayName": "§a导弹",
      "enName": "Missile",
      "maxStack": 8
    }
  }
}
```

| Field | Required | Description |
|-------|----------|-------------|
| Key (short name) | ✓ | `large_shell_ap`, used as internal reference |
| `id` | ✓ | Full Minecraft item ID, e.g. `superbwarfare:large_shell_ap` |
| `displayName` | ✓ | Colored display name (Chinese, with § color codes) |
| `enName` | ✓ | English display name (no color codes needed) |
| `maxStack` | ✓ | Maximum stack size for this ammo item |

> All ammo IDs referenced in vehicle `weapons[].ammoTypes` and `ammoSlots` must be registered here.

---

## 3. Vehicle JSON Files — `tanks/*.json`

One JSON file per vehicle variant. Stored in the category directory.

```json
{
  "vehicleId": "superbwarfare:m_1a_2",
  "mod": "superbwarfare",
  "category": "main_battle_tank",
  "baseName": "m_1a_2",
  "displayType": "Tank",
  "maxHealth": 500,
  "maxEnergy": 10000000,
  "hasDecoy": true,
  "engineType": "Track",
  "mass": 70,
  "upStep": 2.25,
  "containerType": "Medium",
  "hudType": "@Land",
  "parts": [
    "WheelRight", "WheelLeft", "MainEngine", "Turret"
  ],
  "seatCount": 5,
  "weapons": [
    {
      "key": "Cannon",
      "displayKey": "Cannon",
      "ammoTypes": ["superbwarfare:large_shell_ap", "superbwarfare:large_shell_he"],
      "magazine": 1,
      "rpm": null,
      "damage": 700,
      "hasOverride": true
    },
    {
      "key": "MachineGun",
      "displayKey": "MachineGun",
      "ammoTypes": ["superbwarfare:rifle_ammo"],
      "magazine": 1,
      "rpm": 600,
      "damage": 9.5,
      "hasOverride": false
    }
  ],
  "nbtTemplate": {
    "Energy": 10000000,
    "Health": 500,
    "WeaponState": { "Cannon": { "components": { "minecraft:custom_data": { "GunData": { "Ammo": 1 } } } } },
    "Inventory": {
      "Items": [
        { "Slot": 0, "count": 32, "id": "superbwarfare:large_shell_ap" },
        { "Slot": 1, "count": 32, "id": "superbwarfare:large_shell_he" }
      ]
    }
  },
  "ammoSlots": {
    "superbwarfare:large_shell_ap": 32,
    "superbwarfare:large_shell_he": 32,
    "superbwarfare:rifle_ammo": 192
  }
}
```

### 3.1 Top-Level Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `vehicleId` | ✓ | string | Unique identifier, e.g. `superbwarfare:m_1a_2`. Must be unique across all files. |
| `mod` | ✓ | string | Mod source: `superbwarfare`, `mcsp` |
| `category` | ✓ | string | Must match one of the category keys in `_registry.json` |
| `baseName` | ✓ | string | Short internal ID (no namespace) |
| `displayType` | ✓ | string | Display classification: `Tank`, `IFV`, `Artillery`, `Helicopter`, `Drone`, etc. |
| `maxHealth` | ✓ | int | Maximum vehicle health |
| `maxEnergy` | ✓ | int | Maximum energy/power |
| `hasDecoy` | ✓ | bool | Whether the vehicle can deploy decoys |
| `engineType` | ✓ | string | `Track` (tracked), `Wheel` (wheeled), `Rotor` (rotary), `Plane` (fixed-wing) |
| `mass` | ✓ | number | Vehicle mass in tons (affects physics) |
| `upStep` | ✓ | number | Maximum climbable step height |
| `containerType` | ✗ | string/null | Container inventory type: `"Medium"`, `"Large"`, or `null` |
| `hudType` | ✓ | string | HUD identifier: `@Land`, `@Air`, `@Sea`, `@Drone`, `@Turret` |
| `parts` | ✓ | string[] | Vehicle damage parts (affects cripple mechanics) |
| `seatCount` | ✓ | int | Number of seats (driver + passengers) |
| `weapons` | ✓ | array | Weapon system definitions |
| `nbtTemplate` | ✓ | object | Default NBT for the vehicle item entity |
| `ammoSlots` | ✓ | object | Ammo inventory capacity: `{ "ammo_id": max_count }` |

### 3.2 Weapon Entry Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `key` | ✓ | string | Weapon slot key, e.g. `Cannon`, `MachineGun` |
| `displayKey` | ✓ | string | Display name key (used for translation) |
| `ammoTypes` | ✓ | string[] | Accepted ammo IDs (must be in `_ammo_types.json`) |
| `magazine` | ✓ | int | Magazine size (1 for single-shot, >1 for auto-loaders) |
| `rpm` | ✗ | int/null | Rate of fire in rounds per minute. `null` = single shot |
| `damage` | ✓ | number | Base damage per hit |
| `hasOverride` | ✓ | bool | Whether mouse aim override is available |

### 3.3 NBT Template

The `nbtTemplate` provides default NBT data for the vehicle's entity item when spawned. This includes:

- **`Health`** / **`Energy`** — Initial values (usually match max)
- **`WeaponState`** — Per-weapon initial state, including `GunData.Ammo` (loaded ammo count)
- **`Inventory.Items`** — Initial inventory contents. Slot numbers are vehicle-specific.
- **Part health fields** — e.g. `RightWheelHealth`, `TurretHealth`, `MainEngineHealth`
- **Part damage flags** — e.g. `RightWheelDamaged`, `TurretDamaged`

### 3.4 Engine Type Reference

| Value | Description | Examples |
|-------|-------------|---------|
| `Track` | Tracked vehicle | Tanks, IFVs |
| `Wheel` | Wheeled vehicle | Trucks, utility vehicles |
| `Rotor` | Rotorcraft | Helicopters |
| `Plane` | Fixed-wing | Aircraft |
| `Hover` | Hovercraft | Naval hovercraft |

### 3.5 HUD Type Reference

| Value | Description |
|-------|-------------|
| `@Land` | Land vehicle HUD |
| `@Air` | Aircraft HUD |
| `@Sea` | Naval vehicle HUD |
| `@Drone` | Drone HUD |
| `@Turret` | Fixed defense turret HUD |

### 3.6 Vehicle Category Reference

| Category Key | Description |
|-------------|-------------|
| `main_battle_tank` | Main Battle Tanks |
| `infantry_fighting_vehicle` | IFVs & APCs |
| `artillery` | Artillery & Rocket Artillery |
| `air_defense` | Air Defense Units |
| `aircraft` | Fixed-wing Aircraft |
| `helicopter` | Helicopters |
| `defense_turret` | Fixed Defense Turrets |
| `drone` | Drones |
| `naval` | Naval Vehicles |
| `utility_vehicle` | Utility Vehicles & Trucks |

---

## 4. Adding a New Vehicle

1. Create a JSON file in the appropriate category directory, e.g. `main_battle_tank/mcsp--new_tank.json`
2. Add the filename to `_registry.json` under the matching category's `files` array
3. If the vehicle uses new ammo types, register them in `_ammo_types.json`
4. Run `/kubejs reload` to reload scripts

---

## 5. Adding a New Category

1. Create a new directory under `sbw_vehicle_db/`, e.g. `recon_vehicle/`
2. Add a new entry in `_registry.json` under `categories`:
   ```json
   "recon_vehicle": {
     "enabled": true,
     "displayName": "侦察车",
     "description": "Reconnaissance Vehicles",
     "files": []
   }
   ```
3. Place vehicle JSON files in the new directory and list them in `files`
4. No loader changes needed — the autodiscovery reads `_registry.json`

---

## 6. Notes

1. **`_registry.json` is the single entry point** — files not listed there won't be loaded
2. **`vehicleId` must be unique** across all category files
3. **Ammo IDs in `weapons[].ammoTypes` and `ammoSlots`** must be registered in `_ammo_types.json`
4. **`category` in vehicle JSON** must match a key in `_registry.json` exactly
5. **After modification**: `/kubejs reload` to reload all scripts
6. **File encoding**: UTF-8 without BOM
7. **`enabled: false`** on a category in `_registry.json` skips the entire category
