import { $UnaryOperator_ } from "@package/java/util/function";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/com/simibubi/create/foundation/advancement" {
    export class $CreateAdvancement$Builder {
    }
    export class $CreateAdvancement {
        awardTo(arg0: $Player): void;
        isAlreadyAwardedTo(arg0: $Player): boolean;
        constructor(arg0: string, arg1: $UnaryOperator_<$CreateAdvancement$Builder>);
    }
}
