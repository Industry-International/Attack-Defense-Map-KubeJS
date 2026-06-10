
declare module "@package/javax/xml/transform" {
    export class $Result {
        static PI_ENABLE_OUTPUT_ESCAPING: string;
        static PI_DISABLE_OUTPUT_ESCAPING: string;
    }
    export interface $Result {
        setSystemId(arg0: string): void;
        getSystemId(): string;
    }
    export class $Source {
    }
    export interface $Source {
        isEmpty(): boolean;
        setSystemId(arg0: string): void;
        getSystemId(): string;
        get empty(): boolean;
    }
}
