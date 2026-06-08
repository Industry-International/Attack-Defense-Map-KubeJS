import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/resource/conditions/v1" {
    export class $ResourceConditionType<T extends $ResourceCondition> {
        static create<T extends $ResourceCondition>(arg0: $ResourceLocation_, arg1: $MapCodec_<T>): $ResourceConditionType<T>;
        static TYPE_CODEC: $Codec<$ResourceConditionType<never>>;
    }
    export interface $ResourceConditionType<T extends $ResourceCondition> {
        id(): $ResourceLocation;
        codec(): $MapCodec<T>;
    }
    export class $ResourceCondition {
        static CONDITION_CODEC: $Codec<$ResourceCondition>;
        static CODEC: $Codec<$ResourceCondition>;
        static LIST_CODEC: $Codec<$List<$ResourceCondition>>;
    }
    export interface $ResourceCondition {
        test(arg0: $HolderLookup$Provider): boolean;
        getType(): $ResourceConditionType<never>;
        get type(): $ResourceConditionType<never>;
    }
}
