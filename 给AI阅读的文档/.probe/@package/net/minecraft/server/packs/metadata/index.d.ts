import { $JsonObject_, $JsonObject } from "@package/com/google/gson";
import { $Codec } from "@package/com/mojang/serialization";
export * as pack from "@package/net/minecraft/server/packs/metadata/pack";

declare module "@package/net/minecraft/server/packs/metadata" {
    export class $MetadataSectionType<T> {
        static fromCodec<T>(arg0: string, arg1: $Codec<T>): $MetadataSectionType<T>;
    }
    export interface $MetadataSectionType<T> extends $MetadataSectionSerializer<T> {
        toJson(arg0: T): $JsonObject;
    }
    export class $MetadataSectionSerializer<T> {
    }
    export interface $MetadataSectionSerializer<T> {
        fromJson(arg0: $JsonObject_): T;
        getMetadataSectionName(): string;
        get metadataSectionName(): string;
    }
}
