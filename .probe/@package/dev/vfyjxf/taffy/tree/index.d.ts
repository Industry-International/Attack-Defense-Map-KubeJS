import { $TaffySize, $FloatPoint, $FloatRect, $FloatSize } from "@package/dev/vfyjxf/taffy/geometry";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_, $Set } from "@package/java/util";
import { $TaffyStyle, $AvailableSpace } from "@package/dev/vfyjxf/taffy/style";
import { $MeasureFunc_, $MeasureFunc } from "@package/dev/vfyjxf/taffy/util";

declare module "@package/dev/vfyjxf/taffy/tree" {
    export class $LayoutOutput extends $Record {
        size(): $FloatSize;
        static hidden(): $LayoutOutput;
        bottomMargin(): $CollapsibleMarginSet;
        topMargin(): $CollapsibleMarginSet;
        contentSize(): $FloatSize;
        static fromOuterSize(arg0: $FloatSize): $LayoutOutput;
        firstBaselines(): $FloatPoint;
        static fromSizesAndBaselines(arg0: $FloatSize, arg1: $FloatSize, arg2: $FloatPoint): $LayoutOutput;
        marginsCanCollapseThrough(): boolean;
        static fromSizes(arg0: $FloatSize, arg1: $FloatSize): $LayoutOutput;
        static HIDDEN: $LayoutOutput;
        static DEFAULT: $LayoutOutput;
        constructor(size: $FloatSize, contentSize: $FloatSize, firstBaselines: $FloatPoint, topMargin: $CollapsibleMarginSet, bottomMargin: $CollapsibleMarginSet, marginsCanCollapseThrough: boolean);
    }
    export class $Layout extends $Record {
        size(): $FloatSize;
        location(): $FloatPoint;
        copy(): $Layout;
        order(): number;
        padding(): $FloatRect;
        contentBoxWidth(): number;
        contentBoxHeight(): number;
        border(): $FloatRect;
        margin(): $FloatRect;
        static withOrder(arg0: number): $Layout;
        scrollHeight(): number;
        scrollWidth(): number;
        contentSize(): $FloatSize;
        scrollbarSize(): $FloatSize;
        contentBoxSize(): $FloatSize;
        contentBoxY(): number;
        contentBoxX(): number;
        constructor(order: number, location: $FloatPoint, size: $FloatSize, contentSize: $FloatSize, scrollbarSize: $FloatSize, border: $FloatRect, padding: $FloatRect, margin: $FloatRect);
        constructor(arg0: number);
        constructor();
    }
    export class $RunMode extends $Enum<$RunMode> {
        static values(): $RunMode[];
        static valueOf(arg0: string): $RunMode;
        static PERFORM_HIDDEN_LAYOUT: $RunMode;
        static COMPUTE_SIZE: $RunMode;
        static PERFORM_LAYOUT: $RunMode;
    }
    /**
     * Values that may be interpreted as {@link $RunMode}.
     */
    export type $RunMode_ = "perform_layout" | "compute_size" | "perform_hidden_layout";
    export class $CollapsibleMarginSet {
        resolve(): number;
        copy(): $CollapsibleMarginSet;
        static zero(): $CollapsibleMarginSet;
        static fromMargin(arg0: number): $CollapsibleMarginSet;
        collapseWithSet(arg0: $CollapsibleMarginSet): $CollapsibleMarginSet;
        collapseWithMargin(arg0: number): $CollapsibleMarginSet;
        static ZERO: $CollapsibleMarginSet;
    }
    export class $LayoutChangeListener {
    }
    export interface $LayoutChangeListener {
        onLayoutChanged(arg0: $NodeId_, arg1: $Layout_, arg2: $Layout_): void;
    }
    /**
     * Values that may be interpreted as {@link $LayoutChangeListener}.
     */
    export type $LayoutChangeListener_ = ((arg0: $NodeId, arg1: $Layout, arg2: $Layout) => void);
    export class $NodeId extends $Record {
        value(): number;
        static of(arg0: number): $NodeId;
        getId(): number;
        toIndex(): number;
        constructor(value: number);
        get id(): number;
    }
    export class $TaffyTree {
        remove(arg0: $NodeId_): void;
        clear(): void;
        getParent(arg0: $NodeId_): $NodeId;
        isDirty(arg0: $NodeId_): boolean;
        clearCache(arg0: $NodeId_): void;
        getChildren(arg0: $NodeId_): $List<$NodeId>;
        childCount(arg0: $NodeId_): number;
        removeChild(arg0: $NodeId_, arg1: $NodeId_): void;
        getLayout(arg0: $NodeId_): $Layout;
        addChild(arg0: $NodeId_, arg1: $NodeId_): void;
        setLayout(arg0: $NodeId_, arg1: $Layout_): void;
        markDirty(arg0: $NodeId_): void;
        containsNode(arg0: $NodeId_): boolean;
        getStyle(arg0: $NodeId_): $TaffyStyle;
        getAllNodes(): $Set<$NodeId>;
        setStyle(arg0: $NodeId_, arg1: $TaffyStyle): void;
        computeLayoutWithMeasure(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>, arg2: $MeasureFunc_): void;
        getLayoutChangeListener(): $LayoutChangeListener;
        /**
         * @deprecated
         */
        hasUnconsumedLayout(arg0: $NodeId_): boolean;
        replaceChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): $NodeId;
        roundingEnabled(): boolean;
        getChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        newWithChildren(arg0: $TaffyStyle, ...arg1: $NodeId_[]): $NodeId;
        newWithChildren(arg0: $TaffyStyle, arg1: $List_<$NodeId_>): $NodeId;
        hasNewLayout(arg0: $NodeId_): boolean;
        hasDirtyDescendant(arg0: $NodeId_): boolean;
        getUnroundedLayout(arg0: $NodeId_): $Layout;
        acknowledgeLayout(arg0: $NodeId_): void;
        enableRounding(): void;
        newLeafWithMeasure(arg0: $TaffyStyle, arg1: $MeasureFunc_): $NodeId;
        removeChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        setUnroundedLayout(arg0: $NodeId_, arg1: $Layout_): void;
        setMeasureFunc(arg0: $NodeId_, arg1: $MeasureFunc_): void;
        getMeasureFunc(arg0: $NodeId_): $MeasureFunc;
        setChildren(arg0: $NodeId_, ...arg1: $NodeId_[]): void;
        acknowledgeSubtree(arg0: $NodeId_): void;
        getCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_): $LayoutOutput;
        storeCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_, arg4: $LayoutOutput_): void;
        totalNodeCount(): number;
        disableRounding(): void;
        computeLayout(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>): void;
        insertChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): void;
        needsVisit(arg0: $NodeId_): boolean;
        printTree(arg0: $NodeId_): void;
        setLayoutChangeListener(arg0: $LayoutChangeListener_): void;
        newLeaf(arg0: $TaffyStyle): $NodeId;
        constructor();
        constructor(arg0: number);
        get allNodes(): $Set<$NodeId>;
    }
}
