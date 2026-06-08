import { $Closeable } from "@package/de/johni0702/minecraft/gui/function";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/com/replaymod/render/gui/progress" {
    export class $VirtualWindow implements $Closeable {
        close(): void;
        flip(): void;
        bind(): void;
        beginWrite(): void;
        endWrite(): void;
        unbind(): void;
        isBound(): boolean;
        getFramebufferHeight(): number;
        getFramebufferWidth(): number;
        onResolutionChanged(newWidth: number, newHeight: number): void;
        constructor(mc: $Minecraft);
        get bound(): boolean;
        get framebufferHeight(): number;
        get framebufferWidth(): number;
    }
}
