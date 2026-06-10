import { $Reader, $InputStream } from "@package/java/io";
import { $Exception } from "@package/java/lang";

declare module "@package/org/xml/sax" {
    export class $ErrorHandler {
    }
    export interface $ErrorHandler {
        error(arg0: $SAXParseException): void;
        warning(arg0: $SAXParseException): void;
        fatalError(arg0: $SAXParseException): void;
    }
    export class $Locator {
    }
    export interface $Locator {
        getLineNumber(): number;
        getColumnNumber(): number;
        getSystemId(): string;
        getPublicId(): string;
        get lineNumber(): number;
        get columnNumber(): number;
        get systemId(): string;
        get publicId(): string;
    }
    export class $InputSource {
        isEmpty(): boolean;
        getEncoding(): string;
        setEncoding(arg0: string): void;
        setSystemId(arg0: string): void;
        getSystemId(): string;
        setByteStream(arg0: $InputStream): void;
        setCharacterStream(arg0: $Reader): void;
        setPublicId(arg0: string): void;
        getPublicId(): string;
        getByteStream(): $InputStream;
        getCharacterStream(): $Reader;
        constructor(arg0: $Reader);
        constructor(arg0: $InputStream);
        constructor(arg0: string);
        constructor();
        get empty(): boolean;
    }
    export class $SAXParseException extends $SAXException {
        getLineNumber(): number;
        getColumnNumber(): number;
        getSystemId(): string;
        getPublicId(): string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: $Exception);
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number);
        constructor(arg0: string, arg1: $Locator, arg2: $Exception);
        constructor(arg0: string, arg1: $Locator);
        get lineNumber(): number;
        get columnNumber(): number;
        get systemId(): string;
        get publicId(): string;
    }
    export class $SAXException extends $Exception {
        getException(): $Exception;
        constructor(arg0: string, arg1: $Exception);
        constructor(arg0: $Exception);
        constructor(arg0: string);
        constructor();
        get exception(): $Exception;
    }
    export class $EntityResolver {
    }
    export interface $EntityResolver {
        resolveEntity(arg0: string, arg1: string): $InputSource;
    }
    /**
     * Values that may be interpreted as {@link $EntityResolver}.
     */
    export type $EntityResolver_ = ((arg0: string, arg1: string) => $InputSource);
    export class $ContentHandler {
    }
    export interface $ContentHandler {
        endPrefixMapping(arg0: string): void;
        startPrefixMapping(arg0: string, arg1: string): void;
        skippedEntity(arg0: string): void;
        processingInstruction(arg0: string, arg1: string): void;
        startDocument(): void;
        characters(arg0: string[], arg1: number, arg2: number): void;
        ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
        endDocument(): void;
        setDocumentLocator(arg0: $Locator): void;
        startElement(arg0: string, arg1: string, arg2: string, arg3: $Attributes): void;
        endElement(arg0: string, arg1: string, arg2: string): void;
        declaration(arg0: string, arg1: string, arg2: string): void;
        set documentLocator(value: $Locator);
    }
    export class $Attributes {
    }
    export interface $Attributes {
        getLength(): number;
        getValue(arg0: number): string;
        getValue(arg0: string): string;
        getValue(arg0: string, arg1: string): string;
        getType(arg0: string): string;
        getType(arg0: string, arg1: string): string;
        getType(arg0: number): string;
        getIndex(arg0: string, arg1: string): number;
        getIndex(arg0: string): number;
        getURI(arg0: number): string;
        getQName(arg0: number): string;
        getLocalName(arg0: number): string;
        get length(): number;
    }
}
