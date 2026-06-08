import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Map_ } from "@package/java/util";
export * as command from "@package/net/neoforged/neoforge/server/command";
export * as timings from "@package/net/neoforged/neoforge/server/timings";
export * as permission from "@package/net/neoforged/neoforge/server/permission";
export * as loading from "@package/net/neoforged/neoforge/server/loading";
export * as console from "@package/net/neoforged/neoforge/server/console";

declare module "@package/net/neoforged/neoforge/server" {
    export class $LanguageHook {
        static captureLanguageMap(arg0: $Map_<string, string>, arg1: $Map_<string, $Component_>): void;
        static loadBuiltinLanguages(): void;
        constructor();
    }
    export class $ServerLifecycleHooks {
        static getCurrentServer(): $MinecraftServer;
        static handleServerStopped(arg0: $MinecraftServer): void;
        static expectServerStopped(): void;
        static handleServerStarted(arg0: $MinecraftServer): void;
        static handleServerStopping(arg0: $MinecraftServer): void;
        static handleExit(arg0: number): void;
        static handleServerAboutToStart(arg0: $MinecraftServer): void;
        static handleServerStarting(arg0: $MinecraftServer): void;
        constructor();
        static get currentServer(): $MinecraftServer;
    }
}
