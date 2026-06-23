import { $DataResult, $MapEncoder, $DynamicOps, $Codec, $MapDecoder } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $BlockItemStatePropertiesExt } from "@package/com/moulberry/axiom/hooks";
import { $EquipmentSlot_, $Entity, $EquipmentSlotGroup, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $AttributeModifier, $AttributeModifier_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $Set_, $Map, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IntFunction, $Consumer_, $Predicate, $Consumer, $BiConsumer_ } from "@package/java/util/function";
import { $DecimalFormat } from "@package/java/text";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $GlobalPos, $HolderSet_, $GlobalPos_, $HolderLookup$Provider, $Holder_, $HolderSet, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Comparable, $Iterable, $Record } from "@package/java/lang";
import { $PropertyMap } from "@package/com/mojang/authlib/properties";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Fraction } from "@package/org/apache/commons/lang3/math";
import { $Item_, $Item$TooltipContext, $TooltipFlag, $ItemStack_, $ItemStack, $DyeItem } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Filterable, $Filterable_ } from "@package/net/minecraft/server/network";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $BundleContentsComponentAccessor, $ContainerComponentAccessor } from "@package/net/fabricmc/fabric/mixin/transfer";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/component" {
    export class $Fireworks extends $Record implements $TooltipProvider {
        explosions(): $List<$FireworkExplosion>;
        flightDuration(): number;
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        static CODEC: $Codec<$Fireworks>;
        static MAX_EXPLOSIONS: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Fireworks>;
        constructor(flightDuration: number, explosions: $List_<$FireworkExplosion_>);
    }
    export class $BookContent<T, C> {
    }
    export interface $BookContent<T, C> {
        pages(): $List<$Filterable<T>>;
        withReplacedPages(newPages: $List_<$Filterable_<T>>): C;
    }
    export class $LodestoneTracker extends $Record {
        target(): ($GlobalPos) | undefined;
        tick(level: $ServerLevel): $LodestoneTracker;
        tracked(): boolean;
        static CODEC: $Codec<$LodestoneTracker>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $LodestoneTracker>;
        constructor(arg0: ($GlobalPos_) | undefined, arg1: boolean);
    }
    export class $WritableBookContent extends $Record implements $BookContent<string, $WritableBookContent> {
        getPages(filtered: boolean): $Stream<string>;
        pages(): $List<$Filterable<string>>;
        withReplacedPages(newPages: $List_<$Filterable_<string>>): $WritableBookContent;
        static MAX_PAGES: number;
        static PAGE_EDIT_LENGTH: number;
        static CODEC: $Codec<$WritableBookContent>;
        static PAGES_CODEC: $Codec<$List<$Filterable<string>>>;
        static EMPTY: $WritableBookContent;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WritableBookContent>;
        constructor(pages: $List_<$Filterable_<string>>);
    }
    export class $DyedItemColor extends $Record implements $TooltipProvider {
        static getOrDefault(stack: $ItemStack_, defaultValue: number): number;
        static applyDyes(stack: $ItemStack_, dyes: $List_<$DyeItem>): $ItemStack;
        rgb(): number;
        withTooltip(showInTooltip: boolean): $DyedItemColor;
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        showInTooltip(): boolean;
        static CODEC: $Codec<$DyedItemColor>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DyedItemColor>;
        static LEATHER_COLOR: number;
        constructor(arg0: number, arg1: boolean);
    }
    export class $ItemAttributeModifiers$Entry extends $Record {
        slot(): $EquipmentSlotGroup;
        matches(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        modifier(): $AttributeModifier;
        attribute(): $Holder<$Attribute>;
        static CODEC: $Codec<$ItemAttributeModifiers$Entry>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttributeModifiers$Entry>;
        constructor(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EquipmentSlotGroup_);
    }
    export class $MapDecorations$Entry extends $Record {
        type(): $Holder<$MapDecorationType>;
        x(): number;
        z(): number;
        rotation(): number;
        static CODEC: $Codec<$MapDecorations$Entry>;
        constructor(arg0: $Holder_<$MapDecorationType>, arg1: number, arg2: number, arg3: number);
    }
    export class $SeededContainerLoot extends $Record {
        seed(): number;
        lootTable(): $ResourceKey<$LootTable>;
        static CODEC: $Codec<$SeededContainerLoot>;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number);
    }
    export class $Unbreakable extends $Record implements $TooltipProvider {
        withTooltip(showInTooltip: boolean): $Unbreakable;
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        showInTooltip(): boolean;
        static CODEC: $Codec<$Unbreakable>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Unbreakable>;
        constructor(arg0: boolean);
    }
    export class $ItemContainerContents$Slot extends $Record {
        index(): number;
        item(): $ItemStack;
        static CODEC: $Codec<$ItemContainerContents$Slot>;
        constructor(index: number, item: $ItemStack_);
    }
    export class $ItemAttributeModifiers$Builder {
        add(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_, slot: $EquipmentSlotGroup_): $ItemAttributeModifiers$Builder;
        build(): $ItemAttributeModifiers;
        constructor();
    }
    export class $SuspiciousStewEffects$Entry extends $Record {
        duration(): number;
        createEffectInstance(): $MobEffectInstance;
        effect(): $Holder<$MobEffect>;
        static CODEC: $Codec<$SuspiciousStewEffects$Entry>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SuspiciousStewEffects$Entry>;
        constructor(arg0: $Holder_<$MobEffect>, arg1: number);
    }
    export class $ItemLore extends $Record implements $TooltipProvider {
        lines(): $List<$Component>;
        withLineAdded(lines: $Component_): $ItemLore;
        styledLines(): $List<$Component>;
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        static CODEC: $Codec<$ItemLore>;
        static MAX_LINES: number;
        static EMPTY: $ItemLore;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemLore>;
        constructor(lines: $List_<$Component_>);
        constructor(lines: $List_<$Component_>, styledLines: $List_<$Component_>);
    }
    export class $CustomModelData extends $Record {
        value(): number;
        static CODEC: $Codec<$CustomModelData>;
        static DEFAULT: $CustomModelData;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CustomModelData>;
        constructor(arg0: number);
    }
    export class $BlockItemStateProperties extends $Record implements $BlockItemStatePropertiesExt {
        get<T extends $Comparable<T>>(property: $Property<T>): T;
        isEmpty(): boolean;
        apply(state: $BlockState_): $BlockState;
        properties(): $Map<string, string>;
        "with"<T extends $Comparable<T>>(property: $Property<T>, value: T): $BlockItemStateProperties;
        "with"<T extends $Comparable<T>>(property: $Property<T>, state: $BlockState_): $BlockItemStateProperties;
        axiom$addToTooltip(consumer: $Consumer_<any>, ignore: $Set_<any>): void;
        static CODEC: $Codec<$BlockItemStateProperties>;
        static EMPTY: $BlockItemStateProperties;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockItemStateProperties>;
        constructor(arg0: $Map_<string, string>);
        get empty(): boolean;
    }
    export class $TooltipProvider {
    }
    export interface $TooltipProvider {
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
    }
    /**
     * Values that may be interpreted as {@link $TooltipProvider}.
     */
    export type $TooltipProvider_ = ((arg0: $Item$TooltipContext, arg1: $Consumer<$Component>, arg2: $TooltipFlag) => void);
    export class $MapPostProcessing extends $Enum<$MapPostProcessing> {
        static values(): $MapPostProcessing[];
        static valueOf(arg0: string): $MapPostProcessing;
        id(): number;
        static ID_MAP: $IntFunction<$MapPostProcessing>;
        static LOCK: $MapPostProcessing;
        static SCALE: $MapPostProcessing;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MapPostProcessing>;
    }
    /**
     * Values that may be interpreted as {@link $MapPostProcessing}.
     */
    export type $MapPostProcessing_ = "lock" | "scale";
    export class $ChargedProjectiles {
        isEmpty(): boolean;
        static of(stack: $List_<$ItemStack_>): $ChargedProjectiles;
        static of(stack: $ItemStack_): $ChargedProjectiles;
        contains(item: $Item_): boolean;
        getItems(): $List<$ItemStack>;
        static CODEC: $Codec<$ChargedProjectiles>;
        static EMPTY: $ChargedProjectiles;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChargedProjectiles>;
        get empty(): boolean;
        get items(): $List<$ItemStack>;
    }
    export class $WrittenBookContent extends $Record implements $BookContent<$Component, $WrittenBookContent> {
        resolve(source: $CommandSourceStack, player: $Player | null): $WrittenBookContent;
        resolved(): boolean;
        title(): $Filterable<string>;
        getPages(filtered: boolean): $List<$Component>;
        static pagesCodec(codec: $Codec<$Component_>): $Codec<$List<$Filterable<$Component>>>;
        pages(): $List<$Filterable<$Component>>;
        author(): string;
        generation(): number;
        markResolved(): $WrittenBookContent;
        withReplacedPages(newPages: $List_<$Filterable_<$Component_>>): $WrittenBookContent;
        tryCraftCopy(): $WrittenBookContent;
        static TITLE_LENGTH: number;
        static TITLE_MAX_LENGTH: number;
        static CODEC: $Codec<$WrittenBookContent>;
        static MAX_CRAFTABLE_GENERATION: number;
        static PAGES_CODEC: $Codec<$List<$Filterable<$Component>>>;
        static PAGE_LENGTH: number;
        static EMPTY: $WrittenBookContent;
        static CONTENT_CODEC: $Codec<$Component>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WrittenBookContent>;
        static MAX_GENERATION: number;
        constructor(title: $Filterable_<string>, author: string, generation: number, pages: $List_<$Filterable_<$Component_>>, resolved: boolean);
    }
    export class $FireworkExplosion$Shape extends $Enum<$FireworkExplosion$Shape> implements $StringRepresentable, $IExtensibleEnum {
        getName(): $MutableComponent;
        static values(): $FireworkExplosion$Shape[];
        static valueOf(arg0: string): $FireworkExplosion$Shape;
        getId(): number;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        static byId(id: number): $FireworkExplosion$Shape;
        getRemappedEnumConstantName(): string;
        static SMALL_BALL: $FireworkExplosion$Shape;
        static LARGE_BALL: $FireworkExplosion$Shape;
        static CODEC: $Codec<$FireworkExplosion$Shape>;
        static STAR: $FireworkExplosion$Shape;
        static CREEPER: $FireworkExplosion$Shape;
        static BURST: $FireworkExplosion$Shape;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FireworkExplosion$Shape>;
        get id(): number;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FireworkExplosion$Shape}.
     */
    export type $FireworkExplosion$Shape_ = "small_ball" | "large_ball" | "star" | "creeper" | "burst";
    export class $MapDecorations extends $Record {
        decorations(): $Map<string, $MapDecorations$Entry>;
        withDecoration(type: string, entry: $MapDecorations$Entry_): $MapDecorations;
        static CODEC: $Codec<$MapDecorations>;
        static EMPTY: $MapDecorations;
        constructor(arg0: $Map_<string, $MapDecorations$Entry_>);
    }
    export class $SuspiciousStewEffects extends $Record {
        effects(): $List<$SuspiciousStewEffects$Entry>;
        withEffectAdded(entry: $SuspiciousStewEffects$Entry_): $SuspiciousStewEffects;
        static CODEC: $Codec<$SuspiciousStewEffects>;
        static EMPTY: $SuspiciousStewEffects;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SuspiciousStewEffects>;
        constructor(arg0: $List_<$SuspiciousStewEffects$Entry_>);
    }
    export class $Tool extends $Record {
        rules(): $List<$Tool$Rule>;
        damagePerBlock(): number;
        isCorrectForDrops(state: $BlockState_): boolean;
        getMiningSpeed(state: $BlockState_): number;
        defaultMiningSpeed(): number;
        static CODEC: $Codec<$Tool>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Tool>;
        constructor(arg0: $List_<$Tool$Rule_>, arg1: number, arg2: number);
    }
    export class $BundleContents$Mutable {
        tryTransfer(slot: $Slot, player: $Player): number;
        weight(): $Fraction;
        toImmutable(): $BundleContents;
        clearItems(): $BundleContents$Mutable;
        removeOne(): $ItemStack;
        tryInsert(stack: $ItemStack_): number;
        constructor(contents: $BundleContents);
    }
    export class $ResolvableProfile extends $Record {
        name(): (string) | undefined;
        id(): ($UUID) | undefined;
        resolve(): $CompletableFuture<$ResolvableProfile>;
        properties(): $PropertyMap;
        isResolved(): boolean;
        gameProfile(): $GameProfile;
        static CODEC: $Codec<$ResolvableProfile>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ResolvableProfile>;
        constructor(arg0: (string) | undefined, arg1: ($UUID_) | undefined, arg2: $PropertyMap, arg3: $GameProfile);
        constructor(profile: $GameProfile);
        constructor(name: (string) | undefined, id: ($UUID_) | undefined, properties: $PropertyMap);
        get resolved(): boolean;
    }
    export class $ItemContainerContents implements $ContainerComponentAccessor {
        stream(): $Stream<$ItemStack>;
        copyInto(items: $NonNullList<$ItemStack_>): void;
        getStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        static fromSlots(items: $List_<$ItemContainerContents$Slot_>): $ItemContainerContents;
        asSlots(): $List<$ItemContainerContents$Slot>;
        static fromItems(items: $List_<$ItemStack_>): $ItemContainerContents;
        copyOne(): $ItemStack;
        nonEmptyItemsCopy(): $Iterable<$ItemStack>;
        nonEmptyStream(): $Stream<$ItemStack>;
        nonEmptyItems(): $Iterable<$ItemStack>;
        fabric_getStacks(): $NonNullList<$ItemStack>;
        static CODEC: $Codec<$ItemContainerContents>;
        static EMPTY: $ItemContainerContents;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemContainerContents>;
        get slots(): number;
    }
    export class $Tool$Rule extends $Record {
        blocks(): $HolderSet<$Block>;
        speed(): (number) | undefined;
        static minesAndDrops(blocks: $TagKey_<$Block>, speed: number): $Tool$Rule;
        static minesAndDrops(blocks: $List_<$Block_>, speed: number): $Tool$Rule;
        static overrideSpeed(blocks: $TagKey_<$Block>, speed: number): $Tool$Rule;
        static overrideSpeed(blocks: $List_<$Block_>, speed: number): $Tool$Rule;
        static deniesDrops(blocks: $TagKey_<$Block>): $Tool$Rule;
        correctForDrops(): (boolean) | undefined;
        static CODEC: $Codec<$Tool$Rule>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Tool$Rule>;
        constructor(arg0: $HolderSet_<$Block>, arg1: (number) | undefined, arg2: (boolean) | undefined);
    }
    export class $DebugStickState extends $Record {
        properties(): $Map<$Holder<$Block>, $Property<never>>;
        withProperty(block: $Holder_<$Block>, property: $Property<never>): $DebugStickState;
        static CODEC: $Codec<$DebugStickState>;
        static EMPTY: $DebugStickState;
        constructor(arg0: $Map_<$Holder_<$Block>, $Property<never>>);
    }
    export class $ItemAttributeModifiers extends $Record {
        modifiers(): $List<$ItemAttributeModifiers$Entry>;
        static builder(): $ItemAttributeModifiers$Builder;
        compute(baseValue: number, arg1: $EquipmentSlot_): number;
        forEach(equipmentSlot: $EquipmentSlot_, action: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        forEach(slotGroup: $EquipmentSlotGroup_, action: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        withTooltip(showInTooltip: boolean): $ItemAttributeModifiers;
        showInTooltip(): boolean;
        withModifierAdded(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_, slot: $EquipmentSlotGroup_): $ItemAttributeModifiers;
        static CODEC: $Codec<$ItemAttributeModifiers>;
        static ATTRIBUTE_MODIFIER_FORMAT: $DecimalFormat;
        static EMPTY: $ItemAttributeModifiers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttributeModifiers>;
        constructor(arg0: $List_<$ItemAttributeModifiers$Entry_>, arg1: boolean);
    }
    export class $FireworkExplosion extends $Record implements $TooltipProvider {
        shape(): $FireworkExplosion$Shape;
        fadeColors(): $IntList;
        hasTwinkle(): boolean;
        hasTrail(): boolean;
        addAdditionalTooltip(tooltipAdder: $Consumer_<$Component>): void;
        addShapeNameTooltip(tooltipAdder: $Consumer_<$Component>): void;
        colors(): $IntList;
        withFadeColors(fadeColors: $IntList): $FireworkExplosion;
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        static CODEC: $Codec<$FireworkExplosion>;
        static DEFAULT: $FireworkExplosion;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FireworkExplosion>;
        static COLOR_LIST_CODEC: $Codec<$IntList>;
        constructor(shape: $FireworkExplosion$Shape_, colors: $IntList, fadeColors: $IntList, hasTrail: boolean, hasTwinkle: boolean);
    }
    export class $CustomData {
        size(): number;
        update<T>(ops: $DynamicOps<$Tag_>, encoder: $MapEncoder<T>, value: T): $DataResult<$CustomData>;
        static update(componentType: $DataComponentType_<$CustomData>, stack: $ItemStack_, updater: $Consumer_<$CompoundTag>): void;
        update(updater: $Consumer_<$CompoundTag>): $CustomData;
        isEmpty(): boolean;
        static of(tag: $CompoundTag_): $CustomData;
        contains(key: string): boolean;
        /**
         * @deprecated
         */
        getUnsafe(): $CompoundTag;
        static set(componentType: $DataComponentType_<$CustomData>, stack: $ItemStack_, tag: $CompoundTag_): void;
        read<T>(ops: $DynamicOps<$Tag_>, decoder: $MapDecoder<T>): $DataResult<T>;
        read<T>(decoder: $MapDecoder<T>): $DataResult<T>;
        matchedBy(tag: $CompoundTag_): boolean;
        loadInto(entity: $Entity): void;
        loadInto(blockEntity: $BlockEntity, levelRegistry: $HolderLookup$Provider): boolean;
        copyTag(): $CompoundTag;
        static itemMatcher(componentType: $DataComponentType_<$CustomData>, tag: $CompoundTag_): $Predicate<$ItemStack>;
        static CODEC: $Codec<$CustomData>;
        static CODEC_WITH_ID: $Codec<$CustomData>;
        static EMPTY: $CustomData;
        /**
         * @deprecated
         */
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CustomData>;
        get empty(): boolean;
        get unsafe(): $CompoundTag;
    }
    export class $BundleContents implements $TooltipComponent, $BundleContentsComponentAccessor {
        size(): number;
        isEmpty(): boolean;
        items(): $Iterable<$ItemStack>;
        weight(): $Fraction;
        static getWeight(stack: $ItemStack_): $Fraction;
        static getOccupancy$fabric_transfer_api_v1_$md$dd6cb9$0(stack: $ItemStack_): $Fraction;
        itemsCopy(): $Iterable<$ItemStack>;
        getItemUnsafe(index: number): $ItemStack;
        itemCopyStream(): $Stream<$ItemStack>;
        static CODEC: $Codec<$BundleContents>;
        static EMPTY: $BundleContents;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BundleContents>;
        constructor(items: $List_<$ItemStack_>, weight: $Fraction);
        constructor(items: $List_<$ItemStack_>);
        get empty(): boolean;
    }
    export class $MapItemColor extends $Record {
        rgb(): number;
        static CODEC: $Codec<$MapItemColor>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MapItemColor>;
        static DEFAULT: $MapItemColor;
        constructor(arg0: number);
    }
}
