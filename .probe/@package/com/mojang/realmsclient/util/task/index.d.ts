import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $WorldGenerationInfo_ } from "@package/com/mojang/realmsclient/util";
import { $RealmsMainScreen } from "@package/com/mojang/realmsclient";
import { $RealmsConfigureWorldScreen, $RealmsLongRunningMcoTaskScreen } from "@package/com/mojang/realmsclient/gui/screens";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Runnable_, $Runnable } from "@package/java/lang";
import { $Backup, $RealmsServerAddress, $RealmsServer, $WorldTemplate } from "@package/com/mojang/realmsclient/dto";

declare module "@package/com/mojang/realmsclient/util/task" {
    export class $DownloadTask extends $LongRunningTask {
        constructor(arg0: number, arg1: number, arg2: string, arg3: $Screen);
    }
    export class $ResettingGeneratedWorldTask extends $ResettingWorldTask {
        constructor(arg0: $WorldGenerationInfo_, arg1: number, arg2: $Component_, arg3: $Runnable_);
    }
    export class $CreateSnapshotRealmTask extends $LongRunningTask {
        constructor(arg0: $RealmsMainScreen, arg1: number, arg2: $WorldGenerationInfo_, arg3: string, arg4: string);
    }
    export class $CloseServerTask extends $LongRunningTask {
        constructor(arg0: $RealmsServer, arg1: $RealmsConfigureWorldScreen);
    }
    export class $GetServerDetailsTask extends $LongRunningTask {
        connectScreen(arg0: $RealmsServerAddress): $RealmsLongRunningMcoTaskScreen;
        constructor(arg0: $Screen, arg1: $RealmsServer);
    }
    export class $OpenServerTask extends $LongRunningTask {
        constructor(arg0: $RealmsServer, arg1: $Screen, arg2: boolean, arg3: $Minecraft);
    }
    export class $RealmCreationTask extends $LongRunningTask {
        constructor(arg0: number, arg1: string, arg2: string);
    }
    export class $ResettingWorldTask extends $LongRunningTask {
        constructor(arg0: number, arg1: $Component_, arg2: $Runnable_);
    }
    export class $SwitchMinigameTask extends $LongRunningTask {
        constructor(arg0: number, arg1: $WorldTemplate, arg2: $RealmsConfigureWorldScreen);
    }
    export class $SwitchSlotTask extends $LongRunningTask {
        constructor(arg0: number, arg1: number, arg2: $Runnable_);
    }
    export class $ConnectTask extends $LongRunningTask {
        constructor(arg0: $Screen, arg1: $RealmsServer, arg2: $RealmsServerAddress);
    }
    export class $LongRunningTask implements $Runnable {
        init(): void;
        tick(): void;
        static setScreen(arg0: $Screen): void;
        getTitle(): $Component;
        aborted(): boolean;
        abortTask(): void;
        constructor();
        static set screen(value: $Screen);
        get title(): $Component;
    }
    export class $RestoreTask extends $LongRunningTask {
        constructor(arg0: $Backup, arg1: number, arg2: $RealmsConfigureWorldScreen);
    }
    export class $ResettingTemplateWorldTask extends $ResettingWorldTask {
        constructor(arg0: $WorldTemplate, arg1: number, arg2: $Component_, arg3: $Runnable_);
    }
}
