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
        getModInfo(): $Collection<$ModInfo>;
        writeCache(arg0: string): $OutputStream;
        getMarkers(): $Optional<$Set<$Marker>>;
        writeModInfo(arg0: $Collection_<$ModInfo>): void;
        writeTimelines(arg0: $PathingRegistry, arg1: $Map_<string, $Timeline>): void;
        getThumbBytes(): $Optional<$InputStream>;
        getResourcePack(arg0: string): $Optional<$InputStream>;
        removeAsset(arg0: $UUID_): void;
        writeThumbBytes(arg0: number[]): void;
        writeResourcePack(arg0: string): $OutputStream;
        writeMetaData(arg0: $PacketTypeRegistry, arg1: $ReplayMetaData): void;
        writePacketData(): $ReplayOutputStream;
        removeCache(arg0: string): void;
        getPacketData(arg0: $PacketTypeRegistry): $ReplayInputStream;
        getTimelines(arg0: $PathingRegistry): $Map<string, $Timeline>;
        writeMarkers(arg0: $Set_<$Marker>): void;
        saveTo(arg0: $File_): void;
        getAssets(): $Collection<$ReplayAssetEntry>;
        getAsset(arg0: $UUID_): $Optional<$InputStream>;
        writeAsset(arg0: $ReplayAssetEntry): $OutputStream;
        writeThumb(image: $BufferedImage): void;
        getThumb(): $Optional<$BufferedImage>;
        getMetaData(): $ReplayMetaData;
        getResourcePackIndex(): $Map<number, string>;
        writeResourcePackIndex(arg0: $Map_<number, string>): void;
        getInvisiblePlayers(): $Optional<$Set<$UUID>>;
        writeInvisiblePlayers(arg0: $Set_<$UUID_>): void;
        get modInfo(): $Collection<$ModInfo>;
        get markers(): $Optional<$Set<$Marker>>;
        get thumbBytes(): $Optional<$InputStream>;
        get assets(): $Collection<$ReplayAssetEntry>;
        get thumb(): $Optional<$BufferedImage>;
        get metaData(): $ReplayMetaData;
        get resourcePackIndex(): $Map<number, string>;
        get invisiblePlayers(): $Optional<$Set<$UUID>>;
    }
    export class $ReplayMetaData {
        getDuration(): number;
        setDate(date: number): void;
        getDate(): number;
        setDuration(duration: number): void;
        getGenerator(): string;
        setCustomServerName(customServerName: string): void;
        getMcVersion(): string;
        getServerName(): string;
        setFileFormat(fileFormat: string): void;
        getFileFormat(): string;
        setGenerator(generator: string): void;
        setServerName(serverName: string): void;
        setSingleplayer(singleplayer: boolean): void;
        setMcVersion(mcVersion: string): void;
        isSingleplayer(): boolean;
        getProtocolVersion(): $ProtocolVersion;
        static getProtocolVersion(fileFormatVersion: number, fileProtocol: number): $ProtocolVersion;
        setFileFormatVersion(fileFormatVersion: number): void;
        getPlayers(): string[];
        setProtocolVersion(protocol: number): void;
        setSelfId(selfId: number): void;
        getSelfId(): number;
        setPlayers(players: string[]): void;
        getRawProtocolVersion(): number;
        getFileFormatVersion(): number;
        getCustomServerName(): string;
        getRawProtocolVersionOr0(): number;
        static CURRENT_FILE_FORMAT_VERSION: number;
        static PROTOCOL_FOR_FILE_FORMAT: $Map<number, number>;
        constructor();
        constructor(other: $ReplayMetaData);
        get rawProtocolVersion(): number;
        get rawProtocolVersionOr0(): number;
    }
}
