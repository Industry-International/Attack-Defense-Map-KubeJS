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
        consumesTwoCamosInCamoApplicationRecipe(): boolean;
        getSideSkipPredicate(): $SideSkipPredicate;
        canOccludeWithSolidCamo(): boolean;
        supportsWaterLogging(): boolean;
        allowMakingIntangible(): boolean;
        getFullFacePredicate(): $FullFacePredicate;
        getConnectionPredicate(): $ConnectionPredicate;
        supportsConnectedTextures(): boolean;
        canLockState(): boolean;
        isDoubleBlock(): boolean;
        hasSpecialHitbox(): boolean;
        generateShapes(arg0: $ImmutableList<$BlockState_>): $ShapeProvider;
        hasBlockItem(): boolean;
        hasSpecialTile(): boolean;
        getMinimumConTexMode(): $ConTexMode;
        generateOcclusionShapes(arg0: $ImmutableList<$BlockState_>, arg1: $ShapeProvider): $ShapeProvider;
        get name(): string;
        get sideSkipPredicate(): $SideSkipPredicate;
        get fullFacePredicate(): $FullFacePredicate;
        get connectionPredicate(): $ConnectionPredicate;
        get doubleBlock(): boolean;
        get minimumConTexMode(): $ConTexMode;
    }
}
