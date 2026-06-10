import { $Component_, $Component } from "@package/net/minecraft/network/chat";

declare module "@package/xaero/lib/common/gui/widget" {
    export class $TooltipInfo {
        flippedByDefault: boolean;
        autoLineBreak: boolean;
        text: $Component;
        constructor(arg0: $Component_, arg1: boolean, arg2: boolean);
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        constructor(arg0: string);
    }
}
