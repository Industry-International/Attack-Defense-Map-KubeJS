import { $InputStream } from "@package/java/io";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";

declare module "@package/customskinloader/fake/texture" {
    export class $FakeImage {
    }
    export interface $FakeImage {
        close(): void;
        setRGBA(arg0: number, arg1: number, arg2: number): void;
        getWidth(): number;
        copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean): void;
        createImage(arg0: number, arg1: number): $FakeImage;
        createImage(arg0: $InputStream): $FakeImage;
        getHeight(): number;
        fillArea(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getRatio(): number;
        setRatio(arg0: number): void;
        getRGBA(arg0: number, arg1: number): number;
        copyImageData(arg0: $FakeImage): void;
        get width(): number;
        get height(): number;
    }
    export class $FakeNativeImage implements $FakeImage {
        close(): void;
        setRGBA(arg0: number, arg1: number, arg2: number): void;
        getWidth(): number;
        copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean): void;
        getImage(): $NativeImage;
        createImage(arg0: number, arg1: number): $FakeImage;
        createImage(arg0: $InputStream): $FakeImage;
        getHeight(): number;
        fillArea(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getRatio(): number;
        setRatio(arg0: number): void;
        getRGBA(arg0: number, arg1: number): number;
        copyImageData(arg0: $FakeImage): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $NativeImage);
        get width(): number;
        get image(): $NativeImage;
        get height(): number;
    }
}
