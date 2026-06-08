import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $HeaderAndFooterLayout, $LinearLayout } from "@package/net/minecraft/client/gui/layouts";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ScreenDirection_ } from "@package/net/minecraft/client/gui/navigation";
import { $CycleButton, $WidgetTooltipHolder, $AbstractSelectionList, $Checkbox, $Button, $ObjectSelectionList, $ObjectSelectionList$Entry, $MultiLineEditBox, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ChatReport$Builder, $Report$Builder, $ReportingContext, $NameReport, $ReportReason, $ReportReason_, $NameReport$Builder, $SkinReport, $ChatReport, $SkinReport$Builder } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $Minecraft, $NarratorStatus, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $LoggedChatMessage$Player_, $LoggedChatMessage$Player } from "@package/net/minecraft/client/multiplayer/chat";
import { $List, $UUID_ } from "@package/java/util";
import { $Supplier_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $WarningScreen } from "@package/net/minecraft/client/gui/screens/multiplayer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Record } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $PlayerEntry } from "@package/net/minecraft/client/gui/screens/social";

declare module "@package/net/minecraft/client/gui/screens/reporting" {
    export class $ChatReportScreen extends $AbstractReportScreen<$ChatReport$Builder> {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SELECT_REASON: $Component;
        static MORE_COMMENTS_LABEL: $Component;
        static CUBE_MAP: $CubeMap;
        reportingContext: $ReportingContext;
        lastScreen: $Screen;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        reportBuilder: $ChatReport$Builder;
        static SCREEN_WIDTH: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        static SEND_REPORT: $Component;
        static OBSERVED_WHAT_LABEL: $Component;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static BUTTON_WIDTH: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        sendButton: $Button;
        layout: $LinearLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        static MARGIN: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        static SPACING: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $ChatReport);
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $UUID_);
    }
    export class $ReportPlayerScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $PlayerEntry);
    }
    export class $ChatSelectionScreen$ChatSelectionList$DividerEntry extends $ChatSelectionScreen$ChatSelectionList$Entry {
        this$1: $ChatSelectionScreen$ChatSelectionList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ChatSelectionScreen$ChatSelectionList$Entry>;
        constructor(arg0: $ChatSelectionScreen$ChatSelectionList, arg1: $Component_);
    }
    export class $SkinReportScreen extends $AbstractReportScreen<$SkinReport$Builder> {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SELECT_REASON: $Component;
        static MORE_COMMENTS_LABEL: $Component;
        static CUBE_MAP: $CubeMap;
        reportingContext: $ReportingContext;
        lastScreen: $Screen;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        reportBuilder: $SkinReport$Builder;
        static SCREEN_WIDTH: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        static SEND_REPORT: $Component;
        static OBSERVED_WHAT_LABEL: $Component;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static BUTTON_WIDTH: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        sendButton: $Button;
        layout: $LinearLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        static MARGIN: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        static SPACING: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $SkinReport);
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $UUID_, arg3: $Supplier_<$PlayerSkin>);
    }
    export class $ChatSelectionScreen$ChatSelectionList$PaddingEntry extends $ChatSelectionScreen$ChatSelectionList$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ChatSelectionScreen$ChatSelectionList$Entry>;
        constructor(arg0: $ChatSelectionScreen$ChatSelectionList);
    }
    export class $ReportReasonSelectionScreen extends $Screen {
        static access$100(arg0: $ReportReasonSelectionScreen): $Font;
        static access$000(arg0: $ReportReasonSelectionScreen): $Font;
        listHeight(): number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        currentlySelectedReason: $ReportReason;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $ReportReason_, arg2: $Consumer_<$ReportReason>);
    }
    export class $AbstractReportScreen<B extends $Report$Builder<never>> extends $Screen {
        clearDraft(): void;
        saveDraft(): void;
        sendReport(): void;
        addContent(): void;
        createFooter(): void;
        createHeader(): void;
        createCommentBox(arg0: number, arg1: number, arg2: $Consumer_<string>): $MultiLineEditBox;
        onReportChanged(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SELECT_REASON: $Component;
        static MORE_COMMENTS_LABEL: $Component;
        static CUBE_MAP: $CubeMap;
        reportingContext: $ReportingContext;
        lastScreen: $Screen;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        reportBuilder: B;
        static SCREEN_WIDTH: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        static SEND_REPORT: $Component;
        static OBSERVED_WHAT_LABEL: $Component;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static BUTTON_WIDTH: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        sendButton: $Button;
        layout: $LinearLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        static MARGIN: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        static SPACING: number;
        font: $Font;
        constructor(arg0: $Component_, arg1: $Screen, arg2: $ReportingContext, arg3: B);
    }
    export class $ChatSelectionLogFiller$Output {
    }
    export interface $ChatSelectionLogFiller$Output {
        acceptDivider(arg0: $Component_): void;
        acceptMessage(arg0: number, arg1: $LoggedChatMessage$Player_): void;
    }
    export class $ChatSelectionScreen$ChatSelectionList$Heading extends $Record {
    }
    export class $ChatSelectionScreen$ChatSelectionList$MessageHeadingEntry extends $ChatSelectionScreen$ChatSelectionList$Entry {
        this$1: $ChatSelectionScreen$ChatSelectionList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ChatSelectionScreen$ChatSelectionList$Entry>;
        constructor(arg0: $ChatSelectionScreen$ChatSelectionList, arg1: $GameProfile, arg2: $Component_, arg3: boolean);
    }
    export class $ChatSelectionLogFiller {
        fillNextPage(arg0: number, arg1: $ChatSelectionLogFiller$Output): void;
        constructor(arg0: $ReportingContext, arg1: $Predicate_<$LoggedChatMessage$Player>);
    }
    export class $ReportReasonSelectionScreen$ReasonSelectionList extends $ObjectSelectionList<$ReportReasonSelectionScreen$ReasonSelectionList$Entry> {
        findEntry(arg0: $ReportReason_): $ReportReasonSelectionScreen$ReasonSelectionList$Entry;
        setSelected(arg0: $ReportReasonSelectionScreen$ReasonSelectionList$Entry): void;
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
        this$0: $ReportReasonSelectionScreen;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $ReportReasonSelectionScreen$ReasonSelectionList$Entry;
        height: number;
        constructor(arg0: $ReportReasonSelectionScreen, arg1: $Minecraft);
        set selected(value: $ReportReasonSelectionScreen$ReasonSelectionList$Entry);
    }
    export class $ChatSelectionScreen$ChatSelectionList$Entry extends $ObjectSelectionList$Entry<$ChatSelectionScreen$ChatSelectionList$Entry> {
        isSelected(): boolean;
        canSelect(): boolean;
        canReport(): boolean;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ChatSelectionScreen$ChatSelectionList$Entry>;
        constructor(arg0: $ChatSelectionScreen$ChatSelectionList);
        get selected(): boolean;
    }
    export class $AbstractReportScreen$DiscardReportWarningScreen extends $WarningScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        stopShowing: $Checkbox;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        message: $Component;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ChatSelectionScreen$ChatSelectionList extends $ObjectSelectionList<$ChatSelectionScreen$ChatSelectionList$Entry> implements $ChatSelectionLogFiller$Output {
        nextEntry(arg0: $ScreenDirection_): $ChatSelectionScreen$ChatSelectionList$Entry;
        static access$800(arg0: $ChatSelectionScreen$ChatSelectionList): $Minecraft;
        getMaxVisibleEntries(): number;
        setSelected(arg0: $ChatSelectionScreen$ChatSelectionList$Entry): void;
        getFooterTop(): number;
        acceptDivider(arg0: $Component_): void;
        acceptMessage(arg0: number, arg1: $LoggedChatMessage$Player_): void;
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
        this$0: $ChatSelectionScreen;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $ChatSelectionScreen$ChatSelectionList$Entry;
        height: number;
        constructor(arg0: $ChatSelectionScreen, arg1: $Minecraft, arg2: number);
        get maxVisibleEntries(): number;
        set selected(value: $ChatSelectionScreen$ChatSelectionList$Entry);
        get footerTop(): number;
    }
    export class $ChatSelectionScreen$ChatSelectionList$MessageEntry extends $ChatSelectionScreen$ChatSelectionList$Entry {
        this$1: $ChatSelectionScreen$ChatSelectionList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ChatSelectionScreen$ChatSelectionList$Entry>;
        constructor(arg0: $ChatSelectionScreen$ChatSelectionList, arg1: number, arg2: $Component_, arg3: $Component_, arg4: $GuiMessageTag_, arg5: boolean, arg6: boolean);
    }
    export class $ReportReasonSelectionScreen$ReasonSelectionList$Entry extends $ObjectSelectionList$Entry<$ReportReasonSelectionScreen$ReasonSelectionList$Entry> {
        getReason(): $ReportReason;
        reason: $ReportReason;
        this$1: $ReportReasonSelectionScreen$ReasonSelectionList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ReportReasonSelectionScreen$ReasonSelectionList$Entry>;
        constructor(arg0: $ReportReasonSelectionScreen$ReasonSelectionList, arg1: $ReportReason_);
    }
    export class $ChatSelectionScreen extends $Screen {
        static access$300(arg0: $ChatSelectionScreen): $Font;
        static access$200(arg0: $ChatSelectionScreen): $Font;
        static access$100(arg0: $ChatSelectionScreen): $Font;
        static access$000(arg0: $ChatSelectionScreen): $Font;
        static access$1000(arg0: $ChatSelectionScreen): $Font;
        static access$1100(arg0: $ChatSelectionScreen): $Font;
        static access$400(arg0: $ChatSelectionScreen): $Font;
        static access$700(arg0: $ChatSelectionScreen): $Font;
        static access$900(arg0: $ChatSelectionScreen): $Font;
        static access$600(arg0: $ChatSelectionScreen): $Font;
        static access$500(arg0: $ChatSelectionScreen): $Font;
        static access$1200(arg0: $ChatSelectionScreen): $Font;
        static access$1300(arg0: $ChatSelectionScreen): $Font;
        updateConfirmSelectedButton(): void;
        onReachedScrollTop(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        report: $ChatReport$Builder;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static CHECKMARK_SPRITE: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $ChatReport$Builder, arg3: $Consumer_<$ChatReport$Builder>);
    }
    export class $NameReportScreen extends $AbstractReportScreen<$NameReport$Builder> {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SELECT_REASON: $Component;
        static MORE_COMMENTS_LABEL: $Component;
        static CUBE_MAP: $CubeMap;
        reportingContext: $ReportingContext;
        lastScreen: $Screen;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        reportBuilder: $NameReport$Builder;
        static SCREEN_WIDTH: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        static SEND_REPORT: $Component;
        static OBSERVED_WHAT_LABEL: $Component;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static BUTTON_WIDTH: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        sendButton: $Button;
        layout: $LinearLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        static MARGIN: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        static SPACING: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $NameReport);
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $UUID_, arg3: string);
    }
}
