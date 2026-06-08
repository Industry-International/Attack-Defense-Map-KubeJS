import { $Sniffer$State } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Pose } from "@package/net/minecraft/world/entity";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $UUID, $List, $List_, $OptionalInt } from "@package/java/util";
import { $VillagerData } from "@package/net/minecraft/world/entity/npc";
import { $ClassTreeIdRegistry } from "@package/net/minecraft/util";
import { $CatVariant, $FrogVariant, $WolfVariant } from "@package/net/minecraft/world/entity/animal";
import { $Armadillo$ArmadilloState } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $BlockPos, $GlobalPos, $Rotations, $Direction, $Holder } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record, $Class } from "@package/java/lang";
import { $Quaternionf, $Vector3f } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/syncher" {
    export interface $EntityDataSerializer extends RegistryMarked<RegistryTypes.NeoforgeEntityDataSerializersTag, RegistryTypes.NeoforgeEntityDataSerializers> {}
    export class $SyncedDataHolder {
    }
    export interface $SyncedDataHolder {
        onSyncedDataUpdated(arg0: $EntityDataAccessor_<never>): void;
        onSyncedDataUpdated(arg0: $List_<$SynchedEntityData$DataValue_<never>>): void;
    }
    export class $EntityDataSerializer<T> {
        static forValueType<T>(arg0: $StreamCodec<$RegistryFriendlyByteBuf, T>): $EntityDataSerializer<T>;
    }
    export interface $EntityDataSerializer<T> {
        copy(arg0: T): T;
        codec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        createAccessor(arg0: number): $EntityDataAccessor<T>;
    }
    /**
     * Values that may be interpreted as {@link $EntityDataSerializer}.
     */
    export type $EntityDataSerializer_<T> = RegistryTypes.NeoforgeEntityDataSerializers;
    export class $SynchedEntityData$DataItem<T> {
        value(): $SynchedEntityData$DataValue<T>;
        getValue(): T;
        setValue(arg0: T): void;
        getAccessor(): $EntityDataAccessor<T>;
        isDirty(): boolean;
        setDirty(arg0: boolean): void;
        isSetToDefault(): boolean;
        accessor: $EntityDataAccessor<T>;
        constructor(arg0: $EntityDataAccessor_<T>, arg1: T);
        get setToDefault(): boolean;
    }
    export class $EntityDataSerializers {
        /**
         * @deprecated
         */
        static registerSerializer(arg0: $EntityDataSerializer_<never>): void;
        static getSerializer(arg0: number): $EntityDataSerializer<never>;
        static getSerializedId(arg0: $EntityDataSerializer_<never>): number;
        static FLOAT: $EntityDataSerializer<number>;
        static PARTICLE: $EntityDataSerializer<$ParticleOptions>;
        static PARTICLES: $EntityDataSerializer<$List<$ParticleOptions>>;
        static BLOCK_STATE: $EntityDataSerializer<$BlockState>;
        static OPTIONAL_UUID: $EntityDataSerializer<($UUID) | undefined>;
        static VILLAGER_DATA: $EntityDataSerializer<$VillagerData>;
        static QUATERNION: $EntityDataSerializer<$Quaternionf>;
        static INT: $EntityDataSerializer<number>;
        static BLOCK_POS: $EntityDataSerializer<$BlockPos>;
        static SNIFFER_STATE: $EntityDataSerializer<$Sniffer$State>;
        static OPTIONAL_BLOCK_POS: $EntityDataSerializer<($BlockPos) | undefined>;
        static OPTIONAL_UNSIGNED_INT: $EntityDataSerializer<$OptionalInt>;
        static WOLF_VARIANT: $EntityDataSerializer<$Holder<$WolfVariant>>;
        static BYTE: $EntityDataSerializer<number>;
        static ITEM_STACK: $EntityDataSerializer<$ItemStack>;
        static OPTIONAL_BLOCK_STATE: $EntityDataSerializer<($BlockState) | undefined>;
        static COMPOUND_TAG: $EntityDataSerializer<$CompoundTag>;
        static LONG: $EntityDataSerializer<number>;
        static OPTIONAL_GLOBAL_POS: $EntityDataSerializer<($GlobalPos) | undefined>;
        static PAINTING_VARIANT: $EntityDataSerializer<$Holder<$PaintingVariant>>;
        static DIRECTION: $EntityDataSerializer<$Direction>;
        static BOOLEAN: $EntityDataSerializer<boolean>;
        static CAT_VARIANT: $EntityDataSerializer<$Holder<$CatVariant>>;
        static OPTIONAL_COMPONENT: $EntityDataSerializer<($Component) | undefined>;
        static POSE: $EntityDataSerializer<$Pose>;
        static ROTATIONS: $EntityDataSerializer<$Rotations>;
        static ARMADILLO_STATE: $EntityDataSerializer<$Armadillo$ArmadilloState>;
        static STRING: $EntityDataSerializer<string>;
        static COMPONENT: $EntityDataSerializer<$Component>;
        static FROG_VARIANT: $EntityDataSerializer<$Holder<$FrogVariant>>;
        static VECTOR3: $EntityDataSerializer<$Vector3f>;
    }
    export class $SynchedEntityData$Builder {
        build(): $SynchedEntityData;
        define<T>(arg0: $EntityDataAccessor_<T>, arg1: T): $SynchedEntityData$Builder;
        constructor(arg0: $SyncedDataHolder);
    }
    export class $EntityDataSerializer$ForValueType<T> {
    }
    export interface $EntityDataSerializer$ForValueType<T> extends $EntityDataSerializer<T> {
        copy(arg0: T): T;
    }
    /**
     * Values that may be interpreted as {@link $EntityDataSerializer$ForValueType}.
     */
    export type $EntityDataSerializer$ForValueType_<T> = (() => void);
    export class $SynchedEntityData$DataValue<T> extends $Record {
        value(): T;
        id(): number;
        write(arg0: $RegistryFriendlyByteBuf): void;
        static read(arg0: $RegistryFriendlyByteBuf, arg1: number): $SynchedEntityData$DataValue<never>;
        static create<T>(arg0: $EntityDataAccessor_<T>, arg1: T): $SynchedEntityData$DataValue<T>;
        serializer(): $EntityDataSerializer<T>;
        constructor(id: number, serializer: $EntityDataSerializer_<T>, value: T);
    }
    export class $EntityDataAccessor<T> extends $Record {
        id(): number;
        serializer(): $EntityDataSerializer<T>;
        constructor(arg0: number, arg1: $EntityDataSerializer_<T>);
    }
    export class $SynchedEntityData {
        get<T>(arg0: $EntityDataAccessor_<T>): T;
        set<T>(arg0: $EntityDataAccessor_<T>, arg1: T): void;
        set<T>(arg0: $EntityDataAccessor_<T>, arg1: T, arg2: boolean): void;
        isDirty(): boolean;
        static defineId<T>(arg0: $Class<$SyncedDataHolder>, arg1: $EntityDataSerializer_<T>): $EntityDataAccessor<T>;
        packDirty(): $List<$SynchedEntityData$DataValue<never>>;
        getNonDefaultValues(): $List<$SynchedEntityData$DataValue<never>>;
        assignValues(arg0: $List_<$SynchedEntityData$DataValue_<never>>): void;
        static ID_REGISTRY: $ClassTreeIdRegistry;
        constructor(arg0: $SyncedDataHolder, arg1: $SynchedEntityData$DataItem<never>[]);
        get dirty(): boolean;
        get nonDefaultValues(): $List<$SynchedEntityData$DataValue<never>>;
    }
}
