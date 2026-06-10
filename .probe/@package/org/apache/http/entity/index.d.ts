import { $Serializable, $InputStream } from "@package/java/io";
import { $Header, $HttpEntity, $NameValuePair } from "@package/org/apache/http";
import { $Charset } from "@package/java/nio/charset";

declare module "@package/org/apache/http/entity" {
    export class $AbstractHttpEntity implements $HttpEntity {
        setContentType(arg0: $Header): void;
        setContentType(arg0: string): void;
        getContentType(): $Header;
        getContentEncoding(): $Header;
        /**
         * @deprecated
         */
        consumeContent(): void;
        setContentEncoding(arg0: string): void;
        setContentEncoding(arg0: $Header): void;
        setChunked(arg0: boolean): void;
        isChunked(): boolean;
    }
    export class $InputStreamEntity extends $AbstractHttpEntity {
        constructor(arg0: $InputStream, arg1: number, arg2: $ContentType);
        constructor(arg0: $InputStream, arg1: $ContentType);
        constructor(arg0: $InputStream, arg1: number);
        constructor(arg0: $InputStream);
    }
    export class $ContentType implements $Serializable {
        static get(arg0: $HttpEntity): $ContentType;
        static getOrDefault(arg0: $HttpEntity): $ContentType;
        static parse(arg0: string): $ContentType;
        static create(arg0: string, ...arg1: $NameValuePair[]): $ContentType;
        static create(arg0: string, arg1: $Charset): $ContentType;
        static create(arg0: string): $ContentType;
        static create(arg0: string, arg1: string): $ContentType;
        getCharset(): $Charset;
        withCharset(arg0: $Charset): $ContentType;
        withCharset(arg0: string): $ContentType;
        getParameter(arg0: string): string;
        static getLenient(arg0: $HttpEntity): $ContentType;
        getMimeType(): string;
        static getLenientOrDefault(arg0: $HttpEntity): $ContentType;
        withParameters(...arg0: $NameValuePair[]): $ContentType;
        static getByMimeType(arg0: string): $ContentType;
        static TEXT_HTML: $ContentType;
        static WILDCARD: $ContentType;
        static TEXT_XML: $ContentType;
        static APPLICATION_SVG_XML: $ContentType;
        static IMAGE_JPEG: $ContentType;
        static APPLICATION_ATOM_XML: $ContentType;
        static APPLICATION_SOAP_XML: $ContentType;
        static APPLICATION_OCTET_STREAM: $ContentType;
        static IMAGE_WEBP: $ContentType;
        static APPLICATION_FORM_URLENCODED: $ContentType;
        static APPLICATION_JSON: $ContentType;
        static IMAGE_PNG: $ContentType;
        static MULTIPART_FORM_DATA: $ContentType;
        static DEFAULT_BINARY: $ContentType;
        static IMAGE_BMP: $ContentType;
        static IMAGE_GIF: $ContentType;
        static IMAGE_SVG: $ContentType;
        static IMAGE_TIFF: $ContentType;
        static DEFAULT_TEXT: $ContentType;
        static APPLICATION_XHTML_XML: $ContentType;
        static APPLICATION_XML: $ContentType;
        static TEXT_PLAIN: $ContentType;
        get charset(): $Charset;
        get mimeType(): string;
    }
}
