import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $GlobalPos_, $GlobalPos } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/net/minecraft/client/renderer/item" {
    export class $CompassItemPropertyFunction$CompassWobble {
    }
    export class $CompassItemPropertyFunction$CompassTarget {
    }
    export interface $CompassItemPropertyFunction$CompassTarget {
        getPos(arg0: $ClientLevel, arg1: $ItemStack_, arg2: $Entity): $GlobalPos;
    }
    /**
     * Values that may be interpreted as {@link $CompassItemPropertyFunction$CompassTarget}.
     */
    export type $CompassItemPropertyFunction$CompassTarget_ = ((arg0: $ClientLevel, arg1: $ItemStack, arg2: $Entity) => $GlobalPos_);
    export class $CompassItemPropertyFunction implements $ClampedItemPropertyFunction {
        unclampedCall(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number): number;
        /**
         * @deprecated
         */
        call(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number): number;
        static DEFAULT_ROTATION: number;
        compassTarget: $CompassItemPropertyFunction$CompassTarget;
        constructor(arg0: $CompassItemPropertyFunction$CompassTarget_);
    }
    export class $ClampedItemPropertyFunction {
    }
    export interface $ClampedItemPropertyFunction extends $ItemPropertyFunction {
        /**
         * @deprecated
         */
        call(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number): number;
        unclampedCall(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ClampedItemPropertyFunction}.
     */
    export type $ClampedItemPropertyFunction_ = ((arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number) => number);
    export class $ItemProperties {
        static getProperty(arg0: $ItemStack_, arg1: $ResourceLocation_): $ItemPropertyFunction;
        static register(arg0: $Item_, arg1: $ResourceLocation_, arg2: $ClampedItemPropertyFunction_): void;
        static register(arg0: $Item_, arg1: $ResourceLocation_, arg2: $ItemPropertyFunction_): void;
        static registerGeneric(arg0: $ResourceLocation_, arg1: $ClampedItemPropertyFunction_): $ClampedItemPropertyFunction;
        static registerGeneric(arg0: $ResourceLocation_, arg1: $ItemPropertyFunction_): $ItemPropertyFunction;
        static registerCustomModelData(arg0: $ItemPropertyFunction_): void;
        constructor();
    }
    /**
     * @deprecated
     */
    export class $ItemPropertyFunction {
    }
    export interface $ItemPropertyFunction {
        call(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemPropertyFunction}.
     */
    export type $ItemPropertyFunction_ = ((arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number) => number);
}
