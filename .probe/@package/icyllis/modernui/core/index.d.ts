import { $Parcelable, $Parcel } from "@package/icyllis/modernui/util";
import { $CharSequence, $Object, $Class, $ClassLoader } from "@package/java/lang";

declare module "@package/icyllis/modernui/core" {
    export class $UndoOperation<DATA> implements $Parcelable {
        commit(): void;
        getOwner(): $UndoOwner;
        undo(): void;
        getOwnerData(): DATA;
        hasData(): boolean;
        redo(): void;
        allowMerge(): boolean;
        matchOwner(owner: $UndoOwner): boolean;
        constructor(owner: $UndoOwner);
        get owner(): $UndoOwner;
        get ownerData(): DATA;
    }
    export class $UndoOwner {
        getTag(): string;
        getData(): $Object;
        get tag(): string;
        get data(): $Object;
    }
    export class $UndoManager {
        getOwner(tag: string, data: $Object): $UndoOwner;
        undo(owners: $UndoOwner[], count: number): number;
        getLastOperation<T extends $UndoOperation<never>>(clazz: $Class<T>, owner: $UndoOwner, mergeMode: number): T;
        getLastOperation(owner: $UndoOwner, mergeMode: number): $UndoOperation<never>;
        getLastOperation(mergeMode: number): $UndoOperation<never>;
        addOperation(op: $UndoOperation<never>, mergeMode: number): void;
        commitState(owner: $UndoOwner): number;
        beginUpdate(label: $CharSequence): void;
        isInUndo(): boolean;
        redo(owners: $UndoOwner[], count: number): number;
        countRedos(owners: $UndoOwner[]): number;
        endUpdate(): void;
        countUndos(owners: $UndoOwner[]): number;
        forgetUndos(owners: $UndoOwner[], count: number): number;
        forgetRedos(owners: $UndoOwner[], count: number): number;
        hasOperation(owner: $UndoOwner): boolean;
        getRedoLabel(owners: $UndoOwner[]): $CharSequence;
        getUndoLabel(owners: $UndoOwner[]): $CharSequence;
        setUndoLabel(label: $CharSequence): void;
        saveInstanceState(p: $Parcel): void;
        setHistorySize(size: number): void;
        uncommitState(commitId: number, owner: $UndoOwner): boolean;
        suggestUndoLabel(label: $CharSequence): void;
        getHistorySize(): number;
        isInUpdate(): boolean;
        getUpdateNestingLevel(): number;
        restoreInstanceState(p: $Parcel, loader: $ClassLoader): void;
        static MERGE_MODE_ANY: number;
        static MERGE_MODE_UNIQUE: number;
        static MERGE_MODE_NONE: number;
        constructor();
        get inUndo(): boolean;
        get inUpdate(): boolean;
        get updateNestingLevel(): number;
    }
}
