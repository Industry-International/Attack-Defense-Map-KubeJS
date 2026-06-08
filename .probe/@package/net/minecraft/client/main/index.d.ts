import { $File_, $File } from "@package/java/io";
import { $Path } from "@package/java/nio/file";
import { $Proxy } from "@package/java/net";
import { $User } from "@package/net/minecraft/client";
import { $DisplayData } from "@package/com/mojang/blaze3d/platform";
import { $Throwable, $Record, $RuntimeException } from "@package/java/lang";
import { $PropertyMap } from "@package/com/mojang/authlib/properties";

declare module "@package/net/minecraft/client/main" {
    export class $GameConfig$QuickPlayData extends $Record {
        isEnabled(): boolean;
        path(): string;
        multiplayer(): string;
        singleplayer(): string;
        realms(): string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string);
        get enabled(): boolean;
    }
    export class $Main {
        static main(arg0: string[]): void;
        constructor();
    }
    export class $GameConfig$UserData {
        proxy: $Proxy;
        userProperties: $PropertyMap;
        profileProperties: $PropertyMap;
        user: $User;
        constructor(arg0: $User, arg1: $PropertyMap, arg2: $PropertyMap, arg3: $Proxy);
    }
    export class $GameConfig$GameData {
        versionType: string;
        disableChat: boolean;
        disableMultiplayer: boolean;
        launchVersion: string;
        demo: boolean;
        constructor(arg0: boolean, arg1: string, arg2: string, arg3: boolean, arg4: boolean);
    }
    export class $GameConfig {
        game: $GameConfig$GameData;
        display: $DisplayData;
        quickPlay: $GameConfig$QuickPlayData;
        location: $GameConfig$FolderData;
        user: $GameConfig$UserData;
        constructor(arg0: $GameConfig$UserData, arg1: $DisplayData, arg2: $GameConfig$FolderData, arg3: $GameConfig$GameData, arg4: $GameConfig$QuickPlayData_);
    }
    export class $GameConfig$FolderData {
        getExternalAssetSource(): $Path;
        gameDirectory: $File;
        assetIndex: string;
        assetDirectory: $File;
        resourcePackDirectory: $File;
        constructor(arg0: $File_, arg1: $File_, arg2: $File_, arg3: string);
        get externalAssetSource(): $Path;
    }
    export class $SilentInitException extends $RuntimeException {
        constructor(arg0: string);
        constructor(arg0: string, arg1: $Throwable);
    }
}
