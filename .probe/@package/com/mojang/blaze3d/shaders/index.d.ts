import { $InputStream } from "@package/java/io";
import { $ProgramTypeAccessor } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $ProgramExtension } from "@package/dev/ryanhcode/sable/mixinterface/sublevel_render/fancy";
import { $GlslPreprocessor } from "@package/com/mojang/blaze3d/preprocessor";
import { $DynamicBufferProgramAccessor } from "@package/foundry/veil/mixin/dynamicbuffer/accessor";
import { $Map } from "@package/java/util";
import { $AutoCloseable, $CharSequence, $Enum } from "@package/java/lang";
import { $FloatBuffer, $IntBuffer } from "@package/java/nio";
import { $ProgramTypeAccessor as $ProgramTypeAccessor$1 } from "@package/net/irisshaders/iris/mixin";
import { $Matrix4f, $Vector4f, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/shaders" {
    export class $EffectProgram extends $Program {
        static compileShader(arg0: $Program$Type_, arg1: string, arg2: $InputStream, arg3: string): $EffectProgram;
        attachToEffect(arg0: $Effect): void;
    }
    export class $Uniform extends $AbstractUniform implements $AutoCloseable {
        getName(): string;
        getLocation(): number;
        set(arg0: number, arg1: number): void;
        getCount(): number;
        close(): void;
        getType(): number;
        setLocation(arg0: number): void;
        static glGetUniformLocation(arg0: number, arg1: $CharSequence): number;
        static glGetAttribLocation(arg0: number, arg1: $CharSequence): number;
        static glBindAttribLocation(arg0: number, arg1: number, arg2: $CharSequence): void;
        getIntBuffer(): $IntBuffer;
        getFloatBuffer(): $FloatBuffer;
        upload(): void;
        static uploadInteger(arg0: number, arg1: number): void;
        static getTypeFromString(arg0: string): number;
        static UT_INT4: number;
        static UT_INT3: number;
        static UT_MAT4: number;
        static UT_FLOAT2: number;
        static UT_MAT3: number;
        static UT_FLOAT3: number;
        static UT_MAT2: number;
        static UT_INT2: number;
        static UT_INT1: number;
        static UT_FLOAT1: number;
        static UT_FLOAT4: number;
        constructor(arg0: string, arg1: number, arg2: number, arg3: $Shader);
        get name(): string;
        get count(): number;
        get type(): number;
        get intBuffer(): $IntBuffer;
        get floatBuffer(): $FloatBuffer;
    }
    export class $FogShape extends $Enum<$FogShape> {
        static values(): $FogShape[];
        static valueOf(arg0: string): $FogShape;
        getIndex(): number;
        static CYLINDER: $FogShape;
        static SPHERE: $FogShape;
        get index(): number;
    }
    /**
     * Values that may be interpreted as {@link $FogShape}.
     */
    export type $FogShape_ = "sphere" | "cylinder";
    export class $ProgramManager {
        static glUseProgram(arg0: number): void;
        static releaseProgram(arg0: $Shader): void;
        static createProgram(): number;
        static linkShader(arg0: $Shader): void;
        constructor();
    }
    export class $AbstractUniform {
        set(arg0: number[]): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        set(arg0: number, arg1: number): void;
        set(arg0: $Matrix3f): void;
        set(arg0: $Matrix4f): void;
        set(arg0: $Vector4f): void;
        set(arg0: $Vector3f): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        set(arg0: number): void;
        set(arg0: number, arg1: number): void;
        set(arg0: number): void;
        setMat2x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setMat3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        setMat3x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        setMat3x2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setMat2x2(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setMat2x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setMat4x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): void;
        setMat4x2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setMat4x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        setSafe(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setSafe(arg0: number, arg1: number, arg2: number, arg3: number): void;
        constructor();
    }
    export class $Effect {
    }
    export interface $Effect extends $Shader {
    }
    export class $Program$Type extends $Enum<$Program$Type> implements $ProgramTypeAccessor$1, $ProgramTypeAccessor {
        getName(): string;
        static values(): $Program$Type[];
        static valueOf(arg0: string): $Program$Type;
        getExtension(): string;
        static createProgramType$iris_$md$5bc4b9$0(arg0: string, arg1: number, arg2: string, arg3: string, arg4: number): $Program$Type;
        static createProgramType$ldlib2_$md$5bc4b9$1(arg0: string, arg1: number, arg2: string, arg3: string, arg4: number): $Program$Type;
        getPrograms(): $Map<string, $Program>;
        static VERTEX: $Program$Type;
        static FRAGMENT: $Program$Type;
        get extension(): string;
        get programs(): $Map<string, $Program>;
    }
    /**
     * Values that may be interpreted as {@link $Program$Type}.
     */
    export type $Program$Type_ = "vertex" | "fragment" | "geometry" | "tess_control" | "tess_eval" | "geometry";
    export class $Program implements $DynamicBufferProgramAccessor, $ProgramExtension {
        getName(): string;
        close(): void;
        sable$getSource(): string;
        static compileShader(arg0: $Program$Type_, arg1: string, arg2: $InputStream, arg3: string, arg4: $GlslPreprocessor): $Program;
        attachToShader(arg0: $Shader): void;
        getId(): number;
        setId(arg0: number): void;
        constructor(arg0: $Program$Type_, arg1: number, arg2: string);
        get name(): string;
    }
    export class $Shader {
    }
    export interface $Shader {
        getId(): number;
        markDirty(): void;
        attachToProgram(): void;
        getFragmentProgram(): $Program;
        getVertexProgram(): $Program;
        get id(): number;
        get fragmentProgram(): $Program;
        get vertexProgram(): $Program;
    }
    export class $BlendMode {
        apply(): void;
        isOpaque(): boolean;
        static stringToBlendFactor(arg0: string): number;
        static stringToBlendFunc(arg0: string): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor();
        get opaque(): boolean;
    }
}
