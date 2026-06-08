import { $Supplier, $Supplier_ } from "@package/java/util/function";
import { $Dynamic } from "@package/com/mojang/serialization";
import { $Hook$HookFunction, $TypeTemplate } from "@package/com/mojang/datafixers/types/templates";
import { $PrimitiveCodec } from "@package/com/mojang/serialization/codecs";
import { $Map_, $Map } from "@package/java/util";
import { $Schema } from "@package/com/mojang/datafixers/schemas";
import { $Type } from "@package/com/mojang/datafixers/types";

declare module "@package/net/minecraft/util/datafix/schemas" {
    export class $V3808_1 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3808_2 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3818_3 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3818_4 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3818_5 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2509 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2501 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2502 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2505 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2519 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2522 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2551 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2571 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V100 extends $Schema {
        static registerMob(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static equipment(arg0: $Schema): $TypeTemplate;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V102 extends $Schema {
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V106 extends $Schema {
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V107 extends $Schema {
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2568 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V135 extends $Schema {
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V143 extends $Schema {
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3938 extends $NamespacedSchema {
        static abstractArrow(arg0: $Schema): $TypeTemplate;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2684 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2686 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2688 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $NamespacedSchema extends $Schema {
        static ensureNamespaced(arg0: string): string;
        static namespacedString(): $Type<string>;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2707 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2704 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1460 extends $NamespacedSchema {
        static registerMob(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static registerInventory(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1466 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1451 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1481 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1483 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1486 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1470 extends $NamespacedSchema {
        static registerMob(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2831 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2832 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1510 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2842 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V501 extends $Schema {
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1800 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1801 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V702 extends $Schema {
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V703 extends $Schema {
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V700 extends $Schema {
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V701 extends $Schema {
        static registerMob(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V704 extends $Schema {
        static registerInventory(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static ADD_NAMES: $Hook$HookFunction;
        static ITEM_TO_BLOCKENTITY: $Map<string, string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V705 extends $NamespacedSchema {
        static registerThrowableProjectile(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static registerMob(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static ITEM_TO_ENTITY: $Map<string, string>;
        static ADD_NAMES: $Hook$HookFunction;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1451_1 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1451_2 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1451_3 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1451_4 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1451_5 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1451_6 extends $NamespacedSchema {
        static packNamespacedWithDot(arg0: string): string;
        static createCriterionTypes(arg0: $Schema): $Map<string, $Supplier<$TypeTemplate>>;
        static REPACK_OBJECTIVE_ID: $Hook$HookFunction;
        static SPECIAL_OBJECTIVE_MARKER: string;
        static UNPACK_OBJECTIVE_ID: $Hook$HookFunction;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1920 extends $NamespacedSchema {
        static registerInventory(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1904 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1906 extends $NamespacedSchema {
        static registerInventory(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1909 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1928 extends $NamespacedSchema {
        static registerMob(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1929 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V808 extends $NamespacedSchema {
        static registerInventory(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1931 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3081 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3083 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3082 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3076 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3078 extends $NamespacedSchema {
        static registerMob(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3203 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3202 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3204 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3326 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3325 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3328 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3327 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3448 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V2100 extends $NamespacedSchema {
        static registerMob(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3438 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3683 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3682 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1022 extends $Schema {
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3685 extends $NamespacedSchema {
        static abstractArrow(arg0: $Schema): $TypeTemplate;
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3689 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V99 extends $Schema {
        static registerThrowableProjectile(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static registerMob(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static registerMinecart(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static registerInventory(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: string): void;
        static equipment(arg0: $Schema): $TypeTemplate;
        static addNames<T>(arg0: $Dynamic<T>, arg1: $Map_<string, string>, arg2: $Map_<string, string>): T;
        static ITEM_TO_ENTITY: $Map<string, string>;
        static ADD_NAMES: $Hook$HookFunction;
        static ITEM_TO_BLOCKENTITY: $Map<string, string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V1125 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3799 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3818 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3825 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3807 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3808 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
    export class $V3816 extends $NamespacedSchema {
        static NAMESPACED_STRING_CODEC: $PrimitiveCodec<string>;
        constructor(arg0: number, arg1: $Schema);
    }
}
