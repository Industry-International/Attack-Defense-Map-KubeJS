import { $IntSet, $IntCollection } from "@package/it/unimi/dsi/fastutil/ints";
import { $Unit, $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Component_, $ThrowingComponent, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $Tooltip } from "@package/net/minecraft/client/gui/components";
import { $AbuseReport_, $AbuseReportLimits_, $AbuseReport, $AbuseReportLimits } from "@package/com/mojang/authlib/minecraft/report";
import { $Minecraft } from "@package/net/minecraft/client";
import { $AbuseReportRequest$ThirdPartyServerInfo, $AbuseReportRequest$RealmInfo, $AbuseReportRequest$ClientInfo } from "@package/com/mojang/authlib/yggdrasil/request";
import { $LoggedChatMessage$Player_, $LoggedChatMessage$Player, $ChatLog } from "@package/net/minecraft/client/multiplayer/chat";
import { $UUID, $UUID_ } from "@package/java/util";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";
import { $Instant } from "@package/java/time";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $Throwable, $Enum, $Record, $Runnable_ } from "@package/java/lang";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";

declare module "@package/net/minecraft/client/multiplayer/chat/report" {
    export class $ChatReportContextBuilder {
        isActive(): boolean;
        acceptContext(lastChainMessage: $PlayerChatMessage_): boolean;
        trackContext(lastChainMessage: $PlayerChatMessage_): void;
        collectAllContext(chatLog: $ChatLog, reportedMessages: $IntCollection, handler: $ChatReportContextBuilder$Handler_): void;
        leadingCount: number;
        constructor(leadingCount: number);
        get active(): boolean;
    }
    export class $ChatReport extends $Report {
        toggleReported(id: number, limits: $AbuseReportLimits_): void;
        reportedProfileId: $UUID;
        reportedMessages: $IntSet;
        createdAt: $Instant;
        reason: $ReportReason;
        comments: string;
        reportId: $UUID;
        attested: boolean;
        constructor(reportId: $UUID_, createdAt: $Instant, reportedProfileId: $UUID_);
    }
    export class $ReportEnvironment$Server {
    }
    export interface $ReportEnvironment$Server {
    }
    export class $NameReport$Builder extends $Report$Builder<$NameReport> {
        limits: $AbuseReportLimits;
        constructor(report: $NameReport, limits: $AbuseReportLimits_);
        constructor(reportedProfileId: $UUID_, reportedName: string, limits: $AbuseReportLimits_);
    }
    export class $Report$Builder<R extends $Report> {
        comments(): string;
        reason(): $ReportReason;
        build(reportingContext: $ReportingContext): $Either<$Report$Result, $Report$CannotBuildReason>;
        hasContent(): boolean;
        report(): R;
        setReason(reason: $ReportReason_): void;
        reportedProfileId(): $UUID;
        setComments(comments: string): void;
        setAttested(attested: boolean): void;
        checkBuildable(): $Report$CannotBuildReason;
        attested(): boolean;
        limits: $AbuseReportLimits;
        constructor(report: R, limits: $AbuseReportLimits_);
    }
    export class $Report$CannotBuildReason extends $Record {
        message(): $Component;
        tooltip(): $Tooltip;
        static NO_REPORTED_MESSAGES: $Report$CannotBuildReason;
        static NOT_ATTESTED: $Report$CannotBuildReason;
        static COMMENT_TOO_LONG: $Report$CannotBuildReason;
        static NO_REASON: $Report$CannotBuildReason;
        static TOO_MANY_MESSAGES: $Report$CannotBuildReason;
        constructor(arg0: $Component_);
    }
    export class $AbuseReportSender$Services extends $Record implements $AbuseReportSender {
        isEnabled(): boolean;
        environment(): $ReportEnvironment;
        send(id: $UUID_, reportType: $ReportType_, report: $AbuseReport_): $CompletableFuture<$Unit>;
        userApiService(): $UserApiService;
        reportLimits(): $AbuseReportLimits;
        constructor(arg0: $ReportEnvironment_, arg1: $UserApiService);
        get enabled(): boolean;
    }
    export class $ReportingContext {
        matches(environment: $ReportEnvironment_): boolean;
        static create(environment: $ReportEnvironment_, userApiService: $UserApiService): $ReportingContext;
        hasDraftReport(): boolean;
        draftReportHandled(minecraft: $Minecraft, screen: $Screen, quitter: $Runnable_, quitToTitle: boolean): void;
        sender(): $AbuseReportSender;
        setReportDraft(draftReport: $Report | null): void;
        hasDraftReportFor(uuid: $UUID_): boolean;
        chatLog(): $ChatLog;
        constructor(sender: $AbuseReportSender, enviroment: $ReportEnvironment_, chatLog: $ChatLog);
        set reportDraft(value: $Report | null);
    }
    export class $ReportEnvironment extends $Record {
        static create(server: $ReportEnvironment$Server | null): $ReportEnvironment;
        static local(): $ReportEnvironment;
        clientVersion(): string;
        server(): $ReportEnvironment$Server;
        thirdPartyServerInfo(): $AbuseReportRequest$ThirdPartyServerInfo;
        static realm(realmsServer: $RealmsServer): $ReportEnvironment;
        static thirdParty(ip: string): $ReportEnvironment;
        clientInfo(): $AbuseReportRequest$ClientInfo;
        realmInfo(): $AbuseReportRequest$RealmInfo;
        constructor(arg0: string, arg1: $ReportEnvironment$Server | null);
    }
    export class $AbuseReportSender$SendException extends $ThrowingComponent {
        constructor(arg0: $Component_, arg1: $Throwable);
    }
    export class $SkinReport extends $Report {
        getSkinGetter(): $Supplier<$PlayerSkin>;
        reportedProfileId: $UUID;
        createdAt: $Instant;
        reason: $ReportReason;
        comments: string;
        reportId: $UUID;
        skinGetter: $Supplier<$PlayerSkin>;
        attested: boolean;
        constructor(reportId: $UUID_, created: $Instant, reportedProfileId: $UUID_, skinGetter: $Supplier_<$PlayerSkin>);
    }
    export class $ReportEnvironment$Server$ThirdParty extends $Record implements $ReportEnvironment$Server {
        ip(): string;
        constructor(arg0: string);
    }
    export class $SkinReport$Builder extends $Report$Builder<$SkinReport> {
        limits: $AbuseReportLimits;
        constructor(report: $SkinReport, limits: $AbuseReportLimits_);
        constructor(reportedPlayerId: $UUID_, skinGetter: $Supplier_<$PlayerSkin>, limits: $AbuseReportLimits_);
    }
    export class $ReportReason extends $Enum<$ReportReason> {
        static values(): $ReportReason[];
        static valueOf(arg0: string): $ReportReason;
        description(): $Component;
        title(): $Component;
        backendName(): string;
        static HATE_SPEECH: $ReportReason;
        static ALCOHOL_TOBACCO_DRUGS: $ReportReason;
        static GENERIC: $ReportReason;
        static DEFAMATION_IMPERSONATION_FALSE_INFORMATION: $ReportReason;
        static NON_CONSENSUAL_INTIMATE_IMAGERY: $ReportReason;
        static SELF_HARM_OR_SUICIDE: $ReportReason;
        static HARASSMENT_OR_BULLYING: $ReportReason;
        static CHILD_SEXUAL_EXPLOITATION_OR_ABUSE: $ReportReason;
        static IMMINENT_HARM: $ReportReason;
        static TERRORISM_OR_VIOLENT_EXTREMISM: $ReportReason;
    }
    /**
     * Values that may be interpreted as {@link $ReportReason}.
     */
    export type $ReportReason_ = "generic" | "hate_speech" | "harassment_or_bullying" | "self_harm_or_suicide" | "imminent_harm" | "defamation_impersonation_false_information" | "alcohol_tobacco_drugs" | "child_sexual_exploitation_or_abuse" | "terrorism_or_violent_extremism" | "non_consensual_intimate_imagery";
    export class $ChatReport$Builder extends $Report$Builder<$ChatReport> {
        copy(): $ChatReport$Builder;
        toggleReported(id: number): void;
        isReported(id: number): boolean;
        reportedMessages(): $IntSet;
        limits: $AbuseReportLimits;
        constructor(report: $ChatReport, limits: $AbuseReportLimits_);
        constructor(reportedProfileId: $UUID_, limits: $AbuseReportLimits_);
    }
    export class $ReportType extends $Enum<$ReportType> {
        static values(): $ReportType[];
        static valueOf(arg0: string): $ReportType;
        backendName(): string;
        static CHAT: $ReportType;
        static USERNAME: $ReportType;
        static SKIN: $ReportType;
    }
    /**
     * Values that may be interpreted as {@link $ReportType}.
     */
    export type $ReportType_ = "chat" | "skin" | "username";
    export class $BanReason extends $Enum<$BanReason> {
        static values(): $BanReason[];
        static valueOf(arg0: string): $BanReason;
        title(): $Component;
        static byId(id: number): $BanReason;
        static HATE_SPEECH: $BanReason;
        static FRAUD: $BanReason;
        static SPAM_OR_ADVERTISING: $BanReason;
        static FALSE_REPORTING: $BanReason;
        static GENERIC_VIOLATION: $BanReason;
        static HARASSMENT_OR_BULLYING: $BanReason;
        static SEXUALLY_INAPPROPRIATE: $BanReason;
        static HATE_TERRORISM_NOTORIOUS_FIGURE: $BanReason;
        static DEFAMATION_IMPERSONATION_FALSE_INFORMATION: $BanReason;
        static NUDITY_OR_PORNOGRAPHY: $BanReason;
        static DRUGS: $BanReason;
        static EXTREME_VIOLENCE_OR_GORE: $BanReason;
        static IMMINENT_HARM_TO_PERSON_OR_PROPERTY: $BanReason;
    }
    /**
     * Values that may be interpreted as {@link $BanReason}.
     */
    export type $BanReason_ = "generic_violation" | "false_reporting" | "hate_speech" | "hate_terrorism_notorious_figure" | "harassment_or_bullying" | "defamation_impersonation_false_information" | "drugs" | "fraud" | "spam_or_advertising" | "nudity_or_pornography" | "sexually_inappropriate" | "extreme_violence_or_gore" | "imminent_harm_to_person_or_property";
    export class $ReportEnvironment$Server$Realm extends $Record implements $ReportEnvironment$Server {
        slotId(): number;
        realmId(): number;
        constructor(realmsServer: $RealmsServer);
        constructor(arg0: number, arg1: number);
    }
    export class $AbuseReportSender {
        static create(environment: $ReportEnvironment_, userApiService: $UserApiService): $AbuseReportSender;
    }
    export interface $AbuseReportSender {
        isEnabled(): boolean;
        send(id: $UUID_, reportType: $ReportType_, report: $AbuseReport_): $CompletableFuture<$Unit>;
        reportLimits(): $AbuseReportLimits;
        get enabled(): boolean;
    }
    export class $ChatReportContextBuilder$Handler {
    }
    export interface $ChatReportContextBuilder$Handler {
        accept(index: number, player: $LoggedChatMessage$Player_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChatReportContextBuilder$Handler}.
     */
    export type $ChatReportContextBuilder$Handler_ = ((arg0: number, arg1: $LoggedChatMessage$Player) => void);
    export class $ChatReportContextBuilder$Collector {
    }
    export class $Report {
        copy(): $Report;
        createScreen(lastScreen: $Screen, reportingContext: $ReportingContext): $Screen;
        isReportedPlayer(playerId: $UUID_): boolean;
        reportedProfileId: $UUID;
        createdAt: $Instant;
        reason: $ReportReason;
        comments: string;
        reportId: $UUID;
        attested: boolean;
        constructor(reportId: $UUID_, createdAt: $Instant, reportedProfileId: $UUID_);
    }
    export class $NameReport extends $Report {
        getReportedName(): string;
        reportedProfileId: $UUID;
        createdAt: $Instant;
        reason: $ReportReason;
        comments: string;
        reportId: $UUID;
        attested: boolean;
        constructor(reportId: $UUID_, createdAt: $Instant, reportedProfileId: $UUID_, reportedName: string);
        get reportedName(): string;
    }
    export class $Report$Result extends $Record {
        id(): $UUID;
        report(): $AbuseReport;
        reportType(): $ReportType;
        constructor(arg0: $UUID_, arg1: $ReportType_, arg2: $AbuseReport_);
    }
}
