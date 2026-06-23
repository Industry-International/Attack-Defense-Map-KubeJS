
declare module "@package/javax/xml/transform" {
    export class $Result {
        static PI_ENABLE_OUTPUT_ESCAPING: string;
        static PI_DISABLE_OUTPUT_ESCAPING: string;
    }
    export interface $Result {
        getSystemId(): string;
        setSystemId(arg0: string): void;
    }
    export class $Source {
    }
    export interface $Source {
        isEmpty(): boolean;
        getSystemId(): string;
        setSystemId(arg0: string): void;
        get empty(): boolean;
    }
}
