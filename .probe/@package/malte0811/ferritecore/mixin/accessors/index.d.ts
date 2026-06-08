import { $Direction$Axis } from "@package/net/minecraft/core";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $VoxelShape, $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BitSet } from "@package/java/util";

declare module "@package/malte0811/ferritecore/mixin/accessors" {
    export class $BitSetDVSAccess {
    }
    export interface $BitSetDVSAccess extends $DiscreteVSAccess {
        getYMin(): number;
        getZMin(): number;
        getStorage(): $BitSet;
        getXMax(): number;
        getXMin(): number;
        getYMax(): number;
        getZMax(): number;
        get YMin(): number;
        get ZMin(): number;
        get storage(): $BitSet;
        get XMax(): number;
        get XMin(): number;
        get YMax(): number;
        get ZMax(): number;
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
        getYSize(): number;
        getXSize(): number;
        getZSize(): number;
        get YSize(): number;
        get XSize(): number;
        get ZSize(): number;
    }
    export class $ArrayVSAccess {
    }
    export interface $ArrayVSAccess extends $VoxelShapeAccess {
        setZPoints(arg0: $DoubleList): void;
        setXPoints(arg0: $DoubleList): void;
        getYPoints(): $DoubleList;
        getZPoints(): $DoubleList;
        getXPoints(): $DoubleList;
        setYPoints(arg0: $DoubleList): void;
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
        getStartY(): number;
        getStartX(): number;
        getStartZ(): number;
        getEndZ(): number;
        getEndX(): number;
        getEndY(): number;
        get parent(): $DiscreteVoxelShape;
        get startY(): number;
        get startX(): number;
        get startZ(): number;
        get endZ(): number;
        get endX(): number;
        get endY(): number;
    }
    export class $VoxelShapeAccess {
    }
    export interface $VoxelShapeAccess {
        getShape(): $DiscreteVoxelShape;
        setFaces(arg0: $VoxelShape[]): void;
        setShape(arg0: $DiscreteVoxelShape): void;
        getFaces(): $VoxelShape[];
    }
}
