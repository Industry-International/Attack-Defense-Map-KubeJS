import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EntityTickList } from "@package/net/minecraft/world/level/entity";

declare module "@package/com/replaymod/replay/mixin" {
    export class $EntityPlayerAccessor {
    }
    export interface $EntityPlayerAccessor extends $EntityLivingBaseAccessor {
        setItemStackMainHand(arg0: $ItemStack_): void;
        getItemStackMainHand(): $ItemStack;
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
        setPrevEquippedProgressOffHand(arg0: number): void;
        setPrevEquippedProgressMainHand(arg0: number): void;
        setEquippedProgressMainHand(arg0: number): void;
        setItemStackOffHand(arg0: $ItemStack_): void;
        setEquippedProgressOffHand(arg0: number): void;
        set itemStackMainHand(value: $ItemStack_);
        set prevEquippedProgressOffHand(value: number);
        set prevEquippedProgressMainHand(value: number);
        set equippedProgressMainHand(value: number);
        set itemStackOffHand(value: $ItemStack_);
        set equippedProgressOffHand(value: number);
    }
    export class $EntityLivingBaseAccessor {
    }
    export interface $EntityLivingBaseAccessor {
        getInterpTargetYaw(): number;
        getInterpTargetX(): number;
        getInterpTargetZ(): number;
        getInterpTargetY(): number;
        getInterpTargetPitch(): number;
        getActiveItemStackUseCount(): number;
        setActiveItemStackUseCount(arg0: number): void;
        get interpTargetYaw(): number;
        get interpTargetX(): number;
        get interpTargetZ(): number;
        get interpTargetY(): number;
        get interpTargetPitch(): number;
    }
}
