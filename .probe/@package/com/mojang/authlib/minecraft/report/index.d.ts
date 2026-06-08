import { $Instant } from "@package/java/time";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/mojang/authlib/minecraft/report" {
    export class $AbuseReport extends $Record {
        static name(arg0: string, arg1: $ReportedEntity_, arg2: $Instant): $AbuseReport;
        reason(): string;
        static skin(arg0: string, arg1: string, arg2: string, arg3: $ReportedEntity_, arg4: $Instant): $AbuseReport;
        static chat(arg0: string, arg1: string, arg2: $ReportEvidence_, arg3: $ReportedEntity_, arg4: $Instant): $AbuseReport;
        createdTime(): $Instant;
        opinionComments(): string;
        reportedEntity(): $ReportedEntity;
        evidence(): $ReportEvidence;
        skinUrl(): string;
        constructor(opinionComments: string, reason: string, evidence: $ReportEvidence_, skinUrl: string, reportedEntity: $ReportedEntity_, createdTime: $Instant);
    }
    export class $ReportedEntity extends $Record {
        profileId(): $UUID;
        constructor(profileId: $UUID_);
    }
    export class $ReportChatMessage extends $Record {
        signature(): $ByteBuffer;
        index(): number;
        message(): string;
        timestamp(): $Instant;
        sessionId(): $UUID;
        salt(): number;
        profileId(): $UUID;
        lastSeen(): $List<$ByteBuffer>;
        messageReported(): boolean;
        constructor(index: number, profileId: $UUID_, sessionId: $UUID_, timestamp: $Instant, salt: number, lastSeen: $List_<$ByteBuffer>, message: string, signature: $ByteBuffer, messageReported: boolean);
    }
    export class $ReportEvidence extends $Record {
        messages(): $List<$ReportChatMessage>;
        constructor(messages: $List_<$ReportChatMessage_>);
    }
    export class $AbuseReportLimits extends $Record {
        maxEvidenceMessageCount(): number;
        maxReportedMessageCount(): number;
        leadingContextMessageCount(): number;
        trailingContextMessageCount(): number;
        maxOpinionCommentsLength(): number;
        static DEFAULTS: $AbuseReportLimits;
        constructor(maxOpinionCommentsLength: number, maxReportedMessageCount: number, maxEvidenceMessageCount: number, leadingContextMessageCount: number, trailingContextMessageCount: number);
    }
}
