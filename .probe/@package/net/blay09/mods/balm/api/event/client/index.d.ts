import { $ItemStack_, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Minecraft, $Camera } from "@package/net/minecraft/client";
import { $Window } from "@package/com/mojang/blaze3d/platform";
import { $List, $List_ } from "@package/java/util";
import { $BalmEvent } from "@package/net/blay09/mods/balm/api/event";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
export * as screen from "@package/net/blay09/mods/balm/api/event/client/screen";

declare module "@package/net/blay09/mods/balm/api/event/client" {
    export class $RenderHandEvent extends $BalmEvent {
        getItemStack(): $ItemStack;
        getHand(): $InteractionHand;
        getSwingProgress(): number;
        constructor(arg0: $InteractionHand_, arg1: $ItemStack_, arg2: number);
        get itemStack(): $ItemStack;
        get hand(): $InteractionHand;
        get swingProgress(): number;
    }
    export class $GuiDrawEvent$Element extends $Enum<$GuiDrawEvent$Element> {
        static values(): $GuiDrawEvent$Element[];
        static valueOf(arg0: string): $GuiDrawEvent$Element;
        static ALL: $GuiDrawEvent$Element;
        static BOSS_INFO: $GuiDrawEvent$Element;
        static CHAT: $GuiDrawEvent$Element;
        static HEALTH: $GuiDrawEvent$Element;
        static PLAYER_LIST: $GuiDrawEvent$Element;
        static DEBUG: $GuiDrawEvent$Element;
    }
    /**
     * Values that may be interpreted as {@link $GuiDrawEvent$Element}.
     */
    export type $GuiDrawEvent$Element_ = "all" | "health" | "chat" | "debug" | "boss_info" | "player_list";
    export class $ConnectedToServerEvent extends $BalmEvent {
        getClient(): $Minecraft;
        constructor(arg0: $Minecraft);
        get client(): $Minecraft;
    }
    export class $ClientStartedEvent extends $BalmEvent {
        getMinecraft(): $Minecraft;
        constructor(arg0: $Minecraft);
        get minecraft(): $Minecraft;
    }
    export class $ItemTooltipEvent extends $BalmEvent {
        getFlags(): $TooltipFlag;
        getToolTip(): $List<$Component>;
        getItemStack(): $ItemStack;
        getPlayer(): $Player;
        constructor(arg0: $ItemStack_, arg1: $Player, arg2: $List_<$Component_>, arg3: $TooltipFlag);
        get flags(): $TooltipFlag;
        get toolTip(): $List<$Component>;
        get itemStack(): $ItemStack;
        get player(): $Player;
    }
    export class $UseItemInputEvent extends $BalmEvent {
        getHand(): $InteractionHand;
        constructor(arg0: $InteractionHand_);
        get hand(): $InteractionHand;
    }
    export class $FovUpdateEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        setFov(arg0: number): void;
        getFov(): number;
        constructor(arg0: $LivingEntity);
        get entity(): $LivingEntity;
    }
    export class $GuiDrawEvent extends $BalmEvent {
        getElement(): $GuiDrawEvent$Element;
        getWindow(): $Window;
        getGuiGraphics(): $GuiGraphics;
        constructor(arg0: $Window, arg1: $GuiGraphics, arg2: $GuiDrawEvent$Element_);
        get element(): $GuiDrawEvent$Element;
        get window(): $Window;
        get guiGraphics(): $GuiGraphics;
    }
    export class $OpenScreenEvent extends $BalmEvent {
        setScreen(arg0: $Screen): void;
        getNewScreen(): $Screen;
        getScreen(): $Screen;
        constructor(arg0: $Screen);
        get newScreen(): $Screen;
    }
    export class $BlockHighlightDrawEvent extends $BalmEvent {
        getHitResult(): $BlockHitResult;
        getCamera(): $Camera;
        getPoseStack(): $PoseStack;
        getMultiBufferSource(): $MultiBufferSource;
        constructor(arg0: $BlockHitResult, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $Camera);
        get hitResult(): $BlockHitResult;
        get camera(): $Camera;
        get poseStack(): $PoseStack;
        get multiBufferSource(): $MultiBufferSource;
    }
    export class $GuiDrawEvent$Post extends $GuiDrawEvent {
        constructor(arg0: $Window, arg1: $GuiGraphics, arg2: $GuiDrawEvent$Element_);
    }
    export class $GuiDrawEvent$Pre extends $GuiDrawEvent {
        constructor(arg0: $Window, arg1: $GuiGraphics, arg2: $GuiDrawEvent$Element_);
    }
    /**
     * @deprecated
     */
    export class $RecipesUpdatedEvent extends $BalmEvent {
        getRegistryAccess(): $RegistryAccess;
        getRecipeManager(): $RecipeManager;
        constructor(arg0: $RecipeManager, arg1: $RegistryAccess);
        get registryAccess(): $RegistryAccess;
        get recipeManager(): $RecipeManager;
    }
    export class $DisconnectedFromServerEvent extends $BalmEvent {
        getClient(): $Minecraft;
        constructor(arg0: $Minecraft);
        get client(): $Minecraft;
    }
}
