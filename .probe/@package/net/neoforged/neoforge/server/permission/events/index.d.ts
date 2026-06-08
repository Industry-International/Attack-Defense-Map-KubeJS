import { $PermissionNode } from "@package/net/neoforged/neoforge/server/permission/nodes";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IPermissionHandlerFactory, $IPermissionHandlerFactory_ } from "@package/net/neoforged/neoforge/server/permission/handler";
import { $Iterable_ } from "@package/java/lang";
import { $Map, $Collection } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/server/permission/events" {
    export class $PermissionGatherEvent$Handler extends $PermissionGatherEvent {
        getAvailablePermissionHandlerFactories(): $Map<$ResourceLocation, $IPermissionHandlerFactory>;
        addPermissionHandler(arg0: $ResourceLocation_, arg1: $IPermissionHandlerFactory_): void;
        constructor();
        get availablePermissionHandlerFactories(): $Map<$ResourceLocation, $IPermissionHandlerFactory>;
    }
    export class $PermissionGatherEvent extends $Event {
        constructor();
    }
    export class $PermissionGatherEvent$Nodes extends $PermissionGatherEvent {
        addNodes(arg0: $Iterable_<$PermissionNode<never>>): void;
        addNodes(...arg0: $PermissionNode<never>[]): void;
        getNodes(): $Collection<$PermissionNode<never>>;
        constructor();
        get nodes(): $Collection<$PermissionNode<never>>;
    }
}
