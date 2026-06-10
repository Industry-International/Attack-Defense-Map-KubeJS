import { $MultilineTextFieldAccess } from "@package/dev/ftb/mods/ftblibrary/core/mixin/common";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $PlayerTabOverlayInvoker } from "@package/com/vladmarica/betterpingdisplay/mixin";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GuiMessage, $OptionInstance, $GuiMessageTag, $NarratorStatus, $OptionInstance$TooltipSupplier_, $GuiMessage$Line_, $Minecraft, $GuiMessage_, $Options, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $UUID_, $Map, $UUID, $List, $SequencedCollection, $Collection_, $List_, $AbstractList } from "@package/java/util";
import { $IClickableWidget } from "@package/xaero/lib/client/gui/widget";
import { $AbstractSelectionListAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $WidgetHeightAccessor } from "@package/rikka/lanserverproperties/mixin";
import { $CheckboxAccessor, $ImageButtonAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $FormattedCharSequence, $FormattedCharSequence_, $ArrayListDeque } from "@package/net/minecraft/util";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_, $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_, $BooleanSupplier, $BooleanSupplier_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $BossEvent$BossBarColor, $BossEvent, $BossEvent$BossBarOverlay_, $BossEvent$BossBarColor_, $BossEvent$BossBarOverlay } from "@package/net/minecraft/world";
import { $SoundManager, $WeighedSoundEvents, $SoundEventListener } from "@package/net/minecraft/client/sounds";
import { $Suggestion } from "@package/com/mojang/brigadier/suggestion";
import { $Tab, $TabManager } from "@package/net/minecraft/client/gui/components/tabs";
import { $UndoManager } from "@package/icyllis/modernui/core";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $LocalIntRef, $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum, $Iterable, $Record, $Runnable_ } from "@package/java/lang";
import { $HeaderAndFooterLayout, $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarrationSupplier } from "@package/net/minecraft/client/gui/narration";
import { $MessageSignature_, $MutableComponent, $Component_, $FormattedText, $MutableComponent_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $ScreenRectangle_, $FocusNavigationEvent_, $ScreenRectangle, $ScreenDirection_ } from "@package/net/minecraft/client/gui/navigation";
import { $IModernEditBox, $EditBoxEditAction, $ScrollController, $ScrollController$IListener } from "@package/icyllis/modernui/mc";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger, $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $StringViewAccessor } from "@package/io/github/reserveword/imblocker/mixin";
import { $AccessEditBox } from "@package/com/blamejared/searchables/mixin";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $PlayerSkin, $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $AbstractButtonWidgetAccessor } from "@package/com/replaymod/core/mixin";
import { $ChatComponentAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MinecraftTextFieldWidget, $MinecraftFocusableWidget, $SinglelineCursorInfo, $Rectangle, $MinecraftMultilineEditBoxWidget, $FocusContainer, $MultilineCursorInfo } from "@package/io/github/reserveword/imblocker/common/gui";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $Gui, $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as tabs from "@package/net/minecraft/client/gui/components/tabs";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";
export * as debugchart from "@package/net/minecraft/client/gui/components/debugchart";
export * as events from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components" {
    export class $Tooltip implements $NarrationSupplier {
        static create(arg0: $Component_): $Tooltip;
        static create(arg0: $Component_, arg1: $Component_): $Tooltip;
        toCharSequence(arg0: $Minecraft): $List<$FormattedCharSequence>;
        updateNarration(arg0: $NarrationElementOutput): void;
        static splitTooltip(arg0: $Minecraft, arg1: $Component_): $List<$FormattedCharSequence>;
        static MAX_WIDTH: number;
        narration: $Component;
        cachedTooltip: $List<$FormattedCharSequence>;
        message: $Component;
        constructor(arg0: $Component_, arg1: $Component_);
    }
    export class $CommonButtons {
        static language(arg0: number, arg1: $Button$OnPress_, arg2: boolean): $SpriteIconButton;
        static accessibility(arg0: number, arg1: $Button$OnPress_, arg2: boolean): $SpriteIconButton;
        constructor();
    }
    export class $WidgetTooltipHolder {
        get(): $Tooltip;
        set(arg0: $Tooltip): void;
        setDelay(arg0: $Duration_): void;
        refreshTooltipForNextRenderPass(arg0: boolean, arg1: boolean, arg2: $ScreenRectangle_): void;
        createTooltipPositioner(arg0: $ScreenRectangle_, arg1: boolean, arg2: boolean): $ClientTooltipPositioner;
        updateNarration(arg0: $NarrationElementOutput): void;
        constructor();
        set delay(value: $Duration_);
    }
    export class $PopupScreen$ButtonOption extends $Record {
    }
    export class $MultilineTextField$StringView extends $Record implements $StringViewAccessor {
        beginIndex(): number;
        endIndex(): number;
        getBeginIndex(): number;
        getEndIndex(): number;
        static EMPTY: $MultilineTextField$StringView;
        constructor(arg0: number, arg1: number);
    }
    export class $TabButton extends $AbstractWidget {
        tab(): $Tab;
        isSelected(): boolean;
        renderMenuBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderString(arg0: $GuiGraphics, arg1: $Font, arg2: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: $TabManager, arg1: $Tab, arg2: number, arg3: number);
        get selected(): boolean;
    }
    export class $SubtitleOverlay$Subtitle {
    }
    export class $SplashRenderer {
        render(arg0: $GuiGraphics, arg1: number, arg2: $Font, arg3: number): void;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        static NEW_YEAR: $SplashRenderer;
        constructor(arg0: string);
    }
    export class $AbstractScrollWidget extends $AbstractWidget implements $Renderable, $GuiEventListener {
        handler$jdk000$imblocker$onScroll(arg0: number, arg1: $CallbackInfo): void;
        scrollRate(): number;
        renderContents(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        innerPadding(): number;
        getInnerHeight(): number;
        totalInnerPadding(): number;
        setScrollAmount(arg0: number): void;
        scrollbarVisible(): boolean;
        getMaxScrollAmount(): number;
        renderBorder(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderDecorations(arg0: $GuiGraphics): void;
        scrollbarWidth(): number;
        scrollAmount(): number;
        renderBackground(arg0: $GuiGraphics): void;
        withinContentAreaPoint(arg0: number, arg1: number): boolean;
        withinContentAreaTopBottom(arg0: number, arg1: number): boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
        get innerHeight(): number;
        get maxScrollAmount(): number;
    }
    export class $Button extends $AbstractButton {
        static builder(arg0: $Component_, arg1: $Button$OnPress_): $Button$Builder;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: $Button$Builder);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_, arg6: $Button$CreateNarration_);
    }
    export class $CycleButton$Builder<T> {
        create(arg0: $Component_, arg1: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_): $CycleButton<T>;
        create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        displayOnlyValue(): $CycleButton$Builder<T>;
        withValues(arg0: $Collection_<T>): $CycleButton$Builder<T>;
        withValues(arg0: $List_<T>, arg1: $List_<T>): $CycleButton$Builder<T>;
        withValues(...arg0: T[]): $CycleButton$Builder<T>;
        withValues(arg0: $CycleButton$ValueListSupplier<T>): $CycleButton$Builder<T>;
        withValues(arg0: $BooleanSupplier_, arg1: $List_<T>, arg2: $List_<T>): $CycleButton$Builder<T>;
        withInitialValue(arg0: T): $CycleButton$Builder<T>;
        withTooltip(arg0: $OptionInstance$TooltipSupplier_<T>): $CycleButton$Builder<T>;
        withCustomNarration(arg0: $Function_<$CycleButton<T>, $MutableComponent>): $CycleButton$Builder<T>;
        constructor(arg0: $Function_<T, $Component>);
    }
    export class $Whence extends $Enum<$Whence> {
        static values(): $Whence[];
        static valueOf(arg0: string): $Whence;
        static ABSOLUTE: $Whence;
        static RELATIVE: $Whence;
        static END: $Whence;
    }
    /**
     * Values that may be interpreted as {@link $Whence}.
     */
    export type $Whence_ = "absolute" | "relative" | "end";
    export class $Button$Builder {
        size(arg0: number, arg1: number): $Button$Builder;
        bounds(arg0: number, arg1: number, arg2: number, arg3: number): $Button$Builder;
        pos(arg0: number, arg1: number): $Button$Builder;
        build(): $Button;
        build(arg0: $Function_<$Button$Builder, $Button>): $Button;
        width(arg0: number): $Button$Builder;
        createNarration(arg0: $Button$CreateNarration_): $Button$Builder;
        tooltip(arg0: $Tooltip): $Button$Builder;
        constructor(arg0: $Component_, arg1: $Button$OnPress_);
    }
    export class $MultiLineLabel {
        static create(arg0: $Font, arg1: number, arg2: number, ...arg3: $Component_[]): $MultiLineLabel;
        static create(arg0: $Font, ...arg1: $Component_[]): $MultiLineLabel;
        static create(arg0: $Font, arg1: number, ...arg2: $Component_[]): $MultiLineLabel;
        static create(arg0: $Font, arg1: $Component_, arg2: number): $MultiLineLabel;
        static EMPTY: $MultiLineLabel;
    }
    export interface $MultiLineLabel {
        getWidth(): number;
        renderLeftAligned(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderCentered(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderCentered(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getLineCount(): number;
        renderLeftAlignedNoShadow(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): number;
        get width(): number;
        get lineCount(): number;
    }
    export class $CommandSuggestions$SuggestionsList {
        cycle(arg0: number): void;
        select(arg0: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getNarrationMessage(): $Component;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        handler$boj000$chat_heads$chatheads$fixOutOfBoundChatHeads(commandSuggestions: $CommandSuggestions, x: number, y: number, width: number, suggestions: $List_<any>, narrateFirstSuggestion: boolean, ci: $CallbackInfo): void;
        localvar$boj000$chat_heads$chatheads$captureGuiGraphics(guiGraphics: $GuiGraphics, graphicsRef: $LocalRef<any>): $GuiGraphics;
        localvar$boj000$chat_heads$chatheads$captureSuggestion(suggestion: $Suggestion, playerRef: $LocalRef<any>): $Suggestion;
        modify$boj000$chat_heads$chatheads$enlargeBackground(x: number, playerRef: $LocalRef<any>): number;
        mouseScrolled(arg0: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        useSuggestion(): void;
        modify$boj000$chat_heads$chatheads$renderChatHead(y: number, playerRef: $LocalRef<any>, graphicsRef: $LocalRef<any>): number;
        tabCycles: boolean;
        this$0: $CommandSuggestions;
        get narrationMessage(): $Component;
    }
    export class $LogoRenderer {
        renderLogo(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        renderLogo(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static EASTER_EGG_LOGO: $ResourceLocation;
        static DEFAULT_HEIGHT_OFFSET: number;
        static LOGO_WIDTH: number;
        static LOGO_TEXTURE_WIDTH: number;
        static LOGO_HEIGHT: number;
        static MINECRAFT_LOGO: $ResourceLocation;
        static LOGO_TEXTURE_HEIGHT: number;
        static MINECRAFT_EDITION: $ResourceLocation;
        constructor(arg0: boolean);
    }
    export class $Checkbox$Builder {
        pos(arg0: number, arg1: number): $Checkbox$Builder;
        build(): $Checkbox;
        maxWidth(arg0: number): $Checkbox$Builder;
        selected(arg0: $OptionInstance<boolean>): $Checkbox$Builder;
        selected(arg0: boolean): $Checkbox$Builder;
        tooltip(arg0: $Tooltip): $Checkbox$Builder;
        onValueChange(arg0: $Checkbox$OnValueChange_): $Checkbox$Builder;
        constructor(arg0: $Component_, arg1: $Font);
    }
    export class $PlayerTabOverlay$ScoreDisplayEntry extends $Record {
    }
    export class $ImageWidget$Texture extends $ImageWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
    }
    export class $SpriteIconButton extends $Button {
        static builder(arg0: $Component_, arg1: $Button$OnPress_, arg2: boolean): $SpriteIconButton$Builder;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: $Button$OnPress_, arg7: $Button$CreateNarration_);
    }
    export class $CycleButton$OnValueChange<T> {
    }
    export interface $CycleButton$OnValueChange<T> {
        onValueChange(arg0: $CycleButton<T>, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CycleButton$OnValueChange}.
     */
    export type $CycleButton$OnValueChange_<T> = ((arg0: $CycleButton<T>, arg1: T) => void);
    export class $AbstractSelectionList<E extends $AbstractSelectionList$Entry<E>> extends $AbstractContainerWidget implements $ScrollController$IListener, $AbstractSelectionListAccessor {
        remove(arg0: number): E;
        addEntry(arg0: E): number;
        getEntry(arg0: number): E;
        removeEntry(arg0: E): boolean;
        nextEntry(arg0: $ScreenDirection_, arg1: $Predicate_<E>, arg2: E): E;
        nextEntry(arg0: $ScreenDirection_): E;
        nextEntry(arg0: $ScreenDirection_, arg1: $Predicate_<E>): E;
        getItemCount(): number;
        getSelected(): E;
        setSelected(arg0: E): void;
        ensureVisible(arg0: E): void;
        getRowTop(arg0: number): number;
        replaceEntries(arg0: $Collection_<E>): void;
        setScrollAmount(target: number): void;
        scrollbarVisible(): boolean;
        renderDecorations(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        updateSizeAndPosition(arg0: number, arg1: number, arg2: number): void;
        updateSize(arg0: number, arg1: $HeaderAndFooterLayout): void;
        getMaxPosition(): number;
        getDefaultScrollbarPosition(): number;
        modernUI_MC$skipAnimationTo(target: number): void;
        clearEntries(): void;
        renderHeader(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        enableScissor(arg0: $GuiGraphics): void;
        renderItem(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        getRowLeft(): number;
        getRowRight(): number;
        getRowWidth(): number;
        getScrollAmount(): number;
        setRenderHeader(arg0: boolean, arg1: number): void;
        centerScrollOn(arg0: E): void;
        getEntryAtPosition(arg0: number, arg1: number): E;
        onScrollAmountUpdated(controller: $ScrollController, amount: number): void;
        renderSelection(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getMaxScroll(): number;
        renderListBackground(arg0: $GuiGraphics): void;
        renderListSeparators(arg0: $GuiGraphics): void;
        getScrollbarPosition(): number;
        narrateListElementPosition(arg0: $NarrationElementOutput, arg1: E): void;
        setClampedScrollAmount(arg0: number): void;
        updateScrollingState(arg0: number, arg1: number, arg2: number): void;
        isSelectedItem(arg0: number): boolean;
        isValidMouseClick(arg0: number): boolean;
        addEntryToTop(arg0: E): void;
        getFirstElement(): E;
        clickedHeader(arg0: number, arg1: number): boolean;
        clampScrollAmount(): void;
        getRowBottom(arg0: number): number;
        bindEntryToSelf(arg0: $AbstractSelectionList$Entry<E>): void;
        renderListItems(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        removeEntryFromTop(arg0: E): boolean;
        getHovered(): E;
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
        hovered: E;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
        get itemCount(): number;
        get maxPosition(): number;
        get defaultScrollbarPosition(): number;
        get rowLeft(): number;
        get rowRight(): number;
        get rowWidth(): number;
        get maxScroll(): number;
        get scrollbarPosition(): number;
        set clampedScrollAmount(value: number);
        get firstElement(): E;
    }
    export class $SpriteIconButton$TextAndIcon extends $SpriteIconButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: $Button$OnPress_, arg7: $Button$CreateNarration_);
    }
    export class $AbstractContainerWidget extends $AbstractWidget implements $ContainerEventHandler {
        setFocused(arg0: $GuiEventListener): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        setDragging(arg0: boolean): void;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $LerpingBossEvent extends $BossEvent {
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        targetPercent: number;
        setTime: number;
        constructor(arg0: $UUID_, arg1: $Component_, arg2: number, arg3: $BossEvent$BossBarColor_, arg4: $BossEvent$BossBarOverlay_, arg5: boolean, arg6: boolean, arg7: boolean);
    }
    export class $MultilineTextField implements $MultilineTextFieldAccess {
        value(): string;
        setValue(arg0: string): void;
        cursor(): number;
        getSelected(): $MultilineTextField$StringView;
        deleteText(arg0: number): void;
        hasSelection(): boolean;
        hasCharacterLimit(): boolean;
        setCursorListener(arg0: $Runnable_): void;
        iterateLines(): $Iterable<$MultilineTextField$StringView>;
        seekCursorToPoint(arg0: number, arg1: number): void;
        getLineView(arg0: number): $MultilineTextField$StringView;
        setSelecting(arg0: boolean): void;
        getLineAtCursor(): number;
        getSelectedText(): string;
        keyPressed(arg0: number): boolean;
        insertText(arg0: string): void;
        getLineCount(): number;
        characterLimit(): number;
        setCharacterLimit(arg0: number): void;
        setValueListener(arg0: $Consumer_<string>): void;
        getPreviousWord(): $MultilineTextField$StringView;
        getNextWord(): $MultilineTextField$StringView;
        seekCursorLine(arg0: number): void;
        seekCursor(arg0: $Whence_, arg1: number): void;
        setSelectCursor(arg0: number): void;
        static NO_CHARACTER_LIMIT: number;
        constructor(arg0: $Font, arg1: number);
        get selected(): $MultilineTextField$StringView;
        set cursorListener(value: $Runnable_);
        set selecting(value: boolean);
        get lineAtCursor(): number;
        get selectedText(): string;
        get lineCount(): number;
        set valueListener(value: $Consumer_<string>);
        get previousWord(): $MultilineTextField$StringView;
        get nextWord(): $MultilineTextField$StringView;
        set selectCursor(value: number);
    }
    export class $ChatComponent$State {
        messages: $List<$GuiMessage>;
        history: $List<string>;
        delayedMessageDeletions: $List<$ChatComponent$DelayedMessageDeletion>;
        constructor(arg0: $List_<$GuiMessage_>, arg1: $List_<string>, arg2: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
        setFocused(arg0: $GuiEventListener): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        narratables(): $List<$NarratableEntry>;
        updateNarration(arg0: $NarrationElementOutput): void;
        setDragging(arg0: boolean): void;
        focusPathAtIndex(arg0: $FocusNavigationEvent_, arg1: number): $ComponentPath;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
    }
    export class $Checkbox extends $AbstractButton implements $CheckboxAccessor {
        static builder(arg0: $Component_, arg1: $Font): $Checkbox$Builder;
        selected(): boolean;
        static getBoxSize(arg0: $Font): number;
        static getDefaultWidth(arg0: $Component_, arg1: $Font): number;
        setSelected(arg0: boolean): void;
        static SPRITES: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Component_, arg4: $Font, arg5: boolean, arg6: $Checkbox$OnValueChange_);
    }
    export class $LoadingDotsWidget extends $AbstractWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: $Font, arg1: $Component_);
    }
    export class $SpriteIconButton$Builder {
        size(arg0: number, arg1: number): $SpriteIconButton$Builder;
        build(): $SpriteIconButton;
        width(arg0: number): $SpriteIconButton$Builder;
        narration(arg0: $Button$CreateNarration_): $SpriteIconButton$Builder;
        sprite(arg0: $ResourceLocation_, arg1: number, arg2: number): $SpriteIconButton$Builder;
        constructor(arg0: $Component_, arg1: $Button$OnPress_, arg2: boolean);
    }
    export class $PlainTextButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_, arg6: $Font);
    }
    export class $ImageWidget$Sprite extends $ImageWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
    }
    export class $WidgetSprites extends $Record {
        get(arg0: boolean, arg1: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        disabled(): $ResourceLocation;
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
    }
    export class $ImageButton extends $Button implements $ImageButtonAccessor {
        getSprites(): $WidgetSprites;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $WidgetSprites_, arg3: $Button$OnPress_, arg4: $Component_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $WidgetSprites_, arg5: $Button$OnPress_, arg6: $Component_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $WidgetSprites_, arg5: $Button$OnPress_);
    }
    export class $ComponentRenderUtils {
        static wrapComponents(arg0: $FormattedText, arg1: number, arg2: $Font): $List<$FormattedCharSequence>;
        constructor();
    }
    export class $PlayerTabOverlay$HealthState {
    }
    export class $StateSwitchingButton extends $AbstractWidget {
        isStateTriggered(): boolean;
        initTextureValues(arg0: $WidgetSprites_): void;
        setStateTriggered(arg0: boolean): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        sprites: $WidgetSprites;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean);
    }
    export class $MultiLineLabel$TextAndWidth extends $Record {
        text(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    export class $PlayerSkinWidget$Model extends $Record {
    }
    export class $SubtitleOverlay$SoundPlayedAt extends $Record {
    }
    export class $Renderable {
    }
    export interface $Renderable {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension, $AbstractButtonWidgetAccessor, $WidgetHeightAccessor, $MinecraftFocusableWidget {
        getWidth(): number;
        getMessage(): $Component;
        isActive(): boolean;
        setSize(arg0: number, arg1: number): void;
        getY(): number;
        getX(): number;
        getRight(): number;
        setMessage(arg0: $Component_): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static wrapDefaultNarrationMessage(arg0: $Component_): $MutableComponent;
        static renderScrollingString(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static renderScrollingString(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        renderScrollingString(arg0: $GuiGraphics, arg1: $Font, arg2: number, arg3: number): void;
        setTooltipDelay(arg0: $Duration_): void;
        onDrag(arg0: number, arg1: number, arg2: number, arg3: number): void;
        onRelease(arg0: number, arg1: number): void;
        getFGColor(): number;
        setFGColor(arg0: number): void;
        handler$jdc000$imblocker$updateLastRenderTime(arg0: $CallbackInfoReturnable<any>): void;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        clearFGColor(): void;
        getBoundsAbs(): $Rectangle;
        isHoveredOrFocused(): boolean;
        isValidClickButton(arg0: number): boolean;
        setTabOrderGroup(arg0: number): void;
        setRectangle(arg0: number, arg1: number, arg2: number, arg3: number): void;
        playDownSound(arg0: $SoundManager): void;
        setX(arg0: number): void;
        setY(arg0: number): void;
        isHovered(): boolean;
        getBottom(): number;
        setAlpha(arg0: number): void;
        isFocused(): boolean;
        setTooltip(arg0: $Tooltip): void;
        setFocused(arg0: boolean): void;
        /**
         * @deprecated
         */
        onClick(arg0: number, arg1: number): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getRectangle(): $ScreenRectangle;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        updateNarration(arg0: $NarrationElementOutput): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getTabOrderGroup(): number;
        getTooltip(): $Tooltip;
        setWidth(arg0: number): void;
        handler$jdc000$imblocker$focusChanged(arg0: boolean, arg1: $CallbackInfo): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        createNarrationMessage(): $MutableComponent;
        defaultButtonNarrationText(arg0: $NarrationElementOutput): void;
        clicked(arg0: number, arg1: number): boolean;
        getCurrentFocusPath(): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        setPosition(arg0: number, arg1: number): void;
        onClick(arg0: number, arg1: number, arg2: number): void;
        getFocusContainer(): $FocusContainer;
        imblocker$onFocusLost(): void;
        imblocker$onBoundsChanged(): void;
        imblocker$onFocusChanged(arg0: boolean): void;
        imblocker$onFocusGained(): void;
        isRenderable(): boolean;
        getPreferredState(): boolean;
        getGuiScale(): number;
        lostFocus(): void;
        getFontHeight(): number;
        isTrulyFocused(): boolean;
        updateEnglishState(): void;
        updateIMState(): void;
        deliverFocus(): void;
        getPreferredEnglishState(): boolean;
        getHeight(): number;
        setHeight(arg0: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
        get right(): number;
        set tooltipDelay(value: $Duration_);
        get boundsAbs(): $Rectangle;
        get hoveredOrFocused(): boolean;
        get hovered(): boolean;
        get bottom(): number;
        get currentFocusPath(): $ComponentPath;
        get focusContainer(): $FocusContainer;
        get renderable(): boolean;
        get preferredState(): boolean;
        get guiScale(): number;
        get fontHeight(): number;
        get trulyFocused(): boolean;
        get preferredEnglishState(): boolean;
    }
    export class $Button$CreateNarration {
    }
    export interface $Button$CreateNarration {
        createNarrationMessage(arg0: $Supplier_<$MutableComponent>): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Button$CreateNarration}.
     */
    export type $Button$CreateNarration_ = ((arg0: $Supplier<$MutableComponent>) => $MutableComponent_);
    export class $MultiLineTextWidget$CacheKey extends $Record {
    }
    export class $DebugScreenOverlay {
        reset(): void;
        render(arg0: $GuiGraphics): void;
        toggleNetworkCharts(): void;
        toggleProfilerChart(): void;
        clearChunkCache(): void;
        getTickTimeLogger(): $LocalSampleLogger;
        showProfilerChart(): boolean;
        showDebugScreen(): boolean;
        logFrameDuration(arg0: number): void;
        handler$dpl000$fabric_renderer_api_v1$getLeftText(arg0: $CallbackInfoReturnable<any>): void;
        handler$jfh000$presencefootsteps$onGetRightText(arg0: $CallbackInfoReturnable<any>): void;
        logRemoteSample(arg0: number[], arg1: $RemoteDebugSampleType_): void;
        showNetworkCharts(): boolean;
        toggleFpsCharts(): void;
        toggleOverlay(): void;
        getPingLogger(): $LocalSampleLogger;
        handler$dlp000$entityculling$getLeftText(callback: $CallbackInfoReturnable<any>): $List<any>;
        localvar$bla000$veil$modifyGameInformation(arg0: $List_<any>): $List<any>;
        drawGameInformation(arg0: $GuiGraphics): void;
        collectGameInformationText(): $List<string>;
        getSystemInformation(): $List<string>;
        drawSystemInformation(arg0: $GuiGraphics): void;
        localvar$hgc000$sable$addDebugInfo(arg0: $List_<any>): $List<any>;
        collectSystemInformationText(): $List<string>;
        showFpsCharts(): boolean;
        getBandwidthLogger(): $LocalSampleLogger;
        getGameInformation(): $List<string>;
        frameTimeLogger: $LocalSampleLogger;
        constructor(arg0: $Minecraft);
        get tickTimeLogger(): $LocalSampleLogger;
        get pingLogger(): $LocalSampleLogger;
        get systemInformation(): $List<string>;
        get bandwidthLogger(): $LocalSampleLogger;
        get gameInformation(): $List<string>;
    }
    export class $PopupScreen extends $Screen {
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
        constructor(arg0: $Screen, arg1: number, arg2: $ResourceLocation_, arg3: $Component_, arg4: $Component_, arg5: $List_<$PopupScreen$ButtonOption_>, arg6: $Runnable_);
    }
    export class $DebugScreenOverlay$AllocationRateCalculator {
    }
    export class $EditBox extends $AbstractWidget implements $Renderable, $IModernEditBox, $AccessEditBox, $MinecraftTextFieldWidget {
        getValue(): string;
        setValue(arg0: string): void;
        setFormatter(arg0: $BiFunction_<string, number, $FormattedCharSequence>): void;
        setFilter(arg0: $Predicate_<string>): void;
        setVisible(arg0: boolean): void;
        handler$dnk000$modernui$onSetValue(string: string, ci: $CallbackInfo): void;
        moveCursor(arg0: number, arg1: boolean): void;
        isEditable(): boolean;
        isBordered(): boolean;
        handler$dnk000$modernui$onSetCursorPosition(pos: number, ci: $CallbackInfo): void;
        handler$dnk000$modernui$onGetCursorPosition(dir: number, cir: $CallbackInfoReturnable<any>): void;
        handler$jdj000$imblocker$checkFocusTracking(arg0: string, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        updateCursorInfo(): boolean;
        deleteChars(arg0: number): void;
        setEditable(arg0: boolean): void;
        getInnerWidth(): number;
        moveCursorToStart(arg0: boolean): void;
        deleteWords(arg0: number): void;
        getHighlighted(): string;
        moveCursorTo(arg0: number, arg1: boolean): void;
        getWordPosition(arg0: number): number;
        deleteCharsToPos(arg0: number): void;
        canConsumeInput(): boolean;
        checkVisibility(arg0: number): void;
        setSuggestion(arg0: string): void;
        setTextShadow(arg0: boolean): void;
        getTextShadow(): boolean;
        moveCursorToEnd(arg0: boolean): void;
        isVisible(): boolean;
        modernUI_MC$getUndoManager(): $UndoManager;
        setPreferredEnglishState(arg0: boolean): void;
        insertText(arg0: string): void;
        getScreenX(arg0: number): number;
        handler$dnk000$modernui$onInsertText(string: string, ci: $CallbackInfo, i: number, j: number, k: number, string2: string, l: number, string3: string): void;
        handler$jdj000$imblocker$onTextChanged(arg0: string, arg1: $CallbackInfo): void;
        handler$dnk000$modernui$onDeleteChars(i: number, ci: $CallbackInfo, j: number, k: number, string: string): void;
        handler$jdj001$imblocker$focusChanged(arg0: boolean, arg1: $CallbackInfo): void;
        handler$jdj000$imblocker$visibilityChanged(arg0: boolean, arg1: $CallbackInfo): void;
        handler$dnk000$modernui$onKeyPressed(i: number, j: number, k: number, cir: $CallbackInfoReturnable<any>): void;
        handler$dof000$modernui$onRenderWidget(gr: $GuiGraphics, mouseX: number, mouseY: number, deltaTicks: number, ci: $CallbackInfo): void;
        handler$dnk000$modernui$onGetWordPosition(dir: number, cursor: number, withEndSpace: boolean, cir: $CallbackInfoReturnable<any>): void;
        setTextColorUneditable(arg0: number): void;
        modernUI_MC$addEdit(edit: $EditBoxEditAction, mergeInsert: boolean): void;
        setHint(arg0: $Component_): void;
        getCursorPosition(): number;
        setMaxLength(arg0: number): void;
        setBordered(arg0: boolean): void;
        setResponder(arg0: $Consumer_<string>): void;
        setCanLoseFocus(arg0: boolean): void;
        setHighlightPos(arg0: number): void;
        setCursorPosition(arg0: number): void;
        setTextColor(arg0: number): void;
        getPaddingX(): number;
        getPrimaryEnglishState(): boolean;
        imblocker$onCursorChanged(): void;
        getCursorInfo(): $SinglelineCursorInfo;
        searchables$getFilter(): $Predicate<string>;
        searchables$getResponder(): $Consumer<string>;
        static SPRITES: $WidgetSprites;
        canLoseFocus: boolean;
        visible: boolean;
        static BACKWARDS: number;
        tooltip: $WidgetTooltipHolder;
        responder: $Consumer<string>;
        active: boolean;
        static DEFAULT_TEXT_COLOR: number;
        textColor: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        static FORWARDS: number;
        height: number;
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $EditBox, arg6: $Component_);
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_);
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: $Component_);
        set formatter(value: $BiFunction_<string, number, $FormattedCharSequence>);
        set filter(value: $Predicate_<string>);
        get innerWidth(): number;
        get highlighted(): string;
        set suggestion(value: string);
        set preferredEnglishState(value: boolean);
        set textColorUneditable(value: number);
        set hint(value: $Component_);
        set maxLength(value: number);
        set highlightPos(value: number);
        get paddingX(): number;
        get primaryEnglishState(): boolean;
        get cursorInfo(): $SinglelineCursorInfo;
    }
    export class $StringWidget extends $AbstractStringWidget {
        alignLeft(): $StringWidget;
        alignRight(): $StringWidget;
        alignCenter(): $StringWidget;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Font);
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: $Font);
        constructor(arg0: $Component_, arg1: $Font);
    }
    export class $SpriteIconButton$CenteredIcon extends $SpriteIconButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: $Button$OnPress_, arg7: $Button$CreateNarration_);
    }
    export class $Checkbox$OnValueChange {
        static NOP: $Checkbox$OnValueChange;
    }
    export interface $Checkbox$OnValueChange {
        onValueChange(arg0: $Checkbox, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Checkbox$OnValueChange}.
     */
    export type $Checkbox$OnValueChange_ = ((arg0: $Checkbox, arg1: boolean) => void);
    export class $FocusableTextWidget extends $MultiLineTextWidget {
        containWithin(arg0: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: $Component_, arg2: $Font, arg3: boolean, arg4: number);
        constructor(arg0: number, arg1: $Component_, arg2: $Font, arg3: number);
        constructor(arg0: number, arg1: $Component_, arg2: $Font);
    }
    export class $CycleButton<T> extends $AbstractButton {
        getValue(): T;
        static builder<T>(arg0: $Function_<T, $Component>): $CycleButton$Builder<T>;
        setValue(arg0: T): void;
        createDefaultNarrationMessage(): $MutableComponent;
        static booleanBuilder(arg0: $Component_, arg1: $Component_): $CycleButton$Builder<boolean>;
        static onOffBuilder(arg0: boolean): $CycleButton$Builder<boolean>;
        static onOffBuilder(): $CycleButton$Builder<boolean>;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        onValueChange: $CycleButton$OnValueChange<T>;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_ALT_LIST_SELECTOR: $BooleanSupplier;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Component_, arg6: number, arg7: T, arg8: $CycleButton$ValueListSupplier<T>, arg9: $Function_<T, $Component>, arg10: $Function_<$CycleButton<T>, $MutableComponent>, arg11: $CycleButton$OnValueChange_<T>, arg12: $OptionInstance$TooltipSupplier_<T>, arg13: boolean);
    }
    export class $FittingMultiLineTextWidget extends $AbstractScrollWidget {
        setColor(arg0: number): $FittingMultiLineTextWidget;
        showingScrollBar(): boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Font);
        set color(value: number);
    }
    export class $Button$OnPress {
    }
    export interface $Button$OnPress {
        onPress(arg0: $Button): void;
    }
    /**
     * Values that may be interpreted as {@link $Button$OnPress}.
     */
    export type $Button$OnPress_ = ((arg0: $Button) => void);
    export class $AbstractOptionSliderButton extends $AbstractSliderButton {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        options: $Options;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        value: number;
        static TEXT_MARGIN: number;
        height: number;
        constructor(arg0: $Options, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $ImageWidget extends $AbstractWidget {
        static texture(arg0: number, arg1: number, arg2: $ResourceLocation_, arg3: number, arg4: number): $ImageWidget;
        static sprite(arg0: number, arg1: number, arg2: $ResourceLocation_): $ImageWidget;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $ObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
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
        hovered: E;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $BossHealthOverlay {
        reset(): void;
        update(arg0: $ClientboundBossEventPacket): void;
        render(arg0: $GuiGraphics): void;
        shouldCreateWorldFog(): boolean;
        shouldDarkenScreen(): boolean;
        shouldPlayMusic(): boolean;
        events: $Map<$UUID, $LerpingBossEvent>;
        constructor(arg0: $Minecraft);
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(arg0: $BooleanSupplier_, arg1: $List_<T>, arg2: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(arg0: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getDefaultList(): $List<T>;
        getSelectedList(): $List<T>;
        get defaultList(): $List<T>;
        get selectedList(): $List<T>;
    }
    export class $AbstractStringWidget extends $AbstractWidget {
        setColor(arg0: number): $AbstractStringWidget;
        getColor(): number;
        getFont(): $Font;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Font);
        get font(): $Font;
    }
    export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
        isFocused(): boolean;
        setFocused(arg0: boolean): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        renderBack(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
        getCurrentFocusPath(): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getRectangle(): $ScreenRectangle;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        getTabOrderGroup(): number;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
    export class $AbstractSelectionList$TrackedList extends $AbstractList<E> {
        reversed(): $SequencedCollection<E>;
    }
    export class $LockIconButton$Icon extends $Enum<$LockIconButton$Icon> {
    }
    /**
     * Values that may be interpreted as {@link $LockIconButton$Icon}.
     */
    export type $LockIconButton$Icon_ = "locked" | "locked_hover" | "locked_disabled" | "unlocked" | "unlocked_hover" | "unlocked_disabled";
    export class $ContainerObjectSelectionList<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
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
        hovered: E;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    export class $AbstractButton extends $AbstractWidget implements $IClickableWidget {
        handler$icf000$tacz$onClickHead(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        getXaero_tooltip(): $Supplier<any>;
        setXaero_tooltip(arg0: $Supplier_<any>): void;
        renderString(arg0: $GuiGraphics, arg1: $Font, arg2: number): void;
        onPress(): void;
        static SPRITES: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $PlayerSkinWidget extends $AbstractWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $EntityModelSet, arg3: $Supplier_<$PlayerSkin>);
    }
    export class $OptionsList$OptionEntry extends $OptionsList$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$OptionsList$Entry>;
    }
    export class $MultiLineTextWidget extends $AbstractStringWidget {
        setMaxRows(arg0: number): $MultiLineTextWidget;
        setMaxWidth(arg0: number): $MultiLineTextWidget;
        setCentered(arg0: boolean): $MultiLineTextWidget;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: $Component_, arg1: $Font);
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: $Font);
        set maxRows(value: number);
        set maxWidth(value: number);
        set centered(value: boolean);
    }
    export class $ObjectSelectionList$Entry<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $NarrationSupplier {
        getNarration(): $Component;
        updateNarration(arg0: $NarrationElementOutput): void;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
        get narration(): $Component;
    }
    export class $CommandSuggestions {
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getNarrationMessage(): $Component;
        isVisible(): boolean;
        setAllowSuggestions(arg0: boolean): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        hide(): void;
        mouseScrolled(arg0: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        getUsageNarration(): $Component;
        setAllowHiding(arg0: boolean): void;
        updateCommandInfo(): void;
        showSuggestions(arg0: boolean): void;
        renderUsage(arg0: $GuiGraphics): void;
        renderSuggestions(arg0: $GuiGraphics, arg1: number, arg2: number): boolean;
        static calculateSuggestionSuffix(arg0: string, arg1: string): string;
        minecraft: $Minecraft;
        fillColor: number;
        input: $EditBox;
        keepSuggestions: boolean;
        anchorToBottom: boolean;
        lineStartOffset: number;
        suggestions: $CommandSuggestions$SuggestionsList;
        suggestionLineLimit: number;
        font: $Font;
        constructor(arg0: $Minecraft, arg1: $Screen, arg2: $EditBox, arg3: $Font, arg4: boolean, arg5: boolean, arg6: number, arg7: number, arg8: boolean, arg9: number);
        get narrationMessage(): $Component;
        get visible(): boolean;
        set allowSuggestions(value: boolean);
        get usageNarration(): $Component;
        set allowHiding(value: boolean);
    }
    export class $PopupScreen$Builder {
        build(): $PopupScreen;
        onClose(arg0: $Runnable_): $PopupScreen$Builder;
        setMessage(arg0: $Component_): $PopupScreen$Builder;
        setWidth(arg0: number): $PopupScreen$Builder;
        addButton(arg0: $Component_, arg1: $Consumer_<$PopupScreen>): $PopupScreen$Builder;
        setImage(arg0: $ResourceLocation_): $PopupScreen$Builder;
        constructor(arg0: $Screen, arg1: $Component_);
        set message(value: $Component_);
        set width(value: number);
        set image(value: $ResourceLocation_);
    }
    export class $OptionsList$Entry extends $ContainerObjectSelectionList$Entry<$OptionsList$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$OptionsList$Entry>;
    }
    export class $ChatComponent implements $ChatComponentAccess {
        getWidth(): number;
        static getWidth(arg0: number): number;
        tick(): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        addMessage(arg0: $Component_, arg1: $MessageSignature_, arg2: $GuiMessageTag_): void;
        addMessage(arg0: $Component_): void;
        modify$bof000$chat_heads$chatheads$correctClickPosition(x: number, guiMessage: $GuiMessage$Line_): number;
        handler$bof000$chat_heads$chatheads$forgetRenderData(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo): void;
        clearMessages(arg0: boolean): void;
        isChatFocused(): boolean;
        getClickedComponentStyleAt(arg0: number, arg1: number): $Style;
        handleChatQueueClicked(arg0: number, arg1: number): boolean;
        modifyExpressionValue$bof000$chat_heads$chatheads$fixTextOverflow(original: number): number;
        restoreState(arg0: $ChatComponent$State): void;
        modify$bof000$chat_heads$chatheads$moveText(font: $Font, formattedCharSequence: $FormattedCharSequence_, x: number, y: number, color: number, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): number;
        handler$bof000$chat_heads$chatheads$renderChatHead(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): void;
        static defaultUnfocusedPct(): number;
        static getHeight(arg0: number): number;
        getHeight(): number;
        scrollChat(arg0: number): void;
        storeState(): $ChatComponent$State;
        getScale(): number;
        rescaleChat(): void;
        getRecentChat(): $ArrayListDeque<string>;
        resetChatScroll(): void;
        getMessageTagAt(arg0: number, arg1: number): $GuiMessageTag;
        addRecentChat(arg0: string): void;
        getLinesPerPage(): number;
        deleteMessage(arg0: $MessageSignature_): void;
        getAllMessages(): $List<$GuiMessage>;
        invokeRefreshTrimmedMessages(): void;
        constructor(arg0: $Minecraft);
        get chatFocused(): boolean;
        get scale(): number;
        get recentChat(): $ArrayListDeque<string>;
        get linesPerPage(): number;
        get allMessages(): $List<$GuiMessage>;
    }
    export class $PlayerTabOverlay implements $PlayerTabOverlayInvoker {
        reset(): void;
        setVisible(arg0: boolean): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: $Scoreboard, arg3: $Objective): void;
        setHeader(arg0: $Component_): void;
        setFooter(arg0: $Component_): void;
        renderPingIcon(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $PlayerInfo): void;
        getNameForDisplay(arg0: $PlayerInfo): $Component;
        invokeRenderPingIcon(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $PlayerInfo): void;
        static MAX_ROWS_PER_COL: number;
        visible: boolean;
        constructor(arg0: $Minecraft, arg1: $Gui);
        set header(value: $Component_);
        set footer(value: $Component_);
    }
    export class $PlayerFaceRenderer {
        static draw(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean): void;
        static draw(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number): void;
        static draw(arg0: $GuiGraphics, arg1: $PlayerSkin_, arg2: number, arg3: number, arg4: number): void;
        static SKIN_HAT_WIDTH: number;
        static SKIN_HAT_HEIGHT: number;
        static SKIN_HEAD_WIDTH: number;
        static SKIN_HAT_U: number;
        static SKIN_TEX_HEIGHT: number;
        static SKIN_HEAD_HEIGHT: number;
        static SKIN_HEAD_V: number;
        static SKIN_HEAD_U: number;
        static SKIN_HAT_V: number;
        static SKIN_TEX_WIDTH: number;
        constructor();
    }
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $OptionsList extends $ContainerObjectSelectionList<$OptionsList$Entry> {
        findOption(arg0: $OptionInstance<never>): $AbstractWidget;
        addSmall(arg0: $List_<$AbstractWidget>): void;
        addSmall(arg0: $AbstractWidget, arg1: $AbstractWidget): void;
        addSmall(...arg0: $OptionInstance<never>[]): void;
        applyUnsavedChanges(): void;
        getMouseOver(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        addBig(arg0: $OptionInstance<never>): void;
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
        hovered: $OptionsList$Entry;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: $OptionsSubScreen);
    }
    export class $SubtitleOverlay implements $SoundEventListener {
        render(arg0: $GuiGraphics): void;
        onPlaySound(arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: number): void;
        constructor(arg0: $Minecraft);
    }
    export class $AbstractSliderButton extends $AbstractWidget {
        applyValue(): void;
        getHandleSprite(): $ResourceLocation;
        getSprite(): $ResourceLocation;
        updateMessage(): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        value: number;
        static TEXT_MARGIN: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: number);
        get handleSprite(): $ResourceLocation;
        get sprite(): $ResourceLocation;
    }
    export class $LockIconButton extends $Button {
        isLocked(): boolean;
        setLocked(arg0: boolean): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Button$OnPress_);
    }
    export class $MultiLineEditBox extends $AbstractScrollWidget implements $MinecraftMultilineEditBoxWidget {
        getValue(): string;
        setValue(arg0: string): void;
        handler$jdl001$imblocker$checkFocusTracking(arg0: string, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        updateCursorInfo(): boolean;
        handler$jdl000$imblocker$onCursorChange(arg0: $CallbackInfo): void;
        imblocker$getTextField(): $MultilineTextField;
        setCharacterLimit(arg0: number): void;
        setValueListener(arg0: $Consumer_<string>): void;
        imblocker$getContentOffsetX(): number;
        imblocker$getContentOffsetY(): number;
        imblocker$onCursorChanged(): void;
        getCursorInfo(): $MultilineCursorInfo;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_, arg6: $Component_);
        set characterLimit(value: number);
        set valueListener(value: $Consumer_<string>);
        get cursorInfo(): $MultilineCursorInfo;
    }
}
