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
        getAsset(arg0: $UUID_): $Optional<$InputStream>;
        getAssets(): $Collection<$ReplayAssetEntry>;
        writeAsset(arg0: $ReplayAssetEntry): $OutputStream;
        getThumb(): $Optional<$BufferedImage>;
        writeThumb(image: $BufferedImage): void;
        writeCache(arg0: string): $OutputStream;
        getMarkers(): $Optional<$Set<$Marker>>;
        writeInvisiblePlayers(arg0: $Set_<$UUID_>): void;
        writeResourcePackIndex(arg0: $Map_<number, string>): void;
        getInvisiblePlayers(): $Optional<$Set<$UUID>>;
        getResourcePackIndex(): $Map<number, string>;
        saveTo(arg0: $File_): void;
        writeMetaData(arg0: $PacketTypeRegistry, arg1: $ReplayMetaData): void;
        removeCache(arg0: string): void;
        getPacketData(arg0: $PacketTypeRegistry): $ReplayInputStream;
        writePacketData(): $ReplayOutputStream;
        getResourcePack(arg0: string): $Optional<$InputStream>;
        writeResourcePack(arg0: string): $OutputStream;
        getThumbBytes(): $Optional<$InputStream>;
        removeAsset(arg0: $UUID_): void;
        writeModInfo(arg0: $Collection_<$ModInfo>): void;
        getTimelines(arg0: $PathingRegistry): $Map<string, $Timeline>;
        writeThumbBytes(arg0: number[]): void;
        writeTimelines(arg0: $PathingRegistry, arg1: $Map_<string, $Timeline>): void;
        writeMarkers(arg0: $Set_<$Marker>): void;
        getMetaData(): $ReplayMetaData;
        get modInfo(): $Collection<$ModInfo>;
        get assets(): $Collection<$ReplayAssetEntry>;
        get thumb(): $Optional<$BufferedImage>;
        get markers(): $Optional<$Set<$Marker>>;
        get invisiblePlayers(): $Optional<$Set<$UUID>>;
        get resourcePackIndex(): $Map<number, string>;
        get thumbBytes(): $Optional<$InputStream>;
        get metaData(): $ReplayMetaData;
    }
    export class $ReplayMetaData {
        getDuration(): number;
        setDate(date: number): void;
        getDate(): number;
        setDuration(duration: number): void;
        getPlayers(): string[];
        setCustomServerName(customServerName: string): void;
        setGenerator(generator: string): void;
        setMcVersion(mcVersion: string): void;
        setServerName(serverName: string): void;
        setSingleplayer(singleplayer: boolean): void;
        getGenerator(): string;
        getServerName(): string;
        isSingleplayer(): boolean;
        getFileFormat(): string;
        setFileFormat(fileFormat: string): void;
        getMcVersion(): string;
        setProtocolVersion(protocol: number): void;
        getRawProtocolVersion(): number;
        setFileFormatVersion(fileFormatVersion: number): void;
        getProtocolVersion(): $ProtocolVersion;
        static getProtocolVersion(fileFormatVersion: number, fileProtocol: number): $ProtocolVersion;
        setPlayers(players: string[]): void;
        getSelfId(): number;
        setSelfId(selfId: number): void;
        getRawProtocolVersionOr0(): number;
        getCustomServerName(): string;
        getFileFormatVersion(): number;
        static CURRENT_FILE_FORMAT_VERSION: number;
        static PROTOCOL_FOR_FILE_FORMAT: $Map<number, number>;
        constructor();
        constructor(other: $ReplayMetaData);
        get rawProtocolVersion(): number;
        get rawProtocolVersionOr0(): number;
    }
}
