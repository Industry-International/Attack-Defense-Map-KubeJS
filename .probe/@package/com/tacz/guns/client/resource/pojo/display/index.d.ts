import { $FileToIdConverter } from "@package/net/minecraft/resources";
export * as gun from "@package/com/tacz/guns/client/resource/pojo/display/gun";
export * as ammo from "@package/com/tacz/guns/client/resource/pojo/display/ammo";

declare module "@package/com/tacz/guns/client/resource/pojo/display" {
    export class $IDisplay {
        static converter: $FileToIdConverter;
    }
    export interface $IDisplay {
        init(): void;
    }
    /**
     * Values that may be interpreted as {@link $IDisplay}.
     */
    export type $IDisplay_ = (() => void);
    export class $LaserConfig {
        getWidth(): number;
        getLength(): number;
        canEdit(): boolean;
        getDefaultColor(): number;
        getLengthThird(): number;
        getWidthThird(): number;
        constructor();
        get width(): number;
        get length(): number;
        get defaultColor(): number;
        get lengthThird(): number;
        get widthThird(): number;
    }
}
