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
        makeHitDestroyParticle(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: T, arg8: $BlockPos_): $Particle;
        getOrCreateModel(arg0: T): $BakedModel;
        getRenderTypes(arg0: T, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        constructor();
    }
    export class $CamoContainer<C extends $CamoContent<C>, T extends $CamoContainer<C, T>> {
        isEmpty(): boolean;
        getFactory(): $CamoContainerFactory<T>;
        getContent(): C;
        getTintColor(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: number): number;
        getTintColor(arg0: $ItemStack_, arg1: number): number;
        rotateCamo(): T;
        canRotateCamo(): boolean;
        appendJadeTooltip(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $Consumer_<$Component>): void;
        canTriviallyConvertToItemStack(): boolean;
        getMapColor(arg0: $BlockGetter, arg1: $BlockPos_): $MapColor;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        get empty(): boolean;
        get factory(): $CamoContainerFactory<T>;
        get content(): C;
    }
    export class $CamoContent<C extends $CamoContent<C>> implements $QuadCacheKey {
        isEmpty(): boolean;
        getTintColor(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: number): number;
        getTintColor(arg0: $ItemStack_, arg1: number): number;
        getLightEmission(): number;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        getMapColor(arg0: $BlockGetter, arg1: $BlockPos_): $MapColor;
        getShadeBrightness(arg0: $BlockGetter, arg1: $BlockPos_, arg2: number): number;
        getAsBlockState(): $BlockState;
        getCamoName(): $MutableComponent;
        getSoundType(): $SoundType;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity, arg3: number): number;
        isSolid(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        propagatesSkylightDown(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        canOcclude(): boolean;
        isEmissive(): boolean;
        camo(): $CamoContent<never>;
        ctCtx(): $Object;
        occludes(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        makeRunningLandingParticles(arg0: $BlockPos_): $ParticleOptions;
        getClientHandler(): $CamoClientHandler<C>;
        isOccludedBy(arg0: $CamoContent<never>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        isOccludedBy(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        getAppearanceState(): $BlockState;
        getCamoId(): string;
        constructor();
        get empty(): boolean;
        get lightEmission(): number;
        get asBlockState(): $BlockState;
        get camoName(): $MutableComponent;
        get soundType(): $SoundType;
        get emissive(): boolean;
        get clientHandler(): $CamoClientHandler<C>;
        get appearanceState(): $BlockState;
        get camoId(): string;
    }
    export class $TriggerRegistrar {
        static DEFAULT_REMOVAL: $Predicate<$ItemStack>;
    }
    export interface $TriggerRegistrar {
        registerApplicationPredicate(arg0: $Predicate_<$ItemStack>): void;
        registerApplicationItem(arg0: $Item_): void;
        registerRemovalPredicate(arg0: $Predicate_<$ItemStack>): void;
        registerRemovalItem(arg0: $Item_): void;
    }
    export class $CamoContainerFactory<T extends $CamoContainer<never, T>> {
        codec(): $MapCodec<T>;
        validateCamo(arg0: T): boolean;
        canTriviallyConvertToItemStack(): boolean;
        handleInteraction(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: T, arg4: $ItemStack_, arg5: $InteractionHand_): T;
        /**
         * @deprecated
         */
        handleInteraction(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: T, arg4: $ItemStack_): T;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        dropCamo(arg0: T): $ItemStack;
        applyCamo(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $ItemStack_): T;
        removeCamo(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $ItemStack_, arg4: T): boolean;
        getCraftingRemainder(arg0: $ItemStack_): $ItemStack;
        registerTriggerItems(arg0: $TriggerRegistrar): void;
        canApplyInCraftingRecipe(arg0: $ItemStack_): boolean;
        applyCamoInCraftingRecipe(arg0: $ItemStack_): T;
        static MSG_BLACKLISTED: $Component;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $CamoContainerFactory}.
     */
    export type $CamoContainerFactory_<T> = RegistryTypes.FramedblocksCamoContainers;
    export interface $CamoContainerFactory extends RegistryMarked<RegistryTypes.FramedblocksCamoContainersTag, RegistryTypes.FramedblocksCamoContainers> {}
}
