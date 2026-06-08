import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $AccessFontManager } from "@package/icyllis/modernui/mc/text/mixin";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Map_, $Set_, $List_, $Collection, $Map } from "@package/java/util";
import { $StringRepresentable, $DependencySorter$Entry } from "@package/net/minecraft/util";
import { $SheetGlyphInfo, $GlyphProvider, $GlyphInfo, $GlyphProvider$Conditional_ } from "@package/com/mojang/blaze3d/font";
import { $Consumer, $IntFunction_, $Supplier_, $Consumer_, $Predicate_, $Supplier } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $FontResourceManagerAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Dumpable, $AbstractTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $Font, $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
export * as providers from "@package/net/minecraft/client/gui/font/providers";
export * as glyphs from "@package/net/minecraft/client/gui/font/glyphs";

declare module "@package/net/minecraft/client/gui/font" {
    export class $FontOption extends $Enum<$FontOption> implements $StringRepresentable {
        static values(): $FontOption[];
        static valueOf(arg0: string): $FontOption;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$FontOption>;
        static UNIFORM: $FontOption;
        static JAPANESE_VARIANTS: $FontOption;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FontOption}.
     */
    export type $FontOption_ = "uniform" | "jp";
    export class $FontTexture extends $AbstractTexture implements $Dumpable {
        add(arg0: $SheetGlyphInfo): $BakedGlyph;
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor(arg0: $GlyphRenderTypes_, arg1: boolean);
    }
    export class $FontSet$GlyphInfoFilter extends $Record {
    }
    export class $CodepointMap$Output<T> {
    }
    export interface $CodepointMap$Output<T> {
        accept(arg0: number, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CodepointMap$Output}.
     */
    export type $CodepointMap$Output_<T> = ((arg0: number, arg1: T) => void);
    export class $FontTexture$Node {
    }
    export class $TextFieldHelper$CursorStep extends $Enum<$TextFieldHelper$CursorStep> {
        static values(): $TextFieldHelper$CursorStep[];
        static valueOf(arg0: string): $TextFieldHelper$CursorStep;
        static WORD: $TextFieldHelper$CursorStep;
        static CHARACTER: $TextFieldHelper$CursorStep;
    }
    /**
     * Values that may be interpreted as {@link $TextFieldHelper$CursorStep}.
     */
    export type $TextFieldHelper$CursorStep_ = "character" | "word";
    export class $CodepointMap<T> {
        remove(arg0: number): T;
        get(arg0: number): T;
        put(arg0: number, arg1: T): T;
        clear(): void;
        forEach(arg0: $CodepointMap$Output_<T>): void;
        computeIfAbsent(arg0: number, arg1: $IntFunction_<T>): T;
        keySet(): $IntSet;
        constructor(arg0: $IntFunction_<T[]>, arg1: $IntFunction_<T[][]>);
    }
    export class $FontOption$Filter {
        apply(arg0: $Set_<$FontOption_>): boolean;
        merge(arg0: $FontOption$Filter): $FontOption$Filter;
        static CODEC: $Codec<$FontOption$Filter>;
        static ALWAYS_PASS: $FontOption$Filter;
        constructor(arg0: $Map_<$FontOption_, boolean>);
    }
    export class $FontManager$UnresolvedBuilderBundle extends $Record implements $DependencySorter$Entry<$ResourceLocation> {
    }
    export class $FontManager$FontDefinitionFile extends $Record {
    }
    export class $GlyphRenderTypes extends $Record {
        normal(): $RenderType;
        select(arg0: $Font$DisplayMode_): $RenderType;
        polygonOffset(): $RenderType;
        static createForColorTexture(arg0: $ResourceLocation_): $GlyphRenderTypes;
        static createForIntensityTexture(arg0: $ResourceLocation_): $GlyphRenderTypes;
        seeThrough(): $RenderType;
        constructor(arg0: $RenderType, arg1: $RenderType, arg2: $RenderType);
    }
    export class $FontManager implements $PreparableReloadListener, $AutoCloseable, $AccessFontManager, $FontResourceManagerAccess, $IdentifiableResourceReloadListener {
        close(): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, preparationExecutor: $Executor_, reloadExecutor: $Executor_): $CompletableFuture<any>;
        updateOptions(arg0: $Options): void;
        createFont(): $Font;
        getFabricId(): $ResourceLocation;
        createFontFilterFishy(): $Font;
        getName(): string;
        getFabricDependencies(): $Collection<$ResourceLocation>;
        getFontSets(): $Map<$ResourceLocation, $FontSet>;
        static LOGGER: $Logger;
        fontSets: $Map<$ResourceLocation, $FontSet>;
        static MISSING_FONT: $ResourceLocation;
        constructor(arg0: $TextureManager);
        get fabricId(): $ResourceLocation;
        get name(): string;
        get fabricDependencies(): $Collection<$ResourceLocation>;
    }
    export class $FontManager$Preparation extends $Record {
    }
    export class $FontSet implements $AutoCloseable {
        name(): $ResourceLocation;
        close(): void;
        reload(arg0: $List_<$GlyphProvider$Conditional_>, arg1: $Set_<$FontOption_>): void;
        reload(arg0: $Set_<$FontOption_>): void;
        getGlyphInfo(arg0: number, arg1: boolean): $GlyphInfo;
        getGlyph(arg0: number): $BakedGlyph;
        whiteGlyph(): $BakedGlyph;
        getRandomGlyph(arg0: $GlyphInfo): $BakedGlyph;
        constructor(arg0: $TextureManager, arg1: $ResourceLocation_);
    }
    export class $TextFieldHelper {
        copy(): void;
        setCursorToEnd(arg0: boolean): void;
        setCursorToEnd(): void;
        isSelecting(): boolean;
        setSelectionRange(arg0: number, arg1: number): void;
        getSelectionPos(): number;
        removeFromCursor(arg0: number, arg1: $TextFieldHelper$CursorStep_): void;
        setCursorToStart(): void;
        setCursorToStart(arg0: boolean): void;
        moveBy(arg0: number, arg1: boolean, arg2: $TextFieldHelper$CursorStep_): void;
        cut(): void;
        moveByWords(arg0: number): void;
        moveByWords(arg0: number, arg1: boolean): void;
        moveByChars(arg0: number): void;
        moveByChars(arg0: number, arg1: boolean): void;
        getCursorPos(): number;
        keyPressed(arg0: number): boolean;
        insertText(arg0: string): void;
        charTyped(arg0: string): boolean;
        setCursorPos(arg0: number): void;
        setCursorPos(arg0: number, arg1: boolean): void;
        paste(): void;
        selectAll(): void;
        setSelectionPos(arg0: number): void;
        static createClipboardSetter(arg0: $Minecraft): $Consumer<string>;
        static createClipboardGetter(arg0: $Minecraft): $Supplier<string>;
        static setClipboardContents(arg0: $Minecraft, arg1: string): void;
        static getClipboardContents(arg0: $Minecraft): string;
        removeCharsFromCursor(arg0: number): void;
        removeWordsFromCursor(arg0: number): void;
        constructor(arg0: $Supplier_<string>, arg1: $Consumer_<string>, arg2: $Supplier_<string>, arg3: $Consumer_<string>, arg4: $Predicate_<string>);
        get selecting(): boolean;
    }
    export class $AllMissingGlyphProvider implements $GlyphProvider {
        getSupportedGlyphs(): $IntSet;
        getGlyph(arg0: number): $GlyphInfo;
        close(): void;
        constructor();
        get supportedGlyphs(): $IntSet;
    }
    export class $FontManager$BuilderId extends $Record {
    }
    export class $FontManager$BuilderResult extends $Record {
    }
}
