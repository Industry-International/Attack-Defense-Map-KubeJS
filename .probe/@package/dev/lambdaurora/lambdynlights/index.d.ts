import { $Level } from "@package/net/minecraft/world/level";
import { $EntityDynamicLightSourceBehavior } from "@package/dev/lambdaurora/lambdynlights/engine/source";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
export * as engine from "@package/dev/lambdaurora/lambdynlights/engine";
export * as api from "@package/dev/lambdaurora/lambdynlights/api";
export * as shadow from "@package/dev/lambdaurora/lambdynlights/shadow";
export * as echo from "@package/dev/lambdaurora/lambdynlights/echo";
export * as accessor from "@package/dev/lambdaurora/lambdynlights/accessor";
export * as mixin from "@package/dev/lambdaurora/lambdynlights/mixin";
export * as config from "@package/dev/lambdaurora/lambdynlights/config";

declare module "@package/dev/lambdaurora/lambdynlights" {
    /**
     * @deprecated
     */
    export class $DynamicLightSource {
    }
    export interface $DynamicLightSource extends $EntityDynamicLightSourceBehavior {
        lambdynlights$updateDynamicLight(renderer: $LevelRenderer): boolean;
        lambdynlights$scheduleTrackedChunksRebuild(renderer: $LevelRenderer): void;
        getDynamicLightLevel(): $Level;
        get dynamicLightLevel(): $Level;
    }
}
