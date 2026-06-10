import { $CreativeModeTab_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $Set_, $Set } from "@package/java/util";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ClipboardObject } from "@package/com/moulberry/axiom/clipboard";
import { $ByteBufferBuilder } from "@package/com/mojang/blaze3d/vertex";
import { $ServerWorldPropertiesRegistry } from "@package/com/moulberry/axiom/world_properties/server";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/moulberry/axiom/hooks" {
    export class $SpriteContentsExt {
    }
    export interface $SpriteContentsExt {
        axiom$setOpacity(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsExt}.
     */
    export type $SpriteContentsExt_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $ConnectionProtocolExt {
    }
    export interface $ConnectionProtocolExt {
        axiom$getCustomPacketPayloadId(): number;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionProtocolExt}.
     */
    export type $ConnectionProtocolExt_ = (() => number);
    export class $CreativeModeInventoryScreenExt {
    }
    export interface $CreativeModeInventoryScreenExt {
        axiom$renderTabButton(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $CreativeModeTab_, arg4: boolean): void;
        axiom$checkTabClicked(arg0: $CreativeModeTab_, arg1: number, arg2: number): boolean;
        axiom$checkTabHovering(arg0: $GuiGraphics, arg1: $CreativeModeTab_, arg2: number, arg3: number): boolean;
        axiom$selectTab(arg0: $CreativeModeTab_): void;
    }
    export class $NativeImageExt {
    }
    export interface $NativeImageExt {
        axiom$asByteArray(): number[];
    }
    /**
     * Values that may be interpreted as {@link $NativeImageExt}.
     */
    export type $NativeImageExt_ = (() => number[]);
    export class $ClientLevelExt {
    }
    export interface $ClientLevelExt {
        axiom$isTimeFrozen(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelExt}.
     */
    export type $ClientLevelExt_ = (() => boolean);
    export class $LevelRendererExt {
    }
    export interface $LevelRendererExt {
        axiom$popTranslucentRenderTarget(): void;
        axiom$pushTranslucentRenderTarget(arg0: $RenderTarget): void;
    }
    export class $PalettedContainerExt {
    }
    export interface $PalettedContainerExt {
        axiom$unlock(): void;
        axiom$lock(): void;
    }
    export class $GameRendererExt {
    }
    export interface $GameRendererExt {
    }
    export class $ThreadedLevelLightEngineExt {
    }
    export interface $ThreadedLevelLightEngineExt {
        axiom$checkSectionBlocks(arg0: number, arg1: number, arg2: number, arg3: number[]): void;
        axiom$waitForPendingTasks(arg0: number, arg1: number): $CompletableFuture<never>;
    }
    export class $MinecraftExt {
    }
    export interface $MinecraftExt {
        axiom$popMainRenderTarget(): void;
        axiom$addCustomNbtData(arg0: $ItemStack_, arg1: $BlockEntity, arg2: $RegistryAccess): void;
        axiom$getRightClickDelay(): number;
        axiom$pushMainRenderTarget(arg0: $RenderTarget): void;
        axiom$setRightClickDelay(arg0: number): void;
    }
    export class $ServerPlayerExt {
    }
    export interface $ServerPlayerExt {
        axiom$isNoPhysicalTrigger(): boolean;
        axiom$setNoPhysicalTrigger(arg0: boolean): void;
    }
    export class $BufferBuilderExt {
    }
    export interface $BufferBuilderExt {
        axiom$reserve(arg0: number): number;
        axiom$getVertexPointer(): number;
        axiom$getByteBufferBuilder(): $ByteBufferBuilder;
    }
    export class $BlockItemStatePropertiesExt {
    }
    export interface $BlockItemStatePropertiesExt {
        axiom$addToTooltip(arg0: $Consumer_<$Component>, arg1: $Set_<string>): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockItemStatePropertiesExt}.
     */
    export type $BlockItemStatePropertiesExt_ = ((arg0: $Consumer<$Component>, arg1: $Set<string>) => void);
    export class $ServerLevelExt {
    }
    export interface $ServerLevelExt {
        axiom$markChunkDirty(arg0: number, arg1: number): void;
        axiom$getWorldProperties(): $ServerWorldPropertiesRegistry;
        axiom$getPendingLightUpdates(arg0: number, arg1: number, arg2: number): number[];
        axiom$relightChunkStarlight(arg0: number, arg1: number): void;
        axiom$processTasks(): void;
    }
    export class $MarkerEntityExt {
    }
    export interface $MarkerEntityExt {
        axiom$getData(): $CompoundTag;
    }
    /**
     * Values that may be interpreted as {@link $MarkerEntityExt}.
     */
    export type $MarkerEntityExt_ = (() => $CompoundTag_);
    export class $ServerGamePacketListenerImplExt {
    }
    export interface $ServerGamePacketListenerImplExt {
        ackWorldPropertiesUpTo(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerGamePacketListenerImplExt}.
     */
    export type $ServerGamePacketListenerImplExt_ = ((arg0: number) => void);
    export class $WindowExt {
    }
    export interface $WindowExt {
        axiom$resizeFramebuffer(arg0: number, arg1: number, arg2: number): void;
        axiom$resize(arg0: number, arg1: number, arg2: number): void;
    }
    export class $StructureTemplateExt {
    }
    export interface $StructureTemplateExt {
        axiom$fillFromClipboard(arg0: $ClipboardObject): void;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplateExt}.
     */
    export type $StructureTemplateExt_ = ((arg0: $ClipboardObject) => void);
}
