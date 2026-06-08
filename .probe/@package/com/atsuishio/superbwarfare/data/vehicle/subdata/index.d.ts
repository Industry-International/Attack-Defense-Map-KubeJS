import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $OBB$Part_, $ParticleTool$ParticleType_, $OBB$Part, $ParticleTool$ParticleType, $OBB } from "@package/com/atsuishio/superbwarfare/tools";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $EnumEntries } from "@package/kotlin/enums";
import { $ObjectToList, $StringOrVec3 } from "@package/com/atsuishio/superbwarfare/data";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
import { $Vec3_, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";

declare module "@package/com/atsuishio/superbwarfare/data/vehicle/subdata" {
    export class $CollisionLevel$Limit$Companion {
        serializer(): $KSerializer<$CollisionLevel$Limit>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $DismountInfo$Companion {
        serializer(): $KSerializer<$DismountInfo>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $OBBInfo$Companion {
        serializer(): $KSerializer<$OBBInfo>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $SeekInfo$Companion {
        serializer(): $KSerializer<$SeekInfo>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CollisionLevel$Companion {
        serializer(): $KSerializer<$CollisionLevel>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $VehicleContainerType$Companion {
        serializer(): $KSerializer<$VehicleContainerType>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $SeekInfo {
        getChangeTargetTime(): number;
        getMinSeekRange(): number;
        getMaxSeekRange(): number;
        getSeekIterative(): number;
        getSeekEnergyCost(): number;
        getMinTargetSize(): number;
        static write$Self$superbwarfare(arg0: $SeekInfo, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        setMinTargetSize(arg0: number): void;
        setSeekIterative(arg0: number): void;
        setSeekEnergyCost(arg0: number): void;
        setMinSeekRange(arg0: number): void;
        setMaxSeekRange(arg0: number): void;
        setChangeTargetTime(arg0: number): void;
        static getMaxSeekRange$annotations(): void;
        static getSeekIterative$annotations(): void;
        static getChangeTargetTime$annotations(): void;
        static getMinSeekRange$annotations(): void;
        static getMinTargetSize$annotations(): void;
        static getSeekEnergyCost$annotations(): void;
        static Companion: $SeekInfo$Companion;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $SerializationConstructorMarker);
        static get maxSeekRange$annotations(): void;
        static get seekIterative$annotations(): void;
        static get changeTargetTime$annotations(): void;
        static get minSeekRange$annotations(): void;
        static get minTargetSize$annotations(): void;
        static get seekEnergyCost$annotations(): void;
    }
    export class $VehicleType extends $Enum<$VehicleType> {
        static values(): $VehicleType[];
        static valueOf(arg0: string): $VehicleType;
        static getEntries(): $EnumEntries<$VehicleType>;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static AA: $VehicleType;
        static DEFENSE: $VehicleType;
        static TANK: $VehicleType;
        static SPECIAL: $VehicleType;
        static Companion: $VehicleType$Companion;
        static APC: $VehicleType;
        static CAR: $VehicleType;
        static ARTILLERY: $VehicleType;
        static AIRPLANE: $VehicleType;
        static HELICOPTER: $VehicleType;
        static DRONE: $VehicleType;
        static EMPTY: $VehicleType;
        static BOAT: $VehicleType;
        static get entries(): $EnumEntries<$VehicleType>;
    }
    /**
     * Values that may be interpreted as {@link $VehicleType}.
     */
    export type $VehicleType_ = "empty" | "tank" | "apc" | "aa" | "airplane" | "helicopter" | "car" | "artillery" | "defense" | "boat" | "drone" | "special";
    export class $CollisionLevel$Limit extends $Record {
        equals(): boolean;
        copy(arg0: number, arg1: number, arg2: boolean): $CollisionLevel$Limit;
        power(): number;
        component1(): number;
        motion(): number;
        component3(): boolean;
        static copy$default(arg0: $CollisionLevel$Limit_, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: $Object): $CollisionLevel$Limit;
        component2(): number;
        static Companion: $CollisionLevel$Limit$Companion;
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    export class $DismountInfo {
        getPosition(): $Vec3;
        setTransform(arg0: string): void;
        setPosition(arg0: $Vec3_): void;
        getTransform(): string;
        getEjectForce(): number;
        getCanEject(): boolean;
        getEjectDirection(): $StringOrVec3;
        getEjectPosition(): $Vec3;
        static write$Self$superbwarfare(arg0: $DismountInfo, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        setEjectForce(arg0: number): void;
        setEjectDirection(arg0: $StringOrVec3): void;
        setCanEject(arg0: boolean): void;
        setEjectPosition(arg0: $Vec3_): void;
        static getEjectForce$annotations(): void;
        static getCanEject$annotations(): void;
        static getTransform$annotations(): void;
        static getPosition$annotations(): void;
        static getEjectDirection$annotations(): void;
        static getEjectPosition$annotations(): void;
        static Companion: $DismountInfo$Companion;
        constructor();
        constructor(arg0: number, arg1: string, arg2: $Vec3_, arg3: boolean, arg4: $Vec3_, arg5: $StringOrVec3, arg6: number, arg7: $SerializationConstructorMarker);
        static get ejectForce$annotations(): void;
        static get canEject$annotations(): void;
        static get transform$annotations(): void;
        static get position$annotations(): void;
        static get ejectDirection$annotations(): void;
        static get ejectPosition$annotations(): void;
    }
    export class $DestroyInfo {
        setExplosionRadius(arg0: number): void;
        setExplosionDamage(arg0: number): void;
        getExplosionRadius(): number;
        getParticleType(): $ParticleTool$ParticleType;
        getNoWreck(): boolean;
        static getExplosionDamage$annotations(): void;
        static getExplosionRadius$annotations(): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getSympatheticDetonationForce(): number;
        getSympatheticDetonationChance(): number;
        getCrashPassengers(): boolean;
        getExplosionDamage(): number;
        getExplodeBlocks(): boolean;
        static write$Self$superbwarfare(arg0: $DestroyInfo, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        getExplodePassengers(): boolean;
        getSympatheticDetonation(): boolean;
        setCrashPassengers(arg0: boolean): void;
        setParticleType(arg0: $ParticleTool$ParticleType_): void;
        setExplodeBlocks(arg0: boolean): void;
        setExplodePassengers(arg0: boolean): void;
        static getNoWreck$annotations(): void;
        setSympatheticDetonation(arg0: boolean): void;
        static getParticleType$annotations(): void;
        setSympatheticDetonationChance(arg0: number): void;
        static getExplodePassengers$annotations(): void;
        setSympatheticDetonationForce(arg0: number): void;
        static getExplodeBlocks$annotations(): void;
        static getCrashPassengers$annotations(): void;
        setNoWreck(arg0: boolean): void;
        static getSympatheticDetonation$annotations(): void;
        static getSympatheticDetonationForce$annotations(): void;
        static getSympatheticDetonationChance$annotations(): void;
        static Companion: $DestroyInfo$Companion;
        constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: $ParticleTool$ParticleType_, arg7: boolean, arg8: number, arg9: number, arg10: boolean, arg11: $SerializationConstructorMarker);
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: $ParticleTool$ParticleType_);
        constructor();
        static get explosionDamage$annotations(): void;
        static get explosionRadius$annotations(): void;
        static get noWreck$annotations(): void;
        static get particleType$annotations(): void;
        static get explodePassengers$annotations(): void;
        static get explodeBlocks$annotations(): void;
        static get crashPassengers$annotations(): void;
        static get sympatheticDetonation$annotations(): void;
        static get sympatheticDetonationForce$annotations(): void;
        static get sympatheticDetonationChance$annotations(): void;
    }
    export class $EngineType extends $Enum<$EngineType> {
        static values(): $EngineType[];
        static valueOf(arg0: string): $EngineType;
        static getEntries(): $EnumEntries<$EngineType>;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static Companion: $EngineType$Companion;
        static WHEEL: $EngineType;
        static AIRCRAFT: $EngineType;
        static TOM6: $EngineType;
        static FIXED: $EngineType;
        static HELICOPTER: $EngineType;
        static SHIP: $EngineType;
        static EMPTY: $EngineType;
        static TRACK: $EngineType;
        static WHEELCHAIR: $EngineType;
        static get entries(): $EnumEntries<$EngineType>;
    }
    /**
     * Values that may be interpreted as {@link $EngineType}.
     */
    export type $EngineType_ = "empty" | "fixed" | "wheel" | "track" | "helicopter" | "ship" | "aircraft" | "wheelchair" | "tom6";
    export class $DestroyInfo$Companion {
        serializer(): $KSerializer<$DestroyInfo>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CollisionLevel {
        getLevel(): number;
        setLevel(arg0: number): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static write$Self$superbwarfare(arg0: $CollisionLevel, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        setPowerLimits(arg0: $List_<$CollisionLevel$Limit_>): void;
        getPowerLimits(): $List<$CollisionLevel$Limit>;
        static getLevel$annotations(): void;
        static getPowerLimits$annotations(): void;
        static Companion: $CollisionLevel$Companion;
        constructor();
        constructor(arg0: number, arg1: number, arg2: $List_<any>, arg3: $SerializationConstructorMarker);
        static get level$annotations(): void;
        static get powerLimits$annotations(): void;
    }
    export class $VehicleContainerType extends $Enum<$VehicleContainerType> {
        static values(): $VehicleContainerType[];
        static valueOf(arg0: string): $VehicleContainerType;
        getSize(): number;
        static getEntries(): $EnumEntries<$VehicleContainerType>;
        hasMenu(): boolean;
        getRow(): number;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        getCol(): number;
        static Companion: $VehicleContainerType$Companion;
        static SMALL: $VehicleContainerType;
        static MINI: $VehicleContainerType;
        static MEDIUM: $VehicleContainerType;
        static LARGE: $VehicleContainerType;
        static ONE: $VehicleContainerType;
        static HUGE: $VehicleContainerType;
        static EMPTY: $VehicleContainerType;
        static SPECIAL: $VehicleContainerType;
        get size(): number;
        static get entries(): $EnumEntries<$VehicleContainerType>;
        get row(): number;
        get col(): number;
    }
    /**
     * Values that may be interpreted as {@link $VehicleContainerType}.
     */
    export type $VehicleContainerType_ = "empty" | "one" | "mini" | "small" | "medium" | "large" | "huge" | "special";
    export class $OBBInfo {
        limit(): void;
        getSize(): $Vec3;
        setSize(arg0: $Vec3_): void;
        getPosition(): $Vec3;
        setTransform(arg0: string): void;
        getRotation(): string;
        setRotation(arg0: string): void;
        setPosition(arg0: $Vec3_): void;
        getTransform(): string;
        getOBB(): $OBB;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static write$Self$superbwarfare(arg0: $OBBInfo, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static getRotation$annotations(): void;
        static getSize$annotations(): void;
        static getPart$annotations(): void;
        static getTransform$annotations(): void;
        static getPosition$annotations(): void;
        getPart(): $OBB$Part;
        setPart(arg0: $OBB$Part_): void;
        static Companion: $OBBInfo$Companion;
        constructor();
        constructor(arg0: number, arg1: $Vec3_, arg2: $Vec3_, arg3: string, arg4: string, arg5: $OBB$Part_, arg6: $SerializationConstructorMarker);
        get OBB(): $OBB;
        static get rotation$annotations(): void;
        static get size$annotations(): void;
        static get part$annotations(): void;
        static get transform$annotations(): void;
        static get position$annotations(): void;
    }
    export class $VehicleType$Companion {
        serializer(): $KSerializer<$VehicleType>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $SeatInfo$Companion {
        serializer(): $KSerializer<$SeatInfo>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $EngineType$Companion {
        serializer(): $KSerializer<$EngineType>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CameraPos {
        getPosition(): $Vec3;
        setTransform(arg0: string): void;
        getDirection(): $StringOrVec3;
        setPosition(arg0: $Vec3_): void;
        getTransform(): string;
        getZoomDirection(): $StringOrVec3;
        setDirection(arg0: $StringOrVec3): void;
        static write$Self$superbwarfare(arg0: $CameraPos, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        getUseAircraftCamera(): boolean;
        getUseFixedCameraPos(): boolean;
        getAircraftCameraPos(): $Vec3;
        getUseSimulate3P(): boolean;
        setZoomPosition(arg0: $Vec3_): void;
        setSimulate3PPos(arg0: $Vec2): void;
        setZoomDirection(arg0: $StringOrVec3): void;
        getSimulate3PPos(): $Vec2;
        setUseSimulate3P(arg0: boolean): void;
        getZoomPosition(): $Vec3;
        setUseFixedCameraPos(arg0: boolean): void;
        setUseAircraftCamera(arg0: boolean): void;
        setAircraftCameraPos(arg0: $Vec3_): void;
        static getDirection$annotations(): void;
        static getTransform$annotations(): void;
        static getPosition$annotations(): void;
        static getSimulate3PPos$annotations(): void;
        static getUseAircraftCamera$annotations(): void;
        static getZoomPosition$annotations(): void;
        static getZoomDirection$annotations(): void;
        static getUseFixedCameraPos$annotations(): void;
        static getUseSimulate3P$annotations(): void;
        static getAircraftCameraPos$annotations(): void;
        static Companion: $CameraPos$Companion;
        constructor();
        constructor(arg0: number, arg1: string, arg2: $Vec3_, arg3: $StringOrVec3, arg4: $Vec3_, arg5: $StringOrVec3, arg6: boolean, arg7: boolean, arg8: $Vec2, arg9: boolean, arg10: $Vec3_, arg11: $SerializationConstructorMarker);
        static get direction$annotations(): void;
        static get transform$annotations(): void;
        static get position$annotations(): void;
        static get simulate3PPos$annotations(): void;
        static get useAircraftCamera$annotations(): void;
        static get zoomPosition$annotations(): void;
        static get zoomDirection$annotations(): void;
        static get useFixedCameraPos$annotations(): void;
        static get useSimulate3P$annotations(): void;
        static get aircraftCameraPos$annotations(): void;
    }
    export class $CameraPos$Companion {
        serializer(): $KSerializer<$CameraPos>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $SeatInfo {
        getPosition(): $Vec3;
        setPosition(arg0: $Vec3_): void;
        setMinYaw(arg0: number): void;
        setMaxYaw(arg0: number): void;
        setBanHand(arg0: boolean): void;
        getMinYaw(): number;
        getMaxYaw(): number;
        weapons(): $List<string>;
        isEnclosed(): boolean;
        getCameraPos(): $CameraPos;
        getSensitivity(): $Vec3;
        getOrientation(): number;
        setOrientation(arg0: number): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getCanRotateBody(): boolean;
        getMaxPitch(): number;
        getMinPitch(): number;
        getCanRotateHead(): boolean;
        getHidePassenger(): boolean;
        getDismountInfo(): $DismountInfo;
        getBanHand(): boolean;
        static write$Self$superbwarfare(arg0: $SeatInfo, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        setHidePassenger(arg0: boolean): void;
        setEnclosed(arg0: boolean): void;
        setCanRotateBody(arg0: boolean): void;
        setCameraPos(arg0: $CameraPos): void;
        setMinPitch(arg0: number): void;
        setCanRotateHead(arg0: boolean): void;
        setMaxPitch(arg0: number): void;
        setDismountInfo(arg0: $DismountInfo): void;
        setSensitivity(arg0: $Vec3_): void;
        static getSensitivity$annotations(): void;
        static isEnclosed$annotations(): void;
        static getMinPitch$annotations(): void;
        static getMinYaw$annotations(): void;
        static getOrientation$annotations(): void;
        static getCameraPos$annotations(): void;
        static getMaxPitch$annotations(): void;
        static getMaxYaw$annotations(): void;
        static getBanHand$annotations(): void;
        static getPose$annotations(): void;
        static getTransform$annotations(): void;
        static getPosition$annotations(): void;
        static getHasThermalImaging$annotations(): void;
        static getCanRotateBody$annotations(): void;
        static getHidePassenger$annotations(): void;
        static getCanRotateHead$annotations(): void;
        static getDismountInfo$annotations(): void;
        static Companion: $SeatInfo$Companion;
        transform: string;
        pose: string;
        hasThermalImaging: boolean;
        constructor();
        constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: string, arg4: string, arg5: $Vec3_, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean, arg10: number, arg11: number, arg12: number, arg13: number, arg14: $ObjectToList<any>, arg15: $CameraPos, arg16: boolean, arg17: $Vec3_, arg18: $DismountInfo, arg19: $SerializationConstructorMarker);
        static get sensitivity$annotations(): void;
        static get enclosed$annotations(): void;
        static get minPitch$annotations(): void;
        static get minYaw$annotations(): void;
        static get orientation$annotations(): void;
        static get cameraPos$annotations(): void;
        static get maxPitch$annotations(): void;
        static get maxYaw$annotations(): void;
        static get banHand$annotations(): void;
        static get pose$annotations(): void;
        static get transform$annotations(): void;
        static get position$annotations(): void;
        static get hasThermalImaging$annotations(): void;
        static get canRotateBody$annotations(): void;
        static get hidePassenger$annotations(): void;
        static get canRotateHead$annotations(): void;
        static get dismountInfo$annotations(): void;
    }
}
