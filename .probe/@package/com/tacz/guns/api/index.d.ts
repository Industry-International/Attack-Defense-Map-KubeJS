import { $TypeToken } from "@package/com/google/common/reflect";
import { $Record, $Class } from "@package/java/lang";
export * as client from "@package/com/tacz/guns/api/client";
export * as item from "@package/com/tacz/guns/api/item";
export * as event from "@package/com/tacz/guns/api/event";
export * as entity from "@package/com/tacz/guns/api/entity";
export * as modifier from "@package/com/tacz/guns/api/modifier";

declare module "@package/com/tacz/guns/api" {
    export class $GunProperty<T> extends $Record {
        name(): string;
        type(): $Class<T>;
        static of<T>(arg0: string, arg1: $Class<T>): $GunProperty<T>;
        static of<T>(arg0: string, arg1: $TypeToken<T>): $GunProperty<T>;
        constructor(name: string, type: $Class<T>);
    }
}
