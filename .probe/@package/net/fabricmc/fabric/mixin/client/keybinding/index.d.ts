import { $Map } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/net/fabricmc/fabric/mixin/client/keybinding" {
    export class $KeyBindingAccessor {
        static fabric_getCategoryMap(): $Map<string, number>;
    }
    export interface $KeyBindingAccessor {
        fabric_getBoundKey(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $KeyBindingAccessor}.
     */
    export type $KeyBindingAccessor_ = (() => $InputConstants$Key);
}
