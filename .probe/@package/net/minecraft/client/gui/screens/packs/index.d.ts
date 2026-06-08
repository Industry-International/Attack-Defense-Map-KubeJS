import { $Logger } from "@package/org/slf4j";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $WidgetTooltipHolder, $ObjectSelectionList, $AbstractSelectionList, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $Consumer_, $Function_, $Function } from "@package/java/util/function";
import { $PackRepository, $PackSource, $Pack, $PackCompatibility } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Runnable_, $AutoCloseable, $Runnable } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/packs" {
    export class $PackSelectionScreen$Watcher implements $AutoCloseable {
    }
    export class $PackSelectionModel {
        commit(): void;
        getSelected(): $Stream<$PackSelectionModel$Entry>;
        updateRepoSelectedList(): void;
        findNewPacks(): void;
        getUnselected(): $Stream<$PackSelectionModel$Entry>;
        iconGetter: $Function<$Pack, $ResourceLocation>;
        onListChanged: $Runnable;
        unselected: $List<$Pack>;
        selected: $List<$Pack>;
        constructor(arg0: $Runnable_, arg1: $Function_<$Pack, $ResourceLocation>, arg2: $PackRepository, arg3: $Consumer_<$PackRepository>);
    }
    export class $PackSelectionModel$SelectedPackEntry extends $PackSelectionModel$EntryBase {
    }
    export class $PackSelectionModel$UnselectedPackEntry extends $PackSelectionModel$EntryBase {
    }
    export class $TransferableSelectionList extends $ObjectSelectionList<$TransferableSelectionList$PackEntry> {
        static access$000(arg0: $TransferableSelectionList): boolean;
        static access$100(arg0: $TransferableSelectionList, arg1: number): number;
        minecraft: $Minecraft;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static UNSELECT_SPRITE: $ResourceLocation;
        screen: $PackSelectionScreen;
        static MOVE_UP_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static SELECT_SPRITE: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static MOVE_UP_SPRITE: $ResourceLocation;
        static INCOMPATIBLE_TITLE: $Component;
        alpha: number;
        scrollAmount: number;
        height: number;
        static INCOMPATIBLE_CONFIRM_TITLE: $Component;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLBAR_WIDTH: number;
        static $assertionsDisabled: boolean;
        active: boolean;
        static SELECT_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static MOVE_DOWN_SPRITE: $ResourceLocation;
        static SCROLLER_SPRITE: $ResourceLocation;
        centerListVertically: boolean;
        width: number;
        static UNSELECT_HIGHLIGHTED_SPRITE: $ResourceLocation;
        headerHeight: number;
        hovered: $TransferableSelectionList$PackEntry;
        static MOVE_DOWN_HIGHLIGHTED_SPRITE: $ResourceLocation;
        constructor(arg0: $Minecraft, arg1: $PackSelectionScreen, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $PackSelectionModel$EntryBase implements $PackSelectionModel$Entry {
        canSelect(): boolean;
        getExtendedDescription(): $Component;
        canUnselect(): boolean;
        get extendedDescription(): $Component;
    }
    export class $PackSelectionScreen extends $Screen {
        static copyPacks(arg0: $Minecraft, arg1: $List_<$Path_>, arg2: $Path_): void;
        clearSelected(): void;
        updateFocus(arg0: $TransferableSelectionList): void;
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
        static LOGGER: $Logger;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $PackRepository, arg1: $Consumer_<$PackRepository>, arg2: $Path_, arg3: $Component_);
    }
    export class $TransferableSelectionList$PackEntry extends $ObjectSelectionList$Entry<$TransferableSelectionList$PackEntry> {
        getPackId(): string;
        keyboardMoveDown(): void;
        keyboardMoveUp(): void;
        keyboardSelection(): void;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$TransferableSelectionList$PackEntry>;
        constructor(arg0: $Minecraft, arg1: $TransferableSelectionList, arg2: $PackSelectionModel$Entry);
        get packId(): string;
    }
    export class $PackSelectionModel$Entry {
    }
    export interface $PackSelectionModel$Entry {
        getId(): string;
        getDescription(): $Component;
        select(): void;
        isSelected(): boolean;
        isRequired(): boolean;
        getTitle(): $Component;
        moveDown(): void;
        moveUp(): void;
        getCompatibility(): $PackCompatibility;
        getPackSource(): $PackSource;
        isFixedPosition(): boolean;
        canSelect(): boolean;
        unselect(): void;
        canMoveUp(): boolean;
        getExtendedDescription(): $Component;
        canUnselect(): boolean;
        canMoveDown(): boolean;
        getIconTexture(): $ResourceLocation;
        get id(): string;
        get description(): $Component;
        get selected(): boolean;
        get required(): boolean;
        get title(): $Component;
        get compatibility(): $PackCompatibility;
        get packSource(): $PackSource;
        get fixedPosition(): boolean;
        get extendedDescription(): $Component;
        get iconTexture(): $ResourceLocation;
    }
}
