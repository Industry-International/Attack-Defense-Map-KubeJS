import { $Level } from "@package/net/minecraft/world/level";
import { $TrackNodeLocation, $TrackGraph } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SingleBlockEntityEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $Enum } from "@package/java/lang";
import { $UUID } from "@package/java/util";
import { $TravellingPoint$SteerDirection_ } from "@package/com/simibubi/create/content/trains/entity";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/com/railwayteam/railways/content/switches" {
    export class $TrackSwitch extends $SingleBlockEntityEdgePoint {
        isAutomatic(): boolean;
        isLocked(): boolean;
        static getSelectionPriority(): number;
        getSwitchState(): $TrackSwitchBlock$SwitchState;
        trySetSwitchState(arg0: $TrackSwitchBlock$SwitchState_): boolean;
        getTargetState(arg0: $TrackNodeLocation): $TrackSwitchBlock$SwitchState;
        shouldAutoTrainsSwitch(): boolean;
        getSwitchTarget(): $TrackNodeLocation;
        setEdgesActive(arg0: $TrackGraph): void;
        hasStraightExit(): boolean;
        hasRightExit(): boolean;
        setSwitchState(arg0: $TrackSwitchBlock$SwitchState_): boolean;
        updateEdges(arg0: $TrackGraph): void;
        hasLeftExit(): boolean;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        blockEntityDimension: $ResourceKey<$Level>;
        id: $UUID;
        position: number;
        constructor();
        get automatic(): boolean;
        get locked(): boolean;
        static get selectionPriority(): number;
        get switchTarget(): $TrackNodeLocation;
        set edgesActive(value: $TrackGraph);
    }
    export class $TrackSwitchBlock$SwitchState extends $Enum<$TrackSwitchBlock$SwitchState> implements $StringRepresentable {
        static values(): $TrackSwitchBlock$SwitchState[];
        static valueOf(arg0: string): $TrackSwitchBlock$SwitchState;
        canSwitchTo(arg0: $TrackSwitchBlock$SwitchState_, arg1: $TrackSwitchBlock$SwitchConstraint): boolean;
        getSerializedName(): string;
        nextStateFor(arg0: $TrackSwitch, arg1: $TrackSwitchBlock$SwitchConstraint): $TrackSwitchBlock$SwitchState;
        static fromSteerDirection(arg0: $TravellingPoint$SteerDirection_, arg1: boolean): $TrackSwitchBlock$SwitchState;
        nextStateForPonder(arg0: $TrackSwitchBlock$SwitchConstraint): $TrackSwitchBlock$SwitchState;
        getRemappedEnumConstantName(): string;
        static REVERSE_RIGHT: $TrackSwitchBlock$SwitchState;
        static NORMAL: $TrackSwitchBlock$SwitchState;
        static REVERSE_LEFT: $TrackSwitchBlock$SwitchState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TrackSwitchBlock$SwitchState}.
     */
    export type $TrackSwitchBlock$SwitchState_ = "normal" | "reverse_left" | "reverse_right";
}
