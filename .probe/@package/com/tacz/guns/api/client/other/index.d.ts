import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/com/tacz/guns/api/client/other" {
    export class $KeepingItemRenderer {
        static getRenderer(): $KeepingItemRenderer;
        static get renderer(): $KeepingItemRenderer;
    }
    export interface $KeepingItemRenderer {
        keep(arg0: $ItemStack_, arg1: number): void;
        getCurrentItem(): $ItemStack;
        get currentItem(): $ItemStack;
    }
}
