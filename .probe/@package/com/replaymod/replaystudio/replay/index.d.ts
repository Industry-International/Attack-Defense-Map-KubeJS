import { $InputStream, $OutputStream, $File_, $Closeable } from "@package/java/io";
import { $PacketTypeRegistry } from "@package/com/replaymod/replaystudio/protocol";
import { $ModInfo, $ReplayAssetEntry, $Marker } from "@package/com/replaymod/replaystudio/data";
import { $Timeline } from "@package/com/replaymod/replaystudio/pathing/path";
import { $ReplayOutputStream, $ReplayInputStream } from "@package/com/replaymod/replaystudio/io";
import { $Pattern } from "@package/java/util/regex";
import { $UUID, $Map_, $Map, $Set, $UUID_, $Set_, $Collection_, $Collection } from "@package/java/util";
import { $BufferedImage } from "@package/java/awt/image";
import { $Optional } from "@package/com/replaymod/replaystudio/lib/guava/base";
import { $ProtocolVersion } from "@package/com/replaymod/replaystudio/lib/viaversion/api/protocol/version";
import { $PathingRegistry } from "@package/com/replaymod/replaystudio/pathing";

declare module "@package/com/replaymod/replaystudio/replay" {
    export class $ReplayFile {
    }
    export interface $ReplayFile extends $Closeable {
        remove(arg0: string): void;
        get(arg0: string): $Optional<$InputStream>;
        write(arg0: string): $OutputStream;
        save(): void;
        getCache(arg0: string): $Optional<$InputStream>;
        getAll(arg0: $Pattern): $Map<string, $InputStream>;
        writeCache(arg0: string): $OutputStream;
        getMarkers(): $Optional<$Set<$Marker>>;
        getModInfo(): $Collection<$ModInfo>;
        saveTo(arg0: $File_): void;
        getMetaData(): $ReplayMetaData;
        removeCache(arg0: string): void;
        writeMetaData(arg0: $PacketTypeRegistry, arg1: $ReplayMetaData): void;
        writeResourcePack(arg0: string): $OutputStream;
        getResourcePack(arg0: string): $Optional<$InputStream>;
        getThumbBytes(): $Optional<$InputStream>;
        removeAsset(arg0: $UUID_): void;
        getTimelines(arg0: $PathingRegistry): $Map<string, $Timeline>;
        writeTimelines(arg0: $PathingRegistry, arg1: $Map_<string, $Timeline>): void;
        writeMarkers(arg0: $Set_<$Marker>): void;
        writeThumbBytes(arg0: number[]): void;
        writeModInfo(arg0: $Collection_<$ModInfo>): void;
        writePacketData(): $ReplayOutputStream;
        getPacketData(arg0: $PacketTypeRegistry): $ReplayInputStream;
        getInvisiblePlayers(): $Optional<$Set<$UUID>>;
        writeInvisiblePlayers(arg0: $Set_<$UUID_>): void;
        getResourcePackIndex(): $Map<number, string>;
        writeResourcePackIndex(arg0: $Map_<number, string>): void;
        writeThumb(image: $BufferedImage): void;
        writeAsset(arg0: $ReplayAssetEntry): $OutputStream;
        getAsset(arg0: $UUID_): $Optional<$InputStream>;
        getThumb(): $Optional<$BufferedImage>;
        getAssets(): $Collection<$ReplayAssetEntry>;
        get markers(): $Optional<$Set<$Marker>>;
        get modInfo(): $Collection<$ModInfo>;
        get metaData(): $ReplayMetaData;
        get thumbBytes(): $Optional<$InputStream>;
        get invisiblePlayers(): $Optional<$Set<$UUID>>;
        get resourcePackIndex(): $Map<number, string>;
        get thumb(): $Optional<$BufferedImage>;
        get assets(): $Collection<$ReplayAssetEntry>;
    }
    export class $ReplayMetaData {
        getDuration(): number;
        setDate(date: number): void;
        getDate(): number;
        setDuration(duration: number): void;
        getGenerator(): string;
        setSelfId(selfId: number): void;
        getSelfId(): number;
        getPlayers(): string[];
        getProtocolVersion(): $ProtocolVersion;
        static getProtocolVersion(fileFormatVersion: number, fileProtocol: number): $ProtocolVersion;
        isSingleplayer(): boolean;
        setServerName(serverName: string): void;
        setSingleplayer(singleplayer: boolean): void;
        setGenerator(generator: string): void;
        setMcVersion(mcVersion: string): void;
        getMcVersion(): string;
        setCustomServerName(customServerName: string): void;
        getServerName(): string;
        setPlayers(players: string[]): void;
        setProtocolVersion(protocol: number): void;
        setFileFormat(fileFormat: string): void;
        getFileFormat(): string;
        getRawProtocolVersion(): number;
        setFileFormatVersion(fileFormatVersion: number): void;
        getRawProtocolVersionOr0(): number;
        getFileFormatVersion(): number;
        getCustomServerName(): string;
        static CURRENT_FILE_FORMAT_VERSION: number;
        static PROTOCOL_FOR_FILE_FORMAT: $Map<number, number>;
        constructor();
        constructor(other: $ReplayMetaData);
        get rawProtocolVersion(): number;
        get rawProtocolVersionOr0(): number;
    }
}
