import { $Dynamic, $Lifecycle } from "@package/com/mojang/serialization";
import { $RegistryLayer, $RegistryLayer_, $WorldStem, $ReloadableServerResources } from "@package/net/minecraft/server";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $Executor } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $NarratorStatus, $Minecraft } from "@package/net/minecraft/client";
import { $OptionalLong, $Map, $List, $Collection_, $List_, $Collection } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $FormattedCharSequence, $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_, $BiFunction, $UnaryOperator, $Function_, $BooleanSupplier_ } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $RegistryAccess, $Registry, $Holder_, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $GridLayoutTab } from "@package/net/minecraft/client/gui/components/tabs";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Enum, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $WorldDimensions, $WorldOptions, $WorldDimensions_, $WorldGenSettings_ } from "@package/net/minecraft/world/level/levelgen";
import { $GameType, $WorldDataConfiguration, $GameRules, $WorldDataConfiguration_, $GameRules$Value, $LevelSettings } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $HeaderAndFooterLayout, $LayoutElement, $GridLayout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $EditBox, $AbstractSelectionList, $AbstractSelectionList$Entry, $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $Renderable, $CycleButton, $WidgetTooltipHolder, $ContainerObjectSelectionList, $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $WorldData, $LevelStorageSource, $LevelStorageSource$LevelStorageAccess, $LevelSummary } from "@package/net/minecraft/world/level/storage";
import { $PackRepository, $Pack } from "@package/net/minecraft/server/packs/repository";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $LevelStem_, $LevelStem } from "@package/net/minecraft/world/level/dimension";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $EditGameRulesScreenAccessor } from "@package/net/fabricmc/fabric/mixin/gamerule/client";

declare module "@package/net/minecraft/client/gui/screens/worldselection" {
    export class $SwitchGrid {
    }
    export class $EditGameRulesScreen$EntryFactory<T extends $GameRules$Value<T>> {
    }
    export interface $EditGameRulesScreen$EntryFactory<T extends $GameRules$Value<T>> {
        create(arg0: $Component_, arg1: $List_<$FormattedCharSequence_>, arg2: string, arg3: T): $EditGameRulesScreen$RuleEntry;
    }
    /**
     * Values that may be interpreted as {@link $EditGameRulesScreen$EntryFactory}.
     */
    export type $EditGameRulesScreen$EntryFactory_<T> = ((arg0: $Component, arg1: $List<$FormattedCharSequence>, arg2: string, arg3: T) => $EditGameRulesScreen$RuleEntry);
    export class $EditGameRulesScreen extends $Screen implements $EditGameRulesScreenAccessor {
        static access$100(arg0: $EditGameRulesScreen): $Minecraft;
        static access$000(arg0: $EditGameRulesScreen): $Minecraft;
        static access$300(arg0: $EditGameRulesScreen): $Minecraft;
        static access$200(arg0: $EditGameRulesScreen): $Minecraft;
        static access$500(arg0: $EditGameRulesScreen): $Minecraft;
        static access$400(arg0: $EditGameRulesScreen): $Minecraft;
        static access$600(arg0: $EditGameRulesScreen): $Font;
        markInvalid(arg0: $EditGameRulesScreen$RuleEntry): void;
        clearInvalid(arg0: $EditGameRulesScreen$RuleEntry): void;
        callMarkValid(arg0: $EditGameRulesScreen$RuleEntry): void;
        callMarkInvalid(arg0: $EditGameRulesScreen$RuleEntry): void;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $GameRules, arg1: $Consumer_<($GameRules) | undefined>);
    }
    export class $PresetEditor {
        /**
         * @deprecated
         */
        static EDITORS: $Map<($ResourceKey<$WorldPreset>) | undefined, $PresetEditor>;
    }
    export interface $PresetEditor {
        createEditScreen(arg0: $CreateWorldScreen, arg1: $WorldCreationContext_): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $PresetEditor}.
     */
    export type $PresetEditor_ = ((arg0: $CreateWorldScreen, arg1: $WorldCreationContext) => $Screen);
    export class $WorldSelectionList extends $ObjectSelectionList<$WorldSelectionList$Entry> {
        static access$100(arg0: $WorldSelectionList, arg1: number, arg2: number): $AbstractSelectionList$Entry<any>;
        static access$000(arg0: $WorldSelectionList): $Minecraft;
        setSelected(arg0: $WorldSelectionList$Entry): void;
        getScreen(): $SelectWorldScreen;
        updateFilter(arg0: string): void;
        getSelectedOpt(): ($WorldSelectionList$WorldListEntry) | undefined;
        reloadWorldList(): void;
        minecraft: $Minecraft;
        static DATE_FORMAT: $DateTimeFormatter;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static WARNING_HIGHLIGHTED_SPRITE: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static WORLD_LOCKED_TOOLTIP: $Component;
        alpha: number;
        static ERROR_HIGHLIGHTED_SPRITE: $ResourceLocation;
        scrollAmount: number;
        height: number;
        static FROM_NEWER_TOOLTIP_1: $Component;
        static FROM_NEWER_TOOLTIP_2: $Component;
        static SNAPSHOT_TOOLTIP_1: $Component;
        static SNAPSHOT_TOOLTIP_2: $Component;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static MARKED_JOIN_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static SCROLLBAR_WIDTH: number;
        static $assertionsDisabled: boolean;
        active: boolean;
        static JOIN_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static MARKED_JOIN_SPRITE: $ResourceLocation;
        static WORLD_REQUIRES_CONVERSION: $Component;
        static WARNING_SPRITE: $ResourceLocation;
        static WORLD_EXPERIMENTAL: $Component;
        static SCROLLER_SPRITE: $ResourceLocation;
        centerListVertically: boolean;
        width: number;
        static INCOMPATIBLE_VERSION_TOOLTIP: $Component;
        static LOGGER: $Logger;
        static ERROR_SPRITE: $ResourceLocation;
        headerHeight: number;
        hovered: $WorldSelectionList$Entry;
        static JOIN_SPRITE: $ResourceLocation;
        constructor(arg0: $SelectWorldScreen, arg1: $Minecraft, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string, arg7: $WorldSelectionList);
        set selected(value: $WorldSelectionList$Entry);
        get screen(): $SelectWorldScreen;
        get selectedOpt(): ($WorldSelectionList$WorldListEntry) | undefined;
    }
    export class $WorldCreationContext$OptionsModifier {
    }
    export interface $WorldCreationContext$OptionsModifier extends $UnaryOperator<$WorldOptions> {
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext$OptionsModifier}.
     */
    export type $WorldCreationContext$OptionsModifier_ = (() => void);
    export class $SwitchGrid$SwitchBuilder {
        build(arg0: $SwitchGrid$Builder, arg1: $GridLayout, arg2: number): $SwitchGrid$LabeledSwitch;
        withIsActiveCondition(arg0: $BooleanSupplier_): $SwitchGrid$SwitchBuilder;
        withInfo(arg0: $Component_): $SwitchGrid$SwitchBuilder;
        constructor(arg0: $Component_, arg1: $BooleanSupplier_, arg2: $Consumer_<boolean>, arg3: number);
    }
    export class $EditGameRulesScreen$BooleanRuleEntry extends $EditGameRulesScreen$GameRuleEntry {
        this$0: $EditGameRulesScreen;
        tooltip: $List<$FormattedCharSequence>;
        label: $List<$FormattedCharSequence>;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$EditGameRulesScreen$RuleEntry>;
    }
    export class $CreateWorldScreen$GameTab extends $GridLayoutTab {
        layout: $GridLayout;
    }
    export class $WorldSelectionList$LoadingHeader extends $WorldSelectionList$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$WorldSelectionList$Entry>;
        constructor(arg0: $Minecraft);
    }
    export class $ExperimentsScreen extends $Screen {
        onDone(): void;
        static getHumanReadableTitle(arg0: $Pack): $Component;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        static INFO: $Component;
        title: $Component;
        packs: $Object2BooleanMap<$Pack>;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        static MAIN_CONTENT_WIDTH: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static TITLE: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $PackRepository, arg2: $Consumer_<$PackRepository>);
    }
    export class $EditWorldScreen extends $Screen {
        static create(arg0: $Minecraft, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $BooleanConsumer_): $EditWorldScreen;
        static makeBackupAndShowToast(arg0: $LevelStorageSource$LevelStorageAccess): boolean;
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
    }
    export class $CreateWorldScreen$MoreTab extends $GridLayoutTab {
        layout: $GridLayout;
    }
    export class $WorldOpenFlows {
        openWorld(arg0: string, arg1: $Runnable_): void;
        createFreshLevel(arg0: string, arg1: $LevelSettings, arg2: $WorldOptions, arg3: $Function_<$RegistryAccess, $WorldDimensions>, arg4: $Screen): void;
        loadWorldStem(arg0: $Dynamic<never>, arg1: boolean, arg2: $PackRepository): $WorldStem;
        recreateWorldData(arg0: $LevelStorageSource$LevelStorageAccess): $Pair<$LevelSettings, $WorldCreationContext>;
        createLevelFromExistingSettings(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData): void;
        static confirmWorldCreation(arg0: $Minecraft, arg1: $CreateWorldScreen, arg2: $Lifecycle, arg3: $Runnable_, arg4: boolean): void;
        constructor(arg0: $Minecraft, arg1: $LevelStorageSource);
    }
    export class $OptimizeWorldScreen extends $Screen {
        static create(arg0: $Minecraft, arg1: $BooleanConsumer_, arg2: $DataFixer, arg3: $LevelStorageSource$LevelStorageAccess, arg4: boolean): $OptimizeWorldScreen;
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
    }
    export class $WorldSelectionList$WorldListEntry extends $WorldSelectionList$Entry implements $AutoCloseable {
        getLevelName(): string;
        editWorld(): void;
        joinWorld(): void;
        recreateWorld(): void;
        deleteWorld(): void;
        doDeleteWorld(): void;
        canJoin(): boolean;
        summary: $LevelSummary;
        this$0: $WorldSelectionList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$WorldSelectionList$Entry>;
        constructor(arg0: $WorldSelectionList, arg1: $WorldSelectionList, arg2: $LevelSummary);
        get levelName(): string;
    }
    export class $EditGameRulesScreen$CategoryRuleEntry extends $EditGameRulesScreen$RuleEntry {
        this$0: $EditGameRulesScreen;
        tooltip: $List<$FormattedCharSequence>;
        label: $Component;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$EditGameRulesScreen$RuleEntry>;
        constructor(arg0: $EditGameRulesScreen, arg1: $Component_);
    }
    export class $EditGameRulesScreen$GameRuleEntry extends $EditGameRulesScreen$RuleEntry {
        renderLabel(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        this$0: $EditGameRulesScreen;
        tooltip: $List<$FormattedCharSequence>;
        label: $List<$FormattedCharSequence>;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$EditGameRulesScreen$RuleEntry>;
    }
    export class $ConfirmExperimentalFeaturesScreen$DetailsScreen extends $Screen {
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
    }
    export class $SwitchGrid$InfoUnderneathSettings extends $Record {
    }
    export class $WorldCreationContext extends $Record {
        validate(): void;
        options(): $WorldOptions;
        dataPackResources(): $ReloadableServerResources;
        withOptions(arg0: $WorldCreationContext$OptionsModifier_): $WorldCreationContext;
        worldgenRegistries(): $LayeredRegistryAccess<$RegistryLayer>;
        selectedDimensions(): $WorldDimensions;
        withSettings(arg0: $WorldOptions, arg1: $WorldDimensions_): $WorldCreationContext;
        withDimensions(arg0: $WorldCreationContext$DimensionsUpdater_): $WorldCreationContext;
        worldgenLoadContext(): $RegistryAccess$Frozen;
        withDataConfiguration(arg0: $WorldDataConfiguration_): $WorldCreationContext;
        datapackDimensions(): $Registry<$LevelStem>;
        dataConfiguration(): $WorldDataConfiguration;
        constructor(options: $WorldOptions, datapackDimensions: $Registry<$LevelStem_>, selectedDimensions: $WorldDimensions_, worldgenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
        constructor(arg0: $WorldOptions, arg1: $WorldDimensions_, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $ReloadableServerResources, arg4: $WorldDataConfiguration_);
        constructor(arg0: $WorldGenSettings_, arg1: $LayeredRegistryAccess<$RegistryLayer_>, arg2: $ReloadableServerResources, arg3: $WorldDataConfiguration_);
    }
    export class $ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry extends $ObjectSelectionList$Entry<$ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry>;
    }
    export class $CreateWorldScreen$DataPackReloadCookie extends $Record {
    }
    export class $WorldCreationContext$DimensionsUpdater {
    }
    export interface $WorldCreationContext$DimensionsUpdater extends $BiFunction<$RegistryAccess$Frozen, $WorldDimensions, $WorldDimensions> {
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext$DimensionsUpdater}.
     */
    export type $WorldCreationContext$DimensionsUpdater_ = (() => void);
    export class $SwitchGrid$Builder {
        build(arg0: $Consumer_<$LayoutElement>): $SwitchGrid;
        withPaddingLeft(arg0: number): $SwitchGrid$Builder;
        withInfoUnderneath(arg0: number, arg1: boolean): $SwitchGrid$Builder;
        withRowSpacing(arg0: number): $SwitchGrid$Builder;
        increaseRow(): void;
        addSwitch(arg0: $Component_, arg1: $BooleanSupplier_, arg2: $Consumer_<boolean>): $SwitchGrid$SwitchBuilder;
        infoUnderneath: ($SwitchGrid$InfoUnderneathSettings) | undefined;
        width: number;
        rowCount: number;
        rowSpacing: number;
        paddingLeft: number;
        constructor(arg0: number);
    }
    export class $WorldCreationUiState {
        getName(): string;
        setName(arg0: string): void;
        isDebug(): boolean;
        setSeed(arg0: string): void;
        getSeed(): string;
        onChanged(): void;
        setSettings(arg0: $WorldCreationContext_): void;
        getSettings(): $WorldCreationContext;
        addListener(arg0: $Consumer_<$WorldCreationUiState>): void;
        updateDimensions(arg0: $WorldCreationContext$DimensionsUpdater_): void;
        getGameMode(): $WorldCreationUiState$SelectedGameMode;
        setGameMode(arg0: $WorldCreationUiState$SelectedGameMode_): void;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        isHardcore(): boolean;
        isAllowCommands(): boolean;
        setDifficulty(arg0: $Difficulty_): void;
        setAllowCommands(arg0: boolean): void;
        getTargetFolder(): string;
        tryUpdateDataConfiguration(arg0: $WorldDataConfiguration_): boolean;
        getPresetEditor(): $PresetEditor;
        getAltPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        isBonusChest(): boolean;
        setWorldType(arg0: $WorldCreationUiState$WorldTypeEntry_): void;
        setGameRules(arg0: $GameRules): void;
        setBonusChest(arg0: boolean): void;
        getWorldType(): $WorldCreationUiState$WorldTypeEntry;
        getNormalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        setGenerateStructures(arg0: boolean): void;
        isGenerateStructures(): boolean;
        constructor(arg0: $Path_, arg1: $WorldCreationContext_, arg2: ($ResourceKey_<$WorldPreset>) | undefined, arg3: $OptionalLong);
        get debug(): boolean;
        get hardcore(): boolean;
        get targetFolder(): string;
        get presetEditor(): $PresetEditor;
        get altPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        get normalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
    }
    export class $EditGameRulesScreen$RuleEntry extends $ContainerObjectSelectionList$Entry<$EditGameRulesScreen$RuleEntry> {
        tooltip: $List<$FormattedCharSequence>;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$EditGameRulesScreen$RuleEntry>;
        constructor(arg0: $List_<$FormattedCharSequence_>);
    }
    export class $WorldSelectionList$Entry extends $ObjectSelectionList$Entry<$WorldSelectionList$Entry> implements $AutoCloseable {
        close(): void;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$WorldSelectionList$Entry>;
        constructor();
    }
    export class $SelectWorldScreen extends $Screen {
        updateButtonStatus(arg0: $LevelSummary): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static TEST_OPTIONS: $WorldOptions;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        lastScreen: $Screen;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        searchBox: $EditBox;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen);
    }
    export class $EditGameRulesScreen$RuleList extends $ContainerObjectSelectionList<$EditGameRulesScreen$RuleEntry> {
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
        this$0: $EditGameRulesScreen;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $EditGameRulesScreen$RuleEntry;
        height: number;
        constructor(arg0: $EditGameRulesScreen, arg1: $GameRules);
    }
    export class $ConfirmExperimentalFeaturesScreen$DetailsScreen$PackList extends $ObjectSelectionList<$ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry> {
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
        hovered: $ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry;
        height: number;
    }
    export class $WorldCreationUiState$WorldTypeEntry extends $Record {
        preset(): $Holder<$WorldPreset>;
        isAmplified(): boolean;
        describePreset(): $Component;
        constructor(preset: $Holder_<$WorldPreset>);
        get amplified(): boolean;
    }
    export class $SwitchGrid$LabeledSwitch extends $Record {
    }
    export class $WorldOpenFlows$1Data extends $Record {
    }
    export class $ConfirmExperimentalFeaturesScreen extends $Screen {
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
        enabledPacks: $Collection<$Pack>;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Collection_<$Pack>, arg1: $BooleanConsumer_);
    }
    export class $CreateWorldScreen$WorldTab extends $GridLayoutTab {
        layout: $GridLayout;
    }
    export class $EditGameRulesScreen$IntegerRuleEntry extends $EditGameRulesScreen$GameRuleEntry {
        this$0: $EditGameRulesScreen;
        tooltip: $List<$FormattedCharSequence>;
        label: $List<$FormattedCharSequence>;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$EditGameRulesScreen$RuleEntry>;
    }
    export class $WorldCreationUiState$SelectedGameMode extends $Enum<$WorldCreationUiState$SelectedGameMode> {
        static values(): $WorldCreationUiState$SelectedGameMode[];
        static valueOf(arg0: string): $WorldCreationUiState$SelectedGameMode;
        getInfo(): $Component;
        static SURVIVAL: $WorldCreationUiState$SelectedGameMode;
        gameType: $GameType;
        displayName: $Component;
        static CREATIVE: $WorldCreationUiState$SelectedGameMode;
        static DEBUG: $WorldCreationUiState$SelectedGameMode;
        static HARDCORE: $WorldCreationUiState$SelectedGameMode;
        get info(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationUiState$SelectedGameMode}.
     */
    export type $WorldCreationUiState$SelectedGameMode_ = "survival" | "hardcore" | "creative" | "debug";
    export class $CreateWorldScreen extends $Screen {
        getUiState(): $WorldCreationUiState;
        popScreen(): void;
        static openFresh(arg0: $Minecraft, arg1: $Screen): void;
        static access$100(arg0: $CreateWorldScreen, arg1: $GuiEventListener): void;
        static access$000(arg0: $CreateWorldScreen): $Font;
        static access$300(arg0: $CreateWorldScreen): $Minecraft;
        static access$200(arg0: $CreateWorldScreen): $Font;
        static access$700(arg0: $CreateWorldScreen): $Minecraft;
        static access$500(arg0: $CreateWorldScreen): $Font;
        static access$400(arg0: $CreateWorldScreen): $Minecraft;
        static access$600(arg0: $CreateWorldScreen): $Font;
        static createTempDataPackDirFromExistingWorld(arg0: $Path_, arg1: $Minecraft): $Path;
        openDataPackSelectionScreen(arg0: $WorldDataConfiguration_): void;
        static createFromExisting(arg0: $Minecraft, arg1: $Screen, arg2: $LevelSettings, arg3: $WorldCreationContext_, arg4: $Path_): $CreateWorldScreen;
        openExperimentsScreen(arg0: $WorldDataConfiguration_): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static GAME_MODEL_LABEL: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static EXPERIMENTS_LABEL: $Component;
        static ALLOW_COMMANDS_INFO: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        uiState: $WorldCreationUiState;
        narratorButton: $CycleButton<$NarratorStatus>;
        static TAB_HEADER_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static NAME_LABEL: $Component;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
}
