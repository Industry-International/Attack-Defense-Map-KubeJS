import { $Level_ } from "@package/net/minecraft/world/level";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $SectionPos } from "@package/net/minecraft/core";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BoundingBox3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $PhysicsPipeline } from "@package/dev/ryanhcode/sable/api/physics";
import { $LevelChunkSection } from "@package/net/minecraft/world/level/chunk";
import { $Iterable } from "@package/java/lang";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ServerSubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/dev/ryanhcode/sable/sublevel/system/ticket" {
    export class $PhysicsChunkTicketManager {
        update(arg0: $ServerLevel, arg1: $ServerSubLevelContainer, arg2: $SubLevelPhysicsSystem, arg3: $PhysicsPipeline, arg4: number): void;
        queryIntersecting(arg0: $BoundingBox3dc): $Iterable<$SubLevel>;
        addTicketForSection(arg0: $ServerLevel, arg1: $SectionPos): void;
        addSectionIfNotTracked(arg0: $ServerLevel, arg1: $LevelChunkSection, arg2: $SectionPos, arg3: $PhysicsPipeline): void;
        static isChunkLoadedEnough(arg0: $ServerLevel, arg1: number, arg2: number): boolean;
        wouldBeLoaded(arg0: $Level_, arg1: $ArbitraryPhysicsObject): boolean;
        static MAX_PREDICTION_DISTANCE: number;
        constructor();
    }
}
