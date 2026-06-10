import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Path } from "@package/java/nio/file";
import { $ModContainer } from "@package/net/fabricmc/loader/api";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PackOutput, $DataGenerator$PackGenerator } from "@package/net/minecraft/data";

declare module "@package/net/fabricmc/fabric/impl/datagen" {
    export class $DataGeneratorExtension {
    }
    export interface $DataGeneratorExtension {
        createPack(arg0: string, arg1: $PackOutput): $DataGenerator$PackGenerator;
        createBuiltinResourcePack(arg0: boolean, arg1: $ResourceLocation_, arg2: $ModContainer, arg3: boolean): $Pair<$DataGenerator$PackGenerator, $Path>;
    }
}
