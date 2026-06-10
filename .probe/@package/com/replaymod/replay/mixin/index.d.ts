import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EntityTickList } from "@package/net/minecraft/world/level/entity";

declare module "@package/com/replaymod/replay/mixin" {
    export class $EntityPlayerAccessor {
    }
    export interface $EntityPlayerAccessor extends $EntityLivingBaseAccessor {
        getItemStackMainHand(): $ItemStack;
        setItemStackMainHand(arg0: $ItemStack_): void;
    }
    export class $ClientWorldAccessor {
    }
    export interface $ClientWorldAccessor {
        getTickingEntities(): $EntityTickList;
        get tickingEntities(): $EntityTickList;
    }
    /**
     * Values that may be interpreted as {@link $ClientWorldAccessor}.
     */
    export type $ClientWorldAccessor_ = (() => $EntityTickList);
    export class $FirstPersonRendererAccessor {
    }
    export interface $FirstPersonRendererAccessor {
        setItemStackMainHand(arg0: $ItemStack_): void;
        setItemStackOffHand(arg0: $ItemStack_): void;
        setEquippedProgressOffHand(arg0: number): void;
        setEquippedProgressMainHand(arg0: number): void;
        setPrevEquippedProgressMainHand(arg0: number): void;
        setPrevEquippedProgressOffHand(arg0: number): void;
        set itemStackMainHand(value: $ItemStack_);
        set itemStackOffHand(value: $ItemStack_);
        set equippedProgressOffHand(value: number);
        set equippedProgressMainHand(value: number);
        set prevEquippedProgressMainHand(value: number);
        set prevEquippedProgressOffHand(value: number);
    }
    export class $EntityLivingBaseAccessor {
    }
    export interface $EntityLivingBaseAccessor {
        setActiveItemStackUseCount(arg0: number): void;
        getInterpTargetPitch(): number;
        getActiveItemStackUseCount(): number;
        getInterpTargetZ(): number;
        getInterpTargetX(): number;
        getInterpTargetY(): number;
        getInterpTargetYaw(): number;
        get interpTargetPitch(): number;
        get interpTargetZ(): number;
        get interpTargetX(): number;
        get interpTargetY(): number;
        get interpTargetYaw(): number;
    }
}
