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
        create(label: $Component_, tooltip: $List_<$FormattedCharSequence_>, arg2: string, arg3: T): $EditGameRulesScreen$RuleEntry;
    }
    /**
     * Values that may be interpreted as {@link $EditGameRulesScreen$EntryFactory}.
     */
    export type $EditGameRulesScreen$EntryFactory_<T> = ((arg0: $Component, arg1: $List<$FormattedCharSequence>, arg2: string, arg3: T) => $EditGameRulesScreen$RuleEntry);
    export class $EditGameRulesScreen extends $Screen implements $EditGameRulesScreenAccessor {
        static access$500(arg0: $EditGameRulesScreen): $Minecraft;
        static access$400(arg0: $EditGameRulesScreen): $Minecraft;
        static access$600(arg0: $EditGameRulesScreen): $Font;
        static access$100(arg0: $EditGameRulesScreen): $Minecraft;
        static access$000(arg0: $EditGameRulesScreen): $Minecraft;
        static access$200(arg0: $EditGameRulesScreen): $Minecraft;
        static access$300(arg0: $EditGameRulesScreen): $Minecraft;
        markInvalid(ruleEntry: $EditGameRulesScreen$RuleEntry): void;
        clearInvalid(ruleEntry: $EditGameRulesScreen$RuleEntry): void;
        callMarkValid(ruleEntry: $EditGameRulesScreen$RuleEntry): void;
        callMarkInvalid(ruleEntry: $EditGameRulesScreen$RuleEntry): void;
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
        constructor(gameRules: $GameRules, exitCallback: $Consumer_<($GameRules) | undefined>);
    }
    export class $PresetEditor {
        /**
         * @deprecated
         */
        static EDITORS: $Map<($ResourceKey<$WorldPreset>) | undefined, $PresetEditor>;
    }
    export interface $PresetEditor {
        createEditScreen(lastScreen: $CreateWorldScreen, context: $WorldCreationContext_): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $PresetEditor}.
     */
    export type $PresetEditor_ = ((arg0: $CreateWorldScreen, arg1: $WorldCreationContext) => $Screen);
    export class $WorldSelectionList extends $ObjectSelectionList<$WorldSelectionList$Entry> {
        static access$100(arg0: $WorldSelectionList, arg1: number, arg2: number): $AbstractSelectionList$Entry<any>;
        static access$000(arg0: $WorldSelectionList): $Minecraft;
        getScreen(): $SelectWorldScreen;
        setSelected(selected: $WorldSelectionList$Entry | null): void;
        updateFilter(filter: string): void;
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
        constructor(screen: $SelectWorldScreen, minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number, filter: string, worlds: $WorldSelectionList | null);
        get screen(): $SelectWorldScreen;
        set selected(value: $WorldSelectionList$Entry | null);
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
        build(builder: $SwitchGrid$Builder, gridLayout: $GridLayout, column: number): $SwitchGrid$LabeledSwitch;
        withInfo(info: $Component_): $SwitchGrid$SwitchBuilder;
        withIsActiveCondition(isActiveCondition: $BooleanSupplier_): $SwitchGrid$SwitchBuilder;
        constructor(label: $Component_, stateSupplier: $BooleanSupplier_, onClicked: $Consumer_<boolean>, buttonWidth: number);
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
        constructor(minecraft: $Minecraft);
    }
    export class $ExperimentsScreen extends $Screen {
        onDone(): void;
        static getHumanReadableTitle(pack: $Pack): $Component;
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
        constructor(parent: $Screen, packRepository: $PackRepository, output: $Consumer_<$PackRepository>);
    }
    export class $EditWorldScreen extends $Screen {
        static create(minecraft: $Minecraft, levelAccess: $LevelStorageSource$LevelStorageAccess, callback: $BooleanConsumer_): $EditWorldScreen;
        static makeBackupAndShowToast(levelAccess: $LevelStorageSource$LevelStorageAccess): boolean;
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
        createFreshLevel(levelName: string, levelSettings: $LevelSettings, worldOptions: $WorldOptions, dimensionGetter: $Function_<$RegistryAccess, $WorldDimensions>, lastScreen: $Screen): void;
        openWorld(worldName: string, onFail: $Runnable_): void;
        loadWorldStem(dynamic: $Dynamic<never>, safeMode: boolean, packRepository: $PackRepository): $WorldStem;
        recreateWorldData(levelStorage: $LevelStorageSource$LevelStorageAccess): $Pair<$LevelSettings, $WorldCreationContext>;
        createLevelFromExistingSettings(levelStorage: $LevelStorageSource$LevelStorageAccess, resources: $ReloadableServerResources, registries: $LayeredRegistryAccess<$RegistryLayer_>, worldData: $WorldData): void;
        static confirmWorldCreation(minecraft: $Minecraft, screen: $CreateWorldScreen, lifecycle: $Lifecycle, loadWorld: $Runnable_, skipWarnings: boolean): void;
        constructor(minecraft: $Minecraft, levelSource: $LevelStorageSource);
    }
    export class $OptimizeWorldScreen extends $Screen {
        static create(minecraft: $Minecraft, callback: $BooleanConsumer_, dataFixer: $DataFixer, levelStorage: $LevelStorageSource$LevelStorageAccess, eraseCache: boolean): $OptimizeWorldScreen;
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
        deleteWorld(): void;
        recreateWorld(): void;
        doDeleteWorld(): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        canJoin(): boolean;
        summary: $LevelSummary;
        this$0: $WorldSelectionList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$WorldSelectionList$Entry>;
        constructor(worldSelectionList: $WorldSelectionList, summary: $WorldSelectionList, arg2: $LevelSummary);
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
        constructor(label: $EditGameRulesScreen, arg1: $Component_);
    }
    export class $EditGameRulesScreen$GameRuleEntry extends $EditGameRulesScreen$RuleEntry {
        renderLabel(guiGraphics: $GuiGraphics, x: number, y: number): void;
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
        withOptions(optionsModifier: $WorldCreationContext$OptionsModifier_): $WorldCreationContext;
        withDataConfiguration(arg0: $WorldDataConfiguration_): $WorldCreationContext;
        worldgenLoadContext(): $RegistryAccess$Frozen;
        dataConfiguration(): $WorldDataConfiguration;
        datapackDimensions(): $Registry<$LevelStem>;
        withDimensions(dimensionsUpdater: $WorldCreationContext$DimensionsUpdater_): $WorldCreationContext;
        worldgenRegistries(): $LayeredRegistryAccess<$RegistryLayer>;
        selectedDimensions(): $WorldDimensions;
        withSettings(options: $WorldOptions, selectedDimensions: $WorldDimensions_): $WorldCreationContext;
        constructor(options: $WorldOptions, datapackDimensions: $Registry<$LevelStem_>, selectedDimensions: $WorldDimensions_, worldgenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
        constructor(options: $WorldOptions, selectedDimensions: $WorldDimensions_, worldGenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
        constructor(worldGenSettings: $WorldGenSettings_, worldGenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
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
        build(consumer: $Consumer_<$LayoutElement>): $SwitchGrid;
        withRowSpacing(paddingLeft: number): $SwitchGrid$Builder;
        withInfoUnderneath(maxInfoRows: number, alwaysMaxHeight: boolean): $SwitchGrid$Builder;
        withPaddingLeft(paddingLeft: number): $SwitchGrid$Builder;
        increaseRow(): void;
        addSwitch(label: $Component_, stateSupplier: $BooleanSupplier_, onClicked: $Consumer_<boolean>): $SwitchGrid$SwitchBuilder;
        infoUnderneath: ($SwitchGrid$InfoUnderneathSettings) | undefined;
        width: number;
        rowCount: number;
        rowSpacing: number;
        paddingLeft: number;
        constructor(width: number);
    }
    export class $WorldCreationUiState {
        getName(): string;
        setName(name: string): void;
        isDebug(): boolean;
        setSeed(name: string): void;
        getSeed(): string;
        setSettings(settings: $WorldCreationContext_): void;
        getSettings(): $WorldCreationContext;
        addListener(listener: $Consumer_<$WorldCreationUiState>): void;
        isAllowCommands(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        setGameMode(gameMode: $WorldCreationUiState$SelectedGameMode_): void;
        isHardcore(): boolean;
        getWorldType(): $WorldCreationUiState$WorldTypeEntry;
        onChanged(): void;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        tryUpdateDataConfiguration(worldDataConfiguration: $WorldDataConfiguration_): boolean;
        updateDimensions(dimensionsUpdater: $WorldCreationContext$DimensionsUpdater_): void;
        getGameMode(): $WorldCreationUiState$SelectedGameMode;
        setAllowCommands(allowCommands: boolean): void;
        getTargetFolder(): string;
        isGenerateStructures(): boolean;
        setGenerateStructures(allowCommands: boolean): void;
        getNormalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        getAltPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        getPresetEditor(): $PresetEditor;
        setGameRules(gameRules: $GameRules): void;
        setBonusChest(allowCommands: boolean): void;
        setWorldType(worldType: $WorldCreationUiState$WorldTypeEntry_): void;
        isBonusChest(): boolean;
        constructor(savesFolder: $Path_, settings: $WorldCreationContext_, preset: ($ResourceKey_<$WorldPreset>) | undefined, seed: $OptionalLong);
        get debug(): boolean;
        get hardcore(): boolean;
        get targetFolder(): string;
        get normalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        get altPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        get presetEditor(): $PresetEditor;
    }
    export class $EditGameRulesScreen$RuleEntry extends $ContainerObjectSelectionList$Entry<$EditGameRulesScreen$RuleEntry> {
        tooltip: $List<$FormattedCharSequence>;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$EditGameRulesScreen$RuleEntry>;
        constructor(tooltip: $List_<$FormattedCharSequence_> | null);
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
        updateButtonStatus(levelSummary: $LevelSummary | null): void;
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
        constructor(lastScreen: $Screen);
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
        constructor(gameRules: $EditGameRulesScreen, arg1: $GameRules);
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
        describePreset(): $Component;
        isAmplified(): boolean;
        constructor(preset: $Holder_<$WorldPreset> | null);
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
        constructor(enabledPacks: $Collection_<$Pack>, callback: $BooleanConsumer_);
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
        static access$500(arg0: $CreateWorldScreen): $Font;
        static access$700(arg0: $CreateWorldScreen): $Minecraft;
        static access$400(arg0: $CreateWorldScreen): $Minecraft;
        static access$600(arg0: $CreateWorldScreen): $Font;
        static access$100(arg0: $CreateWorldScreen, arg1: $GuiEventListener): void;
        static access$000(arg0: $CreateWorldScreen): $Font;
        static access$200(arg0: $CreateWorldScreen): $Font;
        static access$300(arg0: $CreateWorldScreen): $Minecraft;
        openExperimentsScreen(worldDataConfiguration: $WorldDataConfiguration_): void;
        getUiState(): $WorldCreationUiState;
        static openFresh(minecraft: $Minecraft, lastScreen: $Screen | null): void;
        popScreen(): void;
        static createTempDataPackDirFromExistingWorld(datapackDir: $Path_, minecraft: $Minecraft): $Path;
        static createFromExisting(minecraft: $Minecraft, lastScreen: $Screen | null, levelSettings: $LevelSettings, settings: $WorldCreationContext_, tempDataPackDir: $Path_ | null): $CreateWorldScreen;
        openDataPackSelectionScreen(worldDataConfiguration: $WorldDataConfiguration_): void;
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
