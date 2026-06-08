import { $InputStream, $OutputStream, $Closeable, $File_ } from "@package/java/io";
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
        getModInfo(): $Collection<$ModInfo>;
        getAsset(arg0: $UUID_): $Optional<$InputStream>;
        writeAsset(arg0: $ReplayAssetEntry): $OutputStream;
        getAssets(): $Collection<$ReplayAssetEntry>;
        remove(arg0: string): void;
        get(arg0: string): $Optional<$InputStream>;
        write(arg0: string): $OutputStream;
        save(): void;
        getCache(arg0: string): $Optional<$InputStream>;
        getAll(arg0: $Pattern): $Map<string, $InputStream>;
        writeCache(arg0: string): $OutputStream;
        getThumb(): $Optional<$BufferedImage>;
        writeThumb(image: $BufferedImage): void;
        getMarkers(): $Optional<$Set<$Marker>>;
        getInvisiblePlayers(): $Optional<$Set<$UUID>>;
        writeResourcePackIndex(arg0: $Map_<number, string>): void;
        writeInvisiblePlayers(arg0: $Set_<$UUID_>): void;
        getResourcePackIndex(): $Map<number, string>;
        saveTo(arg0: $File_): void;
        getMetaData(): $ReplayMetaData;
        removeCache(arg0: string): void;
        getPacketData(arg0: $PacketTypeRegistry): $ReplayInputStream;
        writeTimelines(arg0: $PathingRegistry, arg1: $Map_<string, $Timeline>): void;
        removeAsset(arg0: $UUID_): void;
        writeThumbBytes(arg0: number[]): void;
        writeMetaData(arg0: $PacketTypeRegistry, arg1: $ReplayMetaData): void;
        getThumbBytes(): $Optional<$InputStream>;
        writeModInfo(arg0: $Collection_<$ModInfo>): void;
        writeResourcePack(arg0: string): $OutputStream;
        writeMarkers(arg0: $Set_<$Marker>): void;
        writePacketData(): $ReplayOutputStream;
        getResourcePack(arg0: string): $Optional<$InputStream>;
        getTimelines(arg0: $PathingRegistry): $Map<string, $Timeline>;
        get modInfo(): $Collection<$ModInfo>;
        get assets(): $Collection<$ReplayAssetEntry>;
        get thumb(): $Optional<$BufferedImage>;
        get markers(): $Optional<$Set<$Marker>>;
        get invisiblePlayers(): $Optional<$Set<$UUID>>;
        get resourcePackIndex(): $Map<number, string>;
        get metaData(): $ReplayMetaData;
        get thumbBytes(): $Optional<$InputStream>;
    }
    export class $ReplayMetaData {
        getDuration(): number;
        setDate(date: number): void;
        getDate(): number;
        getGenerator(): string;
        setDuration(duration: number): void;
        getMcVersion(): string;
        setServerName(serverName: string): void;
        setGenerator(generator: string): void;
        setSingleplayer(singleplayer: boolean): void;
        setMcVersion(mcVersion: string): void;
        getProtocolVersion(): $ProtocolVersion;
        static getProtocolVersion(fileFormatVersion: number, fileProtocol: number): $ProtocolVersion;
        setCustomServerName(customServerName: string): void;
        isSingleplayer(): boolean;
        getServerName(): string;
        getPlayers(): string[];
        setProtocolVersion(protocol: number): void;
        getFileFormat(): string;
        getFileFormatVersion(): number;
        getCustomServerName(): string;
        getRawProtocolVersionOr0(): number;
        setPlayers(players: string[]): void;
        getSelfId(): number;
        setSelfId(selfId: number): void;
        getRawProtocolVersion(): number;
        setFileFormatVersion(fileFormatVersion: number): void;
        setFileFormat(fileFormat: string): void;
        static CURRENT_FILE_FORMAT_VERSION: number;
        static PROTOCOL_FOR_FILE_FORMAT: $Map<number, number>;
        constructor();
        constructor(other: $ReplayMetaData);
        get rawProtocolVersionOr0(): number;
        get rawProtocolVersion(): number;
    }
}
