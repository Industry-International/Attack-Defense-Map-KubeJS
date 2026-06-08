import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";

declare module "@package/dev/ryanhcode/sable/mixinterface/water_occlusion" {
    export class $CameraWaterOcclusionExtension {
    }
    export interface $CameraWaterOcclusionExtension {
        sable$isOccluded(): boolean;
        sable$isIgnoreOcclusion(): boolean;
        sable$setIgnoreOcclusion(arg0: boolean): void;
    }
    export class $WaterOcclusionContainerHolder {
    }
    export interface $WaterOcclusionContainerHolder {
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<never>;
    }
    /**
     * Values that may be interpreted as {@link $WaterOcclusionContainerHolder}.
     */
    export type $WaterOcclusionContainerHolder_ = (() => $WaterOcclusionContainer<never>);
}
