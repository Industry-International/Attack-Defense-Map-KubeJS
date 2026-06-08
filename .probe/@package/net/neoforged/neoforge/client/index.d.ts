import { $RenderStateShard$LightmapStateShard, $RenderStateShard$LineStateShard, $LevelRenderer, $RenderStateShard$DepthTestStateShard, $RenderStateShard$OutputStateShard, $RenderStateShard$CullStateShard, $RenderStateShard$TexturingStateShard, $RenderStateShard$WriteMaskStateShard, $GameRenderer, $RenderStateShard$OverlayStateShard, $FogRenderer$FogMode_, $RenderStateShard$ShaderStateShard, $MultiBufferSource_, $RenderType, $RenderStateShard$TextureStateShard, $RenderStateShard$LayeringStateShard, $DimensionSpecialEffects, $RenderStateShard$TransparencyStateShard, $RenderStateShard$EmptyTextureStateShard, $RenderStateShard$ColorLogicStateShard, $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $Recipe, $RecipeManager, $RecipeHolder_, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $EntityType_, $HumanoidArm_, $Entity, $HumanoidArm, $EquipmentSlot_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ReloadableResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $KeyMapping, $Minecraft, $MouseHandler, $Camera, $DeltaTracker, $RecipeBookCategories, $Options } from "@package/net/minecraft/client";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $SpriteSourceType } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $RenderBlockScreenEffectEvent$OverlayType_, $AddSectionGeometryEvent$AdditionalSectionRenderer, $RenderLevelStageEvent$Stage, $RenderTooltipEvent$Color, $ScreenshotEvent, $RenderLevelStageEvent, $CustomizeGuiOverlayEvent$BossEventProgress, $InputEvent$InteractionKeyMappingTriggered, $RenderTooltipEvent$Pre, $ScreenEvent$RenderInventoryMobEffects, $RegisterShadersEvent, $RegisterClientCommandsEvent, $AddSectionGeometryEvent$AdditionalSectionRenderer_, $CalculatePlayerTurnEvent } from "@package/net/neoforged/neoforge/client/event";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $SessionSearchTrees$Key, $ClientLevel, $MultiPlayerGameMode, $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Music } from "@package/net/minecraft/sounds";
import { $PresetEditor } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $ExtendedChunkRenderTypeSet } from "@package/net/fabricmc/fabric/impl/blockrenderlayer";
import { $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $SoundEngine } from "@package/net/minecraft/client/sounds";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Connection } from "@package/net/minecraft/network";
import { $ChunkRenderTypeSetAccessor as $ChunkRenderTypeSetAccessor$1 } from "@package/dev/eriksonn/aeronautics/mixin/levitite";
import { $ClientTooltipComponent, $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $RecipeBookType, $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $FogShape_ } from "@package/com/mojang/blaze3d/shaders";
import { $TooltipFlag, $CreativeModeTab_, $ArmorMaterial$Layer, $CreativeModeTab, $ItemStack_, $ItemStack, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $PlayerChatMessage_, $Component_, $ChatType$Bound_, $FormattedText, $Component } from "@package/net/minecraft/network/chat";
import { $ParticleRenderType_, $ParticleRenderType, $FireworkParticles$Starter, $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VeilClientSuggestionProvider } from "@package/foundry/veil/ext";
import { $SharedSuggestionProvider, $CommandSource, $CommandBuildContext, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $TooltipFlagExtension } from "@package/dev/simulated_team/simulated/mixin_interface/tooltip_flag";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $SearchTree_, $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $Vec2, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector3f } from "@package/org/joml";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $BakedModel, $ModelResourceLocation_, $ModelManager, $ModelBakery, $AtlasSet$StitchResult, $Material } from "@package/net/minecraft/client/resources/model";
import { $UUID_, $Set_, $Map, $Spliterator, $List, $Map_, $Collection_, $List_, $Comparator, $Iterator, $BitSet } from "@package/java/util";
import { $Model, $HumanoidModel } from "@package/net/minecraft/client/model";
import { $ChunkRenderTypeSetAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $HolderLookup$RegistryLookup, $BlockPos_, $Direction_, $Registry } from "@package/net/minecraft/core";
import { $FabricClientCommandSource } from "@package/net/fabricmc/fabric/api/client/command/v2";
import { $BlockColors, $BlockTintCache } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $TextureAtlas, $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Runnable, $Enum, $Iterable, $Iterable_, $Record, $Object } from "@package/java/lang";
import { $File_ } from "@package/java/io";
import { $ColorResolver, $ColorResolver_, $Level_, $BlockAndTintGetter, $GameType_, $Level } from "@package/net/minecraft/world/level";
import { $RenderChunkRegion } from "@package/net/minecraft/client/renderer/chunk";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $FogType_ } from "@package/net/minecraft/world/level/material";
import { $BakedQuad, $BlockElement } from "@package/net/minecraft/client/renderer/block/model";
import { $Toast_ } from "@package/net/minecraft/client/gui/components/toasts";
import { $FireworkExplosion$Shape_ } from "@package/net/minecraft/world/item/component";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $LocalPlayer, $Input, $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $LerpingBossEvent } from "@package/net/minecraft/client/gui/components";
import { $ImmutableList, $ImmutableMap$Builder, $BiMap } from "@package/com/google/common/collect";
import { $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $Stream } from "@package/java/util/stream";
import { $EffectRenderingInventoryScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $TitleScreen, $ReceivingLevelScreen, $ReceivingLevelScreen$Reason, $Screen, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as event from "@package/net/neoforged/neoforge/client/event";
export * as extensions from "@package/net/neoforged/neoforge/client/extensions";
export * as model from "@package/net/neoforged/neoforge/client/model";
export * as gui from "@package/net/neoforged/neoforge/client/gui";
export * as settings from "@package/net/neoforged/neoforge/client/settings";
export * as command from "@package/net/neoforged/neoforge/client/command";
export * as textures from "@package/net/neoforged/neoforge/client/textures";
export * as entity from "@package/net/neoforged/neoforge/client/entity";
export * as loading from "@package/net/neoforged/neoforge/client/loading";
export * as resources from "@package/net/neoforged/neoforge/client/resources";
export * as internal from "@package/net/neoforged/neoforge/client/internal";
export * as util from "@package/net/neoforged/neoforge/client/util";

declare module "@package/net/neoforged/neoforge/client" {
    export class $IArmPoseTransformer {
    }
    export interface $IArmPoseTransformer {
        applyTransform(arg0: $HumanoidModel<never>, arg1: $LivingEntity, arg2: $HumanoidArm_): void;
    }
    /**
     * Values that may be interpreted as {@link $IArmPoseTransformer}.
     */
    export type $IArmPoseTransformer_ = ((arg0: $HumanoidModel<never>, arg1: $LivingEntity, arg2: $HumanoidArm) => void);
    export class $ChunkRenderTypeSet implements $Iterable<$RenderType>, $ChunkRenderTypeSetAccessor$1, $ChunkRenderTypeSetAccessor, $ExtendedChunkRenderTypeSet {
        isEmpty(): boolean;
        iterator(): $Iterator<$RenderType>;
        static of(arg0: $Collection_<$RenderType>): $ChunkRenderTypeSet;
        static of(...arg0: $RenderType[]): $ChunkRenderTypeSet;
        contains(arg0: $RenderType): boolean;
        asList(): $List<$RenderType>;
        static all(): $ChunkRenderTypeSet;
        static union(arg0: $Iterable_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        static union(arg0: $Collection_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        static union(...arg0: $ChunkRenderTypeSet[]): $ChunkRenderTypeSet;
        static none(): $ChunkRenderTypeSet;
        static intersection(...arg0: $ChunkRenderTypeSet[]): $ChunkRenderTypeSet;
        static intersection(arg0: $Collection_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        static intersection(arg0: $Iterable_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        static setChunkRenderTypesList$aeronautics_$md$d64506$0(arg0: $List_<any>): void;
        static setChunkRenderTypes$aeronautics_$md$d64506$1(arg0: $RenderType[]): void;
        sinytra$firstLayer(): $RenderType;
        static create$sodium_$md$d64506$2(arg0: $BitSet): $ChunkRenderTypeSet;
        spliterator(): $Spliterator<$RenderType>;
        forEach(arg0: $Consumer_<$RenderType>): void;
        getBits(): $BitSet;
        [Symbol.iterator](): Iterator<$RenderType>
        get empty(): boolean;
        static set chunkRenderTypesList$aeronautics_$md$d64506$0(value: $List_<any>);
        static set chunkRenderTypes$aeronautics_$md$d64506$1(value: $RenderType[]);
        get bits(): $BitSet;
    }
    export class $ItemDecoratorHandler {
        static of(arg0: $ItemStack_): $ItemDecoratorHandler;
        static init(): void;
        render(arg0: $GuiGraphics, arg1: $Font, arg2: $ItemStack_, arg3: number, arg4: number): void;
        handler$cif000$acceleratedrendering$startRenderingCustomDecoration(arg0: $GuiGraphics, arg1: $Font, arg2: $ItemStack_, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        handler$cif000$acceleratedrendering$stopRenderingCustomDecorationPart(arg0: $GuiGraphics, arg1: $Font, arg2: $ItemStack_, arg3: number, arg4: number, arg5: $CallbackInfo): void;
    }
    export class $DimensionTransitionScreenManager {
        static getScreen(arg0: $ResourceKey_<$Level>, arg1: $ResourceKey_<$Level>): $DimensionTransitionScreenManager$ReceivingLevelScreenFactory;
        static getScreenFromLevel(arg0: $Level_, arg1: $Level_): $DimensionTransitionScreenManager$ReceivingLevelScreenFactory;
        constructor();
    }
    export class $ChunkRenderTypeSet$IteratorImpl implements $Iterator<$RenderType> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<$RenderType>): void;
    }
    export class $NeoForgeRenderTypes$Internal {
    }
    export class $ClientCommandSourceStack extends $CommandSourceStack implements $FabricClientCommandSource, $VeilClientSuggestionProvider {
        veil$getPostPipelineNames(): $Stream<any>;
        sendError(arg0: $Component_): void;
        getPlayer(): $LocalPlayer;
        getWorld(): $ClientLevel;
        sendFeedback(arg0: $Component_): void;
        getClient(): $Minecraft;
        getMeta(arg0: string): $Object;
        source: $CommandSource;
        static ERROR_NOT_ENTITY: $SimpleCommandExceptionType;
        static ERROR_NOT_PLAYER: $SimpleCommandExceptionType;
        constructor(arg0: $CommandSource, arg1: $Vec3_, arg2: $Vec2, arg3: number, arg4: string, arg5: $Component_, arg6: $Entity);
        get player(): $LocalPlayer;
        get world(): $ClientLevel;
        get client(): $Minecraft;
    }
    export class $BlockEntityRenderBoundsDebugRenderer {
        static onRenderLevelStage(arg0: $RenderLevelStageEvent): void;
        static onRegisterClientCommands(arg0: $RegisterClientCommandsEvent): void;
    }
    export class $EntitySpectatorShaderManager {
        static get(arg0: $EntityType_<never>): $ResourceLocation;
        static init(): void;
    }
    export class $ClientHooks {
        static getFieldOfView(arg0: $GameRenderer, arg1: $Camera, arg2: number, arg3: number, arg4: boolean): number;
        static getGuiFarPlane(): number;
        static onRegisterParticleProviders(arg0: $ParticleEngine): void;
        static resolveLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        static onTextureAtlasStitched(arg0: $TextureAtlas): void;
        static handleCameraTransforms(arg0: $PoseStack, arg1: $BakedModel, arg2: $ItemDisplayContext_, arg3: boolean): $BakedModel;
        static initClientHooks(arg0: $Minecraft, arg1: $ReloadableResourceManager): void;
        static onScreenMouseScrollPost(arg0: $MouseHandler, arg1: $Screen, arg2: number, arg3: number): void;
        static getTurnPlayerValues(arg0: number, arg1: boolean): $CalculatePlayerTurnEvent;
        static onScreenMouseReleasedPost(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: boolean): boolean;
        static onScreenMouseClickedPre(arg0: $Screen, arg1: number, arg2: number, arg3: number): boolean;
        static onScreenMouseClickedPost(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: boolean): boolean;
        static onScreenMouseReleasedPre(arg0: $Screen, arg1: number, arg2: number, arg3: number): boolean;
        static onScreenMouseDragPost(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static onScreenMouseDragPre(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        static onScreenMouseScrollPre(arg0: $MouseHandler, arg1: $Screen, arg2: number, arg3: number): boolean;
        static onScreenCharTypedPost(arg0: $Screen, arg1: string, arg2: number): void;
        static onScreenCharTypedPre(arg0: $Screen, arg1: string, arg2: number): boolean;
        static onScreenKeyPressedPre(arg0: $Screen, arg1: number, arg2: number, arg3: number): boolean;
        static onScreenKeyPressedPost(arg0: $Screen, arg1: number, arg2: number, arg3: number): boolean;
        static onScreenKeyReleasedPre(arg0: $Screen, arg1: number, arg2: number, arg3: number): boolean;
        static onScreenKeyReleasedPost(arg0: $Screen, arg1: number, arg2: number, arg3: number): boolean;
        static onMouseButtonPost(arg0: number, arg1: number, arg2: number): void;
        static onMouseScroll(arg0: $MouseHandler, arg1: number, arg2: number): boolean;
        static onMouseButtonPre(arg0: number, arg1: number, arg2: number): boolean;
        static isBlockInSolidLayer(arg0: $BlockState_): boolean;
        static registerSpriteSourceTypes(): void;
        static getFogColor(arg0: $Camera, arg1: number, arg2: $ClientLevel, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Vector3f;
        static getEntityRenderType(arg0: $RenderType, arg1: boolean): $RenderType;
        static shouldCauseReequipAnimation(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): boolean;
        static reloadRenderer(): void;
        static gatherTooltipComponentsFromElements(arg0: $ItemStack_, arg1: $List_<$Either<$FormattedText, $TooltipComponent>>, arg2: number, arg3: number, arg4: number, arg5: $Font): $List<$ClientTooltipComponent>;
        static copyModelProperties<T extends $LivingEntity>(arg0: $HumanoidModel<T>, arg1: $HumanoidModel<never>): void;
        static registerLayerDefinition(arg0: $ModelLayerLocation, arg1: $Supplier_<$LayerDefinition>): void;
        static getFieldOfViewModifier(arg0: $Player, arg1: number): number;
        static onMovementInputUpdate(arg0: $Player, arg1: $Input): void;
        static getArmorTexture(arg0: $Entity, arg1: $ItemStack_, arg2: $ArmorMaterial$Layer, arg3: boolean, arg4: $EquipmentSlot_): $ResourceLocation;
        static playSound(arg0: $SoundEngine, arg1: $SoundInstance): $SoundInstance;
        static onModelBake(arg0: $ModelManager, arg1: $Map_<$ModelResourceLocation_, $BakedModel>, arg2: $ModelBakery): void;
        static onRenderTooltipPre(arg0: $ItemStack_, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $List_<$ClientTooltipComponent>, arg7: $Font, arg8: $ClientTooltipPositioner_): $RenderTooltipEvent$Pre;
        static getFilteredRecipeBookTypeValues(): $RecipeBookType[];
        static onRenderTooltipColor(arg0: $ItemStack_, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: $Font, arg5: $List_<$ClientTooltipComponent>): $RenderTooltipEvent$Color;
        static gatherTooltipComponents(arg0: $ItemStack_, arg1: $List_<$FormattedText>, arg2: number, arg3: number, arg4: number, arg5: $Font): $List<$ClientTooltipComponent>;
        static gatherTooltipComponents(arg0: $ItemStack_, arg1: $List_<$FormattedText>, arg2: ($TooltipComponent) | undefined, arg3: number, arg4: number, arg5: number, arg6: $Font): $List<$ClientTooltipComponent>;
        static renderMainMenu(arg0: $TitleScreen, arg1: $GuiGraphics, arg2: $Font, arg3: number, arg4: number, arg5: number): void;
        static onDrawHighlight(arg0: $LevelRenderer, arg1: $Camera, arg2: $HitResult, arg3: $DeltaTracker, arg4: $PoseStack, arg5: $MultiBufferSource_): boolean;
        static onRegisterKeyMappings(arg0: $Options): void;
        static firePlayerLogin(arg0: $MultiPlayerGameMode, arg1: $LocalPlayer, arg2: $Connection): void;
        static makeParticleRenderTypeComparator(arg0: $List_<$ParticleRenderType_>): $Comparator<$ParticleRenderType>;
        static onClientSendMessage(arg0: string): string;
        static loadEntityShader(arg0: $Entity, arg1: $GameRenderer): void;
        static renderSpecificFirstPersonHand(arg0: $InteractionHand_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $ItemStack_): boolean;
        static renderSpecificFirstPersonArm(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: $HumanoidArm_): boolean;
        static popGuiLayer(arg0: $Minecraft): void;
        static pushGuiLayer(arg0: $Minecraft, arg1: $Screen): void;
        static fireRenderFramePost(arg0: $DeltaTracker): void;
        static onClientPauseChangePre(arg0: boolean): boolean;
        static onClientPauseChangePost(arg0: boolean): void;
        static isBlockEntityRendererVisible<T extends $BlockEntity>(arg0: $BlockEntityRenderDispatcher, arg1: $BlockEntity, arg2: $Frustum): boolean;
        static firePlayerRespawn(arg0: $MultiPlayerGameMode, arg1: $LocalPlayer, arg2: $LocalPlayer, arg3: $Connection): void;
        static onRecipesUpdated(arg0: $RecipeManager): void;
        static onToastAdd(arg0: $Toast_): boolean;
        static onKeyInput(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static onClickInput(arg0: number, arg1: $KeyMapping, arg2: $InteractionHand_): $InputEvent$InteractionKeyMappingTriggered;
        static resizeGuiLayers(arg0: $Minecraft, arg1: number, arg2: number): void;
        static fireClientTickPre(): void;
        static fireClientTickPost(): void;
        static firePlayerLogout(arg0: $MultiPlayerGameMode, arg1: $LocalPlayer): void;
        static clearGuiLayers(arg0: $Minecraft): void;
        static fireRenderFramePre(arg0: $DeltaTracker): void;
        static dispatchRenderStage(arg0: $RenderType, arg1: $LevelRenderer, arg2: $Matrix4f, arg3: $Matrix4f, arg4: number, arg5: $Camera, arg6: $Frustum): void;
        static dispatchRenderStage(arg0: $RenderLevelStageEvent$Stage, arg1: $LevelRenderer, arg2: $PoseStack, arg3: $Matrix4f, arg4: $Matrix4f, arg5: number, arg6: $Camera, arg7: $Frustum): void;
        static shouldRenderEffect(arg0: $MobEffectInstance): boolean;
        static onScreenPotionSize(arg0: $Screen, arg1: number, arg2: boolean, arg3: number): $ScreenEvent$RenderInventoryMobEffects;
        static getEffectTooltip(arg0: $EffectRenderingInventoryScreen<never>, arg1: $MobEffectInstance, arg2: $List_<$Component_>): $List<$Component>;
        static drawScreen(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        static getDetachedCameraDistance(arg0: $Camera, arg1: boolean, arg2: number, arg3: number): number;
        static onModifyBakingResult(arg0: $Map_<$ModelResourceLocation_, $BakedModel>, arg1: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, arg2: $ModelBakery): void;
        static getBlockMaterial(arg0: $ResourceLocation_): $Material;
        static onCustomizeBossEventProgress(arg0: $GuiGraphics, arg1: $Window, arg2: $LerpingBossEvent, arg3: number, arg4: number, arg5: number): $CustomizeGuiOverlayEvent$BossEventProgress;
        static isNameplateInRenderDistance(arg0: $Entity, arg1: number): boolean;
        static onBlockColorsInit(arg0: $BlockColors): void;
        static onItemColorsInit(arg0: $ItemColors, arg1: $BlockColors): void;
        static onClientPlayerChat(arg0: $ChatType$Bound_, arg1: $Component_, arg2: $PlayerChatMessage_, arg3: $UUID_): $Component;
        static onClientChat(arg0: $ChatType$Bound_, arg1: $Component_, arg2: $UUID_): $Component;
        static onClientSystemChat(arg0: $Component_, arg1: boolean): $Component;
        static selectMusic(arg0: $Music, arg1: $SoundInstance): $Music;
        static getTooltipFont(arg0: $ItemStack_, arg1: $Font): $Font;
        static onRegisterAdditionalModels(arg0: $Set_<$ModelResourceLocation_>): void;
        static gatherMaterialAtlases(arg0: $Map_<$ResourceLocation_, $ResourceLocation_>): $Map<$ResourceLocation, $ResourceLocation>;
        static getArmorModel(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $HumanoidModel<never>): $Model;
        static calculateFaceWithoutAO(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BakedQuad, arg4: boolean, arg5: number[], arg6: number[]): boolean;
        static loadLayerDefinitions(arg0: $ImmutableMap$Builder<$ModelLayerLocation, $LayerDefinition>): void;
        static getShaderImportLocation(arg0: string, arg1: boolean, arg2: string): $ResourceLocation;
        static gatherAdditionalRenderers(arg0: $BlockPos_, arg1: $Level_): $List<$AddSectionGeometryEvent$AdditionalSectionRenderer>;
        static addAdditionalGeometry(arg0: $List_<$AddSectionGeometryEvent$AdditionalSectionRenderer_>, arg1: $Function_<$RenderType, $VertexConsumer>, arg2: $RenderChunkRegion, arg3: $PoseStack): void;
        static makeSpriteSourceTypesMap(): $BiMap<$ResourceLocation, $SpriteSourceType>;
        static onClientChangeGameType(arg0: $PlayerInfo, arg1: $GameType_, arg2: $GameType_): void;
        static renderPistonMovedBlocks(arg0: $BlockPos_, arg1: $BlockState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: $Level_, arg5: boolean, arg6: number, arg7: $BlockRenderDispatcher): void;
        static fixDomain(arg0: string, arg1: string): string;
        static fillNormal(arg0: number[], arg1: $Direction_): void;
        static renderFireOverlay(arg0: $Player, arg1: $PoseStack): boolean;
        static fixItemModelSeams(arg0: $List_<$BlockElement>, arg1: $TextureAtlasSprite): $List<$BlockElement>;
        static onFogRender(arg0: $FogRenderer$FogMode_, arg1: $FogType_, arg2: $Camera, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $FogShape_): void;
        static onScreenshot(arg0: $NativeImage, arg1: $File_): $ScreenshotEvent;
        static renderBlockOverlay(arg0: $Player, arg1: $PoseStack, arg2: $RenderBlockScreenEffectEvent$OverlayType_, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        static renderWaterOverlay(arg0: $Player, arg1: $PoseStack): boolean;
        static getMaxMipmapLevel(arg0: number, arg1: number): number;
        static forgeStatusLine: string;
        constructor();
        static get guiFarPlane(): number;
        static get filteredRecipeBookTypeValues(): $RecipeBookType[];
    }
    export class $RenderTypeHelper {
        static getFallbackItemRenderType(arg0: $ItemStack_, arg1: $BakedModel, arg2: boolean): $RenderType;
        static getEntityRenderType(arg0: $RenderType, arg1: boolean): $RenderType;
        static getMovingBlockRenderType(arg0: $RenderType): $RenderType;
    }
    export class $ExtendedServerListData extends $Record {
        type(): string;
        truncated(): boolean;
        isCompatible(): boolean;
        numberOfMods(): number;
        extraReason(): string;
        constructor(arg0: string, arg1: boolean, arg2: number, arg3: string);
        constructor(type: string, isCompatible: boolean, numberOfMods: number, extraReason: string, truncated: boolean);
        get compatible(): boolean;
    }
    export class $RenderTypeGroup extends $Record {
        isEmpty(): boolean;
        block(): $RenderType;
        entity(): $RenderType;
        entityFabulous(): $RenderType;
        static EMPTY: $RenderTypeGroup;
        constructor(block: $RenderType, entity: $RenderType, entityFabulous: $RenderType);
        constructor(arg0: $RenderType, arg1: $RenderType);
        get empty(): boolean;
    }
    export class $RecipeBookManager {
        static init(): void;
        static getAggregateCategories(): $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static getCustomCategoriesOrEmpty(arg0: $RecipeBookType_): $List<$RecipeBookCategories>;
        static findCategories<T extends $Recipe<never>>(arg0: $RecipeType_<T>, arg1: $RecipeHolder_<T>): $RecipeBookCategories;
        constructor();
        static get aggregateCategories(): $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
    }
    export class $ChunkRenderTypeSet$All extends $ChunkRenderTypeSet {
    }
    export class $ClientHooks$ClientEvents {
        static registerShaders(arg0: $RegisterShadersEvent): void;
        static getEntityTranslucentUnlitShader(): $ShaderInstance;
        constructor();
        static get entityTranslucentUnlitShader(): $ShaderInstance;
    }
    export class $ParticleBoundsDebugRenderer {
        static onRenderLevelStage(arg0: $RenderLevelStageEvent): void;
        static onRegisterClientCommands(arg0: $RegisterClientCommandsEvent): void;
    }
    export class $ChunkRenderTypeSet$None extends $ChunkRenderTypeSet {
    }
    export class $StencilManager {
        static reserveBit(): number;
        static releaseBit(arg0: number): void;
    }
    export class $FireworkShapeFactoryRegistry$Factory {
    }
    export interface $FireworkShapeFactoryRegistry$Factory {
        build(arg0: $FireworkParticles$Starter, arg1: boolean, arg2: boolean, arg3: number[], arg4: number[]): void;
    }
    /**
     * Values that may be interpreted as {@link $FireworkShapeFactoryRegistry$Factory}.
     */
    export type $FireworkShapeFactoryRegistry$Factory_ = ((arg0: $FireworkParticles$Starter, arg1: boolean, arg2: boolean, arg3: number[], arg4: number[]) => void);
    export class $ClientNeoForgeMod {
        constructor(arg0: $IEventBus, arg1: $ModContainer);
    }
    export class $TagConventionLogWarningClient {
    }
    export class $ClientTooltipFlag extends $Record implements $TooltipFlag, $TooltipFlagExtension {
        static of(arg0: $TooltipFlag): $TooltipFlag;
        creative(): boolean;
        hasShiftDown(): boolean;
        isCreative(): boolean;
        advanced(): boolean;
        hasAltDown(): boolean;
        isAdvanced(): boolean;
        hasControlDown(): boolean;
        shiftDown(): boolean;
        altDown(): boolean;
        simulated$setCreativeSearch(arg0: boolean): void;
        simulated$getCreativeSearch(): boolean;
        controlDown(): boolean;
        constructor(advanced: boolean, creative: boolean, shiftDown: boolean, controlDown: boolean, altDown: boolean);
    }
    export class $NeoForgeRenderTypes$CustomizableTextureState extends $RenderStateShard$TextureStateShard {
        static RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_DECAL_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_ALPHA_SHADER: $RenderStateShard$ShaderStateShard;
        static PARTICLES_TARGET: $RenderStateShard$OutputStateShard;
        static RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_LIGHTNING_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_SOLID_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_GUI_OVERLAY_SHADER: $RenderStateShard$ShaderStateShard;
        static NO_TEXTURE: $RenderStateShard$EmptyTextureStateShard;
        static LIGHTNING_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        setupState: $Runnable;
        static GLINT_TEXTURING: $RenderStateShard$TexturingStateShard;
        static ENTITY_GLINT_TEXTURING: $RenderStateShard$TexturingStateShard;
        static RENDERTYPE_END_GATEWAY_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TEXT_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_OUTLINE_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_TEX_SHADER: $RenderStateShard$ShaderStateShard;
        static LIGHTMAP: $RenderStateShard$LightmapStateShard;
        static RENDERTYPE_ENTITY_CUTOUT_SHADER: $RenderStateShard$ShaderStateShard;
        static ADDITIVE_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER: $RenderStateShard$ShaderStateShard;
        blur: boolean;
        static DEFAULT_LINE: $RenderStateShard$LineStateShard;
        static RENDERTYPE_GUI_SHADER: $RenderStateShard$ShaderStateShard;
        static OUTLINE_TARGET: $RenderStateShard$OutputStateShard;
        static RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER: $RenderStateShard$ShaderStateShard;
        static NO_DEPTH_TEST: $RenderStateShard$DepthTestStateShard;
        static RENDERTYPE_ENTITY_TRANSLUCENT_SHADER: $RenderStateShard$ShaderStateShard;
        static POLYGON_OFFSET_LAYERING: $RenderStateShard$LayeringStateShard;
        static NO_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TEXT_SEE_THROUGH_SHADER: $RenderStateShard$ShaderStateShard;
        static CULL: $RenderStateShard$CullStateShard;
        static OR_REVERSE_COLOR_LOGIC: $RenderStateShard$ColorLogicStateShard;
        static NO_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static VIEW_OFFSET_Z_LAYERING: $RenderStateShard$LayeringStateShard;
        static NO_LAYERING: $RenderStateShard$LayeringStateShard;
        mipmap: boolean;
        static RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_LEASH_SHADER: $RenderStateShard$ShaderStateShard;
        static NO_OVERLAY: $RenderStateShard$OverlayStateShard;
        static NO_CULL: $RenderStateShard$CullStateShard;
        static RENDERTYPE_CLOUDS_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_COLOR_TEX_LIGHTMAP_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_COLOR_LIGHTMAP_SHADER: $RenderStateShard$ShaderStateShard;
        static TRANSLUCENT_TARGET: $RenderStateShard$OutputStateShard;
        static OVERLAY: $RenderStateShard$OverlayStateShard;
        static TRANSLUCENT_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_GLINT_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_COLOR_SHADER: $RenderStateShard$ShaderStateShard;
        static CRUMBLING_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static RENDERTYPE_CRUMBLING_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_EYES_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_WATER_MASK_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_CUTOUT_SHADER: $RenderStateShard$ShaderStateShard;
        static COLOR_DEPTH_WRITE: $RenderStateShard$WriteMaskStateShard;
        static RENDERTYPE_TRIPWIRE_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_SHADOW_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TEXT_BACKGROUND_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TRANSLUCENT_SHADER: $RenderStateShard$ShaderStateShard;
        static NO_COLOR_LOGIC: $RenderStateShard$ColorLogicStateShard;
        name: string;
        static RENDERTYPE_ENERGY_SWIRL_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_GLINT_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_BEACON_BEAM_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_CUTOUT_MIPPED_SHADER: $RenderStateShard$ShaderStateShard;
        static DEPTH_WRITE: $RenderStateShard$WriteMaskStateShard;
        static CLOUDS_TARGET: $RenderStateShard$OutputStateShard;
        static NO_LIGHTMAP: $RenderStateShard$LightmapStateShard;
        static MAIN_TARGET: $RenderStateShard$OutputStateShard;
        static RENDERTYPE_GLINT_TRANSLUCENT_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_END_PORTAL_SHADER: $RenderStateShard$ShaderStateShard;
        static WEATHER_TARGET: $RenderStateShard$OutputStateShard;
        static LEQUAL_DEPTH_TEST: $RenderStateShard$DepthTestStateShard;
        static RENDERTYPE_LINES_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_BREEZE_WIND_SHADER: $RenderStateShard$ShaderStateShard;
        static BLOCK_SHEET_MIPPED: $RenderStateShard$TextureStateShard;
        static RENDERTYPE_ENTITY_SOLID_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_NO_OUTLINE_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER: $RenderStateShard$ShaderStateShard;
        static COLOR_WRITE: $RenderStateShard$WriteMaskStateShard;
        static ITEM_ENTITY_TARGET: $RenderStateShard$OutputStateShard;
        static RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER: $RenderStateShard$ShaderStateShard;
        static MAX_ENCHANTMENT_GLINT_SPEED_MILLIS: number;
        static DEFAULT_TEXTURING: $RenderStateShard$TexturingStateShard;
        static EQUAL_DEPTH_TEST: $RenderStateShard$DepthTestStateShard;
        static GLINT_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static VIEW_SCALE_Z_EPSILON: number;
        clearState: $Runnable;
        static RENDERTYPE_TEXT_INTENSITY_SHADER: $RenderStateShard$ShaderStateShard;
        static GREATER_DEPTH_TEST: $RenderStateShard$DepthTestStateShard;
        static RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER: $RenderStateShard$ShaderStateShard;
        static BLOCK_SHEET: $RenderStateShard$TextureStateShard;
    }
    export class $DimensionTransitionScreenManager$ReceivingLevelScreenFactory {
    }
    export interface $DimensionTransitionScreenManager$ReceivingLevelScreenFactory {
        create(arg0: $BooleanSupplier_, arg1: $ReceivingLevelScreen$Reason_): $ReceivingLevelScreen;
    }
    /**
     * Values that may be interpreted as {@link $DimensionTransitionScreenManager$ReceivingLevelScreenFactory}.
     */
    export type $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_ = ((arg0: $BooleanSupplier, arg1: $ReceivingLevelScreen$Reason) => $ReceivingLevelScreen);
    export class $GlStateBackup {
        cullEnabled: boolean;
        polyOffsetLineEnabled: boolean;
        depthMask: boolean;
        blendSrcAlpha: number;
        colorLogicOp: number;
        stencilMask: number;
        scissorEnabled: boolean;
        stencilFuncFunc: number;
        colorMaskBlue: boolean;
        polyOffsetUnits: number;
        colorLogicEnabled: boolean;
        blendDestRgb: number;
        blendDestAlpha: number;
        polyOffsetFactor: number;
        blendEnabled: boolean;
        stencilZFail: number;
        stencilFuncMask: number;
        colorMaskRed: boolean;
        blendSrcRgb: number;
        stencilFail: number;
        stencilZPass: number;
        colorMaskGreen: boolean;
        stencilFuncRef: number;
        colorMaskAlpha: boolean;
        depthEnabled: boolean;
        polyOffsetFillEnabled: boolean;
        depthFunc: number;
        constructor();
    }
    export class $CreativeModeTabSearchRegistry {
        static getNameSearchKeys(): $Map<$CreativeModeTab, $SessionSearchTrees$Key>;
        static getTagSearchKeys(): $Map<$CreativeModeTab, $SessionSearchTrees$Key>;
        static getTagSearchKey(arg0: $CreativeModeTab_): $SessionSearchTrees$Key;
        static getNameSearchKey(arg0: $CreativeModeTab_): $SessionSearchTrees$Key;
        static getTagSearchTree(arg0: $SessionSearchTrees$Key): $CompletableFuture<$SearchTree<$ItemStack>>;
        static putNameSearchTree(arg0: $SessionSearchTrees$Key, arg1: $CompletableFuture<$SearchTree_<$ItemStack>>): void;
        static getNameSearchTree(arg0: $SessionSearchTrees$Key): $CompletableFuture<$SearchTree<$ItemStack>>;
        static putTagSearchTree(arg0: $SessionSearchTrees$Key, arg1: $CompletableFuture<$SearchTree_<$ItemStack>>): void;
        constructor();
        static get nameSearchKeys(): $Map<$CreativeModeTab, $SessionSearchTrees$Key>;
        static get tagSearchKeys(): $Map<$CreativeModeTab, $SessionSearchTrees$Key>;
    }
    export class $FireworkShapeFactoryRegistry {
        static get(arg0: $FireworkExplosion$Shape_): $FireworkShapeFactoryRegistry$Factory;
        static register(arg0: $FireworkExplosion$Shape_, arg1: $FireworkShapeFactoryRegistry$Factory_): void;
        constructor();
    }
    export class $DimensionSpecialEffectsManager {
        static init(): void;
        static getForType(arg0: $ResourceLocation_): $DimensionSpecialEffects;
    }
    export class $ColorResolverManager {
        static init(): void;
        static registerBlockTintCaches(arg0: $ClientLevel, arg1: $Map_<$ColorResolver_, $BlockTintCache>): void;
        static getRegisteredResolvers(): $ImmutableList<$ColorResolver>;
        static get registeredResolvers(): $ImmutableList<$ColorResolver>;
    }
    export class $PresetEditorManager {
        static get(arg0: $ResourceKey_<$WorldPreset>): $PresetEditor;
    }
    export class $ClientCommandHandler {
        static init(): void;
        static getSource(): $ClientCommandSourceStack;
        static getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        static runCommand(arg0: string): boolean;
        static mergeServerCommands(arg0: $CommandDispatcher<$SharedSuggestionProvider>, arg1: $CommandBuildContext): $CommandDispatcher<$SharedSuggestionProvider>;
        constructor();
        static get source(): $ClientCommandSourceStack;
        static get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
    }
    export class $NamedRenderTypeManager {
        static get(arg0: $ResourceLocation_): $RenderTypeGroup;
        static init(): void;
    }
    export class $IItemDecorator {
    }
    export interface $IItemDecorator {
        render(arg0: $GuiGraphics, arg1: $Font, arg2: $ItemStack_, arg3: number, arg4: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IItemDecorator}.
     */
    export type $IItemDecorator_ = ((arg0: $GuiGraphics, arg1: $Font, arg2: $ItemStack, arg3: number, arg4: number) => boolean);
    export class $NeoForgeRenderTypes extends $Enum<$NeoForgeRenderTypes> {
        get(): $RenderType;
        static values(): $NeoForgeRenderTypes[];
        static valueOf(arg0: string): $NeoForgeRenderTypes;
        static getText(arg0: $ResourceLocation_): $RenderType;
        static getTextIntensity(arg0: $ResourceLocation_): $RenderType;
        static getTextSeeThrough(arg0: $ResourceLocation_): $RenderType;
        static getTextPolygonOffset(arg0: $ResourceLocation_): $RenderType;
        static getTextIntensityPolygonOffset(arg0: $ResourceLocation_): $RenderType;
        static getTextIntensitySeeThrough(arg0: $ResourceLocation_): $RenderType;
        static getTranslucentParticlesTarget(arg0: $ResourceLocation_): $RenderType;
        static getUnlitTranslucent(arg0: $ResourceLocation_): $RenderType;
        static getUnlitTranslucent(arg0: $ResourceLocation_, arg1: boolean): $RenderType;
        static getItemLayeredCutout(arg0: $ResourceLocation_): $RenderType;
        static getUnsortedTranslucent(arg0: $ResourceLocation_): $RenderType;
        static getItemLayeredCutoutMipped(arg0: $ResourceLocation_): $RenderType;
        static getEntityCutoutMipped(arg0: $ResourceLocation_): $RenderType;
        static getItemLayeredTranslucent(arg0: $ResourceLocation_): $RenderType;
        static getItemLayeredSolid(arg0: $ResourceLocation_): $RenderType;
        static enableTextTextureLinearFiltering: boolean;
        static TRANSLUCENT_ON_PARTICLES_TARGET: $NeoForgeRenderTypes;
        static ITEM_UNLIT_TRANSLUCENT: $NeoForgeRenderTypes;
        static ITEM_LAYERED_TRANSLUCENT: $NeoForgeRenderTypes;
        static ITEM_UNSORTED_TRANSLUCENT: $NeoForgeRenderTypes;
        static ITEM_LAYERED_SOLID: $NeoForgeRenderTypes;
        static ITEM_LAYERED_CUTOUT: $NeoForgeRenderTypes;
        static ITEM_LAYERED_CUTOUT_MIPPED: $NeoForgeRenderTypes;
        static ITEM_UNSORTED_UNLIT_TRANSLUCENT: $NeoForgeRenderTypes;
    }
    /**
     * Values that may be interpreted as {@link $NeoForgeRenderTypes}.
     */
    export type $NeoForgeRenderTypes_ = "item_layered_solid" | "item_layered_cutout" | "item_layered_cutout_mipped" | "item_layered_translucent" | "item_unsorted_translucent" | "item_unlit_translucent" | "item_unsorted_unlit_translucent" | "translucent_on_particles_target";
}
