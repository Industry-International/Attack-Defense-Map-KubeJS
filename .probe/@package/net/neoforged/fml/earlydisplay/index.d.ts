import { $Supplier_, $IntConsumer_, $IntSupplier_, $Consumer_, $Supplier, $LongSupplier_ } from "@package/java/util/function";
import { $ImmediateWindowProvider } from "@package/net/neoforged/neoforgespi/earlywindow";
import { $ModuleLayer, $Throwable, $Runnable, $Enum, $Record } from "@package/java/lang";

declare module "@package/net/neoforged/fml/earlydisplay" {
    export class $ColourScheme extends $Enum<$ColourScheme> {
        static values(): $ColourScheme[];
        static valueOf(arg0: string): $ColourScheme;
        background(): $ColourScheme$Colour;
        foreground(): $ColourScheme$Colour;
        static RED: $ColourScheme;
        static BLACK: $ColourScheme;
    }
    /**
     * Values that may be interpreted as {@link $ColourScheme}.
     */
    export type $ColourScheme_ = "red" | "black";
    export class $ElementShader {
        clear(): void;
        init(): void;
        close(): void;
        updateRenderTypeUniform(arg0: $ElementShader$RenderType_): void;
        updateTextureUniform(arg0: number): void;
        activate(): void;
        updateScreenSizeUniform(arg0: number, arg1: number): void;
        program(): number;
        constructor();
    }
    export class $RenderElement$DisplayContext extends $Record {
        scale(): number;
        width(): number;
        colourScheme(): $ColourScheme;
        scaledHeight(): number;
        scaledWidth(): number;
        elementShader(): $ElementShader;
        height(): number;
        performance(): $PerformanceInfo;
        constructor(width: number, height: number, scale: number, elementShader: $ElementShader, colourScheme: $ColourScheme_, performance: $PerformanceInfo);
    }
    export class $ColourScheme$Colour extends $Record {
        red(): number;
        green(): number;
        blue(): number;
        redf(): number;
        greenf(): number;
        bluef(): number;
        packedint(arg0: number): number;
        constructor(red: number, green: number, blue: number);
    }
    export class $ElementShader$RenderType extends $Enum<$ElementShader$RenderType> {
        static values(): $ElementShader$RenderType[];
        static valueOf(arg0: string): $ElementShader$RenderType;
        static TEXTURE: $ElementShader$RenderType;
        static BAR: $ElementShader$RenderType;
        static FONT: $ElementShader$RenderType;
    }
    /**
     * Values that may be interpreted as {@link $ElementShader$RenderType}.
     */
    export type $ElementShader$RenderType_ = "font" | "texture" | "bar";
    export class $DisplayWindow implements $ImmediateWindowProvider {
        name(): string;
        context(): $RenderElement$DisplayContext;
        initialize(arg0: string[]): $Runnable;
        start(arg0: string, arg1: string): $Runnable;
        close(): void;
        crash(arg0: string): void;
        setupMinecraftWindow(arg0: $IntSupplier_, arg1: $IntSupplier_, arg2: $Supplier_<string>, arg3: $LongSupplier_): number;
        updateFramebufferSize(arg0: $IntConsumer_, arg1: $IntConsumer_): void;
        render(arg0: number): void;
        addMojangTexture(arg0: number): void;
        getFramebufferTextureId(): number;
        initWindow(arg0: string): void;
        positionWindow(arg0: (never) | undefined, arg1: $IntConsumer_, arg2: $IntConsumer_, arg3: $IntConsumer_, arg4: $IntConsumer_): boolean;
        loadingOverlay<T>(arg0: $Supplier_<never>, arg1: $Supplier_<never>, arg2: $Consumer_<($Throwable) | undefined>, arg3: boolean): $Supplier<T>;
        updateModuleReads(arg0: $ModuleLayer): void;
        periodicTick(): void;
        getGLVersion(): string;
        constructor();
        get framebufferTextureId(): number;
        get GLVersion(): string;
    }
    export class $PerformanceInfo {
    }
}
