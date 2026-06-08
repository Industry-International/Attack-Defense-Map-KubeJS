import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ScheduledExecutorService, $ScheduledFuture } from "@package/java/util/concurrent";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $IGunOperator } from "@package/com/tacz/guns/api/entity";

declare module "@package/com/tacz/guns/client/gameplay" {
    export class $LocalPlayerDataHolder {
        reset(): void;
        lockState(arg0: $Predicate_<$IGunOperator>): void;
        tickStateLock(): void;
        clientShootTimestamp: number;
        isShootRecorded: boolean;
        isBolting: boolean;
        static clientClickButtonTimestamp: number;
        lockTimestamp: number;
        clientBaseTimestamp: number;
        clientIsAiming: boolean;
        clientLastShootTimestamp: number;
        clientStateLock: boolean;
        static SCHEDULED_EXECUTOR_SERVICE: $ScheduledExecutorService;
        clientDrawTimestamp: number;
        static oldAimingProgress: number;
        clientAimingProgress: number;
        clientAimingTimestamp: number;
        drawFuture: $ScheduledFuture<never>;
        lockedCondition: $Predicate<$IGunOperator>;
        constructor(arg0: $LocalPlayer);
    }
}
