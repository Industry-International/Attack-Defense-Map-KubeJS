import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $List_, $List } from "@package/java/util";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/dev/tr7zw/trender/gui/impl/mixin/client" {
    export class $DrawContextAccessor {
    }
    export interface $DrawContextAccessor {
        libgui$getVertexConsumers(): $MultiBufferSource$BufferSource;
    }
    /**
     * Values that may be interpreted as {@link $DrawContextAccessor}.
     */
    export type $DrawContextAccessor_ = (() => $MultiBufferSource$BufferSource);
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        libgui$getChildren(): $List<$GuiEventListener>;
    }
    /**
     * Values that may be interpreted as {@link $ScreenAccessor}.
     */
    export type $ScreenAccessor_ = (() => $List_<$GuiEventListener>);
}
