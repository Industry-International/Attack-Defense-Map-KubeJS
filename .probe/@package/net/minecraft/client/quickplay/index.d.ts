import { $GameConfig$QuickPlayData_ } from "@package/net/minecraft/client/main";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum, $Record } from "@package/java/lang";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/quickplay" {
    export class $QuickPlayLog$QuickPlayWorld extends $Record {
    }
    export class $QuickPlay {
        static connect(arg0: $Minecraft, arg1: $GameConfig$QuickPlayData_, arg2: $RealmsClient): void;
        static ERROR_TITLE: $Component;
        constructor();
    }
    export class $QuickPlayLog {
        log(arg0: $Minecraft): void;
        static of(arg0: string): $QuickPlayLog;
        setWorldData(arg0: $QuickPlayLog$Type_, arg1: string, arg2: string): void;
        constructor(arg0: string);
    }
    export class $QuickPlayLog$QuickPlayEntry extends $Record {
    }
    export class $QuickPlayLog$Type extends $Enum<$QuickPlayLog$Type> implements $StringRepresentable {
        static values(): $QuickPlayLog$Type[];
        static valueOf(arg0: string): $QuickPlayLog$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MULTIPLAYER: $QuickPlayLog$Type;
        static CODEC: $Codec<$QuickPlayLog$Type>;
        static SINGLEPLAYER: $QuickPlayLog$Type;
        static REALMS: $QuickPlayLog$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $QuickPlayLog$Type}.
     */
    export type $QuickPlayLog$Type_ = "singleplayer" | "multiplayer" | "realms";
}
