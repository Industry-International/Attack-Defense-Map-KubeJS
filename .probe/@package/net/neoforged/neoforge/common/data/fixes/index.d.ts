import { $List_ } from "@package/java/util";
import { $Schema } from "@package/com/mojang/datafixers/schemas";
import { $DataFix } from "@package/com/mojang/datafixers";

declare module "@package/net/neoforged/neoforge/common/data/fixes" {
    export class $NeoForgeEntityLegacyAttributesFix extends $DataFix {
        constructor(arg0: string, arg1: $Schema, arg2: $List_<string>);
    }
}
