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
        remove(arg0: string): void;
        get(arg0: string): $Optional<$InputStream>;
        write(arg0: string): $OutputStream;
        save(): void;
        getCache(arg0: string): $Optional<$InputStream>;
        getAll(arg0: $Pattern): $Map<string, $InputStream>;
        writeCache(arg0: string): $OutputStream;
        getMarkers(): $Optional<$Set<$Marker>>;
        getModInfo(): $Collection<$ModInfo>;
        getPacketData(arg0: $PacketTypeRegistry): $ReplayInputStream;
        removeAsset(arg0: $UUID_): void;
        removeCache(arg0: string): void;
        writePacketData(): $ReplayOutputStream;
        writeMarkers(arg0: $Set_<$Marker>): void;
        getThumbBytes(): $Optional<$InputStream>;
        writeResourcePack(arg0: string): $OutputStream;
        writeThumbBytes(arg0: number[]): void;
        writeTimelines(arg0: $PathingRegistry, arg1: $Map_<string, $Timeline>): void;
        writeModInfo(arg0: $Collection_<$ModInfo>): void;
        getTimelines(arg0: $PathingRegistry): $Map<string, $Timeline>;
        getResourcePack(arg0: string): $Optional<$InputStream>;
        writeMetaData(arg0: $PacketTypeRegistry, arg1: $ReplayMetaData): void;
        getMetaData(): $ReplayMetaData;
        getInvisiblePlayers(): $Optional<$Set<$UUID>>;
        writeResourcePackIndex(arg0: $Map_<number, string>): void;
        getResourcePackIndex(): $Map<number, string>;
        writeInvisiblePlayers(arg0: $Set_<$UUID_>): void;
        writeAsset(arg0: $ReplayAssetEntry): $OutputStream;
        writeThumb(image: $BufferedImage): void;
        getAssets(): $Collection<$ReplayAssetEntry>;
        getAsset(arg0: $UUID_): $Optional<$InputStream>;
        getThumb(): $Optional<$BufferedImage>;
        saveTo(arg0: $File_): void;
        get markers(): $Optional<$Set<$Marker>>;
        get modInfo(): $Collection<$ModInfo>;
        get thumbBytes(): $Optional<$InputStream>;
        get metaData(): $ReplayMetaData;
        get invisiblePlayers(): $Optional<$Set<$UUID>>;
        get resourcePackIndex(): $Map<number, string>;
        get assets(): $Collection<$ReplayAssetEntry>;
        get thumb(): $Optional<$BufferedImage>;
    }
    export class $ReplayMetaData {
        getDuration(): number;
        setDate(date: number): void;
        getDate(): number;
        setDuration(duration: number): void;
        setCustomServerName(customServerName: string): void;
        getGenerator(): string;
        static getProtocolVersion(fileFormatVersion: number, fileProtocol: number): $ProtocolVersion;
        getProtocolVersion(): $ProtocolVersion;
        isSingleplayer(): boolean;
        setGenerator(generator: string): void;
        setSingleplayer(singleplayer: boolean): void;
        setServerName(serverName: string): void;
        setMcVersion(mcVersion: string): void;
        setProtocolVersion(protocol: number): void;
        setPlayers(players: string[]): void;
        getPlayers(): string[];
        getMcVersion(): string;
        getServerName(): string;
        getSelfId(): number;
        setSelfId(selfId: number): void;
        getRawProtocolVersion(): number;
        setFileFormatVersion(fileFormatVersion: number): void;
        setFileFormat(fileFormat: string): void;
        getRawProtocolVersionOr0(): number;
        getFileFormatVersion(): number;
        getCustomServerName(): string;
        getFileFormat(): string;
        static CURRENT_FILE_FORMAT_VERSION: number;
        static PROTOCOL_FOR_FILE_FORMAT: $Map<number, number>;
        constructor();
        constructor(other: $ReplayMetaData);
        get rawProtocolVersion(): number;
        get rawProtocolVersionOr0(): number;
    }
}
