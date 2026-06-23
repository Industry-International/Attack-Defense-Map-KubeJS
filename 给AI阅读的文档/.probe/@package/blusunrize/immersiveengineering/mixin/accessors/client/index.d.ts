import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $SubtitleOverlay } from "@package/net/minecraft/client/gui/components";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $GuiMessage } from "@package/net/minecraft/client";
import { $List, $Map_, $Map, $Set, $Set_ } from "@package/java/util";
import { $EntityModel } from "@package/net/minecraft/client/model";
import { $AdvancementHolder, $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $FontSet, $FontManager } from "@package/net/minecraft/client/gui/font";

declare module "@package/blusunrize/immersiveengineering/mixin/accessors/client" {
    export class $RenderTypeAccess {
    }
    export interface $RenderTypeAccess {
        getName(): string;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $RenderTypeAccess}.
     */
    export type $RenderTypeAccess_ = (() => string);
    export class $SimpleModelAccess {
    }
    export interface $SimpleModelAccess {
        getFabulousItemRenderTypes(): $List<$RenderType>;
        getBlockRenderTypes(): $ChunkRenderTypeSet;
        getItemRenderTypes(): $List<$RenderType>;
        get fabulousItemRenderTypes(): $List<$RenderType>;
        get blockRenderTypes(): $ChunkRenderTypeSet;
        get itemRenderTypes(): $List<$RenderType>;
    }
    export class $AdvancementToastAccess {
    }
    export interface $AdvancementToastAccess {
        getAdvancement(): $AdvancementHolder;
        get advancement(): $AdvancementHolder;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementToastAccess}.
     */
    export type $AdvancementToastAccess_ = (() => $AdvancementHolder_);
    export class $WorldRendererAccess {
    }
    export interface $WorldRendererAccess {
        callRenderHitOutline(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $Entity, arg3: number, arg4: number, arg5: number, arg6: $BlockPos_, arg7: $BlockState_): void;
    }
    /**
     * Values that may be interpreted as {@link $WorldRendererAccess}.
     */
    export type $WorldRendererAccess_ = ((arg0: $PoseStack, arg1: $VertexConsumer, arg2: $Entity, arg3: number, arg4: number, arg5: number, arg6: $BlockPos, arg7: $BlockState) => void);
    export class $FontResourceManagerAccess {
    }
    export interface $FontResourceManagerAccess {
        getFontSets(): $Map<$ResourceLocation, $FontSet>;
        get fontSets(): $Map<$ResourceLocation, $FontSet>;
    }
    /**
     * Values that may be interpreted as {@link $FontResourceManagerAccess}.
     */
    export type $FontResourceManagerAccess_ = (() => $Map_<$ResourceLocation_, $FontSet>);
    export class $CompiledSectionAccess {
    }
    export interface $CompiledSectionAccess {
        getHasBlocks(): $Set<$RenderType>;
        get hasBlocks(): $Set<$RenderType>;
    }
    /**
     * Values that may be interpreted as {@link $CompiledSectionAccess}.
     */
    export type $CompiledSectionAccess_ = (() => $Set_<$RenderType>);
    export class $MinecartRendererAccess {
    }
    export interface $MinecartRendererAccess {
        getModel(): $EntityModel<never>;
        get model(): $EntityModel<never>;
    }
    /**
     * Values that may be interpreted as {@link $MinecartRendererAccess}.
     */
    export type $MinecartRendererAccess_ = (() => $EntityModel<never>);
    export class $PlayerControllerAccess {
    }
    export interface $PlayerControllerAccess {
        getDestroyProgress(): number;
        get destroyProgress(): number;
    }
    /**
     * Values that may be interpreted as {@link $PlayerControllerAccess}.
     */
    export type $PlayerControllerAccess_ = (() => number);
    export class $ParticleManagerAccess {
    }
    export interface $ParticleManagerAccess {
        invokeMakeParticle<T extends $ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleManagerAccess}.
     */
    export type $ParticleManagerAccess_ = ((arg0: any, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number) => $Particle);
    export class $MinecraftAccess {
    }
    export interface $MinecraftAccess {
        getFontManager(): $FontManager;
        get fontManager(): $FontManager;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftAccess}.
     */
    export type $MinecraftAccess_ = (() => $FontManager);
    export class $ChatComponentAccess {
    }
    export interface $ChatComponentAccess {
        getAllMessages(): $List<$GuiMessage>;
        invokeRefreshTrimmedMessages(): void;
        get allMessages(): $List<$GuiMessage>;
    }
    export class $GuiSubtitleOverlayAccess {
    }
    export interface $GuiSubtitleOverlayAccess {
        getSubtitleOverlay(): $SubtitleOverlay;
        get subtitleOverlay(): $SubtitleOverlay;
    }
    /**
     * Values that may be interpreted as {@link $GuiSubtitleOverlayAccess}.
     */
    export type $GuiSubtitleOverlayAccess_ = (() => $SubtitleOverlay);
}
