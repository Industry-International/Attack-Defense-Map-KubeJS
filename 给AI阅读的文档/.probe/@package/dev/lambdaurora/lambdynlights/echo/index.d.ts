import { $LineLightBehavior, $BeaconLightBehavior, $BeaconLightBehavior_ } from "@package/dev/lambdaurora/lambdynlights/api/behavior";
import { $Guardian } from "@package/net/minecraft/world/entity/monster";

declare module "@package/dev/lambdaurora/lambdynlights/echo" {
    export class $BeaconBlockEntityLightSource {
    }
    export interface $BeaconBlockEntityLightSource {
        lambdynlights$getDynamicLightBeam(): $BeaconLightBehavior;
        lambdynlights$setDynamicLightBeam(arg0: $BeaconLightBehavior_): void;
        lambdynlights$getLevels(): number;
    }
    export class $GuardianEntityLightSource {
        static tick(guardian: $Guardian): void;
    }
    export interface $GuardianEntityLightSource {
        lambdynlights$getDynamicLightBeam(): $LineLightBehavior;
        lambdynlights$setDynamicLightBeam(arg0: $LineLightBehavior): void;
    }
}
