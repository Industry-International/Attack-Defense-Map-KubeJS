import { $Closeable } from "@package/de/johni0702/minecraft/gui/function";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/com/replaymod/render/gui/progress" {
    export class $VirtualWindow implements $Closeable {
        close(): void;
        flip(): void;
        bind(): void;
        endWrite(): void;
        beginWrite(): void;
        unbind(): void;
        getFramebufferWidth(): number;
        getFramebufferHeight(): number;
        onResolutionChanged(newWidth: number, newHeight: number): void;
        isBound(): boolean;
        constructor(mc: $Minecraft);
        get framebufferWidth(): number;
        get framebufferHeight(): number;
        get bound(): boolean;
    }
}
