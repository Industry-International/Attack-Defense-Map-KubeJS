import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Container } from "@package/net/minecraft/world";
import { $BiPredicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Holder_, $RegistryAccess, $Holder } from "@package/net/minecraft/core";
import { $EnchantmentInstance, $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IntRange } from "@package/com/almostreliable/morejs/features/villager";
import { $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $EnchantmentMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Object } from "@package/java/lang";

declare module "@package/com/almostreliable/morejs/features/enchantment" {
    export class $EnchantmentTableTooltipEventJS extends $EnchantmentTableEventJS {
        getSlot(): number;
        addComponent(arg0: $Component_): void;
        addComponent(arg0: number, arg1: $Component_): void;
        getComponents(): $List<$Component>;
        removeComponent(arg0: number): void;
        clearComponents(): void;
        getRequiredLevel(): number;
        getClueId(): $ResourceLocation;
        getClue(): $EnchantmentInstance;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Level_, arg3: $Player, arg4: $EnchantmentMenu, arg5: number, arg6: $List_<$Component_>);
        get slot(): number;
        get components(): $List<$Component>;
        get requiredLevel(): number;
        get clueId(): $ResourceLocation;
        get clue(): $EnchantmentInstance;
    }
    export class $EnchantmentData {
        getEnchantments(): $List<$EnchantmentInstance>;
        addEnchantment(arg0: $Holder_<$Enchantment>, arg1: number): void;
        setRequiredLevel(arg0: number): void;
        getEnchantmentIds(): $List<$ResourceLocation>;
        removeEnchantments(arg0: $BiPredicate_<$Holder<$Enchantment>, number>): void;
        getRequiredLevel(): number;
        hasEnchantment(arg0: $ResourceLocation_): boolean;
        hasEnchantment(arg0: $ResourceLocation_, arg1: $IntRange): boolean;
        clearClue(): void;
        randomClue(): void;
        setClue(arg0: $Holder_<$Enchantment>, arg1: number): void;
        setClue(arg0: $EnchantmentInstance): void;
        getClue(): $EnchantmentInstance;
        constructor(arg0: $List_<$EnchantmentInstance>, arg1: number, arg2: $EnchantmentMenu, arg3: $Level_);
        get enchantments(): $List<$EnchantmentInstance>;
        get enchantmentIds(): $List<$ResourceLocation>;
    }
    export class $EnchantmentTableServerEventJS extends $EnchantmentTableEventJS {
        get(arg0: number): $EnchantmentData;
        getSize(): number;
        setItem(arg0: $ItemStack_): void;
        getPosition(): $BlockPos;
        itemWasChanged(): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $EnchantmentMenuState);
        get size(): number;
        set item(value: $ItemStack_);
        get position(): $BlockPos;
    }
    export class $EnchantmentTableEventJS implements $KubeLevelEvent {
        getLevel(): $Level;
        getItem(): $ItemStack;
        getPlayer(): $Player;
        getSecondItem(): $ItemStack;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Level_, arg3: $Player, arg4: $EnchantmentMenu);
        get level(): $Level;
        get item(): $ItemStack;
        get player(): $Player;
        get secondItem(): $ItemStack;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $EnchantmentMenuState {
        reset(arg0: $ItemStack_): void;
        getState(): $EnchantmentState;
        setState(arg0: $EnchantmentState_): void;
        getMenu(): $EnchantmentMenu;
        matchesCurrentItem(arg0: $ItemStack_): boolean;
        setEnchantments(arg0: number, arg1: $List_<$EnchantmentInstance>): void;
        getEnchantments(arg0: number): $List<$EnchantmentInstance>;
        prepareEvent(arg0: $ItemStack_): void;
        getPlayer(): $Player;
        storeItemIsEnchantable(arg0: boolean): boolean;
        setFreezeBroadcast(arg0: boolean): void;
        isFreezeBroadcast(): boolean;
        clearEnchantments(): void;
        getCurrentItem(): $ItemStack;
        setCurrentItem(arg0: $ItemStack_): void;
        constructor(arg0: $EnchantmentMenu, arg1: $Player);
        get menu(): $EnchantmentMenu;
        get player(): $Player;
    }
    export class $EnchantmentState extends $Enum<$EnchantmentState> {
        static values(): $EnchantmentState[];
        static valueOf(arg0: string): $EnchantmentState;
        static STORE_ENCHANTMENTS: $EnchantmentState;
        static IDLE: $EnchantmentState;
        static USE_STORED_ENCHANTMENTS: $EnchantmentState;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentState}.
     */
    export type $EnchantmentState_ = "idle" | "store_enchantments" | "use_stored_enchantments";
    export class $PlayerEnchantEventJS extends $EnchantmentTableEventJS {
        getEnchantments(): $List<$EnchantmentInstance>;
        getPosition(): $BlockPos;
        getEnchantmentIds(): $List<$ResourceLocation>;
        getRequiredLevel(): number;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $EnchantmentMenuState, arg6: number, arg7: $List_<$EnchantmentInstance>);
        get enchantments(): $List<$EnchantmentInstance>;
        get position(): $BlockPos;
        get enchantmentIds(): $List<$ResourceLocation>;
        get requiredLevel(): number;
    }
    export class $IsEnchantableEventJS extends $EnchantmentTableServerEventJS {
        setIsEnchantable(arg0: boolean): void;
        getIsEnchantable(): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_, arg4: $EnchantmentMenuState, arg5: $MutableBoolean);
    }
    export class $EnchantmentMenuExtension {
        static morejs$cast(arg0: $EnchantmentMenu): $EnchantmentMenuExtension;
    }
    export interface $EnchantmentMenuExtension {
        morejs$getState(): ($EnchantmentMenuState) | undefined;
        morejs$getCosts(): number[];
        morejs$getRandom(): $RandomSource;
        morejs$getLevelClues(): number[];
        morejs$getEnchantmentClues(): number[];
        morejs$getContainer(): $Container;
    }
}
