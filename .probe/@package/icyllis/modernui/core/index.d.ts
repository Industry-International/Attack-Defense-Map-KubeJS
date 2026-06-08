import { $Parcelable, $Parcel } from "@package/icyllis/modernui/util";
import { $CharSequence, $Object, $Class, $ClassLoader } from "@package/java/lang";

declare module "@package/icyllis/modernui/core" {
    export class $UndoOperation<DATA> implements $Parcelable {
        getOwnerData(): DATA;
        commit(): void;
        getOwner(): $UndoOwner;
        matchOwner(owner: $UndoOwner): boolean;
        allowMerge(): boolean;
        undo(): void;
        redo(): void;
        hasData(): boolean;
        constructor(owner: $UndoOwner);
        get ownerData(): DATA;
        get owner(): $UndoOwner;
    }
    export class $UndoOwner {
        getTag(): string;
        getData(): $Object;
        get tag(): string;
        get data(): $Object;
    }
    export class $UndoManager {
        setUndoLabel(label: $CharSequence): void;
        getRedoLabel(owners: $UndoOwner[]): $CharSequence;
        getHistorySize(): number;
        uncommitState(commitId: number, owner: $UndoOwner): boolean;
        getUndoLabel(owners: $UndoOwner[]): $CharSequence;
        suggestUndoLabel(label: $CharSequence): void;
        saveInstanceState(p: $Parcel): void;
        setHistorySize(size: number): void;
        getOwner(tag: string, data: $Object): $UndoOwner;
        isInUpdate(): boolean;
        undo(owners: $UndoOwner[], count: number): number;
        commitState(owner: $UndoOwner): number;
        getLastOperation(mergeMode: number): $UndoOperation<never>;
        getLastOperation<T extends $UndoOperation<never>>(clazz: $Class<T>, owner: $UndoOwner, mergeMode: number): T;
        getLastOperation(owner: $UndoOwner, mergeMode: number): $UndoOperation<never>;
        beginUpdate(label: $CharSequence): void;
        addOperation(op: $UndoOperation<never>, mergeMode: number): void;
        isInUndo(): boolean;
        redo(owners: $UndoOwner[], count: number): number;
        forgetRedos(owners: $UndoOwner[], count: number): number;
        forgetUndos(owners: $UndoOwner[], count: number): number;
        endUpdate(): void;
        countRedos(owners: $UndoOwner[]): number;
        countUndos(owners: $UndoOwner[]): number;
        hasOperation(owner: $UndoOwner): boolean;
        getUpdateNestingLevel(): number;
        restoreInstanceState(p: $Parcel, loader: $ClassLoader): void;
        static MERGE_MODE_ANY: number;
        static MERGE_MODE_UNIQUE: number;
        static MERGE_MODE_NONE: number;
        constructor();
        get inUpdate(): boolean;
        get inUndo(): boolean;
        get updateNestingLevel(): number;
    }
}
