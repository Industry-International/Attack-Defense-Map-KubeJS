import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ServerGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $AutoCloseable } from "@package/java/lang";

declare module "@package/net/minecraft/client/multiplayer/prediction" {
    export class $BlockStatePredictionHandler$ServerVerifiedState {
    }
    export class $PredictiveAction {
    }
    export interface $PredictiveAction {
        predict(arg0: number): $Packet<$ServerGamePacketListener>;
    }
    /**
     * Values that may be interpreted as {@link $PredictiveAction}.
     */
    export type $PredictiveAction_ = ((arg0: number) => $Packet<$ServerGamePacketListener>);
    export class $BlockStatePredictionHandler implements $AutoCloseable {
        close(): void;
        updateKnownServerState(arg0: $BlockPos_, arg1: $BlockState_): boolean;
        retainKnownServerState(arg0: $BlockPos_, arg1: $BlockState_, arg2: $LocalPlayer): void;
        retainSnapshot(arg0: $BlockPos_, arg1: $BlockSnapshot): void;
        isPredicting(): boolean;
        endPredictionsUpTo(arg0: number, arg1: $ClientLevel): void;
        currentSequence(): number;
        startPredicting(): $BlockStatePredictionHandler;
        constructor();
        get predicting(): boolean;
    }
}
