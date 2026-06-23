import { $AbuseReport_, $AbuseReport } from "@package/com/mojang/authlib/minecraft/report";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/com/mojang/authlib/yggdrasil/request" {
    export class $AbuseReportRequest$RealmInfo extends $Record {
        slotId(): number;
        realmId(): string;
        constructor(realmId: string, slotId: number);
    }
    export class $AbuseReportRequest extends $Record {
        version(): number;
        id(): $UUID;
        report(): $AbuseReport;
        thirdPartyServerInfo(): $AbuseReportRequest$ThirdPartyServerInfo;
        clientInfo(): $AbuseReportRequest$ClientInfo;
        realmInfo(): $AbuseReportRequest$RealmInfo;
        reportType(): string;
        constructor(version: number, id: $UUID_, report: $AbuseReport_, clientInfo: $AbuseReportRequest$ClientInfo_, thirdPartyServerInfo: $AbuseReportRequest$ThirdPartyServerInfo_ | null, realmInfo: $AbuseReportRequest$RealmInfo_ | null, reportType: string);
    }
    export class $AbuseReportRequest$ClientInfo extends $Record {
        locale(): string;
        clientVersion(): string;
        constructor(clientVersion: string, locale: string);
    }
    export class $AbuseReportRequest$ThirdPartyServerInfo extends $Record {
        address(): string;
        constructor(address: string);
    }
}
