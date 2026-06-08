import { $KnownPack_ } from "@package/net/minecraft/server/packs/repository";
import { $Consumer_ } from "@package/java/util/function";
import { $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $RegistryLayer_, $MinecraftServer$ServerResourcePackInfo_ } from "@package/net/minecraft/server";
import { $ConfigurationTask, $ConfigurationTask$Type } from "@package/net/minecraft/server/network";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List_, $Set_ } from "@package/java/util";

declare module "@package/net/minecraft/server/network/config" {
    export class $SynchronizeRegistriesTask implements $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
        handleResponse(arg0: $List_<$KnownPack_>, arg1: $Consumer_<$Packet<never>>): void;
        handler$gbk000$fabric_resource_loader_v0$onSelectKnownPacks(arg0: $List_<any>, arg1: $Consumer_<any>, arg2: $CallbackInfo): void;
        handler$gbk000$fabric_resource_loader_v0$syncRegistryAndTags(arg0: $Consumer_<any>, arg1: $Set_<any>, arg2: $CallbackInfo): void;
        static TYPE: $ConfigurationTask$Type;
        constructor(arg0: $List_<$KnownPack_>, arg1: $LayeredRegistryAccess<$RegistryLayer_>);
    }
    export class $JoinWorldTask implements $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
        static TYPE: $ConfigurationTask$Type;
        constructor();
    }
    export class $ServerResourcePackConfigurationTask implements $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
        static TYPE: $ConfigurationTask$Type;
        constructor(arg0: $MinecraftServer$ServerResourcePackInfo_);
    }
}
