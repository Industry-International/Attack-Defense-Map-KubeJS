import { $Holder } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ParticleModuleSet$Builder } from "@package/foundry/veil/api/quasar/particle";

declare module "@package/foundry/veil/api/quasar/data/module" {
    export class $ModuleType<T extends $ParticleModuleData> {
    }
    export interface $ModuleType<T extends $ParticleModuleData> {
        codec(): $MapCodec<T>;
    }
    /**
     * Values that may be interpreted as {@link $ModuleType}.
     */
    export type $ModuleType_<T> = RegistryTypes.VeilQuasarModuleTypeUpdate | RegistryTypes.VeilQuasarModuleTypeInit | RegistryTypes.VeilQuasarModuleTypeRender | (() => $MapCodec_<T>);
    export interface $ModuleType<T> extends RegistryMarked<RegistryTypes.VeilQuasarModuleTypeRenderTag, RegistryTypes.VeilQuasarModuleTypeRender> {}
    export class $ParticleModuleData {
        static UPDATE_DIRECT_CODEC: $Codec<$ParticleModuleData>;
        static RENDER_DIRECT_CODEC: $Codec<$ParticleModuleData>;
        static RENDER_CODEC: $Codec<$Holder<$ParticleModuleData>>;
        static UPDATE_CODEC: $Codec<$Holder<$ParticleModuleData>>;
        static INIT_CODEC: $Codec<$Holder<$ParticleModuleData>>;
        static INIT_DIRECT_CODEC: $Codec<$ParticleModuleData>;
    }
    export interface $ParticleModuleData {
        getType(): $ModuleType<never>;
        addModules(arg0: $ParticleModuleSet$Builder): void;
        get type(): $ModuleType<never>;
    }
    export class $CodeModule {
    }
    export interface $CodeModule extends $ParticleModuleData {
        getType(): $ModuleType<never>;
        get type(): $ModuleType<never>;
    }
    /**
     * Values that may be interpreted as {@link $CodeModule}.
     */
    export type $CodeModule_ = (() => void);
}
