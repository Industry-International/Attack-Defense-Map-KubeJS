import { $Predicate_, $Supplier_, $Function_, $BooleanSupplier_, $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $HashSet } from "@package/java/util";
import { $Resource$DisplayMode_, $ResourceInstance, $IResourcePath, $IResourceProvider } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $Editor } from "@package/com/lowdragmc/lowdraglib2/editor/ui";
import { $UIElementProvider_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";
import { $ScrollerView, $SplitView$Horizontal } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";

declare module "@package/com/lowdragmc/lowdraglib2/editor/ui/resource" {
    export class $ResourceContainer<T> extends $UIElement {
        loadResource(): void;
        setOnResourceSelect(arg0: $Consumer_<$CompoundTag>): void;
        getSelectedProvider(): $IResourceProvider<$CompoundTag>;
        selectProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        editor: $Editor;
        static CODEC: $Codec<$UIElement>;
        splitView: $SplitView$Horizontal;
        resourceInstance: $ResourceInstance<$CompoundTag>;
        static EMPTY_LAYOUT: $Layout;
        providerContainer: $UIElement;
        providerList: $ScrollerView;
        constructor(arg0: $ResourceInstance<$CompoundTag_>, arg1: $Editor);
        set onResourceSelect(value: $Consumer_<$CompoundTag>);
        get selectedProvider(): $IResourceProvider<$CompoundTag>;
    }
    export class $ResourceProviderContainer<T> extends $UIElement {
        getSelected(): $IResourcePath;
        copyResource(arg0: $IResourcePath): void;
        setCanEdit(arg0: $Predicate_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        removeResource(arg0: $IResourcePath, arg1: boolean): void;
        setAddDefault(arg0: $Supplier_<$CompoundTag>): $ResourceProviderContainer<$CompoundTag>;
        setCanRemove(arg0: $Predicate_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setDisplayMode(arg0: $Resource$DisplayMode_): void;
        setCanRename(arg0: $Predicate_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setOnDragProvider(arg0: $Function_<$IResourcePath, never>): $ResourceProviderContainer<$CompoundTag>;
        setSupportAdd(arg0: $BooleanSupplier_): $ResourceProviderContainer<$CompoundTag>;
        setUiSupplier(arg0: $UIElementProvider_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        renameResource(arg0: $IResourcePath): void;
        editResource(arg0: $IResourcePath): void;
        markResourceDirty(arg0: $IResourcePath): void;
        getDirtyResources(): $HashSet<$IResourcePath>;
        addNewResource(arg0: $CompoundTag_): void;
        appendResourceUI(arg0: $IResourcePath): void;
        selectResource(arg0: $IResourcePath): void;
        reloadResourceContainer(): void;
        setOnResourceSelect(arg0: $Consumer_<$CompoundTag>): $ResourceProviderContainer<$CompoundTag>;
        reloadSpecificResource(arg0: $IResourcePath): void;
        setOnEdit(arg0: $BiConsumer_<$ResourceProviderContainer<$CompoundTag>, $IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setCanCopy(arg0: $Predicate_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setUiWidth(arg0: number): void;
        setOnMenu(arg0: $BiConsumer_<$ResourceProviderContainer<$CompoundTag>, $TreeBuilder$Menu>): $ResourceProviderContainer<$CompoundTag>;
        getEditor(): $Editor;
        setEditor(arg0: $Editor): $ResourceProviderContainer<$CompoundTag>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        resourceProvider: $IResourceProvider<$CompoundTag>;
        constructor(arg0: $IResourceProvider<$CompoundTag_>);
        get selected(): $IResourcePath;
        set canEdit(value: $Predicate_<$IResourcePath>);
        set addDefault(value: $Supplier_<$CompoundTag>);
        set canRemove(value: $Predicate_<$IResourcePath>);
        set displayMode(value: $Resource$DisplayMode_);
        set canRename(value: $Predicate_<$IResourcePath>);
        set onDragProvider(value: $Function_<$IResourcePath, never>);
        set supportAdd(value: $BooleanSupplier_);
        set uiSupplier(value: $UIElementProvider_<$IResourcePath>);
        get dirtyResources(): $HashSet<$IResourcePath>;
        set onResourceSelect(value: $Consumer_<$CompoundTag>);
        set onEdit(value: $BiConsumer_<$ResourceProviderContainer<$CompoundTag>, $IResourcePath>);
        set canCopy(value: $Predicate_<$IResourcePath>);
        set uiWidth(value: number);
        set onMenu(value: $BiConsumer_<$ResourceProviderContainer<$CompoundTag>, $TreeBuilder$Menu>);
    }
}
