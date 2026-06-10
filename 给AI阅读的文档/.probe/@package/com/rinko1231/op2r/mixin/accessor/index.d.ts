import { $Pack } from "@package/net/minecraft/server/packs/repository";
import { $List_, $Collection, $Collection_, $List } from "@package/java/util";

declare module "@package/com/rinko1231/op2r/mixin/accessor" {
    export class $InvokerPackRepository {
    }
    export interface $InvokerPackRepository {
        callRebuildSelected(arg0: $Collection_<string>): $List<$Pack>;
    }
    /**
     * Values that may be interpreted as {@link $InvokerPackRepository}.
     */
    export type $InvokerPackRepository_ = ((arg0: $Collection<string>) => $List_<$Pack>);
}
