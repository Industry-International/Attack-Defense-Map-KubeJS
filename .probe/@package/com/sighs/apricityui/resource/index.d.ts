import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/sighs/apricityui/resource" {
    export class $CSS$DebugRule extends $Record {
        properties(): $Map<string, string>;
        order(): number;
        selector(): string;
        sourcePath(): string;
        constructor(selector: string, properties: $Map_<string, string>, sourcePath: string, order: number);
    }
}
