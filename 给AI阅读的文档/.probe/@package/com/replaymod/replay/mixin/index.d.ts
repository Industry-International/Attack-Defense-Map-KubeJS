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
        setPrevEquippedProgressOffHand(arg0: number): void;
        setEquippedProgressMainHand(arg0: number): void;
        setPrevEquippedProgressMainHand(arg0: number): void;
        setItemStackMainHand(arg0: $ItemStack_): void;
        setEquippedProgressOffHand(arg0: number): void;
        setItemStackOffHand(arg0: $ItemStack_): void;
        set prevEquippedProgressOffHand(value: number);
        set equippedProgressMainHand(value: number);
        set prevEquippedProgressMainHand(value: number);
        set itemStackMainHand(value: $ItemStack_);
        set equippedProgressOffHand(value: number);
        set itemStackOffHand(value: $ItemStack_);
    }
    export class $EntityLivingBaseAccessor {
    }
    export interface $EntityLivingBaseAccessor {
        getInterpTargetYaw(): number;
        getInterpTargetZ(): number;
        getInterpTargetX(): number;
        getInterpTargetY(): number;
        setActiveItemStackUseCount(arg0: number): void;
        getInterpTargetPitch(): number;
        getActiveItemStackUseCount(): number;
        get interpTargetYaw(): number;
        get interpTargetZ(): number;
        get interpTargetX(): number;
        get interpTargetY(): number;
        get interpTargetPitch(): number;
    }
}
