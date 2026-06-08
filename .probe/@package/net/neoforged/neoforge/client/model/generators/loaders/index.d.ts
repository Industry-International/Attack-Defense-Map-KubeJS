import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModelBuilder, $CustomLoaderBuilder } from "@package/net/neoforged/neoforge/client/model/generators";

declare module "@package/net/neoforged/neoforge/client/model/generators/loaders" {
    export class $ObjModelBuilder<T extends $ModelBuilder<T>> extends $CustomLoaderBuilder<T> {
        static begin<T extends $ModelBuilder<T>>(arg0: T, arg1: $ExistingFileHelper): $ObjModelBuilder<T>;
        automaticCulling(arg0: boolean): $ObjModelBuilder<T>;
        emissiveAmbient(arg0: boolean): $ObjModelBuilder<T>;
        modelLocation(arg0: $ResourceLocation_): $ObjModelBuilder<T>;
        flipV(arg0: boolean): $ObjModelBuilder<T>;
        shadeQuads(arg0: boolean): $ObjModelBuilder<T>;
        overrideMaterialLibrary(arg0: $ResourceLocation_): $ObjModelBuilder<T>;
    }
    export class $SeparateTransformsModelBuilder<T extends $ModelBuilder<T>> extends $CustomLoaderBuilder<T> {
        base(arg0: T): $SeparateTransformsModelBuilder<T>;
        static begin<T extends $ModelBuilder<T>>(arg0: T, arg1: $ExistingFileHelper): $SeparateTransformsModelBuilder<T>;
        perspective(arg0: $ItemDisplayContext_, arg1: T): $SeparateTransformsModelBuilder<T>;
    }
    export class $CompositeModelBuilder<T extends $ModelBuilder<T>> extends $CustomLoaderBuilder<T> {
        static begin<T extends $ModelBuilder<T>>(arg0: T, arg1: $ExistingFileHelper): $CompositeModelBuilder<T>;
        child(arg0: string, arg1: T): $CompositeModelBuilder<T>;
        itemRenderOrder(...arg0: string[]): $CompositeModelBuilder<T>;
    }
    export class $DynamicFluidContainerModelBuilder<T extends $ModelBuilder<T>> extends $CustomLoaderBuilder<T> {
        static begin<T extends $ModelBuilder<T>>(arg0: T, arg1: $ExistingFileHelper): $DynamicFluidContainerModelBuilder<T>;
        fluid(arg0: $Fluid_): $DynamicFluidContainerModelBuilder<T>;
        coverIsMask(arg0: boolean): $DynamicFluidContainerModelBuilder<T>;
        applyFluidLuminosity(arg0: boolean): $DynamicFluidContainerModelBuilder<T>;
        flipGas(arg0: boolean): $DynamicFluidContainerModelBuilder<T>;
        applyTint(arg0: boolean): $DynamicFluidContainerModelBuilder<T>;
    }
    export class $ItemLayerModelBuilder<T extends $ModelBuilder<T>> extends $CustomLoaderBuilder<T> {
        static begin<T extends $ModelBuilder<T>>(arg0: T, arg1: $ExistingFileHelper): $ItemLayerModelBuilder<T>;
        color(arg0: number, ...arg1: number[]): $ItemLayerModelBuilder<T>;
        renderType(arg0: $ResourceLocation_, ...arg1: number[]): $ItemLayerModelBuilder<T>;
        renderType(arg0: string, ...arg1: number[]): $ItemLayerModelBuilder<T>;
        emissive(arg0: number, arg1: number, ...arg2: number[]): $ItemLayerModelBuilder<T>;
    }
}
