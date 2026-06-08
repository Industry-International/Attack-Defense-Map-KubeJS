import { $Level, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID, $List, $UUID_, $List_ } from "@package/java/util";
import { $ChatFormatting } from "@package/net/minecraft";
import { $KineticBlockEntityExtension } from "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IPlacerTracked } from "@package/com/mapter/aeroclaims/protect";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IHaveGoggleInformation, $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $Enum } from "@package/java/lang";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        hideStressImpact(): boolean;
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        showCapacityWithAnnotation(): boolean;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getSpeedValue(): number;
        getColor(): number;
        getTextColor(): $ChatFormatting;
        getParticleSpeed(): number;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get speedValue(): number;
        get color(): number;
        get textColor(): $ChatFormatting;
        get particleSpeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $KineticBlockEntityExtension, $IPlacerTracked {
        setSource(arg0: $BlockPos_): void;
        simulated$getConnectedToExtraKinetics(): boolean;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        getOrCreateNetwork(): $KineticNetwork;
        getFlickerScore(): number;
        getGeneratedSpeed(): number;
        removeSource(): void;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        attachKinetics(): void;
        detachKinetics(): void;
        needsSpeedUpdate(): boolean;
        static convertToAngular(arg0: number): number;
        static convertToLinear(arg0: number): number;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        isOverStressed(): boolean;
        onSpeedChanged(arg0: number): void;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        calculateAddedStressCapacity(): number;
        isSpeedRequirementFulfilled(): boolean;
        simulated$setValidationCountdown(arg0: number): void;
        setSpeed(arg0: number): void;
        getSpeed(): number;
        isSource(): boolean;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        handler$edf000$simulated$addExtraKineticsInfo(arg0: $List_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        aeroclaims$setPlacerUUID(arg0: $UUID_): void;
        getTheoreticalSpeed(): number;
        calculateStressApplied(): number;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        aeroclaims$getPlacerUUID(): $UUID;
        handler$ecp000$simulated$removeConnected(arg0: $CallbackInfo): void;
        handler$ecp000$simulated$saveConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        redirect$ecp000$simulated$useProperSource2(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        redirect$ecp000$simulated$useProperSource(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        handler$ecp000$simulated$readConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        handler$ecp000$simulated$injectRemove(arg0: $CallbackInfo): void;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        hasNetwork(): boolean;
        hasSource(): boolean;
        tickAudio(): void;
        setNetwork(arg0: number): void;
        warnOfMovement(): void;
        clearKineticInformation(): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get orCreateNetwork(): $KineticNetwork;
        get flickerScore(): number;
        get generatedSpeed(): number;
        get overStressed(): boolean;
        get speedRequirementFulfilled(): boolean;
        get theoreticalSpeed(): number;
    }
}
