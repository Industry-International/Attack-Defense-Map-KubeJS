import { $InputStream, $OutputStream } from "@package/java/io";
export * as entity from "@package/org/apache/http/entity";

declare module "@package/org/apache/http" {
    export class $HttpEntity {
    }
    export interface $HttpEntity {
        getContent(): $InputStream;
        writeTo(arg0: $OutputStream): void;
        getContentLength(): number;
        getContentType(): $Header;
        getContentEncoding(): $Header;
        isChunked(): boolean;
        isRepeatable(): boolean;
        isStreaming(): boolean;
        /**
         * @deprecated
         */
        consumeContent(): void;
        get content(): $InputStream;
        get contentLength(): number;
        get contentType(): $Header;
        get contentEncoding(): $Header;
        get chunked(): boolean;
        get repeatable(): boolean;
        get streaming(): boolean;
    }
    export class $HeaderElement {
    }
    export interface $HeaderElement {
        getName(): string;
        getValue(): string;
        getParameterCount(): number;
        getParameters(): $NameValuePair[];
        getParameter(arg0: number): $NameValuePair;
        getParameterByName(arg0: string): $NameValuePair;
        get name(): string;
        get value(): string;
        get parameterCount(): number;
        get parameters(): $NameValuePair[];
    }
    export class $Header {
    }
    export interface $Header extends $NameValuePair {
        getElements(): $HeaderElement[];
        get elements(): $HeaderElement[];
    }
    export class $NameValuePair {
    }
    export interface $NameValuePair {
        getName(): string;
        getValue(): string;
        get name(): string;
        get value(): string;
    }
}
