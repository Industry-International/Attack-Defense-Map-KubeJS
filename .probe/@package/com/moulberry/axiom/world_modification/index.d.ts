import { $ByteArrayOutputStream } from "@package/java/io";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";

declare module "@package/com/moulberry/axiom/world_modification" {
    export class $CompressedBlockEntity extends $Record {
        static compress(tag: $CompoundTag_, baos: $ByteArrayOutputStream): $CompressedBlockEntity;
        write(friendlyByteBuf: $FriendlyByteBuf): void;
        static read(friendlyByteBuf: $FriendlyByteBuf): $CompressedBlockEntity;
        decompress(): $CompoundTag;
        compressed(): number[];
        compressionDict(): number;
        originalSize(): number;
        constructor(originalSize: number, compressionDict: number, compressed: number[]);
    }
}
