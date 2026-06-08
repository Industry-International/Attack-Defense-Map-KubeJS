import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Map, $List_ } from "@package/java/util";
import { $PlayerEvent$Clone } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer_, $UnaryOperator_, $Predicate_, $BiPredicate_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $AttachmentHolderAccessor, $IAttachmentHolderMixin, $AttachmentTypeAccessor } from "@package/net/fabricmc/fabric/mixin/attachment";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AttachmentType as $AttachmentType$1, $AttachmentTarget } from "@package/net/fabricmc/fabric/api/attachment/v1";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $LivingConversionEvent$Post } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Object } from "@package/java/lang";
import { $ChunkWatchEvent$Sent } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $AddCallback } from "@package/net/neoforged/neoforge/registries/callback";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/attachment" {
    export class $AttachmentInternals {
        static onPlayerClone(arg0: $PlayerEvent$Clone): void;
        static copyEntityAttachments(arg0: $Entity, arg1: $Entity, arg2: boolean): void;
        static onLivingConvert(arg0: $LivingConversionEvent$Post): void;
        static copyChunkAttachmentsOnPromotion(arg0: $HolderLookup$Provider, arg1: $AttachmentHolder$AsField, arg2: $AttachmentHolder$AsField): void;
    }
    export class $AttachmentHolder implements $IAttachmentHolder, $AttachmentHolderAccessor {
        getData<T>(arg0: $AttachmentType_<T>): T;
        removeData<T>(arg0: $AttachmentType_<T>): T;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        hasData(arg0: $AttachmentType_<never>): boolean;
        serializeAttachments(arg0: $HolderLookup$Provider): $CompoundTag;
        hasAttachments(): boolean;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        syncData(arg0: $Supplier_<$AttachmentType<never>>): void;
        syncData(arg0: $AttachmentType_<never>): void;
        hasData<T>(arg0: $Supplier_<$AttachmentType<T>>): boolean;
        getExistingData<T>(arg0: $AttachmentType_<T>): (T) | undefined;
        getExistingData<T>(arg0: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        hasAttached(arg0: $AttachmentType$1<never>): boolean;
        getAttachedOrElse<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        removeAttached<A>(arg0: $AttachmentType$1<A>): A;
        setAttached<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        modifyAttached<A>(arg0: $AttachmentType$1<A>, arg1: $UnaryOperator_<A>): A;
        getAttachedOrGet<A>(arg0: $AttachmentType$1<A>, arg1: $Supplier_<A>): A;
        getAttached<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrSet<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getAttachedOrThrow<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrCreate<A>(arg0: $AttachmentType$1<A>, arg1: $Supplier_<A>): A;
        getAttachedOrCreate<A>(arg0: $AttachmentType$1<A>): A;
        invokeGetAttachmentMap(): $Map<$AttachmentType<never>, $Object>;
        static ATTACHMENTS_NBT_KEY: string;
        constructor();
    }
    export class $IAttachmentSerializer<S extends $Tag, T> {
    }
    export interface $IAttachmentSerializer<S extends $Tag, T> {
        write(arg0: T, arg1: $HolderLookup$Provider): S;
        read(arg0: $IAttachmentHolder, arg1: S, arg2: $HolderLookup$Provider): T;
    }
    export class $IAttachmentCopyHandler<T> {
    }
    export interface $IAttachmentCopyHandler<T> {
        copy(arg0: T, arg1: $IAttachmentHolder, arg2: $HolderLookup$Provider): T;
    }
    /**
     * Values that may be interpreted as {@link $IAttachmentCopyHandler}.
     */
    export type $IAttachmentCopyHandler_<T> = ((arg0: T, arg1: $IAttachmentHolder, arg2: $HolderLookup$Provider) => T);
    export interface $AttachmentType extends RegistryMarked<RegistryTypes.NeoforgeAttachmentTypesTag, RegistryTypes.NeoforgeAttachmentTypes> {}
    export class $AttachmentHolder$AsField extends $AttachmentHolder {
        deserializeInternal(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $IAttachmentHolder);
    }
    export class $AttachmentSync {
        static syncEntityUpdate(arg0: $Entity, arg1: $AttachmentType_<never>): void;
        static syncLevelUpdate(arg0: $ServerLevel, arg1: $AttachmentType_<never>): void;
        static syncChunkUpdate(arg0: $LevelChunk, arg1: $AttachmentHolder$AsField, arg2: $AttachmentType_<never>): void;
        static syncBlockEntityUpdate(arg0: $BlockEntity, arg1: $AttachmentType_<never>): void;
        static syncInitialPlayerAttachments(arg0: $ServerPlayer): void;
        static syncInitialEntityAttachments(arg0: $Entity, arg1: $ServerPlayer, arg2: $Consumer_<$Packet<$ClientGamePacketListener>>): void;
        static receiveSyncedDataAttachments(arg0: $AttachmentHolder, arg1: $RegistryAccess, arg2: $List_<$AttachmentType_<never>>, arg3: number[]): void;
        static syncInitialLevelAttachments(arg0: $ServerLevel, arg1: $ServerPlayer): void;
        static onChunkSent(arg0: $ChunkWatchEvent$Sent): void;
        static SYNCED_ATTACHMENT_TYPES: $Registry<$AttachmentType<never>>;
        static ATTACHMENT_TYPE_ADD_CALLBACK: $AddCallback<$AttachmentType<never>>;
    }
    export class $LevelAttachmentsSavedData extends $SavedData {
        static init(arg0: $ServerLevel): void;
        constructor(arg0: $ServerLevel, arg1: $CompoundTag_);
        constructor(arg0: $ServerLevel);
    }
    export class $AttachmentSyncHandler<T> {
    }
    export interface $AttachmentSyncHandler<T> {
        write(arg0: $RegistryFriendlyByteBuf, arg1: T, arg2: boolean): void;
        read(arg0: $IAttachmentHolder, arg1: $RegistryFriendlyByteBuf, arg2: T): T;
        sendToPlayer(arg0: $IAttachmentHolder, arg1: $ServerPlayer): boolean;
    }
    export class $AttachmentType<T> implements $AttachmentTypeAccessor {
        static builder<T>(arg0: $Function_<$IAttachmentHolder, T>): $AttachmentType$Builder<T>;
        static builder<T>(arg0: $Supplier_<T>): $AttachmentType$Builder<T>;
        static serializable<S extends $Tag, T extends $INBTSerializable<S>>(arg0: $Function_<$IAttachmentHolder, T>): $AttachmentType$Builder<T>;
        static serializable<S extends $Tag, T extends $INBTSerializable<S>>(arg0: $Supplier_<T>): $AttachmentType$Builder<T>;
        getSerializer(): $IAttachmentSerializer<never, never>;
        get serializer(): $IAttachmentSerializer<never, never>;
    }
    /**
     * Values that may be interpreted as {@link $AttachmentType}.
     */
    export type $AttachmentType_<T> = RegistryTypes.NeoforgeAttachmentTypes;
    export class $IAttachmentHolder {
    }
    export interface $IAttachmentHolder extends $AttachmentTarget, $IAttachmentHolderMixin {
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        getData<T>(arg0: $AttachmentType_<T>): T;
        removeData<T>(arg0: $AttachmentType_<T>): T;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        syncData(arg0: $Supplier_<$AttachmentType<never>>): void;
        syncData(arg0: $AttachmentType_<never>): void;
        hasData<T>(arg0: $Supplier_<$AttachmentType<T>>): boolean;
        hasData(arg0: $AttachmentType_<never>): boolean;
        hasAttachments(): boolean;
        getExistingData<T>(arg0: $AttachmentType_<T>): (T) | undefined;
        getExistingData<T>(arg0: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
    }
    export class $AttachmentType$Builder<T> {
        build(): $AttachmentType<T>;
        sync(arg0: $AttachmentSyncHandler<T>): $AttachmentType$Builder<T>;
        sync(arg0: $StreamCodec<$RegistryFriendlyByteBuf, T>): $AttachmentType$Builder<T>;
        sync(arg0: $BiPredicate_<$IAttachmentHolder, $ServerPlayer>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>): $AttachmentType$Builder<T>;
        serialize(arg0: $Codec<T>): $AttachmentType$Builder<T>;
        serialize(arg0: $IAttachmentSerializer<never, T>): $AttachmentType$Builder<T>;
        serialize(arg0: $Codec<T>, arg1: $Predicate_<T>): $AttachmentType$Builder<T>;
        copyHandler(arg0: $IAttachmentCopyHandler_<T>): $AttachmentType$Builder<T>;
        copyOnDeath(): $AttachmentType$Builder<T>;
    }
}
