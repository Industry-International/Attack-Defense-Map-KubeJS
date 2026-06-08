import { $OutputStream } from "@package/java/io";
import { $JsonObject_, $JsonObject, $JsonArray, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $FileResponseHandler_ } from "@package/dev/latvian/apps/tinyserver/http/file";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $WSSession, $WSSessionFactory_, $WSHandler } from "@package/dev/latvian/apps/tinyserver/ws";
import { $Tag_ } from "@package/net/minecraft/nbt";
import { $List, $Map_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $ResponseContent } from "@package/dev/latvian/apps/tinyserver/content";
import { $Supplier_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $Lazy, $BaseProperties, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $ServerRegistry, $HTTPConnection, $HTTPServer } from "@package/dev/latvian/apps/tinyserver";
import { $HttpRequest$BodyPublisher } from "@package/java/net/http";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $HTTPHandler_, $HTTPHandler, $HTTPRequest, $HTTPMethod_ } from "@package/dev/latvian/apps/tinyserver/http";
import { $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Record, $Runnable_, $Comparable } from "@package/java/lang";
export * as local from "@package/dev/latvian/mods/kubejs/web/local";

declare module "@package/dev/latvian/mods/kubejs/web" {
    export class $KJSWSSession extends $WSSession<$KJSHTTPRequest> {
        onEvent(type: string, payload: $JsonElement_): void;
        info: $SessionInfo;
        constructor();
    }
    export class $LocalWebServerAPIRegistry {
    }
    export interface $LocalWebServerAPIRegistry {
        register(id: $ResourceLocation_, version: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LocalWebServerAPIRegistry}.
     */
    export type $LocalWebServerAPIRegistry_ = ((id: $ResourceLocation, version: number) => void);
    export class $JsonContent extends $Record implements $ResponseContent {
        type(): string;
        length(): number;
        static array(json: $Consumer_<$JsonArray>): $JsonContent;
        write(out: $OutputStream): void;
        static object(json: $Consumer_<$JsonObject>): $JsonContent;
        static any(json: $Supplier_<$JsonElement>): $JsonContent;
        json(): $Lazy<number[]>;
        toBytes(): number[];
        transferTo(connection: $HTTPConnection<never>): void;
        hasData(): boolean;
        bodyPublisher(): $HttpRequest$BodyPublisher;
        constructor(json: $Lazy<number[]>);
    }
    export class $KJSHTTPServer$RequestFactory extends $Record implements $Supplier<$KJSHTTPRequest> {
    }
    export class $LocalWebServerRegistry$AuthHandler extends $Record implements $HTTPHandler<$KJSHTTPRequest> {
        isFileHandler(): boolean;
        get fileHandler(): boolean;
    }
    export class $KJSHTTPServer extends $HTTPServer<$KJSHTTPRequest> {
    }
    export class $LocalWebServerRegistry implements $ServerRegistry<$KJSHTTPRequest> {
        ws<WSS extends $WSSession<$KJSHTTPRequest>>(path: string, factory: $WSSessionFactory_<$KJSHTTPRequest, WSS>): $WSHandler<$KJSHTTPRequest, WSS>;
        http(method: $HTTPMethod_, path: string, handler: $HTTPHandler_<$KJSHTTPRequest>): void;
        get(path: string, handler: $HTTPHandler_<$KJSHTTPRequest>): void;
        put(path: string, handler: $HTTPHandler_<$KJSHTTPRequest>): void;
        "delete"(path: string, handler: $HTTPHandler_<$KJSHTTPRequest>): void;
        patch(path: string, handler: $HTTPHandler_<$KJSHTTPRequest>): void;
        ws<WSS extends $WSSession<REQ>>(path: string): $WSHandler<$KJSHTTPRequest, WSS>;
        post(path: string, handler: $HTTPHandler_<$KJSHTTPRequest>): void;
        redirect(path: string, redirect: string): void;
        singleFile(path: string, file: $Path_, responseHandler: $FileResponseHandler_): void;
        staticFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        dynamicFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        acceptPostTask(path: string, task: $Runnable_): void;
        acceptPostString(path: string, handler: $Consumer_<string>): void;
    }
    export class $KJSHTTPRequest extends $HTTPRequest {
        id(): $ResourceLocation;
        id(ns: string, path: string): $ResourceLocation;
        runInMainThread(task: $Runnable_): void;
        components(ops: $DynamicOps<$Tag_>): $DataComponentPatch;
        supplyInMainThread<T>(task: $Supplier_<T>): T;
        registries(): $RegistryAccessContainer;
        eventLoop: $BlockableEventLoop<never>;
        constructor(eventLoop: $BlockableEventLoop<never>);
    }
    export class $WebServerProperties extends $BaseProperties {
        static get(): $WebServerProperties;
        static reload(): void;
        port: number;
        auth: string;
        publicAddress: string;
        enabled: boolean;
    }
    export class $LocalWebServer$Endpoint extends $Record implements $Comparable<$LocalWebServer$Endpoint> {
        method(): string;
        compareTo(o: $LocalWebServer$Endpoint_): number;
        path(): string;
        auth(): boolean;
        constructor(method: string, path: string, auth: boolean);
    }
    export class $RelativeURL extends $Record {
        query(): $Map<string, string>;
        path(): string;
        fullString(): string;
        constructor(path: string);
        constructor(path: string, query: $Map_<string, string>);
    }
    export class $LocalWebServer extends $Record {
        url(): string;
        server(): $KJSHTTPServer;
        endpoints(): $List<$LocalWebServer$Endpoint>;
        explorerCode(): string;
        constructor(server: $KJSHTTPServer, url: string, endpoints: $List_<$LocalWebServer$Endpoint_>, explorerCode: string);
    }
    export class $SessionInfo extends $Record {
        source(): string;
        tags(): $Set<string>;
        static fromJson(info: $SessionInfo_, json: $JsonObject_): $SessionInfo;
        static NONE: $SessionInfo;
        constructor(source: string, tags: $Set_<string>);
    }
}
