import { $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";

declare module "@package/com/tacz/guns/api/modifier" {
    export class $JsonProperty<T> {
        getValue(): T;
        setValue(arg0: T | null): void;
        getComponents(): $List<$Component>;
        initComponents(): void;
        constructor(arg0: T | null);
        get components(): $List<$Component>;
    }
}
