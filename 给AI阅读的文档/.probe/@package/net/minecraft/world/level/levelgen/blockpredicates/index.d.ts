import { $WorldGenLevel } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $List, $List_ } from "@package/java/util";
import { $Products$P1 } from "@package/com/mojang/datafixers";
import { $BiPredicate, $BiPredicate_, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_, $Vec3i } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $CombinedBlockPredicateExtension } from "@package/com/ishland/c2me/opts/allocs/common/ducks";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/levelgen/blockpredicates" {
    export class $InsideWorldBoundsPredicate implements $BlockPredicate {
        type(): $BlockPredicateType<never>;
        test(level: $WorldGenLevel, pos: $BlockPos_): boolean;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        static CODEC: $MapCodec<$InsideWorldBoundsPredicate>;
        constructor(offset: $Vec3i);
    }
    export class $BlockPredicate {
        static not(predicate: $BlockPredicate): $BlockPredicate;
        static allOf(...predicates: $BlockPredicate[]): $BlockPredicate;
        static allOf(predicates: $List_<$BlockPredicate>): $BlockPredicate;
        static allOf(predicate1: $BlockPredicate, predicate2: $BlockPredicate): $BlockPredicate;
        static matchesTag(offset: $Vec3i, tag: $TagKey_<$Block>): $BlockPredicate;
        static matchesTag(tag: $TagKey_<$Block>): $BlockPredicate;
        static noFluid(offset: $Vec3i): $BlockPredicate;
        static noFluid(): $BlockPredicate;
        static replaceable(): $BlockPredicate;
        static replaceable(offset: $Vec3i): $BlockPredicate;
        static anyOf(...predicates: $BlockPredicate[]): $BlockPredicate;
        static anyOf(predicates: $List_<$BlockPredicate>): $BlockPredicate;
        static anyOf(predicate1: $BlockPredicate, predicate2: $BlockPredicate): $BlockPredicate;
        static solid(): $BlockPredicate;
        static solid(offset: $Vec3i): $BlockPredicate;
        static alwaysTrue(): $BlockPredicate;
        static wouldSurvive(state: $BlockState_, offset: $Vec3i): $BlockPredicate;
        static matchesFluids(...fluids: $Fluid_[]): $BlockPredicate;
        static matchesFluids(offset: $Vec3i, ...fluids: $Fluid_[]): $BlockPredicate;
        static matchesFluids(offset: $Vec3i, blocks: $List_<$Fluid_>): $BlockPredicate;
        static hasSturdyFace(direction: $Direction_): $BlockPredicate;
        static hasSturdyFace(offset: $Vec3i, direction: $Direction_): $BlockPredicate;
        static unobstructed(offset: $Vec3i): $BlockPredicate;
        static unobstructed(): $BlockPredicate;
        static insideWorld(offset: $Vec3i): $BlockPredicate;
        static matchesBlocks(predicates: $List_<$Block_>): $BlockPredicate;
        static matchesBlocks(...blocks: $Block_[]): $BlockPredicate;
        static matchesBlocks(offset: $Vec3i, ...blocks: $Block_[]): $BlockPredicate;
        static matchesBlocks(offset: $Vec3i, blocks: $List_<$Block_>): $BlockPredicate;
        static ONLY_IN_AIR_OR_WATER_PREDICATE: $BlockPredicate;
        static CODEC: $Codec<$BlockPredicate>;
        static ONLY_IN_AIR_PREDICATE: $BlockPredicate;
    }
    export interface $BlockPredicate extends $BiPredicate<$WorldGenLevel, $BlockPos> {
        type(): $BlockPredicateType<never>;
    }
    export class $StateTestingPredicate implements $BlockPredicate {
        test(level: $WorldGenLevel, pos: $BlockPos_): boolean;
        test(state: $BlockState_): boolean;
        static stateTestingCodec<P extends $StateTestingPredicate>(instance: $RecordCodecBuilder$Instance<P>): $Products$P1<$RecordCodecBuilder$Mu<P>, $Vec3i>;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        offset: $Vec3i;
        constructor(offset: $Vec3i);
    }
    export class $AllOfPredicate extends $CombiningPredicate implements $CombinedBlockPredicateExtension {
        test(level: $WorldGenLevel, pos: $BlockPos_): boolean;
        predicates: $List<$BlockPredicate>;
        static CODEC: $MapCodec<$AllOfPredicate>;
        constructor(predicates: $List_<$BlockPredicate>);
    }
    export class $TrueBlockPredicate implements $BlockPredicate {
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
    }
    export class $MatchingFluidsPredicate extends $StateTestingPredicate {
        offset: $Vec3i;
    }
    export class $BlockPredicateType<P extends $BlockPredicate> {
        static UNOBSTRUCTED: $BlockPredicateType<$UnobstructedPredicate>;
        static MATCHING_BLOCK_TAG: $BlockPredicateType<$MatchingBlockTagPredicate>;
        static MATCHING_BLOCKS: $BlockPredicateType<$MatchingBlocksPredicate>;
        static INSIDE_WORLD_BOUNDS: $BlockPredicateType<$InsideWorldBoundsPredicate>;
        static ALL_OF: $BlockPredicateType<$AllOfPredicate>;
        static TRUE: $BlockPredicateType<$TrueBlockPredicate>;
        static ANY_OF: $BlockPredicateType<$AnyOfPredicate>;
        static HAS_STURDY_FACE: $BlockPredicateType<$HasSturdyFacePredicate>;
        static NOT: $BlockPredicateType<$NotPredicate>;
        static REPLACEABLE: $BlockPredicateType<$ReplaceablePredicate>;
        static WOULD_SURVIVE: $BlockPredicateType<$WouldSurvivePredicate>;
        static MATCHING_FLUIDS: $BlockPredicateType<$MatchingFluidsPredicate>;
        static SOLID: $BlockPredicateType<$SolidPredicate>;
    }
    export interface $BlockPredicateType<P extends $BlockPredicate> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $BlockPredicateType}.
     */
    export type $BlockPredicateType_<P> = RegistryTypes.BlockPredicateType | (() => $MapCodec_<P>);
    export class $CombiningPredicate implements $BlockPredicate, $CombinedBlockPredicateExtension {
        static codec<T extends $CombiningPredicate>(factory: $Function_<$List<$BlockPredicate>, T>): $MapCodec<T>;
        c2me$getPredicatesArray(): $BlockPredicate[];
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        predicates: $List<$BlockPredicate>;
        constructor(predicates: $List_<$BlockPredicate>);
    }
    /**
     * @deprecated
     */
    export class $SolidPredicate extends $StateTestingPredicate {
        static CODEC: $MapCodec<$SolidPredicate>;
        offset: $Vec3i;
        constructor(arg0: $Vec3i);
    }
    export class $ReplaceablePredicate extends $StateTestingPredicate {
        offset: $Vec3i;
    }
    export class $UnobstructedPredicate extends $Record implements $BlockPredicate {
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
    }
    export interface $BlockPredicateType<P> extends RegistryMarked<RegistryTypes.BlockPredicateTypeTag, RegistryTypes.BlockPredicateType> {}
    export class $HasSturdyFacePredicate implements $BlockPredicate {
        type(): $BlockPredicateType<never>;
        test(level: $WorldGenLevel, pos: $BlockPos_): boolean;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        static CODEC: $MapCodec<$HasSturdyFacePredicate>;
        constructor(offset: $Vec3i, direction: $Direction_);
    }
    export class $MatchingBlocksPredicate extends $StateTestingPredicate {
        offset: $Vec3i;
    }
    export class $WouldSurvivePredicate implements $BlockPredicate {
        type(): $BlockPredicateType<never>;
        test(level: $WorldGenLevel, pos: $BlockPos_): boolean;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        static CODEC: $MapCodec<$WouldSurvivePredicate>;
        constructor(offset: $Vec3i, state: $BlockState_);
    }
    export class $MatchingBlockTagPredicate extends $StateTestingPredicate {
        static CODEC: $MapCodec<$MatchingBlockTagPredicate>;
        offset: $Vec3i;
        tag: $TagKey<$Block>;
        constructor(offset: $Vec3i, tag: $TagKey_<$Block>);
    }
    export class $NotPredicate implements $BlockPredicate {
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
    }
    export class $AnyOfPredicate extends $CombiningPredicate implements $CombinedBlockPredicateExtension {
        test(structureWorldAccess: $WorldGenLevel, blockPos: $BlockPos_): boolean;
        predicates: $List<$BlockPredicate>;
        static CODEC: $MapCodec<$AnyOfPredicate>;
        constructor(arg0: $List_<$BlockPredicate>);
    }
}
