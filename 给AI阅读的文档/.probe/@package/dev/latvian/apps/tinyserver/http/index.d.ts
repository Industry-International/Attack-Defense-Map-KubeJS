import { $Instant } from "@package/java/time";
import { $HTTPResponse, $HTTPPayload } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $OptionalString, $HTTPServer, $OptionalString_, $CompiledPath, $CompiledPath_, $HTTPConnection } from "@package/dev/latvian/apps/tinyserver";
import { $Throwable, $Enum, $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
export * as file from "@package/dev/latvian/apps/tinyserver/http/file";
export * as response from "@package/dev/latvian/apps/tinyserver/http/response";

declare module "@package/dev/latvian/apps/tinyserver/http" {
    export class $HTTPMethod extends $Enum<$HTTPMethod> {
        static fromString(method: string): $HTTPMethod;
        static values(): $HTTPMethod[];
        static valueOf(name: string): $HTTPMethod;
        body(): boolean;
        static TRACE: $HTTPMethod;
        static HEAD: $HTTPMethod;
        static DELETE: $HTTPMethod;
        static POST: $HTTPMethod;
        static GET: $HTTPMethod;
        static CONNECT: $HTTPMethod;
        static OPTIONS: $HTTPMethod;
        static PUT: $HTTPMethod;
        static PATCH: $HTTPMethod;
    }
    /**
     * Values that may be interpreted as {@link $HTTPMethod}.
     */
    export type $HTTPMethod_ = "head" | "get" | "post" | "put" | "patch" | "delete" | "options" | "trace" | "connect";
    export class $HTTPPathHandler<REQ extends $HTTPRequest> extends $Record {
        method(): $HTTPMethod;
        handler(): $HTTPHandler<REQ>;
        path(): $CompiledPath;
        static DEFAULT: $HTTPPathHandler<never>;
        constructor(method: $HTTPMethod_, path: $CompiledPath_, handler: $HTTPHandler_<REQ>);
    }
    export class $Body {
        contentType(): string;
        name(): string;
        fileName(): string;
        bytes(): number[];
        property(key: string): $OptionalString;
        text(): string;
        byteBuffer(): $ByteBuffer;
        getPostData(): $Map<string, $OptionalString>;
        constructor();
        get postData(): $Map<string, $OptionalString>;
    }
    export class $HTTPRequest {
        pathParts(): string[];
        method(): $HTTPMethod;
        init(path: string, pathParts: string[], compiledPath: $CompiledPath_, headers: $List_<$Header_>, queryString: string, query: $Map_<string, $OptionalString_>): void;
        startTime(): $Instant;
        query(): $Map<string, $OptionalString>;
        query(key: string): $OptionalString;
        path(): string;
        header(name: string): $OptionalString;
        country(): string;
        connection(): $HTTPConnection<never>;
        cookie(key: string): $OptionalString;
        server(): $HTTPServer<never>;
        fullPath(): string;
        ip(): string;
        headers(): $List<$Header>;
        preInit(session: $HTTPConnection<never>, startTime: $Instant, method: $HTTPMethod_): void;
        mainBody(): $Body;
        userAgent(): string;
        cookies(): $Map<string, $OptionalString>;
        afterResponse(payload: $HTTPPayload, response: $HTTPResponse, handler: $HTTPHandler_<never>, error: $Throwable): void;
        createPreResponse(handler: $HTTPHandler_<never>): $HTTPResponse;
        queryString(): string;
        ipv6(): string;
        afterInit(): void;
        variables(): $Map<string, $OptionalString>;
        variable(name: string): $OptionalString;
        handleResponse(payload: $HTTPPayload, response: $HTTPResponse, error: $Throwable): $HTTPResponse;
        gitHubSignature(): string;
        acceptedEncodings(): $Set<string>;
        gitHubEvent(): string;
        formData(key: string): $OptionalString;
        formData(): $Map<string, $OptionalString>;
        bodyBuffer(): $ByteBuffer;
        bodyList(): $List<$Body>;
        constructor();
    }
    export class $Header extends $Record {
        value(): $OptionalString;
        key(): string;
        is(name: string): boolean;
        constructor(key: string, value: string);
        constructor(key: string, value: $OptionalString_);
    }
    export class $HTTPHandler<REQ extends $HTTPRequest> {
    }
    export interface $HTTPHandler<REQ extends $HTTPRequest> {
        handle(req: REQ): $HTTPResponse;
        isFileHandler(): boolean;
        get fileHandler(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $HTTPHandler}.
     */
    export type $HTTPHandler_<REQ> = ((req: REQ) => $HTTPResponse);
    export class $HTTPUpgrade<REQ extends $HTTPRequest> {
    }
    export interface $HTTPUpgrade<REQ extends $HTTPRequest> {
        isClosed(): boolean;
        start(req: REQ): void;
        protocol(): string;
        get closed(): boolean;
    }
}
