import { $Consumer_ } from "@package/java/util/function";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $KeyMappingControllerManager } from "@package/xaero/hud/controls/key";
export * as key from "@package/xaero/hud/controls/key";

declare module "@package/xaero/hud/controls" {
    export class $ControlsRegister {
        registerKeybindings(arg0: $Consumer_<$KeyMapping>): void;
        getKeyMappingControllers(): $KeyMappingControllerManager;
        onStage2(): void;
        get keyMappingControllers(): $KeyMappingControllerManager;
    }
}
