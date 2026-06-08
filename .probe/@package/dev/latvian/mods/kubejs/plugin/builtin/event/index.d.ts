import { $Level } from "@package/net/minecraft/world/level";
import { $Registry } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $KubeJSKeybinds$KubeKey } from "@package/dev/latvian/mods/kubejs/client";
import { $RecipeViewerEntryType } from "@package/dev/latvian/mods/kubejs/recipe/viewer";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $EventGroup, $TargetedEventHandler, $EventTargetType, $EventHandler } from "@package/dev/latvian/mods/kubejs/event";
import { $GeneratedDataStage } from "@package/dev/latvian/mods/kubejs/script/data";

declare module "@package/dev/latvian/mods/kubejs/plugin/builtin/event" {
    export class $RecipeViewerEvents {
        static TARGET: $EventTargetType<$RecipeViewerEntryType>;
        static REMOVE_RECIPES: $EventHandler;
        static GROUP: $EventGroup;
        static REGISTER_SUBTYPES: $TargetedEventHandler<$RecipeViewerEntryType>;
        static GROUP_ENTRIES: $TargetedEventHandler<$RecipeViewerEntryType>;
        static REMOVE_ENTRIES_COMPLETELY: $TargetedEventHandler<$RecipeViewerEntryType>;
        static REMOVE_CATEGORIES: $EventHandler;
        static ADD_ENTRIES: $TargetedEventHandler<$RecipeViewerEntryType>;
        static REMOVE_ENTRIES: $TargetedEventHandler<$RecipeViewerEntryType>;
        static ADD_INFORMATION: $TargetedEventHandler<$RecipeViewerEntryType>;
    }
    export interface $RecipeViewerEvents {
    }
    export class $NetworkEvents {
        static GROUP: $EventGroup;
        static DATA_RECEIVED: $TargetedEventHandler<string>;
    }
    export interface $NetworkEvents {
    }
    export class $KeyBindEvents {
        static GROUP: $EventGroup;
        static PRESSED: $TargetedEventHandler<$KubeJSKeybinds$KubeKey>;
        static RELEASED: $TargetedEventHandler<$KubeJSKeybinds$KubeKey>;
        static TICK: $TargetedEventHandler<$KubeJSKeybinds$KubeKey>;
        static REGISTRY: $EventHandler;
    }
    export interface $KeyBindEvents {
    }
    export class $ItemEvents {
        static TARGET: $EventTargetType<$ResourceKey<$Item>>;
        static ITEM_DESTROYED: $TargetedEventHandler<$ResourceKey<$Item>>;
        static ENTITY_INTERACTED: $TargetedEventHandler<$ResourceKey<$Item>>;
        static TOOL_TIER_REGISTRY: $EventHandler;
        static MODIFY_TOOLTIPS: $EventHandler;
        static DYNAMIC_TOOLTIPS: $TargetedEventHandler<string>;
        static SMELTED: $TargetedEventHandler<$ResourceKey<$Item>>;
        static RIGHT_CLICKED: $TargetedEventHandler<$ResourceKey<$Item>>;
        static CAN_PICK_UP: $TargetedEventHandler<$ResourceKey<$Item>>;
        static MODEL_PROPERTIES: $EventHandler;
        static MODIFICATION: $EventHandler;
        static GROUP: $EventGroup;
        static DROPPED: $TargetedEventHandler<$ResourceKey<$Item>>;
        static FIRST_RIGHT_CLICKED: $TargetedEventHandler<$ResourceKey<$Item>>;
        static PICKED_UP: $TargetedEventHandler<$ResourceKey<$Item>>;
        static FIRST_LEFT_CLICKED: $TargetedEventHandler<$ResourceKey<$Item>>;
        static CRAFTED: $TargetedEventHandler<$ResourceKey<$Item>>;
        static FOOD_EATEN: $TargetedEventHandler<$ResourceKey<$Item>>;
    }
    export interface $ItemEvents {
    }
    export class $PlayerEvents {
        static MENU_TARGET: $EventTargetType<$ResourceKey<$MenuType<never>>>;
        static RESPAWNED: $EventHandler;
        static CHAT: $EventHandler;
        static ADVANCEMENT: $TargetedEventHandler<$ResourceLocation>;
        static INVENTORY_CLOSED: $TargetedEventHandler<$ResourceKey<$MenuType<never>>>;
        static STAGE_REMOVED: $TargetedEventHandler<string>;
        static CHEST_CLOSED: $TargetedEventHandler<$ResourceKey<$MenuType<never>>>;
        static INVENTORY_CHANGED: $TargetedEventHandler<$ResourceKey<$Item>>;
        static CLONED: $EventHandler;
        static STAGE_ADDED: $TargetedEventHandler<string>;
        static GROUP: $EventGroup;
        static CHEST_OPENED: $TargetedEventHandler<$ResourceKey<$MenuType<never>>>;
        static LOGGED_OUT: $EventHandler;
        static INVENTORY_OPENED: $TargetedEventHandler<$ResourceKey<$MenuType<never>>>;
        static TICK: $EventHandler;
        static DECORATE_CHAT: $EventHandler;
        static LOGGED_IN: $EventHandler;
    }
    export interface $PlayerEvents {
    }
    export class $BlockEvents {
        static TARGET: $EventTargetType<$ResourceKey<$Block>>;
        static DROPS: $TargetedEventHandler<$ResourceKey<$Block>>;
        static BLOCK_ENTITY_TICK: $TargetedEventHandler<$ResourceKey<$Block>>;
        static DETECTOR_CHANGED: $TargetedEventHandler<string>;
        static PICKED: $TargetedEventHandler<$ResourceKey<$Block>>;
        static RIGHT_CLICKED: $TargetedEventHandler<$ResourceKey<$Block>>;
        static MODIFICATION: $EventHandler;
        static PLACED: $TargetedEventHandler<$ResourceKey<$Block>>;
        static GROUP: $EventGroup;
        static STARTED_FALLING: $TargetedEventHandler<$ResourceKey<$Block>>;
        static DETECTOR_UNPOWERED: $TargetedEventHandler<string>;
        static DETECTOR_POWERED: $TargetedEventHandler<string>;
        static STOPPED_FALLING: $TargetedEventHandler<$ResourceKey<$Block>>;
        static FARMLAND_TRAMPLED: $TargetedEventHandler<$ResourceKey<$Block>>;
        static BROKEN: $TargetedEventHandler<$ResourceKey<$Block>>;
        static RANDOM_TICK: $TargetedEventHandler<$ResourceKey<$Block>>;
        static LEFT_CLICKED: $TargetedEventHandler<$ResourceKey<$Block>>;
    }
    export interface $BlockEvents {
    }
    export class $StartupEvents {
        static GROUP: $EventGroup;
        static INIT: $EventHandler;
        static POST_INIT: $EventHandler;
        static MODIFY_CREATIVE_TAB: $TargetedEventHandler<$ResourceLocation>;
        static REGISTRY: $TargetedEventHandler<$ResourceKey<$Registry<never>>>;
    }
    export interface $StartupEvents {
    }
    export class $ClientEvents {
        static DEBUG_RIGHT: $EventHandler;
        static GENERATE_ASSETS: $TargetedEventHandler<$GeneratedDataStage>;
        static HIGHLIGHT: $EventHandler;
        static DEBUG_LEFT: $EventHandler;
        static LANG: $TargetedEventHandler<string>;
        static PARTICLE_PROVIDER_REGISTRY: $EventHandler;
        static GROUP: $EventGroup;
        static LOGGED_OUT: $EventHandler;
        static ATLAS_SPRITE_REGISTRY: $TargetedEventHandler<$ResourceLocation>;
        static MENU_SCREEN_REGISTRY: $EventHandler;
        static ENTITY_RENDERER_REGISTRY: $EventHandler;
        static TICK: $EventHandler;
        static BLOCK_ENTITY_RENDERER_REGISTRY: $EventHandler;
        static LOGGED_IN: $EventHandler;
    }
    export interface $ClientEvents {
    }
    export class $EntityEvents {
        static TARGET: $EventTargetType<$ResourceKey<$EntityType<never>>>;
        static GROUP: $EventGroup;
        static BEFORE_HURT: $TargetedEventHandler<$ResourceKey<$EntityType<never>>>;
        static ENTITY_DROPS: $TargetedEventHandler<$ResourceKey<$EntityType<never>>>;
        static AFTER_HURT: $TargetedEventHandler<$ResourceKey<$EntityType<never>>>;
        static DEATH: $TargetedEventHandler<$ResourceKey<$EntityType<never>>>;
        static CHECK_SPAWN: $TargetedEventHandler<$ResourceKey<$EntityType<never>>>;
        static SPAWNED: $TargetedEventHandler<$ResourceKey<$EntityType<never>>>;
    }
    export interface $EntityEvents {
    }
    export class $ServerEvents {
        static MODIFY_RECIPE_INGREDIENT: $TargetedEventHandler<string>;
        static COMMAND_REGISTRY: $EventHandler;
        static BASIC_PUBLIC_COMMAND: $TargetedEventHandler<string>;
        static RECIPE_SCHEMA_REGISTRY: $EventHandler;
        static RECIPES: $EventHandler;
        static RECIPES_AFTER_LOADED: $EventHandler;
        static UNLOADED: $EventHandler;
        static LOADED: $EventHandler;
        static GROUP: $EventGroup;
        static SPECIAL_RECIPES: $EventHandler;
        static COMPOSTABLE_RECIPES: $EventHandler;
        static RECIPE_MAPPING_REGISTRY: $EventHandler;
        static BASIC_COMMAND: $TargetedEventHandler<string>;
        static GENERATE_DATA: $TargetedEventHandler<$GeneratedDataStage>;
        static TICK: $EventHandler;
        static COMMAND: $TargetedEventHandler<string>;
        static MODIFY_RECIPE_RESULT: $TargetedEventHandler<string>;
        static TAGS: $TargetedEventHandler<$ResourceKey<$Registry<never>>>;
        static REGISTRY: $TargetedEventHandler<$ResourceKey<$Registry<never>>>;
    }
    export interface $ServerEvents {
    }
    export class $LevelEvents {
        static TARGET: $EventTargetType<$ResourceKey<$Level>>;
        static GROUP: $EventGroup;
        static SAVED: $TargetedEventHandler<$ResourceKey<$Level>>;
        static TICK: $TargetedEventHandler<$ResourceKey<$Level>>;
        static AFTER_EXPLOSION: $TargetedEventHandler<$ResourceKey<$Level>>;
        static UNLOADED: $TargetedEventHandler<$ResourceKey<$Level>>;
        static LOADED: $TargetedEventHandler<$ResourceKey<$Level>>;
        static BEFORE_EXPLOSION: $TargetedEventHandler<$ResourceKey<$Level>>;
    }
    export interface $LevelEvents {
    }
}
