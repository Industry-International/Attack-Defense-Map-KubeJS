import { $STBIWriteCallback } from "@package/org/lwjgl/stb";
import { $PipelineNativeImageAccessor } from "@package/foundry/veil/mixin/pipeline/accessor";
import { $SilentInitException } from "@package/net/minecraft/client/main";
import { $NativeImageExt, $WindowExt } from "@package/com/moulberry/axiom/hooks";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $List_, $Map, $OptionalInt } from "@package/java/util";
import { $NativeImageAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $ByteBuffer, $IntBuffer, $Buffer, $FloatBuffer } from "@package/java/nio";
import { $BooleanStateExtended } from "@package/net/irisshaders/iris/gl";
import { $FakeNativeImage } from "@package/customskinloader/fake/texture";
import { $LazyLoadedValue } from "@package/net/minecraft/util";
import { $BiConsumer_, $LongSupplier, $Supplier_, $IntUnaryOperator_, $Consumer_ } from "@package/java/util/function";
import { $GlStateBackup } from "@package/net/neoforged/neoforge/client";
import { $IFakeNativeImage } from "@package/customskinloader/fake/itf";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $LocalIntRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $CharSequence, $Enum, $AutoCloseable } from "@package/java/lang";
import { $Pointer_ } from "@package/org/lwjgl/system";
import { $GlStateManagerAccessor } from "@package/net/irisshaders/iris/mixin";
import { $InputStream, $File_ } from "@package/java/io";
import { $MainWindowAccessor } from "@package/com/replaymod/render/mixin";
import { $Component } from "@package/net/minecraft/network/chat";
import { $AccessNativeImage } from "@package/icyllis/modernui/mc/mixin";
import { $FT_Face } from "@package/org/lwjgl/util/freetype";
import { $BooleanStateAccessor } from "@package/net/irisshaders/iris/mixin/statelisteners";
import { $GLFWDropCallbackI_, $GLFWKeyCallbackI_, $GLFWVidMode$Buffer, $GLFWCharModsCallbackI_, $GLFWCursorPosCallbackI_, $GLFWScrollCallbackI_, $GLFWVidMode, $GLFWMouseButtonCallbackI_, $GLFWErrorCallbackI_ } from "@package/org/lwjgl/glfw";
import { $WindowKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AccessInputConstantsKey } from "@package/com/blamejared/controlling/mixin";
import { $NativeWindowHandle } from "@package/net/caffeinemc/mods/sodium/client/platform";
import { $Matrix4f, $Vector3f, $Quaternionf } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/platform" {
    export class $Window$WindowInitFailed extends $SilentInitException {
    }
    export class $NativeImage$WriteCallback extends $STBIWriteCallback {
    }
    export class $GlStateManager$PolygonOffsetState {
    }
    export class $MonitorCreator {
    }
    export interface $MonitorCreator {
        createMonitor(arg0: number): $Monitor;
    }
    /**
     * Values that may be interpreted as {@link $MonitorCreator}.
     */
    export type $MonitorCreator_ = ((arg0: number) => $Monitor);
    export class $GlStateManager$DepthState {
        mode: $GlStateManager$BooleanState;
        func: number;
        mask: boolean;
    }
    export class $GlStateManager$ScissorState {
    }
    export class $GlStateManager$BlendState {
        mode: $GlStateManager$BooleanState;
        dstAlpha: number;
        dstRgb: number;
        srcRgb: number;
        srcAlpha: number;
    }
    export class $GlStateManager implements $GlStateManagerAccessor {
        static glActiveTexture(arg0: number): void;
        static glBlendFuncSeparate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static glLinkProgram(arg0: number): void;
        static glCompileShader(arg0: number): void;
        static glCreateProgram(): number;
        static glCreateShader(arg0: number): number;
        static glDeleteShader(arg0: number): void;
        static glAttachShader(arg0: number, arg1: number): void;
        static glShaderSource(arg0: number, arg1: $List_<string>): void;
        static glDeleteProgram(arg0: number): void;
        static glGetShaderInfoLog(arg0: number, arg1: number): string;
        static glGetProgramInfoLog(arg0: number, arg1: number): string;
        static glGenRenderbuffers(): number;
        static glGenFramebuffers(): number;
        static glCheckFramebufferStatus(arg0: number): number;
        static glGetProgrami(arg0: number, arg1: number): number;
        static glGetShaderi(arg0: number, arg1: number): number;
        static _glUseProgram(arg0: number): void;
        static getBoundFramebuffer(): number;
        static _glDeleteRenderbuffers(arg0: number): void;
        static _glBindRenderbuffer(arg0: number, arg1: number): void;
        static _glCopyTexSubImage2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static getBLEND$iris_$md$6ffaf3$0(): $GlStateManager$BlendState;
        static _glRenderbufferStorage(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static _glFramebufferRenderbuffer(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static getDEPTH$iris_$md$6ffaf3$2(): $GlStateManager$DepthState;
        static _glGetUniformLocation(arg0: number, arg1: $CharSequence): number;
        static _glGetAttribLocation(arg0: number, arg1: $CharSequence): number;
        static _glBindAttribLocation(arg0: number, arg1: number, arg2: $CharSequence): void;
        static upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $NativeImage$Format_, arg6: $IntBuffer, arg7: $Consumer_<$IntBuffer>): void;
        static _clear(arg0: number, arg1: boolean): void;
        static getActiveTexture$iris_$md$6ffaf3$3(): number;
        static _getTexImage(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static _glDrawPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static _getError(): number;
        static _texParameter(arg0: number, arg1: number, arg2: number): void;
        static _texParameter(arg0: number, arg1: number, arg2: number): void;
        static _bindTexture(arg0: number): void;
        static getCOLOR_MASK$iris_$md$6ffaf3$1(): $GlStateManager$ColorMask;
        static _deleteTextures(arg0: number[]): void;
        static _genTexture(): number;
        static _genTextures(arg0: number[]): void;
        static _texSubImage2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        static _glBlitFrameBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        static _glUnmapBuffer(arg0: number): void;
        static _glMapBuffer(arg0: number, arg1: number): $ByteBuffer;
        static _depthFunc(arg0: number): void;
        static _blendFunc(arg0: number, arg1: number): void;
        static _depthMask(arg0: boolean): void;
        static _colorMask(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): void;
        static _viewport(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static _logicOp(arg0: number): void;
        static _stencilOp(arg0: number, arg1: number, arg2: number): void;
        static _getString(arg0: number): string;
        static getTEXTURES$iris_$md$6ffaf3$4(): $GlStateManager$TextureState[];
        static _clearColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static _glFramebufferTexture2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static _glDeleteFramebuffers(arg0: number): void;
        static setupGuiFlatDiffuseLighting(arg0: $Vector3f, arg1: $Vector3f): void;
        static _activeTexture(arg0: number): void;
        static _getActiveTexture(): number;
        static _enableScissorTest(): void;
        static _scissorBox(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static _disableBlend(): void;
        static _blendFuncSeparate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static _blendEquation(arg0: number): void;
        static _disableCull(): void;
        static _polygonMode(arg0: number, arg1: number): void;
        static _disableDepthTest(): void;
        static _enableDepthTest(): void;
        static _enableBlend(): void;
        static _enableCull(): void;
        static _glDeleteBuffers(arg0: number): void;
        static _readPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static _readPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ByteBuffer): void;
        static _glUniform4(arg0: number, arg1: $FloatBuffer): void;
        static _glUniform4(arg0: number, arg1: $IntBuffer): void;
        static _glUniform1i(arg0: number, arg1: number): void;
        static _glBufferData(arg0: number, arg1: number, arg2: number): void;
        static _glBufferData(arg0: number, arg1: $ByteBuffer, arg2: number): void;
        static _glUniformMatrix3(arg0: number, arg1: boolean, arg2: $FloatBuffer): void;
        static _glUniformMatrix2(arg0: number, arg1: boolean, arg2: $FloatBuffer): void;
        static _glUniform3(arg0: number, arg1: $FloatBuffer): void;
        static _glUniform3(arg0: number, arg1: $IntBuffer): void;
        static _drawElements(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static _polygonOffset(arg0: number, arg1: number): void;
        static _restoreGlState(arg0: $GlStateBackup): void;
        static _glUniform2(arg0: number, arg1: $IntBuffer): void;
        static _glUniform2(arg0: number, arg1: $FloatBuffer): void;
        static _pixelStore(arg0: number, arg1: number): void;
        static _getInteger(arg0: number): number;
        static _backupGlState(arg0: $GlStateBackup): void;
        static _glBindBuffer(arg0: number, arg1: number): void;
        static _clearDepth(arg0: number): void;
        static _deleteTexture(arg0: number): void;
        static _clearStencil(arg0: number): void;
        static _texImage2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $IntBuffer): void;
        static _glBindVertexArray(arg0: number): void;
        static _stencilFunc(arg0: number, arg1: number, arg2: number): void;
        static _glUniform1(arg0: number, arg1: $FloatBuffer): void;
        static _glUniform1(arg0: number, arg1: $IntBuffer): void;
        static _glGenBuffers(): number;
        static _glGenVertexArrays(): number;
        static _stencilMask(arg0: number): void;
        static _glUniformMatrix4(arg0: number, arg1: boolean, arg2: $FloatBuffer): void;
        static _glBindFramebuffer(arg0: number, arg1: number): void;
        static _vertexAttribIPointer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static _enableVertexAttribArray(arg0: number): void;
        static _vertexAttribPointer(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number): void;
        static _disableVertexAttribArray(arg0: number): void;
        static _getTexLevelParameter(arg0: number, arg1: number, arg2: number): number;
        static _disableScissorTest(): void;
        static _enablePolygonOffset(): void;
        static setupGui3DDiffuseLighting(arg0: $Vector3f, arg1: $Vector3f): void;
        static setupLevelDiffuseLighting(arg0: $Vector3f, arg1: $Vector3f, arg2: $Matrix4f): void;
        static _enableColorLogicOp(): void;
        static _disablePolygonOffset(): void;
        static _disableColorLogicOp(): void;
        static _glDeleteVertexArrays(arg0: number): void;
        static TEXTURE_COUNT: number;
        static BLEND: $GlStateManager$BlendState;
        static TEXTURES: $GlStateManager$TextureState[];
        constructor();
        static get boundFramebuffer(): number;
        static get BLEND$iris_$md$6ffaf3$0(): $GlStateManager$BlendState;
        static get DEPTH$iris_$md$6ffaf3$2(): $GlStateManager$DepthState;
        static get activeTexture$iris_$md$6ffaf3$3(): number;
        static get COLOR_MASK$iris_$md$6ffaf3$1(): $GlStateManager$ColorMask;
        static get TEXTURES$iris_$md$6ffaf3$4(): $GlStateManager$TextureState[];
    }
    export class $NativeImage implements $AutoCloseable, $AccessNativeImage, $PipelineNativeImageAccessor, $NativeImageAccessor, $NativeImageExt, $IFakeNativeImage {
        format(): $NativeImage$Format;
        static read(arg0: number[]): $NativeImage;
        static read(arg0: $NativeImage$Format_, arg1: $ByteBuffer): $NativeImage;
        static read(arg0: $ByteBuffer): $NativeImage;
        static read(arg0: $NativeImage$Format_, arg1: $InputStream): $NativeImage;
        static read(arg0: $InputStream): $NativeImage;
        close(): void;
        copyFrom(arg0: $NativeImage): void;
        writeToFile(arg0: $File_): void;
        writeToFile(arg0: $Path_): void;
        asByteArray(): number[];
        getWidth(): number;
        untrack(): void;
        upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean): void;
        upload(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getPixelsRGBA(): number[];
        getHeight(): number;
        getPixelRGBA(arg0: number, arg1: number): number;
        setPixelRGBA(arg0: number, arg1: number, arg2: number): void;
        fillRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        mappedCopy(arg0: $IntUnaryOperator_): $NativeImage;
        blendPixel(arg0: number, arg1: number, arg2: number): void;
        drawPixels(): void;
        copyRect(arg0: $NativeImage, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        copyRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean): void;
        downloadTexture(arg0: number, arg1: boolean): void;
        getLuminanceOrAlpha(arg0: number, arg1: number): number;
        downloadDepthBuffer(arg0: number): void;
        getGreenOrLuminance(arg0: number, arg1: number): number;
        copyFromFont(arg0: $FT_Face, arg1: number): boolean;
        getRedOrLuminance(arg0: number, arg1: number): number;
        getBlueOrLuminance(arg0: number, arg1: number): number;
        applyToAllPixels(arg0: $IntUnaryOperator_): void;
        setPixelLuminance(arg0: number, arg1: number, arg2: number): void;
        getFakeImage(): $FakeNativeImage;
        axiom$asByteArray(): number[];
        setFakeImage(arg0: $FakeNativeImage): void;
        /**
         * @deprecated
         */
        makePixelArray(): number[];
        resizeSubRectTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage): void;
        flipY(): void;
        getPixel(arg0: number, arg1: number): number;
        setPixel(arg0: number, arg1: number, arg2: number): void;
        getPixels(): number;
        invokeCheckAllocated(): void;
        pixels: number;
        constructor(arg0: $NativeImage$Format_, arg1: number, arg2: number, arg3: boolean);
        constructor(arg0: number, arg1: number, arg2: boolean);
        get width(): number;
        get pixelsRGBA(): number[];
        get height(): number;
    }
    export class $ClipboardManager {
        getClipboard(arg0: number, arg1: $GLFWErrorCallbackI_): string;
        setClipboard(arg0: number, arg1: string): void;
        static FORMAT_UNAVAILABLE: number;
        constructor();
    }
    export class $VideoMode {
        write(): string;
        static read(arg0: string): ($VideoMode) | undefined;
        getWidth(): number;
        getRefreshRate(): number;
        getGreenBits(): number;
        getBlueBits(): number;
        getHeight(): number;
        getRedBits(): number;
        constructor(arg0: $GLFWVidMode);
        constructor(arg0: $GLFWVidMode$Buffer);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get width(): number;
        get refreshRate(): number;
        get greenBits(): number;
        get blueBits(): number;
        get height(): number;
        get redBits(): number;
    }
    export class $GlConst {
        static GL_PROXY_TEXTURE_2D: number;
        static GL_LEQUAL: number;
        static GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
        static GL_ONE_MINUS_SRC_COLOR: number;
        static GL_FUNC_REVERSE_SUBTRACT: number;
        static GL_DEPTH_TEXTURE_MODE: number;
        static GL_UNSIGNED_INT: number;
        static GL_UNPACK_SKIP_ROWS: number;
        static GL_ONE_MINUS_DST_COLOR: number;
        static GL_FRAMEBUFFER_COMPLETE: number;
        static GL_PACK_ALIGNMENT: number;
        static GL_TRIANGLE_FAN: number;
        static GL_SHORT: number;
        static GL_VERTEX_SHADER: number;
        static GL_COLOR_BUFFER_BIT: number;
        static GL_RGBA8: number;
        static GL_DEPTH_ATTACHMENT: number;
        static GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
        static GL_TEXTURE0: number;
        static GL_ZERO: number;
        static GL_ALWAYS: number;
        static GL_DEPTH_COMPONENT32: number;
        static GL_TEXTURE2: number;
        static GL_TEXTURE1: number;
        static GL_STATIC_DRAW: number;
        static GL_ONE_MINUS_DST_ALPHA: number;
        static GL_NEAREST: number;
        static GL_RENDERBUFFER: number;
        static GL_FUNC_ADD: number;
        static GL_UNSIGNED_SHORT: number;
        static GL_CLAMP_TO_EDGE: number;
        static GL_LINES: number;
        static GL_TRUE: number;
        static GL_COLOR_ATTACHMENT0: number;
        static GL_LINE_STRIP: number;
        static GL_FRAGMENT_SHADER: number;
        static GL_UNPACK_SKIP_PIXELS: number;
        static GL_UNPACK_SWAP_BYTES: number;
        static GL_FRONT_AND_BACK: number;
        static GL_DST_COLOR: number;
        static GL_MIN: number;
        static GL_LINEAR_MIPMAP_LINEAR: number;
        static GL_DRAW_FRAMEBUFFER: number;
        static GL_MAX: number;
        static GL_TEXTURE_COMPARE_MODE: number;
        static GL_TEXTURE_WRAP_S: number;
        static GL_DEPTH_COMPONENT: number;
        static GL_TEXTURE_WRAP_T: number;
        static GL_ONE: number;
        static GL_GREATER: number;
        static GL_ELEMENT_ARRAY_BUFFER: number;
        static GL_WRITE_ONLY: number;
        static GL_FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER: number;
        static GL_FILL: number;
        static GL_REPLACE: number;
        static GL_FLOAT: number;
        static GL_FRAMEBUFFER: number;
        static GL_TRIANGLES: number;
        static GL_FUNC_SUBTRACT: number;
        static GL_TEXTURE_2D: number;
        static GL_RED: number;
        static GL_READ_FRAMEBUFFER: number;
        static GL_FRAMEBUFFER_UNSUPPORTED: number;
        static GL_GEQUAL: number;
        static GL_TEXTURE_MIN_FILTER: number;
        static GL_UNPACK_ROW_LENGTH: number;
        static GL_ARRAY_BUFFER: number;
        static GL_UNSIGNED_BYTE: number;
        static GL_DEPTH_BUFFER_BIT: number;
        static GL_LINEAR: number;
        static GL_RGBA: number;
        static GL_NEAREST_MIPMAP_LINEAR: number;
        static GL_MAX_TEXTURE_SIZE: number;
        static GL_DYNAMIC_DRAW: number;
        static GL_TEXTURE_MAG_FILTER: number;
        static GL_OUT_OF_MEMORY: number;
        static GL_DST_ALPHA: number;
        static GL_LINK_STATUS: number;
        static GL_NONE: number;
        static GL_UNPACK_ALIGNMENT: number;
        static GL_SRC_COLOR: number;
        static GL_RG: number;
        static GL_COMPILE_STATUS: number;
        static GL_FRONT: number;
        static GL_UNPACK_LSB_FIRST: number;
        static GL_BYTE: number;
        static GL_FALSE: number;
        static GL_BGR: number;
        static GL_RGB: number;
        static GL_DEPTH_COMPONENT24: number;
        static GL_EQUAL: number;
        static GL_TEXTURE_WIDTH: number;
        static GL_LINE: number;
        static GL_ONE_MINUS_SRC_ALPHA: number;
        static GL_INT: number;
        static GL_ALPHA_BIAS: number;
        static GL_SRC_ALPHA: number;
        static GL_FRAMEBUFFER_INCOMPLETE_READ_BUFFER: number;
        static GL_TRIANGLE_STRIP: number;
        constructor();
    }
    export class $GLX {
        static make<T>(arg0: T, arg1: $Consumer_<T>): T;
        static make<T>(arg0: $Supplier_<T>): T;
        static _getCpuInfo(): string;
        static _getRefreshRate(arg0: $Window): number;
        static _shouldClose(arg0: $Window): boolean;
        static _init(arg0: number, arg1: boolean): void;
        static _initGlfw(): $LongSupplier;
        static _getLWJGLVersion(): string;
        static _renderCrosshair(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean): void;
        static _setGlfwErrorCallback(arg0: $GLFWErrorCallbackI_): void;
        static getOpenGLVersionString(): string;
        constructor();
        static get openGLVersionString(): string;
    }
    export class $Monitor {
        getY(): number;
        getX(): number;
        getMode(arg0: number): $VideoMode;
        getPreferredVidMode(arg0: ($VideoMode) | undefined): $VideoMode;
        refreshVideoModes(): void;
        getVideoModeIndex(arg0: $VideoMode): number;
        getModeCount(): number;
        getCurrentMode(): $VideoMode;
        getMonitor(): number;
        constructor(arg0: number);
        get y(): number;
        get x(): number;
        get modeCount(): number;
        get currentMode(): $VideoMode;
        get monitor(): number;
    }
    export class $GlStateManager$ColorMask {
        red: boolean;
        green: boolean;
        blue: boolean;
        alpha: boolean;
    }
    export class $GlStateManager$DestFactor extends $Enum<$GlStateManager$DestFactor> {
        static values(): $GlStateManager$DestFactor[];
        static valueOf(arg0: string): $GlStateManager$DestFactor;
        static ONE_MINUS_SRC_COLOR: $GlStateManager$DestFactor;
        static ZERO: $GlStateManager$DestFactor;
        static DST_COLOR: $GlStateManager$DestFactor;
        static SRC_ALPHA: $GlStateManager$DestFactor;
        static ONE: $GlStateManager$DestFactor;
        static ONE_MINUS_DST_COLOR: $GlStateManager$DestFactor;
        static DST_ALPHA: $GlStateManager$DestFactor;
        static SRC_COLOR: $GlStateManager$DestFactor;
        static ONE_MINUS_DST_ALPHA: $GlStateManager$DestFactor;
        static CONSTANT_ALPHA: $GlStateManager$DestFactor;
        static ONE_MINUS_SRC_ALPHA: $GlStateManager$DestFactor;
        static CONSTANT_COLOR: $GlStateManager$DestFactor;
        static ONE_MINUS_CONSTANT_ALPHA: $GlStateManager$DestFactor;
        static ONE_MINUS_CONSTANT_COLOR: $GlStateManager$DestFactor;
        value: number;
    }
    /**
     * Values that may be interpreted as {@link $GlStateManager$DestFactor}.
     */
    export type $GlStateManager$DestFactor_ = "constant_alpha" | "constant_color" | "dst_alpha" | "dst_color" | "one" | "one_minus_constant_alpha" | "one_minus_constant_color" | "one_minus_dst_alpha" | "one_minus_dst_color" | "one_minus_src_alpha" | "one_minus_src_color" | "src_alpha" | "src_color" | "zero";
    export class $InputConstants$Key implements $AccessInputConstantsKey {
        getName(): string;
        getValue(): number;
        getType(): $InputConstants$Type;
        getDisplayName(): $Component;
        static getNAME_MAP$controlling_$md$6ffaf3$0(): $Map<any, any>;
        getNumericKeyValue(): $OptionalInt;
        displayName: $LazyLoadedValue<$Component>;
        get name(): string;
        get value(): number;
        get type(): $InputConstants$Type;
        static get NAME_MAP$controlling_$md$6ffaf3$0(): $Map<any, any>;
        get numericKeyValue(): $OptionalInt;
    }
    export class $NativeImage$InternalGlFormat extends $Enum<$NativeImage$InternalGlFormat> {
        static values(): $NativeImage$InternalGlFormat[];
        static valueOf(arg0: string): $NativeImage$InternalGlFormat;
        glFormat(): number;
        static RED: $NativeImage$InternalGlFormat;
        static RGBA: $NativeImage$InternalGlFormat;
        static RG: $NativeImage$InternalGlFormat;
        static RGB: $NativeImage$InternalGlFormat;
    }
    /**
     * Values that may be interpreted as {@link $NativeImage$InternalGlFormat}.
     */
    export type $NativeImage$InternalGlFormat_ = "rgba" | "rgb" | "rg" | "red";
    export class $GlStateManager$SourceFactor extends $Enum<$GlStateManager$SourceFactor> {
        static values(): $GlStateManager$SourceFactor[];
        static valueOf(arg0: string): $GlStateManager$SourceFactor;
        static ONE_MINUS_SRC_COLOR: $GlStateManager$SourceFactor;
        static ZERO: $GlStateManager$SourceFactor;
        static DST_COLOR: $GlStateManager$SourceFactor;
        static SRC_ALPHA: $GlStateManager$SourceFactor;
        static ONE: $GlStateManager$SourceFactor;
        static ONE_MINUS_DST_COLOR: $GlStateManager$SourceFactor;
        static DST_ALPHA: $GlStateManager$SourceFactor;
        static SRC_COLOR: $GlStateManager$SourceFactor;
        static SRC_ALPHA_SATURATE: $GlStateManager$SourceFactor;
        static ONE_MINUS_DST_ALPHA: $GlStateManager$SourceFactor;
        static CONSTANT_ALPHA: $GlStateManager$SourceFactor;
        static ONE_MINUS_SRC_ALPHA: $GlStateManager$SourceFactor;
        static CONSTANT_COLOR: $GlStateManager$SourceFactor;
        static ONE_MINUS_CONSTANT_ALPHA: $GlStateManager$SourceFactor;
        static ONE_MINUS_CONSTANT_COLOR: $GlStateManager$SourceFactor;
        value: number;
    }
    /**
     * Values that may be interpreted as {@link $GlStateManager$SourceFactor}.
     */
    export type $GlStateManager$SourceFactor_ = "constant_alpha" | "constant_color" | "dst_alpha" | "dst_color" | "one" | "one_minus_constant_alpha" | "one_minus_constant_color" | "one_minus_dst_alpha" | "one_minus_dst_color" | "one_minus_src_alpha" | "one_minus_src_color" | "src_alpha" | "src_alpha_saturate" | "src_color" | "zero";
    export class $Lighting {
        static setupForEntityInInventory(): void;
        static setupForEntityInInventory(arg0: $Quaternionf): void;
        static setupFor3DItems(): void;
        static setupForFlatItems(): void;
        static setupLevel(): void;
        static setupNetherLevel(): void;
        static NETHER_DIFFUSE_LIGHT_1: $Vector3f;
        static NETHER_DIFFUSE_LIGHT_0: $Vector3f;
        static DIFFUSE_LIGHT_0: $Vector3f;
        static DIFFUSE_LIGHT_1: $Vector3f;
        constructor();
    }
    export class $GlStateManager$Viewport extends $Enum<$GlStateManager$Viewport> {
        static values(): $GlStateManager$Viewport[];
        static valueOf(arg0: string): $GlStateManager$Viewport;
        static x(): number;
        static y(): number;
        static width(): number;
        static height(): number;
        static INSTANCE: $GlStateManager$Viewport;
    }
    /**
     * Values that may be interpreted as {@link $GlStateManager$Viewport}.
     */
    export type $GlStateManager$Viewport_ = "instance";
    export class $ScreenManager {
        shutdown(): void;
        static clamp(arg0: number, arg1: number, arg2: number): number;
        findBestMonitor(arg0: $Window): $Monitor;
        getMonitor(arg0: number): $Monitor;
        constructor(arg0: $MonitorCreator_);
    }
    export class $GlDebug {
        static enableDebugCallback(arg0: number, arg1: boolean): void;
        static isDebugEnabled(): boolean;
        static typeToString(arg0: number): string;
        static sourceToString(arg0: number): string;
        static severityToString(arg0: number): string;
        static getLastOpenGlDebugMessages(): $List<string>;
        constructor();
        static get debugEnabled(): boolean;
        static get lastOpenGlDebugMessages(): $List<string>;
    }
    export class $IconSet extends $Enum<$IconSet> {
        static values(): $IconSet[];
        static valueOf(arg0: string): $IconSet;
        getStandardIcons(arg0: $PackResources): $List<$IoSupplier<$InputStream>>;
        getMacIcon(arg0: $PackResources): $IoSupplier<$InputStream>;
        static SNAPSHOT: $IconSet;
        static RELEASE: $IconSet;
    }
    /**
     * Values that may be interpreted as {@link $IconSet}.
     */
    export type $IconSet_ = "release" | "snapshot";
    export class $GlStateManager$ColorLogicState {
    }
    export class $InputConstants {
        static getKey(arg0: string): $InputConstants$Key;
        static getKey(arg0: number, arg1: number): $InputConstants$Key;
        static isKeyDown(arg0: number, arg1: number): boolean;
        static setupKeyboardCallbacks(arg0: number, arg1: $GLFWKeyCallbackI_, arg2: $GLFWCharModsCallbackI_): void;
        static setupMouseCallbacks(arg0: number, arg1: $GLFWCursorPosCallbackI_, arg2: $GLFWMouseButtonCallbackI_, arg3: $GLFWScrollCallbackI_, arg4: $GLFWDropCallbackI_): void;
        static isRawMouseInputSupported(): boolean;
        static grabOrReleaseMouse(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static updateRawMouseInput(arg0: number, arg1: boolean): void;
        static KEY_A: number;
        static KEY_C: number;
        static KEY_B: number;
        static KEY_DELETE: number;
        static KEY_E: number;
        static KEY_D: number;
        static KEY_G: number;
        static KEY_F: number;
        static KEY_I: number;
        static KEY_H: number;
        static KEY_K: number;
        static MOUSE_BUTTON_MIDDLE: number;
        static KEY_J: number;
        static KEY_INSERT: number;
        static KEY_M: number;
        static KEY_COMMA: number;
        static KEY_L: number;
        static KEY_O: number;
        static KEY_N: number;
        static KEY_Q: number;
        static KEY_P: number;
        static KEY_S: number;
        static KEY_R: number;
        static KEY_U: number;
        static KEY_MINUS: number;
        static KEY_T: number;
        static KEY_W: number;
        static KEY_GRAVE: number;
        static KEY_V: number;
        static KEY_Y: number;
        static KEY_X: number;
        static KEY_Z: number;
        static KEY_BACKSLASH: number;
        static KEY_SEMICOLON: number;
        static KEY_MULTIPLY: number;
        static KEY_RSHIFT: number;
        static KEY_NUMLOCK: number;
        static RELEASE: number;
        static KEY_NUMPAD7: number;
        static KEY_NUMPAD8: number;
        static KEY_TAB: number;
        static KEY_NUMPAD5: number;
        static KEY_NUMPAD6: number;
        static KEY_PAGEDOWN: number;
        static KEY_NUMPAD9: number;
        static KEY_NUMPAD0: number;
        static KEY_APOSTROPHE: number;
        static KEY_NUMPAD3: number;
        static KEY_NUMPAD4: number;
        static KEY_NUMPAD1: number;
        static KEY_NUMPAD2: number;
        static KEY_F7: number;
        static KEY_F20: number;
        static KEY_F6: number;
        static KEY_F21: number;
        static KEY_F9: number;
        static KEY_F22: number;
        static KEY_F8: number;
        static KEY_F23: number;
        static KEY_LEFT: number;
        static REPEAT: number;
        static KEY_F24: number;
        static KEY_F25: number;
        static KEY_RBRACKET: number;
        static MOD_CONTROL: number;
        static KEY_F1: number;
        static KEY_F3: number;
        static KEY_F2: number;
        static KEY_F5: number;
        static KEY_F4: number;
        static KEY_NUMPADCOMMA: number;
        static KEY_UP: number;
        static KEY_RWIN: number;
        static CURSOR_NORMAL: number;
        static KEY_1: number;
        static KEY_0: number;
        static KEY_3: number;
        static KEY_2: number;
        static KEY_5: number;
        static KEY_4: number;
        static MOUSE_BUTTON_LEFT: number;
        static KEY_7: number;
        static KEY_NUMPADENTER: number;
        static KEY_RIGHT: number;
        static KEY_6: number;
        static KEY_9: number;
        static KEY_8: number;
        static KEY_SPACE: number;
        static CURSOR: number;
        static KEY_LSHIFT: number;
        static KEY_LCONTROL: number;
        static KEY_PAGEUP: number;
        static KEY_BACKSPACE: number;
        static KEY_PRINTSCREEN: number;
        static KEY_HOME: number;
        static KEY_NUMPADEQUALS: number;
        static KEY_ESCAPE: number;
        static KEY_F10: number;
        static KEY_F11: number;
        static KEY_F12: number;
        static KEY_F17: number;
        static KEY_F18: number;
        static CURSOR_DISABLED: number;
        static KEY_F19: number;
        static KEY_F13: number;
        static KEY_SCROLLLOCK: number;
        static KEY_F14: number;
        static KEY_F15: number;
        static PRESS: number;
        static KEY_F16: number;
        static KEY_RALT: number;
        static KEY_LWIN: number;
        static KEY_EQUALS: number;
        static KEY_CAPSLOCK: number;
        static KEY_PAUSE: number;
        static KEY_RETURN: number;
        static KEY_SLASH: number;
        static KEY_ADD: number;
        static KEY_LBRACKET: number;
        static MOUSE_BUTTON_RIGHT: number;
        static KEY_DOWN: number;
        static KEY_PERIOD: number;
        static KEY_RCONTROL: number;
        static UNKNOWN: $InputConstants$Key;
        static KEY_LALT: number;
        static KEY_END: number;
        constructor();
        static get rawMouseInputSupported(): boolean;
    }
    export class $NativeImage$Format extends $Enum<$NativeImage$Format> {
        static values(): $NativeImage$Format[];
        static valueOf(arg0: string): $NativeImage$Format;
        components(): number;
        hasRed(): boolean;
        redOffset(): number;
        hasBlue(): boolean;
        blueOffset(): number;
        hasGreen(): boolean;
        setUnpackPixelStoreState(): void;
        glFormat(): number;
        hasAlpha(): boolean;
        luminanceOrRedOffset(): number;
        hasLuminanceOrAlpha(): boolean;
        setPackPixelStoreState(): void;
        luminanceOrAlphaOffset(): number;
        luminanceOrGreenOffset(): number;
        hasLuminanceOrGreen(): boolean;
        luminanceOrBlueOffset(): number;
        hasLuminance(): boolean;
        hasLuminanceOrRed(): boolean;
        luminanceOffset(): number;
        hasLuminanceOrBlue(): boolean;
        greenOffset(): number;
        alphaOffset(): number;
        supportedByStb(): boolean;
        static LUMINANCE_ALPHA: $NativeImage$Format;
        static RGBA: $NativeImage$Format;
        static LUMINANCE: $NativeImage$Format;
        static RGB: $NativeImage$Format;
    }
    /**
     * Values that may be interpreted as {@link $NativeImage$Format}.
     */
    export type $NativeImage$Format_ = "rgba" | "rgb" | "luminance_alpha" | "luminance";
    export class $GlStateManager$StencilFunc {
    }
    export class $GlUtil {
        static freeMemory(arg0: $Buffer): void;
        static allocateMemory(arg0: number): $ByteBuffer;
        static getCpuInfo(): string;
        static getRenderer(): string;
        static getOpenGLVersion(): string;
        static getVendor(): string;
        constructor();
        static get cpuInfo(): string;
        static get renderer(): string;
        static get openGLVersion(): string;
        static get vendor(): string;
    }
    export class $GlStateManager$StencilState {
    }
    export class $TextureUtil {
        static releaseTextureId(arg0: number): void;
        static generateTextureId(): number;
        static writeAsPNG(arg0: $Path_, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static writeAsPNG(arg0: $Path_, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntUnaryOperator_): void;
        static prepareImage(arg0: $NativeImage$InternalGlFormat_, arg1: number, arg2: number, arg3: number): void;
        static prepareImage(arg0: number, arg1: number, arg2: number): void;
        static prepareImage(arg0: $NativeImage$InternalGlFormat_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static prepareImage(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static getDebugTexturePath(arg0: $Path_): $Path;
        static getDebugTexturePath(): $Path;
        static readResource(arg0: $InputStream): $ByteBuffer;
        static MIN_MIPMAP_LEVEL: number;
        constructor();
    }
    export class $GlStateManager$TextureState {
        binding: number;
    }
    export class $GlStateManager$CullState {
    }
    export class $GlStateManager$BooleanState implements $BooleanStateExtended, $BooleanStateAccessor {
        enable(): void;
        disable(): void;
        setEnabled(arg0: boolean): void;
        setUnknownState(): void;
        isEnabled(): boolean;
        enabled: boolean;
        constructor(arg0: number);
    }
    export class $GlDebug$LogEntry {
    }
    export class $Window implements $AutoCloseable, $MainWindowAccessor, $NativeWindowHandle, $WindowKJS, $WindowExt {
        getY(): number;
        getX(): number;
        close(): void;
        getWidth(): number;
        static getPlatform(): string;
        constant$cgg000$acceleratedrendering$modifyGlMajorVersion(arg0: number): number;
        constant$cgg000$acceleratedrendering$modifyGlMinorVersion(arg0: number): number;
        wrapOperation$dbc000$sodium$setAdditionalWindowHints(arg0: number, arg1: number, arg2: $CharSequence, arg3: number, arg4: number, arg5: $Operation_<any>): number;
        handler$ikk000$imblocker$tweakFullScreenWindowStyle(arg0: $CallbackInfo): void;
        getScreenHeight(): number;
        getScreenWidth(): number;
        shouldClose(): boolean;
        changeFullscreenVideoMode(): void;
        axiom$resizeFramebuffer(window: number, width: number, height: number): void;
        defaultErrorCallback(arg0: number, arg1: number): void;
        calculateScale(arg0: number, arg1: boolean): number;
        setGuiScale(arg0: number): void;
        updateDisplay(): void;
        getFramerateLimit(): number;
        setPreferredFullscreenVideoMode(arg0: ($VideoMode) | undefined): void;
        handler$ipe000$axiom$getWidth(cir: $CallbackInfoReturnable<any>): void;
        handler$ipe000$axiom$getHeight(cir: $CallbackInfoReturnable<any>): void;
        handler$ipe000$axiom$setGuiScale(d: number, ci: $CallbackInfo): void;
        static checkGlfwError(arg0: $BiConsumer_<number, string>): void;
        getRefreshRate(): number;
        getWin32Handle(): number;
        findBestMonitor(): $Monitor;
        axiom$resize(window: number, width: number, height: number): void;
        getWindow(): number;
        getHeight(): number;
        handler$ipe000$axiom$calculateScale(scale: number, forceEven: boolean, cir: $CallbackInfoReturnable<any>): void;
        handler$ipe000$axiom$getScreenWidth(cir: $CallbackInfoReturnable<any>): void;
        modify$bkj000$veil$modifyMinorVersion(arg0: number, arg1: $LocalIntRef): number;
        modify$bll000$veil$captureMinorVersion(arg0: number, arg1: $LocalIntRef): number;
        handler$doe000$modernui$onCalculateScale(guiScaleIn: number, forceUnicode: boolean, ci: $CallbackInfoReturnable<any>): void;
        handler$ipe000$axiom$onResizeInject(l: number, i: number, j: number, ci: $CallbackInfo): void;
        modify$bll000$veil$captureMajorVersion(arg0: number, arg1: $LocalIntRef): number;
        modify$bkj000$veil$modifyMajorVersion(arg0: number, arg1: $LocalIntRef): number;
        handler$ipe000$axiom$getScreenHeight(cir: $CallbackInfoReturnable<any>): void;
        setErrorSection(arg0: string): void;
        setWindowed(arg0: number, arg1: number): void;
        toggleFullScreen(): void;
        setFramerateLimit(arg0: number): void;
        isFullscreen(): boolean;
        setIcon(arg0: $PackResources, arg1: $IconSet_): void;
        setTitle(arg0: string): void;
        handler$ikl000$imblocker$initializeIngameIME(arg0: $WindowEventHandler, arg1: $ScreenManager, arg2: $DisplayData, arg3: string, arg4: string, arg5: $CallbackInfo): void;
        handler$ikh000$imblocker$onScaleFactorChanged(arg0: number, arg1: $CallbackInfo): void;
        handler$ikh000$imblocker$onScaleFactorChanged(arg0: number, arg1: $CallbackInfo): void;
        getPreferredFullscreenVideoMode(): ($VideoMode) | undefined;
        getGuiScale(): number;
        getGuiScaledWidth(): number;
        getGuiScaledHeight(): number;
        setHeight(arg0: number): void;
        setWidth(arg0: number): void;
        updateRawMouseInput(arg0: boolean): void;
        setDefaultErrorCallback(): void;
        updateVsync(arg0: boolean): void;
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
        invokeOnFramebufferResize(arg0: number, arg1: number, arg2: number): void;
        getFramebufferWidth(): number;
        getFramebufferHeight(): number;
        setFramebufferWidth(arg0: number): void;
        setFramebufferHeight(arg0: number): void;
        dirty: boolean;
        framebufferWidth: number;
        width: number;
        framebufferHeight: number;
        static BASE_HEIGHT: number;
        static BASE_WIDTH: number;
        height: number;
        constructor(arg0: $WindowEventHandler, arg1: $ScreenManager, arg2: $DisplayData, arg3: string, arg4: string);
        get y(): number;
        get x(): number;
        static get platform(): string;
        get screenHeight(): number;
        get screenWidth(): number;
        get refreshRate(): number;
        get win32Handle(): number;
        get window(): number;
        set errorSection(value: string);
        get fullscreen(): boolean;
        set title(value: string);
        get guiScaledWidth(): number;
        get guiScaledHeight(): number;
    }
    export class $InputConstants$Type extends $Enum<$InputConstants$Type> {
        getOrCreate(arg0: number): $InputConstants$Key;
        static values(): $InputConstants$Type[];
        static valueOf(arg0: string): $InputConstants$Type;
        static SCANCODE: $InputConstants$Type;
        static MOUSE: $InputConstants$Type;
        static KEYSYM: $InputConstants$Type;
    }
    /**
     * Values that may be interpreted as {@link $InputConstants$Type}.
     */
    export type $InputConstants$Type_ = "keysym" | "scancode" | "mouse";
    export class $MacosUtil {
        static exitNativeFullscreen(arg0: number): void;
        static clearResizableBit(arg0: number): void;
        static loadIcon(arg0: $IoSupplier_<$InputStream>): void;
        constructor();
    }
    export class $WindowEventHandler {
    }
    export interface $WindowEventHandler {
        setWindowActive(arg0: boolean): void;
        cursorEntered(): void;
        resizeDisplay(): void;
        set windowActive(value: boolean);
    }
    export class $GlStateManager$LogicOp extends $Enum<$GlStateManager$LogicOp> {
        static values(): $GlStateManager$LogicOp[];
        static valueOf(arg0: string): $GlStateManager$LogicOp;
        static OR: $GlStateManager$LogicOp;
        static SET: $GlStateManager$LogicOp;
        static EQUIV: $GlStateManager$LogicOp;
        static NOOP: $GlStateManager$LogicOp;
        static COPY: $GlStateManager$LogicOp;
        static NAND: $GlStateManager$LogicOp;
        static COPY_INVERTED: $GlStateManager$LogicOp;
        static NOR: $GlStateManager$LogicOp;
        static AND_REVERSE: $GlStateManager$LogicOp;
        static INVERT: $GlStateManager$LogicOp;
        static AND: $GlStateManager$LogicOp;
        static OR_REVERSE: $GlStateManager$LogicOp;
        static XOR: $GlStateManager$LogicOp;
        static AND_INVERTED: $GlStateManager$LogicOp;
        value: number;
        static CLEAR: $GlStateManager$LogicOp;
        static OR_INVERTED: $GlStateManager$LogicOp;
    }
    /**
     * Values that may be interpreted as {@link $GlStateManager$LogicOp}.
     */
    export type $GlStateManager$LogicOp_ = "and" | "and_inverted" | "and_reverse" | "clear" | "copy" | "copy_inverted" | "equiv" | "invert" | "nand" | "noop" | "nor" | "or" | "or_inverted" | "or_reverse" | "set" | "xor";
    export class $DebugMemoryUntracker {
        static untrack(arg0: number): void;
        static untrack(arg0: $Pointer_): void;
        constructor();
    }
    export class $DisplayData {
        fullscreenHeight: $OptionalInt;
        fullscreenWidth: $OptionalInt;
        width: number;
        height: number;
        isFullscreen: boolean;
        constructor(arg0: number, arg1: number, arg2: $OptionalInt, arg3: $OptionalInt, arg4: boolean);
    }
}
