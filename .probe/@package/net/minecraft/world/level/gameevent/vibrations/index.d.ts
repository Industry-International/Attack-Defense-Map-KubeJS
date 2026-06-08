import { $Level_ } from "@package/net/minecraft/world/level";
import { $ToIntFunction } from "@package/java/util/function";
import { $TagKey } from "@package/net/minecraft/tags";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $GameEventListener, $PositionSource, $GameEvent, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $Record } from "@package/java/lang";
import { $UUID, $List, $UUID_ } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/gameevent/vibrations" {
    export class $VibrationSystem$User {
    }
    export interface $VibrationSystem$User {
        canReceiveVibration(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Holder_<$GameEvent>, arg3: $GameEvent$Context_): boolean;
        getPositionSource(): $PositionSource;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        getListenerRadius(): number;
        onReceiveVibration(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Holder_<$GameEvent>, arg3: $Entity, arg4: $Entity, arg5: number): void;
        requiresAdjacentChunksToBeTicking(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        get positionSource(): $PositionSource;
        get listenerRadius(): number;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $VibrationSystem$Data {
        shouldReloadVibrationParticle(): boolean;
        getSelectionStrategy(): $VibrationSelector;
        getCurrentVibration(): $VibrationInfo;
        setCurrentVibration(arg0: $VibrationInfo_): void;
        decrementTravelTime(): void;
        getTravelTimeInTicks(): number;
        setTravelTimeInTicks(arg0: number): void;
        setReloadVibrationParticle(arg0: boolean): void;
        selectionStrategy: $VibrationSelector;
        static CODEC: $Codec<$VibrationSystem$Data>;
        static NBT_TAG_KEY: string;
        currentVibration: $VibrationInfo;
        constructor();
        set reloadVibrationParticle(value: boolean);
    }
    export class $VibrationSelector {
        startOver(): void;
        chosenCandidate(arg0: number): ($VibrationInfo) | undefined;
        addCandidate(arg0: $VibrationInfo_, arg1: number): void;
        static CODEC: $Codec<$VibrationSelector>;
        constructor(arg0: ($VibrationInfo_) | undefined, arg1: number);
        constructor();
    }
    export class $VibrationInfo extends $Record {
        pos(): $Vec3;
        distance(): number;
        entity(): $Entity;
        uuid(): $UUID;
        getEntity(arg0: $ServerLevel): ($Entity) | undefined;
        gameEvent(): $Holder<$GameEvent>;
        getProjectileOwner(arg0: $ServerLevel): ($Entity) | undefined;
        projectileOwnerUuid(): $UUID;
        static CODEC: $Codec<$VibrationInfo>;
        constructor(arg0: $Holder_<$GameEvent>, arg1: number, arg2: $Vec3_, arg3: $UUID_, arg4: $UUID_);
        constructor(arg0: $Holder_<$GameEvent>, arg1: number, arg2: $Vec3_, arg3: $UUID_, arg4: $UUID_, arg5: $Entity);
        constructor(arg0: $Holder_<$GameEvent>, arg1: number, arg2: $Vec3_, arg3: $Entity);
    }
    export class $VibrationSystem$Ticker {
        static tick(arg0: $Level_, arg1: $VibrationSystem$Data, arg2: $VibrationSystem$User): void;
    }
    export interface $VibrationSystem$Ticker {
    }
    export class $VibrationSystem {
        static getResonanceEventByFrequency(arg0: number): $ResourceKey<$GameEvent>;
        static getGameEventFrequency(arg0: $ResourceKey_<$GameEvent>): number;
        static getGameEventFrequency(arg0: $Holder_<$GameEvent>): number;
        static getRedstoneStrengthForDistance(arg0: number, arg1: number): number;
        static DEFAULT_VIBRATION_FREQUENCY: number;
        static RESONANCE_EVENTS: $List<$ResourceKey<$GameEvent>>;
        /**
         * @deprecated
         */
        static VIBRATION_FREQUENCY_FOR_EVENT: $ToIntFunction<$ResourceKey<$GameEvent>>;
    }
    export interface $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        getVibrationData(): $VibrationSystem$Data;
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
    }
    export class $VibrationSystem$Listener implements $GameEventListener {
        forceScheduleVibration(arg0: $ServerLevel, arg1: $Holder_<$GameEvent>, arg2: $GameEvent$Context_, arg3: $Vec3_): void;
        handleGameEvent(arg0: $ServerLevel, arg1: $Holder_<$GameEvent>, arg2: $GameEvent$Context_, arg3: $Vec3_): boolean;
        getListenerSource(): $PositionSource;
        getListenerRadius(): number;
        static distanceBetweenInBlocks(arg0: $BlockPos_, arg1: $BlockPos_): number;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        constructor(arg0: $VibrationSystem);
        get listenerSource(): $PositionSource;
        get listenerRadius(): number;
        get deliveryMode(): $GameEventListener$DeliveryMode;
    }
}
