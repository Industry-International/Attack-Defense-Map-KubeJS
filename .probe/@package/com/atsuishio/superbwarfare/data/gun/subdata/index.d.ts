import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $GunData } from "@package/com/atsuishio/superbwarfare/data/gun";
import { $ListTag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ReloadState, $IntValue, $AttachmentType_, $Timer, $ReloadState_, $BooleanValue, $Starter } from "@package/com/atsuishio/superbwarfare/data/gun/value";
import { $PerkItem } from "@package/com/atsuishio/superbwarfare/item/misc";
import { $Perk$Type_, $Perk, $PerkInstance_, $PerkInstance, $Perk_ } from "@package/com/atsuishio/superbwarfare/perk";
import { $List } from "@package/java/util";

declare module "@package/com/atsuishio/superbwarfare/data/gun/subdata" {
    export class $Reload {
        empty(): boolean;
        time(): number;
        state(): $ReloadState;
        setState(arg0: $ReloadState_): void;
        reduce(): void;
        normal(): boolean;
        setTime(arg0: number): void;
        stage(): number;
        getStage(): $IntValue;
        setStage(arg0: number): void;
        prepareTimer: $Timer;
        stage3Starter: $Starter;
        finishTimer: $Timer;
        reloadTimer: $Timer;
        prepareLoadTimer: $Timer;
        singleReloadStarter: $Starter;
        iterativeLoadTimer: $Timer;
        reloadStarter: $Starter;
        constructor(arg0: $GunData);
    }
    export class $Perks {
        remove(arg0: $Perk_): void;
        get(arg0: $Perk_): $Perk;
        get(arg0: $DeferredHolder<$Perk_, $Perk_>): $Perk;
        get(arg0: $Perk$Type_): $Perk;
        set(arg0: $Perk_, arg1: number): void;
        set(arg0: $PerkInstance_): void;
        removeAll(arg0: $Perk$Type_): void;
        getLevel(arg0: $PerkItem<never>): number;
        getLevel(arg0: $DeferredHolder<$Perk_, $Perk_>): number;
        getLevel(arg0: $Perk_): number;
        has(arg0: $Perk_): boolean;
        has(arg0: $Perk$Type_): boolean;
        getTag(arg0: $DeferredHolder<$Perk_, $Perk_>): $CompoundTag;
        getTag(arg0: $Perk_): $CompoundTag;
        getInstances(arg0: $Perk$Type_): $List<$PerkInstance>;
        getOrCreateTag(arg0: $Perk_): $CompoundTag;
        reduceCooldown(arg0: $Perk_, arg1: string): void;
        getOrCreateList(arg0: $Perk$Type_): $ListTag;
        constructor(arg0: $GunData);
    }
    export class $Charge {
        time(): number;
        timer: $Timer;
        starter: $Starter;
        constructor(arg0: $GunData);
    }
    export class $Bolt {
        needed: $BooleanValue;
        actionTimer: $Timer;
        constructor(arg0: $GunData);
    }
    export class $AmmoSlot$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $AmmoSlot {
        reset(arg0: string): void;
        reset(): void;
        set(arg0: string, arg1: number, arg2: number): void;
        getVirtualAmmo(arg0: string): number;
        getAmmo(arg0: string): number;
        static Companion: $AmmoSlot$Companion;
        static AMMO_SLOT: string;
        constructor(arg0: $CompoundTag_);
    }
    export class $Attachment {
        get(arg0: $AttachmentType_): number;
        set(arg0: $AttachmentType_, arg1: number): void;
        constructor(arg0: $GunData);
    }
}
