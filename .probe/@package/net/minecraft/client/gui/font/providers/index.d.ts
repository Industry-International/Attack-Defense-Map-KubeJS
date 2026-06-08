import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $InputStream } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ByteList } from "@package/it/unimi/dsi/fastutil/bytes";
import { $FT_Vector } from "@package/org/lwjgl/util/freetype";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $IntBuffer } from "@package/java/nio";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Function_ } from "@package/java/util/function";
import { $GlyphProvider, $SheetGlyphInfo, $GlyphInfo } from "@package/com/mojang/blaze3d/font";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FontOption$Filter, $CodepointMap } from "@package/net/minecraft/client/gui/font";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";

declare module "@package/net/minecraft/client/gui/font/providers" {
    export class $GlyphProviderDefinition$Reference extends $Record {
        id(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $UnihexProvider$IntContents extends $Record implements $UnihexProvider$LineData {
        mask(): number;
        calculateWidth(): number;
    }
    export class $UnihexProvider$Glyph extends $Record implements $GlyphInfo {
        getAdvance(arg0: boolean): number;
        getShadowOffset(): number;
        getBoldOffset(): number;
        get shadowOffset(): number;
        get boldOffset(): number;
    }
    export class $GlyphProviderDefinition$Conditional extends $Record {
        filter(): $FontOption$Filter;
        definition(): $GlyphProviderDefinition;
        static CODEC: $Codec<$GlyphProviderDefinition$Conditional>;
        constructor(arg0: $GlyphProviderDefinition, arg1: $FontOption$Filter);
    }
    export class $UnihexProvider$Dimensions extends $Record {
        static left(arg0: number): number;
        left(): number;
        right(): number;
        static right(arg0: number): number;
        pack(): number;
        static pack(arg0: number, arg1: number): number;
        static CODEC: $Codec<$UnihexProvider$Dimensions>;
        static MAP_CODEC: $MapCodec<$UnihexProvider$Dimensions>;
        constructor(arg0: number, arg1: number);
    }
    export class $UnihexProvider$OverrideRange extends $Record {
    }
    export class $BitmapProvider$Definition extends $Record implements $GlyphProviderDefinition {
        type(): $GlyphProviderType;
        file(): $ResourceLocation;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        height(): number;
        ascent(): number;
        codepointGrid(): number[][];
        static CODEC: $MapCodec<$BitmapProvider$Definition>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number[][]);
    }
    export class $ProviderReferenceDefinition extends $Record implements $GlyphProviderDefinition {
        type(): $GlyphProviderType;
        id(): $ResourceLocation;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        static CODEC: $MapCodec<$ProviderReferenceDefinition>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $UnihexProvider$ByteContents extends $Record implements $UnihexProvider$LineData {
        mask(): number;
        calculateWidth(): number;
    }
    export class $UnihexProvider implements $GlyphProvider {
        static readFromStream(arg0: $InputStream, arg1: $UnihexProvider$ReaderOutput_): void;
        static decodeHex(arg0: number, arg1: $ByteList, arg2: number): number;
        static unpackBitsToBytes(arg0: $IntBuffer, arg1: number, arg2: number, arg3: number): void;
        static unpackBitsToBytes(arg0: $IntBuffer, arg1: $UnihexProvider$LineData, arg2: number, arg3: number): void;
        getSupportedGlyphs(): $IntSet;
        getGlyph(arg0: number): $GlyphInfo;
        close(): void;
        static LOGGER: $Logger;
        constructor(arg0: $CodepointMap<$UnihexProvider$Glyph_>);
        get supportedGlyphs(): $IntSet;
    }
    export class $GlyphProviderDefinition$Loader {
    }
    export interface $GlyphProviderDefinition$Loader {
        load(arg0: $ResourceManager): $GlyphProvider;
    }
    /**
     * Values that may be interpreted as {@link $GlyphProviderDefinition$Loader}.
     */
    export type $GlyphProviderDefinition$Loader_ = ((arg0: $ResourceManager) => $GlyphProvider);
    export class $BitmapProvider implements $GlyphProvider {
        close(): void;
        getSupportedGlyphs(): $IntSet;
        getGlyph(arg0: number): $GlyphInfo;
        static LOGGER: $Logger;
        constructor(arg0: $NativeImage, arg1: $CodepointMap<$BitmapProvider$Glyph_>);
        get supportedGlyphs(): $IntSet;
    }
    export class $UnihexProvider$ShortContents extends $Record implements $UnihexProvider$LineData {
        mask(): number;
        calculateWidth(): number;
    }
    export class $GlyphProviderType extends $Enum<$GlyphProviderType> implements $StringRepresentable, $IExtensibleEnum {
        mapCodec(): $MapCodec<$GlyphProviderDefinition>;
        static values(): $GlyphProviderType[];
        static valueOf(arg0: string): $GlyphProviderType;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SPACE: $GlyphProviderType;
        static UNIHEX: $GlyphProviderType;
        static CODEC: $Codec<$GlyphProviderType>;
        static BITMAP: $GlyphProviderType;
        static TTF: $GlyphProviderType;
        static REFERENCE: $GlyphProviderType;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GlyphProviderType}.
     */
    export type $GlyphProviderType_ = "bitmap" | "ttf" | "space" | "unihex" | "reference";
    export class $TrueTypeGlyphProviderDefinition$Shift extends $Record {
        x(): number;
        y(): number;
        static CODEC: $Codec<$TrueTypeGlyphProviderDefinition$Shift>;
        static NONE: $TrueTypeGlyphProviderDefinition$Shift;
        constructor(arg0: number, arg1: number);
    }
    export class $TrueTypeGlyphProviderDefinition extends $Record implements $GlyphProviderDefinition {
        size(): number;
        type(): $GlyphProviderType;
        location(): $ResourceLocation;
        shift(): $TrueTypeGlyphProviderDefinition$Shift;
        skip(): string;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        oversample(): number;
        static CODEC: $MapCodec<$TrueTypeGlyphProviderDefinition>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: $TrueTypeGlyphProviderDefinition$Shift_, arg4: string);
    }
    export class $GlyphProviderDefinition {
        static MAP_CODEC: $MapCodec<$GlyphProviderDefinition>;
    }
    export interface $GlyphProviderDefinition {
        type(): $GlyphProviderType;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
    }
    export class $FreeTypeUtil {
        static x(arg0: $FT_Vector): number;
        static destroy(): void;
        static checkError(arg0: number, arg1: string): boolean;
        static getLibrary(): number;
        static setVector(arg0: $FT_Vector, arg1: number, arg2: number): $FT_Vector;
        static assertError(arg0: number, arg1: string): void;
        static LIBRARY_LOCK: $Object;
        constructor();
        static get library(): number;
    }
    export class $UnihexProvider$LineData {
    }
    export interface $UnihexProvider$LineData {
        line(arg0: number): number;
        mask(): number;
        bitWidth(): number;
        calculateWidth(): number;
    }
    export class $UnihexProvider$ReaderOutput {
    }
    export interface $UnihexProvider$ReaderOutput {
        accept(arg0: number, arg1: $UnihexProvider$LineData): void;
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$ReaderOutput}.
     */
    export type $UnihexProvider$ReaderOutput_ = ((arg0: number, arg1: $UnihexProvider$LineData) => void);
    export class $UnihexProvider$Definition implements $GlyphProviderDefinition {
        type(): $GlyphProviderType;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        static CODEC: $MapCodec<$UnihexProvider$Definition>;
    }
    export class $BitmapProvider$Glyph extends $Record implements $GlyphInfo {
        scale(): number;
        advance(): number;
        width(): number;
        image(): $NativeImage;
        getAdvance(): number;
        height(): number;
        ascent(): number;
        bake(arg0: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        offsetY(): number;
        offsetX(): number;
        getAdvance(arg0: boolean): number;
        getShadowOffset(): number;
        getBoldOffset(): number;
        constructor(arg0: number, arg1: $NativeImage, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        get shadowOffset(): number;
        get boldOffset(): number;
    }
}
