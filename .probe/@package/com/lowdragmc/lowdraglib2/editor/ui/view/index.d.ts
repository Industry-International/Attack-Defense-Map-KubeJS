import { $Codec } from "@package/com/mojang/serialization";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $BiMap } from "@package/com/google/common/collect";
import { $Stack, $Map } from "@package/java/util";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurable, $SerializableRecordAction, $EditAction } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $IHistoryStack, $IHistoryStack$HistoryItem, $IHistoryStack$HistoryItem_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";
import { $Tab, $ScrollerView, $TabView, $Inspector } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $Consumer_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $Runnable_, $Object } from "@package/java/lang";
import { $Resource, $Resources, $ResourceInstance } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $Editor, $View } from "@package/com/lowdragmc/lowdraglib2/editor/ui";

declare module "@package/com/lowdragmc/lowdraglib2/editor/ui/view" {
    export class $ResourceView extends $View {
        clear(): void;
        getResources(): $Map<$Resource<never>, $ResourceInstance<never>>;
        removeResource(arg0: $Resource<never>): void;
        getResourceInstance<T>(arg0: $Resource<never>): $ResourceInstance<T>;
        getSelectedResourceInstance(): $ResourceInstance<never>;
        getResourceTabs(): $BiMap<$Resource<never>, $Tab>;
        addResourceInstance(arg0: $ResourceInstance<never>): void;
        addResourceInstances(...arg0: $ResourceInstance<never>[]): void;
        selectResourceInstance(arg0: $Resource<never>): void;
        loadResources(arg0: $Resources): void;
        editor: $Editor;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        tabView: $TabView;
        constructor(arg0: $Editor);
        get resources(): $Map<$Resource<never>, $ResourceInstance<never>>;
        get selectedResourceInstance(): $ResourceInstance<never>;
        get resourceTabs(): $BiMap<$Resource<never>, $Tab>;
    }
    export class $InspectorView extends $View {
        clear(): void;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>): $ConfiguratorGroup;
        inspect<T extends $IConfigurable>(arg0: T, arg1: $Consumer_<$Configurator>, arg2: $Runnable_, arg3: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>, arg2: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable): $ConfiguratorGroup;
        editor: $Editor;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        inspector: $Inspector;
        constructor(arg0: $Editor);
    }
    export class $HistoryView extends $View implements $IHistoryStack {
        clearHistory(): void;
        undo(): void;
        redo(): void;
        getUndoStack(): $Stack<$IHistoryStack$HistoryItem>;
        jumpToHistory(arg0: $IHistoryStack$HistoryItem_): void;
        setMaxHistoryCount(arg0: number): void;
        getCurrentHistory(): $IHistoryStack$HistoryItem;
        getMaxHistoryCount(): number;
        getRedoStack(): $Stack<$IHistoryStack$HistoryItem>;
        pushHistory(arg0: $Component_, arg1: $EditAction): void;
        pushHistory(arg0: $Component_, arg1: $EditAction, arg2: $Object, arg3: boolean): void;
        pushHistory(arg0: $Component_, arg1: $EditAction, arg2: boolean): void;
        recordSerializableObject<T extends $INBTSerializable<never>>(arg0: $Component_, arg1: T): $SerializableRecordAction<T>;
        recordSerializableObject<T extends $INBTSerializable<never>>(arg0: $Component_, arg1: T, arg2: $Object): $SerializableRecordAction<T>;
        editor: $Editor;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        static MAX_HISTORY_COUNT: number;
        constructor(arg0: $Editor);
        get undoStack(): $Stack<$IHistoryStack$HistoryItem>;
        get currentHistory(): $IHistoryStack$HistoryItem;
        get redoStack(): $Stack<$IHistoryStack$HistoryItem>;
    }
}
