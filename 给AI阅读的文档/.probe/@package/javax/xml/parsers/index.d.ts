import { $InputStream, $File_ } from "@package/java/io";
import { $Schema } from "@package/javax/xml/validation";
import { $EntityResolver_, $ErrorHandler, $InputSource } from "@package/org/xml/sax";
import { $Object, $ClassLoader } from "@package/java/lang";
import { $Document, $DOMImplementation } from "@package/org/w3c/dom";

declare module "@package/javax/xml/parsers" {
    export class $DocumentBuilder {
        newDocument(): $Document;
        reset(): void;
        parse(arg0: $InputSource): $Document;
        parse(arg0: $File_): $Document;
        parse(arg0: $InputStream): $Document;
        parse(arg0: $InputStream, arg1: string): $Document;
        parse(arg0: string): $Document;
        setErrorHandler(arg0: $ErrorHandler): void;
        getDOMImplementation(): $DOMImplementation;
        setEntityResolver(arg0: $EntityResolver_): void;
        isNamespaceAware(): boolean;
        isValidating(): boolean;
        getSchema(): $Schema;
        isXIncludeAware(): boolean;
        set errorHandler(value: $ErrorHandler);
        get DOMImplementation(): $DOMImplementation;
        set entityResolver(value: $EntityResolver_);
        get namespaceAware(): boolean;
        get validating(): boolean;
        get schema(): $Schema;
        get XIncludeAware(): boolean;
    }
    export class $DocumentBuilderFactory {
        static newInstance(): $DocumentBuilderFactory;
        static newInstance(arg0: string, arg1: $ClassLoader): $DocumentBuilderFactory;
        setAttribute(arg0: string, arg1: $Object): void;
        getAttribute(arg0: string): $Object;
        setExpandEntityReferences(arg0: boolean): void;
        static newDefaultNSInstance(): $DocumentBuilderFactory;
        static newNSInstance(arg0: string, arg1: $ClassLoader): $DocumentBuilderFactory;
        static newNSInstance(): $DocumentBuilderFactory;
        static newDefaultInstance(): $DocumentBuilderFactory;
        setIgnoringElementContentWhitespace(arg0: boolean): void;
        setIgnoringComments(arg0: boolean): void;
        setCoalescing(arg0: boolean): void;
        isNamespaceAware(): boolean;
        isValidating(): boolean;
        isIgnoringElementContentWhitespace(): boolean;
        isExpandEntityReferences(): boolean;
        isIgnoringComments(): boolean;
        isCoalescing(): boolean;
        getFeature(arg0: string): boolean;
        getSchema(): $Schema;
        setSchema(arg0: $Schema): void;
        isXIncludeAware(): boolean;
        setFeature(arg0: string, arg1: boolean): void;
        setXIncludeAware(arg0: boolean): void;
        setNamespaceAware(arg0: boolean): void;
        setValidating(arg0: boolean): void;
        newDocumentBuilder(): $DocumentBuilder;
    }
}
