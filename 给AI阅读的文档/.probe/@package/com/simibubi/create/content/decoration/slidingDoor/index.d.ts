import { $Consumer_ } from "@package/java/util/function";
import { $Label, $ScrollInput } from "@package/com/simibubi/create/foundation/gui/widget";
import { $Direction_ } from "@package/net/minecraft/core";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/decoration/slidingDoor" {
    export class $DoorControlBehaviour extends $BlockEntityBehaviour {
        set(arg0: $DoorControl_): void;
        mode: $DoorControl;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$DoorControlBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $DoorControl extends $Enum<$DoorControl> {
        static values(): $DoorControl[];
        static valueOf(arg0: string): $DoorControl;
        matches(arg0: $Direction_): boolean;
        static createWidget(arg0: number, arg1: number, arg2: $Consumer_<$DoorControl>, arg3: $DoorControl_): $Pair<$ScrollInput, $Label>;
        static ALL: $DoorControl;
        static NORTH: $DoorControl;
        static WEST: $DoorControl;
        static SOUTH: $DoorControl;
        static NONE: $DoorControl;
        static EAST: $DoorControl;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DoorControl>;
    }
    /**
     * Values that may be interpreted as {@link $DoorControl}.
     */
    export type $DoorControl_ = "all" | "north" | "east" | "south" | "west" | "none";
}
