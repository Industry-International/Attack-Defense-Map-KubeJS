import { $PathSegment } from "@package/com/replaymod/replaystudio/pathing/path";
import { $PropertyPart, $Property } from "@package/com/replaymod/replaystudio/pathing/property";
import { $Map_, $Map, $Collection, $List } from "@package/java/util";

declare module "@package/com/replaymod/replaystudio/pathing/interpolation" {
    export class $Interpolator {
    }
    export interface $Interpolator {
        getValue<T>(arg0: $Property<T>, arg1: number): (T) | undefined;
        isDirty(): boolean;
        addSegment(arg0: $PathSegment): void;
        unregisterProperty(arg0: $Property<any>): void;
        registerProperty(arg0: $Property<any>): void;
        getSegments(): $List<$PathSegment>;
        removeSegment(arg0: $PathSegment): void;
        getKeyframeProperties(): $Collection<$Property<any>>;
        bake(arg0: $Map_<$PropertyPart<any>, $InterpolationParameters>): $Map<$PropertyPart<any>, $InterpolationParameters>;
        get dirty(): boolean;
        get segments(): $List<$PathSegment>;
        get keyframeProperties(): $Collection<$Property<any>>;
    }
}
