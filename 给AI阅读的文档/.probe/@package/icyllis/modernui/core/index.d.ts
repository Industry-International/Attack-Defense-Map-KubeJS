import { $Parcelable, $Parcel } from "@package/icyllis/modernui/util";
import { $CharSequence, $Object, $Class, $ClassLoader } from "@package/java/lang";

declare module "@package/icyllis/modernui/core" {
    export class $UndoOperation<DATA> implements $Parcelable {
        undo(): void;
        commit(): void;
        getOwner(): $UndoOwner;
        redo(): void;
        hasData(): boolean;
        getOwnerData(): DATA;
        matchOwner(owner: $UndoOwner): boolean;
        allowMerge(): boolean;
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
        undo(owners: $UndoOwner[], count: number): number;
        getOwner(tag: string, data: $Object): $UndoOwner;
        isInUndo(): boolean;
        countUndos(owners: $UndoOwner[]): number;
        countRedos(owners: $UndoOwner[]): number;
        endUpdate(): void;
        redo(owners: $UndoOwner[], count: number): number;
        hasOperation(owner: $UndoOwner): boolean;
        commitState(owner: $UndoOwner): number;
        beginUpdate(label: $CharSequence): void;
        addOperation(op: $UndoOperation<never>, mergeMode: number): void;
        getLastOperation(mergeMode: number): $UndoOperation<never>;
        getLastOperation(owner: $UndoOwner, mergeMode: number): $UndoOperation<never>;
        getLastOperation<T extends $UndoOperation<never>>(clazz: $Class<T>, owner: $UndoOwner, mergeMode: number): T;
        forgetUndos(owners: $UndoOwner[], count: number): number;
        forgetRedos(owners: $UndoOwner[], count: number): number;
        suggestUndoLabel(label: $CharSequence): void;
        setHistorySize(size: number): void;
        getUndoLabel(owners: $UndoOwner[]): $CharSequence;
        uncommitState(commitId: number, owner: $UndoOwner): boolean;
        getRedoLabel(owners: $UndoOwner[]): $CharSequence;
        getHistorySize(): number;
        saveInstanceState(p: $Parcel): void;
        setUndoLabel(label: $CharSequence): void;
        getUpdateNestingLevel(): number;
        restoreInstanceState(p: $Parcel, loader: $ClassLoader): void;
        isInUpdate(): boolean;
        static MERGE_MODE_ANY: number;
        static MERGE_MODE_UNIQUE: number;
        static MERGE_MODE_NONE: number;
        constructor();
        get inUndo(): boolean;
        get updateNestingLevel(): number;
        get inUpdate(): boolean;
    }
}
