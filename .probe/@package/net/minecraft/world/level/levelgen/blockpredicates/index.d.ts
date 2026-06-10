import { $WorldGenLevel } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $List_ } from "@package/java/util";
import { $Products$P1 } from "@package/com/mojang/datafixers";
import { $BiPredicate, $BiPredicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_, $Vec3i } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/levelgen/blockpredicates" {
    export class $InsideWorldBoundsPredicate implements $BlockPredicate {
        type(): $BlockPredicateType<never>;
        test(arg0: $WorldGenLevel, arg1: $BlockPos_): boolean;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        static CODEC: $MapCodec<$InsideWorldBoundsPredicate>;
        constructor(arg0: $Vec3i);
    }
    export class $BlockPredicate {
        static not(arg0: $BlockPredicate): $BlockPredicate;
        static allOf(...arg0: $BlockPredicate[]): $BlockPredicate;
        static allOf(arg0: $List_<$BlockPredicate>): $BlockPredicate;
        static allOf(arg0: $BlockPredicate, arg1: $BlockPredicate): $BlockPredicate;
        static anyOf(arg0: $List_<$BlockPredicate>): $BlockPredicate;
        static anyOf(...arg0: $BlockPredicate[]): $BlockPredicate;
        static anyOf(arg0: $BlockPredicate, arg1: $BlockPredicate): $BlockPredicate;
        static solid(): $BlockPredicate;
        static solid(arg0: $Vec3i): $BlockPredicate;
        static matchesBlocks(...arg0: $Block_[]): $BlockPredicate;
        static matchesBlocks(arg0: $Vec3i, arg1: $List_<$Block_>): $BlockPredicate;
        static matchesBlocks(arg0: $Vec3i, ...arg1: $Block_[]): $BlockPredicate;
        static matchesBlocks(arg0: $List_<$Block_>): $BlockPredicate;
        static alwaysTrue(): $BlockPredicate;
        static replaceable(): $BlockPredicate;
        static replaceable(arg0: $Vec3i): $BlockPredicate;
        static noFluid(arg0: $Vec3i): $BlockPredicate;
        static noFluid(): $BlockPredicate;
        static matchesTag(arg0: $Vec3i, arg1: $TagKey_<$Block>): $BlockPredicate;
        static matchesTag(arg0: $TagKey_<$Block>): $BlockPredicate;
        static insideWorld(arg0: $Vec3i): $BlockPredicate;
        static unobstructed(arg0: $Vec3i): $BlockPredicate;
        static unobstructed(): $BlockPredicate;
        static wouldSurvive(arg0: $BlockState_, arg1: $Vec3i): $BlockPredicate;
        static hasSturdyFace(arg0: $Vec3i, arg1: $Direction_): $BlockPredicate;
        static hasSturdyFace(arg0: $Direction_): $BlockPredicate;
        static matchesFluids(...arg0: $Fluid_[]): $BlockPredicate;
        static matchesFluids(arg0: $Vec3i, ...arg1: $Fluid_[]): $BlockPredicate;
        static matchesFluids(arg0: $Vec3i, arg1: $List_<$Fluid_>): $BlockPredicate;
        static ONLY_IN_AIR_OR_WATER_PREDICATE: $BlockPredicate;
        static CODEC: $Codec<$BlockPredicate>;
        static ONLY_IN_AIR_PREDICATE: $BlockPredicate;
    }
    export interface $BlockPredicate extends $BiPredicate<$WorldGenLevel, $BlockPos> {
        type(): $BlockPredicateType<never>;
    }
    export class $StateTestingPredicate implements $BlockPredicate {
        test(arg0: $WorldGenLevel, arg1: $BlockPos_): boolean;
        test(arg0: $BlockState_): boolean;
        static stateTestingCodec<P extends $StateTestingPredicate>(arg0: $RecordCodecBuilder$Instance<P>): $Products$P1<$RecordCodecBuilder$Mu<P>, $Vec3i>;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        offset: $Vec3i;
        constructor(arg0: $Vec3i);
    }
    export class $AllOfPredicate extends $CombiningPredicate {
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
    export class $CombiningPredicate implements $BlockPredicate {
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
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
    export interface $BlockPredicateType extends RegistryMarked<RegistryTypes.BlockPredicateTypeTag, RegistryTypes.BlockPredicateType> {}
    export class $HasSturdyFacePredicate implements $BlockPredicate {
        type(): $BlockPredicateType<never>;
        test(arg0: $WorldGenLevel, arg1: $BlockPos_): boolean;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        static CODEC: $MapCodec<$HasSturdyFacePredicate>;
        constructor(arg0: $Vec3i, arg1: $Direction_);
    }
    export class $MatchingBlocksPredicate extends $StateTestingPredicate {
        offset: $Vec3i;
    }
    export class $WouldSurvivePredicate implements $BlockPredicate {
        type(): $BlockPredicateType<never>;
        test(arg0: $WorldGenLevel, arg1: $BlockPos_): boolean;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        static CODEC: $MapCodec<$WouldSurvivePredicate>;
        constructor(arg0: $Vec3i, arg1: $BlockState_);
    }
    export class $MatchingBlockTagPredicate extends $StateTestingPredicate {
        static CODEC: $MapCodec<$MatchingBlockTagPredicate>;
        offset: $Vec3i;
        tag: $TagKey<$Block>;
        constructor(arg0: $Vec3i, arg1: $TagKey_<$Block>);
    }
    export class $NotPredicate implements $BlockPredicate {
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
    }
    export class $AnyOfPredicate extends $CombiningPredicate {
    }
}
