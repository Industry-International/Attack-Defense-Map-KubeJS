import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $EnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $LevelBlock, $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $UUID, $List, $EnumSet, $Set_, $Map } from "@package/java/util";
import { $ItemPredicate_, $ItemPredicate } from "@package/dev/latvian/mods/kubejs/item";
import { $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Supplier_, $Predicate_, $Supplier } from "@package/java/util/function";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $RegistryAccess, $Registry, $NonNullList, $Direction } from "@package/net/minecraft/core";
import { $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Record, $Class, $Object } from "@package/java/lang";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $Level } from "@package/net/minecraft/world/level";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/dev/latvian/mods/kubejs/block/entity" {
    export class $BlockEntityAttachmentHandler {
    }
    export interface $BlockEntityAttachmentHandler {
        attach(id: string, type: $ResourceLocation_, directions: $Set_<$Direction_>, args: $Object): void;
        energyStorage(id: string, directions: $Set_<$Direction_>, capacity: number, maxReceive: number, maxExtract: number, autoOutput: number): void;
        inventory(id: string, directions: $Set_<$Direction_>, width: number, height: number): void;
        inventory(id: string, directions: $Set_<$Direction_>, width: number, height: number, inputFilter: $ItemPredicate_): void;
        fluidTank(id: string, directions: $Set_<$Direction_>, capacity: number, inputFilter: $FluidIngredient_): void;
        fluidTank(id: string, directions: $Set_<$Direction_>, capacity: number): void;
        attachCustomCapability(id: string, directions: $Set_<$Direction_>, capability: $BlockCapability<never, never>, dataFactory: $Supplier_<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAttachmentHandler}.
     */
    export type $BlockEntityAttachmentHandler_ = (() => void);
    export class $KubeBlockEntity extends $BlockEntity {
        save(): void;
        sync(): void;
        getBlock(): $LevelBlock;
        getPlacer(): $Entity;
        sendEvent(eventId: number, data: number): void;
        attachments: $Map<string, $Object>;
        data: $CompoundTag;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        tick: number;
        placerId: $UUID;
        cycle: number;
        remove: boolean;
        blockKey: $ResourceKey<$Block>;
        static TICKER: $BlockEntityTicker<$KubeBlockEntity>;
        worldPosition: $BlockPos;
        x: number;
        y: number;
        z: number;
        info: $BlockEntityInfo;
        constructor(blockPos: $BlockPos_, blockState: $BlockState_, entityInfo: $BlockEntityInfo);
        get block(): $LevelBlock;
        get placer(): $Entity;
    }
    export class $BlockEntityAttachment {
    }
    export interface $BlockEntityAttachment {
        deserialize(registries: $HolderLookup$Provider, tag: $Tag_): void;
        serialize(registries: $HolderLookup$Provider): $Tag;
        getCapability<CAP, SRC>(capability: $BlockCapability<CAP, SRC>): CAP;
        onRemove(level: $ServerLevel, blockEntity: $KubeBlockEntity, newState: $BlockState_): void;
        getWrappedObject(): $Object;
        serverTick(): void;
        get wrappedObject(): $Object;
    }
    export class $BlockEntityBuilder extends $BuilderBase<$BlockEntityType<never>> {
        registryKey: $ResourceKey<$Registry<$BlockEntityType<never>>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        info: $BlockEntityInfo;
        constructor(i: $ResourceLocation_, info: $BlockEntityInfo);
    }
    export class $EnergyStorageAttachment$Factory extends $Record implements $BlockEntityAttachmentFactory {
        create(info: $BlockEntityAttachmentInfo_, entity: $KubeBlockEntity): $BlockEntityAttachment;
        capacity(): number;
        getCapabilities(): $List<$BlockCapability<never, never>>;
        autoOutput(): (number) | undefined;
        maxExtract(): (number) | undefined;
        maxReceive(): (number) | undefined;
        isTicking(): boolean;
        constructor(capacity: number, maxReceive: (number) | undefined, maxExtract: (number) | undefined, autoOutput: (number) | undefined);
        get capabilities(): $List<$BlockCapability<never, never>>;
        get ticking(): boolean;
    }
    export class $BlockEntityAttachmentRegistry {
    }
    export interface $BlockEntityAttachmentRegistry {
        register(id: $ResourceLocation_, factory: $Class<$BlockEntityAttachmentFactory_>): void;
        register(type: $BlockEntityAttachmentType_): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAttachmentRegistry}.
     */
    export type $BlockEntityAttachmentRegistry_ = ((type: $BlockEntityAttachmentType) => void);
    export class $EnergyStorageAttachment implements $BlockEntityAttachment {
        getCapability<CAP, SRC>(capability: $BlockCapability<CAP, SRC>): CAP;
        getWrappedObject(): $Object;
        serverTick(): void;
        deserialize(registries: $HolderLookup$Provider, tag: $Tag_): void;
        serialize(registries: $HolderLookup$Provider): $Tag;
        onRemove(level: $ServerLevel, blockEntity: $KubeBlockEntity, newState: $BlockState_): void;
        autoOutputDirections: $Direction[];
        energyStorage: $EnergyStorageAttachment$Wrapped;
        autoOutput: number;
        static TYPE: $BlockEntityAttachmentType;
        constructor(entity: $KubeBlockEntity, capacity: number, maxReceive: number, maxExtract: number, autoOutput: number, autoOutputDirections: $Direction_[]);
        get wrappedObject(): $Object;
    }
    export class $CustomCapabilityAttachment$Factory extends $Record implements $BlockEntityAttachmentFactory {
        type(): $BlockCapability<never, never>;
        create(info: $BlockEntityAttachmentInfo_, entity: $KubeBlockEntity): $BlockEntityAttachment;
        getCapabilities(): $List<$BlockCapability<never, never>>;
        dataFactory(): $Supplier<never>;
        isTicking(): boolean;
        constructor(type: $BlockCapability<never, never>, dataFactory: $Supplier_<never>);
        get capabilities(): $List<$BlockCapability<never, never>>;
        get ticking(): boolean;
    }
    export class $BlockEntityAttachmentHolder extends $Record {
        info(): $BlockEntityAttachmentInfo;
        attachment(): $BlockEntityAttachment;
        static EMPTY_ARRAY: $BlockEntityAttachmentHolder[];
        constructor(info: $BlockEntityAttachmentInfo_, attachment: $BlockEntityAttachment);
    }
    export class $InventoryAttachment implements $BlockEntityAttachment {
        deserialize(registries: $HolderLookup$Provider, tag: $Tag_): void;
        getCapability<CAP, SRC>(capability: $BlockCapability<CAP, SRC>): CAP;
        onRemove(level: $ServerLevel, blockEntity: $KubeBlockEntity, newState: $BlockState_): void;
        getWrappedObject(): $Object;
        serverTick(): void;
        serialize(registries: $HolderLookup$Provider): $Tag;
        inputFilter: $ItemPredicate;
        blockEntity: $KubeBlockEntity;
        width: number;
        inventory: $InventoryAttachment$Wrapped;
        static TYPE: $BlockEntityAttachmentType;
        height: number;
        constructor(blockEntity: $KubeBlockEntity, width: number, height: number, inputFilter: $ItemPredicate_);
        get wrappedObject(): $Object;
    }
    export class $EnergyStorageAttachment$Wrapped extends $EnergyStorage {
        removeEnergy(remove: number, simulate: boolean): number;
        useEnergy(use: number, simulate: boolean): boolean;
        addEnergy(add: number, simulate: boolean): number;
        setEnergyStored(energy: number): void;
        constructor(attachment: $EnergyStorageAttachment, capacity: number, maxReceive: number, maxExtract: number);
        set energyStored(value: number);
    }
    export class $BlockEntityInfo implements $BlockEntityAttachmentHandler {
        ticking(): void;
        eventHandler(eventId: number, callback: $BlockEntityEventCallback_): void;
        serverTicking(): void;
        clientTicking(): void;
        enableSync(): void;
        tickOffset(offset: number): void;
        initialData(data: $CompoundTag_): void;
        tickFrequency(frequency: number): void;
        rightClickFillsTank(id: string): void;
        rightClickOpensInventory(id: string): void;
        attach(id: string, type: $ResourceLocation_, directions: $Set_<$Direction_>, args: $Object): void;
        energyStorage(id: string, directions: $Set_<$Direction_>, capacity: number, maxReceive: number, maxExtract: number, autoOutput: number): void;
        inventory(id: string, directions: $Set_<$Direction_>, width: number, height: number): void;
        inventory(id: string, directions: $Set_<$Direction_>, width: number, height: number, inputFilter: $ItemPredicate_): void;
        fluidTank(id: string, directions: $Set_<$Direction_>, capacity: number, inputFilter: $FluidIngredient_): void;
        fluidTank(id: string, directions: $Set_<$Direction_>, capacity: number): void;
        attachCustomCapability(id: string, directions: $Set_<$Direction_>, capability: $BlockCapability<never, never>, dataFactory: $Supplier_<never>): void;
        constructor(blockBuilder: $BlockBuilder);
    }
    export class $CustomCapabilityAttachment extends $Record implements $BlockEntityAttachment {
        data(): $Object;
        capability(): $BlockCapability<never, never>;
        getCapability<CAP, SRC>(c: $BlockCapability<CAP, SRC>): CAP;
        getWrappedObject(): $Object;
        deserialize(registries: $HolderLookup$Provider, tag: $Tag_): void;
        serialize(registries: $HolderLookup$Provider): $Tag;
        onRemove(level: $ServerLevel, blockEntity: $KubeBlockEntity, newState: $BlockState_): void;
        serverTick(): void;
        static TYPE: $BlockEntityAttachmentType;
        constructor(capability: $BlockCapability<never, never>, data: $Object);
        get wrappedObject(): $Object;
    }
    export class $BlockEntityAttachmentInfo extends $Record {
        index(): number;
        type(): $BlockEntityAttachmentType;
        factory(): $BlockEntityAttachmentFactory;
        id(): string;
        directions(): $EnumSet<$Direction>;
        constructor(id: string, type: $BlockEntityAttachmentType_, index: number, directions: $EnumSet<$Direction_>, factory: $BlockEntityAttachmentFactory_);
    }
    export class $BlockEntityEventCallback {
    }
    export interface $BlockEntityEventCallback {
        accept(entity: $KubeBlockEntity, data: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityEventCallback}.
     */
    export type $BlockEntityEventCallback_ = ((entity: $KubeBlockEntity, data: number) => void);
    export class $FluidTankAttachment$Factory extends $Record implements $BlockEntityAttachmentFactory {
        create(info: $BlockEntityAttachmentInfo_, entity: $KubeBlockEntity): $BlockEntityAttachment;
        capacity(): number;
        getCapabilities(): $List<$BlockCapability<never, never>>;
        inputFilter(): ($FluidIngredient) | undefined;
        isTicking(): boolean;
        constructor(capacity: number, inputFilter: ($FluidIngredient_) | undefined);
        get capabilities(): $List<$BlockCapability<never, never>>;
        get ticking(): boolean;
    }
    export class $FluidTankAttachment$Wrapped extends $FluidTank {
        constructor(attachment: $FluidTankAttachment, capacity: number, inputFilter: $Predicate_<$FluidStack>);
    }
    export class $FluidTankAttachment implements $BlockEntityAttachment {
        deserialize(registries: $HolderLookup$Provider, tag: $Tag_): void;
        serialize(registries: $HolderLookup$Provider): $Tag;
        getCapability<CAP, SRC>(capability: $BlockCapability<CAP, SRC>): CAP;
        getWrappedObject(): $Object;
        onRemove(level: $ServerLevel, blockEntity: $KubeBlockEntity, newState: $BlockState_): void;
        serverTick(): void;
        fluidTank: $FluidTankAttachment$Wrapped;
        static TYPE: $BlockEntityAttachmentType;
        entity: $KubeBlockEntity;
        constructor(entity: $KubeBlockEntity, capacity: number, filter: $Predicate_<$FluidStack>);
        get wrappedObject(): $Object;
    }
    export class $BlockEntityTickKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getBlock(): $LevelBlock;
        getTick(): number;
        getCycle(): number;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(entity: $KubeBlockEntity);
        get level(): $Level;
        get block(): $LevelBlock;
        get tick(): number;
        get cycle(): number;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $InventoryAttachment$Wrapped extends $ItemStackHandler implements $InventoryKJS {
        stacks(): $NonNullList<$ItemStack>;
        constructor(attachment: $InventoryAttachment);
    }
    export class $BlockEntityAttachmentType extends $Record {
        typeInfo(): $TypeInfo;
        id(): $ResourceLocation;
        static ALL: $Lazy<$Map<$ResourceLocation, $BlockEntityAttachmentType>>;
        constructor(id: $ResourceLocation_, type: $Class<never>);
        constructor(id: $ResourceLocation_, typeInfo: $TypeInfo_);
    }
    export class $InventoryAttachment$Factory extends $Record implements $BlockEntityAttachmentFactory {
        create(info: $BlockEntityAttachmentInfo_, entity: $KubeBlockEntity): $BlockEntityAttachment;
        width(): number;
        height(): number;
        getCapabilities(): $List<$BlockCapability<never, never>>;
        inputFilter(): ($ItemPredicate) | undefined;
        isTicking(): boolean;
        constructor(width: number, height: number, inputFilter: ($ItemPredicate_) | undefined);
        get capabilities(): $List<$BlockCapability<never, never>>;
        get ticking(): boolean;
    }
    export class $BlockEntityAttachmentFactory {
    }
    export interface $BlockEntityAttachmentFactory {
        create(info: $BlockEntityAttachmentInfo_, entity: $KubeBlockEntity): $BlockEntityAttachment;
        getCapabilities(): $List<$BlockCapability<never, never>>;
        isTicking(): boolean;
        get capabilities(): $List<$BlockCapability<never, never>>;
        get ticking(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAttachmentFactory}.
     */
    export type $BlockEntityAttachmentFactory_ = ((info: $BlockEntityAttachmentInfo, entity: $KubeBlockEntity) => $BlockEntityAttachment);
}
