import { $Consumer_ } from "@package/java/util/function";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";

declare module "@package/net/createmod/ponder/foundation/instruction" {
    export class $PonderInstruction {
        reset(arg0: $PonderScene): void;
        tick(arg0: $PonderScene): void;
        isBlocking(): boolean;
        isComplete(): boolean;
        static simple(arg0: $Consumer_<$PonderScene>): $PonderInstruction;
        onScheduled(arg0: $PonderScene): void;
        constructor();
        get blocking(): boolean;
        get complete(): boolean;
    }
}
