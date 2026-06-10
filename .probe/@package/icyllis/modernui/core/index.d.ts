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
        endUpdate(): void;
        countUndos(owners: $UndoOwner[]): number;
        countRedos(owners: $UndoOwner[]): number;
        undo(owners: $UndoOwner[], count: number): number;
        beginUpdate(label: $CharSequence): void;
        addOperation(op: $UndoOperation<never>, mergeMode: number): void;
        getLastOperation(owner: $UndoOwner, mergeMode: number): $UndoOperation<never>;
        getLastOperation<T extends $UndoOperation<never>>(clazz: $Class<T>, owner: $UndoOwner, mergeMode: number): T;
        getLastOperation(mergeMode: number): $UndoOperation<never>;
        commitState(owner: $UndoOwner): number;
        forgetRedos(owners: $UndoOwner[], count: number): number;
        forgetUndos(owners: $UndoOwner[], count: number): number;
        redo(owners: $UndoOwner[], count: number): number;
        isInUndo(): boolean;
        hasOperation(owner: $UndoOwner): boolean;
        saveInstanceState(p: $Parcel): void;
        setHistorySize(size: number): void;
        suggestUndoLabel(label: $CharSequence): void;
        getRedoLabel(owners: $UndoOwner[]): $CharSequence;
        getUndoLabel(owners: $UndoOwner[]): $CharSequence;
        uncommitState(commitId: number, owner: $UndoOwner): boolean;
        setUndoLabel(label: $CharSequence): void;
        getHistorySize(): number;
        restoreInstanceState(p: $Parcel, loader: $ClassLoader): void;
        getUpdateNestingLevel(): number;
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
