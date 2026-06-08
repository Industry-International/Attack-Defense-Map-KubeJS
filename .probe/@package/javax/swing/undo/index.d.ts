
declare module "@package/javax/swing/undo" {
    export class $UndoableEdit {
    }
    export interface $UndoableEdit {
        undo(): void;
        canUndo(): boolean;
        canRedo(): boolean;
        redo(): void;
        replaceEdit(arg0: $UndoableEdit): boolean;
        isSignificant(): boolean;
        getPresentationName(): string;
        getUndoPresentationName(): string;
        getRedoPresentationName(): string;
        addEdit(arg0: $UndoableEdit): boolean;
        die(): void;
        get significant(): boolean;
        get presentationName(): string;
        get undoPresentationName(): string;
        get redoPresentationName(): string;
    }
}
