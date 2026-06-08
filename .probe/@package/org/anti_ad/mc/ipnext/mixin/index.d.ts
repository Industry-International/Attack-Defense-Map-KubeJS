import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/org/anti_ad/mc/ipnext/mixin" {
    export class $IMixinKeyBinding {
    }
    export interface $IMixinKeyBinding {
        getPressed(): boolean;
        setPressed(arg0: boolean): void;
        getKeyCode(): $InputConstants$Key;
        getTimesPressed(): number;
        setTimesPressed(arg0: number): void;
        get keyCode(): $InputConstants$Key;
    }
}
