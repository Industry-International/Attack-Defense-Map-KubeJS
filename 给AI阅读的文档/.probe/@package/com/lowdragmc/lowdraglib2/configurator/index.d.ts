import { $Consumer_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Object, $Runnable_ } from "@package/java/lang";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IHistoryStack } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";
export * as ui from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
export * as annotation from "@package/com/lowdragmc/lowdraglib2/configurator/annotation";

declare module "@package/com/lowdragmc/lowdraglib2/configurator" {
    export class $SerializableRecordAction<T extends $INBTSerializable<never>> implements $EditAction {
        static of<T extends $INBTSerializable<never>>(arg0: T): $SerializableRecordAction<T>;
        execute(): void;
        setOnUndo(arg0: $Consumer_<T>): $SerializableRecordAction<T>;
        undo(): void;
        setOnExecute(arg0: $Consumer_<T>): $SerializableRecordAction<T>;
        updateSnapshot(): void;
        setOnAction(arg0: $Consumer_<T>): $SerializableRecordAction<T>;
        mergeExecuteAfter(arg0: $EditAction): $EditAction;
        mergeExecuteBefore(arg0: $EditAction): $EditAction;
        serializable: T;
        set onUndo(value: $Consumer_<T>);
        set onExecute(value: $Consumer_<T>);
        set onAction(value: $Consumer_<T>);
    }
    export class $IConfigurableHistory {
        static ofSerializable<T extends $INBTSerializable<never>>(arg0: T): $IConfigurableHistory;
    }
    export interface $IConfigurableHistory {
        record(arg0: $IHistoryStack, arg1: $Component_, arg2: $Object): $IConfigurableHistory$Handle;
    }
    /**
     * Values that may be interpreted as {@link $IConfigurableHistory}.
     */
    export type $IConfigurableHistory_ = ((arg0: $IHistoryStack, arg1: $Component, arg2: $Object) => $IConfigurableHistory$Handle);
    export class $IConfigurable {
        static create(arg0: $Consumer_<$ConfiguratorGroup>): $IConfigurable;
    }
    export interface $IConfigurable {
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        get configurableName(): string;
    }
    export class $IConfigurableHistory$Handle {
    }
    export interface $IConfigurableHistory$Handle {
        setOnUndo(arg0: $Runnable_): $IConfigurableHistory$Handle;
        setOnExecute(arg0: $Runnable_): $IConfigurableHistory$Handle;
        set onUndo(value: $Runnable_);
        set onExecute(value: $Runnable_);
    }
    export class $EditAction {
        static of(arg0: $Runnable_, arg1: $Runnable_): $EditAction;
    }
    export interface $EditAction {
        execute(): void;
        undo(): void;
        mergeExecuteAfter(arg0: $EditAction): $EditAction;
        mergeExecuteBefore(arg0: $EditAction): $EditAction;
    }
}
