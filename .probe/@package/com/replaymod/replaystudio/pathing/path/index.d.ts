import { $Change } from "@package/com/replaymod/replaystudio/pathing/change";
import { $Property } from "@package/com/replaymod/replaystudio/pathing/property";
import { $Collection, $List } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/com/replaymod/replaystudio/pathing/path" {
    export class $Path {
    }
    export interface $Path {
        remove(arg0: $Keyframe, arg1: boolean): void;
        update(): void;
        insert(arg0: number): $Keyframe;
        insert(arg0: $Keyframe): void;
        getValue<T>(arg0: $Property<T>, arg1: number): (T) | undefined;
        isActive(): boolean;
        setActive(arg0: boolean): void;
        getKeyframe(arg0: number): $Keyframe;
        getTimeline(): $Timeline;
        updateAll(): void;
        getSegments(): $Collection<$PathSegment>;
        getKeyframes(): $Collection<$Keyframe>;
        get timeline(): $Timeline;
        get segments(): $Collection<$PathSegment>;
        get keyframes(): $Collection<$Keyframe>;
    }
    export class $Timeline {
    }
    export interface $Timeline {
        getProperty(arg0: string): $Property<any>;
        getValue<T>(arg0: $Property<T>, arg1: number): (T) | undefined;
        getPaths(): $List<$Path>;
        undoLastChange(): void;
        peekRedoStack(): $Change;
        redoLastChange(): void;
        peekUndoStack(): $Change;
        registerProperty(arg0: $Property<any>): void;
        createPath(): $Path;
        pushChange(arg0: $Change): void;
        applyToGame(arg0: number, arg1: $Object): void;
        applyChange(arg0: $Change): void;
        get paths(): $List<$Path>;
    }
}
