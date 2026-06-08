import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $InfoDisplay } from "@package/xaero/hud/minimap/info";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";

declare module "@package/xaero/hud/minimap/info/render/compile" {
    export class $InfoDisplayCompiler {
        compile<T>(arg0: $InfoDisplay<T>, arg1: $MinimapSession, arg2: number, arg3: $BlockPos_): $List<$Component>;
        addWords(arg0: string): void;
        addLine(arg0: $Component_): void;
        addLine(arg0: string): void;
    }
}
