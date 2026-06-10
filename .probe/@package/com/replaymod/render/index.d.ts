import { $File_, $File } from "@package/java/io";
import { $Enum } from "@package/java/lang";
import { $ReadableColor } from "@package/de/johni0702/minecraft/gui/utils/lwjgl";
export * as blend from "@package/com/replaymod/render/blend";
export * as hooks from "@package/com/replaymod/render/hooks";
export * as capturer from "@package/com/replaymod/render/capturer";
export * as gui from "@package/com/replaymod/render/gui";
export * as mixin from "@package/com/replaymod/render/mixin";

declare module "@package/com/replaymod/render" {
    export class $RenderSettings$EncodingPreset extends $Enum<$RenderSettings$EncodingPreset> {
        static values(): $RenderSettings$EncodingPreset[];
        static valueOf(name: string): $RenderSettings$EncodingPreset;
        getValue(): string;
        isSupported(): boolean;
        getFileExtension(): string;
        static getSupported(): $RenderSettings$EncodingPreset[];
        hasBitrateSetting(): boolean;
        isYuv420(): boolean;
        static BLEND: $RenderSettings$EncodingPreset;
        static PNG: $RenderSettings$EncodingPreset;
        static WEBM_CUSTOM: $RenderSettings$EncodingPreset;
        static MKV_LOSSLESS: $RenderSettings$EncodingPreset;
        static EXR: $RenderSettings$EncodingPreset;
        static MP4_CUSTOM: $RenderSettings$EncodingPreset;
        static MP4_POTATO: $RenderSettings$EncodingPreset;
        get value(): string;
        get fileExtension(): string;
        get yuv420(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderSettings$EncodingPreset}.
     */
    export type $RenderSettings$EncodingPreset_ = "mp4_custom" | "mp4_potato" | "webm_custom" | "mkv_lossless" | "blend" | "exr" | "png";
    export class $RenderSettings {
        getChromaKeyingColor(): $ReadableColor;
        isIncludeAlphaChannel(): boolean;
        isInjectSphericalMetadata(): boolean;
        getTargetVideoHeight(): number;
        getTargetVideoWidth(): number;
        getVideoFilters(): string;
        isDepthMap(): boolean;
        isStabilizePitch(): boolean;
        isStabilizeRoll(): boolean;
        isStabilizeYaw(): boolean;
        getOutputFile(): $File;
        getEncodingPreset(): $RenderSettings$EncodingPreset;
        getRenderMethod(): $RenderSettings$RenderMethod;
        isCameraPathExport(): boolean;
        getSphericalFovY(): number;
        isHighPerformance(): boolean;
        getFramesPerSecond(): number;
        getSphericalFovX(): number;
        getVideoWidth(): number;
        getVideoHeight(): number;
        isRenderNameTags(): boolean;
        withEncodingPreset(encodingPreset: $RenderSettings$EncodingPreset_): $RenderSettings;
        getAntiAliasing(): $RenderSettings$AntiAliasing;
        getExportCommand(): string;
        getExportArguments(): string;
        getExportCommandOrDefault(): string;
        getBitRate(): number;
        constructor();
        constructor(renderMethod: $RenderSettings$RenderMethod_, encodingPreset: $RenderSettings$EncodingPreset_, videoWidth: number, videoHeight: number, framesPerSecond: number, bitRate: number, outputFile: $File_, renderNameTags: boolean, includeAlphaChannel: boolean, stabilizeYaw: boolean, stabilizePitch: boolean, stabilizeRoll: boolean, chromaKeyingColor: $ReadableColor, sphericalFovX: number, sphericalFovY: number, injectSphericalMetadata: boolean, depthMap: boolean, cameraPathExport: boolean, antiAliasing: $RenderSettings$AntiAliasing_, exportCommand: string, exportArguments: string, highPerformance: boolean);
        get chromaKeyingColor(): $ReadableColor;
        get includeAlphaChannel(): boolean;
        get injectSphericalMetadata(): boolean;
        get targetVideoHeight(): number;
        get targetVideoWidth(): number;
        get videoFilters(): string;
        get depthMap(): boolean;
        get stabilizePitch(): boolean;
        get stabilizeRoll(): boolean;
        get stabilizeYaw(): boolean;
        get outputFile(): $File;
        get encodingPreset(): $RenderSettings$EncodingPreset;
        get renderMethod(): $RenderSettings$RenderMethod;
        get cameraPathExport(): boolean;
        get sphericalFovY(): number;
        get highPerformance(): boolean;
        get framesPerSecond(): number;
        get sphericalFovX(): number;
        get videoWidth(): number;
        get videoHeight(): number;
        get renderNameTags(): boolean;
        get antiAliasing(): $RenderSettings$AntiAliasing;
        get exportCommand(): string;
        get exportArguments(): string;
        get exportCommandOrDefault(): string;
        get bitRate(): number;
    }
    export class $RenderSettings$RenderMethod extends $Enum<$RenderSettings$RenderMethod> {
        static values(): $RenderSettings$RenderMethod[];
        static valueOf(name: string): $RenderSettings$RenderMethod;
        isSupported(): boolean;
        getDescription(): string;
        static getSupported(): $RenderSettings$RenderMethod[];
        isSpherical(): boolean;
        hasFixedAspectRatio(): boolean;
        static BLEND: $RenderSettings$RenderMethod;
        static STEREOSCOPIC: $RenderSettings$RenderMethod;
        static CUBIC: $RenderSettings$RenderMethod;
        static DEFAULT: $RenderSettings$RenderMethod;
        static EQUIRECTANGULAR: $RenderSettings$RenderMethod;
        static ODS: $RenderSettings$RenderMethod;
        get description(): string;
        get spherical(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderSettings$RenderMethod}.
     */
    export type $RenderSettings$RenderMethod_ = "default" | "stereoscopic" | "cubic" | "equirectangular" | "ods" | "blend";
    export class $RenderSettings$AntiAliasing extends $Enum<$RenderSettings$AntiAliasing> {
        static values(): $RenderSettings$AntiAliasing[];
        static valueOf(name: string): $RenderSettings$AntiAliasing;
        getFactor(): number;
        static X8: $RenderSettings$AntiAliasing;
        static X2: $RenderSettings$AntiAliasing;
        static NONE: $RenderSettings$AntiAliasing;
        static X4: $RenderSettings$AntiAliasing;
        get factor(): number;
    }
    /**
     * Values that may be interpreted as {@link $RenderSettings$AntiAliasing}.
     */
    export type $RenderSettings$AntiAliasing_ = "none" | "x2" | "x4" | "x8";
}
