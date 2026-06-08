import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $JsonObject_ } from "@package/com/google/gson";

declare module "@package/net/minecraft/client/resources/metadata/texture" {
    export class $TextureMetadataSection {
        isClamp(): boolean;
        isBlur(): boolean;
        static DEFAULT_BLUR: boolean;
        static DEFAULT_CLAMP: boolean;
        static SERIALIZER: $TextureMetadataSectionSerializer;
        constructor(arg0: boolean, arg1: boolean);
        get clamp(): boolean;
        get blur(): boolean;
    }
    export class $TextureMetadataSectionSerializer implements $MetadataSectionSerializer<$TextureMetadataSection> {
        getMetadataSectionName(): string;
        fromJson(arg0: $JsonObject_): $TextureMetadataSection;
        constructor();
        get metadataSectionName(): string;
    }
}
