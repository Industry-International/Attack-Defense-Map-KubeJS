import { $GunProperty_ } from "@package/com/tacz/guns/api";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $GunData } from "@package/com/tacz/guns/resource/pojo/data/gun";

declare module "@package/com/tacz/guns/resource/modifier" {
    export class $AttachmentCacheProperty {
        getCache<T>(arg0: $GunProperty_<T>): T;
        getCache<T>(arg0: string): T;
        setCache<T>(arg0: $GunProperty_<T>, arg1: T): void;
        "eval"(arg0: $ItemStack_, arg1: $GunData): void;
        constructor();
    }
}
