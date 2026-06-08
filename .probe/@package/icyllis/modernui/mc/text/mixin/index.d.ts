import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBufferBuilder } from "@package/com/mojang/blaze3d/vertex";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $SequencedMap, $Map_, $Map } from "@package/java/util";

declare module "@package/icyllis/modernui/mc/text/mixin" {
    export class $AccessFontManager {
    }
    export interface $AccessFontManager {
        getFontSets(): $Map<$ResourceLocation, $FontSet>;
        get fontSets(): $Map<$ResourceLocation, $FontSet>;
    }
    /**
     * Values that may be interpreted as {@link $AccessFontManager}.
     */
    export type $AccessFontManager_ = (() => $Map_<$ResourceLocation_, $FontSet>);
    export class $AccessBufferSource {
    }
    export interface $AccessBufferSource {
        getFixedBuffers(): $SequencedMap<$RenderType, $ByteBufferBuilder>;
        get fixedBuffers(): $SequencedMap<$RenderType, $ByteBufferBuilder>;
    }
    /**
     * Values that may be interpreted as {@link $AccessBufferSource}.
     */
    export type $AccessBufferSource_ = (() => $SequencedMap<$RenderType, $ByteBufferBuilder>);
}
