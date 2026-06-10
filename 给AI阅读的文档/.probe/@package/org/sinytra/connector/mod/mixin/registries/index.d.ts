import { $ModifyRegistriesEvent } from "@package/net/neoforged/neoforge/registries";
import { $RegistryDataLoader$RegistryData_ } from "@package/net/minecraft/resources";
import { $List_ } from "@package/java/util";

declare module "@package/org/sinytra/connector/mod/mixin/registries" {
    export class $NeoForgeRegistriesSetupAccessor {
        static invokeModifyRegistries(arg0: $ModifyRegistriesEvent): void;
    }
    export interface $NeoForgeRegistriesSetupAccessor {
    }
    export class $MappedRegistryAccessor {
    }
    export interface $MappedRegistryAccessor {
        getFrozen(): boolean;
        get frozen(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MappedRegistryAccessor}.
     */
    export type $MappedRegistryAccessor_ = (() => boolean);
    export class $DataPackRegistriesHooksAccessor {
        static set_DATA_PACK_REGISTRIES(arg0: $List_<$RegistryDataLoader$RegistryData_<never>>): void;
        static set_DATA_PACK_REGISTRIES_VIEW(arg0: $List_<$RegistryDataLoader$RegistryData_<never>>): void;
        static set _DATA_PACK_REGISTRIES(value: $List_<$RegistryDataLoader$RegistryData_<never>>);
        static set _DATA_PACK_REGISTRIES_VIEW(value: $List_<$RegistryDataLoader$RegistryData_<never>>);
    }
    export interface $DataPackRegistriesHooksAccessor {
    }
}
