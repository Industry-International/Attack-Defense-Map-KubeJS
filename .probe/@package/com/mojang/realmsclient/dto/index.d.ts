import { $JsonObject_, $JsonElement_ } from "@package/com/google/gson";
import { $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $ToDoubleFunction_, $Function_, $Consumer_, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $ProfileResult } from "@package/com/mojang/authlib/yggdrasil";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $URI } from "@package/java/net";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PopupScreen, $Button } from "@package/net/minecraft/client/gui/components";
import { $Enum, $Record, $Class, $Comparable, $Object } from "@package/java/lang";
import { $UUID, $List, $Map_, $UUID_, $Date, $Set_, $Comparator, $Map, $Set } from "@package/java/util";

declare module "@package/com/mojang/realmsclient/dto" {
    export class $RealmsText {
        static parse(arg0: $JsonObject_): $RealmsText;
        createComponent(arg0: $Component_): $Component;
        createComponent(): $Component;
    }
    export class $Ops extends $ValueObject {
        static parse(arg0: string): $Ops;
        ops: $Set<string>;
        constructor();
    }
    export class $PendingInvitesList extends $ValueObject {
        static parse(arg0: string): $PendingInvitesList;
        pendingInvites: $List<$PendingInvite>;
        constructor();
    }
    export class $ServerActivityList extends $ValueObject {
        static parse(arg0: string): $ServerActivityList;
        periodInMillis: number;
        serverActivities: $List<$ServerActivity>;
        constructor();
    }
    export class $Subscription$SubscriptionType extends $Enum<$Subscription$SubscriptionType> {
        static values(): $Subscription$SubscriptionType[];
        static valueOf(arg0: string): $Subscription$SubscriptionType;
        static NORMAL: $Subscription$SubscriptionType;
        static RECURRING: $Subscription$SubscriptionType;
    }
    /**
     * Values that may be interpreted as {@link $Subscription$SubscriptionType}.
     */
    export type $Subscription$SubscriptionType_ = "normal" | "recurring";
    export class $UploadInfo extends $ValueObject {
        static parse(arg0: string): $UploadInfo;
        getToken(): string;
        static createRequest(arg0: string): string;
        static assembleUri(arg0: string, arg1: number): $URI;
        isWorldClosed(): boolean;
        getUploadEndpoint(): $URI;
        get token(): string;
        get worldClosed(): boolean;
        get uploadEndpoint(): $URI;
    }
    export class $WorldTemplate extends $ValueObject {
        static parse(arg0: $JsonObject_): $WorldTemplate;
        trailer: string;
        image: string;
        author: string;
        name: string;
        link: string;
        recommendedPlayers: string;
        id: string;
        type: $WorldTemplate$WorldTemplateType;
        version: string;
        constructor();
    }
    export class $RealmsServerPlayerLists extends $ValueObject {
        static parse(arg0: string): $RealmsServerPlayerLists;
        getProfileResultsFor(arg0: number): $List<$ProfileResult>;
        servers: $Map<number, $List<$ProfileResult>>;
        constructor();
    }
    export class $RealmsNotification {
        uuid(): $UUID;
        seen(): boolean;
        static parseList(arg0: string): $List<$RealmsNotification>;
        dismissable(): boolean;
    }
    export class $PlayerInfo extends $ValueObject implements $ReflectionBasedSerialization {
        getName(): string;
        setName(arg0: string): void;
        isOperator(): boolean;
        getUuid(): $UUID;
        getOnline(): boolean;
        setUuid(arg0: $UUID_): void;
        setOperator(arg0: boolean): void;
        setOnline(arg0: boolean): void;
        getAccepted(): boolean;
        setAccepted(arg0: boolean): void;
        constructor();
    }
    export class $RealmsServerAddress extends $ValueObject {
        static parse(arg0: string): $RealmsServerAddress;
        address: string;
        resourcePackHash: string;
        resourcePackUrl: string;
        constructor();
    }
    export class $PendingInvite extends $ValueObject {
        static parse(arg0: $JsonObject_): $PendingInvite;
        date: $Date;
        realmName: string;
        realmOwnerUuid: $UUID;
        invitationId: string;
        realmOwnerName: string;
        constructor();
    }
    export class $RealmsServer$McoServerComparator implements $Comparator<$RealmsServer> {
        compare(arg0: $RealmsServer, arg1: $RealmsServer): number;
        reversed(): $Comparator<$RealmsServer>;
        thenComparing<U>(arg0: $Function_<$RealmsServer, U>, arg1: $Comparator<U>): $Comparator<$RealmsServer>;
        thenComparing(arg0: $Comparator<$RealmsServer>): $Comparator<$RealmsServer>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<$RealmsServer, U>): $Comparator<$RealmsServer>;
        thenComparingInt(arg0: $ToIntFunction_<$RealmsServer>): $Comparator<$RealmsServer>;
        thenComparingLong(arg0: $ToLongFunction_<$RealmsServer>): $Comparator<$RealmsServer>;
        thenComparingDouble(arg0: $ToDoubleFunction_<$RealmsServer>): $Comparator<$RealmsServer>;
        constructor(arg0: string);
    }
    export class $RealmsServerList extends $ValueObject {
        static parse(arg0: string): $RealmsServerList;
        servers: $List<$RealmsServer>;
        constructor();
    }
    export class $RegionPingResult extends $ValueObject implements $ReflectionBasedSerialization {
        ping(): number;
        constructor(arg0: string, arg1: number);
    }
    export class $ServerActivity extends $ValueObject {
        static parse(arg0: $JsonObject_): $ServerActivity;
        leaveTime: number;
        profileUuid: string;
        joinTime: number;
        constructor();
    }
    export class $PingResult extends $ValueObject implements $ReflectionBasedSerialization {
        pingResults: $List<$RegionPingResult>;
        realmIds: $List<number>;
        constructor();
    }
    export class $RealmsServer extends $ValueObject {
        getName(): string;
        clone(): $Object;
        setName(arg0: string): void;
        static parse(arg0: string): $RealmsServer;
        static parse(arg0: $JsonObject_): $RealmsServer;
        static getCompatibility(arg0: string): $RealmsServer$Compatibility;
        setDescription(arg0: string): void;
        getDescription(): string;
        isCompatible(): boolean;
        isMinigameActive(): boolean;
        needsUpgrade(): boolean;
        isSnapshotRealm(): boolean;
        cloneSlots(arg0: $Map_<number, $RealmsWorldOptions>): $Map<number, $RealmsWorldOptions>;
        getMinigameName(): string;
        needsDowngrade(): boolean;
        getWorldName(arg0: number): string;
        toServerData(arg0: string): $ServerData;
        owner: string;
        motd: string;
        worldType: $RealmsServer$WorldType;
        ownerUUID: $UUID;
        expiredTrial: boolean;
        parentRealmId: number;
        players: $List<$PlayerInfo>;
        parentWorldName: string;
        minigameName: string;
        minigameImage: string;
        slots: $Map<number, $RealmsWorldOptions>;
        expired: boolean;
        activeSlot: number;
        minigameId: number;
        name: string;
        activeVersion: string;
        id: number;
        state: $RealmsServer$State;
        daysLeft: number;
        remoteSubscriptionId: string;
        compatibility: $RealmsServer$Compatibility;
        constructor();
        get compatible(): boolean;
        get minigameActive(): boolean;
        get snapshotRealm(): boolean;
    }
    export class $WorldDownload extends $ValueObject {
        static parse(arg0: string): $WorldDownload;
        resourcePackHash: string;
        downloadLink: string;
        resourcePackUrl: string;
        constructor();
    }
    export class $GuardedSerializer {
        fromJson<T extends $ReflectionBasedSerialization>(arg0: string, arg1: $Class<T>): T;
        toJson(arg0: $ReflectionBasedSerialization): string;
        toJson(arg0: $JsonElement_): string;
        constructor();
    }
    export class $Backup extends $ValueObject {
        static parse(arg0: $JsonElement_): $Backup;
        isUploadedVersion(): boolean;
        setUploadedVersion(arg0: boolean): void;
        metadata: $Map<string, string>;
        size: number;
        lastModifiedDate: $Date;
        backupId: string;
        changeList: $Map<string, string>;
        constructor();
    }
    export class $ValueObject {
        constructor();
    }
    export class $WorldTemplatePaginatedList extends $ValueObject {
        static parse(arg0: string): $WorldTemplatePaginatedList;
        isLastPage(): boolean;
        total: number;
        size: number;
        templates: $List<$WorldTemplate>;
        page: number;
        constructor();
        constructor(arg0: number);
        get lastPage(): boolean;
    }
    export class $RealmsNews extends $ValueObject {
        static parse(arg0: string): $RealmsNews;
        newsLink: string;
        constructor();
    }
    export class $RealmsWorldResetDto extends $ValueObject implements $ReflectionBasedSerialization {
        constructor(arg0: string, arg1: number, arg2: number, arg3: boolean, arg4: $Set_<string>);
    }
    export class $RealmsNotification$VisitUrl extends $RealmsNotification {
        getMessage(): $Component;
        static parse(arg0: $RealmsNotification, arg1: $JsonObject_): $RealmsNotification$VisitUrl;
        buildOpenLinkButton(arg0: $Screen): $Button;
        get message(): $Component;
    }
    export class $RealmsServer$Compatibility extends $Enum<$RealmsServer$Compatibility> {
        static values(): $RealmsServer$Compatibility[];
        static valueOf(arg0: string): $RealmsServer$Compatibility;
        isCompatible(): boolean;
        needsUpgrade(): boolean;
        needsDowngrade(): boolean;
        static COMPATIBLE: $RealmsServer$Compatibility;
        static NEEDS_DOWNGRADE: $RealmsServer$Compatibility;
        static UNVERIFIABLE: $RealmsServer$Compatibility;
        static NEEDS_UPGRADE: $RealmsServer$Compatibility;
        static INCOMPATIBLE: $RealmsServer$Compatibility;
        static RELEASE_TYPE_INCOMPATIBLE: $RealmsServer$Compatibility;
        get compatible(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RealmsServer$Compatibility}.
     */
    export type $RealmsServer$Compatibility_ = "unverifiable" | "incompatible" | "release_type_incompatible" | "needs_downgrade" | "needs_upgrade" | "compatible";
    export class $RealmsWorldOptions extends $ValueObject {
        clone(): $Object;
        static parse(arg0: $JsonObject_): $RealmsWorldOptions;
        toJson(): string;
        setEmpty(arg0: boolean): void;
        getSlotName(arg0: number): string;
        static createEmptyDefaults(): $RealmsWorldOptions;
        static createDefaults(): $RealmsWorldOptions;
        getDefaultSlotName(arg0: number): string;
        spawnMonsters: boolean;
        spawnProtection: number;
        commandBlocks: boolean;
        templateImage: string;
        pvp: boolean;
        spawnNPCs: boolean;
        templateId: number;
        version: string;
        empty: boolean;
        difficulty: number;
        spawnAnimals: boolean;
        gameMode: number;
        forceGameMode: boolean;
        compatibility: $RealmsServer$Compatibility;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: number, arg5: boolean, arg6: number, arg7: number, arg8: boolean, arg9: string, arg10: string, arg11: $RealmsServer$Compatibility_);
    }
    export class $RealmsServer$State extends $Enum<$RealmsServer$State> {
        static values(): $RealmsServer$State[];
        static valueOf(arg0: string): $RealmsServer$State;
        static CLOSED: $RealmsServer$State;
        static UNINITIALIZED: $RealmsServer$State;
        static OPEN: $RealmsServer$State;
    }
    /**
     * Values that may be interpreted as {@link $RealmsServer$State}.
     */
    export type $RealmsServer$State_ = "closed" | "open" | "uninitialized";
    export class $WorldTemplate$WorldTemplateType extends $Enum<$WorldTemplate$WorldTemplateType> {
        static values(): $WorldTemplate$WorldTemplateType[];
        static valueOf(arg0: string): $WorldTemplate$WorldTemplateType;
        static ADVENTUREMAP: $WorldTemplate$WorldTemplateType;
        static WORLD_TEMPLATE: $WorldTemplate$WorldTemplateType;
        static MINIGAME: $WorldTemplate$WorldTemplateType;
        static EXPERIENCE: $WorldTemplate$WorldTemplateType;
        static INSPIRATION: $WorldTemplate$WorldTemplateType;
    }
    /**
     * Values that may be interpreted as {@link $WorldTemplate$WorldTemplateType}.
     */
    export type $WorldTemplate$WorldTemplateType_ = "world_template" | "minigame" | "adventuremap" | "experience" | "inspiration";
    export class $Subscription extends $ValueObject {
        static parse(arg0: string): $Subscription;
        daysLeft: number;
        type: $Subscription$SubscriptionType;
        startDate: number;
        constructor();
    }
    export class $BackupList extends $ValueObject {
        static parse(arg0: string): $BackupList;
        backups: $List<$Backup>;
        constructor();
    }
    export class $RealmsNotification$UrlButton extends $Record {
    }
    export class $RealmsDescriptionDto extends $ValueObject implements $ReflectionBasedSerialization {
        name: string;
        description: string;
        constructor(arg0: string, arg1: string);
    }
    export class $RealmsNotification$InfoPopup extends $RealmsNotification {
        static parse(arg0: $RealmsNotification, arg1: $JsonObject_): $RealmsNotification$InfoPopup;
        buildScreen(arg0: $Screen, arg1: $Consumer_<$UUID>): $PopupScreen;
    }
    export class $ReflectionBasedSerialization {
    }
    export interface $ReflectionBasedSerialization {
    }
    export class $RealmsServer$WorldType extends $Enum<$RealmsServer$WorldType> {
        static values(): $RealmsServer$WorldType[];
        static valueOf(arg0: string): $RealmsServer$WorldType;
        static ADVENTUREMAP: $RealmsServer$WorldType;
        static MINIGAME: $RealmsServer$WorldType;
        static EXPERIENCE: $RealmsServer$WorldType;
        static NORMAL: $RealmsServer$WorldType;
        static INSPIRATION: $RealmsServer$WorldType;
    }
    /**
     * Values that may be interpreted as {@link $RealmsServer$WorldType}.
     */
    export type $RealmsServer$WorldType_ = "normal" | "minigame" | "adventuremap" | "experience" | "inspiration";
}
