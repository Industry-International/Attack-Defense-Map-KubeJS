import { $InputStream, $BufferedReader } from "@package/java/io";
import { $Path_, $WatchEvent, $Path } from "@package/java/nio/file";
import { $PackType, $PackType_ } from "@package/net/minecraft/server/packs";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ResourceManager, $ResourceMetadata, $Resource } from "@package/net/minecraft/server/packs/resources";
import { $Record } from "@package/java/lang";
import { $List, $OptionalInt } from "@package/java/util";
import { $ResourceFileEditor$Factory_ } from "@package/foundry/veil/api/resource/editor";
export * as editor from "@package/foundry/veil/api/resource/editor";

declare module "@package/foundry/veil/api/resource" {
    export class $VeilEditorEnvironment {
    }
    export interface $VeilEditorEnvironment {
        open<T extends $VeilResource<never>>(arg0: T, arg1: $ResourceFileEditor$Factory_<T>): void;
        open(arg0: $VeilResource<never>, arg1: $ResourceLocation_): void;
        getResourceManager(): $VeilResourceManager;
        get resourceManager(): $VeilResourceManager;
    }
    export class $VeilResourceInfo extends $Record {
        fileName(): string;
        getResource(arg0: $VeilResourceManager): ($Resource) | undefined;
        isStatic(): boolean;
        location(): $ResourceLocation;
        open(arg0: $VeilResourceManager): $InputStream;
        filePath(): $Path;
        packType(): $PackType;
        hidden(): boolean;
        modResourcePath(): $Path;
        openAsReader(arg0: $VeilResourceManager): $BufferedReader;
        getResourceOrThrow(arg0: $VeilResourceManager): $Resource;
        constructor(packType: $PackType_, location: $ResourceLocation_, filePath: $Path_, modResourcePath: $Path_, hidden: boolean);
        get static(): boolean;
    }
    export class $VeilResourceAction<T extends $VeilResource<never>> {
    }
    export interface $VeilResourceAction<T extends $VeilResource<never>> {
        getName(): $Component;
        getDescription(): $Component;
        getIcon(): $OptionalInt;
        perform(arg0: $VeilEditorEnvironment, arg1: T): void;
        get name(): $Component;
        get description(): $Component;
        get icon(): $OptionalInt;
    }
    export class $VeilResource<T extends $VeilResource<never>> {
    }
    export interface $VeilResource<T extends $VeilResource<never>> {
        getActions(): $List<$VeilResourceAction<T>>;
        hotReload(arg0: $VeilResourceManager): void;
        render(arg0: boolean, arg1: boolean): void;
        canHotReload(): boolean;
        getIconCode(): number;
        copyToResources(): void;
        onFileSystemChange(arg0: $VeilResourceManager, arg1: $WatchEvent<$Path_>): $CompletableFuture<never>;
        resourceInfo(): $VeilResourceInfo;
        get actions(): $List<$VeilResourceAction<T>>;
        get iconCode(): number;
    }
    export class $VeilResourceManager {
        static get(): $VeilResourceManager;
    }
    export interface $VeilResourceManager {
        resources(arg0: $VeilResourceInfo_): $ResourceManager;
        getResourceMetadata(arg0: $ResourceLocation_): $ResourceMetadata;
        getResourceMetadata(arg0: string, arg1: string): $ResourceMetadata;
        serverResources(): $ResourceManager;
        getVeilResource(arg0: string, arg1: string): $VeilResource<never>;
        getVeilResource(arg0: $ResourceLocation_): $VeilResource<never>;
        clientResources(): $ResourceManager;
    }
}
