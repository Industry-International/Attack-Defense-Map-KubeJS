import { $BlockModificationKubeEvent } from "@package/dev/latvian/mods/kubejs/block";
import { $GunDataLoadEvent, $AttachmentTagsLoadEvent, $AttachmentDataLoadEvent } from "@package/dev/aika/taczjs/neoforge/events/asset";
import { $MenuScreenRegistryKubeEvent, $BlockEntityRendererRegistryKubeEvent, $KeybindRegistryKubeEvent, $EntityRendererRegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/client";
import { $MoldEventJS } from "@package/com/jesz/createdieselgenerators/compat/kubejs";
import { VillagerProfession, Fluid, Potion, Block, Item, MobEffect, VillagerType, PointOfInterestType, ParticleType, CustomStat, CreativeModeTab, NeoforgeFluidType, Attribute, SoundEvent, ArmorMaterial } from "@side-only/startup/events/registry";
import { $AmmoIndexLoadEvent, $AttachmentIndexLoadEvent, $GunIndexLoadEvent } from "@package/dev/aika/taczjs/neoforge/events/index";
import { $RecipeLoadEvent, $RecipeLoadBeginEvent, $RecipeLoadEndEvent } from "@package/dev/aika/taczjs/neoforge/events/crafting/legacy";
import { $ItemModelPropertiesKubeEvent, $ItemModificationKubeEvent } from "@package/dev/latvian/mods/kubejs/item";
import { $KubeStartupEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $KJSPlayerUIMenuType$PlayerUIEventJS, $KJSHeldItemUIMenuType$ItemUIEventJS, $KJSBlockUIMenuType$BlockUIEventJS } from "@package/com/lowdragmc/lowdraglib2/integration/kjs/ui";
import { $CreativeTabKubeEvent } from "@package/dev/latvian/mods/kubejs/item/creativetab";
import { $ItemToolTierRegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/item/custom";
export * as registry from "@side-only/startup/events/registry";

declare module "@side-only/startup/events" {
}

export {};

declare global {
    namespace StartupEvents {
        function registry(type: "fluid", handler: ((event: Fluid) => void)): void;
        function registry(type: "villager_profession", handler: ((event: VillagerProfession) => void)): void;
        function registry(type: "particle_type", handler: ((event: ParticleType) => void)): void;
        function registry(type: "item", handler: ((event: Item) => void)): void;
        function registry(type: "mob_effect", handler: ((event: MobEffect) => void)): void;
        function registry(type: "sound_event", handler: ((event: SoundEvent) => void)): void;
        function registry(type: "potion", handler: ((event: Potion) => void)): void;
        function registry(type: "villager_type", handler: ((event: VillagerType) => void)): void;
        function registry(type: "attribute", handler: ((event: Attribute) => void)): void;
        function registry(type: "armor_material", handler: ((event: ArmorMaterial) => void)): void;
        function registry(type: "block", handler: ((event: Block) => void)): void;
        function registry(type: "custom_stat", handler: ((event: CustomStat) => void)): void;
        function registry(type: "neoforge:fluid_type", handler: ((event: NeoforgeFluidType) => void)): void;
        function registry(type: "point_of_interest_type", handler: ((event: PointOfInterestType) => void)): void;
        function registry(type: "creative_mode_tab", handler: ((event: CreativeModeTab) => void)): void;
    }
    namespace ItemEvents {
        function modelProperties(handler: ((event: $ItemModelPropertiesKubeEvent) => void)): void;
        /**
         * Invoked after all items are registered to modify them.
         */
        function modification(handler: ((event: $ItemModificationKubeEvent) => void)): void;
        /**
         * Invoked when the game is starting up and the item tool tiers are being registered.
         */
        function toolTierRegistry(handler: ((event: $ItemToolTierRegistryKubeEvent) => void)): void;
    }
    namespace LDLib2UI {
        function item(extra: string, handler: ((event: $KJSHeldItemUIMenuType$ItemUIEventJS) => void)): void;
        function block(extra: string, handler: ((event: $KJSBlockUIMenuType$BlockUIEventJS) => void)): void;
        function player(extra: string, handler: ((event: $KJSPlayerUIMenuType$PlayerUIEventJS) => void)): void;
    }
    namespace TaCZStartupEvents {
        function attachmentDataLoad(handler: ((event: $AttachmentDataLoadEvent) => void)): void;
        function attachmentIndexLoad(handler: ((event: $AttachmentIndexLoadEvent) => void)): void;
        function gunIndexLoad(handler: ((event: $GunIndexLoadEvent) => void)): void;
        function gunDataLoad(handler: ((event: $GunDataLoadEvent) => void)): void;
        function attachmentTagsLoad(handler: ((event: $AttachmentTagsLoadEvent) => void)): void;
        function ammoIndexLoad(handler: ((event: $AmmoIndexLoadEvent) => void)): void;
        function recipeLoadEnd(handler: ((event: $RecipeLoadEndEvent) => void)): void;
        function recipeLoadBegin(handler: ((event: $RecipeLoadBeginEvent) => void)): void;
        function recipeLoad(handler: ((event: $RecipeLoadEvent) => void)): void;
    }
    namespace ClientEvents {
        function blockEntityRendererRegistry(handler: ((event: $BlockEntityRendererRegistryKubeEvent) => void)): void;
        function menuScreenRegistry(handler: ((event: $MenuScreenRegistryKubeEvent) => void)): void;
        function entityRendererRegistry(handler: ((event: $EntityRendererRegistryKubeEvent) => void)): void;
    }
    namespace StartupEvents {
        function init(handler: ((event: $KubeStartupEvent) => void)): void;
        function modifyCreativeTab(extra: $ResourceLocation_, handler: ((event: $CreativeTabKubeEvent) => void)): void;
        function postInit(handler: ((event: $KubeStartupEvent) => void)): void;
    }
    namespace CDGEvents {
        function molds(handler: ((event: $MoldEventJS) => void)): void;
    }
    namespace BlockEvents {
        function modification(handler: ((event: $BlockModificationKubeEvent) => void)): void;
    }
    namespace KeyBindEvents {
        function registry(handler: ((event: $KeybindRegistryKubeEvent) => void)): void;
    }
}
