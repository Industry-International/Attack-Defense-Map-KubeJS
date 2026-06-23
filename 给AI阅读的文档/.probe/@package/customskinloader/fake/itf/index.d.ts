import { $InputStream } from "@package/java/io";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Resource } from "@package/net/minecraft/server/packs/resources";
import { $Optional } from "@package/java/util";

declare module "@package/customskinloader/fake/itf" {
    export class $IFakeIResourceManager$V1 {
    }
    export interface $IFakeIResourceManager$V1 {
        getResource(arg0: $ResourceLocation_): $Resource;
    }
    /**
     * Values that may be interpreted as {@link $IFakeIResourceManager$V1}.
     */
    export type $IFakeIResourceManager$V1_ = ((arg0: $ResourceLocation) => $Resource);
    export class $IFakeIResourceManager$V2 {
    }
    export interface $IFakeIResourceManager$V2 {
        getResource(arg0: $ResourceLocation_): $Optional<any>;
    }
    export class $IFakeIResource$V1 {
    }
    export interface $IFakeIResource$V1 {
        getInputStream(): $InputStream;
        get inputStream(): $InputStream;
    }
    /**
     * Values that may be interpreted as {@link $IFakeIResource$V1}.
     */
    export type $IFakeIResource$V1_ = (() => $InputStream);
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
    }
}
