import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $WidgetTooltipHolder, $ObjectSelectionList, $AbstractSelectionList, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $Comparator, $List } from "@package/java/util";
import { $ToDoubleFunction_, $Function_, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Comparable } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Stat_, $StatsCounter } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/client/gui/screens/achievement" {
    export class $StatsScreen extends $Screen {
        static access$000(arg0: $StatsScreen): $Font;
        static access$200(arg0: $StatsScreen): $Font;
        static access$300(arg0: $StatsScreen): $Font;
        static access$100(arg0: $StatsScreen): $Font;
        static access$700(arg0: $StatsScreen): $Font;
        static access$800(arg0: $StatsScreen): $Font;
        static access$900(arg0: $StatsScreen): $Font;
        static access$500(arg0: $StatsScreen): $Font;
        static access$400(arg0: $StatsScreen): $Font;
        static access$600(arg0: $StatsScreen): $Font;
        static access$1100(arg0: $StatsScreen): $Font;
        static access$1000(arg0: $StatsScreen): $Font;
        static access$1200(arg0: $StatsScreen): $Font;
        static access$1300(arg0: $StatsScreen): $Font;
        static access$1400(arg0: $StatsScreen): $Font;
        static access$1500(arg0: $StatsScreen): $Font;
        static getTranslationKey(arg0: $Stat_<$ResourceLocation_>): string;
        onStatsUpdated(): void;
        initButtons(): void;
        initLists(): void;
        setActiveList(arg0: $ObjectSelectionList<never>): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SORT_UP_SPRITE: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        lastScreen: $Screen;
        title: $Component;
        itemStatsList: $StatsScreen$ItemStatisticsList;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        stats: $StatsCounter;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static SLOT_SPRITE: $ResourceLocation;
        static HEADER_SPRITE: $ResourceLocation;
        static NO_VALUE_DISPLAY: $Component;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        static SORT_DOWN_SPRITE: $ResourceLocation;
        font: $Font;
        constructor(arg0: $Screen, arg1: $StatsCounter);
        set activeList(value: $ObjectSelectionList<never>);
    }
    export class $StatsScreen$ItemStatisticsList extends $ObjectSelectionList<$StatsScreen$ItemStatisticsList$ItemRow> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        static $assertionsDisabled: boolean;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $StatsScreen$ItemStatisticsList$ItemRow;
        height: number;
    }
    export class $StatsScreen$GeneralStatisticsList extends $ObjectSelectionList<$StatsScreen$GeneralStatisticsList$Entry> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        static $assertionsDisabled: boolean;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $StatsScreen$GeneralStatisticsList$Entry;
        height: number;
    }
    export class $StatsScreen$GeneralStatisticsList$Entry extends $ObjectSelectionList$Entry<$StatsScreen$GeneralStatisticsList$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$StatsScreen$GeneralStatisticsList$Entry>;
    }
    export class $StatsScreen$ItemStatisticsList$ItemRow extends $ObjectSelectionList$Entry<$StatsScreen$ItemStatisticsList$ItemRow> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$StatsScreen$ItemStatisticsList$ItemRow>;
    }
    export class $StatsScreen$MobsStatisticsList$MobRow extends $ObjectSelectionList$Entry<$StatsScreen$MobsStatisticsList$MobRow> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$StatsScreen$MobsStatisticsList$MobRow>;
    }
    export class $StatsScreen$ItemStatisticsList$ItemRowComparator implements $Comparator<$StatsScreen$ItemStatisticsList$ItemRow> {
        reversed(): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparing<U>(arg0: $Function_<$StatsScreen$ItemStatisticsList$ItemRow, U>, arg1: $Comparator<U>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparing(arg0: $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<$StatsScreen$ItemStatisticsList$ItemRow, U>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparingInt(arg0: $ToIntFunction_<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparingLong(arg0: $ToLongFunction_<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparingDouble(arg0: $ToDoubleFunction_<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
    }
    export class $StatsScreen$MobsStatisticsList extends $ObjectSelectionList<$StatsScreen$MobsStatisticsList$MobRow> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        static $assertionsDisabled: boolean;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $StatsScreen$MobsStatisticsList$MobRow;
        height: number;
    }
}
