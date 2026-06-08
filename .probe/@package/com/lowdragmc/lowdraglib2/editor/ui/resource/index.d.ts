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
        selectProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        loadResource(): void;
        setOnResourceSelect(arg0: $Consumer_<$CompoundTag>): void;
        getSelectedProvider(): $IResourceProvider<$CompoundTag>;
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
        removeResource(arg0: $IResourcePath, arg1: boolean): void;
        setDisplayMode(arg0: $Resource$DisplayMode_): void;
        copyResource(arg0: $IResourcePath): void;
        setCanEdit(arg0: $Predicate_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setCanRemove(arg0: $Predicate_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setAddDefault(arg0: $Supplier_<$CompoundTag>): $ResourceProviderContainer<$CompoundTag>;
        editResource(arg0: $IResourcePath): void;
        setSupportAdd(arg0: $BooleanSupplier_): $ResourceProviderContainer<$CompoundTag>;
        renameResource(arg0: $IResourcePath): void;
        setCanRename(arg0: $Predicate_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        addNewResource(arg0: $CompoundTag_): void;
        setUiSupplier(arg0: $UIElementProvider_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setOnDragProvider(arg0: $Function_<$IResourcePath, never>): $ResourceProviderContainer<$CompoundTag>;
        markResourceDirty(arg0: $IResourcePath): void;
        selectResource(arg0: $IResourcePath): void;
        getDirtyResources(): $HashSet<$IResourcePath>;
        appendResourceUI(arg0: $IResourcePath): void;
        reloadResourceContainer(): void;
        reloadSpecificResource(arg0: $IResourcePath): void;
        setOnResourceSelect(arg0: $Consumer_<$CompoundTag>): $ResourceProviderContainer<$CompoundTag>;
        setEditor(arg0: $Editor): $ResourceProviderContainer<$CompoundTag>;
        getEditor(): $Editor;
        setUiWidth(arg0: number): void;
        setCanCopy(arg0: $Predicate_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setOnEdit(arg0: $BiConsumer_<$ResourceProviderContainer<$CompoundTag>, $IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setOnMenu(arg0: $BiConsumer_<$ResourceProviderContainer<$CompoundTag>, $TreeBuilder$Menu>): $ResourceProviderContainer<$CompoundTag>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        resourceProvider: $IResourceProvider<$CompoundTag>;
        constructor(arg0: $IResourceProvider<$CompoundTag_>);
        get selected(): $IResourcePath;
        set displayMode(value: $Resource$DisplayMode_);
        set canEdit(value: $Predicate_<$IResourcePath>);
        set canRemove(value: $Predicate_<$IResourcePath>);
        set addDefault(value: $Supplier_<$CompoundTag>);
        set supportAdd(value: $BooleanSupplier_);
        set canRename(value: $Predicate_<$IResourcePath>);
        set uiSupplier(value: $UIElementProvider_<$IResourcePath>);
        set onDragProvider(value: $Function_<$IResourcePath, never>);
        get dirtyResources(): $HashSet<$IResourcePath>;
        set onResourceSelect(value: $Consumer_<$CompoundTag>);
        set uiWidth(value: number);
        set canCopy(value: $Predicate_<$IResourcePath>);
        set onEdit(value: $BiConsumer_<$ResourceProviderContainer<$CompoundTag>, $IResourcePath>);
        set onMenu(value: $BiConsumer_<$ResourceProviderContainer<$CompoundTag>, $TreeBuilder$Menu>);
    }
}
