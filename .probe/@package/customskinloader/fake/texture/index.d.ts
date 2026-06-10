import { $InputStream } from "@package/java/io";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";

declare module "@package/customskinloader/fake/texture" {
    export class $FakeImage {
    }
    export interface $FakeImage {
        getWidth(): number;
        close(): void;
        copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean): void;
        getRatio(): number;
        createImage(arg0: number, arg1: number): $FakeImage;
        createImage(arg0: $InputStream): $FakeImage;
        setRGBA(arg0: number, arg1: number, arg2: number): void;
        getHeight(): number;
        fillArea(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setRatio(arg0: number): void;
        copyImageData(arg0: $FakeImage): void;
        getRGBA(arg0: number, arg1: number): number;
        get width(): number;
        get height(): number;
    }
    export class $FakeNativeImage implements $FakeImage {
        getWidth(): number;
        close(): void;
        copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean): void;
        getRatio(): number;
        createImage(arg0: $InputStream): $FakeImage;
        createImage(arg0: number, arg1: number): $FakeImage;
        setRGBA(arg0: number, arg1: number, arg2: number): void;
        getHeight(): number;
        getImage(): $NativeImage;
        fillArea(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setRatio(arg0: number): void;
        copyImageData(arg0: $FakeImage): void;
        getRGBA(arg0: number, arg1: number): number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $NativeImage);
        get width(): number;
        get height(): number;
        get image(): $NativeImage;
    }
}
