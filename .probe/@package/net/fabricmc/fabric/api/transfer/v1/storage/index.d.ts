import { $DataComponentPatch_, $DataComponentMap, $DataComponentPatch } from "@package/net/minecraft/core/component";

declare module "@package/net/fabricmc/fabric/api/transfer/v1/storage" {
    export class $TransferVariant<O> {
    }
    export interface $TransferVariant<O> {
        isBlank(): boolean;
        getObject(): O;
        getComponents(): $DataComponentPatch;
        withComponentChanges(arg0: $DataComponentPatch_): $TransferVariant<O>;
        getComponentMap(): $DataComponentMap;
        componentsMatch(arg0: $DataComponentPatch_): boolean;
        hasComponents(): boolean;
        isOf(arg0: O): boolean;
        get blank(): boolean;
        get object(): O;
        get components(): $DataComponentPatch;
        get componentMap(): $DataComponentMap;
    }
}
