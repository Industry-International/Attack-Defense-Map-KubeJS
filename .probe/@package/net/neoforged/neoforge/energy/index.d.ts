import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";

declare module "@package/net/neoforged/neoforge/energy" {
    export class $IEnergyStorage {
    }
    export interface $IEnergyStorage {
        canExtract(): boolean;
        canReceive(): boolean;
        extractEnergy(arg0: number, arg1: boolean): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        getEnergyStored(): number;
        getMaxEnergyStored(): number;
        get energyStored(): number;
        get maxEnergyStored(): number;
    }
    export class $EmptyEnergyStorage implements $IEnergyStorage {
        canExtract(): boolean;
        canReceive(): boolean;
        extractEnergy(arg0: number, arg1: boolean): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        getEnergyStored(): number;
        getMaxEnergyStored(): number;
        static INSTANCE: $EmptyEnergyStorage;
        get energyStored(): number;
        get maxEnergyStored(): number;
    }
    export class $EnergyStorage implements $IEnergyStorage, $INBTSerializable<$Tag> {
        canExtract(): boolean;
        canReceive(): boolean;
        extractEnergy(arg0: number, arg1: boolean): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        getEnergyStored(): number;
        getMaxEnergyStored(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $Tag_): void;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        get energyStored(): number;
        get maxEnergyStored(): number;
    }
    export class $ComponentEnergyStorage implements $IEnergyStorage {
        canExtract(): boolean;
        canReceive(): boolean;
        extractEnergy(arg0: number, arg1: boolean): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        getEnergyStored(): number;
        getMaxEnergyStored(): number;
        constructor(arg0: $MutableDataComponentHolder, arg1: $DataComponentType_<number>, arg2: number);
        constructor(arg0: $MutableDataComponentHolder, arg1: $DataComponentType_<number>, arg2: number, arg3: number);
        constructor(arg0: $MutableDataComponentHolder, arg1: $DataComponentType_<number>, arg2: number, arg3: number, arg4: number);
        get energyStored(): number;
        get maxEnergyStored(): number;
    }
}
