import { $Event } from "@package/net/neoforged/bus/api";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/xfacthd/framedblocks/api/model/wrapping" {
    export class $RegisterModelWrappersEvent extends $Event implements $IModBusEvent {
        constructor();
    }
}
