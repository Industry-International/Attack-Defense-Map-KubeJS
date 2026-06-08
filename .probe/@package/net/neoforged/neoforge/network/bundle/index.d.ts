import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $PacketListener } from "@package/net/minecraft/network";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $List } from "@package/java/util";
import { $Iterable_ } from "@package/java/lang";
import { $ClientCommonPacketListener } from "@package/net/minecraft/network/protocol/common";

declare module "@package/net/neoforged/neoforge/network/bundle" {
    export class $PacketAndPayloadAcceptor<L extends $ClientCommonPacketListener> {
        accept(arg0: $Packet<L>): $PacketAndPayloadAcceptor<L>;
        accept(arg0: $CustomPacketPayload_): $PacketAndPayloadAcceptor<L>;
        consumer: $Consumer<$Packet<L>>;
        constructor(arg0: $Consumer_<$Packet<L>>);
    }
    export class $BundlePacketUtils {
        static flatten<T extends $PacketListener>(arg0: $Iterable_<$Packet<T>>): $List<$Packet<T>>;
    }
}
