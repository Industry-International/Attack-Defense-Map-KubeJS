import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Predicate_, $Function } from "@package/java/util/function";
import { $Logger } from "@package/org/slf4j";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $AtlasSourceManagerAccessor } from "@package/net/fabricmc/fabric/mixin/client/rendering";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $BiMap } from "@package/com/google/common/collect";
import { $SpriteContents } from "@package/net/minecraft/client/renderer/texture";
import { $ResourceManager, $Resource } from "@package/net/minecraft/server/packs/resources";
import { $Record } from "@package/java/lang";
import { $SpriteContentsConstructor, $SpriteContentsConstructor_ } from "@package/net/neoforged/neoforge/client/textures";
import { $List, $Collection_ } from "@package/java/util";
export * as sources from "@package/net/minecraft/client/renderer/texture/atlas/sources";

declare module "@package/net/minecraft/client/renderer/texture/atlas" {
    export class $SpriteResourceLoader {
        static create(arg0: $Collection_<$MetadataSectionSerializer<never>>): $SpriteResourceLoader;
        static LOGGER: $Logger;
    }
    export interface $SpriteResourceLoader {
        loadSprite(arg0: $ResourceLocation_, arg1: $Resource): $SpriteContents;
        loadSprite(arg0: $ResourceLocation_, arg1: $Resource, arg2: $SpriteContentsConstructor_): $SpriteContents;
    }
    /**
     * Values that may be interpreted as {@link $SpriteResourceLoader}.
     */
    export type $SpriteResourceLoader_ = ((arg0: $ResourceLocation, arg1: $Resource, arg2: $SpriteContentsConstructor) => $SpriteContents);
    export class $SpriteSourceType extends $Record {
        codec(): $MapCodec<$SpriteSource>;
        constructor(arg0: $MapCodec_<$SpriteSource>);
    }
    export class $SpriteSource$SpriteSupplier {
    }
    export interface $SpriteSource$SpriteSupplier extends $Function<$SpriteResourceLoader, $SpriteContents> {
        discard(): void;
    }
    /**
     * Values that may be interpreted as {@link $SpriteSource$SpriteSupplier}.
     */
    export type $SpriteSource$SpriteSupplier_ = (() => void);
    export class $SpriteSource$Output {
    }
    export interface $SpriteSource$Output {
        add(arg0: $ResourceLocation_, arg1: $Resource): void;
        add(arg0: $ResourceLocation_, arg1: $SpriteSource$SpriteSupplier_): void;
        removeAll(arg0: $Predicate_<$ResourceLocation>): void;
    }
    export class $SpriteSources implements $AtlasSourceManagerAccessor {
        static getSourceTypeById$fabric_rendering_v1_$md$9aa1a5$0(): $BiMap<any, any>;
        static TYPE_CODEC: $Codec<$SpriteSourceType>;
        static PALETTED_PERMUTATIONS: $SpriteSourceType;
        static FILE_CODEC: $Codec<$List<$SpriteSource>>;
        static FILTER: $SpriteSourceType;
        static CODEC: $Codec<$SpriteSource>;
        static DIRECTORY: $SpriteSourceType;
        static SINGLE_FILE: $SpriteSourceType;
        static UNSTITCHER: $SpriteSourceType;
        constructor();
        static get sourceTypeById$fabric_rendering_v1_$md$9aa1a5$0(): $BiMap<any, any>;
    }
    export class $SpriteSourceList {
        static load(arg0: $ResourceManager, arg1: $ResourceLocation_): $SpriteSourceList;
        list(arg0: $ResourceManager): $List<$Function<$SpriteResourceLoader, $SpriteContents>>;
    }
    export class $SpriteSource {
        static TEXTURE_ID_CONVERTER: $FileToIdConverter;
    }
    export interface $SpriteSource {
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
    }
}
