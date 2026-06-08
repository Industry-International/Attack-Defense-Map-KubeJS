import { $RenderStateShard$TexturingStateShard, $RenderType$OutlineProperty, $RenderStateShard$LineStateShard, $RenderStateShard$OverlayStateShard, $RenderStateShard$CullStateShard, $RenderStateShard$TransparencyStateShard, $RenderType$OutlineProperty_, $RenderStateShard$EmptyTextureStateShard, $RenderType$CompositeState, $RenderStateShard$OutputStateShard, $RenderStateShard$ShaderStateShard, $RenderStateShard$WriteMaskStateShard, $RenderStateShard$DepthTestStateShard, $RenderStateShard, $RenderStateShard$LightmapStateShard, $RenderStateShard$ColorLogicStateShard, $RenderStateShard$LayeringStateShard } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
export * as layer from "@package/foundry/veil/api/client/render/rendertype/layer";

declare module "@package/foundry/veil/api/client/render/rendertype" {
    export class $VeilRenderTypeBuilder {
    }
    export interface $VeilRenderTypeBuilder {
        create(arg0: $RenderType$OutlineProperty_): $RenderType$CompositeState;
        create(arg0: boolean): $RenderType$CompositeState;
        textureState(arg0: $RenderStateShard$EmptyTextureStateShard): $VeilRenderTypeBuilder;
        cullState(arg0: $RenderStateShard$CullStateShard): $VeilRenderTypeBuilder;
        addLayer(arg0: $RenderStateShard): $VeilRenderTypeBuilder;
        lineState(arg0: $RenderStateShard$LineStateShard): $VeilRenderTypeBuilder;
        shaderState(arg0: $RenderStateShard$ShaderStateShard): $VeilRenderTypeBuilder;
        lightmapState(arg0: $RenderStateShard$LightmapStateShard): $VeilRenderTypeBuilder;
        texturingState(arg0: $RenderStateShard$TexturingStateShard): $VeilRenderTypeBuilder;
        colorLogicState(arg0: $RenderStateShard$ColorLogicStateShard): $VeilRenderTypeBuilder;
        transparencyState(arg0: $RenderStateShard$TransparencyStateShard): $VeilRenderTypeBuilder;
        overlayState(arg0: $RenderStateShard$OverlayStateShard): $VeilRenderTypeBuilder;
        writeMaskState(arg0: $RenderStateShard$WriteMaskStateShard): $VeilRenderTypeBuilder;
        layeringState(arg0: $RenderStateShard$LayeringStateShard): $VeilRenderTypeBuilder;
        depthTestState(arg0: $RenderStateShard$DepthTestStateShard): $VeilRenderTypeBuilder;
        outputState(arg0: $RenderStateShard$OutputStateShard): $VeilRenderTypeBuilder;
    }
    export class $VeilRenderTypeAccessor {
    }
    export interface $VeilRenderTypeAccessor {
        states(): $List<$RenderStateShard>;
        textureState(): $RenderStateShard$EmptyTextureStateShard;
        outlineProperty(): $RenderType$OutlineProperty;
        cullState(): $RenderStateShard$CullStateShard;
        lineState(): $RenderStateShard$LineStateShard;
        shaderState(): $RenderStateShard$ShaderStateShard;
        lightmapState(): $RenderStateShard$LightmapStateShard;
        texturingState(): $RenderStateShard$TexturingStateShard;
        colorLogicState(): $RenderStateShard$ColorLogicStateShard;
        transparencyState(): $RenderStateShard$TransparencyStateShard;
        veilShaderId(): $ResourceLocation;
        overlayState(): $RenderStateShard$OverlayStateShard;
        writeMaskState(): $RenderStateShard$WriteMaskStateShard;
        layeringState(): $RenderStateShard$LayeringStateShard;
        depthTestState(): $RenderStateShard$DepthTestStateShard;
        outputState(): $RenderStateShard$OutputStateShard;
    }
}
