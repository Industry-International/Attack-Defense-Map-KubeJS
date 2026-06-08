import { $Direction$Axis } from "@package/net/minecraft/core";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $VoxelShape, $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BitSet } from "@package/java/util";

declare module "@package/malte0811/ferritecore/mixin/accessors" {
    export class $BitSetDVSAccess {
    }
    export interface $BitSetDVSAccess extends $DiscreteVSAccess {
        getZMin(): number;
        getZMax(): number;
        getYMin(): number;
        getXMax(): number;
        getYMax(): number;
        getStorage(): $BitSet;
        getXMin(): number;
        get ZMin(): number;
        get ZMax(): number;
        get YMin(): number;
        get XMax(): number;
        get YMax(): number;
        get storage(): $BitSet;
        get XMin(): number;
    }
    export class $SliceShapeAccess {
    }
    export interface $SliceShapeAccess extends $VoxelShapeAccess {
        getDelegate(): $VoxelShape;
        getAxis(): $Direction$Axis;
        get delegate(): $VoxelShape;
        get axis(): $Direction$Axis;
    }
    export class $DiscreteVSAccess {
    }
    export interface $DiscreteVSAccess {
        getXSize(): number;
        getYSize(): number;
        getZSize(): number;
        get XSize(): number;
        get YSize(): number;
        get ZSize(): number;
    }
    export class $ArrayVSAccess {
    }
    export interface $ArrayVSAccess extends $VoxelShapeAccess {
        getYPoints(): $DoubleList;
        setYPoints(arg0: $DoubleList): void;
        getXPoints(): $DoubleList;
        getZPoints(): $DoubleList;
        setXPoints(arg0: $DoubleList): void;
        setZPoints(arg0: $DoubleList): void;
    }
    export class $BakedQuadAccess {
    }
    export interface $BakedQuadAccess {
        setVertices(arg0: number[]): void;
        set vertices(value: number[]);
    }
    /**
     * Values that may be interpreted as {@link $BakedQuadAccess}.
     */
    export type $BakedQuadAccess_ = ((arg0: number[]) => void);
    export class $SubShapeAccess {
    }
    export interface $SubShapeAccess extends $DiscreteVSAccess {
        getParent(): $DiscreteVoxelShape;
        getEndX(): number;
        getEndY(): number;
        getEndZ(): number;
        getStartZ(): number;
        getStartY(): number;
        getStartX(): number;
        get parent(): $DiscreteVoxelShape;
        get endX(): number;
        get endY(): number;
        get endZ(): number;
        get startZ(): number;
        get startY(): number;
        get startX(): number;
    }
    export class $VoxelShapeAccess {
    }
    export interface $VoxelShapeAccess {
        getShape(): $DiscreteVoxelShape;
        getFaces(): $VoxelShape[];
        setFaces(arg0: $VoxelShape[]): void;
        setShape(arg0: $DiscreteVoxelShape): void;
    }
}
