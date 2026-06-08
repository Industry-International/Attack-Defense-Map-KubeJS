import { $PermissionNode, $PermissionDynamicContext } from "@package/net/neoforged/neoforge/server/permission/nodes";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $UUID_, $Collection } from "@package/java/util";
export * as nodes from "@package/net/neoforged/neoforge/server/permission/nodes";
export * as events from "@package/net/neoforged/neoforge/server/permission/events";
export * as handler from "@package/net/neoforged/neoforge/server/permission/handler";
export * as exceptions from "@package/net/neoforged/neoforge/server/permission/exceptions";

declare module "@package/net/neoforged/neoforge/server/permission" {
    export class $PermissionAPI {
        static getPermission<T>(arg0: $ServerPlayer, arg1: $PermissionNode<T>, ...arg2: $PermissionDynamicContext<never>[]): T;
        static initializePermissionAPI(): void;
        static getRegisteredNodes(): $Collection<$PermissionNode<never>>;
        static getActivePermissionHandler(): $ResourceLocation;
        static getOfflinePermission<T>(arg0: $UUID_, arg1: $PermissionNode<T>, ...arg2: $PermissionDynamicContext<never>[]): T;
        static get registeredNodes(): $Collection<$PermissionNode<never>>;
        static get activePermissionHandler(): $ResourceLocation;
    }
}
