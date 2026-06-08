import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $Supplier } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $CreativeModeTab_, $CreativeModeTab$ItemDisplayParameters_, $CreativeModeTab$TabVisibility_, $CreativeModeTab, $CreativeModeTab$Output_, $ItemStack_, $CreativeModeTab$DisplayItemsGenerator, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BuildCreativeModeTabContentsEvent } from "@package/net/neoforged/neoforge/event";
import { $Record, $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ItemPredicate_, $ItemPredicate } from "@package/dev/latvian/mods/kubejs/item";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/dev/latvian/mods/kubejs/item/creativetab" {
    export class $CreativeTabIconSupplier$Wrapper extends $Record implements $Supplier<$ItemStack> {
        supplier(): $CreativeTabIconSupplier;
        get(): $ItemStack;
        constructor(supplier: $CreativeTabIconSupplier_);
    }
    export class $CreativeTabContentSupplier {
        static DEFAULT: $CreativeTabContentSupplier;
    }
    export interface $CreativeTabContentSupplier {
        getContent(showRestrictedItems: boolean): $ItemPredicate;
    }
    /**
     * Values that may be interpreted as {@link $CreativeTabContentSupplier}.
     */
    export type $CreativeTabContentSupplier_ = ((showRestrictedItems: boolean) => $ItemPredicate_);
    export class $CreativeTabCallbackForge extends $Record implements $CreativeTabCallback {
        remove(filter: $ItemPredicate_, removeParent: boolean, removeSearch: boolean): void;
        event(): $BuildCreativeModeTabContentsEvent;
        addAfter(order: $ItemStack_, items: $ItemStack_[], visibility: $CreativeModeTab$TabVisibility_): void;
        addBefore(order: $ItemStack_, items: $ItemStack_[], visibility: $CreativeModeTab$TabVisibility_): void;
        constructor(event: $BuildCreativeModeTabContentsEvent);
    }
    export class $CreativeTabBuilder extends $BuilderBase<$CreativeModeTab> {
        content(content: $CreativeTabContentSupplier_): this;
        icon(icon: $CreativeTabIconSupplier_): this;
        registryKey: $ResourceKey<$Registry<$CreativeModeTab>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $CreativeTabContentSupplier$Wrapper extends $Record implements $CreativeModeTab$DisplayItemsGenerator {
        accept(itemDisplayParameters: $CreativeModeTab$ItemDisplayParameters_, output: $CreativeModeTab$Output_): void;
        supplier(): $CreativeTabContentSupplier;
        constructor(supplier: $CreativeTabContentSupplier_);
    }
    export class $CreativeTabKubeEvent implements $KubeEvent {
        remove(filter: $ItemPredicate_): void;
        add(items: $ItemStack_[]): void;
        add(items: $ItemStack_[], visibility: $CreativeModeTab$TabVisibility_): void;
        setIcon(icon: $ItemStack_): void;
        setDisplayName(component: $Component_): void;
        addAfter(order: $ItemStack_, items: $ItemStack_[], visibility: $CreativeModeTab$TabVisibility_): void;
        addAfter(order: $ItemStack_, items: $ItemStack_[]): void;
        addBefore(order: $ItemStack_, items: $ItemStack_[], visibility: $CreativeModeTab$TabVisibility_): void;
        addBefore(order: $ItemStack_, items: $ItemStack_[]): void;
        removeFromParent(filter: $ItemPredicate_): void;
        removeFromSearch(filter: $ItemPredicate_): void;
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
        tab: $CreativeModeTab;
        showRestrictedItems: boolean;
        constructor(tab: $CreativeModeTab_, showRestrictedItems: boolean, callback: $CreativeTabCallback);
        set icon(value: $ItemStack_);
        set displayName(value: $Component_);
    }
    export class $KubeJSCreativeTabs {
        static TAB: $Supplier<$CreativeModeTab>;
        static REGISTRY: $DeferredRegister<$CreativeModeTab>;
    }
    export interface $KubeJSCreativeTabs {
    }
    export class $CreativeTabIconSupplier {
        static DEFAULT: $CreativeTabIconSupplier;
    }
    export interface $CreativeTabIconSupplier {
        getIcon(): $ItemStack;
        get icon(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $CreativeTabIconSupplier}.
     */
    export type $CreativeTabIconSupplier_ = (() => $ItemStack_);
    export class $CreativeTabCallback {
    }
    export interface $CreativeTabCallback {
        remove(filter: $ItemPredicate_, removeParent: boolean, removeSearch: boolean): void;
        addAfter(order: $ItemStack_, items: $ItemStack_[], visibility: $CreativeModeTab$TabVisibility_): void;
        addBefore(order: $ItemStack_, items: $ItemStack_[], visibility: $CreativeModeTab$TabVisibility_): void;
    }
}
