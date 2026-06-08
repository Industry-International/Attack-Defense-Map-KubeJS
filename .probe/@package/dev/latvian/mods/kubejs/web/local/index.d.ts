import { $JsonElement } from "@package/com/google/gson";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerRegistry_ } from "@package/dev/latvian/apps/tinyserver";
import { $WSHandler_, $WSHandler } from "@package/dev/latvian/apps/tinyserver/ws";
import { $Runnable_ } from "@package/java/lang";
import { $LocalWebServer_, $KJSHTTPRequest, $KJSWSSession, $SessionInfo, $LocalWebServerRegistry } from "@package/dev/latvian/mods/kubejs/web";
import { $ScriptType_, $ConsoleJS } from "@package/dev/latvian/mods/kubejs/script";
export * as client from "@package/dev/latvian/mods/kubejs/web/local/client";

declare module "@package/dev/latvian/mods/kubejs/web/local" {
    export class $ConsoleWSSession extends $KJSWSSession {
        console: $ConsoleJS;
        info: $SessionInfo;
        constructor(console: $ConsoleJS);
    }
    export class $KubeJSWeb {
        static register(registry: $LocalWebServerRegistry): void;
        static broadcastEvent(handler: $WSHandler_<never, never>, event: string, requiredTag: string, payload: $Supplier_<$JsonElement>): number;
        static broadcastUpdate(type: string, requiredTag: string, payload: $Supplier_<$JsonElement>): number;
        static serverStarted(instance: $LocalWebServer_): void;
        static registerWithAuth(registry: $LocalWebServerRegistry): void;
        static addScriptTypeEndpoints(registry: $ServerRegistry_<$KJSHTTPRequest>, s: $ScriptType_, reload: $Runnable_): void;
        static UPDATES: $WSHandler<$KJSHTTPRequest, $KJSWSSession>;
        constructor();
    }
}
