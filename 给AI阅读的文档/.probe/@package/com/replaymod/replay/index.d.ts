import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $List_, $List } from "@package/java/util";
export * as mixin from "@package/com/replaymod/replay/mixin";
export * as ext from "@package/com/replaymod/replay/ext";

declare module "@package/com/replaymod/replay" {
    export class $ScreenButtonExtension {
    }
    export interface $ScreenButtonExtension {
        replay_getButtons(): $List<$AbstractWidget>;
    }
    /**
     * Values that may be interpreted as {@link $ScreenButtonExtension}.
     */
    export type $ScreenButtonExtension_ = (() => $List_<$AbstractWidget>);
}
