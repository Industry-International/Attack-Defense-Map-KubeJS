import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ISnappingSequenceContext } from "@package/dev/tr4shy/thruster/content/tilt_adapter";
import { $AllGuiTextures, $AllGuiTextures_ } from "@package/com/simibubi/create/foundation/gui";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/kinetics/transmission/sequencer" {
    export class $SequencerInstructions extends $Enum<$SequencerInstructions> {
        static values(): $SequencerInstructions[];
        static valueOf(arg0: string): $SequencerInstructions;
        needsPropagation(): boolean;
        static invokeInit$create_connected_$md$dd6cb9$1(arg0: string, arg1: number, arg2: string, arg3: $AllGuiTextures_, arg4: boolean, arg5: boolean, arg6: number, arg7: number, arg8: number): $SequencerInstructions;
        static invokeInit$create_connected_$md$dd6cb9$0(arg0: string, arg1: number, arg2: string, arg3: $AllGuiTextures_): $SequencerInstructions;
        translationKey: string;
        maxValue: number;
        defaultValue: number;
        static AWAIT: $SequencerInstructions;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SequencerInstructions>;
        static TURN_DISTANCE: $SequencerInstructions;
        shiftStep: number;
        descriptiveTranslationKey: string;
        hasValueParameter: boolean;
        background: $AllGuiTextures;
        parameterKey: string;
        hasSpeedParameter: boolean;
        static END: $SequencerInstructions;
        static TURN_ANGLE: $SequencerInstructions;
        static DELAY: $SequencerInstructions;
    }
    /**
     * Values that may be interpreted as {@link $SequencerInstructions}.
     */
    export type $SequencerInstructions_ = "turn_angle" | "turn_distance" | "delay" | "await" | "end" | "turn_await" | "turn_time" | "loop";
    export class $SequencedGearshiftBlockEntity$SequenceContext extends $Record implements $ISnappingSequenceContext {
        static fromNBT(arg0: $CompoundTag_): $SequencedGearshiftBlockEntity$SequenceContext;
        static fromGearshift(arg0: $SequencerInstructions_, arg1: number, arg2: number): $SequencedGearshiftBlockEntity$SequenceContext;
        instruction(): $SequencerInstructions;
        serializeNBT(): $CompoundTag;
        shouldSnapToZero(): boolean;
        getEffectiveValue(arg0: number): number;
        relativeValue(): number;
        setSnapToZero(arg0: boolean): void;
        constructor(instruction: $SequencerInstructions_, relativeValue: number);
        set snapToZero(value: boolean);
    }
}
