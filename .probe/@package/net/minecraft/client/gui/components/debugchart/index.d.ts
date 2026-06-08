import { $Supplier_ } from "@package/java/util/function";
import { $SampleStorage } from "@package/net/minecraft/util/debugchart";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/debugchart" {
    export class $BandwidthDebugChart extends $AbstractDebugChart {
        static CHART_HEIGHT: number;
        static LINE_WIDTH: number;
        sampleStorage: $SampleStorage;
        static COLOR_GREY: number;
        font: $Font;
        constructor(arg0: $Font, arg1: $SampleStorage);
    }
    export class $AbstractDebugChart {
        getWidth(arg0: number): number;
        getValueForAggregation(arg0: number): number;
        drawAdditionalDimensions(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        drawStringWithShade(arg0: $GuiGraphics, arg1: string, arg2: number, arg3: number): void;
        drawChart(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        renderAdditionalLinesAndLabels(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        toDisplayString(arg0: number): string;
        drawMainDimension(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        getSampleHeight(arg0: number): number;
        drawDimensions(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        getSampleColor(arg0: number): number;
        getSampleColor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): number;
        static CHART_HEIGHT: number;
        static LINE_WIDTH: number;
        sampleStorage: $SampleStorage;
        static COLOR_GREY: number;
        font: $Font;
        constructor(arg0: $Font, arg1: $SampleStorage);
    }
    export class $FpsDebugChart extends $AbstractDebugChart {
        static CHART_HEIGHT: number;
        static LINE_WIDTH: number;
        sampleStorage: $SampleStorage;
        static COLOR_GREY: number;
        font: $Font;
        constructor(arg0: $Font, arg1: $SampleStorage);
    }
    export class $TpsDebugChart extends $AbstractDebugChart {
        static CHART_HEIGHT: number;
        static LINE_WIDTH: number;
        sampleStorage: $SampleStorage;
        static COLOR_GREY: number;
        font: $Font;
        constructor(arg0: $Font, arg1: $SampleStorage, arg2: $Supplier_<number>);
    }
    export class $PingDebugChart extends $AbstractDebugChart {
        static CHART_HEIGHT: number;
        static LINE_WIDTH: number;
        sampleStorage: $SampleStorage;
        static COLOR_GREY: number;
        font: $Font;
        constructor(arg0: $Font, arg1: $SampleStorage);
    }
}
