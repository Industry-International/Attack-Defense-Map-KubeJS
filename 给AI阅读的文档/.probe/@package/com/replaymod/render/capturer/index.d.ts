import { $Closeable } from "@package/java/io";
import { $RenderSettings } from "@package/com/replaymod/render";
import { $ReadableDimension } from "@package/de/johni0702/minecraft/gui/utils/lwjgl";

declare module "@package/com/replaymod/render/capturer" {
    export class $WorldRenderer {
    }
    export interface $WorldRenderer extends $Closeable {
        renderWorld(arg0: number, arg1: $CaptureData): void;
        setOmnidirectional(arg0: boolean): void;
        set omnidirectional(value: boolean);
    }
    export class $RenderInfo {
    }
    export interface $RenderInfo {
        getTotalFrames(): number;
        getRenderSettings(): $RenderSettings;
        updateForNextFrame(): number;
        getFramesDone(): number;
        getFrameSize(): $ReadableDimension;
        get totalFrames(): number;
        get renderSettings(): $RenderSettings;
        get framesDone(): number;
        get frameSize(): $ReadableDimension;
    }
    export class $CaptureData {
    }
    export interface $CaptureData {
    }
}
