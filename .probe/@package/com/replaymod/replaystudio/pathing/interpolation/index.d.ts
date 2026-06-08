import { $PathSegment } from "@package/com/replaymod/replaystudio/pathing/path";
import { $Property, $PropertyPart } from "@package/com/replaymod/replaystudio/pathing/property";
import { $Map_, $Map, $Collection, $List } from "@package/java/util";

declare module "@package/com/replaymod/replaystudio/pathing/interpolation" {
    export class $Interpolator {
    }
    export interface $Interpolator {
        getValue<T>(arg0: $Property<T>, arg1: number): (T) | undefined;
        isDirty(): boolean;
        addSegment(arg0: $PathSegment): void;
        bake(arg0: $Map_<$PropertyPart<any>, $InterpolationParameters>): $Map<$PropertyPart<any>, $InterpolationParameters>;
        getKeyframeProperties(): $Collection<$Property<any>>;
        unregisterProperty(arg0: $Property<any>): void;
        removeSegment(arg0: $PathSegment): void;
        getSegments(): $List<$PathSegment>;
        registerProperty(arg0: $Property<any>): void;
        get dirty(): boolean;
        get keyframeProperties(): $Collection<$Property<any>>;
        get segments(): $List<$PathSegment>;
    }
}
