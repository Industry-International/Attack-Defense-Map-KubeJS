import { $JsonObject_ } from "@package/com/google/gson";
import { $CommandBuildContext } from "@package/net/minecraft/commands";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ArgumentTypeInfo, $ArgumentTypeInfo$Template } from "@package/net/minecraft/commands/synchronization";
import { $DoubleArgumentType, $FloatArgumentType, $StringArgumentType, $StringArgumentType$StringType_, $LongArgumentType, $IntegerArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/commands/synchronization/brigadier" {
    export class $LongArgumentInfo$Template implements $ArgumentTypeInfo$Template<$LongArgumentType> {
        type(): $ArgumentTypeInfo<$LongArgumentType, never>;
        instantiate(arg0: $CommandBuildContext): $LongArgumentType;
        min: number;
        max: number;
        this$0: $LongArgumentInfo;
        constructor(arg0: $LongArgumentInfo, arg1: number, arg2: number);
    }
    export class $StringArgumentSerializer$Template implements $ArgumentTypeInfo$Template<$StringArgumentType> {
        type(): $ArgumentTypeInfo<$StringArgumentType, never>;
        instantiate(arg0: $CommandBuildContext): $StringArgumentType;
        this$0: $StringArgumentSerializer;
        constructor(arg0: $StringArgumentSerializer, arg1: $StringArgumentType$StringType_);
    }
    export class $FloatArgumentInfo implements $ArgumentTypeInfo<$FloatArgumentType, $FloatArgumentInfo$Template> {
        unpack(arg0: $FloatArgumentType): $FloatArgumentInfo$Template;
        serializeToJson(arg0: $FloatArgumentInfo$Template, arg1: $JsonObject_): void;
        serializeToNetwork(arg0: $FloatArgumentInfo$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $FloatArgumentInfo$Template;
        constructor();
    }
    export class $LongArgumentInfo implements $ArgumentTypeInfo<$LongArgumentType, $LongArgumentInfo$Template> {
        unpack(arg0: $LongArgumentType): $LongArgumentInfo$Template;
        serializeToJson(arg0: $LongArgumentInfo$Template, arg1: $JsonObject_): void;
        serializeToNetwork(arg0: $LongArgumentInfo$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $LongArgumentInfo$Template;
        constructor();
    }
    export class $StringArgumentSerializer implements $ArgumentTypeInfo<$StringArgumentType, $StringArgumentSerializer$Template> {
        unpack(arg0: $StringArgumentType): $StringArgumentSerializer$Template;
        serializeToJson(arg0: $StringArgumentSerializer$Template, arg1: $JsonObject_): void;
        serializeToNetwork(arg0: $StringArgumentSerializer$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $StringArgumentSerializer$Template;
        constructor();
    }
    export class $DoubleArgumentInfo$Template implements $ArgumentTypeInfo$Template<$DoubleArgumentType> {
        type(): $ArgumentTypeInfo<$DoubleArgumentType, never>;
        instantiate(arg0: $CommandBuildContext): $DoubleArgumentType;
        min: number;
        max: number;
        this$0: $DoubleArgumentInfo;
        constructor(arg0: $DoubleArgumentInfo, arg1: number, arg2: number);
    }
    export class $FloatArgumentInfo$Template implements $ArgumentTypeInfo$Template<$FloatArgumentType> {
        type(): $ArgumentTypeInfo<$FloatArgumentType, never>;
        instantiate(arg0: $CommandBuildContext): $FloatArgumentType;
        min: number;
        max: number;
        this$0: $FloatArgumentInfo;
        constructor(arg0: $FloatArgumentInfo, arg1: number, arg2: number);
    }
    export class $IntegerArgumentInfo$Template implements $ArgumentTypeInfo$Template<$IntegerArgumentType> {
        type(): $ArgumentTypeInfo<$IntegerArgumentType, never>;
        instantiate(arg0: $CommandBuildContext): $IntegerArgumentType;
        min: number;
        max: number;
        this$0: $IntegerArgumentInfo;
        constructor(arg0: $IntegerArgumentInfo, arg1: number, arg2: number);
    }
    export class $DoubleArgumentInfo implements $ArgumentTypeInfo<$DoubleArgumentType, $DoubleArgumentInfo$Template> {
        unpack(arg0: $DoubleArgumentType): $DoubleArgumentInfo$Template;
        serializeToJson(arg0: $DoubleArgumentInfo$Template, arg1: $JsonObject_): void;
        serializeToNetwork(arg0: $DoubleArgumentInfo$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $DoubleArgumentInfo$Template;
        constructor();
    }
    export class $IntegerArgumentInfo implements $ArgumentTypeInfo<$IntegerArgumentType, $IntegerArgumentInfo$Template> {
        unpack(arg0: $IntegerArgumentType): $IntegerArgumentInfo$Template;
        serializeToJson(arg0: $IntegerArgumentInfo$Template, arg1: $JsonObject_): void;
        serializeToNetwork(arg0: $IntegerArgumentInfo$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $IntegerArgumentInfo$Template;
        constructor();
    }
}
