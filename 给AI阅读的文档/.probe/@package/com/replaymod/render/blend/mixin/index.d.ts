import { $ItemColors } from "@package/net/minecraft/client/color/item";

declare module "@package/com/replaymod/render/blend/mixin" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        getPosX(): number;
        getPosY(): number;
        getPosZ(): number;
        getZo(): number;
        getXo(): number;
        getYo(): number;
        get posX(): number;
        get posY(): number;
        get posZ(): number;
        get zo(): number;
        get xo(): number;
        get yo(): number;
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
