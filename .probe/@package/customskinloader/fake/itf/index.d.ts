import { $InputStream } from "@package/java/io";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ResourceManager, $Resource } from "@package/net/minecraft/server/packs/resources";
import { $FakeNativeImage } from "@package/customskinloader/fake/texture";

declare module "@package/customskinloader/fake/itf" {
    export class $IFakeIResourceManager$V1 {
    }
    export interface $IFakeIResourceManager$V1 {
        getResource(arg0: $ResourceLocation_): $Resource;
    }
    export class $IFakeMinecraft {
    }
    export interface $IFakeMinecraft {
        getResourceManager(): $ResourceManager;
        get resourceManager(): $ResourceManager;
    }
    export class $IFakeIResource$V1 {
    }
    export interface $IFakeIResource$V1 {
        getInputStream(): $InputStream;
        get inputStream(): $InputStream;
    }
    export class $IFakeIResource$V2 {
    }
    export interface $IFakeIResource$V2 {
        open(): $InputStream;
    }
    export class $IFakeNativeImage {
    }
    export interface $IFakeNativeImage {
        getPixel(arg0: number, arg1: number): number;
        setPixel(arg0: number, arg1: number, arg2: number): void;
        getFakeImage(): $FakeNativeImage;
        setFakeImage(arg0: $FakeNativeImage): void;
    }
}
