import { $Event } from "@package/net/neoforged/bus/api";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $MapDecorationTextureManager } from "@package/net/minecraft/client/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MapDecoration, $MapDecorationType_, $MapDecoration_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Map_ } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/neoforge/client/gui/map" {
    export class $MapDecorationRendererManager {
        static init(): void;
        static render(arg0: $MapDecoration_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $MapItemSavedData, arg4: $MapDecorationTextureManager, arg5: boolean, arg6: number, arg7: number): boolean;
    }
    export class $IMapDecorationRenderer {
    }
    export interface $IMapDecorationRenderer {
        render(arg0: $MapDecoration_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $MapItemSavedData, arg4: $MapDecorationTextureManager, arg5: boolean, arg6: number, arg7: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IMapDecorationRenderer}.
     */
    export type $IMapDecorationRenderer_ = ((arg0: $MapDecoration, arg1: $PoseStack, arg2: $MultiBufferSource, arg3: $MapItemSavedData, arg4: $MapDecorationTextureManager, arg5: boolean, arg6: number, arg7: number) => boolean);
    export class $RegisterMapDecorationRenderersEvent extends $Event implements $IModBusEvent {
        register(arg0: $MapDecorationType_, arg1: $IMapDecorationRenderer_): void;
        constructor(arg0: $Map_<$MapDecorationType_, $IMapDecorationRenderer_>);
    }
}
