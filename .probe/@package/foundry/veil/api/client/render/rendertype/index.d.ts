import { $RenderStateShard$TexturingStateShard, $RenderType$OutlineProperty, $RenderStateShard$LineStateShard, $RenderStateShard$OverlayStateShard, $RenderStateShard$CullStateShard, $RenderStateShard$TransparencyStateShard, $RenderType$OutlineProperty_, $RenderStateShard$EmptyTextureStateShard, $RenderType$CompositeState, $RenderStateShard$OutputStateShard, $RenderStateShard$ShaderStateShard, $RenderStateShard$WriteMaskStateShard, $RenderStateShard, $RenderStateShard$DepthTestStateShard, $RenderStateShard$LightmapStateShard, $RenderStateShard$ColorLogicStateShard, $RenderStateShard$LayeringStateShard } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
export * as layer from "@package/foundry/veil/api/client/render/rendertype/layer";

declare module "@package/foundry/veil/api/client/render/rendertype" {
    export class $VeilRenderTypeBuilder {
    }
    export interface $VeilRenderTypeBuilder {
        create(arg0: $RenderType$OutlineProperty_): $RenderType$CompositeState;
        create(arg0: boolean): $RenderType$CompositeState;
        lineState(arg0: $RenderStateShard$LineStateShard): $VeilRenderTypeBuilder;
        addLayer(arg0: $RenderStateShard): $VeilRenderTypeBuilder;
        cullState(arg0: $RenderStateShard$CullStateShard): $VeilRenderTypeBuilder;
        outputState(arg0: $RenderStateShard$OutputStateShard): $VeilRenderTypeBuilder;
        textureState(arg0: $RenderStateShard$EmptyTextureStateShard): $VeilRenderTypeBuilder;
        texturingState(arg0: $RenderStateShard$TexturingStateShard): $VeilRenderTypeBuilder;
        lightmapState(arg0: $RenderStateShard$LightmapStateShard): $VeilRenderTypeBuilder;
        shaderState(arg0: $RenderStateShard$ShaderStateShard): $VeilRenderTypeBuilder;
        colorLogicState(arg0: $RenderStateShard$ColorLogicStateShard): $VeilRenderTypeBuilder;
        depthTestState(arg0: $RenderStateShard$DepthTestStateShard): $VeilRenderTypeBuilder;
        layeringState(arg0: $RenderStateShard$LayeringStateShard): $VeilRenderTypeBuilder;
        writeMaskState(arg0: $RenderStateShard$WriteMaskStateShard): $VeilRenderTypeBuilder;
        overlayState(arg0: $RenderStateShard$OverlayStateShard): $VeilRenderTypeBuilder;
        transparencyState(arg0: $RenderStateShard$TransparencyStateShard): $VeilRenderTypeBuilder;
    }
    export class $VeilRenderTypeAccessor {
    }
    export interface $VeilRenderTypeAccessor {
        states(): $List<$RenderStateShard>;
        lineState(): $RenderStateShard$LineStateShard;
        cullState(): $RenderStateShard$CullStateShard;
        outputState(): $RenderStateShard$OutputStateShard;
        outlineProperty(): $RenderType$OutlineProperty;
        textureState(): $RenderStateShard$EmptyTextureStateShard;
        texturingState(): $RenderStateShard$TexturingStateShard;
        lightmapState(): $RenderStateShard$LightmapStateShard;
        shaderState(): $RenderStateShard$ShaderStateShard;
        veilShaderId(): $ResourceLocation;
        colorLogicState(): $RenderStateShard$ColorLogicStateShard;
        depthTestState(): $RenderStateShard$DepthTestStateShard;
        layeringState(): $RenderStateShard$LayeringStateShard;
        writeMaskState(): $RenderStateShard$WriteMaskStateShard;
        overlayState(): $RenderStateShard$OverlayStateShard;
        transparencyState(): $RenderStateShard$TransparencyStateShard;
    }
}
