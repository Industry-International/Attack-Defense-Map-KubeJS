import { $Reader, $InputStream } from "@package/java/io";

declare module "@package/org/w3c/dom/ls" {
    export class $LSResourceResolver {
    }
    export interface $LSResourceResolver {
        resolveResource(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): $LSInput;
    }
    /**
     * Values that may be interpreted as {@link $LSResourceResolver}.
     */
    export type $LSResourceResolver_ = ((arg0: string, arg1: string, arg2: string, arg3: string, arg4: string) => $LSInput);
    export class $LSInput {
    }
    export interface $LSInput {
        getEncoding(): string;
        setEncoding(arg0: string): void;
        setBaseURI(arg0: string): void;
        getBaseURI(): string;
        getSystemId(): string;
        setByteStream(arg0: $InputStream): void;
        setCharacterStream(arg0: $Reader): void;
        setPublicId(arg0: string): void;
        getPublicId(): string;
        getByteStream(): $InputStream;
        getCharacterStream(): $Reader;
        setSystemId(arg0: string): void;
        getStringData(): string;
        setStringData(arg0: string): void;
        getCertifiedText(): boolean;
        setCertifiedText(arg0: boolean): void;
    }
}
