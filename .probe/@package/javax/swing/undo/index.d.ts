
declare module "@package/javax/swing/undo" {
    export class $UndoableEdit {
    }
    export interface $UndoableEdit {
        addEdit(arg0: $UndoableEdit): boolean;
        undo(): void;
        replaceEdit(arg0: $UndoableEdit): boolean;
        isSignificant(): boolean;
        getPresentationName(): string;
        getUndoPresentationName(): string;
        getRedoPresentationName(): string;
        die(): void;
        redo(): void;
        canUndo(): boolean;
        canRedo(): boolean;
        get significant(): boolean;
        get presentationName(): string;
        get undoPresentationName(): string;
        get redoPresentationName(): string;
    }
}
