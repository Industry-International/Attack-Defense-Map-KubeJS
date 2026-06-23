import { $SideSkipPredicate } from "@package/xfacthd/framedblocks/api/predicate/cull";
import { $FullFacePredicate } from "@package/xfacthd/framedblocks/api/predicate/fullface";
import { $ShapeProvider } from "@package/xfacthd/framedblocks/api/shapes";
import { $ConTexMode, $ConnectionPredicate } from "@package/xfacthd/framedblocks/api/predicate/contex";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ImmutableList } from "@package/com/google/common/collect";

declare module "@package/xfacthd/framedblocks/api/type" {
    export class $IBlockType {
    }
    export interface $IBlockType {
        getName(): string;
        compareTo(arg0: $IBlockType): number;
        generateShapes(arg0: $ImmutableList<$BlockState_>): $ShapeProvider;
        hasSpecialHitbox(): boolean;
        getSideSkipPredicate(): $SideSkipPredicate;
        canOccludeWithSolidCamo(): boolean;
        supportsWaterLogging(): boolean;
        allowMakingIntangible(): boolean;
        hasBlockItem(): boolean;
        hasSpecialTile(): boolean;
        consumesTwoCamosInCamoApplicationRecipe(): boolean;
        getMinimumConTexMode(): $ConTexMode;
        generateOcclusionShapes(arg0: $ImmutableList<$BlockState_>, arg1: $ShapeProvider): $ShapeProvider;
        isDoubleBlock(): boolean;
        getFullFacePredicate(): $FullFacePredicate;
        getConnectionPredicate(): $ConnectionPredicate;
        supportsConnectedTextures(): boolean;
        canLockState(): boolean;
        get name(): string;
        get sideSkipPredicate(): $SideSkipPredicate;
        get minimumConTexMode(): $ConTexMode;
        get doubleBlock(): boolean;
        get fullFacePredicate(): $FullFacePredicate;
        get connectionPredicate(): $ConnectionPredicate;
    }
}
