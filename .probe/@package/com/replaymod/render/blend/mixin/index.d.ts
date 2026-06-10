import { $ItemColors } from "@package/net/minecraft/client/color/item";

declare module "@package/com/replaymod/render/blend/mixin" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        getPosY(): number;
        getPosX(): number;
        getXo(): number;
        getPosZ(): number;
        getYo(): number;
        getZo(): number;
        get posY(): number;
        get posX(): number;
        get xo(): number;
        get posZ(): number;
        get yo(): number;
        get zo(): number;
    }
    export class $ItemRendererAccessor {
    }
    export interface $ItemRendererAccessor {
        getItemColors(): $ItemColors;
        get itemColors(): $ItemColors;
    }
    /**
     * Values that may be interpreted as {@link $ItemRendererAccessor}.
     */
    export type $ItemRendererAccessor_ = (() => $ItemColors);
}
