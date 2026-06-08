import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/block/grower" {
    export class $TreeGrower {
        growTree(arg0: $ServerLevel, arg1: $ChunkGenerator, arg2: $BlockPos_, arg3: $BlockState_, arg4: $RandomSource): boolean;
        static MANGROVE: $TreeGrower;
        static SPRUCE: $TreeGrower;
        static CHERRY: $TreeGrower;
        static CODEC: $Codec<$TreeGrower>;
        static BIRCH: $TreeGrower;
        static JUNGLE: $TreeGrower;
        static ACACIA: $TreeGrower;
        static OAK: $TreeGrower;
        static AZALEA: $TreeGrower;
        static DARK_OAK: $TreeGrower;
        constructor(arg0: string, arg1: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, arg2: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, arg3: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined);
        constructor(arg0: string, arg1: number, arg2: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, arg3: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, arg4: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, arg5: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, arg6: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined, arg7: ($ResourceKey_<$ConfiguredFeature<never, never>>) | undefined);
    }
}
