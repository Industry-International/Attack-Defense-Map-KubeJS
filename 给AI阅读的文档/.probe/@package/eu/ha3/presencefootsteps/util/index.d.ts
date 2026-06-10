import { $SoundType, $SoundType_ } from "@package/net/minecraft/world/level/block";
import { $Iterable_, $AutoCloseable } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $JsonWriter } from "@package/com/google/gson/stream";

declare module "@package/eu/ha3/presencefootsteps/util" {
    export class $JsonObjectWriter {
        static of(arg0: $JsonWriter): $JsonObjectWriter;
    }
    export interface $JsonObjectWriter extends $AutoCloseable {
        field(arg0: string, arg1: number): void;
        field(arg0: string, arg1: number): void;
        field(arg0: string, arg1: $JsonObjectWriter$WriteAction_): void;
        field(arg0: string, arg1: number): void;
        field(arg0: string, arg1: string): void;
        array(arg0: $JsonObjectWriter$WriteAction_): void;
        array(arg0: string, arg1: $JsonObjectWriter$WriteAction_): void;
        close(): void;
        writer(): $JsonWriter;
        each<T>(arg0: $Iterable_<T>, arg1: $JsonObjectWriter$WriteConsumer_<T>): void;
        object(arg0: string, arg1: $JsonObjectWriter$WriteAction_): void;
        object(arg0: $JsonObjectWriter$WriteAction_): void;
    }
    /**
     * Values that may be interpreted as {@link $JsonObjectWriter}.
     */
    export type $JsonObjectWriter_ = (() => $JsonWriter);
    export class $JsonObjectWriter$WriteAction {
    }
    export interface $JsonObjectWriter$WriteAction {
        write(): void;
    }
    /**
     * Values that may be interpreted as {@link $JsonObjectWriter$WriteAction}.
     */
    export type $JsonObjectWriter$WriteAction_ = (() => void);
    export class $BlockReport$Reportable {
    }
    export interface $BlockReport$Reportable {
        writeToReport(arg0: boolean, arg1: $JsonObjectWriter_, arg2: $Map_<string, $SoundType_>): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockReport$Reportable}.
     */
    export type $BlockReport$Reportable_ = ((arg0: boolean, arg1: $JsonObjectWriter, arg2: $Map<string, $SoundType>) => void);
    export class $JsonObjectWriter$WriteConsumer<T> {
    }
    export interface $JsonObjectWriter$WriteConsumer<T> {
        write(arg0: T): void;
    }
    /**
     * Values that may be interpreted as {@link $JsonObjectWriter$WriteConsumer}.
     */
    export type $JsonObjectWriter$WriteConsumer_<T> = ((arg0: T) => void);
}
