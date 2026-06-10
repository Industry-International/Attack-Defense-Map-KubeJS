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
        updateForNextFrame(): number;
        getRenderSettings(): $RenderSettings;
        getFramesDone(): number;
        getTotalFrames(): number;
        getFrameSize(): $ReadableDimension;
        get renderSettings(): $RenderSettings;
        get framesDone(): number;
        get totalFrames(): number;
        get frameSize(): $ReadableDimension;
    }
    export class $CaptureData {
    }
    export interface $CaptureData {
    }
}
