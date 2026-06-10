import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Item, $ItemCooldowns$CooldownInstance, $Item_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Map_, $Map } from "@package/java/util";
import { $LuaTable } from "@package/org/luaj/vm2";
import { $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";
import { $RandomSource } from "@package/net/minecraft/util";
export * as interactkey from "@package/mod/chloeprime/gunsmithlib/mixin/interactkey";

declare module "@package/mod/chloeprime/gunsmithlib/mixin" {
    export class $EntityKineticBulletAccessor {
    }
    export interface $EntityKineticBulletAccessor {
        getExplosionRadius(): number;
        getGravity(): number;
        getLife(): number;
        setGravity(arg0: number): void;
        setExplosionDelayCount(arg0: number): void;
        getGunId(): $ResourceLocation;
        getExplosion(): boolean;
        setArmorIgnore(arg0: number): void;
        get explosionRadius(): number;
        get life(): number;
        set explosionDelayCount(value: number);
        get gunId(): $ResourceLocation;
        get explosion(): boolean;
        set armorIgnore(value: number);
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
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        getRandom(): $RandomSource;
        invokeIsInRain(): boolean;
        invokeIsInBubbleColumn(): boolean;
        get random(): $RandomSource;
    }
}
