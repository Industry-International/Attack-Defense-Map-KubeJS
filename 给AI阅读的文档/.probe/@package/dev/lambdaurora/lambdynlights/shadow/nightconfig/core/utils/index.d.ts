import { $Writer } from "@package/java/io";

declare module "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core/utils" {
    export class $WriterSupplier {
    }
    export interface $WriterSupplier {
        get(): $Writer;
    }
    /**
     * Values that may be interpreted as {@link $WriterSupplier}.
     */
    export type $WriterSupplier_ = (() => $Writer);
}
