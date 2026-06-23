import { $BlockAndTintGetter, $BlockGetter, $Explosion, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapColor, $FluidState } from "@package/net/minecraft/world/level/material";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $QuadCacheKey } from "@package/xfacthd/framedblocks/api/model/cache";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Predicate, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as block from "@package/xfacthd/framedblocks/api/camo/block";

declare module "@package/xfacthd/framedblocks/api/camo" {
    export class $CamoClientHandler<T extends $CamoContent<T>> {
        getRenderTypes(arg0: T, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getOrCreateModel(arg0: T): $BakedModel;
        makeHitDestroyParticle(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: T, arg8: $BlockPos_): $Particle;
        constructor();
    }
    export class $CamoContainer<C extends $CamoContent<C>, T extends $CamoContainer<C, T>> {
        isEmpty(): boolean;
        getFactory(): $CamoContainerFactory<T>;
        getContent(): C;
        rotateCamo(): T;
        canRotateCamo(): boolean;
        appendJadeTooltip(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $Consumer_<$Component>): void;
        canTriviallyConvertToItemStack(): boolean;
        getTintColor(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: number): number;
        getTintColor(arg0: $ItemStack_, arg1: number): number;
        getMapColor(arg0: $BlockGetter, arg1: $BlockPos_): $MapColor;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        get empty(): boolean;
        get factory(): $CamoContainerFactory<T>;
        get content(): C;
    }
    export class $CamoContent<C extends $CamoContent<C>> implements $QuadCacheKey {
        isEmpty(): boolean;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        getLightEmission(): number;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        getCamoId(): string;
        getTintColor(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: number): number;
        getTintColor(arg0: $ItemStack_, arg1: number): number;
        propagatesSkylightDown(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        canOcclude(): boolean;
        getClientHandler(): $CamoClientHandler<C>;
        isOccludedBy(arg0: $CamoContent<never>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        isOccludedBy(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        getAppearanceState(): $BlockState;
        isEmissive(): boolean;
        camo(): $CamoContent<never>;
        isSolid(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getMapColor(arg0: $BlockGetter, arg1: $BlockPos_): $MapColor;
        getShadeBrightness(arg0: $BlockGetter, arg1: $BlockPos_, arg2: number): number;
        getSoundType(): $SoundType;
        makeRunningLandingParticles(arg0: $BlockPos_): $ParticleOptions;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity, arg3: number): number;
        getCamoName(): $MutableComponent;
        getAsBlockState(): $BlockState;
        occludes(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        ctCtx(): $Object;
        constructor();
        get empty(): boolean;
        get lightEmission(): number;
        get camoId(): string;
        get clientHandler(): $CamoClientHandler<C>;
        get appearanceState(): $BlockState;
        get emissive(): boolean;
        get soundType(): $SoundType;
        get camoName(): $MutableComponent;
        get asBlockState(): $BlockState;
    }
    export class $TriggerRegistrar {
        static DEFAULT_REMOVAL: $Predicate<$ItemStack>;
    }
    export interface $TriggerRegistrar {
        registerApplicationPredicate(arg0: $Predicate_<$ItemStack>): void;
        registerRemovalItem(arg0: $Item_): void;
        registerRemovalPredicate(arg0: $Predicate_<$ItemStack>): void;
        registerApplicationItem(arg0: $Item_): void;
    }
    export class $CamoContainerFactory<T extends $CamoContainer<never, T>> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        removeCamo(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $ItemStack_, arg4: T): boolean;
        applyCamo(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $ItemStack_): T;
        codec(): $MapCodec<T>;
        canTriviallyConvertToItemStack(): boolean;
        validateCamo(arg0: T): boolean;
        dropCamo(arg0: T): $ItemStack;
        handleInteraction(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: T, arg4: $ItemStack_, arg5: $InteractionHand_): T;
        /**
         * @deprecated
         */
        handleInteraction(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: T, arg4: $ItemStack_): T;
        getCraftingRemainder(arg0: $ItemStack_): $ItemStack;
        canApplyInCraftingRecipe(arg0: $ItemStack_): boolean;
        applyCamoInCraftingRecipe(arg0: $ItemStack_): T;
        registerTriggerItems(arg0: $TriggerRegistrar): void;
        static MSG_BLACKLISTED: $Component;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $CamoContainerFactory}.
     */
    export type $CamoContainerFactory_<T> = RegistryTypes.FramedblocksCamoContainers;
    export interface $CamoContainerFactory<T> extends RegistryMarked<RegistryTypes.FramedblocksCamoContainersTag, RegistryTypes.FramedblocksCamoContainers> {}
}
