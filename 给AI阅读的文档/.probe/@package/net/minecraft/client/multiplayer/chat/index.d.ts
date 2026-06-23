import { $Instant } from "@package/java/time";
import { $BooleanSupplier, $BooleanSupplier_ } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $MessageSignature_, $Component_, $PlayerChatMessage, $ChatType$Bound_, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $GuiMessageTag } from "@package/net/minecraft/client";
import { $Enum, $Record } from "@package/java/lang";
import { $UUID, $UUID_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as report from "@package/net/minecraft/client/multiplayer/chat/report";

declare module "@package/net/minecraft/client/multiplayer/chat" {
    export class $LoggedChatMessage$Player extends $Record implements $LoggedChatMessage {
        type(): $LoggedChatEvent$Type;
        profile(): $GameProfile;
        message(): $PlayerChatMessage;
        canReport(uuid: $UUID_): boolean;
        profileId(): $UUID;
        trustLevel(): $ChatTrustLevel;
        toHeadingComponent(): $Component;
        toContentComponent(): $Component;
        toNarrationComponent(): $Component;
        static CODEC: $MapCodec<$LoggedChatMessage$Player>;
        constructor(arg0: $GameProfile, arg1: $PlayerChatMessage_, arg2: $ChatTrustLevel_);
    }
    export class $LoggedChatEvent$Type extends $Enum<$LoggedChatEvent$Type> implements $StringRepresentable {
        static values(): $LoggedChatEvent$Type[];
        static valueOf(arg0: string): $LoggedChatEvent$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PLAYER: $LoggedChatEvent$Type;
        static SYSTEM: $LoggedChatEvent$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatEvent$Type}.
     */
    export type $LoggedChatEvent$Type_ = "player" | "system";
    export class $ChatTrustLevel extends $Enum<$ChatTrustLevel> implements $StringRepresentable {
        static values(): $ChatTrustLevel[];
        static valueOf(arg0: string): $ChatTrustLevel;
        static evaluate(chatMessage: $PlayerChatMessage_, decoratedServerContent: $Component_, timestamp: $Instant): $ChatTrustLevel;
        createTag(chatMessage: $PlayerChatMessage_): $GuiMessageTag;
        getSerializedName(): string;
        isNotSecure(): boolean;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ChatTrustLevel>;
        static SECURE: $ChatTrustLevel;
        static MODIFIED: $ChatTrustLevel;
        static NOT_SECURE: $ChatTrustLevel;
        get serializedName(): string;
        get notSecure(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChatTrustLevel}.
     */
    export type $ChatTrustLevel_ = "secure" | "modified" | "not_secure";
    export class $ChatListener {
        tick(): void;
        queueSize(): number;
        handler$boh000$chat_heads$chatheads$handleAddedPlayerMessage(bound: $ChatType$Bound_, playerChatMessage: $PlayerChatMessage_, message: $Component_, gameProfile: $GameProfile, bl: boolean, instant: $Instant, cir: $CallbackInfoReturnable<any>): void;
        handler$boh000$chat_heads$chatheads$handleAddedSystemMessage(message: $Component_, bl: boolean, ci: $CallbackInfo): void;
        modify$bpa000$chat_heads$chatheads$handleAddedDisguisedMessage(original: $BooleanSupplier_, undecoratedMessage: $Component_, bound: $ChatType$Bound_): $BooleanSupplier;
        handleSystemMessage(message: $Component_, isOverlay: boolean): void;
        acceptNextDelayedMessage(): void;
        removeFromDelayedMessageQueue(signature: $MessageSignature_): boolean;
        handleChatMessageError(sender: $UUID_, boundChatType: $ChatType$Bound_): void;
        handleDisguisedChatMessage(message: $Component_, boundChatType: $ChatType$Bound_): void;
        handlePlayerChatMessage(chatMessage: $PlayerChatMessage_, gameProfile: $GameProfile, boundChatType: $ChatType$Bound_): void;
        setMessageDelay(delaySeconds: number): void;
        clearQueue(): void;
        handler$dna001$xaeroworldmap$onHandleDisguisedChatMessag(arg0: $Component_, arg1: $ChatType$Bound_, arg2: $CallbackInfo): void;
        handler$dff000$xaerominimap$onHandleDisguisedChatMessag(arg0: $Component_, arg1: $ChatType$Bound_, arg2: $CallbackInfo): void;
        handler$dff000$xaerominimap$onHandleSystemChat(arg0: $Component_, arg1: boolean, arg2: $CallbackInfo): void;
        handler$dna001$xaeroworldmap$onHandleSystemChat(arg0: $Component_, arg1: boolean, arg2: $CallbackInfo): void;
        static $assertionsDisabled: boolean;
        constructor(minecraft: $Minecraft);
        set messageDelay(value: number);
    }
    export class $LoggedChatMessage {
        static system(message: $Component_, timestamp: $Instant): $LoggedChatMessage$System;
        static player(profile: $GameProfile, message: $PlayerChatMessage_, trustLevel: $ChatTrustLevel_): $LoggedChatMessage$Player;
    }
    export interface $LoggedChatMessage extends $LoggedChatEvent {
        canReport(uuid: $UUID_): boolean;
        toContentComponent(): $Component;
        toNarrationComponent(): $Component;
    }
    export class $ChatListener$Message extends $Record {
    }
    export class $LoggedChatMessage$System extends $Record implements $LoggedChatMessage {
        type(): $LoggedChatEvent$Type;
        message(): $Component;
        timeStamp(): $Instant;
        canReport(uuid: $UUID_): boolean;
        toContentComponent(): $Component;
        toNarrationComponent(): $Component;
        static CODEC: $MapCodec<$LoggedChatMessage$System>;
        constructor(arg0: $Component_, arg1: $Instant);
    }
    export class $LoggedChatEvent {
        static CODEC: $Codec<$LoggedChatEvent>;
    }
    export interface $LoggedChatEvent {
        type(): $LoggedChatEvent$Type;
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatEvent}.
     */
    export type $LoggedChatEvent_ = (() => $LoggedChatEvent$Type_);
    export class $ChatLog {
        end(): number;
        lookup(id: number): $LoggedChatEvent;
        start(): number;
        push(event: $LoggedChatEvent_): void;
        static codec(size: number): $Codec<$ChatLog>;
        constructor(size: number);
    }
}
