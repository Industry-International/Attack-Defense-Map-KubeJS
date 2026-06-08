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
        trackContext(arg0: $PlayerChatMessage_): void;
        acceptContext(arg0: $PlayerChatMessage_): boolean;
        collectAllContext(arg0: $ChatLog, arg1: $IntCollection, arg2: $ChatReportContextBuilder$Handler_): void;
        leadingCount: number;
        constructor(arg0: number);
        get active(): boolean;
    }
    export class $ChatReport extends $Report {
        toggleReported(arg0: number, arg1: $AbuseReportLimits_): void;
        reportedProfileId: $UUID;
        reportedMessages: $IntSet;
        createdAt: $Instant;
        reason: $ReportReason;
        comments: string;
        reportId: $UUID;
        attested: boolean;
        constructor(arg0: $UUID_, arg1: $Instant, arg2: $UUID_);
    }
    export class $ReportEnvironment$Server {
    }
    export interface $ReportEnvironment$Server {
    }
    export class $NameReport$Builder extends $Report$Builder<$NameReport> {
        limits: $AbuseReportLimits;
        constructor(arg0: $NameReport, arg1: $AbuseReportLimits_);
        constructor(arg0: $UUID_, arg1: string, arg2: $AbuseReportLimits_);
    }
    export class $Report$Builder<R extends $Report> {
        comments(): string;
        reason(): $ReportReason;
        build(arg0: $ReportingContext): $Either<$Report$Result, $Report$CannotBuildReason>;
        setReason(arg0: $ReportReason_): void;
        report(): R;
        hasContent(): boolean;
        setComments(arg0: string): void;
        checkBuildable(): $Report$CannotBuildReason;
        setAttested(arg0: boolean): void;
        attested(): boolean;
        reportedProfileId(): $UUID;
        limits: $AbuseReportLimits;
        constructor(arg0: R, arg1: $AbuseReportLimits_);
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
        send(arg0: $UUID_, arg1: $ReportType_, arg2: $AbuseReport_): $CompletableFuture<$Unit>;
        userApiService(): $UserApiService;
        reportLimits(): $AbuseReportLimits;
        constructor(arg0: $ReportEnvironment_, arg1: $UserApiService);
        get enabled(): boolean;
    }
    export class $ReportingContext {
        matches(arg0: $ReportEnvironment_): boolean;
        static create(arg0: $ReportEnvironment_, arg1: $UserApiService): $ReportingContext;
        sender(): $AbuseReportSender;
        draftReportHandled(arg0: $Minecraft, arg1: $Screen, arg2: $Runnable_, arg3: boolean): void;
        hasDraftReport(): boolean;
        setReportDraft(arg0: $Report): void;
        hasDraftReportFor(arg0: $UUID_): boolean;
        chatLog(): $ChatLog;
        constructor(arg0: $AbuseReportSender, arg1: $ReportEnvironment_, arg2: $ChatLog);
        set reportDraft(value: $Report);
    }
    export class $ReportEnvironment extends $Record {
        static create(arg0: $ReportEnvironment$Server): $ReportEnvironment;
        static local(): $ReportEnvironment;
        server(): $ReportEnvironment$Server;
        clientVersion(): string;
        static realm(arg0: $RealmsServer): $ReportEnvironment;
        static thirdParty(arg0: string): $ReportEnvironment;
        clientInfo(): $AbuseReportRequest$ClientInfo;
        realmInfo(): $AbuseReportRequest$RealmInfo;
        thirdPartyServerInfo(): $AbuseReportRequest$ThirdPartyServerInfo;
        constructor(arg0: string, arg1: $ReportEnvironment$Server);
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
        constructor(arg0: $UUID_, arg1: $Instant, arg2: $UUID_, arg3: $Supplier_<$PlayerSkin>);
    }
    export class $ReportEnvironment$Server$ThirdParty extends $Record implements $ReportEnvironment$Server {
        ip(): string;
        constructor(arg0: string);
    }
    export class $SkinReport$Builder extends $Report$Builder<$SkinReport> {
        limits: $AbuseReportLimits;
        constructor(arg0: $SkinReport, arg1: $AbuseReportLimits_);
        constructor(arg0: $UUID_, arg1: $Supplier_<$PlayerSkin>, arg2: $AbuseReportLimits_);
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
        reportedMessages(): $IntSet;
        toggleReported(arg0: number): void;
        isReported(arg0: number): boolean;
        limits: $AbuseReportLimits;
        constructor(arg0: $ChatReport, arg1: $AbuseReportLimits_);
        constructor(arg0: $UUID_, arg1: $AbuseReportLimits_);
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
        static byId(arg0: number): $BanReason;
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
        constructor(arg0: $RealmsServer);
        constructor(arg0: number, arg1: number);
    }
    export class $AbuseReportSender {
        static create(arg0: $ReportEnvironment_, arg1: $UserApiService): $AbuseReportSender;
    }
    export interface $AbuseReportSender {
        isEnabled(): boolean;
        send(arg0: $UUID_, arg1: $ReportType_, arg2: $AbuseReport_): $CompletableFuture<$Unit>;
        reportLimits(): $AbuseReportLimits;
        get enabled(): boolean;
    }
    export class $ChatReportContextBuilder$Handler {
    }
    export interface $ChatReportContextBuilder$Handler {
        accept(arg0: number, arg1: $LoggedChatMessage$Player_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChatReportContextBuilder$Handler}.
     */
    export type $ChatReportContextBuilder$Handler_ = ((arg0: number, arg1: $LoggedChatMessage$Player) => void);
    export class $ChatReportContextBuilder$Collector {
    }
    export class $Report {
        copy(): $Report;
        createScreen(arg0: $Screen, arg1: $ReportingContext): $Screen;
        isReportedPlayer(arg0: $UUID_): boolean;
        reportedProfileId: $UUID;
        createdAt: $Instant;
        reason: $ReportReason;
        comments: string;
        reportId: $UUID;
        attested: boolean;
        constructor(arg0: $UUID_, arg1: $Instant, arg2: $UUID_);
    }
    export class $NameReport extends $Report {
        getReportedName(): string;
        reportedProfileId: $UUID;
        createdAt: $Instant;
        reason: $ReportReason;
        comments: string;
        reportId: $UUID;
        attested: boolean;
        constructor(arg0: $UUID_, arg1: $Instant, arg2: $UUID_, arg3: string);
        get reportedName(): string;
    }
    export class $Report$Result extends $Record {
        id(): $UUID;
        report(): $AbuseReport;
        reportType(): $ReportType;
        constructor(arg0: $UUID_, arg1: $ReportType_, arg2: $AbuseReport_);
    }
}
