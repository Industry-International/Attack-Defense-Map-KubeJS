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
        constructor(font: $Font, sampleStorage: $SampleStorage);
    }
    export class $AbstractDebugChart {
        getWidth(maxWidth: number): number;
        renderAdditionalLinesAndLabels(guiGraphics: $GuiGraphics, height: number, x: number, index: number): void;
        drawChart(guiGraphics: $GuiGraphics, x: number, width: number): void;
        getValueForAggregation(index: number): number;
        drawStringWithShade(guiGraphics: $GuiGraphics, text: string, x: number, y: number): void;
        drawAdditionalDimensions(guiGraphics: $GuiGraphics, height: number, x: number, index: number): void;
        drawMainDimension(guiGraphics: $GuiGraphics, height: number, x: number, index: number): void;
        getSampleColor(value: number, arg1: number, minPosition: number, arg3: number, minColor: number, midPosition: number, arg6: number): number;
        getSampleColor(value: number): number;
        toDisplayString(value: number): string;
        getSampleHeight(value: number): number;
        drawDimensions(guiGraphics: $GuiGraphics, height: number, x: number, index: number): void;
        static CHART_HEIGHT: number;
        static LINE_WIDTH: number;
        sampleStorage: $SampleStorage;
        static COLOR_GREY: number;
        font: $Font;
        constructor(font: $Font, sampleStorage: $SampleStorage);
    }
    export class $FpsDebugChart extends $AbstractDebugChart {
        static CHART_HEIGHT: number;
        static LINE_WIDTH: number;
        sampleStorage: $SampleStorage;
        static COLOR_GREY: number;
        font: $Font;
        constructor(font: $Font, sampleStorage: $SampleStorage);
    }
    export class $TpsDebugChart extends $AbstractDebugChart {
        static CHART_HEIGHT: number;
        static LINE_WIDTH: number;
        sampleStorage: $SampleStorage;
        static COLOR_GREY: number;
        font: $Font;
        constructor(font: $Font, sampleStorage: $SampleStorage, msptSupplier: $Supplier_<number>);
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
