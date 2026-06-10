import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List_, $List } from "@package/java/util";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/simulated_team/simulated/mixin/accessor" {
    export class $LevelRendererAccessor {
        static invokeRenderShape(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $VoxelShape, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
    }
    export interface $LevelRendererAccessor {
    }
    export class $ContraptionAccessor {
    }
    export interface $ContraptionAccessor {
        getSuperGlue(): $List<$AABB>;
        get superGlue(): $List<$AABB>;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionAccessor}.
     */
    export type $ContraptionAccessor_ = (() => $List_<$AABB_>);
    export class $KeyMappingsAccessor {
    }
    export interface $KeyMappingsAccessor {
        getKey(): $InputConstants$Key;
        get key(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $KeyMappingsAccessor}.
     */
    export type $KeyMappingsAccessor_ = (() => $InputConstants$Key);
    export class $BlockBehaviourAccessor {
    }
    export interface $BlockBehaviourAccessor {
        getHasCollision(): boolean;
        get hasCollision(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourAccessor}.
     */
    export type $BlockBehaviourAccessor_ = (() => boolean);
    export class $CreativeModeInventoryScreenAccessor {
    }
    export interface $CreativeModeInventoryScreenAccessor {
        getLeftPos(): number;
        getTopPos(): number;
        get leftPos(): number;
        get topPos(): number;
    }
}
