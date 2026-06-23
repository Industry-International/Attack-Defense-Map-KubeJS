import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $AbstractConfigPacket$OptionEntry } from "@package/xaero/lib/common/packet/config";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $ConfigProfileInfoPacket$Entry } from "@package/xaero/lib/common/packet/config/profile";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $CommonConfigChannelSynchronizer } from "@package/xaero/lib/common/config/sync";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $List_ } from "@package/java/util";
import { $Object, $Iterable_ } from "@package/java/lang";
import { $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/common/config/server/sync" {
    export class $ServerConfigChannelSynchronizer extends $CommonConfigChannelSynchronizer {
        postLoad(): void;
        onDeleteConfigProfilePacket(arg0: string, arg1: $ServerPlayerData): void;
        onCreateConfigProfilePacket(arg0: string, arg1: string, arg2: string): void;
        handleLogin(arg0: $ServerPlayerConfigSynchronizer): void;
        syncProfileInfoChange(arg0: $ConfigProfile): void;
        onProfileRequestPacket(arg0: $ServerPlayerConfigSynchronizer, arg1: string): void;
        syncProfileDeletion(arg0: $ConfigProfile): void;
        syncOptionValueChange(arg0: $ConfigProfile, arg1: $ConfigOption<never>): void;
        syncServerProfileEditingInfo(arg0: $ServerPlayerConfigSynchronizer): void;
        syncEnforcedConfigProfileDeletion(arg0: $ConfigProfile): void;
        syncDefaultEnforcedConfigProfileSwitch(arg0: $ConfigProfile): void;
        onConfigProfileInfoPacket(arg0: $List_<$ConfigProfileInfoPacket$Entry>, arg1: string, arg2: $ServerPlayerData): void;
        onEditProfilePacket(arg0: string, arg1: $Iterable_<$AbstractConfigPacket$OptionEntry>, arg2: $ServerPlayerData): void;
        logger: $Logger;
    }
    export class $ServerPlayerConfigSynchronizer {
        send(arg0: $ConfigChannel, arg1: $Object): void;
        getPlayerData(): $ServerPlayerData;
        onDeleteConfigProfilePacket(arg0: string): void;
        onCreateConfigProfilePacket(arg0: string, arg1: string, arg2: string): void;
        handleLogin(): void;
        onProfileRequestPacket(arg0: string): void;
        onConfigProfileInfoPacket(arg0: $List_<$ConfigProfileInfoPacket$Entry>, arg1: string): void;
        onEditProfilePacket(arg0: string, arg1: $Iterable_<$AbstractConfigPacket$OptionEntry>): void;
        receiveChannelId(arg0: $ResourceLocation_): void;
        getCurrentInputChannel(): $ConfigChannel;
        constructor(arg0: $ServerPlayerData);
        get playerData(): $ServerPlayerData;
        get currentInputChannel(): $ConfigChannel;
    }
}
