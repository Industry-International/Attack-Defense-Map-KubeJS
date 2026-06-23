import { $Closeable } from "@package/de/johni0702/minecraft/gui/function";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/com/replaymod/render/gui/progress" {
    export class $VirtualWindow implements $Closeable {
        endWrite(): void;
        beginWrite(): void;
        close(): void;
        flip(): void;
        bind(): void;
        unbind(): void;
        isBound(): boolean;
        onResolutionChanged(newWidth: number, newHeight: number): void;
        getFramebufferWidth(): number;
        getFramebufferHeight(): number;
        constructor(mc: $Minecraft);
        get bound(): boolean;
        get framebufferWidth(): number;
        get framebufferHeight(): number;
    }
}
