import { $ContentHandler, $ErrorHandler } from "@package/org/xml/sax";
import { $Object } from "@package/java/lang";
import { $LSResourceResolver, $LSResourceResolver_ } from "@package/org/w3c/dom/ls";
import { $TypeInfo } from "@package/org/w3c/dom";
import { $Source, $Result } from "@package/javax/xml/transform";

declare module "@package/javax/xml/validation" {
    export class $ValidatorHandler implements $ContentHandler {
        getContentHandler(): $ContentHandler;
        getProperty(arg0: string): $Object;
        setProperty(arg0: string, arg1: $Object): void;
        setContentHandler(arg0: $ContentHandler): void;
        setErrorHandler(arg0: $ErrorHandler): void;
        getErrorHandler(): $ErrorHandler;
        getFeature(arg0: string): boolean;
        setFeature(arg0: string, arg1: boolean): void;
        setResourceResolver(arg0: $LSResourceResolver_): void;
        getResourceResolver(): $LSResourceResolver;
        getTypeInfoProvider(): $TypeInfoProvider;
        declaration(arg0: string, arg1: string, arg2: string): void;
        get typeInfoProvider(): $TypeInfoProvider;
    }
    export class $TypeInfoProvider {
        isSpecified(arg0: number): boolean;
        isIdAttribute(arg0: number): boolean;
        getElementTypeInfo(): $TypeInfo;
        getAttributeTypeInfo(arg0: number): $TypeInfo;
        get elementTypeInfo(): $TypeInfo;
    }
    export class $Schema {
        newValidatorHandler(): $ValidatorHandler;
        newValidator(): $Validator;
    }
    export class $Validator {
        reset(): void;
        getProperty(arg0: string): $Object;
        validate(arg0: $Source): void;
        validate(arg0: $Source, arg1: $Result): void;
        setProperty(arg0: string, arg1: $Object): void;
        setErrorHandler(arg0: $ErrorHandler): void;
        getErrorHandler(): $ErrorHandler;
        getFeature(arg0: string): boolean;
        setFeature(arg0: string, arg1: boolean): void;
        setResourceResolver(arg0: $LSResourceResolver_): void;
        getResourceResolver(): $LSResourceResolver;
    }
}
