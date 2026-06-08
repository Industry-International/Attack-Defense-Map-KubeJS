import { $Predicate_, $Supplier_, $Function_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $List } from "@package/java/util";
import { $Object, $Class } from "@package/java/lang";
import { $TextField, $Label } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";

declare module "@package/com/lowdragmc/lowdraglib2/configurator/ui" {
    export class $Configurator extends $UIElement {
        getLabel(): $Component;
        setLabel(arg0: string): $Configurator;
        setLabel(arg0: $Component_): $Configurator;
        setCopiableDirect(arg0: $Object): $Configurator;
        addChildAt(arg0: $UIElement, arg1: number): $Configurator;
        setTips(...arg0: $Component_[]): $Configurator;
        setTips(...arg0: string[]): $Configurator;
        setCopiable(arg0: $Supplier_<$Supplier<never>>): $Configurator;
        notifyChanges(): void;
        notifyChanges(arg0: $Configurator): void;
        setPastable<T>(arg0: $Class<T>, arg1: $Consumer_<T>): $Configurator;
        setPastable(arg0: $Predicate_<$Class<never>>, arg1: $Consumer_<never>): $Configurator;
        setNotifyName(arg0: $Component_): $Configurator;
        getNotifyName(): $Component;
        addInlineChild(arg0: $UIElement): $Configurator;
        addInlineChildAt(arg0: $UIElement, arg1: number): $Configurator;
        setCopyDirect(arg0: boolean): $Configurator;
        addInlineChildren(...arg0: $UIElement[]): $Configurator;
        addChildren(...arg0: $UIElement[]): $Configurator;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        lineContainer: $UIElement;
        inlineContainer: $UIElement;
        static CHANGE_EVENT: string;
        tip: $UIElement;
        label: $Label;
        constructor();
        constructor(arg0: string);
        set copiableDirect(value: $Object);
        set copiable(value: $Supplier_<$Supplier<never>>);
        set copyDirect(value: boolean);
    }
    export class $ValueConfigurator<T> extends $Configurator {
        getValue(): $CompoundTag;
        setOnUpdate(arg0: $Consumer_<$CompoundTag>): $ValueConfigurator<$CompoundTag>;
        setDefaultValue(arg0: $CompoundTag_): $ValueConfigurator<$CompoundTag>;
        setCopiable(arg0: $Function_<$CompoundTag, $CompoundTag>): $ValueConfigurator<$CompoundTag>;
        setCanDropPredicate(arg0: $Predicate_<$Object>): $ValueConfigurator<$CompoundTag>;
        setSupplier(arg0: $Supplier_<$CompoundTag>): $ValueConfigurator<$CompoundTag>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        lineContainer: $UIElement;
        inlineContainer: $UIElement;
        static CHANGE_EVENT: string;
        tip: $UIElement;
        label: $Label;
        constructor(arg0: string, arg1: $Supplier_<$CompoundTag>, arg2: $Consumer_<$CompoundTag>, arg3: $CompoundTag_, arg4: boolean);
        get value(): $CompoundTag;
        set onUpdate(value: $Consumer_<$CompoundTag>);
        set defaultValue(value: $CompoundTag_);
        set copiable(value: $Function_<$CompoundTag, $CompoundTag>);
        set canDropPredicate(value: $Predicate_<$Object>);
        set supplier(value: $Supplier_<$CompoundTag>);
    }
    export class $StringConfigurator extends $ValueConfigurator<string> {
        isResourceLocation(): boolean;
        setTextValidator(arg0: $Predicate_<string>): $StringConfigurator;
        setResourceLocation(arg0: boolean): $StringConfigurator;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        lineContainer: $UIElement;
        inlineContainer: $UIElement;
        static CHANGE_EVENT: string;
        tip: $UIElement;
        label: $Label;
        textField: $TextField;
        constructor(arg0: string, arg1: $Supplier_<string>, arg2: $Consumer_<string>, arg3: string, arg4: boolean);
        set textValidator(value: $Predicate_<string>);
    }
    export class $ConfiguratorGroup extends $Configurator {
        setCollapse(arg0: boolean): $ConfiguratorGroup;
        addConfigurator(arg0: $Configurator): $ConfiguratorGroup;
        addConfiguratorAt(arg0: $Configurator, arg1: number): $ConfiguratorGroup;
        getConfigurators(): $List<$Configurator>;
        removeConfigurator(arg0: $Configurator): void;
        isCanCollapse(): boolean;
        setCanCollapse(arg0: boolean): $ConfiguratorGroup;
        isCollapse(): boolean;
        addConfigurators(...arg0: $Configurator[]): $ConfiguratorGroup;
        removeAllConfigurators(): void;
        configuratorContainer(arg0: $Consumer_<$UIElement>): $ConfiguratorGroup;
        hideTitle(): $ConfiguratorGroup;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        folderIcon: $UIElement;
        lineContainer: $UIElement;
        inlineContainer: $UIElement;
        static CHANGE_EVENT: string;
        tip: $UIElement;
        label: $Label;
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string);
        constructor();
        get configurators(): $List<$Configurator>;
    }
}
