import { $IntUnaryOperator, $Supplier_, $Function_, $Function, $Supplier } from "@package/java/util/function";
import { $Logger } from "@package/org/slf4j";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SpriteContents } from "@package/net/minecraft/client/renderer/texture";
import { $ResourceManager, $Resource } from "@package/net/minecraft/server/packs/resources";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Record } from "@package/java/lang";
import { $Map_, $List_ } from "@package/java/util";
import { $SpriteSource$SpriteSupplier, $SpriteResourceLoader, $SpriteSource$Output, $SpriteSourceType, $SpriteResourceLoader_, $SpriteSource } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $ResourceLocationPattern } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/renderer/texture/atlas/sources" {
    export class $SingleFile implements $SpriteSource {
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$SingleFile>;
        constructor(arg0: $ResourceLocation_, arg1: ($ResourceLocation_) | undefined);
    }
    export class $PalettedPermutations implements $SpriteSource {
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static loadPaletteEntryFromImage(arg0: $ResourceManager, arg1: $ResourceLocation_): number[];
        static CODEC: $MapCodec<$PalettedPermutations>;
        static LOGGER: $Logger;
        constructor(arg0: $List_<$ResourceLocation_>, arg1: $ResourceLocation_, arg2: $Map_<string, $ResourceLocation_>);
    }
    export class $LazyLoadedImage {
        get(): $NativeImage;
        release(): void;
        constructor(arg0: $ResourceLocation_, arg1: $Resource, arg2: number);
    }
    export class $Unstitcher$RegionInstance implements $SpriteSource$SpriteSupplier {
        apply(arg0: $SpriteResourceLoader_): $SpriteContents;
        discard(): void;
        compose<V>(arg0: $Function_<V, $SpriteResourceLoader>): $Function<V, $SpriteContents>;
        andThen<V>(arg0: $Function_<$SpriteContents, V>): $Function<$SpriteResourceLoader, V>;
        constructor(arg0: $LazyLoadedImage, arg1: $Unstitcher$Region_, arg2: number, arg3: number);
    }
    export class $Unstitcher implements $SpriteSource {
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$Unstitcher>;
        static LOGGER: $Logger;
        constructor(arg0: $ResourceLocation_, arg1: $List_<$Unstitcher$Region_>, arg2: number, arg3: number);
    }
    export class $DirectoryLister implements $SpriteSource {
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$DirectoryLister>;
        constructor(arg0: string, arg1: string);
    }
    export class $SourceFilter implements $SpriteSource {
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$SourceFilter>;
        constructor(arg0: $ResourceLocationPattern);
    }
    export class $PalettedPermutations$PalettedSpriteSupplier extends $Record implements $SpriteSource$SpriteSupplier {
        apply(arg0: $SpriteResourceLoader_): $SpriteContents;
        palette(): $Supplier<$IntUnaryOperator>;
        discard(): void;
        permutationLocation(): $ResourceLocation;
        baseImage(): $LazyLoadedImage;
        compose<V>(arg0: $Function_<V, $SpriteResourceLoader>): $Function<V, $SpriteContents>;
        andThen<V>(arg0: $Function_<$SpriteContents, V>): $Function<$SpriteResourceLoader, V>;
        constructor(arg0: $LazyLoadedImage, arg1: $Supplier_<$IntUnaryOperator>, arg2: $ResourceLocation_);
    }
    export class $Unstitcher$Region extends $Record {
        x(): number;
        y(): number;
        width(): number;
        height(): number;
        sprite(): $ResourceLocation;
        static CODEC: $Codec<$Unstitcher$Region>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number);
    }
}
