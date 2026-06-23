import { $HTTPPayload } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $Instant, $ZoneId, $Duration_ } from "@package/java/time";
import { $Consumer_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $FileResponseHandler_ } from "@package/dev/latvian/apps/tinyserver/http/file";
import { $IntStream, $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { $WSSessionFactory_, $WSHandler, $WSSession } from "@package/dev/latvian/apps/tinyserver/ws";
import { $HTTPRequest, $HTTPHandler_, $HTTPPathHandler, $HTTPHandler, $HTTPUpgrade, $HTTPMethod_, $HTTPMethod } from "@package/dev/latvian/apps/tinyserver/http";
import { $Set } from "@package/java/util";
import { $Runnable_, $Record, $Runnable } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
import { $SocketChannel } from "@package/java/nio/channels";
export * as ws from "@package/dev/latvian/apps/tinyserver/ws";
export * as http from "@package/dev/latvian/apps/tinyserver/http";
export * as content from "@package/dev/latvian/apps/tinyserver/content";

declare module "@package/dev/latvian/apps/tinyserver" {
    export class $OptionalString extends $Record {
        value(): string;
        static of(str: string): $OptionalString;
        isPresent(): boolean;
        as<T>(mapper: $Function_<string, T>): T;
        as<T>(mapper: $Function_<string, T>, def: T): T;
        asInt(): number;
        asInt(def: number): number;
        asString(): string;
        asString(def: string): string;
        asDouble(def: number): number;
        asDouble(): number;
        asLong(): number;
        asLong(def: number): number;
        isMissing(): boolean;
        asBoolean(): boolean;
        asBoolean(def: boolean): boolean;
        require(): $OptionalString;
        asFloat(def: number): number;
        asFloat(): number;
        asULong(): number;
        asULong(def: number): number;
        asZoneId(): $ZoneId;
        static MISSING: $OptionalString;
        static EMPTY: $OptionalString;
        constructor(value: string);
        get present(): boolean;
        get missing(): boolean;
    }
    export class $StatusCode extends $Record {
        code(): number;
        message(): string;
        constructor(code: number, message: string);
    }
    export class $CompiledPath$Part extends $Record {
        name(): string;
        matches(string: string): boolean;
        variable(): boolean;
        constructor(name: string, variable: boolean);
    }
    export class $HTTPConnection<REQ extends $HTTPRequest> implements $Runnable {
        run(): void;
        write(buffer: $ByteBuffer): void;
        read(buffer: $ByteBuffer): void;
        close(): void;
        close(reason: string, error: boolean): void;
        readInt(): number;
        readBytes(bytes: number[], off: number, len: number): void;
        readBytes(bytes: number[]): void;
        readFloat(): number;
        readByte(): number;
        readShort(): number;
        readLong(): number;
        readDouble(): number;
        server(): $HTTPServer<REQ>;
        readDirectly(buffer: $ByteBuffer): number;
        writeDirectly(buffer: $ByteBuffer): void;
        upgrade(): $HTTPUpgrade<REQ>;
        readCRLF(): string;
        static SOCKET_CLOSED: $StatusCode;
        static CLOSED: $StatusCode;
        static INVALID_REQUEST: $StatusCode;
        createdTime: $Instant;
        static TIMEOUT: $StatusCode;
        static OPEN: $StatusCode;
        constructor(server: $HTTPServer<REQ>, socketChannel: $SocketChannel, createdTime: $Instant);
    }
    export class $HTTPServer<REQ extends $HTTPRequest> implements $Runnable, $ServerRegistry<REQ> {
        run(): void;
        setDaemon(daemon: boolean): void;
        start(): number;
        stop(): void;
        handlers(): $Stream<$HTTPPathHandler<REQ>>;
        isRunning(): boolean;
        setBufferSize(bufferSize: number): void;
        setPort(port: number): void;
        setPort(range: $IntStream): void;
        createBuilder(req: REQ, handler: $HTTPHandler_<REQ>): $HTTPPayload;
        http(method: $HTTPMethod_, path: string, handler: $HTTPHandler_<REQ>): void;
        setServerName(name: string): void;
        connections(): $Set<$HTTPConnection<REQ>>;
        setMaxKeepAliveConnections(max: number): void;
        setKeepAliveTimeout(duration: $Duration_): void;
        setAddress(address: string): void;
        get(path: string, handler: $HTTPHandler_<REQ>): void;
        put(path: string, handler: $HTTPHandler_<REQ>): void;
        "delete"(path: string, handler: $HTTPHandler_<REQ>): void;
        patch(path: string, handler: $HTTPHandler_<REQ>): void;
        ws<WSS extends $WSSession<REQ>>(path: string, factory: $WSSessionFactory_<REQ, WSS>): $WSHandler<REQ, WSS>;
        ws<WSS extends $WSSession<REQ>>(path: string): $WSHandler<REQ, WSS>;
        post(path: string, handler: $HTTPHandler_<REQ>): void;
        redirect(path: string, redirect: string): void;
        singleFile(path: string, file: $Path_, responseHandler: $FileResponseHandler_): void;
        acceptPostString(path: string, handler: $Consumer_<string>): void;
        acceptPostTask(path: string, task: $Runnable_): void;
        dynamicFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        staticFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        constructor(requestFactory: $Supplier_<REQ>);
        set daemon(value: boolean);
        get running(): boolean;
        set bufferSize(value: number);
        set serverName(value: string);
        set maxKeepAliveConnections(value: number);
        set keepAliveTimeout(value: $Duration_);
        set address(value: string);
    }
    export class $CompiledPath extends $Record {
        matches(path: string[]): string[];
        static compile(string: string): $CompiledPath;
        parts(): $CompiledPath$Part[];
        string(): string;
        wildcard(): boolean;
        variables(): number;
        static EMPTY: $CompiledPath;
        constructor(parts: $CompiledPath$Part_[], string: string, variables: number, wildcard: boolean);
    }
    export class $ServerRegistry<REQ extends $HTTPRequest> {
    }
    export interface $ServerRegistry<REQ extends $HTTPRequest> {
        get(path: string, handler: $HTTPHandler_<REQ>): void;
        put(path: string, handler: $HTTPHandler_<REQ>): void;
        "delete"(path: string, handler: $HTTPHandler_<REQ>): void;
        patch(path: string, handler: $HTTPHandler_<REQ>): void;
        ws<WSS extends $WSSession<REQ>>(path: string, factory: $WSSessionFactory_<REQ, WSS>): $WSHandler<REQ, WSS>;
        ws<WSS extends $WSSession<REQ>>(path: string): $WSHandler<REQ, WSS>;
        post(path: string, handler: $HTTPHandler_<REQ>): void;
        redirect(path: string, redirect: string): void;
        http(method: $HTTPMethod_, path: string, handler: $HTTPHandler_<REQ>): void;
        singleFile(path: string, file: $Path_, responseHandler: $FileResponseHandler_): void;
        acceptPostString(path: string, handler: $Consumer_<string>): void;
        acceptPostTask(path: string, task: $Runnable_): void;
        dynamicFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        staticFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerRegistry}.
     */
    export type $ServerRegistry_<REQ> = ((method: $HTTPMethod, path: string, handler: $HTTPHandler<REQ>) => void);
}
