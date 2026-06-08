import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $TutorialToast } from "@package/net/minecraft/client/gui/components/toasts";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer, $Input } from "@package/net/minecraft/client/player";
import { $ClickAction_ } from "@package/net/minecraft/world/inventory";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $Enum } from "@package/java/lang";
import { $HitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/client/tutorial" {
    export class $MovementTutorialStepInstance implements $TutorialStepInstance {
        clear(): void;
        tick(): void;
        onInput(arg0: $Input): void;
        onMouse(arg0: number, arg1: number): void;
        onLookAt(arg0: $ClientLevel, arg1: $HitResult): void;
        onOpenInventory(): void;
        onDestroyBlock(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): void;
        onGetItem(arg0: $ItemStack_): void;
        constructor(arg0: $Tutorial);
    }
    export class $Tutorial$TimedToast {
    }
    export class $CraftPlanksTutorialStep implements $TutorialStepInstance {
        clear(): void;
        tick(): void;
        static hasCraftedPlanksPreviously(arg0: $LocalPlayer, arg1: $TagKey_<$Item>): boolean;
        onGetItem(arg0: $ItemStack_): void;
        onLookAt(arg0: $ClientLevel, arg1: $HitResult): void;
        onOpenInventory(): void;
        onInput(arg0: $Input): void;
        onDestroyBlock(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): void;
        onMouse(arg0: number, arg1: number): void;
        constructor(arg0: $Tutorial);
    }
    export class $TutorialStepInstance {
    }
    export interface $TutorialStepInstance {
        clear(): void;
        tick(): void;
        onLookAt(arg0: $ClientLevel, arg1: $HitResult): void;
        onOpenInventory(): void;
        onInput(arg0: $Input): void;
        onDestroyBlock(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): void;
        onGetItem(arg0: $ItemStack_): void;
        onMouse(arg0: number, arg1: number): void;
    }
    export class $BundleTutorial {
        onInventoryAction(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ClickAction_): void;
        constructor(arg0: $Tutorial, arg1: $Options);
    }
    export class $FindTreeTutorialStepInstance implements $TutorialStepInstance {
        clear(): void;
        tick(): void;
        onLookAt(arg0: $ClientLevel, arg1: $HitResult): void;
        static hasPunchedTreesPreviously(arg0: $LocalPlayer): boolean;
        onGetItem(arg0: $ItemStack_): void;
        onOpenInventory(): void;
        onInput(arg0: $Input): void;
        onDestroyBlock(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): void;
        onMouse(arg0: number, arg1: number): void;
        constructor(arg0: $Tutorial);
    }
    export class $CompletedTutorialStepInstance implements $TutorialStepInstance {
        clear(): void;
        tick(): void;
        onLookAt(arg0: $ClientLevel, arg1: $HitResult): void;
        onOpenInventory(): void;
        onInput(arg0: $Input): void;
        onDestroyBlock(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): void;
        onGetItem(arg0: $ItemStack_): void;
        onMouse(arg0: number, arg1: number): void;
        constructor(arg0: $Tutorial);
    }
    export class $Tutorial {
        static key(arg0: string): $Component;
        start(): void;
        stop(): void;
        tick(): void;
        onLookAt(arg0: $ClientLevel, arg1: $HitResult): void;
        addTimedToast(arg0: $TutorialToast, arg1: number): void;
        removeTimedToast(arg0: $TutorialToast): void;
        onOpenInventory(): void;
        getMinecraft(): $Minecraft;
        onInventoryAction(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ClickAction_): void;
        onInput(arg0: $Input): void;
        isSurvival(): boolean;
        onDestroyBlock(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): void;
        onGetItem(arg0: $ItemStack_): void;
        setStep(arg0: $TutorialSteps_): void;
        onMouse(arg0: number, arg1: number): void;
        constructor(arg0: $Minecraft, arg1: $Options);
        get minecraft(): $Minecraft;
        get survival(): boolean;
        set step(value: $TutorialSteps_);
    }
    export class $OpenInventoryTutorialStep implements $TutorialStepInstance {
        clear(): void;
        tick(): void;
        onOpenInventory(): void;
        onLookAt(arg0: $ClientLevel, arg1: $HitResult): void;
        onInput(arg0: $Input): void;
        onDestroyBlock(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): void;
        onGetItem(arg0: $ItemStack_): void;
        onMouse(arg0: number, arg1: number): void;
        constructor(arg0: $Tutorial);
    }
    export class $PunchTreeTutorialStepInstance implements $TutorialStepInstance {
        clear(): void;
        tick(): void;
        onDestroyBlock(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): void;
        onGetItem(arg0: $ItemStack_): void;
        onLookAt(arg0: $ClientLevel, arg1: $HitResult): void;
        onOpenInventory(): void;
        onInput(arg0: $Input): void;
        onMouse(arg0: number, arg1: number): void;
        constructor(arg0: $Tutorial);
    }
    export class $TutorialSteps extends $Enum<$TutorialSteps> {
        getName(): string;
        static values(): $TutorialSteps[];
        static valueOf(arg0: string): $TutorialSteps;
        create(arg0: $Tutorial): $TutorialStepInstance;
        static getByName(arg0: string): $TutorialSteps;
        static PUNCH_TREE: $TutorialSteps;
        static MOVEMENT: $TutorialSteps;
        static FIND_TREE: $TutorialSteps;
        static OPEN_INVENTORY: $TutorialSteps;
        static NONE: $TutorialSteps;
        static CRAFT_PLANKS: $TutorialSteps;
    }
    /**
     * Values that may be interpreted as {@link $TutorialSteps}.
     */
    export type $TutorialSteps_ = "movement" | "find_tree" | "punch_tree" | "open_inventory" | "craft_planks" | "none";
}
