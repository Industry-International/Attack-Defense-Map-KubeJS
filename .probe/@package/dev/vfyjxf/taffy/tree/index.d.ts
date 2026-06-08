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
        static fromSizes(arg0: $FloatSize, arg1: $FloatSize): $LayoutOutput;
        static fromOuterSize(arg0: $FloatSize): $LayoutOutput;
        firstBaselines(): $FloatPoint;
        marginsCanCollapseThrough(): boolean;
        static fromSizesAndBaselines(arg0: $FloatSize, arg1: $FloatSize, arg2: $FloatPoint): $LayoutOutput;
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
        scrollbarSize(): $FloatSize;
        scrollWidth(): number;
        scrollHeight(): number;
        contentBoxWidth(): number;
        contentBoxHeight(): number;
        contentSize(): $FloatSize;
        margin(): $FloatRect;
        contentBoxSize(): $FloatSize;
        contentBoxX(): number;
        contentBoxY(): number;
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
        getLayout(arg0: $NodeId_): $Layout;
        removeChild(arg0: $NodeId_, arg1: $NodeId_): void;
        setLayout(arg0: $NodeId_, arg1: $Layout_): void;
        addChild(arg0: $NodeId_, arg1: $NodeId_): void;
        insertChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): void;
        disableRounding(): void;
        computeLayout(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>): void;
        containsNode(arg0: $NodeId_): boolean;
        setStyle(arg0: $NodeId_, arg1: $TaffyStyle): void;
        getAllNodes(): $Set<$NodeId>;
        getStyle(arg0: $NodeId_): $TaffyStyle;
        markDirty(arg0: $NodeId_): void;
        hasDirtyDescendant(arg0: $NodeId_): boolean;
        newWithChildren(arg0: $TaffyStyle, arg1: $List_<$NodeId_>): $NodeId;
        newWithChildren(arg0: $TaffyStyle, ...arg1: $NodeId_[]): $NodeId;
        removeChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        getUnroundedLayout(arg0: $NodeId_): $Layout;
        hasNewLayout(arg0: $NodeId_): boolean;
        acknowledgeLayout(arg0: $NodeId_): void;
        setUnroundedLayout(arg0: $NodeId_, arg1: $Layout_): void;
        acknowledgeSubtree(arg0: $NodeId_): void;
        roundingEnabled(): boolean;
        setMeasureFunc(arg0: $NodeId_, arg1: $MeasureFunc_): void;
        totalNodeCount(): number;
        getMeasureFunc(arg0: $NodeId_): $MeasureFunc;
        getChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        newLeafWithMeasure(arg0: $TaffyStyle, arg1: $MeasureFunc_): $NodeId;
        getCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_): $LayoutOutput;
        storeCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_, arg4: $LayoutOutput_): void;
        setChildren(arg0: $NodeId_, ...arg1: $NodeId_[]): void;
        enableRounding(): void;
        setLayoutChangeListener(arg0: $LayoutChangeListener_): void;
        getLayoutChangeListener(): $LayoutChangeListener;
        /**
         * @deprecated
         */
        hasUnconsumedLayout(arg0: $NodeId_): boolean;
        computeLayoutWithMeasure(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>, arg2: $MeasureFunc_): void;
        replaceChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): $NodeId;
        newLeaf(arg0: $TaffyStyle): $NodeId;
        printTree(arg0: $NodeId_): void;
        needsVisit(arg0: $NodeId_): boolean;
        constructor();
        constructor(arg0: number);
        get allNodes(): $Set<$NodeId>;
    }
}
