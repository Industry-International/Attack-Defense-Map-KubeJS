import { $Event } from "@package/net/neoforged/bus/api";
import { $PayloadRegistrar } from "@package/net/neoforged/neoforge/network/registration";
import { $ConfigurationTask } from "@package/net/minecraft/server/network";
import { $Queue } from "@package/java/util";
import { $ServerConfigurationPacketListener } from "@package/net/minecraft/network/protocol/configuration";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/neoforge/network/event" {
    export class $RegisterConfigurationTasksEvent extends $Event implements $IModBusEvent {
        register(arg0: $ConfigurationTask): void;
        getListener(): $ServerConfigurationPacketListener;
        getConfigurationTasks(): $Queue<$ConfigurationTask>;
        constructor(arg0: $ServerConfigurationPacketListener);
        get listener(): $ServerConfigurationPacketListener;
        get configurationTasks(): $Queue<$ConfigurationTask>;
    }
    export class $RegisterPayloadHandlersEvent extends $Event implements $IModBusEvent {
        registrar(arg0: string): $PayloadRegistrar;
        constructor();
    }
}
