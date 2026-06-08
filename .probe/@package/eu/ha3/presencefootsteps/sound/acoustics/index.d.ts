import { $Reader } from "@package/java/io";
import { $JsonObject, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $SoundsKey_, $Association_ } from "@package/eu/ha3/presencefootsteps/world";
import { $BiFunction_, $BiConsumer_ } from "@package/java/util/function";
import { $Options, $State_ } from "@package/eu/ha3/presencefootsteps/sound";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Range, $Range_, $JsonObjectWriter_ } from "@package/eu/ha3/presencefootsteps/util";
import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $SoundPlayer } from "@package/eu/ha3/presencefootsteps/sound/player";

declare module "@package/eu/ha3/presencefootsteps/sound/acoustics" {
    export class $AcousticLibrary {
    }
    export interface $AcousticLibrary {
        addAcoustic(arg0: string, arg1: $Acoustic): void;
        playAcoustic(arg0: $LivingEntity, arg1: $SoundsKey_, arg2: $State_, arg3: $Options): void;
        think(): void;
        playStep(arg0: $Association_, arg1: $State_, arg2: $Options): void;
    }
    export class $Acoustic {
        static read(arg0: $AcousticsFile_, arg1: $JsonElement_): $Acoustic;
        static read(arg0: $AcousticsFile_, arg1: $JsonElement_, arg2: string): $Acoustic;
        static FACTORIES: $Map<string, $Acoustic$Serializer>;
    }
    export interface $Acoustic {
        write(arg0: $AcousticsFile_, arg1: $JsonObjectWriter_): void;
        playSound(arg0: $SoundPlayer, arg1: $LivingEntity, arg2: $State_, arg3: $Options): void;
    }
    export class $AcousticsFile extends $Record {
        write(arg0: $JsonObjectWriter_, arg1: $Map_<string, $Acoustic>): void;
        static read(arg0: $Reader, arg1: $BiConsumer_<string, $Acoustic>, arg2: boolean): $AcousticsFile;
        getSoundName(arg0: string): string;
        soundRoot(): string;
        defaultPitch(): $Range;
        defaultVolume(): $Range;
        constructor(defaultVolume: $Range_, defaultPitch: $Range_, soundRoot: string);
    }
    export class $Acoustic$Serializer {
        static ofJsObject(arg0: $BiFunction_<$JsonObject, $AcousticsFile, $Acoustic>): $Acoustic$Serializer;
    }
    export interface $Acoustic$Serializer {
        create(arg0: $JsonElement_, arg1: $AcousticsFile_): $Acoustic;
    }
    /**
     * Values that may be interpreted as {@link $Acoustic$Serializer}.
     */
    export type $Acoustic$Serializer_ = ((arg0: $JsonElement, arg1: $AcousticsFile) => $Acoustic);
}
