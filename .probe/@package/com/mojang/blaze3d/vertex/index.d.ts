import { $PoseTransformStack } from "@package/dev/engine_room/flywheel/lib/transform";
import { $RenderType, $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $BufferBuilderExt as $BufferBuilderExt$1 } from "@package/com/moulberry/axiom/hooks";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Deque } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $IAcceleratedVertexConsumer, $AcceleratedBufferBuilder } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";
import { $PoseStackExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $IPoseStackExtension, $IVertexConsumerExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BufferBuilderExtension } from "@package/net/caffeinemc/mods/sodium/client/render/vertex/buffer";
import { $Enum, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $MemoryStack } from "@package/org/lwjgl/system";
import { $ServerMesh_ } from "@package/com/github/argon4w/acceleratedrendering/core/meshes";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $BlockSensitiveBufferBuilder, $MojangBufferAccessor } from "@package/net/irisshaders/iris/vertices";
import { $IAcceleratedRenderer_ } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $IMemoryLayout } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/memory";
import { $MeshDataAccessor, $BufferBuilderAccessor } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $PoseStackAccessor as $PoseStackAccessor$1 } from "@package/dev/engine_room/flywheel/impl/mixin";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $VertexFormatExtensions } from "@package/net/caffeinemc/mods/sodium/api/vertex/format";
import { $VertexBufferHelper } from "@package/net/irisshaders/iris/helpers";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $VertexBufferExtension, $DebugVertexBufferExt } from "@package/foundry/veil/ext";
import { $MemoryTrackingBuffer, $BufferBuilderExt } from "@package/net/irisshaders/batchedentityrendering/impl";
import { $VertexBufferWriter } from "@package/net/caffeinemc/mods/sodium/api/vertex/buffer";
import { $BufferBuilderAccessor as $BufferBuilderAccessor$2 } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Stream } from "@package/java/util/stream";
import { $IAccelerationHolder } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated";
import { $Transformation } from "@package/com/mojang/math";
import { $BufferBuilderAccessor as $BufferBuilderAccessor$1 } from "@package/rbasamoyai/createbigcannons/mixin/client";
import { $PoseStackAccessor } from "@package/org/embeddedt/modernfix/common/mixin/bugfix/entity_pose_stack";
import { $Vector3dc, $Matrix4f, $Vector3f, $Quaterniondc, $Matrix3f, $Vector3fc, $Quaternionf, $Quaternionfc } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/vertex" {
    export class $DefaultVertexFormat {
        static POSITION_COLOR_NORMAL: $VertexFormat;
        static BLIT_SCREEN: $VertexFormat;
        static PARTICLE: $VertexFormat;
        static POSITION_TEX_COLOR_NORMAL: $VertexFormat;
        static BLOCK: $VertexFormat;
        static POSITION_TEX: $VertexFormat;
        static POSITION_TEX_COLOR: $VertexFormat;
        static POSITION: $VertexFormat;
        static POSITION_TEX_LIGHTMAP_COLOR: $VertexFormat;
        static POSITION_COLOR_LIGHTMAP: $VertexFormat;
        static POSITION_COLOR: $VertexFormat;
        static POSITION_COLOR_TEX_LIGHTMAP: $VertexFormat;
        static NEW_ENTITY: $VertexFormat;
        constructor();
    }
    export class $ByteBufferBuilder implements $AutoCloseable, $MojangBufferAccessor, $MemoryTrackingBuffer {
        clear(): void;
        close(): void;
        build(): $ByteBufferBuilder$Result;
        reserve(arg0: number): number;
        discard(): void;
        getPointer(): number;
        getAllocatedSize(): number;
        getUsedSize(): number;
        freeAndDeleteBuffer(): void;
        localvar$ipa000$axiom$modifyCapacity(value: number): number;
        constructor(arg0: number);
        get pointer(): number;
        get allocatedSize(): number;
        get usedSize(): number;
    }
    export class $VertexConsumer {
    }
    export interface $VertexConsumer extends $IVertexConsumerExtension, $IAcceleratedVertexConsumer {
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        isAccelerated(): boolean;
        setLight(arg0: number): $VertexConsumer;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        set overlay(value: number);
        set whiteAlpha(value: number);
        get accelerated(): boolean;
        set light(value: number);
    }
    export class $VertexFormat$Mode extends $Enum<$VertexFormat$Mode> {
        static values(): $VertexFormat$Mode[];
        static valueOf(arg0: string): $VertexFormat$Mode;
        indexCount(arg0: number): number;
        asGLMode: number;
        static QUADS: $VertexFormat$Mode;
        primitiveLength: number;
        primitiveStride: number;
        connectedPrimitives: boolean;
        static TRIANGLE_FAN: $VertexFormat$Mode;
        static DEBUG_LINES: $VertexFormat$Mode;
        static TRIANGLES: $VertexFormat$Mode;
        static DEBUG_LINE_STRIP: $VertexFormat$Mode;
        static LINE_STRIP: $VertexFormat$Mode;
        static LINES: $VertexFormat$Mode;
        static TRIANGLE_STRIP: $VertexFormat$Mode;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormat$Mode}.
     */
    export type $VertexFormat$Mode_ = "lines" | "line_strip" | "debug_lines" | "debug_line_strip" | "triangles" | "triangle_strip" | "triangle_fan" | "quads";
    export class $VertexSorting$DistanceFunction {
    }
    export interface $VertexSorting$DistanceFunction {
        apply(arg0: $Vector3f): number;
    }
    /**
     * Values that may be interpreted as {@link $VertexSorting$DistanceFunction}.
     */
    export type $VertexSorting$DistanceFunction_ = ((arg0: $Vector3f) => number);
    export class $MeshData$SortState extends $Record {
        buildSortedIndexBuffer(arg0: $ByteBufferBuilder, arg1: $VertexSorting_): $ByteBufferBuilder$Result;
        indexType(): $VertexFormat$IndexType;
        centroids(): $Vector3f[];
        constructor(arg0: $Vector3f[], arg1: $VertexFormat$IndexType_);
    }
    export class $VertexMultiConsumer {
        static create(...arg0: $VertexConsumer[]): $VertexConsumer;
        static create(arg0: $VertexConsumer, arg1: $VertexConsumer): $VertexConsumer;
        static create(arg0: $VertexConsumer): $VertexConsumer;
        static create(): $VertexConsumer;
        constructor();
    }
    export class $VertexMultiConsumer$Multiple extends $Record implements $VertexConsumer, $IAcceleratedVertexConsumer, $VertexBufferWriter {
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        isAccelerated(): boolean;
        setLight(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        getLayout(): $IMemoryLayout<$VertexFormatElement>;
        decorate(arg0: $VertexConsumer): $VertexConsumer;
        addClientMesh(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPolygonSize(): number;
        addServerMesh(arg0: $ServerMesh_, arg1: number, arg2: number, arg3: number): void;
        beginTransform(arg0: $Matrix4f, arg1: $Matrix3f): void;
        downloadTexture(): $NativeImage;
        endTransform(): void;
        getRenderType(): $RenderType;
        doRender<T>(arg0: $IAcceleratedRenderer_<T>, arg1: T, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        canUseIntrinsics(): boolean;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        set overlay(value: number);
        set whiteAlpha(value: number);
        get accelerated(): boolean;
        set light(value: number);
        get layout(): $IMemoryLayout<$VertexFormatElement>;
        get polygonSize(): number;
        get renderType(): $RenderType;
    }
    export class $BufferBuilder implements $VertexConsumer, $BlockSensitiveBufferBuilder, $BufferBuilderAccessor, $IAccelerationHolder, $IAcceleratedVertexConsumer, $BufferBuilderAccessor$1, $BufferBuilderExtension, $VertexBufferWriter, $BufferBuilderAccessor$2, $BufferBuilderExt$1, $BufferBuilderExt {
        build(): $MeshData;
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setColor(arg0: number): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        buildOrThrow(): $MeshData;
        sodium$duplicateVertex(): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        isAccelerated(): boolean;
        setLight(arg0: number): $VertexConsumer;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        initAcceleration(arg0: $RenderType): $VertexConsumer;
        getAccelerated(): $AcceleratedBufferBuilder;
        axiom$reserve(bytes: number): number;
        doRender(arg0: $IAcceleratedRenderer_<any>, arg1: $Object, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        axiom$getVertexPointer(): number;
        axiom$getByteBufferBuilder(): $ByteBufferBuilder;
        beginBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        endBlock(): void;
        splitStrip(): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        getLayout(): $IMemoryLayout<$VertexFormatElement>;
        decorate(arg0: $VertexConsumer): $VertexConsumer;
        addClientMesh(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPolygonSize(): number;
        addServerMesh(arg0: $ServerMesh_, arg1: number, arg2: number, arg3: number): void;
        beginTransform(arg0: $Matrix4f, arg1: $Matrix3f): void;
        downloadTexture(): $NativeImage;
        endTransform(): void;
        getRenderType(): $RenderType;
        canUseIntrinsics(): boolean;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        callBeginElement(arg0: $VertexFormatElement_): number;
        catnip$getVertices(): number;
        invokeBeginElement(arg0: $VertexFormatElement_): number;
        mode: $VertexFormat$Mode;
        vertices: number;
        format: $VertexFormat;
        building: boolean;
        constructor(arg0: $ByteBufferBuilder, arg1: $VertexFormat$Mode_, arg2: $VertexFormat);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
        get layout(): $IMemoryLayout<$VertexFormatElement>;
        get polygonSize(): number;
        get renderType(): $RenderType;
    }
    export class $VertexSorting {
        static byDistance(arg0: number, arg1: number, arg2: number): $VertexSorting;
        static byDistance(arg0: $Vector3f): $VertexSorting;
        static byDistance(arg0: $VertexSorting$DistanceFunction_): $VertexSorting;
        static ORTHOGRAPHIC_Z: $VertexSorting;
        static DISTANCE_TO_ORIGIN: $VertexSorting;
    }
    export interface $VertexSorting {
        sort(arg0: $Vector3f[]): number[];
    }
    /**
     * Values that may be interpreted as {@link $VertexSorting}.
     */
    export type $VertexSorting_ = ((arg0: $Vector3f[]) => number[]);
    export class $VertexFormatElement$Type extends $Enum<$VertexFormatElement$Type> {
        size(): number;
        static values(): $VertexFormatElement$Type[];
        static valueOf(arg0: string): $VertexFormatElement$Type;
        glType(): number;
        static UBYTE: $VertexFormatElement$Type;
        static FLOAT: $VertexFormatElement$Type;
        static BYTE: $VertexFormatElement$Type;
        static USHORT: $VertexFormatElement$Type;
        static UINT: $VertexFormatElement$Type;
        static INT: $VertexFormatElement$Type;
        static SHORT: $VertexFormatElement$Type;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement$Type}.
     */
    export type $VertexFormatElement$Type_ = "float" | "ubyte" | "byte" | "ushort" | "short" | "uint" | "int";
    export class $VertexFormatElement$Usage$SetupState {
    }
    export interface $VertexFormatElement$Usage$SetupState {
        setupBufferState(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement$Usage$SetupState}.
     */
    export type $VertexFormatElement$Usage$SetupState_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $VertexFormat implements $VertexFormatExtensions {
        static builder(): $VertexFormat$Builder;
        contains(arg0: $VertexFormatElement_): boolean;
        getOffset(arg0: $VertexFormatElement_): number;
        getElementName(arg0: $VertexFormatElement_): string;
        getElements(): $List<$VertexFormatElement>;
        handler$bke000$veil$nameImmediateDrawVertexBuffer(arg0: $CallbackInfoReturnable<any>): void;
        getImmediateDrawVertexBuffer(): $VertexBuffer;
        getElementAttributeNames(): $List<string>;
        getOffsetsByElement(): number[];
        getVertexSize(): number;
        hasPosition(): boolean;
        setupBufferState(): void;
        getElementMapping(): $ImmutableMap<string, $VertexFormatElement>;
        clearBufferState(): void;
        getElementsMask(): number;
        sodium$getGlobalId(): number;
        hasColor(): boolean;
        hasUV(arg0: number): boolean;
        hasNormal(): boolean;
        static UNKNOWN_ELEMENT: number;
        get elements(): $List<$VertexFormatElement>;
        get immediateDrawVertexBuffer(): $VertexBuffer;
        get elementAttributeNames(): $List<string>;
        get offsetsByElement(): number[];
        get vertexSize(): number;
        get elementMapping(): $ImmutableMap<string, $VertexFormatElement>;
        get elementsMask(): number;
    }
    export class $ByteBufferBuilder$Result implements $AutoCloseable {
        close(): void;
        byteBuffer(): $ByteBuffer;
    }
    export class $MeshData implements $AutoCloseable, $MeshDataAccessor {
        close(): void;
        sortQuads(arg0: $ByteBufferBuilder, arg1: $VertexSorting_): $MeshData$SortState;
        vertexBuffer(): $ByteBuffer;
        indexBuffer(): $ByteBuffer;
        drawState(): $MeshData$DrawState;
        getIndexBuffer(): $ByteBufferBuilder$Result;
        setIndexBuffer(arg0: $ByteBufferBuilder$Result): void;
        constructor(arg0: $ByteBufferBuilder$Result, arg1: $MeshData$DrawState_);
    }
    export class $VertexFormatElement$Usage extends $Enum<$VertexFormatElement$Usage> implements $IExtensibleEnum {
        static values(): $VertexFormatElement$Usage[];
        static valueOf(arg0: string): $VertexFormatElement$Usage;
        static getExtensionInfo(): $ExtensionInfo;
        static POSITION: $VertexFormatElement$Usage;
        static UV: $VertexFormatElement$Usage;
        static GENERIC: $VertexFormatElement$Usage;
        static COLOR: $VertexFormatElement$Usage;
        static NORMAL: $VertexFormatElement$Usage;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement$Usage}.
     */
    export type $VertexFormatElement$Usage_ = "position" | "normal" | "color" | "uv" | "generic";
    export class $Tesselator {
        clear(): void;
        begin(arg0: $VertexFormat$Mode_, arg1: $VertexFormat): $BufferBuilder;
        static getInstance(): $Tesselator;
        static init(): void;
        constructor();
        constructor(arg0: number);
        static get instance(): $Tesselator;
    }
    export class $MeshData$DrawState extends $Record {
        mode(): $VertexFormat$Mode;
        format(): $VertexFormat;
        indexType(): $VertexFormat$IndexType;
        indexCount(): number;
        vertexCount(): number;
        constructor(arg0: $VertexFormat, arg1: number, arg2: number, arg3: $VertexFormat$Mode_, arg4: $VertexFormat$IndexType_);
    }
    export class $BufferUploader {
        static reset(): void;
        static drawWithShader(arg0: $MeshData): void;
        static draw(arg0: $MeshData): void;
        static invalidate(): void;
        static lastImmediateBuffer: $VertexBuffer;
        constructor();
    }
    export class $VertexMultiConsumer$Double implements $VertexConsumer, $IAcceleratedVertexConsumer, $VertexBufferWriter {
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        isAccelerated(): boolean;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        canUseIntrinsics(): boolean;
        doRender(arg0: $IAcceleratedRenderer_<any>, arg1: $Object, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        getLayout(): $IMemoryLayout<$VertexFormatElement>;
        decorate(arg0: $VertexConsumer): $VertexConsumer;
        addClientMesh(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPolygonSize(): number;
        addServerMesh(arg0: $ServerMesh_, arg1: number, arg2: number, arg3: number): void;
        beginTransform(arg0: $Matrix4f, arg1: $Matrix3f): void;
        downloadTexture(): $NativeImage;
        endTransform(): void;
        getRenderType(): $RenderType;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        first: $VertexConsumer;
        second: $VertexConsumer;
        constructor(arg0: $VertexConsumer, arg1: $VertexConsumer);
        get accelerated(): boolean;
        set overlay(value: number);
        set whiteAlpha(value: number);
        set light(value: number);
        get layout(): $IMemoryLayout<$VertexFormatElement>;
        get polygonSize(): number;
        get renderType(): $RenderType;
    }
    export class $SheetedDecalTextureGenerator implements $VertexConsumer, $IAcceleratedVertexConsumer, $VertexBufferWriter {
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        isAccelerated(): boolean;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        canUseIntrinsics(): boolean;
        doRender(arg0: $IAcceleratedRenderer_<any>, arg1: $Object, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        getLayout(): $IMemoryLayout<$VertexFormatElement>;
        decorate(arg0: $VertexConsumer): $VertexConsumer;
        addClientMesh(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPolygonSize(): number;
        addServerMesh(arg0: $ServerMesh_, arg1: number, arg2: number, arg3: number): void;
        beginTransform(arg0: $Matrix4f, arg1: $Matrix3f): void;
        downloadTexture(): $NativeImage;
        endTransform(): void;
        getRenderType(): $RenderType;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        constructor(arg0: $VertexConsumer, arg1: $PoseStack$Pose, arg2: number);
        get accelerated(): boolean;
        set overlay(value: number);
        set whiteAlpha(value: number);
        set light(value: number);
        get layout(): $IMemoryLayout<$VertexFormatElement>;
        get polygonSize(): number;
        get renderType(): $RenderType;
    }
    export class $VertexBuffer implements $AutoCloseable, $VertexBufferHelper, $DebugVertexBufferExt, $VertexBufferExtension {
        close(): void;
        isInvalid(): boolean;
        bind(): void;
        getFormat(): $VertexFormat;
        static unbind(): void;
        drawWithShader(arg0: $Matrix4f, arg1: $Matrix4f, arg2: $ShaderInstance): void;
        draw(): void;
        upload(arg0: $MeshData): void;
        veil$setName(arg0: string): void;
        veil$drawIndirect(arg0: number, arg1: number, arg2: number): void;
        veil$drawInstanced(arg0: number): void;
        veil$getIndexCount(): number;
        uploadIndexBuffer(arg0: $ByteBufferBuilder$Result): void;
        saveBinding(): void;
        restoreBinding(): void;
        handler$bll000$veil$drawPatches(arg0: $CallbackInfo): void;
        modify$bll000$veil$modifyDrawMode(arg0: number): number;
        constructor(arg0: $VertexBuffer$Usage_);
        get invalid(): boolean;
        get format(): $VertexFormat;
    }
    export class $VertexBuffer$Usage extends $Enum<$VertexBuffer$Usage> {
        static values(): $VertexBuffer$Usage[];
        static valueOf(arg0: string): $VertexBuffer$Usage;
        static STATIC: $VertexBuffer$Usage;
        static DYNAMIC: $VertexBuffer$Usage;
    }
    /**
     * Values that may be interpreted as {@link $VertexBuffer$Usage}.
     */
    export type $VertexBuffer$Usage_ = "static" | "dynamic";
    export class $PoseStack$Pose {
        copy(): $PoseStack$Pose;
        normal(): $Matrix3f;
        transformNormal(arg0: number, arg1: number, arg2: number, arg3: $Vector3f): $Vector3f;
        transformNormal(arg0: $Vector3f, arg1: $Vector3f): $Vector3f;
        pose(): $Matrix4f;
        trustedNormals: boolean;
        constructor(arg0: $Matrix4f, arg1: $Matrix3f);
    }
    export class $VertexFormatElement extends $Record {
        index(): number;
        type(): $VertexFormatElement$Type;
        count(): number;
        static register(arg0: number, arg1: number, arg2: $VertexFormatElement$Type_, arg3: $VertexFormatElement$Usage_, arg4: number): $VertexFormatElement;
        id(): number;
        mask(): number;
        usage(): $VertexFormatElement$Usage;
        byteSize(): number;
        setupBufferState(arg0: number, arg1: number, arg2: number): void;
        static elementsFromMask(arg0: number): $Stream<$VertexFormatElement>;
        static findNextId(): number;
        static byId(arg0: number): $VertexFormatElement;
        static UV2: $VertexFormatElement;
        static POSITION: $VertexFormatElement;
        static UV: $VertexFormatElement;
        static UV1: $VertexFormatElement;
        static MAX_COUNT: number;
        static COLOR: $VertexFormatElement;
        static BY_ID: $VertexFormatElement[];
        static UV0: $VertexFormatElement;
        static NORMAL: $VertexFormatElement;
        constructor(id: number, index: number, type: $VertexFormatElement$Type_, usage: $VertexFormatElement$Usage_, count: number);
    }
    export class $PoseStack implements $IPoseStackExtension, $PoseStackAccessor, $MatrixStack, $PoseStackAccessor$1, $PoseStackExtension {
        clear(): boolean;
        scale(arg0: number, arg1: number, arg2: number): void;
        isEmpty(): boolean;
        last(): $PoseStack$Pose;
        isIdentity(): boolean;
        rotate(arg0: $Quaternionfc): void;
        rotate(arg0: $Quaterniondc): void;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setIdentity(): void;
        flywheel$transformStack(): $PoseTransformStack;
        matrixPop(): void;
        matrixPush(): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        applyScale(arg0: number, arg1: number, arg2: number): void;
        pose(): $PoseStack$Pose;
        rotateAround(arg0: $Quaterniondc, arg1: number, arg2: number, arg3: number): void;
        rotateAround(arg0: $Quaternionf, arg1: number, arg2: number, arg3: number): void;
        rotateAround(arg0: $Quaternionfc, arg1: number, arg2: number, arg3: number): void;
        rotateXYZ(arg0: number, arg1: number, arg2: number): void;
        rotateZYX(arg0: number, arg1: number, arg2: number): void;
        pushPose(): void;
        popPose(): void;
        toPoseStack(): $PoseStack;
        mulPose(arg0: $Matrix4f): void;
        mulPose(arg0: $Quaternionf): void;
        pushTransformation(arg0: $Transformation): void;
        position(): $Matrix4f;
        copy(arg0: $PoseStack$Pose): void;
        copy(arg0: $MatrixStack): void;
        copy(arg0: $PoseStack): void;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        normal(): $Matrix3f;
        translate(arg0: $Vector3dc): void;
        translate(arg0: $Vector3fc): void;
        applyScale(arg0: $Vector3dc): void;
        applyScale(arg0: $Vector3fc): void;
        applyScale(arg0: number): void;
        applyScale(arg0: number): void;
        applyScale(arg0: number, arg1: number, arg2: number): void;
        rotateXYZ(arg0: number, arg1: number, arg2: number): void;
        rotateZYX(arg0: number, arg1: number, arg2: number): void;
        flywheel$getPoseStack(): $Deque<$PoseStack$Pose>;
        getPoseStack(): $Deque<$PoseStack$Pose>;
        constructor();
        get empty(): boolean;
        get poseStack(): $Deque<$PoseStack$Pose>;
    }
    export class $VertexFormat$Builder {
        add(arg0: string, arg1: $VertexFormatElement_): $VertexFormat$Builder;
        build(): $VertexFormat;
        padding(arg0: number): $VertexFormat$Builder;
    }
    export class $VertexFormat$IndexType extends $Enum<$VertexFormat$IndexType> {
        static values(): $VertexFormat$IndexType[];
        static valueOf(arg0: string): $VertexFormat$IndexType;
        static least(arg0: number): $VertexFormat$IndexType;
        bytes: number;
        asGLType: number;
        static INT: $VertexFormat$IndexType;
        static SHORT: $VertexFormat$IndexType;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormat$IndexType}.
     */
    export type $VertexFormat$IndexType_ = "short" | "int";
}
