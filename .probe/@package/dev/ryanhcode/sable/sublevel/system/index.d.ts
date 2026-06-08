import { $Level_ } from "@package/net/minecraft/world/level";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $BoundingBox3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $PhysicsPipeline } from "@package/dev/ryanhcode/sable/api/physics";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $SubLevelRemovalReason_ } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $LevelChunkSection } from "@package/net/minecraft/world/level/chunk";
import { $UUID_ } from "@package/java/util";
import { $SubLevel, $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $PhysicsConfigData } from "@package/dev/ryanhcode/sable/physics/config";
import { $PhysicsChunkTicketManager } from "@package/dev/ryanhcode/sable/sublevel/system/ticket";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Iterable } from "@package/java/lang";
import { $SubLevelObserver, $SubLevelTrackingPlugin, $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
export * as ticket from "@package/dev/ryanhcode/sable/sublevel/system/ticket";

declare module "@package/dev/ryanhcode/sable/sublevel/system" {
    export class $SubLevelPhysicsSystem implements $SubLevelObserver {
        static get(arg0: $Level_): $SubLevelPhysicsSystem;
        initialize(): void;
        tick(arg0: $SubLevelContainer): void;
        getLevel(): $ServerLevel;
        removeObject(arg0: $ArbitraryPhysicsObject): void;
        getConfig(): $PhysicsConfigData;
        handleBlockChange(arg0: $SectionPos, arg1: $LevelChunkSection, arg2: number, arg3: number, arg4: number, arg5: $BlockState_, arg6: $BlockState_): void;
        getPhysicsHandle(arg0: $ServerSubLevel): $RigidBodyHandle;
        addObject(arg0: $ArbitraryPhysicsObject): void;
        getTicketManager(): $PhysicsChunkTicketManager;
        getPipeline(): $PhysicsPipeline;
        onSubLevelAdded(arg0: $SubLevel): void;
        onSubLevelRemoved(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        queryIntersecting(arg0: $BoundingBox3dc): $Iterable<$SubLevel>;
        static require(arg0: $Level_): $SubLevelPhysicsSystem;
        setPaused(arg0: boolean): void;
        getArbitraryObjects(): $Iterable<$ArbitraryPhysicsObject>;
        static getCurrentlySteppingSystem(): $SubLevelPhysicsSystem;
        updateMassDataFromBlockChange(arg0: $SubLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: boolean): void;
        getPartialPhysicsTick(): number;
        getPaused(): boolean;
        tryPunch(arg0: $UUID_, arg1: number): boolean;
        updatePose(arg0: $ServerSubLevel): void;
        onConfigUpdated(): void;
        recoverSubLevel(arg0: $ServerSubLevel): boolean;
        wakeUpObjectsAt(arg0: number, arg1: number, arg2: number): void;
        getNextRuntimeID(): number;
        static USE_TICKETS_FOR_QUERIES: boolean;
        static DEFAULT_RESIDENT_CAPACITY: number;
        static currentlySteppingSystem: $SubLevelPhysicsSystem;
        constructor(arg0: $ServerLevel);
        get level(): $ServerLevel;
        get config(): $PhysicsConfigData;
        get ticketManager(): $PhysicsChunkTicketManager;
        get pipeline(): $PhysicsPipeline;
        get arbitraryObjects(): $Iterable<$ArbitraryPhysicsObject>;
        get partialPhysicsTick(): number;
        get nextRuntimeID(): number;
    }
    export class $SubLevelTrackingSystem implements $SubLevelObserver {
        tick(arg0: $SubLevelContainer): void;
        onSubLevelAdded(arg0: $SubLevel): void;
        onSubLevelRemoved(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        addTrackingPlugin(arg0: $SubLevelTrackingPlugin): void;
        serverWidePlayerSink(arg0: $ServerSubLevel): $VeilPacketManager$PacketSink;
        getInterpolationTick(): number;
        constructor(arg0: $ServerLevel);
        get interpolationTick(): number;
    }
}
