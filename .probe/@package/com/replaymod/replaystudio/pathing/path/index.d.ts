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
        updateAll(): void;
        getKeyframes(): $Collection<$Keyframe>;
        getKeyframe(arg0: number): $Keyframe;
        getTimeline(): $Timeline;
        getSegments(): $Collection<$PathSegment>;
        get keyframes(): $Collection<$Keyframe>;
        get timeline(): $Timeline;
        get segments(): $Collection<$PathSegment>;
    }
    export class $Timeline {
    }
    export interface $Timeline {
        getProperty(arg0: string): $Property<any>;
        getValue<T>(arg0: $Property<T>, arg1: number): (T) | undefined;
        getPaths(): $List<$Path>;
        applyChange(arg0: $Change): void;
        createPath(): $Path;
        pushChange(arg0: $Change): void;
        peekUndoStack(): $Change;
        redoLastChange(): void;
        peekRedoStack(): $Change;
        undoLastChange(): void;
        registerProperty(arg0: $Property<any>): void;
        applyToGame(arg0: number, arg1: $Object): void;
        get paths(): $List<$Path>;
    }
}
