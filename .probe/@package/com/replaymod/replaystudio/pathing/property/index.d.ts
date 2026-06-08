import { $Collection } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $JsonWriter, $JsonReader } from "@package/com/google/gson/stream";

declare module "@package/com/replaymod/replaystudio/pathing/property" {
    export class $Property<T> {
    }
    export interface $Property<T> {
        getId(): string;
        getLocalizedName(): string;
        toJson(arg0: $JsonWriter, arg1: T): void;
        getNewValue(): T;
        fromJson(arg0: $JsonReader): T;
        getGroup(): $PropertyGroup;
        getParts(): $Collection<$PropertyPart<T>>;
        applyToGame(arg0: T, arg1: $Object): void;
        get id(): string;
        get localizedName(): string;
        get newValue(): T;
        get group(): $PropertyGroup;
        get parts(): $Collection<$PropertyPart<T>>;
    }
}
