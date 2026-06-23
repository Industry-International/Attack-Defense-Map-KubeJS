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
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
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
        add(glyphInfo: $SheetGlyphInfo): $BakedGlyph;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor(renderTypes: $GlyphRenderTypes_, colored: boolean);
    }
    export class $FontSet$GlyphInfoFilter extends $Record {
    }
    export class $CodepointMap$Output<T> {
    }
    export interface $CodepointMap$Output<T> {
        accept(index: number, object: T): void;
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
        remove(index: number): T;
        get(index: number): T;
        put(index: number, value: T): T;
        clear(): void;
        forEach(output: $CodepointMap$Output_<T>): void;
        computeIfAbsent(index: number, valueIfAbsentGetter: $IntFunction_<T>): T;
        keySet(): $IntSet;
        constructor(blockConstructor: $IntFunction_<T[]>, blockMapConstructor: $IntFunction_<T[][]>);
    }
    export class $FontOption$Filter {
        apply(options: $Set_<$FontOption_>): boolean;
        merge(filter: $FontOption$Filter): $FontOption$Filter;
        static CODEC: $Codec<$FontOption$Filter>;
        static ALWAYS_PASS: $FontOption$Filter;
        constructor(values: $Map_<$FontOption_, boolean>);
    }
    export class $FontManager$UnresolvedBuilderBundle extends $Record implements $DependencySorter$Entry<$ResourceLocation> {
    }
    export class $FontManager$FontDefinitionFile extends $Record {
    }
    export class $GlyphRenderTypes extends $Record {
        normal(): $RenderType;
        select(displayMode: $Font$DisplayMode_): $RenderType;
        polygonOffset(): $RenderType;
        seeThrough(): $RenderType;
        static createForIntensityTexture(id: $ResourceLocation_): $GlyphRenderTypes;
        static createForColorTexture(id: $ResourceLocation_): $GlyphRenderTypes;
        constructor(arg0: $RenderType, arg1: $RenderType, arg2: $RenderType);
    }
    export class $FontManager implements $PreparableReloadListener, $AutoCloseable, $AccessFontManager, $FontResourceManagerAccess, $IdentifiableResourceReloadListener {
        close(): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<any>;
        createFontFilterFishy(): $Font;
        createFont(): $Font;
        updateOptions(options: $Options): void;
        getFabricId(): $ResourceLocation;
        getName(): string;
        getFabricDependencies(): $Collection<$ResourceLocation>;
        getFontSets(): $Map<$ResourceLocation, $FontSet>;
        static LOGGER: $Logger;
        fontSets: $Map<$ResourceLocation, $FontSet>;
        static MISSING_FONT: $ResourceLocation;
        constructor(textureManager: $TextureManager);
        get fabricId(): $ResourceLocation;
        get name(): string;
        get fabricDependencies(): $Collection<$ResourceLocation>;
    }
    export class $FontManager$Preparation extends $Record {
    }
    export class $FontSet implements $AutoCloseable {
        name(): $ResourceLocation;
        close(): void;
        reload(options: $Set_<$FontOption_>): void;
        reload(allProviders: $List_<$GlyphProvider$Conditional_>, options: $Set_<$FontOption_>): void;
        getGlyph(character: number): $BakedGlyph;
        getGlyphInfo(character: number, filterFishyGlyphs: boolean): $GlyphInfo;
        whiteGlyph(): $BakedGlyph;
        getRandomGlyph(glyph: $GlyphInfo): $BakedGlyph;
        constructor(textureManager: $TextureManager, name: $ResourceLocation_);
    }
    export class $TextFieldHelper {
        copy(): void;
        setCursorPos(direction: number): void;
        setCursorPos(direction: number, keepSelection: boolean): void;
        setSelectionPos(direction: number): void;
        static getClipboardContents(minecraft: $Minecraft): string;
        removeCharsFromCursor(direction: number): void;
        static setClipboardContents(text: $Minecraft, arg1: string): void;
        getCursorPos(): number;
        paste(): void;
        selectAll(): void;
        isSelecting(): boolean;
        moveByWords(direction: number): void;
        moveByWords(direction: number, keepSelection: boolean): void;
        setCursorToEnd(): void;
        setCursorToEnd(keepSelection: boolean): void;
        setSelectionRange(selectionStart: number, selectionEnd: number): void;
        moveByChars(direction: number): void;
        moveByChars(direction: number, keepSelection: boolean): void;
        getSelectionPos(): number;
        keyPressed(key: number): boolean;
        insertText(text: string): void;
        charTyped(character: string): boolean;
        moveBy(direction: number, keepSelection: boolean, cursorStep: $TextFieldHelper$CursorStep_): void;
        setCursorToStart(keepSelection: boolean): void;
        setCursorToStart(): void;
        removeFromCursor(direction: number, step: $TextFieldHelper$CursorStep_): void;
        cut(): void;
        static createClipboardSetter(minecraft: $Minecraft): $Consumer<string>;
        static createClipboardGetter(minecraft: $Minecraft): $Supplier<string>;
        removeWordsFromCursor(direction: number): void;
        constructor(getMessage: $Supplier_<string>, setMessage: $Consumer_<string>, getClipboard: $Supplier_<string>, setClipboard: $Consumer_<string>, stringValidator: $Predicate_<string>);
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
