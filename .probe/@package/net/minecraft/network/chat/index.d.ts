import { $JsonDeserializer, $JsonElement_, $JsonSerializer, $JsonDeserializationContext_, $JsonSerializationContext, $JsonElement } from "@package/com/google/gson";
import { $MapCodec_, $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag } from "@package/net/minecraft/nbt";
import { $EntityType_, $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $Message, $Message_, $ParseResults } from "@package/com/mojang/brigadier";
import { $UUID_, $Map, $UUID, $List, $Date, $Collection_, $List_, $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $ArgumentCommandNode } from "@package/com/mojang/brigadier/tree";
import { $SignatureUpdater$Output_, $FormattedCharSequence, $StringRepresentable, $SignatureUpdater_, $SignatureValidator_, $Signer_, $Unit } from "@package/net/minecraft/util";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_, $Function_, $UnaryOperator_, $BooleanSupplier_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $RegistryAccess, $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $WithCodec } from "@package/dev/latvian/mods/kubejs/util";
import { $URI } from "@package/java/net";
import { RegistryMarked, RegistryTypes, SpecialTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Type } from "@package/java/lang/reflect";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Enum, $Exception, $Comparable, $Iterable, $Throwable, $Record, $Object } from "@package/java/lang";
import { $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Ownable } from "@package/dzwdz/chat_heads/mixininterface";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ProfileKeyPair, $ProfilePublicKey, $ProfilePublicKey$Data_, $ProfileKeyPair_, $ProfilePublicKey$Data, $ProfilePublicKey_ } from "@package/net/minecraft/world/entity/player";
import { $DataSource } from "@package/net/minecraft/network/chat/contents";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Instant, $Duration_, $Duration } from "@package/java/time";
import { $ResourceKey_, $ResourceKey, $RegistryOps, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ComponentKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as numbers from "@package/net/minecraft/network/chat/numbers";
export * as contents from "@package/net/minecraft/network/chat/contents";

declare module "@package/net/minecraft/network/chat" {
    export class $SignableCommand$Argument<S> extends $Record {
        name(): string;
        value(): string;
        node(): $ArgumentCommandNode<S, never>;
        constructor(node: $ArgumentCommandNode<S, never>, value: string);
    }
    export class $ChatTypeDecoration extends $Record {
        parameters(): $List<$ChatTypeDecoration$Parameter>;
        style(): $Style;
        translationKey(): string;
        decorate(arg0: $Component_, arg1: $ChatType$Bound_): $Component;
        static withSender(arg0: string): $ChatTypeDecoration;
        static teamMessage(arg0: string): $ChatTypeDecoration;
        static outgoingDirectMessage(arg0: string): $ChatTypeDecoration;
        static incomingDirectMessage(arg0: string): $ChatTypeDecoration;
        static CODEC: $Codec<$ChatTypeDecoration>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatTypeDecoration>;
        constructor(arg0: string, arg1: $List_<$ChatTypeDecoration$Parameter_>, arg2: $Style);
    }
    export class $MessageSignatureCache {
        push(arg0: $SignedMessageBody_, arg1: $MessageSignature_): void;
        push(arg0: $List_<$MessageSignature_>): void;
        pack(arg0: $MessageSignature_): number;
        unpack(arg0: number): $MessageSignature;
        static createDefault(): $MessageSignatureCache;
        static NOT_FOUND: number;
        constructor(arg0: number);
    }
    export class $SignedMessageLink extends $Record {
        index(): number;
        static root(arg0: $UUID_, arg1: $UUID_): $SignedMessageLink;
        advance(): $SignedMessageLink;
        static unsigned(arg0: $UUID_): $SignedMessageLink;
        sessionId(): $UUID;
        sender(): $UUID;
        updateSignature(arg0: $SignatureUpdater$Output_): void;
        isDescendantOf(arg0: $SignedMessageLink_): boolean;
        static CODEC: $Codec<$SignedMessageLink>;
        constructor(arg0: number, arg1: $UUID_, arg2: $UUID_);
    }
    export class $SignedMessageBody extends $Record {
        content(): string;
        static unsigned(arg0: string): $SignedMessageBody;
        pack(arg0: $MessageSignatureCache): $SignedMessageBody$Packed;
        timeStamp(): $Instant;
        salt(): number;
        updateSignature(arg0: $SignatureUpdater$Output_): void;
        lastSeen(): $LastSeenMessages;
        static MAP_CODEC: $MapCodec<$SignedMessageBody>;
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $LastSeenMessages_);
    }
    export class $ComponentContents {
    }
    export interface $ComponentContents {
        type(): $ComponentContents$Type<never>;
        resolve(arg0: $CommandSourceStack, arg1: $Entity, arg2: number): $MutableComponent;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ComponentContents}.
     */
    export type $ComponentContents_ = (() => $ComponentContents$Type_<never>);
    export class $RemoteChatSession extends $Record {
        asData(): $RemoteChatSession$Data;
        sessionId(): $UUID;
        profilePublicKey(): $ProfilePublicKey;
        hasExpired(): boolean;
        createMessageDecoder(arg0: $UUID_): $SignedMessageChain$Decoder;
        createMessageValidator(arg0: $Duration_): $SignedMessageValidator;
        constructor(arg0: $UUID_, arg1: $ProfilePublicKey_);
    }
    export class $ChatType extends $Record {
        static bootstrap(arg0: $BootstrapContext<$ChatType_>): void;
        static bind(arg0: $ResourceKey_<$ChatType>, arg1: $Entity): $ChatType$Bound;
        static bind(arg0: $ResourceKey_<$ChatType>, arg1: $RegistryAccess, arg2: $Component_): $ChatType$Bound;
        static bind(arg0: $ResourceKey_<$ChatType>, arg1: $CommandSourceStack): $ChatType$Bound;
        chat(): $ChatTypeDecoration;
        narration(): $ChatTypeDecoration;
        static SAY_COMMAND: $ResourceKey<$ChatType>;
        static MSG_COMMAND_OUTGOING: $ResourceKey<$ChatType>;
        static MSG_COMMAND_INCOMING: $ResourceKey<$ChatType>;
        static CHAT: $ResourceKey<$ChatType>;
        static TEAM_MSG_COMMAND_OUTGOING: $ResourceKey<$ChatType>;
        static TEAM_MSG_COMMAND_INCOMING: $ResourceKey<$ChatType>;
        static DIRECT_CODEC: $Codec<$ChatType>;
        static EMOTE_COMMAND: $ResourceKey<$ChatType>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatType>;
        static DEFAULT_CHAT_DECORATION: $ChatTypeDecoration;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$ChatType>>;
        constructor(arg0: $ChatTypeDecoration_, arg1: $ChatTypeDecoration_);
    }
    /**
     * Values that may be interpreted as {@link $ChatType}.
     */
    export type $ChatType_ = RegistryTypes.ChatType;
    export class $ChatTypeDecoration$Parameter extends $Enum<$ChatTypeDecoration$Parameter> implements $StringRepresentable {
        static values(): $ChatTypeDecoration$Parameter[];
        static valueOf(arg0: string): $ChatTypeDecoration$Parameter;
        select(arg0: $Component_, arg1: $ChatType$Bound_): $Component;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TARGET: $ChatTypeDecoration$Parameter;
        static CODEC: $Codec<$ChatTypeDecoration$Parameter>;
        static SENDER: $ChatTypeDecoration$Parameter;
        static CONTENT: $ChatTypeDecoration$Parameter;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ChatTypeDecoration$Parameter>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChatTypeDecoration$Parameter}.
     */
    export type $ChatTypeDecoration$Parameter_ = "sender" | "target" | "content";
    export class $LastSeenTrackedEntry extends $Record {
        signature(): $MessageSignature;
        pending(): boolean;
        acknowledge(): $LastSeenTrackedEntry;
        constructor(arg0: $MessageSignature_, arg1: boolean);
    }
    export class $OutgoingChatMessage {
        static create(arg0: $PlayerChatMessage_): $OutgoingChatMessage;
    }
    export interface $OutgoingChatMessage {
        content(): $Component;
        sendToPlayer(arg0: $ServerPlayer, arg1: boolean, arg2: $ChatType$Bound_): void;
    }
    export class $OutgoingChatMessage$Disguised extends $Record implements $OutgoingChatMessage {
        content(): $Component;
        sendToPlayer(arg0: $ServerPlayer, arg1: boolean, arg2: $ChatType$Bound_): void;
        constructor(arg0: $Component_);
    }
    export class $ChatDecorator {
        static PLAIN: $ChatDecorator;
    }
    export interface $ChatDecorator {
        decorate(arg0: $ServerPlayer, arg1: $Component_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatDecorator}.
     */
    export type $ChatDecorator_ = ((arg0: $ServerPlayer, arg1: $Component) => $Component_);
    export class $SignedMessageChain$Encoder {
        static UNSIGNED: $SignedMessageChain$Encoder;
    }
    export interface $SignedMessageChain$Encoder {
        pack(arg0: $SignedMessageBody_): $MessageSignature;
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageChain$Encoder}.
     */
    export type $SignedMessageChain$Encoder_ = ((arg0: $SignedMessageBody) => $MessageSignature_);
    export class $ComponentSerialization$FuzzyCodec<T> extends $MapCodec<T> {
    }
    export class $Style$1Collector {
    }
    export class $SignedMessageBody$Packed extends $Record {
        write(arg0: $FriendlyByteBuf): void;
        content(): string;
        unpack(arg0: $MessageSignatureCache): ($SignedMessageBody) | undefined;
        timeStamp(): $Instant;
        salt(): number;
        lastSeen(): $LastSeenMessages$Packed;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $LastSeenMessages$Packed_);
    }
    export class $LastSeenMessages extends $Record {
        entries(): $List<$MessageSignature>;
        pack(arg0: $MessageSignatureCache): $LastSeenMessages$Packed;
        updateSignature(arg0: $SignatureUpdater$Output_): void;
        static CODEC: $Codec<$LastSeenMessages>;
        static LAST_SEEN_MESSAGES_MAX_LENGTH: number;
        static EMPTY: $LastSeenMessages;
        constructor(arg0: $List_<$MessageSignature_>);
    }
    export class $HoverEvent$Action<T> implements $StringRepresentable {
        cast(arg0: $Object): T;
        getSerializedName(): string;
        isAllowedFromServer(): boolean;
        getRemappedEnumConstantName(): string;
        codec: $MapCodec<$HoverEvent$TypedHoverEvent<T>>;
        static CODEC: $Codec<$HoverEvent$Action<never>>;
        static SHOW_ITEM: $HoverEvent$Action<$HoverEvent$ItemStackInfo>;
        static SHOW_ENTITY: $HoverEvent$Action<$HoverEvent$EntityTooltipInfo>;
        static UNSAFE_CODEC: $Codec<$HoverEvent$Action<never>>;
        static SHOW_TEXT: $HoverEvent$Action<$Component>;
        legacyCodec: $MapCodec<$HoverEvent$TypedHoverEvent<T>>;
        constructor(arg0: string, arg1: boolean, arg2: $Codec<T>, arg3: $HoverEvent$LegacyConverter_<T>);
        get serializedName(): string;
        get allowedFromServer(): boolean;
        get remappedEnumConstantName(): string;
    }
    export class $LastSeenMessagesTracker$Update extends $Record {
        update(): $LastSeenMessages$Update;
        lastSeen(): $LastSeenMessages;
        constructor(arg0: $LastSeenMessages_, arg1: $LastSeenMessages$Update_);
    }
    export class $SignedMessageValidator$KeyBased implements $SignedMessageValidator {
        updateAndValidate(arg0: $PlayerChatMessage_): $PlayerChatMessage;
        constructor(arg0: $SignatureValidator_, arg1: $BooleanSupplier_);
    }
    export class $RemoteChatSession$Data extends $Record {
        validate(arg0: $GameProfile, arg1: $SignatureValidator_): $RemoteChatSession;
        static write(arg0: $FriendlyByteBuf, arg1: $RemoteChatSession$Data_): void;
        static read(arg0: $FriendlyByteBuf): $RemoteChatSession$Data;
        sessionId(): $UUID;
        profilePublicKey(): $ProfilePublicKey$Data;
        constructor(arg0: $UUID_, arg1: $ProfilePublicKey$Data_);
    }
    export class $Style {
        isEmpty(): boolean;
        getColor(): $TextColor;
        isObfuscated(): boolean;
        withStrikethrough(arg0: boolean): $Style;
        applyFormat(arg0: $ChatFormatting_): $Style;
        isStrikethrough(): boolean;
        isUnderlined(): boolean;
        withUnderlined(arg0: boolean): $Style;
        withObfuscated(arg0: boolean): $Style;
        getClickEvent(): $ClickEvent;
        applyLegacyFormat(arg0: $ChatFormatting_): $Style;
        getInsertion(): string;
        applyFormats(...arg0: $ChatFormatting_[]): $Style;
        withInsertion(arg0: string): $Style;
        withHoverEvent(arg0: $HoverEvent): $Style;
        withColor(arg0: $TextColor_): $Style;
        withColor(arg0: $ChatFormatting_): $Style;
        withColor(arg0: number): $Style;
        withFont(arg0: $ResourceLocation_): $Style;
        withBold(arg0: boolean): $Style;
        withItalic(arg0: boolean): $Style;
        applyTo(arg0: $Style): $Style;
        getFont(): $ResourceLocation;
        getHoverEvent(): $HoverEvent;
        withClickEvent(arg0: $ClickEvent_): $Style;
        isBold(): boolean;
        isItalic(): boolean;
        hoverEvent: $HoverEvent;
        clickEvent: $ClickEvent;
        static DEFAULT_FONT: $ResourceLocation;
        color: $TextColor;
        underlined: boolean;
        insertion: string;
        bold: boolean;
        strikethrough: boolean;
        static EMPTY: $Style;
        italic: boolean;
        obfuscated: boolean;
        font: $ResourceLocation;
        get empty(): boolean;
    }
    export class $OutgoingChatMessage$Player extends $Record implements $OutgoingChatMessage {
        message(): $PlayerChatMessage;
        content(): $Component;
        sendToPlayer(arg0: $ServerPlayer, arg1: boolean, arg2: $ChatType$Bound_): void;
        constructor(arg0: $PlayerChatMessage_);
    }
    export class $SignedMessageChain {
        encoder(arg0: $Signer_): $SignedMessageChain$Encoder;
        decoder(arg0: $ProfilePublicKey_): $SignedMessageChain$Decoder;
        lastTimeStamp: $Instant;
        static LOGGER: $Logger;
        nextLink: $SignedMessageLink;
        constructor(arg0: $UUID_, arg1: $UUID_);
    }
    export class $MessageSignature extends $Record {
        asByteBuffer(): $ByteBuffer;
        bytes(): number[];
        static write(arg0: $FriendlyByteBuf, arg1: $MessageSignature_): void;
        static read(arg0: $FriendlyByteBuf): $MessageSignature;
        verify(arg0: $SignatureValidator_, arg1: $SignatureUpdater_): boolean;
        pack(arg0: $MessageSignatureCache): $MessageSignature$Packed;
        static BYTES: number;
        static CODEC: $Codec<$MessageSignature>;
        constructor(arg0: number[]);
    }
    export class $FilterMask$Type extends $Enum<$FilterMask$Type> implements $StringRepresentable {
        getRemappedEnumConstantName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FilterMask$Type}.
     */
    export type $FilterMask$Type_ = "pass_through" | "fully_filtered" | "partially_filtered";
    export class $Style$Serializer {
        static CODEC: $Codec<$Style>;
        static MAP_CODEC: $MapCodec<$Style>;
        static TRUSTED_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Style>;
        constructor();
    }
    export class $ComponentSerialization {
        static flatCodec(arg0: number): $Codec<$Component>;
        static createLegacyComponentMatcher<T extends $StringRepresentable, E>(arg0: T[], arg1: $Function_<T, $MapCodec<E>>, arg2: $Function_<E, T>, arg3: string): $MapCodec<E>;
        static TRUSTED_CONTEXT_FREE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Component>;
        static CODEC: $Codec<$Component>;
        static TRUSTED_OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($Component) | undefined>;
        static TRUSTED_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Component>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($Component) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Component>;
        static FLAT_CODEC: $Codec<$Component>;
        constructor();
    }
    export class $SignableCommand<S> extends $Record {
        static of<S>(arg0: $ParseResults<S>): $SignableCommand<S>;
        "arguments"(): $List<$SignableCommand$Argument<S>>;
        getArgument(arg0: string): $SignableCommand$Argument<S>;
        static hasSignableArguments<S>(arg0: $ParseResults<S>): boolean;
        constructor(arg0: $List_<$SignableCommand$Argument_<S>>);
    }
    export class $ClickEvent implements $WithCodec {
        getCodec(): $Codec<any>;
        getValue(): string;
        getAction(): $ClickEvent$Action;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        static CODEC: $Codec<$ClickEvent>;
        constructor(arg0: $ClickEvent$Action_, arg1: string);
        get codec(): $Codec<any>;
        get value(): string;
        get action(): $ClickEvent$Action;
    }
    /**
     * Values that may be interpreted as {@link $ClickEvent}.
     */
    export type $ClickEvent_ = { action: $ClickEvent$Action_, value: string,  };
    export class $SignedMessageChain$DecodeException extends $ThrowingComponent {
        static OUT_OF_ORDER_CHAT: $Component;
        static EXPIRED_PROFILE_KEY: $Component;
        static INVALID_SIGNATURE: $Component;
        static MISSING_PROFILE_KEY: $Component;
        static CHAIN_BROKEN: $Component;
        constructor(arg0: $Component_);
    }
    export class $ChatTypeDecoration$Parameter$Selector {
    }
    export interface $ChatTypeDecoration$Parameter$Selector {
        select(arg0: $Component_, arg1: $ChatType$Bound_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatTypeDecoration$Parameter$Selector}.
     */
    export type $ChatTypeDecoration$Parameter$Selector_ = ((arg0: $Component, arg1: $ChatType$Bound) => $Component_);
    export class $FormattedText {
        static of(arg0: string, arg1: $Style): $FormattedText;
        static of(arg0: string): $FormattedText;
        static composite(arg0: $List_<$FormattedText>): $FormattedText;
        static composite(...arg0: $FormattedText[]): $FormattedText;
        static EMPTY: $FormattedText;
        static STOP_ITERATION: ($Unit) | undefined;
    }
    export interface $FormattedText {
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        getString(): string;
        get string(): string;
    }
    export class $Component$SerializerAdapter implements $JsonDeserializer<$MutableComponent>, $JsonSerializer<$Component> {
        serialize(arg0: $Component_, arg1: $Type, arg2: $JsonSerializationContext): $JsonElement;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $MutableComponent;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $MessageSignature$Packed extends $Record {
        id(): number;
        static write(arg0: $FriendlyByteBuf, arg1: $MessageSignature$Packed_): void;
        static read(arg0: $FriendlyByteBuf): $MessageSignature$Packed;
        unpack(arg0: $MessageSignatureCache): ($MessageSignature) | undefined;
        fullSignature(): $MessageSignature;
        static FULL_SIGNATURE: number;
        constructor(arg0: number, arg1: $MessageSignature_);
        constructor(arg0: number);
        constructor(arg0: $MessageSignature_);
    }
    export class $TextColor implements $KubeColor {
        getValue(): number;
        serialize(): string;
        static fromLegacyFormat(arg0: $ChatFormatting_): $TextColor;
        kjs$getRGB(): number;
        formatValue(): string;
        kjs$getARGB(): number;
        static fromRgb(arg0: number): $TextColor;
        static parseColor(arg0: string): $DataResult<$TextColor>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        createTextColor(): $TextColor;
        getFireworkRGB(): number;
        toHexString(): string;
        serialize(): string;
        static CODEC: $Codec<$TextColor>;
        static NAMED_COLORS: $Map<string, $TextColor>;
        constructor(arg0: number, arg1: string);
        get value(): number;
        get fireworkRGB(): number;
    }
    /**
     * Values that may be interpreted as {@link $TextColor}.
     */
    export type $TextColor_ = "" | "light_blue_dye" | "blue_dye" | "purple_dye" | "dark_red" | "lightgraydye" | "dark_aqua" | "none" | "green_dye" | "blackdye" | "dark_blue" | "red" | "pink_dye" | "aqua" | "white" | "white_dye" | "dark_gray" | "light_purple" | "brown_dye" | "black" | "darkpurple" | "none" | "light_blue_dye" | "aqua" | "lightbluedye" | "limedye" | "purple_dye" | "green_dye" | "magenta_dye" | "-" | "lime_dye" | "yellowdye" | "graydye" | "purpledye" | "dark_purple" | "orange_dye" | "darkgray" | "browndye" | "yellow" | "lime_dye" | "bluedye" | "white_dye" | "pinkdye" | "blue_dye" | "cyandye" | "gold" | "gray" | "magenta_dye" | "blue" | "light_gray_dye" | "yellow" | "darkblue" | "transparent" | "orange_dye" | "red_dye" | "dark_purple" | "gold" | "gray" | "light_purple" | "darkred" | "greendye" | "dark_red" | "reddye" | "gray_dye" | "orangedye" | "yellow_dye" | "black_dye" | "magentadye" | "white" | "green" | "light_gray_dye" | "black_dye" | "darkgreen" | "red_dye" | "dark_green" | "black" | "lightpurple" | "pink_dye" | "dark_blue" | "green" | "darkaqua" | "gray_dye" | "cyan_dye" | "red" | "brown_dye" | "cyan_dye" | "blue" | "whitedye" | "dark_aqua" | "yellow_dye" | "dark_green" | "dark_gray" | `#${string}` | number;
    export class $HoverEvent {
        getValue<T>(arg0: $HoverEvent$Action<T>): T;
        getAction(): $HoverEvent$Action<never>;
        static CODEC: $Codec<$HoverEvent>;
        constructor<T>(arg0: $HoverEvent$Action<T>, arg1: T);
        get action(): $HoverEvent$Action<never>;
    }
    export class $LastSeenMessages$Update extends $Record {
        acknowledged(): $BitSet;
        offset(): number;
        write(arg0: $FriendlyByteBuf): void;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $BitSet);
    }
    export class $CommonComponents {
        static space(): $MutableComponent;
        static days(arg0: number): $MutableComponent;
        static hours(arg0: number): $MutableComponent;
        static minutes(arg0: number): $MutableComponent;
        static optionNameValue(arg0: $Component_, arg1: $Component_): $MutableComponent;
        static joinLines(arg0: $Collection_<$Component_>): $Component;
        static joinLines(...arg0: $Component_[]): $Component;
        static joinForNarration(...arg0: $Component_[]): $MutableComponent;
        static optionStatus(arg0: $Component_, arg1: boolean): $MutableComponent;
        static optionStatus(arg0: boolean): $Component;
        static GUI_TO_TITLE: $Component;
        static GUI_OPEN_IN_BROWSER: $Component;
        static CONNECT_FAILED: $Component;
        static GUI_CONTINUE: $Component;
        static GUI_COPY_LINK_TO_CLIPBOARD: $Component;
        static TRANSFER_CONNECT_FAILED: $Component;
        static NEW_LINE: $Component;
        static SPACE: $Component;
        static GUI_DISCONNECT: $Component;
        static GUI_ACKNOWLEDGE: $Component;
        static GUI_CANCEL: $Component;
        static GUI_YES: $Component;
        static ELLIPSIS: $Component;
        static GUI_PROCEED: $Component;
        static GUI_DONE: $Component;
        static GUI_OK: $Component;
        static OPTION_OFF: $Component;
        static NARRATION_SEPARATOR: $Component;
        static GUI_BACK: $Component;
        static EMPTY: $Component;
        static GUI_NO: $Component;
        static OPTION_ON: $Component;
        constructor();
    }
    export class $ThrowingComponent extends $Exception {
        getComponent(): $Component;
        constructor(arg0: $Component_);
        constructor(arg0: $Component_, arg1: $Throwable);
        get component(): $Component;
    }
    export class $HoverEvent$LegacyConverter<T> {
    }
    export interface $HoverEvent$LegacyConverter<T> {
        parse(arg0: $Component_, arg1: $RegistryOps<never>): $DataResult<T>;
    }
    /**
     * Values that may be interpreted as {@link $HoverEvent$LegacyConverter}.
     */
    export type $HoverEvent$LegacyConverter_<T> = ((arg0: $Component, arg1: $RegistryOps<never>) => $DataResult<T>);
    export class $FilterMask {
        isEmpty(): boolean;
        apply(arg0: string): string;
        static write(arg0: $FriendlyByteBuf, arg1: $FilterMask): void;
        static read(arg0: $FriendlyByteBuf): $FilterMask;
        applyWithFormatting(arg0: string): $Component;
        isFullyFiltered(): boolean;
        setFiltered(arg0: number): void;
        static PARTIALLY_FILTERED_CODEC: $MapCodec<$FilterMask>;
        static PASS_THROUGH: $FilterMask;
        static CODEC: $Codec<$FilterMask>;
        static FULLY_FILTERED: $FilterMask;
        static FILTERED_STYLE: $Style;
        static PASS_THROUGH_CODEC: $MapCodec<$FilterMask>;
        static FULLY_FILTERED_CODEC: $MapCodec<$FilterMask>;
        constructor(arg0: number);
        get empty(): boolean;
        get fullyFiltered(): boolean;
        set filtered(value: number);
    }
    export class $Component$Serializer {
        static toJson(arg0: $Component_, arg1: $HolderLookup$Provider): string;
        static deserialize(arg0: $JsonElement_, arg1: $HolderLookup$Provider): $MutableComponent;
        static serialize(arg0: $Component_, arg1: $HolderLookup$Provider): $JsonElement;
        static fromJson(arg0: string, arg1: $HolderLookup$Provider): $MutableComponent;
        static fromJson(arg0: $JsonElement_, arg1: $HolderLookup$Provider): $MutableComponent;
        static fromJsonLenient(arg0: string, arg1: $HolderLookup$Provider): $MutableComponent;
    }
    export class $FormattedText$ContentConsumer<T> {
    }
    export interface $FormattedText$ContentConsumer<T> {
        accept(arg0: string): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $FormattedText$ContentConsumer}.
     */
    export type $FormattedText$ContentConsumer_<T> = ((arg0: string) => (T) | undefined);
    export class $ComponentUtils {
        static formatList(arg0: $Collection_<string>): $Component;
        static formatList<T>(arg0: $Collection_<T>, arg1: $Function_<T, $Component>): $Component;
        static formatList<T>(arg0: $Collection_<T>, arg1: ($Component_) | undefined, arg2: $Function_<T, $Component>): $MutableComponent;
        static formatList(arg0: $Collection_<$Component_>, arg1: $Component_): $Component;
        static formatList<T>(arg0: $Collection_<T>, arg1: $Component_, arg2: $Function_<T, $Component>): $MutableComponent;
        static updateForEntity(arg0: $CommandSourceStack, arg1: ($Component_) | undefined, arg2: $Entity, arg3: number): ($MutableComponent) | undefined;
        static updateForEntity(arg0: $CommandSourceStack, arg1: $Component_, arg2: $Entity, arg3: number): $MutableComponent;
        static fromMessage(arg0: $Message_): $Component;
        static formatAndSortList<T extends $Comparable<T>>(arg0: $Collection_<T>, arg1: $Function_<T, $Component>): $Component;
        static copyOnClickText(arg0: string): $MutableComponent;
        static isTranslationResolvable(arg0: $Component_): boolean;
        static wrapInSquareBrackets(arg0: $Component_): $MutableComponent;
        static mergeStyles(arg0: $MutableComponent_, arg1: $Style): $MutableComponent;
        static DEFAULT_NO_STYLE_SEPARATOR: $Component;
        static DEFAULT_SEPARATOR_TEXT: string;
        static DEFAULT_SEPARATOR: $Component;
        constructor();
    }
    export class $ClickEvent$Action extends $Enum<$ClickEvent$Action> implements $StringRepresentable {
        static values(): $ClickEvent$Action[];
        static valueOf(arg0: string): $ClickEvent$Action;
        getSerializedName(): string;
        static filterForSerialization(arg0: $ClickEvent$Action_): $DataResult<$ClickEvent$Action>;
        isAllowedFromServer(): boolean;
        getRemappedEnumConstantName(): string;
        static CODEC: $MapCodec<$ClickEvent$Action>;
        static UNSAFE_CODEC: $MapCodec<$ClickEvent$Action>;
        static RUN_COMMAND: $ClickEvent$Action;
        static CHANGE_PAGE: $ClickEvent$Action;
        static COPY_TO_CLIPBOARD: $ClickEvent$Action;
        static SUGGEST_COMMAND: $ClickEvent$Action;
        static OPEN_FILE: $ClickEvent$Action;
        static OPEN_URL: $ClickEvent$Action;
        get serializedName(): string;
        get allowedFromServer(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ClickEvent$Action}.
     */
    export type $ClickEvent$Action_ = "open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard";
    export class $HoverEvent$ItemStackInfo {
        getItemStack(): $ItemStack;
        static CODEC: $Codec<$HoverEvent$ItemStackInfo>;
        static FULL_CODEC: $Codec<$HoverEvent$ItemStackInfo>;
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPatch_);
        constructor(arg0: $ItemStack_);
        get itemStack(): $ItemStack;
    }
    export class $FormattedText$StyledContentConsumer<T> {
    }
    export interface $FormattedText$StyledContentConsumer<T> {
        accept(arg0: $Style, arg1: string): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $FormattedText$StyledContentConsumer}.
     */
    export type $FormattedText$StyledContentConsumer_<T> = ((arg0: $Style, arg1: string) => (T) | undefined);
    export class $LocalChatSession extends $Record {
        static create(arg0: $ProfileKeyPair_): $LocalChatSession;
        keyPair(): $ProfileKeyPair;
        asRemote(): $RemoteChatSession;
        createMessageEncoder(arg0: $UUID_): $SignedMessageChain$Encoder;
        sessionId(): $UUID;
        constructor(arg0: $UUID_, arg1: $ProfileKeyPair_);
    }
    export class $ComponentContents$Type<T extends $ComponentContents> extends $Record implements $StringRepresentable {
        id(): string;
        codec(): $MapCodec<T>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        constructor(arg0: $MapCodec_<T>, arg1: string);
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    export class $SignedMessageValidator {
        static LOGGER: $Logger;
        static ACCEPT_UNSIGNED: $SignedMessageValidator;
        static REJECT_ALL: $SignedMessageValidator;
    }
    export interface $SignedMessageValidator {
        updateAndValidate(arg0: $PlayerChatMessage_): $PlayerChatMessage;
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageValidator}.
     */
    export type $SignedMessageValidator_ = ((arg0: $PlayerChatMessage) => $PlayerChatMessage_);
    export class $ComponentSerialization$StrictEither<T> extends $MapCodec<T> {
    }
    export class $LastSeenMessagesValidator {
        addPending(arg0: $MessageSignature_): void;
        applyOffset(arg0: number): boolean;
        applyUpdate(arg0: $LastSeenMessages$Update_): ($LastSeenMessages) | undefined;
        trackedMessagesCount(): number;
        constructor(arg0: number);
    }
    export interface $ChatType extends RegistryMarked<RegistryTypes.ChatTypeTag, RegistryTypes.ChatType> {}
    export class $Component {
        static empty(): $MutableComponent;
        static literal(arg0: string): $MutableComponent;
        static selector(arg0: string, arg1: ($Component_) | undefined): $MutableComponent;
        static score(arg0: string, arg1: string): $MutableComponent;
        static translatableEscape(arg0: string, ...arg1: $Object[]): $MutableComponent;
        static translationArg(arg0: $ResourceLocation_): $Component;
        static translationArg(arg0: $UUID_): $Component;
        static translationArg(arg0: $ChunkPos): $Component;
        static translationArg(arg0: $Date): $Component;
        static translationArg(arg0: $URI): $Component;
        static translationArg(arg0: $Message_): $Component;
        static nullToEmpty(arg0: string): $Component;
        static keybind(arg0: string): $MutableComponent;
        static nbt(arg0: string, arg1: boolean, arg2: ($Component_) | undefined, arg3: $DataSource): $MutableComponent;
        static translatableWithFallback(arg0: string, arg1: string, ...arg2: $Object[]): $MutableComponent;
        static translatableWithFallback(arg0: string, arg1: string): $MutableComponent;
        static translatable(arg0: string, ...arg1: $Object[]): $MutableComponent;
        static translatable(arg0: string): $MutableComponent;
    }
    export interface $Component extends $Message, $FormattedText {
        contains(arg0: $Component_): boolean;
        copy(): $MutableComponent;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        getString(arg0: number): string;
        getString(): string;
        getContents(): $ComponentContents;
        getSiblings(): $List<$Component>;
        plainCopy(): $MutableComponent;
        toFlatList(): $List<$Component>;
        toFlatList(arg0: $Style): $List<$Component>;
        getStyle(): $Style;
        getVisualOrderText(): $FormattedCharSequence;
        tryCollapseToString(): string;
        get contents(): $ComponentContents;
        get siblings(): $List<$Component>;
        get style(): $Style;
        get visualOrderText(): $FormattedCharSequence;
    }
    /**
     * Values that may be interpreted as {@link $Component}.
     */
    export type $Component_ = string | { text?: string, translate?: SpecialTypes.TranslationKey, with?: any[], color?: $KubeColor_, bold?: boolean, italic?: boolean, underlined?: boolean, strikethrough?: boolean, obfuscated?: boolean, insertion?: string, font?: string, click?: $ClickEvent_, hover?: $Component_, extra?: $Component_[],  } | $Component_[];
    export class $LastSeenMessages$Packed extends $Record {
        write(arg0: $FriendlyByteBuf): void;
        entries(): $List<$MessageSignature$Packed>;
        unpack(arg0: $MessageSignatureCache): ($LastSeenMessages) | undefined;
        static EMPTY: $LastSeenMessages$Packed;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: $List_<$MessageSignature$Packed_>);
    }
    export class $LastSeenMessagesTracker {
        offset(): number;
        addPending(arg0: $MessageSignature_, arg1: boolean): boolean;
        getAndClearOffset(): number;
        ignorePending(arg0: $MessageSignature_): void;
        generateAndApplyUpdate(): $LastSeenMessagesTracker$Update;
        constructor(arg0: number);
        get andClearOffset(): number;
    }
    export class $SignedMessageChain$Decoder {
        static unsigned(arg0: $UUID_, arg1: $BooleanSupplier_): $SignedMessageChain$Decoder;
    }
    export interface $SignedMessageChain$Decoder {
        unpack(arg0: $MessageSignature_, arg1: $SignedMessageBody_): $PlayerChatMessage;
        setChainBroken(): void;
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageChain$Decoder}.
     */
    export type $SignedMessageChain$Decoder_ = ((arg0: $MessageSignature, arg1: $SignedMessageBody) => $PlayerChatMessage_);
    export class $SubStringSource {
        substring(arg0: number, arg1: number, arg2: boolean): $List<$FormattedCharSequence>;
        static create(arg0: $FormattedText, arg1: $Int2IntFunction_, arg2: $UnaryOperator_<string>): $SubStringSource;
        static create(arg0: $FormattedText): $SubStringSource;
        getPlainText(): string;
        get plainText(): string;
    }
    export class $HoverEvent$EntityTooltipInfo {
        getTooltipLines(): $List<$Component>;
        static legacyCreate(arg0: $Component_, arg1: $RegistryOps<never>): $DataResult<$HoverEvent$EntityTooltipInfo>;
        static CODEC: $Codec<$HoverEvent$EntityTooltipInfo>;
        name: ($Component) | undefined;
        id: $UUID;
        type: $EntityType<never>;
        constructor(arg0: $EntityType_<never>, arg1: $UUID_, arg2: $Component_);
        constructor(arg0: $EntityType_<never>, arg1: $UUID_, arg2: ($Component_) | undefined);
        get tooltipLines(): $List<$Component>;
    }
    export class $PlayerChatMessage extends $Record implements $Ownable {
        hasExpiredServer(arg0: $Instant): boolean;
        hasExpiredClient(arg0: $Instant): boolean;
        removeSignature(): $PlayerChatMessage;
        signature(): $MessageSignature;
        filter(arg0: boolean): $PlayerChatMessage;
        filter(arg0: $FilterMask): $PlayerChatMessage;
        static system(arg0: string): $PlayerChatMessage;
        verify(arg0: $SignatureValidator_): boolean;
        link(): $SignedMessageLink;
        isSystem(): boolean;
        static unsigned(arg0: $UUID_, arg1: string): $PlayerChatMessage;
        timeStamp(): $Instant;
        hasSignature(): boolean;
        filterMask(): $FilterMask;
        signedBody(): $SignedMessageBody;
        unsignedContent(): $Component;
        isFullyFiltered(): boolean;
        chatheads$getOwner(): $PlayerInfo;
        chatheads$setOwner(playerInfo: $PlayerInfo): void;
        salt(): number;
        decoratedContent(): $Component;
        hasSignatureFrom(arg0: $UUID_): boolean;
        signedContent(): string;
        sender(): $UUID;
        withUnsignedContent(arg0: $Component_): $PlayerChatMessage;
        static updateSignature(arg0: $SignatureUpdater$Output_, arg1: $SignedMessageLink_, arg2: $SignedMessageBody_): void;
        removeUnsignedContent(): $PlayerChatMessage;
        static MESSAGE_EXPIRES_AFTER_SERVER: $Duration;
        static MAP_CODEC: $MapCodec<$PlayerChatMessage>;
        static MESSAGE_EXPIRES_AFTER_CLIENT: $Duration;
        constructor(arg0: $SignedMessageLink_, arg1: $MessageSignature_, arg2: $SignedMessageBody_, arg3: $Component_, arg4: $FilterMask);
        get fullyFiltered(): boolean;
    }
    export class $MutableComponent implements $Component, $ComponentKJS {
        append(arg0: $Component_): $MutableComponent;
        static create(arg0: $ComponentContents_): $MutableComponent;
        getContents(): $ComponentContents;
        getSiblings(): $List<$Component>;
        withColor(arg0: number): $MutableComponent;
        setStyle(arg0: $Style): $MutableComponent;
        getStyle(): $Style;
        getVisualOrderText(): $FormattedCharSequence;
        withStyle(arg0: $UnaryOperator_<$Style>): $MutableComponent;
        withStyle(arg0: $ChatFormatting_): $MutableComponent;
        withStyle(...arg0: $ChatFormatting_[]): $MutableComponent;
        withStyle(arg0: $Style): $MutableComponent;
        contains(arg0: $Component_): boolean;
        copy(): $MutableComponent;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        getString(arg0: number): string;
        getString(): string;
        plainCopy(): $MutableComponent;
        toFlatList(): $List<$Component>;
        toFlatList(arg0: $Style): $List<$Component>;
        tryCollapseToString(): string;
        getCodec(): $Codec<never>;
        forEach(action: $Consumer_<$Component>): void;
        noColor(): $MutableComponent;
        insertion(s: string): $MutableComponent;
        clickOpenFile(path: string): $MutableComponent;
        darkGray(): $MutableComponent;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        clickCopy(text: string): $MutableComponent;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        underlined(): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        clickOpenUrl(url: string): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        obfuscated(): $MutableComponent;
        darkGreen(): $MutableComponent;
        hasSiblings(): boolean;
        hasStyle(): boolean;
        asIterable(): $Iterable<$Component>;
        darkAqua(): $MutableComponent;
        darkRed(): $MutableComponent;
        darkPurple(): $MutableComponent;
        lightPurple(): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        strikethrough(): $MutableComponent;
        darkBlue(): $MutableComponent;
        isEmpty(): boolean;
        self(): $MutableComponent;
        hover(s: $Component_): $MutableComponent;
        blue(): $MutableComponent;
        white(): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        bold(): $MutableComponent;
        black(): $MutableComponent;
        aqua(): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        italic(): $MutableComponent;
        green(): $MutableComponent;
        red(): $MutableComponent;
        yellow(): $MutableComponent;
        gray(): $MutableComponent;
        gold(): $MutableComponent;
        clickRunCommand(command: string): $MutableComponent;
        clickChangePage(page: string): $MutableComponent;
        clickSuggestCommand(command: string): $MutableComponent;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        contents: $ComponentContents;
        constructor(arg0: $ComponentContents_, arg1: $List_<$Component_>, arg2: $Style);
        get siblings(): $List<$Component>;
        get visualOrderText(): $FormattedCharSequence;
        get codec(): $Codec<never>;
    }
    /**
     * Values that may be interpreted as {@link $MutableComponent}.
     */
    export type $MutableComponent_ = string | { text?: string, translate?: SpecialTypes.TranslationKey, with?: any[], color?: $KubeColor_, bold?: boolean, italic?: boolean, underlined?: boolean, strikethrough?: boolean, obfuscated?: boolean, insertion?: string, font?: string, click?: $ClickEvent_, hover?: $MutableComponent_, extra?: $MutableComponent_[],  } | $MutableComponent_[];
    export class $HoverEvent$TypedHoverEvent<T> extends $Record {
    }
    export class $ChatType$Bound extends $Record {
        name(): $Component;
        targetName(): ($Component) | undefined;
        chatType(): $Holder<$ChatType>;
        decorate(arg0: $Component_): $Component;
        withTargetName(arg0: $Component_): $ChatType$Bound;
        decorateNarration(arg0: $Component_): $Component;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatType$Bound>;
        constructor(arg0: $Holder_<$ChatType>, arg1: $Component_);
        constructor(arg0: $Holder_<$ChatType>, arg1: $Component_, arg2: ($Component_) | undefined);
    }
}
