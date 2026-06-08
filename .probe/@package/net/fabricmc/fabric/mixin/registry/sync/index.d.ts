import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List_ } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/mixin/registry/sync" {
    export class $BaseMappedRegistryAccessor {
    }
    export interface $BaseMappedRegistryAccessor {
        setSync(arg0: boolean): void;
        invokeUnfreeze(): void;
        set sync(value: boolean);
    }
    export class $RegistryManagerAccessor {
        static invokeTrackModdedRegistry(arg0: $ResourceLocation_): void;
    }
    export interface $RegistryManagerAccessor {
    }
    /**
     * @deprecated
     */
    export class $DebugChunkGeneratorAccessor {
        static setBLOCK_STATES(arg0: $List_<$BlockState_>): void;
        static setX_SIDE_LENGTH(arg0: number): void;
        static setZ_SIDE_LENGTH(arg0: number): void;
        static set BLOCK_STATES(value: $List_<$BlockState_>);
        static set x_SIDE_LENGTH(value: number);
        static set z_SIDE_LENGTH(value: number);
    }
    export interface $DebugChunkGeneratorAccessor {
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
}
