import { $NetOutput, $NetInput } from "@package/com/github/steveice10/packetlib/io";
import { $ByteBuf } from "@package/com/github/steveice10/netty/buffer";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/com/github/steveice10/packetlib/tcp/io" {
    export class $ByteBufNetOutput implements $NetOutput {
        flush(): void;
        writeInt(i: number): void;
        writeBytes(b: number[]): void;
        writeBytes(b: number[], length: number): void;
        writeChar(c: number): void;
        writeFloat(f: number): void;
        writeBoolean(b: boolean): void;
        writeByte(b: number): void;
        writeShort(s: number): void;
        writeLong(l: number): void;
        writeDouble(d: number): void;
        writeString(s: string): void;
        writeInts(i: number[], length: number): void;
        writeInts(i: number[]): void;
        writeLongs(l: number[]): void;
        writeLongs(l: number[], length: number): void;
        writeShorts(s: number[]): void;
        writeShorts(s: number[], length: number): void;
        writeUUID(uuid: $UUID_): void;
        writeVarInt(i: number): void;
        writeVarLong(l: number): void;
        constructor(buf: $ByteBuf);
    }
    export class $ByteBufNetInput implements $NetInput {
        readInt(): number;
        available(): number;
        readBytes(b: number[]): number;
        readBytes(length: number): number[];
        readBytes(b: number[], offset: number, length: number): number;
        readChar(): string;
        readFloat(): number;
        readBoolean(): boolean;
        readByte(): number;
        readUnsignedByte(): number;
        readShort(): number;
        readUnsignedShort(): number;
        readLong(): number;
        readDouble(): number;
        readString(): string;
        readInts(length: number): number[];
        readInts(i: number[]): number;
        readInts(i: number[], offset: number, length: number): number;
        readLongs(length: number): number[];
        readLongs(l: number[], offset: number, length: number): number;
        readLongs(l: number[]): number;
        readShorts(length: number): number[];
        readShorts(s: number[], offset: number, length: number): number;
        readShorts(s: number[]): number;
        readUUID(): $UUID;
        readVarInt(): number;
        readVarLong(): number;
        constructor(buf: $ByteBuf);
    }
}
