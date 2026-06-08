import { $ItemColors } from "@package/net/minecraft/client/color/item";

declare module "@package/com/replaymod/render/blend/mixin" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        getPosZ(): number;
        getXo(): number;
        getZo(): number;
        getYo(): number;
        getPosX(): number;
        getPosY(): number;
        get posZ(): number;
        get xo(): number;
        get zo(): number;
        get yo(): number;
        get posX(): number;
        get posY(): number;
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
