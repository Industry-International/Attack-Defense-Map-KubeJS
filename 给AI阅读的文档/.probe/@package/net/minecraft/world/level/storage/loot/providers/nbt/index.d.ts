import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Tag } from "@package/net/minecraft/nbt";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Set } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContext, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/providers/nbt" {
    /**
     * A provider for NBT data based on a LootContext.
     * 
     * @see NbtProviders
     */
    export class $NbtProvider {
    }
    export interface $NbtProvider {
        get(lootContext: $LootContext): $Tag;
        getType(): $LootNbtProviderType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootNbtProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Registry for `NbtProvider`
     */
    export class $NbtProviders {
        static STORAGE: $LootNbtProviderType;
        static CODEC: $Codec<$NbtProvider>;
        static CONTEXT: $LootNbtProviderType;
        constructor();
    }
    export class $ContextNbtProvider$Getter {
    }
    export interface $ContextNbtProvider$Getter {
    }
    /**
     * The SerializerType for `NbtProvider`.
     */
    export class $LootNbtProviderType extends $Record {
        codec(): $MapCodec<$NbtProvider>;
        constructor(arg0: $MapCodec_<$NbtProvider>);
    }
    /**
     * Values that may be interpreted as {@link $LootNbtProviderType}.
     */
    export type $LootNbtProviderType_ = RegistryTypes.LootNbtProviderType;
    /**
     * A NbtProvider that provides either the block entity's NBT data or an entity's NBT data based on an `EntityTarget`.
     */
    export class $ContextNbtProvider implements $NbtProvider {
        get(lootContext: $LootContext): $Tag;
        getType(): $LootNbtProviderType;
        static forContextEntity(entityTarget: $LootContext$EntityTarget_): $NbtProvider;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static INLINE_CODEC: $Codec<$ContextNbtProvider>;
        static CODEC: $MapCodec<$ContextNbtProvider>;
        static BLOCK_ENTITY: $ContextNbtProvider;
        get type(): $LootNbtProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * An NbtProvider that provides NBT data from a named `CommandStorage`.
     */
    export class $StorageNbtProvider extends $Record implements $NbtProvider {
        get(lootContext: $LootContext): $Tag;
        id(): $ResourceLocation;
        getType(): $LootNbtProviderType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static CODEC: $MapCodec<$StorageNbtProvider>;
        constructor(id: $ResourceLocation_);
        get type(): $LootNbtProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export interface $LootNbtProviderType extends RegistryMarked<RegistryTypes.LootNbtProviderTypeTag, RegistryTypes.LootNbtProviderType> {}
}
