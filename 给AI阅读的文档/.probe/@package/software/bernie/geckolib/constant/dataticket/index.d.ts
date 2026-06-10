import { $Class } from "@package/java/lang";
import { $Map_ } from "@package/java/util";

declare module "@package/software/bernie/geckolib/constant/dataticket" {
    export class $DataTicket<D> {
        id(): string;
        getData<D>(arg0: $Map_<$DataTicket<never>, never>): D;
        objectType(): $Class<D>;
        constructor(arg0: string, arg1: $Class<D>);
    }
}
