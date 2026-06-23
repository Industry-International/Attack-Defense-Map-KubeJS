import { $ChunkedBlockRegion } from "@package/com/moulberry/axiom/render/regions";
import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $Direction$Axis_ } from "@package/net/minecraft/core";
import { $CompressedBlockEntity } from "@package/com/moulberry/axiom/world_modification";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $List } from "@package/java/util";

declare module "@package/com/moulberry/axiom/clipboard" {
    export class $ClipboardObject {
        static flip(clipboardObject: $ClipboardObject, axis: $Direction$Axis_): $ClipboardObject;
        static rotate(clipboardObject: $ClipboardObject, axis: $Direction$Axis_, amount: number): $ClipboardObject;
    }
    export interface $ClipboardObject {
        name(): string;
        entities(): $List<$CompoundTag>;
        blockEntities(): $Long2ObjectMap<$CompressedBlockEntity>;
        blockRegion(): $ChunkedBlockRegion;
        placementDescription(): string;
        containsAir(): boolean;
        thumbnailTextureId(): number;
        preferredYaw(): number;
    }
}
