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
        addLayer(arg0: $RenderStateShard): $VeilRenderTypeBuilder;
        lineState(arg0: $RenderStateShard$LineStateShard): $VeilRenderTypeBuilder;
        textureState(arg0: $RenderStateShard$EmptyTextureStateShard): $VeilRenderTypeBuilder;
        cullState(arg0: $RenderStateShard$CullStateShard): $VeilRenderTypeBuilder;
        outputState(arg0: $RenderStateShard$OutputStateShard): $VeilRenderTypeBuilder;
        lightmapState(arg0: $RenderStateShard$LightmapStateShard): $VeilRenderTypeBuilder;
        shaderState(arg0: $RenderStateShard$ShaderStateShard): $VeilRenderTypeBuilder;
        depthTestState(arg0: $RenderStateShard$DepthTestStateShard): $VeilRenderTypeBuilder;
        colorLogicState(arg0: $RenderStateShard$ColorLogicStateShard): $VeilRenderTypeBuilder;
        layeringState(arg0: $RenderStateShard$LayeringStateShard): $VeilRenderTypeBuilder;
        transparencyState(arg0: $RenderStateShard$TransparencyStateShard): $VeilRenderTypeBuilder;
        overlayState(arg0: $RenderStateShard$OverlayStateShard): $VeilRenderTypeBuilder;
        texturingState(arg0: $RenderStateShard$TexturingStateShard): $VeilRenderTypeBuilder;
        writeMaskState(arg0: $RenderStateShard$WriteMaskStateShard): $VeilRenderTypeBuilder;
    }
    export class $VeilRenderTypeAccessor {
    }
    export interface $VeilRenderTypeAccessor {
        states(): $List<$RenderStateShard>;
        lineState(): $RenderStateShard$LineStateShard;
        outlineProperty(): $RenderType$OutlineProperty;
        textureState(): $RenderStateShard$EmptyTextureStateShard;
        cullState(): $RenderStateShard$CullStateShard;
        outputState(): $RenderStateShard$OutputStateShard;
        lightmapState(): $RenderStateShard$LightmapStateShard;
        shaderState(): $RenderStateShard$ShaderStateShard;
        depthTestState(): $RenderStateShard$DepthTestStateShard;
        colorLogicState(): $RenderStateShard$ColorLogicStateShard;
        layeringState(): $RenderStateShard$LayeringStateShard;
        transparencyState(): $RenderStateShard$TransparencyStateShard;
        overlayState(): $RenderStateShard$OverlayStateShard;
        texturingState(): $RenderStateShard$TexturingStateShard;
        writeMaskState(): $RenderStateShard$WriteMaskStateShard;
        veilShaderId(): $ResourceLocation;
    }
}
