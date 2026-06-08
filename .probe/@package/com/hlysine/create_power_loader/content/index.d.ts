import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Set } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Pair } from "@package/net/createmod/catnip/data";
export * as trains from "@package/com/hlysine/create_power_loader/content/trains";

declare module "@package/com/hlysine/create_power_loader/content" {
    export class $ChunkLoadManager$LoadedChunkPos extends $Record {
        x(): number;
        z(): number;
        dimension(): $ResourceLocation;
        chunkPos(): $ChunkPos;
        constructor(dimension: $ResourceLocation_, chunkPos: $ChunkPos);
        constructor(arg0: $Level_, arg1: $BlockPos_);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number);
        constructor(arg0: $Level_, arg1: number);
    }
    export class $LoaderType extends $Enum<$LoaderType> implements $StringRepresentable {
        static values(): $LoaderType[];
        static valueOf(arg0: string): $LoaderType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static BRASS: $LoaderType;
        static ANDESITE: $LoaderType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LoaderType}.
     */
    export type $LoaderType_ = "andesite" | "brass";
    export class $LoaderMode extends $Enum<$LoaderMode> implements $StringRepresentable {
        static values(): $LoaderMode[];
        static valueOf(arg0: string): $LoaderMode;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static STATION: $LoaderMode;
        static CONTRAPTION: $LoaderMode;
        static TRAIN: $LoaderMode;
        static STATIC: $LoaderMode;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LoaderMode}.
     */
    export type $LoaderMode_ = "static" | "contraption" | "train" | "station";
    export class $ChunkLoader {
    }
    export interface $ChunkLoader {
        getLocation(): $Pair<$ResourceLocation, $BlockPos>;
        addToManager(): void;
        getLoaderType(): $LoaderType;
        getLoaderMode(): $LoaderMode;
        getForcedChunks(): $Set<$ChunkLoadManager$LoadedChunkPos>;
        removeFromManager(): void;
        get location(): $Pair<$ResourceLocation, $BlockPos>;
        get loaderType(): $LoaderType;
        get loaderMode(): $LoaderMode;
        get forcedChunks(): $Set<$ChunkLoadManager$LoadedChunkPos>;
    }
}
