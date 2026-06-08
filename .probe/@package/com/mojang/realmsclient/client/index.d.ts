import { $File_ } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $WorldGenerationInfo_ } from "@package/com/mojang/realmsclient/util";
import { $RealmsDownloadLatestWorldScreen$DownloadStatus, $UploadResult } from "@package/com/mojang/realmsclient/gui/screens";
import { $Minecraft, $User } from "@package/net/minecraft/client";
import { $List, $UUID_, $List_ } from "@package/java/util";
import { $LevelStorageSource } from "@package/net/minecraft/world/level/storage";
import { $RealmsHttpException } from "@package/com/mojang/realmsclient/exception";
import { $InputStreamEntity } from "@package/org/apache/http/entity";
import { $UploadInfo, $RealmsServer, $RealmsServerPlayerLists, $PendingInvitesList, $Subscription, $RealmsWorldOptions, $RealmsNews, $ServerActivityList, $RealmsServerAddress, $Ops, $RealmsServerList, $BackupList, $WorldTemplatePaginatedList, $RegionPingResult, $PingResult, $WorldDownload, $RealmsServer$WorldType_, $RealmsNotification } from "@package/com/mojang/realmsclient/dto";
import { $CountingOutputStream } from "@package/org/apache/commons/io/output";
import { $Consumer_ } from "@package/java/util/function";
import { $Proxy, $HttpURLConnection } from "@package/java/net";
import { $ActionListener } from "@package/java/awt/event";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/com/mojang/realmsclient/client" {
    export class $RealmsError$AuthenticationError extends $Record implements $RealmsError {
        message(): string;
        logMessage(): string;
        errorCode(): number;
        errorMessage(): $Component;
        static ERROR_CODE: number;
        constructor(arg0: string);
    }
    export class $FileDownload {
        contentLength(arg0: string): number;
        cancel(): void;
        isError(): boolean;
        download(arg0: $WorldDownload, arg1: string, arg2: $RealmsDownloadLatestWorldScreen$DownloadStatus, arg3: $LevelStorageSource): void;
        isFinished(): boolean;
        isExtracting(): boolean;
        static findAvailableFolderName(arg0: string): string;
        constructor();
        get error(): boolean;
        get finished(): boolean;
        get extracting(): boolean;
    }
    export class $RealmsError$ErrorWithJsonPayload extends $Record implements $RealmsError {
        httpCode(): number;
        code(): number;
        message(): string;
        reason(): string;
        logMessage(): string;
        errorCode(): number;
        errorMessage(): $Component;
        constructor(arg0: number, arg1: number, arg2: string, arg3: string);
    }
    export class $RealmsClient {
        update(arg0: number, arg1: string, arg2: string): void;
        join(arg0: number): $RealmsServerAddress;
        op(arg0: number, arg1: $UUID_): $Ops;
        close(arg0: number): boolean;
        open(arg0: number): boolean;
        static create(): $RealmsClient;
        static create(arg0: $Minecraft): $RealmsClient;
        getActivity(arg0: number): $ServerActivityList;
        getNotifications(): $List<$RealmsNotification>;
        pendingInvitesCount(): number;
        listSnapshotEligibleRealms(): $List<$RealmsServer>;
        invite(arg0: number, arg1: string): $RealmsServer;
        trialAvailable(): boolean;
        getLiveStats(): $RealmsServerPlayerLists;
        requestUploadInfo(arg0: number, arg1: string): $UploadInfo;
        hasParentalConsent(): boolean;
        clientCompatible(): $RealmsClient$CompatibleVersionResponse;
        uninviteMyselfFrom(arg0: number): void;
        subscriptionFor(arg0: number): $Subscription;
        restoreWorld(arg0: number, arg1: string): void;
        getOwnRealm(arg0: number): $RealmsServer;
        pendingInvites(): $PendingInvitesList;
        acceptInvitation(arg0: string): void;
        initializeRealm(arg0: number, arg1: string, arg2: string): void;
        resetWorldWithSeed(arg0: number, arg1: $WorldGenerationInfo_): boolean;
        rejectInvitation(arg0: string): void;
        deleteRealm(arg0: number): void;
        updateSlot(arg0: number, arg1: number, arg2: $RealmsWorldOptions): void;
        backupsFor(arg0: number): $BackupList;
        switchSlot(arg0: number, arg1: number): boolean;
        uninvite(arg0: number, arg1: $UUID_): void;
        agreeToTos(): void;
        deop(arg0: number, arg1: $UUID_): $Ops;
        requestDownloadInfo(arg0: number, arg1: number): $WorldDownload;
        putIntoMinigameMode(arg0: number, arg1: string): boolean;
        fetchWorldTemplates(arg0: number, arg1: number, arg2: $RealmsServer$WorldType_): $WorldTemplatePaginatedList;
        createSnapshotRealm(arg0: number): $RealmsServer;
        resetWorldWithTemplate(arg0: number, arg1: string): boolean;
        notificationsDismiss(arg0: $List_<$UUID_>): void;
        sendPingResults(arg0: $PingResult): void;
        notificationsSeen(arg0: $List_<$UUID_>): void;
        getNews(): $RealmsNews;
        listRealms(): $RealmsServerList;
        static ENVIRONMENT: $RealmsClient$Environment;
        constructor(arg0: string, arg1: string, arg2: $Minecraft);
        get notifications(): $List<$RealmsNotification>;
        get liveStats(): $RealmsServerPlayerLists;
        get news(): $RealmsNews;
    }
    export class $RealmsError$CustomError extends $Record implements $RealmsError {
        httpCode(): number;
        payload(): $Component;
        logMessage(): string;
        static retry(arg0: number): $RealmsError$CustomError;
        errorCode(): number;
        errorMessage(): $Component;
        static connectivityError(arg0: $RealmsHttpException): $RealmsError$CustomError;
        static noPayload(arg0: number): $RealmsError$CustomError;
        static unknownCompatibilityResponse(arg0: string): $RealmsError$CustomError;
        static SERVICE_BUSY: $RealmsError$CustomError;
        static RETRY_MESSAGE: $Component;
        constructor(arg0: number, arg1: $Component_);
    }
    export class $Request$Post extends $Request<$Request$Post> {
        doConnect(): $Request$Post;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number);
    }
    export class $UploadStatus {
        bytesWritten: number;
        totalBytes: number;
        constructor();
    }
    export class $Request$Put extends $Request<$Request$Put> {
        doConnect(): $Request$Put;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number);
    }
    export class $RealmsError {
        static parse(arg0: number, arg1: string): $RealmsError;
        static LOGGER: $Logger;
        static NO_MESSAGE: $Component;
    }
    export interface $RealmsError {
        logMessage(): string;
        errorCode(): number;
        errorMessage(): $Component;
    }
    export class $Ping$Region extends $Enum<$Ping$Region> {
    }
    /**
     * Values that may be interpreted as {@link $Ping$Region}.
     */
    export type $Ping$Region_ = "us_east_1" | "us_west_2" | "us_west_1" | "eu_west_1" | "ap_southeast_1" | "ap_southeast_2" | "ap_northeast_1" | "sa_east_1";
    export class $RealmsClient$Environment extends $Enum<$RealmsClient$Environment> {
        static values(): $RealmsClient$Environment[];
        static valueOf(arg0: string): $RealmsClient$Environment;
        static byName(arg0: string): ($RealmsClient$Environment) | undefined;
        baseUrl: string;
        protocol: string;
        static STAGE: $RealmsClient$Environment;
        static LOCAL: $RealmsClient$Environment;
        static PRODUCTION: $RealmsClient$Environment;
    }
    /**
     * Values that may be interpreted as {@link $RealmsClient$Environment}.
     */
    export type $RealmsClient$Environment_ = "production" | "stage" | "local";
    export class $FileDownload$ProgressListener implements $ActionListener {
    }
    export class $RealmsClient$CompatibleVersionResponse extends $Enum<$RealmsClient$CompatibleVersionResponse> {
        static values(): $RealmsClient$CompatibleVersionResponse[];
        static valueOf(arg0: string): $RealmsClient$CompatibleVersionResponse;
        static OTHER: $RealmsClient$CompatibleVersionResponse;
        static COMPATIBLE: $RealmsClient$CompatibleVersionResponse;
        static OUTDATED: $RealmsClient$CompatibleVersionResponse;
    }
    /**
     * Values that may be interpreted as {@link $RealmsClient$CompatibleVersionResponse}.
     */
    export type $RealmsClient$CompatibleVersionResponse_ = "compatible" | "outdated" | "other";
    export class $RealmsError$ErrorWithRawPayload extends $Record implements $RealmsError {
        httpCode(): number;
        payload(): string;
        logMessage(): string;
        errorCode(): number;
        errorMessage(): $Component;
        constructor(arg0: number, arg1: string);
    }
    export class $Request$Delete extends $Request<$Request$Delete> {
        doConnect(): $Request$Delete;
        constructor(arg0: string, arg1: number, arg2: number);
    }
    export class $RealmsClientConfig {
        static getProxy(): $Proxy;
        static setProxy(arg0: $Proxy): void;
        constructor();
    }
    export class $Request$Get extends $Request<$Request$Get> {
        doConnect(): $Request$Get;
        constructor(arg0: string, arg1: number, arg2: number);
    }
    export class $FileDownload$DownloadCountingOutputStream extends $CountingOutputStream {
    }
    export class $FileUpload$CustomInputStreamEntity extends $InputStreamEntity {
    }
    export class $Ping {
        static pingAllRegions(): $List<$RegionPingResult>;
        static ping(...arg0: $Ping$Region_[]): $List<$RegionPingResult>;
        constructor();
    }
    export class $Request<T extends $Request<T>> {
        static get(arg0: string): $Request<never>;
        static get(arg0: string, arg1: number, arg2: number): $Request<never>;
        static put(arg0: string, arg1: string, arg2: number, arg3: number): $Request<never>;
        static put(arg0: string, arg1: string): $Request<never>;
        static "delete"(arg0: string): $Request<never>;
        text(): string;
        static post(arg0: string, arg1: string, arg2: number, arg3: number): $Request<never>;
        static post(arg0: string, arg1: string): $Request<never>;
        static getHeader(arg0: $HttpURLConnection, arg1: string): string;
        getHeader(arg0: string): string;
        static cookie(arg0: $HttpURLConnection, arg1: string, arg2: string): void;
        cookie(arg0: string, arg1: string): void;
        responseCode(): number;
        addSnapshotHeader(arg0: boolean): void;
        getRetryAfterHeader(): number;
        static getRetryAfterHeader(arg0: $HttpURLConnection): number;
        constructor(arg0: string, arg1: number, arg2: number);
    }
    export class $FileUpload {
        cancel(): void;
        upload(arg0: $Consumer_<$UploadResult>): void;
        isFinished(): boolean;
        constructor(arg0: $File_, arg1: number, arg2: number, arg3: $UploadInfo, arg4: $User, arg5: string, arg6: string, arg7: $UploadStatus);
        get finished(): boolean;
    }
    export class $FileDownload$ResourcePackProgressListener implements $ActionListener {
    }
}
