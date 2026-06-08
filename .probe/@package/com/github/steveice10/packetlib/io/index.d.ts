import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/com/github/steveice10/packetlib/io" {
    export class $NetOutput {
    }
    export interface $NetOutput {
        flush(): void;
        writeInt(arg0: number): void;
        writeBytes(arg0: number[], arg1: number): void;
        writeBytes(arg0: number[]): void;
        writeChar(arg0: number): void;
        writeFloat(arg0: number): void;
        writeBoolean(arg0: boolean): void;
        writeByte(arg0: number): void;
        writeShort(arg0: number): void;
        writeLong(arg0: number): void;
        writeDouble(arg0: number): void;
        writeString(arg0: string): void;
        writeInts(arg0: number[], arg1: number): void;
        writeInts(arg0: number[]): void;
        writeLongs(arg0: number[]): void;
        writeLongs(arg0: number[], arg1: number): void;
        writeShorts(arg0: number[]): void;
        writeShorts(arg0: number[], arg1: number): void;
        writeUUID(arg0: $UUID_): void;
        writeVarLong(arg0: number): void;
        writeVarInt(arg0: number): void;
    }
    export class $NetInput {
    }
    export interface $NetInput {
        readInt(): number;
        available(): number;
        readBytes(arg0: number[], arg1: number, arg2: number): number;
        readBytes(arg0: number): number[];
        readBytes(arg0: number[]): number;
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
        readInts(arg0: number): number[];
        readInts(arg0: number[]): number;
        readInts(arg0: number[], arg1: number, arg2: number): number;
        readLongs(arg0: number): number[];
        readLongs(arg0: number[]): number;
        readLongs(arg0: number[], arg1: number, arg2: number): number;
        readShorts(arg0: number[]): number;
        readShorts(arg0: number[], arg1: number, arg2: number): number;
        readShorts(arg0: number): number[];
        readUUID(): $UUID;
        readVarInt(): number;
        readVarLong(): number;
    }
}
