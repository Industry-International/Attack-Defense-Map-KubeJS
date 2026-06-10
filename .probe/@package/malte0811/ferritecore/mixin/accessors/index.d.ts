import { $Direction$Axis } from "@package/net/minecraft/core";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $VoxelShape, $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BitSet } from "@package/java/util";

declare module "@package/malte0811/ferritecore/mixin/accessors" {
    export class $BitSetDVSAccess {
    }
    export interface $BitSetDVSAccess extends $DiscreteVSAccess {
        getYMax(): number;
        getYMin(): number;
        getZMax(): number;
        getXMax(): number;
        getZMin(): number;
        getStorage(): $BitSet;
        getXMin(): number;
        get YMax(): number;
        get YMin(): number;
        get ZMax(): number;
        get XMax(): number;
        get ZMin(): number;
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
        getYSize(): number;
        getZSize(): number;
        getXSize(): number;
        get YSize(): number;
        get ZSize(): number;
        get XSize(): number;
    }
    export class $ArrayVSAccess {
    }
    export interface $ArrayVSAccess extends $VoxelShapeAccess {
        setZPoints(arg0: $DoubleList): void;
        getZPoints(): $DoubleList;
        getXPoints(): $DoubleList;
        setYPoints(arg0: $DoubleList): void;
        getYPoints(): $DoubleList;
        setXPoints(arg0: $DoubleList): void;
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
        getEndY(): number;
        getEndX(): number;
        getEndZ(): number;
        getStartZ(): number;
        getStartX(): number;
        getStartY(): number;
        get parent(): $DiscreteVoxelShape;
        get endY(): number;
        get endX(): number;
        get endZ(): number;
        get startZ(): number;
        get startX(): number;
        get startY(): number;
    }
    export class $VoxelShapeAccess {
    }
    export interface $VoxelShapeAccess {
        getShape(): $DiscreteVoxelShape;
        getFaces(): $VoxelShape[];
        setShape(arg0: $DiscreteVoxelShape): void;
        setFaces(arg0: $VoxelShape[]): void;
    }
}
