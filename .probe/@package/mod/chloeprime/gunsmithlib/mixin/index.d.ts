import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Item, $ItemCooldowns$CooldownInstance, $Item_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Map_, $Map } from "@package/java/util";
import { $LuaTable } from "@package/org/luaj/vm2";
import { $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";
export * as interactkey from "@package/mod/chloeprime/gunsmithlib/mixin/interactkey";
export * as client from "@package/mod/chloeprime/gunsmithlib/mixin/client";

declare module "@package/mod/chloeprime/gunsmithlib/mixin" {
    export class $EntityKineticBulletAccessor {
    }
    export interface $EntityKineticBulletAccessor {
        setExplosionDelayCount(arg0: number): void;
        setArmorIgnore(arg0: number): void;
        getGravity(): number;
        getGunId(): $ResourceLocation;
        setGravity(arg0: number): void;
        getLife(): number;
        getExplosion(): boolean;
        getExplosionRadius(): number;
        set explosionDelayCount(value: number);
        set armorIgnore(value: number);
        get gunId(): $ResourceLocation;
        get life(): number;
        get explosion(): boolean;
        get explosionRadius(): number;
    }
    export class $ItemCooldownsAccessor {
    }
    export interface $ItemCooldownsAccessor {
        getCooldowns(): $Map<$Item, $ItemCooldowns$CooldownInstance>;
        get cooldowns(): $Map<$Item, $ItemCooldowns$CooldownInstance>;
    }
    /**
     * Values that may be interpreted as {@link $ItemCooldownsAccessor}.
     */
    export type $ItemCooldownsAccessor_ = (() => $Map_<$Item_, $ItemCooldowns$CooldownInstance>);
    export class $SmithingTransformRecipeAccessor {
    }
    export interface $SmithingTransformRecipeAccessor {
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        getAddition(): $Ingredient;
        get base(): $Ingredient;
        get template(): $Ingredient;
        get addition(): $Ingredient;
    }
    export class $CommonGunIndexAccessor {
    }
    export interface $CommonGunIndexAccessor {
        setScript(arg0: $LuaTable): void;
        setScriptParam(arg0: $LuaTable): void;
        set script(value: $LuaTable);
        set scriptParam(value: $LuaTable);
    }
    export class $LevelAccessor {
    }
    export interface $LevelAccessor {
        invokeGetEntities(): $LevelEntityGetter<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $LevelAccessor}.
     */
    export type $LevelAccessor_ = (() => $LevelEntityGetter<$Entity>);
}
