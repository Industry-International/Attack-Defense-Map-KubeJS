import { $Logger } from "@package/org/slf4j";
import { $GameConfig$UserData } from "@package/net/minecraft/client/main";
import { $HashCode } from "@package/com/google/common/hash";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $UUID, $List, $Map_, $Map, $UUID_, $List_ } from "@package/java/util";
import { $HttpUtil$DownloadProgressListener } from "@package/net/minecraft/util";
import { $RepositorySource } from "@package/net/minecraft/server/packs/repository";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $Path_, $Path } from "@package/java/nio/file";
import { $URL } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $DownloadQueue$DownloadRequest_, $DownloadQueue$BatchResult, $DownloadQueue$DownloadRequest } from "@package/net/minecraft/server/packs";
import { $Runnable_, $Enum, $Record, $AutoCloseable } from "@package/java/lang";

declare module "@package/net/minecraft/client/resources/server" {
    export class $PackLoadFeedback$FinalResult extends $Enum<$PackLoadFeedback$FinalResult> {
        static values(): $PackLoadFeedback$FinalResult[];
        static valueOf(arg0: string): $PackLoadFeedback$FinalResult;
        static DISCARDED: $PackLoadFeedback$FinalResult;
        static ACTIVATION_FAILED: $PackLoadFeedback$FinalResult;
        static DECLINED: $PackLoadFeedback$FinalResult;
        static DOWNLOAD_FAILED: $PackLoadFeedback$FinalResult;
        static APPLIED: $PackLoadFeedback$FinalResult;
    }
    /**
     * Values that may be interpreted as {@link $PackLoadFeedback$FinalResult}.
     */
    export type $PackLoadFeedback$FinalResult_ = "declined" | "applied" | "discarded" | "download_failed" | "activation_failed";
    export class $PackReloadConfig {
    }
    export interface $PackReloadConfig {
        scheduleReload(arg0: $PackReloadConfig$Callbacks): void;
    }
    /**
     * Values that may be interpreted as {@link $PackReloadConfig}.
     */
    export type $PackReloadConfig_ = ((arg0: $PackReloadConfig$Callbacks) => void);
    export class $PackLoadFeedback$Update extends $Enum<$PackLoadFeedback$Update> {
        static values(): $PackLoadFeedback$Update[];
        static valueOf(arg0: string): $PackLoadFeedback$Update;
        static ACCEPTED: $PackLoadFeedback$Update;
        static DOWNLOADED: $PackLoadFeedback$Update;
    }
    /**
     * Values that may be interpreted as {@link $PackLoadFeedback$Update}.
     */
    export type $PackLoadFeedback$Update_ = "accepted" | "downloaded";
    export class $ServerPackManager$RemovalReason extends $Enum<$ServerPackManager$RemovalReason> {
    }
    /**
     * Values that may be interpreted as {@link $ServerPackManager$RemovalReason}.
     */
    export type $ServerPackManager$RemovalReason_ = "download_failed" | "activation_failed" | "declined" | "discarded" | "server_removed" | "server_replaced";
    export class $PackDownloader {
    }
    export interface $PackDownloader {
        download(arg0: $Map_<$UUID_, $DownloadQueue$DownloadRequest_>, arg1: $Consumer_<$DownloadQueue$BatchResult>): void;
    }
    /**
     * Values that may be interpreted as {@link $PackDownloader}.
     */
    export type $PackDownloader_ = ((arg0: $Map<$UUID, $DownloadQueue$DownloadRequest>, arg1: $Consumer<$DownloadQueue$BatchResult>) => void);
    export class $ServerPackManager {
        popAll(): void;
        tick(): void;
        allowServerPacks(): void;
        resetPromptStatus(): void;
        registerForUpdate(): void;
        pushLocalPack(arg0: $UUID_, arg1: $Path_): void;
        rejectServerPacks(): void;
        popPack(arg0: $UUID_): void;
        pushPack(arg0: $UUID_, arg1: $URL, arg2: $HashCode): void;
        packLoadFeedback: $PackLoadFeedback;
        packs: $List<$ServerPackManager$ServerPackData>;
        constructor(arg0: $PackDownloader_, arg1: $PackLoadFeedback, arg2: $PackReloadConfig_, arg3: $Runnable_, arg4: $ServerPackManager$PackPromptStatus_);
    }
    export class $PackLoadFeedback {
    }
    export interface $PackLoadFeedback {
        reportUpdate(arg0: $UUID_, arg1: $PackLoadFeedback$Update_): void;
        reportFinalResult(arg0: $UUID_, arg1: $PackLoadFeedback$FinalResult_): void;
    }
    export class $ServerPackManager$PackDownloadStatus extends $Enum<$ServerPackManager$PackDownloadStatus> {
    }
    /**
     * Values that may be interpreted as {@link $ServerPackManager$PackDownloadStatus}.
     */
    export type $ServerPackManager$PackDownloadStatus_ = "requested" | "pending" | "done";
    export class $DownloadedPackSource implements $AutoCloseable {
        popAll(): void;
        close(): void;
        allowServerPacks(): void;
        pushLocalPack(arg0: $UUID_, arg1: $Path_): void;
        rejectServerPacks(): void;
        configureForServerControl(arg0: $Connection, arg1: $ServerPackManager$PackPromptStatus_): void;
        createDownloadNotifier(arg0: number): $HttpUtil$DownloadProgressListener;
        waitForPackFeedback(arg0: $UUID_): $CompletableFuture<void>;
        configureForLocalWorld(): void;
        createRepositorySource(): $RepositorySource;
        popPack(arg0: $UUID_): void;
        pushPack(arg0: $UUID_, arg1: $URL, arg2: string): void;
        cleanupAfterDisconnect(): void;
        onReloadSuccess(): void;
        onRecoveryFailure(): void;
        onRecovery(): void;
        handler$bol000$chat_heads$chatheads$checkForDisableResource(list: $List_<any>, cir: $CallbackInfoReturnable<any>): void;
        minecraft: $Minecraft;
        manager: $ServerPackManager;
        static LOGGER: $Logger;
        packFeedback: $PackLoadFeedback;
        constructor(arg0: $Minecraft, arg1: $Path_, arg2: $GameConfig$UserData);
    }
    export class $ServerPackManager$PackPromptStatus extends $Enum<$ServerPackManager$PackPromptStatus> {
        static values(): $ServerPackManager$PackPromptStatus[];
        static valueOf(arg0: string): $ServerPackManager$PackPromptStatus;
        static ALLOWED: $ServerPackManager$PackPromptStatus;
        static PENDING: $ServerPackManager$PackPromptStatus;
        static DECLINED: $ServerPackManager$PackPromptStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerPackManager$PackPromptStatus}.
     */
    export type $ServerPackManager$PackPromptStatus_ = "pending" | "allowed" | "declined";
    export class $ServerPackManager$ActivationStatus extends $Enum<$ServerPackManager$ActivationStatus> {
    }
    /**
     * Values that may be interpreted as {@link $ServerPackManager$ActivationStatus}.
     */
    export type $ServerPackManager$ActivationStatus_ = "inactive" | "pending" | "active";
    export class $PackReloadConfig$IdAndPath extends $Record {
        id(): $UUID;
        path(): $Path;
        constructor(arg0: $UUID_, arg1: $Path_);
    }
    export class $ServerPackManager$ServerPackData {
    }
    export class $PackReloadConfig$Callbacks {
    }
    export interface $PackReloadConfig$Callbacks {
        packsToLoad(): $List<$PackReloadConfig$IdAndPath>;
        onSuccess(): void;
        onFailure(arg0: boolean): void;
    }
}
