import { $Vector3dc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/particle" {
    export class $ParticleSubLevelKickable {
    }
    export interface $ParticleSubLevelKickable {
        sable$shouldKickFromTracking(): boolean;
        sable$getUpDirection(): $Vector3dc;
        sable$shouldCollideWithTrackingSubLevel(): boolean;
        sable$shouldCareAboutIntersectingSubLevels(): boolean;
    }
}
