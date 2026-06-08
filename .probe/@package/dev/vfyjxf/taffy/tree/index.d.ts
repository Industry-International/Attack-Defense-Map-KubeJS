import { $TaffySize, $FloatPoint, $FloatRect, $FloatSize } from "@package/dev/vfyjxf/taffy/geometry";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_, $Set } from "@package/java/util";
import { $TaffyStyle, $AvailableSpace } from "@package/dev/vfyjxf/taffy/style";
import { $MeasureFunc_, $MeasureFunc } from "@package/dev/vfyjxf/taffy/util";

declare module "@package/dev/vfyjxf/taffy/tree" {
    export class $LayoutOutput extends $Record {
        size(): $FloatSize;
        topMargin(): $CollapsibleMarginSet;
        static hidden(): $LayoutOutput;
        bottomMargin(): $CollapsibleMarginSet;
        contentSize(): $FloatSize;
        static fromOuterSize(arg0: $FloatSize): $LayoutOutput;
        firstBaselines(): $FloatPoint;
        static fromSizes(arg0: $FloatSize, arg1: $FloatSize): $LayoutOutput;
        static fromSizesAndBaselines(arg0: $FloatSize, arg1: $FloatSize, arg2: $FloatPoint): $LayoutOutput;
        marginsCanCollapseThrough(): boolean;
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
        border(): $FloatRect;
        static withOrder(arg0: number): $Layout;
        contentBoxHeight(): number;
        contentBoxWidth(): number;
        margin(): $FloatRect;
        contentBoxSize(): $FloatSize;
        contentBoxX(): number;
        contentBoxY(): number;
        scrollbarSize(): $FloatSize;
        contentSize(): $FloatSize;
        scrollWidth(): number;
        scrollHeight(): number;
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
        collapseWithSet(arg0: $CollapsibleMarginSet): $CollapsibleMarginSet;
        collapseWithMargin(arg0: number): $CollapsibleMarginSet;
        static fromMargin(arg0: number): $CollapsibleMarginSet;
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
        totalNodeCount(): number;
        acknowledgeLayout(arg0: $NodeId_): void;
        newLeafWithMeasure(arg0: $TaffyStyle, arg1: $MeasureFunc_): $NodeId;
        setUnroundedLayout(arg0: $NodeId_, arg1: $Layout_): void;
        hasDirtyDescendant(arg0: $NodeId_): boolean;
        hasNewLayout(arg0: $NodeId_): boolean;
        removeChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        acknowledgeSubtree(arg0: $NodeId_): void;
        storeCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_, arg4: $LayoutOutput_): void;
        getUnroundedLayout(arg0: $NodeId_): $Layout;
        getMeasureFunc(arg0: $NodeId_): $MeasureFunc;
        roundingEnabled(): boolean;
        getCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_): $LayoutOutput;
        setChildren(arg0: $NodeId_, ...arg1: $NodeId_[]): void;
        newWithChildren(arg0: $TaffyStyle, ...arg1: $NodeId_[]): $NodeId;
        newWithChildren(arg0: $TaffyStyle, arg1: $List_<$NodeId_>): $NodeId;
        setMeasureFunc(arg0: $NodeId_, arg1: $MeasureFunc_): void;
        getChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        enableRounding(): void;
        removeChild(arg0: $NodeId_, arg1: $NodeId_): void;
        addChild(arg0: $NodeId_, arg1: $NodeId_): void;
        getStyle(arg0: $NodeId_): $TaffyStyle;
        getLayout(arg0: $NodeId_): $Layout;
        setLayout(arg0: $NodeId_, arg1: $Layout_): void;
        disableRounding(): void;
        insertChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): void;
        computeLayout(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>): void;
        getAllNodes(): $Set<$NodeId>;
        setLayoutChangeListener(arg0: $LayoutChangeListener_): void;
        containsNode(arg0: $NodeId_): boolean;
        setStyle(arg0: $NodeId_, arg1: $TaffyStyle): void;
        newLeaf(arg0: $TaffyStyle): $NodeId;
        markDirty(arg0: $NodeId_): void;
        /**
         * @deprecated
         */
        hasUnconsumedLayout(arg0: $NodeId_): boolean;
        getLayoutChangeListener(): $LayoutChangeListener;
        computeLayoutWithMeasure(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>, arg2: $MeasureFunc_): void;
        replaceChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): $NodeId;
        needsVisit(arg0: $NodeId_): boolean;
        printTree(arg0: $NodeId_): void;
        constructor();
        constructor(arg0: number);
        get allNodes(): $Set<$NodeId>;
    }
}
