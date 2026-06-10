import { $AdvancedOpenScreenPayload_, $AdvancedContainerSetDataPayload_, $AuxiliaryLightDataPayload_, $FrozenRegistrySyncCompletedPayload, $FrozenRegistryPayload_, $ClientboundCustomSetTimePayload_, $ConfigFilePayload_, $AdvancedAddEntityPayload_, $FrozenRegistrySyncStartPayload_, $SyncAttachmentsPayload_ } from "@package/net/neoforged/neoforge/network/payload";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";

declare module "@package/net/neoforged/neoforge/network/handlers" {
    export class $ClientPayloadHandler {
        static handle(arg0: $FrozenRegistryPayload_, arg1: $IPayloadContext): void;
        static handle(arg0: $AuxiliaryLightDataPayload_, arg1: $IPayloadContext): void;
        static handle(arg0: $AdvancedContainerSetDataPayload_, arg1: $IPayloadContext): void;
        static handle(arg0: $ClientboundCustomSetTimePayload_, arg1: $IPayloadContext): void;
        static handle(arg0: $SyncAttachmentsPayload_, arg1: $IPayloadContext): void;
        static handle(arg0: $FrozenRegistrySyncStartPayload_, arg1: $IPayloadContext): void;
        static handle(arg0: $FrozenRegistrySyncCompletedPayload, arg1: $IPayloadContext): void;
        static handle(arg0: $ConfigFilePayload_, arg1: $IPayloadContext): void;
        static handle(arg0: $AdvancedAddEntityPayload_, arg1: $IPayloadContext): void;
        static handle(arg0: $AdvancedOpenScreenPayload_, arg1: $IPayloadContext): void;
    }
    export class $ServerPayloadHandler {
        static handle(arg0: $FrozenRegistrySyncCompletedPayload, arg1: $IPayloadContext): void;
    }
}
