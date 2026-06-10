import { $ConfigurationTask$Type_, $ConfigurationTask } from "@package/net/minecraft/server/network";

declare module "@package/net/fabricmc/fabric/api/networking/v1" {
    export class $FabricServerConfigurationNetworkHandler {
    }
    export interface $FabricServerConfigurationNetworkHandler {
        addTask(arg0: $ConfigurationTask): void;
        completeTask(arg0: $ConfigurationTask$Type_): void;
    }
}
