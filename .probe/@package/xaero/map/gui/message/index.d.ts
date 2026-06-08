import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Iterator } from "@package/java/util";
export * as render from "@package/xaero/map/gui/message/render";

declare module "@package/xaero/map/gui/message" {
    export class $Message {
        getText(): $Component;
        getAdditionTime(): number;
        constructor(arg0: $Component_, arg1: number);
        get text(): $Component;
        get additionTime(): number;
    }
    export class $MessageBox {
        getIterator(): $Iterator<$Message>;
        getCapacity(): number;
        addMessage(arg0: $Component_): void;
        addMessageWithSource(arg0: $Component_, arg1: $Component_): void;
        get iterator(): $Iterator<$Message>;
        get capacity(): number;
    }
}
