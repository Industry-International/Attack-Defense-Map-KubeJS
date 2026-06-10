import { $LightSourceSettingEntry } from "@package/dev/lambdaurora/lambdynlights/config";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";

declare module "@package/dev/lambdaurora/lambdynlights/accessor" {
    export class $DynamicLightHandlerHolder<T> {
        static cast<T extends $Entity>(entityType: $EntityType_<T>): $DynamicLightHandlerHolder<T>;
    }
    export interface $DynamicLightHandlerHolder<T> {
        lambdynlights$getSetting(): $LightSourceSettingEntry;
        lambdynlights$getName(): $Component;
        lambdynlights$getId(): $ResourceLocation;
    }
    export class $FrustumStorage {
    }
    export interface $FrustumStorage {
        lambdynlights$getFrustum(): $Frustum;
    }
    /**
     * Values that may be interpreted as {@link $FrustumStorage}.
     */
    export type $FrustumStorage_ = (() => $Frustum);
}
