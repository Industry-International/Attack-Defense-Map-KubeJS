import { $Instant } from "@package/java/time";
import { $KeyPairResponse } from "@package/com/mojang/authlib/yggdrasil/response";
import { $JsonObject_ } from "@package/com/google/gson";
import { $ProfileResult } from "@package/com/mojang/authlib/yggdrasil";
import { $InetAddress } from "@package/java/net";
import { $Executor_ } from "@package/java/util/concurrent";
import { $SignatureState_, $GameProfile, $SignatureState } from "@package/com/mojang/authlib";
import { $AbuseReportLimits } from "@package/com/mojang/authlib/minecraft/report";
import { $AbuseReportRequest_ } from "@package/com/mojang/authlib/yggdrasil/request";
import { $Enum, $Record } from "@package/java/lang";
import { $UUID, $Map_, $Map, $Set, $UUID_, $Set_ } from "@package/java/util";
import { $Property_, $Property } from "@package/com/mojang/authlib/properties";
export * as report from "@package/com/mojang/authlib/minecraft/report";

declare module "@package/com/mojang/authlib/minecraft" {
    export class $TelemetryPropertyContainer {
        static forJsonObject(arg0: $JsonObject_): $TelemetryPropertyContainer;
    }
    export interface $TelemetryPropertyContainer {
        addProperty(arg0: string, arg1: boolean): void;
        addProperty(arg0: string, arg1: number): void;
        addProperty(arg0: string, arg1: number): void;
        addProperty(arg0: string, arg1: string): void;
        addNullProperty(arg0: string): void;
    }
    export class $TelemetryEvent {
        static EMPTY: $TelemetryEvent;
    }
    export interface $TelemetryEvent extends $TelemetryPropertyContainer {
        send(): void;
    }
    export class $MinecraftProfileTexture {
        getUrl(): string;
        getMetadata(arg0: string): string;
        getHash(): string;
        static PROFILE_TEXTURE_COUNT: number;
        constructor(arg0: string, arg1: $Map_<string, string>);
        get url(): string;
        get hash(): string;
    }
    export class $TelemetrySession {
        static DISABLED: $TelemetrySession;
    }
    export interface $TelemetrySession {
        isEnabled(): boolean;
        createNewEvent(arg0: string): $TelemetryEvent;
        get enabled(): boolean;
    }
    export class $UserApiService$UserProperties extends $Record {
        flags(): $Set<$UserApiService$UserFlag>;
        flag(arg0: $UserApiService$UserFlag_): boolean;
        bannedScopes(): $Map<string, $BanDetails>;
        constructor(flags: $Set_<$UserApiService$UserFlag_>, bannedScopes: $Map_<string, $BanDetails_>);
    }
    export class $MinecraftSessionService {
    }
    export interface $MinecraftSessionService {
        joinServer(arg0: $UUID_, arg1: string, arg2: string): void;
        getSecurePropertyValue(arg0: $Property_): string;
        unpackTextures(arg0: $Property_): $MinecraftProfileTextures;
        hasJoinedServer(arg0: string, arg1: string, arg2: $InetAddress): $ProfileResult;
        getPackedTextures(arg0: $GameProfile): $Property;
        getTextures(arg0: $GameProfile): $MinecraftProfileTextures;
        fetchProfile(arg0: $UUID_, arg1: boolean): $ProfileResult;
    }
    export class $MinecraftProfileTextures extends $Record {
        cape(): $MinecraftProfileTexture;
        skin(): $MinecraftProfileTexture;
        elytra(): $MinecraftProfileTexture;
        signatureState(): $SignatureState;
        static EMPTY: $MinecraftProfileTextures;
        constructor(skin: $MinecraftProfileTexture, cape: $MinecraftProfileTexture, elytra: $MinecraftProfileTexture, signatureState: $SignatureState_);
    }
    export class $UserApiService$UserFlag extends $Enum<$UserApiService$UserFlag> {
        static values(): $UserApiService$UserFlag[];
        static valueOf(arg0: string): $UserApiService$UserFlag;
        static CHAT_ALLOWED: $UserApiService$UserFlag;
        static TELEMETRY_ENABLED: $UserApiService$UserFlag;
        static OPTIONAL_TELEMETRY_AVAILABLE: $UserApiService$UserFlag;
        static REALMS_ALLOWED: $UserApiService$UserFlag;
        static PROFANITY_FILTER_ENABLED: $UserApiService$UserFlag;
        static SERVERS_ALLOWED: $UserApiService$UserFlag;
    }
    /**
     * Values that may be interpreted as {@link $UserApiService$UserFlag}.
     */
    export type $UserApiService$UserFlag_ = "servers_allowed" | "realms_allowed" | "chat_allowed" | "telemetry_enabled" | "profanity_filter_enabled" | "optional_telemetry_available";
    export class $UserApiService {
        static OFFLINE_PROPERTIES: $UserApiService$UserProperties;
        static OFFLINE: $UserApiService;
    }
    export interface $UserApiService {
        getKeyPair(): $KeyPairResponse;
        getAbuseReportLimits(): $AbuseReportLimits;
        newTelemetrySession(arg0: $Executor_): $TelemetrySession;
        canSendReports(): boolean;
        reportAbuse(arg0: $AbuseReportRequest_): void;
        isBlockedPlayer(arg0: $UUID_): boolean;
        refreshBlockList(): void;
        fetchProperties(): $UserApiService$UserProperties;
        get keyPair(): $KeyPairResponse;
        get abuseReportLimits(): $AbuseReportLimits;
    }
    export class $BanDetails extends $Record {
        id(): $UUID;
        reason(): string;
        expires(): $Instant;
        reasonMessage(): string;
        static MULTIPLAYER_SCOPE: string;
        constructor(id: $UUID_, expires: $Instant, reason: string, reasonMessage: string);
    }
}
