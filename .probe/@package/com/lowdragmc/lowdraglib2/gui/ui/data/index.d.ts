import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $GUIContext } from "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $List, $List_ } from "@package/java/util";
import { $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $IPersistedSerializable } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TaffySize, $TaffyRect, $TaffyLine } from "@package/dev/vfyjxf/taffy/geometry";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Record } from "@package/java/lang";
import { $GridTemplateComponent, $NamedGridLine, $GridTemplateArea, $TrackSizingFunction, $LengthPercentageAuto, $LengthPercentage, $GridPlacement } from "@package/dev/vfyjxf/taffy/style";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Vector2f, $Matrix4f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/data" {
    export class $GridTemplate extends $Record {
        names(): $List<$NamedGridLine>;
        simples(): $List<$TrackSizingFunction>;
        repeats(): $List<$GridTemplateComponent>;
        static EMPTY: $GridTemplate;
        constructor(arg0: $TrackSizingFunction[], arg1: $GridTemplateComponent[], arg2: $NamedGridLine[]);
        constructor(simples: $List_<$TrackSizingFunction>, repeats: $List_<$GridTemplateComponent>, names: $List_<$NamedGridLine>);
    }
    export class $TextWrap extends $Enum<$TextWrap> {
        static values(): $TextWrap[];
        static valueOf(arg0: string): $TextWrap;
        static WRAP: $TextWrap;
        static HIDE: $TextWrap;
        static HOVER_ROLL: $TextWrap;
        static ROLL: $TextWrap;
        static NONE: $TextWrap;
    }
    /**
     * Values that may be interpreted as {@link $TextWrap}.
     */
    export type $TextWrap_ = "none" | "wrap" | "roll" | "hover_roll" | "hide";
    export class $Vertical extends $Enum<$Vertical> {
        static values(): $Vertical[];
        static valueOf(arg0: string): $Vertical;
        static CENTER: $Vertical;
        static TOP: $Vertical;
        offset: number;
        static BOTTOM: $Vertical;
    }
    /**
     * Values that may be interpreted as {@link $Vertical}.
     */
    export type $Vertical_ = "top" | "center" | "bottom";
    export class $FillDirection extends $Enum<$FillDirection> {
        static values(): $FillDirection[];
        static valueOf(arg0: string): $FillDirection;
        getDrawnU(arg0: number): number;
        getDrawnV(arg0: number): number;
        getDrawnHeight(arg0: number): number;
        getDrawnWidth(arg0: number): number;
        static UP_TO_DOWN: $FillDirection;
        static RIGHT_TO_LEFT: $FillDirection;
        static ALWAYS_FULL: $FillDirection;
        static DOWN_TO_UP: $FillDirection;
        static LEFT_TO_RIGHT: $FillDirection;
    }
    /**
     * Values that may be interpreted as {@link $FillDirection}.
     */
    export type $FillDirection_ = "left_to_right" | "right_to_left" | "up_to_down" | "down_to_up" | "always_full";
    export class $LPARect extends $Record {
        rect(): $TaffyRect<$LengthPercentageAuto>;
        static ZERO: $LPARect;
        constructor(rect: $TaffyRect<$LengthPercentageAuto>);
    }
    export class $ScrollDisplay extends $Enum<$ScrollDisplay> {
        static values(): $ScrollDisplay[];
        static valueOf(arg0: string): $ScrollDisplay;
        static AUTO: $ScrollDisplay;
        static NEVER: $ScrollDisplay;
        static ALWAYS: $ScrollDisplay;
    }
    /**
     * Values that may be interpreted as {@link $ScrollDisplay}.
     */
    export type $ScrollDisplay_ = "auto" | "always" | "never";
    export class $Pivot {
        static of(arg0: number, arg1: number): $Pivot;
        getY(): number;
        getX(): number;
        static TOP_LEFT: $Pivot;
        static BOTTOM_CENTER: $Pivot;
        static CODEC: $Codec<$Pivot>;
        static BOTTOM_RIGHT: $Pivot;
        static CENTER_LEFT: $Pivot;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Pivot>;
        static CENTER: $Pivot;
        static TOP_CENTER: $Pivot;
        static TOP_RIGHT: $Pivot;
        x: number;
        y: number;
        static VALUES: $Pivot[];
        static CENTER_RIGHT: $Pivot;
        static BOTTOM_LEFT: $Pivot;
    }
    export class $GridTemplateAreas extends $Record {
        areas(): $List<$GridTemplateArea>;
        static EMPTY: $GridTemplateAreas;
        constructor(areas: $List_<$GridTemplateArea>);
    }
    export class $Grid extends $Record {
        grid(): $TaffyLine<$GridPlacement>;
        static EMPTY: $Grid;
        constructor(grid: $TaffyLine<$GridPlacement>);
    }
    export class $Horizontal extends $Enum<$Horizontal> {
        static values(): $Horizontal[];
        static valueOf(arg0: string): $Horizontal;
        static CENTER: $Horizontal;
        static LEFT: $Horizontal;
        offset: number;
        static RIGHT: $Horizontal;
    }
    /**
     * Values that may be interpreted as {@link $Horizontal}.
     */
    export type $Horizontal_ = "left" | "center" | "right";
    export class $GridAuto extends $Record {
        values(): $List<$TrackSizingFunction>;
        static EMPTY: $GridAuto;
        constructor(values: $List_<$TrackSizingFunction>);
    }
    export class $Transform2D implements $IConfigurable, $IPersistedSerializable {
        scale(arg0: number, arg1: number): $Transform2D;
        scale(arg0: number): $Transform2D;
        scale(): $Vector2f;
        static identity(): $Transform2D;
        copy(): $Transform2D;
        isIdentity(): boolean;
        pivot(arg0: number, arg1: number): $Transform2D;
        pivot(): $Pivot;
        pivot(arg0: $Pivot): $Transform2D;
        copyFrom(arg0: $Transform2D): void;
        rotation(arg0: number): $Transform2D;
        rotation(): number;
        static interpolate(arg0: $Transform2D, arg1: $Transform2D, arg2: number): $Transform2D;
        setIdentity(): $Transform2D;
        translate(arg0: number, arg1: number): $Transform2D;
        translate(): $Translate2D;
        translate(arg0: $Translate2D): $Transform2D;
        pushPose(arg0: $Matrix4f, arg1: $UIElement): void;
        pushPose(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number): void;
        pushPose(arg0: $GUIContext, arg1: $UIElement): void;
        popPose(arg0: $PoseStack): void;
        popPose(arg0: $GUIContext): void;
        beforeDeserialize(): void;
        translatePercent(arg0: number, arg1: number): $Transform2D;
        forwardPoint(arg0: $UIElement, arg1: number[]): void;
        rotationRad(arg0: number): $Transform2D;
        inversePoint(arg0: $UIElement, arg1: number[]): void;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        writeToBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        beforeSerialize(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static CODEC: $Codec<$Transform2D>;
        constructor();
        get configurableName(): string;
    }
    export class $ScrollerMode extends $Enum<$ScrollerMode> {
        static values(): $ScrollerMode[];
        static valueOf(arg0: string): $ScrollerMode;
        static VERTICAL: $ScrollerMode;
        static HORIZONTAL: $ScrollerMode;
        static BOTH: $ScrollerMode;
    }
    /**
     * Values that may be interpreted as {@link $ScrollerMode}.
     */
    export type $ScrollerMode_ = "horizontal" | "vertical" | "both";
    export class $Cursor extends $Record {
        line(): number;
        col(): number;
        constructor(line: number, col: number);
    }
    export class $LPSize extends $Record {
        size(): $TaffySize<$LengthPercentage>;
        static ZERO: $LPSize;
        constructor(size: $TaffySize<$LengthPercentage>);
    }
    export class $Translate2D {
        isZero(): boolean;
        static percent(arg0: number, arg1: number): $Translate2D;
        getY(): $LengthPercent;
        getX(): $LengthPercent;
        static px(arg0: number, arg1: number): $Translate2D;
        static lerp(arg0: $Translate2D, arg1: $Translate2D, arg2: number): $Translate2D;
        resolveX(arg0: number): number;
        isPx(): boolean;
        resolveY(arg0: number): number;
        static ZERO: $Translate2D;
        static CODEC: $Codec<$Translate2D>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Translate2D>;
        constructor(arg0: $LengthPercent, arg1: $LengthPercent);
        get zero(): boolean;
        get y(): $LengthPercent;
        get x(): $LengthPercent;
    }
    export class $Tooltips extends $Record {
        append(...arg0: $Component_[]): $Tooltips;
        isEmpty(): boolean;
        static of(...arg0: string[]): $Tooltips;
        static of(arg0: $List_<$Component_>): $Tooltips;
        static of(...arg0: $Component_[]): $Tooltips;
        merge(...arg0: $Tooltips_[]): $Tooltips;
        static empty(): $Tooltips;
        asList(): $List<$Component>;
        tooltips(): $Component[];
        static CODEC: $Codec<$Tooltips>;
        constructor(tooltips: $Component_[]);
    }
    export class $LengthPercent {
        getValue(): number;
        resolve(arg0: number): number;
        isZero(): boolean;
        static percent(arg0: number): $LengthPercent;
        isPercent(): boolean;
        static px(arg0: number): $LengthPercent;
        static lerp(arg0: $LengthPercent, arg1: $LengthPercent, arg2: number): $LengthPercent;
        static ZERO: $LengthPercent;
        static CODEC: $Codec<$LengthPercent>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $LengthPercent>;
        constructor(arg0: number, arg1: boolean);
        get value(): number;
        get zero(): boolean;
    }
}
