import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $VertexFormatElement, $VertexFormatElement_ } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/rbasamoyai/createbigcannons/mixin/client" {
    export class $BufferBuilderAccessor {
    }
    export interface $BufferBuilderAccessor {
        callBeginElement(arg0: $VertexFormatElement_): number;
    }
    /**
     * Values that may be interpreted as {@link $BufferBuilderAccessor}.
     */
    export type $BufferBuilderAccessor_ = ((arg0: $VertexFormatElement) => number);
    export class $ClientLevelAccessor {
    }
    export interface $ClientLevelAccessor {
        getLevelRenderer(): $LevelRenderer;
        get levelRenderer(): $LevelRenderer;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelAccessor}.
     */
    export type $ClientLevelAccessor_ = (() => $LevelRenderer);
    export class $Blaze3DAudioChannelAccessor {
    }
    export interface $Blaze3DAudioChannelAccessor {
        getSource(): number;
        get source(): number;
    }
    /**
     * Values that may be interpreted as {@link $Blaze3DAudioChannelAccessor}.
     */
    export type $Blaze3DAudioChannelAccessor_ = (() => number);
}
