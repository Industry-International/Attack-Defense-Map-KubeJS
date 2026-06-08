import { $Parcelable, $Parcel } from "@package/icyllis/modernui/util";
import { $CharSequence, $Object, $Class, $ClassLoader } from "@package/java/lang";

declare module "@package/icyllis/modernui/core" {
    export class $UndoOperation<DATA> implements $Parcelable {
        commit(): void;
        getOwner(): $UndoOwner;
        undo(): void;
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
        getOwner(tag: string, data: $Object): $UndoOwner;
        undo(owners: $UndoOwner[], count: number): number;
        redo(owners: $UndoOwner[], count: number): number;
        hasOperation(owner: $UndoOwner): boolean;
        commitState(owner: $UndoOwner): number;
        beginUpdate(label: $CharSequence): void;
        getLastOperation<T extends $UndoOperation<never>>(clazz: $Class<T>, owner: $UndoOwner, mergeMode: number): T;
        getLastOperation(mergeMode: number): $UndoOperation<never>;
        getLastOperation(owner: $UndoOwner, mergeMode: number): $UndoOperation<never>;
        addOperation(op: $UndoOperation<never>, mergeMode: number): void;
        isInUndo(): boolean;
        countUndos(owners: $UndoOwner[]): number;
        endUpdate(): void;
        countRedos(owners: $UndoOwner[]): number;
        forgetRedos(owners: $UndoOwner[], count: number): number;
        forgetUndos(owners: $UndoOwner[], count: number): number;
        saveInstanceState(p: $Parcel): void;
        setHistorySize(size: number): void;
        getHistorySize(): number;
        getUndoLabel(owners: $UndoOwner[]): $CharSequence;
        getRedoLabel(owners: $UndoOwner[]): $CharSequence;
        uncommitState(commitId: number, owner: $UndoOwner): boolean;
        suggestUndoLabel(label: $CharSequence): void;
        setUndoLabel(label: $CharSequence): void;
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
