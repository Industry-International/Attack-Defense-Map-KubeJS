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
        static teamMessage(translationKey: string): $ChatTypeDecoration;
        translationKey(): string;
        decorate(content: $Component_, boundChatType: $ChatType$Bound_): $Component;
        static withSender(translationKey: string): $ChatTypeDecoration;
        static outgoingDirectMessage(translationKey: string): $ChatTypeDecoration;
        static incomingDirectMessage(translationKey: string): $ChatTypeDecoration;
        static CODEC: $Codec<$ChatTypeDecoration>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatTypeDecoration>;
        constructor(arg0: string, arg1: $List_<$ChatTypeDecoration$Parameter_>, arg2: $Style);
    }
    export class $MessageSignatureCache {
        push(signedMessageBody: $SignedMessageBody_, signature: $MessageSignature_ | null): void;
        push(chatMessages: $List_<$MessageSignature_>): void;
        pack(signature: $MessageSignature_): number;
        unpack(index: number): $MessageSignature;
        static createDefault(): $MessageSignatureCache;
        static NOT_FOUND: number;
        constructor(size: number);
    }
    export class $SignedMessageLink extends $Record {
        index(): number;
        static root(sender: $UUID_, sessionId: $UUID_): $SignedMessageLink;
        advance(): $SignedMessageLink;
        static unsigned(sender: $UUID_): $SignedMessageLink;
        sender(): $UUID;
        sessionId(): $UUID;
        isDescendantOf(other: $SignedMessageLink_): boolean;
        updateSignature(output: $SignatureUpdater$Output_): void;
        static CODEC: $Codec<$SignedMessageLink>;
        constructor(arg0: number, arg1: $UUID_, arg2: $UUID_);
    }
    export class $SignedMessageBody extends $Record {
        content(): string;
        static unsigned(content: string): $SignedMessageBody;
        timeStamp(): $Instant;
        salt(): number;
        pack(signatureCache: $MessageSignatureCache): $SignedMessageBody$Packed;
        lastSeen(): $LastSeenMessages;
        updateSignature(output: $SignatureUpdater$Output_): void;
        static MAP_CODEC: $MapCodec<$SignedMessageBody>;
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $LastSeenMessages_);
    }
    export class $ComponentContents {
    }
    export interface $ComponentContents {
        type(): $ComponentContents$Type<never>;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ComponentContents}.
     */
    export type $ComponentContents_ = (() => $ComponentContents$Type_<never>);
    export class $RemoteChatSession extends $Record {
        profilePublicKey(): $ProfilePublicKey;
        sessionId(): $UUID;
        hasExpired(): boolean;
        createMessageDecoder(sender: $UUID_): $SignedMessageChain$Decoder;
        asData(): $RemoteChatSession$Data;
        createMessageValidator(duration: $Duration_): $SignedMessageValidator;
        constructor(arg0: $UUID_, arg1: $ProfilePublicKey_);
    }
    export class $ChatType extends $Record {
        static bootstrap(context: $BootstrapContext<$ChatType_>): void;
        static bind(chatTypeKey: $ResourceKey_<$ChatType>, entity: $Entity): $ChatType$Bound;
        static bind(chatTypeKey: $ResourceKey_<$ChatType>, registryAccess: $RegistryAccess, name: $Component_): $ChatType$Bound;
        static bind(chatTypeKey: $ResourceKey_<$ChatType>, source: $CommandSourceStack): $ChatType$Bound;
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
        select(content: $Component_, boundChatType: $ChatType$Bound_): $Component;
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
        static create(message: $PlayerChatMessage_): $OutgoingChatMessage;
    }
    export interface $OutgoingChatMessage {
        content(): $Component;
        sendToPlayer(player: $ServerPlayer, filtered: boolean, boundType: $ChatType$Bound_): void;
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
        decorate(player: $ServerPlayer | null, message: $Component_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatDecorator}.
     */
    export type $ChatDecorator_ = ((arg0: $ServerPlayer, arg1: $Component) => $Component_);
    export class $SignedMessageChain$Encoder {
        static UNSIGNED: $SignedMessageChain$Encoder;
    }
    export interface $SignedMessageChain$Encoder {
        pack(body: $SignedMessageBody_): $MessageSignature;
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
        write(buffer: $FriendlyByteBuf): void;
        content(): string;
        timeStamp(): $Instant;
        salt(): number;
        unpack(signatureCache: $MessageSignatureCache): ($SignedMessageBody) | undefined;
        lastSeen(): $LastSeenMessages$Packed;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $LastSeenMessages$Packed_);
    }
    export class $LastSeenMessages extends $Record {
        entries(): $List<$MessageSignature>;
        pack(signatureCache: $MessageSignatureCache): $LastSeenMessages$Packed;
        updateSignature(updaterOutput: $SignatureUpdater$Output_): void;
        static CODEC: $Codec<$LastSeenMessages>;
        static LAST_SEEN_MESSAGES_MAX_LENGTH: number;
        static EMPTY: $LastSeenMessages;
        constructor(arg0: $List_<$MessageSignature_>);
    }
    export class $HoverEvent$Action<T> implements $StringRepresentable {
        cast(parameter: $Object): T;
        /**
         * Indicates whether this event can be run from chat text.
         */
        isAllowedFromServer(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        codec: $MapCodec<$HoverEvent$TypedHoverEvent<T>>;
        static CODEC: $Codec<$HoverEvent$Action<never>>;
        static SHOW_ITEM: $HoverEvent$Action<$HoverEvent$ItemStackInfo>;
        static SHOW_ENTITY: $HoverEvent$Action<$HoverEvent$EntityTooltipInfo>;
        static UNSAFE_CODEC: $Codec<$HoverEvent$Action<never>>;
        static SHOW_TEXT: $HoverEvent$Action<$Component>;
        legacyCodec: $MapCodec<$HoverEvent$TypedHoverEvent<T>>;
        constructor(name: string, allowFromServer: boolean, codec: $Codec<T>, legacyConverter: $HoverEvent$LegacyConverter_<T>);
        get allowedFromServer(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    export class $LastSeenMessagesTracker$Update extends $Record {
        update(): $LastSeenMessages$Update;
        lastSeen(): $LastSeenMessages;
        constructor(arg0: $LastSeenMessages_, arg1: $LastSeenMessages$Update_);
    }
    export class $SignedMessageValidator$KeyBased implements $SignedMessageValidator {
        updateAndValidate(message: $PlayerChatMessage_): $PlayerChatMessage;
        constructor(validator: $SignatureValidator_, expired: $BooleanSupplier_);
    }
    export class $RemoteChatSession$Data extends $Record {
        validate(profile: $GameProfile, signatureValidator: $SignatureValidator_): $RemoteChatSession;
        static write(buffer: $FriendlyByteBuf, data: $RemoteChatSession$Data_): void;
        static read(buffer: $FriendlyByteBuf): $RemoteChatSession$Data;
        profilePublicKey(): $ProfilePublicKey$Data;
        sessionId(): $UUID;
        constructor(arg0: $UUID_, arg1: $ProfilePublicKey$Data_);
    }
    /**
     * A Style for `Component`.
     * Stores color, text formatting (bold, etc.) as well as possible HoverEvent/ClickEvent.
     */
    export class $Style {
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isEmpty(): boolean;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isObfuscated(): boolean;
        /**
         * The effective chat hover event.
         */
        getHoverEvent(): $HoverEvent;
        getColor(): $TextColor;
        withClickEvent(clickEvent: $ClickEvent_ | null): $Style;
        withColor(color: $TextColor_ | null): $Style;
        withColor(formatting: $ChatFormatting_ | null): $Style;
        withColor(rgb: number): $Style;
        /**
         * Merges the style with another one. If either style is empty the other will be returned. If a value already exists on the current style it will not be overridden.
         */
        applyTo(style: $Style): $Style;
        withBold(bold: boolean | null): $Style;
        withFont(fontId: $ResourceLocation_ | null): $Style;
        withItalic(bold: boolean | null): $Style;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isItalic(): boolean;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isBold(): boolean;
        /**
         * The font to use for this Style
         */
        getFont(): $ResourceLocation;
        applyFormats(...formats: $ChatFormatting_[]): $Style;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isStrikethrough(): boolean;
        /**
         * Get the text to be inserted into Chat when the component is shift-clicked
         */
        getInsertion(): string;
        withHoverEvent(hoverEvent: $HoverEvent | null): $Style;
        withObfuscated(bold: boolean | null): $Style;
        withStrikethrough(bold: boolean | null): $Style;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isUnderlined(): boolean;
        withInsertion(insertion: string | null): $Style;
        applyLegacyFormat(formatting: $ChatFormatting_): $Style;
        withUnderlined(bold: boolean | null): $Style;
        /**
         * The effective chat click event.
         */
        getClickEvent(): $ClickEvent;
        applyFormat(formatting: $ChatFormatting_): $Style;
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
        encoder(signer: $Signer_): $SignedMessageChain$Encoder;
        decoder(publicKey: $ProfilePublicKey_): $SignedMessageChain$Decoder;
        lastTimeStamp: $Instant;
        static LOGGER: $Logger;
        nextLink: $SignedMessageLink;
        constructor(sender: $UUID_, sessionId: $UUID_);
    }
    export class $MessageSignature extends $Record {
        asByteBuffer(): $ByteBuffer;
        bytes(): number[];
        static write(buffer: $FriendlyByteBuf, signature: $MessageSignature_): void;
        static read(buffer: $FriendlyByteBuf): $MessageSignature;
        verify(validator: $SignatureValidator_, updater: $SignatureUpdater_): boolean;
        pack(signatureCache: $MessageSignatureCache): $MessageSignature$Packed;
        static BYTES: number;
        static CODEC: $Codec<$MessageSignature>;
        constructor(bytes: number[]);
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
        static createLegacyComponentMatcher<T extends $StringRepresentable, E>(types: T[], codecGetter: $Function_<T, $MapCodec<E>>, typeGetter: $Function_<E, T>, typeFieldName: string): $MapCodec<E>;
        static flatCodec(maxSize: number): $Codec<$Component>;
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
        static of<S>(results: $ParseResults<S>): $SignableCommand<S>;
        "arguments"(): $List<$SignableCommand$Argument<S>>;
        getArgument(argument: string): $SignableCommand$Argument<S>;
        static hasSignableArguments<S>(parseResults: $ParseResults<S>): boolean;
        constructor(arg0: $List_<$SignableCommand$Argument_<S>>);
    }
    export class $ClickEvent implements $WithCodec {
        /**
         * Gets the value to perform the action on when this event is raised.  For example, if the action is "open URL", this would be the URL to open.
         */
        getValue(): string;
        /**
         * Gets the action to perform when this event is raised.
         */
        getAction(): $ClickEvent$Action;
        getCodec(): $Codec<any>;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        static CODEC: $Codec<$ClickEvent>;
        constructor(action: $ClickEvent$Action_, value: string);
        get value(): string;
        get action(): $ClickEvent$Action;
        get codec(): $Codec<any>;
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
        select(content: $Component_, boundChatType: $ChatType$Bound_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatTypeDecoration$Parameter$Selector}.
     */
    export type $ChatTypeDecoration$Parameter$Selector_ = ((arg0: $Component, arg1: $ChatType$Bound) => $Component_);
    export class $FormattedText {
        static of(text: string, style: $Style): $FormattedText;
        static of(text: string): $FormattedText;
        static composite(elements: $List_<$FormattedText>): $FormattedText;
        static composite(...elements: $FormattedText[]): $FormattedText;
        static EMPTY: $FormattedText;
        static STOP_ITERATION: ($Unit) | undefined;
    }
    export interface $FormattedText {
        visit<T>(acceptor: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(acceptor: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        get string(): string;
    }
    export class $Component$SerializerAdapter implements $JsonDeserializer<$MutableComponent>, $JsonSerializer<$Component> {
        serialize(src: $Component_, typeOfSrc: $Type, context: $JsonSerializationContext): $JsonElement;
        deserialize(json: $JsonElement_, typeOfT: $Type, context: $JsonDeserializationContext_): $MutableComponent;
        constructor(registries: $HolderLookup$Provider);
    }
    export class $MessageSignature$Packed extends $Record {
        id(): number;
        static write(buffer: $FriendlyByteBuf, packed: $MessageSignature$Packed_): void;
        static read(buffer: $FriendlyByteBuf): $MessageSignature$Packed;
        unpack(signatureCache: $MessageSignatureCache): ($MessageSignature) | undefined;
        fullSignature(): $MessageSignature;
        static FULL_SIGNATURE: number;
        constructor(arg0: number, arg1: $MessageSignature_ | null);
        constructor(id: number);
        constructor(fullSignature: $MessageSignature_);
    }
    export class $TextColor implements $KubeColor {
        getValue(): number;
        serialize(): string;
        static fromRgb(color: number): $TextColor;
        static fromLegacyFormat(formatting: $ChatFormatting_): $TextColor;
        static parseColor(color: string): $DataResult<$TextColor>;
        kjs$getRGB(): number;
        formatValue(): string;
        kjs$getARGB(): number;
        createTextColor(): $TextColor;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getFireworkRGB(): number;
        toHexString(): string;
        serialize(): string;
        static CODEC: $Codec<$TextColor>;
        static NAMED_COLORS: $Map<string, $TextColor>;
        constructor(value: number, name: string);
        get value(): number;
        get fireworkRGB(): number;
    }
    /**
     * Values that may be interpreted as {@link $TextColor}.
     */
    export type $TextColor_ = "" | "light_blue_dye" | "blue_dye" | "purple_dye" | "dark_red" | "lightgraydye" | "dark_aqua" | "none" | "green_dye" | "blackdye" | "dark_blue" | "red" | "pink_dye" | "aqua" | "white" | "white_dye" | "dark_gray" | "light_purple" | "brown_dye" | "black" | "darkpurple" | "none" | "light_blue_dye" | "aqua" | "lightbluedye" | "limedye" | "purple_dye" | "green_dye" | "magenta_dye" | "-" | "lime_dye" | "yellowdye" | "graydye" | "purpledye" | "dark_purple" | "orange_dye" | "darkgray" | "browndye" | "yellow" | "lime_dye" | "bluedye" | "white_dye" | "pinkdye" | "blue_dye" | "cyandye" | "gold" | "gray" | "magenta_dye" | "blue" | "light_gray_dye" | "yellow" | "darkblue" | "transparent" | "orange_dye" | "red_dye" | "dark_purple" | "gold" | "gray" | "light_purple" | "darkred" | "greendye" | "dark_red" | "reddye" | "gray_dye" | "orangedye" | "yellow_dye" | "black_dye" | "magentadye" | "white" | "green" | "light_gray_dye" | "black_dye" | "darkgreen" | "red_dye" | "dark_green" | "black" | "lightpurple" | "pink_dye" | "dark_blue" | "green" | "darkaqua" | "gray_dye" | "cyan_dye" | "red" | "brown_dye" | "cyan_dye" | "blue" | "whitedye" | "dark_aqua" | "yellow_dye" | "dark_green" | "dark_gray" | `#${string}` | number;
    export class $HoverEvent {
        getValue<T>(actionType: $HoverEvent$Action<T>): T;
        /**
         * Gets the action to perform when this event is raised.
         */
        getAction(): $HoverEvent$Action<never>;
        static CODEC: $Codec<$HoverEvent>;
        constructor<T>(action: $HoverEvent$Action<T>, value: T);
        get action(): $HoverEvent$Action<never>;
    }
    export class $LastSeenMessages$Update extends $Record {
        offset(): number;
        write(buffer: $FriendlyByteBuf): void;
        acknowledged(): $BitSet;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $BitSet);
    }
    export class $CommonComponents {
        static optionStatus(message: $Component_, composed: boolean): $MutableComponent;
        static optionStatus(isEnabled: boolean): $Component;
        static space(): $MutableComponent;
        static days(days: number): $MutableComponent;
        static hours(days: number): $MutableComponent;
        static minutes(days: number): $MutableComponent;
        static joinLines(lines: $Collection_<$Component_>): $Component;
        static joinLines(...lines: $Component_[]): $Component;
        static joinForNarration(...components: $Component_[]): $MutableComponent;
        static optionNameValue(caption: $Component_, valueMessage: $Component_): $MutableComponent;
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
        constructor(component: $Component_);
        constructor(component: $Component_, cause: $Throwable);
        get component(): $Component;
    }
    export class $HoverEvent$LegacyConverter<T> {
    }
    export interface $HoverEvent$LegacyConverter<T> {
        parse(name: $Component_, ops: $RegistryOps<never> | null): $DataResult<T>;
    }
    /**
     * Values that may be interpreted as {@link $HoverEvent$LegacyConverter}.
     */
    export type $HoverEvent$LegacyConverter_<T> = ((arg0: $Component, arg1: $RegistryOps<never>) => $DataResult<T>);
    export class $FilterMask {
        isEmpty(): boolean;
        apply(text: string): string;
        static write(buffer: $FriendlyByteBuf, mask: $FilterMask): void;
        static read(buffer: $FriendlyByteBuf): $FilterMask;
        applyWithFormatting(text: string): $Component;
        isFullyFiltered(): boolean;
        setFiltered(size: number): void;
        static PARTIALLY_FILTERED_CODEC: $MapCodec<$FilterMask>;
        static PASS_THROUGH: $FilterMask;
        static CODEC: $Codec<$FilterMask>;
        static FULLY_FILTERED: $FilterMask;
        static FILTERED_STYLE: $Style;
        static PASS_THROUGH_CODEC: $MapCodec<$FilterMask>;
        static FULLY_FILTERED_CODEC: $MapCodec<$FilterMask>;
        constructor(size: number);
        get empty(): boolean;
        get fullyFiltered(): boolean;
        set filtered(value: number);
    }
    export class $Component$Serializer {
        static serialize(component: $Component_, provider: $HolderLookup$Provider): $JsonElement;
        static deserialize(json: $JsonElement_, provider: $HolderLookup$Provider): $MutableComponent;
        static toJson(component: $Component_, registries: $HolderLookup$Provider): string;
        static fromJson(json: string, registries: $HolderLookup$Provider): $MutableComponent;
        static fromJson(json: $JsonElement_ | null, provider: $HolderLookup$Provider): $MutableComponent;
        static fromJsonLenient(json: string, registries: $HolderLookup$Provider): $MutableComponent;
    }
    export class $FormattedText$ContentConsumer<T> {
    }
    export interface $FormattedText$ContentConsumer<T> {
        accept(content: string): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $FormattedText$ContentConsumer}.
     */
    export type $FormattedText$ContentConsumer_<T> = ((arg0: string) => (T) | undefined);
    export class $ComponentUtils {
        static formatList(elements: $Collection_<string>): $Component;
        static formatList<T>(elements: $Collection_<T>, componentExtractor: $Function_<T, $Component>): $Component;
        static formatList<T>(elements: $Collection_<T>, optionalSeparator: ($Component_) | undefined, componentExtractor: $Function_<T, $Component>): $MutableComponent;
        static formatList(elements: $Collection_<$Component_>, separator: $Component_): $Component;
        static formatList<T>(elements: $Collection_<T>, separator: $Component_, componentExtractor: $Function_<T, $Component>): $MutableComponent;
        static updateForEntity(commandSourceStack: $CommandSourceStack | null, optionalComponent: ($Component_) | undefined, entity: $Entity | null, recursionDepth: number): ($MutableComponent) | undefined;
        static updateForEntity(commandSourceStack: $CommandSourceStack | null, component: $Component_, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        static fromMessage(message: $Message_): $Component;
        /**
         * Wraps the text with square brackets.
         */
        static wrapInSquareBrackets(toWrap: $Component_): $MutableComponent;
        /**
         * Merge the component's styles with the given Style.
         */
        static mergeStyles(component: $MutableComponent_, style: $Style): $MutableComponent;
        static isTranslationResolvable(component: $Component_ | null): boolean;
        static formatAndSortList<T extends $Comparable<T>>(elements: $Collection_<T>, componentExtractor: $Function_<T, $Component>): $Component;
        static copyOnClickText(text: string): $MutableComponent;
        static DEFAULT_NO_STYLE_SEPARATOR: $Component;
        static DEFAULT_SEPARATOR_TEXT: string;
        static DEFAULT_SEPARATOR: $Component;
        constructor();
    }
    export class $ClickEvent$Action extends $Enum<$ClickEvent$Action> implements $StringRepresentable {
        static values(): $ClickEvent$Action[];
        static valueOf(arg0: string): $ClickEvent$Action;
        static filterForSerialization(action: $ClickEvent$Action_): $DataResult<$ClickEvent$Action>;
        /**
         * Indicates whether this event can be run from chat text.
         */
        isAllowedFromServer(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $MapCodec<$ClickEvent$Action>;
        static UNSAFE_CODEC: $MapCodec<$ClickEvent$Action>;
        static RUN_COMMAND: $ClickEvent$Action;
        static CHANGE_PAGE: $ClickEvent$Action;
        static COPY_TO_CLIPBOARD: $ClickEvent$Action;
        static SUGGEST_COMMAND: $ClickEvent$Action;
        static OPEN_FILE: $ClickEvent$Action;
        static OPEN_URL: $ClickEvent$Action;
        get allowedFromServer(): boolean;
        get serializedName(): string;
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
        constructor(item: $Holder_<$Item>, count: number, components: $DataComponentPatch_);
        constructor(stack: $ItemStack_);
        get itemStack(): $ItemStack;
    }
    export class $FormattedText$StyledContentConsumer<T> {
    }
    export interface $FormattedText$StyledContentConsumer<T> {
        accept(style: $Style, content: string): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $FormattedText$StyledContentConsumer}.
     */
    export type $FormattedText$StyledContentConsumer_<T> = ((arg0: $Style, arg1: string) => (T) | undefined);
    export class $LocalChatSession extends $Record {
        static create(keyPair: $ProfileKeyPair_): $LocalChatSession;
        keyPair(): $ProfileKeyPair;
        createMessageEncoder(sender: $UUID_): $SignedMessageChain$Encoder;
        sessionId(): $UUID;
        asRemote(): $RemoteChatSession;
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
        updateAndValidate(message: $PlayerChatMessage_): $PlayerChatMessage;
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageValidator}.
     */
    export type $SignedMessageValidator_ = ((arg0: $PlayerChatMessage) => $PlayerChatMessage_);
    export class $ComponentSerialization$StrictEither<T> extends $MapCodec<T> {
    }
    export class $LastSeenMessagesValidator {
        applyOffset(offset: number): boolean;
        applyUpdate(lastSeenUpdater: $LastSeenMessages$Update_): ($LastSeenMessages) | undefined;
        trackedMessagesCount(): number;
        addPending(signature: $MessageSignature_): void;
        constructor(lastSeenCount: number);
    }
    export interface $ChatType extends RegistryMarked<RegistryTypes.ChatTypeTag, RegistryTypes.ChatType> {}
    export class $Component {
        /**
         * Creates a copy of this component and also copies the style and siblings. Note that the siblings are copied shallowly, meaning the siblings themselves are not copied.
         */
        static empty(): $MutableComponent;
        static literal(name: string): $MutableComponent;
        static selector(pattern: string, separator: ($Component_) | undefined): $MutableComponent;
        static translatable(name: string): $MutableComponent;
        static translatable(key: string, ...args: $Object[]): $MutableComponent;
        static score(name: string, objective: string): $MutableComponent;
        static translatableWithFallback(name: string, objective: string | null): $MutableComponent;
        static translatableWithFallback(key: string, fallback: string | null, ...args: $Object[]): $MutableComponent;
        static keybind(name: string): $MutableComponent;
        static nbt(nbtPathPattern: string, interpreting: boolean, separator: ($Component_) | undefined, dataSource: $DataSource): $MutableComponent;
        static translationArg(message: $Message_): $Component;
        static translationArg(location: $ResourceLocation_): $Component;
        static translationArg(uuid: $UUID_): $Component;
        static translationArg(date: $Date): $Component;
        static translationArg(uri: $URI): $Component;
        static translationArg(chunkPos: $ChunkPos): $Component;
        static translatableEscape(key: string, ...args: $Object[]): $MutableComponent;
        static nullToEmpty(text: string | null): $Component;
    }
    export interface $Component extends $Message, $FormattedText {
        contains(other: $Component_): boolean;
        /**
         * Creates a copy of this component and also copies the style and siblings. Note that the siblings are copied shallowly, meaning the siblings themselves are not copied.
         */
        copy(): $MutableComponent;
        visit<T>(acceptor: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        visit<T>(acceptor: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes, limited to `maxLength` characters.
         */
        getString(maxLength: number): string;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        getContents(): $ComponentContents;
        getVisualOrderText(): $FormattedCharSequence;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        tryCollapseToString(): string;
        toFlatList(style: $Style): $List<$Component>;
        /**
         * Gets the sibling components of this one.
         */
        toFlatList(): $List<$Component>;
        /**
         * Creates a copy of this component and also copies the style and siblings. Note that the siblings are copied shallowly, meaning the siblings themselves are not copied.
         */
        plainCopy(): $MutableComponent;
        /**
         * Gets the sibling components of this one.
         */
        getSiblings(): $List<$Component>;
        /**
         * Gets the style of this component.
         */
        getStyle(): $Style;
        get contents(): $ComponentContents;
        get visualOrderText(): $FormattedCharSequence;
        get siblings(): $List<$Component>;
        get style(): $Style;
    }
    /**
     * Values that may be interpreted as {@link $Component}.
     */
    export type $Component_ = string | { text?: string, translate?: SpecialTypes.TranslationKey, with?: any[], color?: $KubeColor_, bold?: boolean, italic?: boolean, underlined?: boolean, strikethrough?: boolean, obfuscated?: boolean, insertion?: string, font?: string, click?: $ClickEvent_, hover?: $Component_, extra?: $Component_[],  } | $Component_[];
    export class $LastSeenMessages$Packed extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        entries(): $List<$MessageSignature$Packed>;
        unpack(signatureCache: $MessageSignatureCache): ($LastSeenMessages) | undefined;
        static EMPTY: $LastSeenMessages$Packed;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $List_<$MessageSignature$Packed_>);
    }
    export class $LastSeenMessagesTracker {
        offset(): number;
        generateAndApplyUpdate(): $LastSeenMessagesTracker$Update;
        ignorePending(signature: $MessageSignature_): void;
        getAndClearOffset(): number;
        addPending(signature: $MessageSignature_, acknowledged: boolean): boolean;
        constructor(size: number);
        get andClearOffset(): number;
    }
    export class $SignedMessageChain$Decoder {
        static unsigned(id: $UUID_, shouldEnforceSecureProfile: $BooleanSupplier_): $SignedMessageChain$Decoder;
    }
    export interface $SignedMessageChain$Decoder {
        unpack(signature: $MessageSignature_ | null, body: $SignedMessageBody_): $PlayerChatMessage;
        setChainBroken(): void;
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageChain$Decoder}.
     */
    export type $SignedMessageChain$Decoder_ = ((arg0: $MessageSignature, arg1: $SignedMessageBody) => $PlayerChatMessage_);
    export class $SubStringSource {
        substring(fromIndex: number, toIndex: number, reversed: boolean): $List<$FormattedCharSequence>;
        static create(formattedText: $FormattedText, reverseCharModifier: $Int2IntFunction_, textTransformer: $UnaryOperator_<string>): $SubStringSource;
        static create(formattedText: $FormattedText): $SubStringSource;
        getPlainText(): string;
        get plainText(): string;
    }
    export class $HoverEvent$EntityTooltipInfo {
        static legacyCreate(name: $Component_, ops: $RegistryOps<never> | null): $DataResult<$HoverEvent$EntityTooltipInfo>;
        getTooltipLines(): $List<$Component>;
        static CODEC: $Codec<$HoverEvent$EntityTooltipInfo>;
        name: ($Component) | undefined;
        id: $UUID;
        type: $EntityType<never>;
        constructor(type: $EntityType_<never>, id: $UUID_, name: $Component_ | null);
        constructor(type: $EntityType_<never>, id: $UUID_, name: ($Component_) | undefined);
        get tooltipLines(): $List<$Component>;
    }
    export class $PlayerChatMessage extends $Record implements $Ownable {
        withUnsignedContent(message: $Component_): $PlayerChatMessage;
        signature(): $MessageSignature;
        filter(mask: $FilterMask): $PlayerChatMessage;
        filter(shouldFilter: boolean): $PlayerChatMessage;
        static system(content: string): $PlayerChatMessage;
        verify(validator: $SignatureValidator_): boolean;
        link(): $SignedMessageLink;
        isSystem(): boolean;
        static unsigned(sender: $UUID_, content: string): $PlayerChatMessage;
        timeStamp(): $Instant;
        salt(): number;
        sender(): $UUID;
        removeUnsignedContent(): $PlayerChatMessage;
        isFullyFiltered(): boolean;
        hasSignature(): boolean;
        hasSignatureFrom(uuid: $UUID_): boolean;
        signedContent(): string;
        decoratedContent(): $Component;
        unsignedContent(): $Component;
        filterMask(): $FilterMask;
        signedBody(): $SignedMessageBody;
        chatheads$getOwner(): $PlayerInfo;
        chatheads$setOwner(playerInfo: $PlayerInfo): void;
        hasExpiredClient(timestamp: $Instant): boolean;
        removeSignature(): $PlayerChatMessage;
        hasExpiredServer(timestamp: $Instant): boolean;
        static updateSignature(output: $SignatureUpdater$Output_, link: $SignedMessageLink_, body: $SignedMessageBody_): void;
        static MESSAGE_EXPIRES_AFTER_SERVER: $Duration;
        static MAP_CODEC: $MapCodec<$PlayerChatMessage>;
        static MESSAGE_EXPIRES_AFTER_CLIENT: $Duration;
        constructor(arg0: $SignedMessageLink_, arg1: $MessageSignature_ | null, arg2: $SignedMessageBody_, arg3: $Component_ | null, arg4: $FilterMask);
        get fullyFiltered(): boolean;
    }
    /**
     * A Component which can have its Style and siblings modified.
     */
    export class $MutableComponent implements $Component, $ComponentKJS {
        /**
         * Add the given component to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        append(sibling: $Component_): $MutableComponent;
        static create(contents: $ComponentContents_): $MutableComponent;
        getContents(): $ComponentContents;
        getVisualOrderText(): $FormattedCharSequence;
        withStyle(format: $ChatFormatting_): $MutableComponent;
        withStyle(modifyFunc: $UnaryOperator_<$Style>): $MutableComponent;
        withStyle(...formats: $ChatFormatting_[]): $MutableComponent;
        /**
         * Sets the style for this component and returns the component itself.
         */
        withStyle(style: $Style): $MutableComponent;
        withColor(color: number): $MutableComponent;
        /**
         * Sets the style for this component and returns the component itself.
         */
        setStyle(style: $Style): $MutableComponent;
        /**
         * Gets the sibling components of this one.
         */
        getSiblings(): $List<$Component>;
        /**
         * Gets the style of this component.
         */
        getStyle(): $Style;
        contains(other: $Component_): boolean;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        copy(): $MutableComponent;
        visit<T>(acceptor: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        visit<T>(acceptor: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes, limited to `maxLength` characters.
         */
        getString(maxLength: number): string;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        tryCollapseToString(): string;
        toFlatList(style: $Style): $List<$Component>;
        /**
         * Gets the sibling components of this one.
         */
        toFlatList(): $List<$Component>;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        plainCopy(): $MutableComponent;
        forEach(action: $Consumer_<$Component>): void;
        getCodec(): $Codec<never>;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        self(): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickRunCommand(string: string): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickSuggestCommand(string: string): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickChangePage(string: string): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        italic(): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        bold(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        aqua(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        black(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        red(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        gold(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        yellow(): $MutableComponent;
        /**
         * Add the given component to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        hover(sibling: $Component_): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        gray(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        blue(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        white(): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        green(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        darkAqua(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        darkBlue(): $MutableComponent;
        isEmpty(): boolean;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        darkPurple(): $MutableComponent;
        /**
         * @deprecated
         * Creates a copy of this component, losing any style or siblings.
         */
        rawCopy(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        underlined(): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        insertion(string: string): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        strikethrough(): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        lightPurple(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        noColor(): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickCopy(string: string): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickOpenUrl(string: string): $MutableComponent;
        hasSiblings(): boolean;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickOpenFile(string: string): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        darkGreen(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        darkGray(): $MutableComponent;
        asIterable(): $Iterable<$Component>;
        hasStyle(): boolean;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        darkRed(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        obfuscated(): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        /**
         * @deprecated
         * Creates a copy of this component, losing any style or siblings.
         */
        rawComponent(): $MutableComponent;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        contents: $ComponentContents;
        constructor(contents: $ComponentContents_, siblings: $List_<$Component_>, style: $Style);
        get visualOrderText(): $FormattedCharSequence;
        get siblings(): $List<$Component>;
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
        decorate(content: $Component_): $Component;
        withTargetName(targetName: $Component_): $ChatType$Bound;
        decorateNarration(content: $Component_): $Component;
        chatType(): $Holder<$ChatType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatType$Bound>;
        constructor(chatType: $Holder_<$ChatType>, name: $Component_);
        constructor(arg0: $Holder_<$ChatType>, arg1: $Component_, arg2: ($Component_) | undefined);
    }
}
