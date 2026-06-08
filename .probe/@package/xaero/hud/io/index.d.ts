import { $PrintWriter } from "@package/java/io";

declare module "@package/xaero/hud/io" {
    export class $HudIO {
        load(arg0: string, arg1: boolean): boolean;
        save(arg0: $PrintWriter): void;
        static SEPARATOR: string;
        static MODULE_LINE_PREFIX: string;
    }
}
