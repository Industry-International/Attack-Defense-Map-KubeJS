import { $Level_ } from "@package/net/minecraft/world/level";
import { $IVideoSource } from "@package/net/mehvahdjukaar/vista/client/video_source";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IBroadcastLocation } from "@package/net/mehvahdjukaar/vista/common/broadcast";
import { $Record } from "@package/java/lang";
import { $UUID } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/vista/common/cassette" {
    export interface $CassetteTape extends RegistryMarked<RegistryTypes.VistaCassetteTapeTag, RegistryTypes.VistaCassetteTape> {}
    export class $IBroadcastSource {
    }
    export interface $IBroadcastSource {
        removeLink(arg0: $Level_): void;
        ensureLinked(arg0: $Level_, arg1: $IBroadcastLocation): void;
        getBroadcastUUID(): $UUID;
        getBroadcastVideo(): $IVideoSource;
        get broadcastUUID(): $UUID;
        get broadcastVideo(): $IVideoSource;
    }
    export class $CassetteTape extends $Record {
        color(): number;
        soundEvent(): ($Holder<$SoundEvent>) | undefined;
        assetId(): $ResourceLocation;
        comparatorOutput(): number;
        getRedstoneOutput(): number;
        soundDuration(): (number) | undefined;
        static DIRECT_CODEC: $Codec<$CassetteTape>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CassetteTape>;
        constructor(assetId: $ResourceLocation_, color: number, soundEvent: ($Holder_<$SoundEvent>) | undefined, soundDuration: (number) | undefined, comparatorOutput: number);
        get redstoneOutput(): number;
    }
    /**
     * Values that may be interpreted as {@link $CassetteTape}.
     */
    export type $CassetteTape_ = RegistryTypes.VistaCassetteTape;
}
