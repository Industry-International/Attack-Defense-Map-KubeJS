import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $Object } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/common/util/strategy" {
    export class $IdentityStrategy implements $Hash$Strategy<$Object> {
        equals(arg0: $Object, arg1: $Object): boolean;
        hashCode(arg0: $Object): number;
        static IDENTITY: $Hash$Strategy<$Object>;
    }
    export class $BasicStrategy implements $Hash$Strategy<$Object> {
        equals(arg0: $Object, arg1: $Object): boolean;
        hashCode(arg0: $Object): number;
        static BASIC: $Hash$Strategy<$Object>;
    }
}
