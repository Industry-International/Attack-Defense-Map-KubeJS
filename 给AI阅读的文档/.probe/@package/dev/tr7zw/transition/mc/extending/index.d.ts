import { $Object, $Class } from "@package/java/lang";

declare module "@package/dev/tr7zw/transition/mc/extending" {
    export class $ExtensionHolder {
    }
    export interface $ExtensionHolder {
        getExtension<T>(arg0: $Object, arg1: $Class<T>): T;
        setExtension(arg0: $Object, arg1: $Object): void;
    }
}
