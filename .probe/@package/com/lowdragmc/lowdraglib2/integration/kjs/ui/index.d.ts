import { $ModularUIContainerMenu } from "@package/com/lowdragmc/lowdraglib2/gui/holder";
import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IContainerUIHolder } from "@package/com/lowdragmc/lowdraglib2/gui/factory";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $RegisterMenuScreensEvent } from "@package/net/neoforged/neoforge/client/event";
import { $MenuProvider, $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Predicate, $Supplier } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $Object } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/integration/kjs/ui" {
    export class $KJSPlayerUIMenuType$PlayerUIEventJS extends $UIEventJS {
        level: $Level;
        modularUI: $ModularUI;
        displayName: $Component;
        validator: $Predicate<$Player>;
        id: string;
        player: $Player;
        constructor(arg0: $Player, arg1: string);
    }
    export class $UIEventJS implements $KubeEvent, $MenuProvider, $IContainerUIHolder {
        getMenuType(): $MenuType<$ModularUIContainerMenu>;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        shouldCloseCurrentScreen(): boolean;
        level: $Level;
        modularUI: $ModularUI;
        displayName: $Component;
        validator: $Predicate<$Player>;
        id: string;
        player: $Player;
        constructor(arg0: $Player, arg1: string);
        get menuType(): $MenuType<$ModularUIContainerMenu>;
    }
    export class $KJSHeldItemUIMenuType$ItemUIEventJS extends $UIEventJS {
        itemStack: $ItemStack;
        level: $Level;
        modularUI: $ModularUI;
        displayName: $Component;
        validator: $Predicate<$Player>;
        id: string;
        hand: $InteractionHand;
        player: $Player;
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $ItemStack_, arg3: string);
    }
    export class $KJSBlockUIMenuType$BlockUIEventJS extends $UIEventJS {
        blockState: $BlockState;
        pos: $BlockPos;
        level: $Level;
        modularUI: $ModularUI;
        displayName: $Component;
        validator: $Predicate<$Player>;
        id: string;
        player: $Player;
        constructor(arg0: $Player, arg1: $BlockPos_, arg2: $BlockState_, arg3: string);
    }
    export class $LDKJSMenuTypes {
        static init(): void;
        static openHeldItemUI(arg0: $Player, arg1: $InteractionHand_, arg2: string): boolean;
        static openBlockUI(arg0: $Player, arg1: $BlockPos_, arg2: string): boolean;
        static openPlayerUI(arg0: $Player, arg1: string): boolean;
        static onRegisterMenuScreensEvent(arg0: $RegisterMenuScreensEvent): void;
        static PLAYER_UI: $Supplier<$MenuType<$ModularUIContainerMenu>>;
        static HELD_ITEM_UI: $Supplier<$MenuType<$ModularUIContainerMenu>>;
        static BLOCK_UI: $Supplier<$MenuType<$ModularUIContainerMenu>>;
        constructor();
    }
}
