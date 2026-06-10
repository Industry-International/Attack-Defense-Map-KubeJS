import { $IAcceleratedRenderer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $GlyphInfo, $SheetGlyphInfo } from "@package/com/mojang/blaze3d/font";
import { $Function_ } from "@package/java/util/function";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GlyphRenderTypes_ } from "@package/net/minecraft/client/gui/font";
import { $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Object, $Enum } from "@package/java/lang";
import { $Matrix4f, $Matrix3f } from "@package/org/joml";

declare module "@package/net/minecraft/client/gui/font/glyphs" {
    export class $BakedGlyph$Effect {
        canEqual(arg0: $Object): boolean;
        a: number;
        r: number;
        b: number;
        depth: number;
        y0: number;
        g: number;
        x0: number;
        y1: number;
        x1: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
    }
    export class $BakedGlyph implements $IAcceleratedRenderer<any> {
        render(arg0: $VertexConsumer, arg1: $BakedGlyph$Effect, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        render(arg0: boolean, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        renderType(arg0: $Font$DisplayMode_): $RenderType;
        handler$cik000$acceleratedrendering$renderEffectFast(arg0: $BakedGlyph$Effect, arg1: $Matrix4f, arg2: $VertexConsumer, arg3: number, arg4: $CallbackInfo): void;
        handler$cik000$acceleratedrendering$renderFast(arg0: boolean, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $CallbackInfo): void;
        renderEffect(arg0: $BakedGlyph$Effect, arg1: $Matrix4f, arg2: $VertexConsumer, arg3: number): void;
        left: number;
        v0: number;
        u0: number;
        v1: number;
        right: number;
        up: number;
        u1: number;
        down: number;
        constructor(arg0: $GlyphRenderTypes_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
    }
    export class $SpecialGlyphs$PixelProvider {
    }
    export interface $SpecialGlyphs$PixelProvider {
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs$PixelProvider}.
     */
    export type $SpecialGlyphs$PixelProvider_ = (() => void);
    export class $EmptyGlyph extends $BakedGlyph {
        left: number;
        static INSTANCE: $EmptyGlyph;
        v0: number;
        u0: number;
        v1: number;
        right: number;
        up: number;
        u1: number;
        down: number;
        constructor();
    }
    export class $SpecialGlyphs extends $Enum<$SpecialGlyphs> implements $GlyphInfo {
        static values(): $SpecialGlyphs[];
        static valueOf(arg0: string): $SpecialGlyphs;
        getAdvance(): number;
        bake(arg0: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        getAdvance(arg0: boolean): number;
        getShadowOffset(): number;
        getBoldOffset(): number;
        image: $NativeImage;
        static WHITE: $SpecialGlyphs;
        static MISSING: $SpecialGlyphs;
        get shadowOffset(): number;
        get boldOffset(): number;
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs}.
     */
    export type $SpecialGlyphs_ = "white" | "missing";
}
