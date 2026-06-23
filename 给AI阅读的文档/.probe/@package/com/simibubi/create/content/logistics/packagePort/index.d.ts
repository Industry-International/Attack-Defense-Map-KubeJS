import { $Level, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $MenuProvider, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/packagePort" {
    export class $PackagePortTarget {
        register(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        setup(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        be(arg0: $LevelAccessor, arg1: $BlockPos_): $BlockEntity;
        "export"(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $ItemStack_, arg3: boolean): boolean;
        getIcon(): $ItemStack;
        canSupport(arg0: $BlockEntity): boolean;
        deregister(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        getExactTargetLocation(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): $Vec3;
        depositImmediately(): boolean;
        static CODEC: $Codec<$PackagePortTarget>;
        relativePos: $BlockPos;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackagePortTarget>;
        constructor(arg0: $BlockPos_);
        get icon(): $ItemStack;
    }
    export interface $PackagePortTargetType extends RegistryMarked<RegistryTypes.CreatePackagePortTargetTypeTag, RegistryTypes.CreatePackagePortTargetType> {}
    export class $PackagePortTargetType {
    }
    export interface $PackagePortTargetType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $PackagePortTarget>;
        codec(): $MapCodec<$PackagePortTarget>;
    }
    /**
     * Values that may be interpreted as {@link $PackagePortTargetType}.
     */
    export type $PackagePortTargetType_ = RegistryTypes.CreatePackagePortTargetType;
    export class $PackagePortBlockEntity extends $SmartBlockEntity implements $MenuProvider, $Clearable {
        drop(arg0: $ItemStack_): void;
        use(arg0: $Player): $ItemInteractionResult;
        getDisplayName(): $Component;
        clearContent(): void;
        isBackedUp(): boolean;
        getComparatorOutput(): number;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getFilterString(): string;
        filterChanged(): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        acceptsPackages: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        addressFilter: string;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $SmartInventory;
        target: $PackagePortTarget;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get displayName(): $Component;
        get backedUp(): boolean;
        get comparatorOutput(): number;
        get filterString(): string;
    }
}
