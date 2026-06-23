import { $JsonObject_ } from "@package/com/google/gson";
import { $ShaderInstanceAccessor } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $Logger } from "@package/org/slf4j";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map, $Set, $Set_, $Collection_ } from "@package/java/util";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $Object, $AutoCloseable } from "@package/java/lang";
import { $Uniform, $Program } from "@package/com/mojang/blaze3d/shaders";

declare module "@package/com/lowdragmc/lowdraglib2/client/shader" {
    export class $ILDShaderInstance {
    }
    export interface $ILDShaderInstance {
        onCreateShader(arg0: $ResourceProvider_, arg1: $ResourceLocation_, arg2: $VertexFormat, arg3: $JsonObject_): void;
        getShaderInstanceAccessor(): $ShaderInstanceAccessor;
        get shaderInstanceAccessor(): $ShaderInstanceAccessor;
    }
    export class $LDShaderInstance extends $ShaderInstance implements $ILDShaderInstance {
        static create(arg0: $ResourceLocation_, arg1: $VertexFormat, arg2: $Set_<string>): $LDShaderInstance;
        static create(arg0: $ResourceLocation_, arg1: $VertexFormat): $LDShaderInstance;
        applySamplers(): void;
        getGeometry(): $Program;
        isSamplerCacheDirty(): boolean;
        FOG_START: $Uniform;
        shaderLocation: $ResourceLocation;
        static lastProgramId: number;
        PROJECTION_MATRIX: $Uniform;
        static SHADER_PATH: string;
        TEXTURE_MATRIX: $Uniform;
        uniforms: $List<$Uniform>;
        FOG_END: $Uniform;
        MODEL_VIEW_MATRIX: $Uniform;
        defines: $Set<string>;
        SCREEN_SIZE: $Uniform;
        GLINT_ALPHA: $Uniform;
        samplerLocations: $List<number>;
        COLOR_MODULATOR: $Uniform;
        LINE_WIDTH: $Uniform;
        static LOGGER: $Logger;
        uniformMap: $Map<string, $Uniform>;
        LIGHT0_DIRECTION: $Uniform;
        CHUNK_OFFSET: $Uniform;
        FOG_COLOR: $Uniform;
        FOG_SHAPE: $Uniform;
        GAME_TIME: $Uniform;
        LIGHT1_DIRECTION: $Uniform;
        get geometry(): $Program;
        get samplerCacheDirty(): boolean;
    }
    export class $LDShaderHolder implements $IConfigurable, $INBTSerializable<$CompoundTag>, $AutoCloseable {
        close(): void;
        static create(arg0: $ResourceLocation_, arg1: $VertexFormat): $LDShaderHolder;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        static createSafe(arg0: $ResourceLocation_, arg1: $VertexFormat): $LDShaderHolder;
        removeDynamicSampler(arg0: string): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        addDynamicUniform(arg0: string, arg1: $Consumer_<$Uniform>): void;
        getShaderInstance(): $LDShaderInstance;
        getShaderInstance(arg0: $Collection_<string>): $LDShaderInstance;
        addDynamicSampler(arg0: string, arg1: $Supplier_<$Object>): void;
        removeDynamicUniform(arg0: string): void;
        isBuiltinUniform(arg0: $Uniform, arg1: $ShaderInstance): boolean;
        serializeSampler(arg0: $Object): $CompoundTag;
        deserializeSampler(arg0: $CompoundTag_): $Object;
        isBuiltinSampler(arg0: string): boolean;
        createHistoryRecorder(): $IConfigurableHistory;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        baseInstance: $LDShaderInstance;
        shaderUid: string;
        static SHADER_UID_DEFINE: string;
        get configurableName(): string;
    }
}
