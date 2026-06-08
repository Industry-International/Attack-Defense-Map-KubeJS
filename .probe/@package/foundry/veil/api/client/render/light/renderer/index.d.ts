import { $Consumer_ } from "@package/java/util/function";
import { $CullFrustum } from "@package/foundry/veil/api/client/render";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $LightData } from "@package/foundry/veil/api/client/render/light/data";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $Map, $Collection } from "@package/java/util";
import { $LightTypeRegistry$LightType_, $LightTypeRegistry$LightType } from "@package/foundry/veil/api/client/registry";
import { $NativeResource } from "@package/org/lwjgl/system";

declare module "@package/foundry/veil/api/client/render/light/renderer" {
    export class $LightRenderHandle<T extends $LightData> {
    }
    export interface $LightRenderHandle<T extends $LightData> extends $NativeResource {
        isValid(): boolean;
        markDirty(): void;
        getLightData(): T;
        get valid(): boolean;
        get lightData(): T;
    }
    export class $LightRenderer implements $NativeResource {
        free(): void;
        render(arg0: $CullFrustum, arg1: $AdvancedFbo): boolean;
        addLight<T extends $LightData>(arg0: T): $LightRenderHandle<T>;
        addLight<T extends $LightData>(arg0: $LightRenderHandle<T>): $LightRenderHandle<T>;
        getLights<T extends $LightData>(arg0: $LightTypeRegistry$LightType_<T>): $Collection<$LightRenderHandle<T>>;
        getRenderers(): $Map<$LightTypeRegistry$LightType<never>, $LightTypeRenderer<never>>;
        addDebugInfo(arg0: $Consumer_<string>): void;
        close(): void;
        constructor();
        get renderers(): $Map<$LightTypeRegistry$LightType<never>, $LightTypeRenderer<never>>;
    }
    export class $LightTypeRenderer<T extends $LightData> {
        static createQuad(arg0: $VertexConsumer): void;
        static createInvertedCube(arg0: $VertexConsumer): void;
    }
    export interface $LightTypeRenderer<T extends $LightData> extends $NativeResource {
        addLight(arg0: T): $LightRenderHandle<T>;
        steal(arg0: $LightRenderHandle<T>): $LightRenderHandle<T>;
        getLights(): $Collection<$LightRenderHandle<T>>;
        renderLights(arg0: $LightRenderer): void;
        prepareLights(arg0: $LightRenderer, arg1: $CullFrustum): void;
        getVisibleLights(): number;
        get lights(): $Collection<$LightRenderHandle<T>>;
        get visibleLights(): number;
    }
}
