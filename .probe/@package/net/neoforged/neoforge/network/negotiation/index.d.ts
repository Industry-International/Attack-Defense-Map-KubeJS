import { $ModdedNetworkQueryComponent_ } from "@package/net/neoforged/neoforge/network/payload";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PayloadRegistration_ } from "@package/net/neoforged/neoforge/network/registration";
import { $PacketFlow, $PacketFlow_ } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Map_, $Map } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/network/negotiation" {
    export class $NetworkComponentNegotiator$ComponentNegotiationResult extends $Record {
        success(): boolean;
        failureReason(): $Component;
        constructor(success: boolean, failureReason: $Component_);
    }
    export class $NegotiableNetworkComponent extends $Record {
        version(): string;
        id(): $ResourceLocation;
        optional(): boolean;
        flow(): ($PacketFlow) | undefined;
        constructor(id: $ResourceLocation_, version: string, flow: ($PacketFlow_) | undefined, optional: boolean);
        constructor(arg0: $ModdedNetworkQueryComponent_);
        constructor(arg0: $PayloadRegistration_<never>);
    }
    export class $NegotiationResult extends $Record {
        success(): boolean;
        components(): $List<$NegotiatedNetworkComponent>;
        failureReasons(): $Map<$ResourceLocation, $Component>;
        constructor(components: $List_<$NegotiatedNetworkComponent_>, success: boolean, failureReasons: $Map_<$ResourceLocation_, $Component_>);
    }
    export class $NetworkComponentNegotiator {
        static validateComponent(arg0: $NegotiableNetworkComponent_, arg1: $NegotiableNetworkComponent_, arg2: string): ($NetworkComponentNegotiator$ComponentNegotiationResult) | undefined;
        static negotiate(arg0: $List_<$NegotiableNetworkComponent_>, arg1: $List_<$NegotiableNetworkComponent_>): $NegotiationResult;
        constructor();
    }
    export class $NegotiatedNetworkComponent extends $Record {
        version(): string;
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_, version: string);
    }
}
