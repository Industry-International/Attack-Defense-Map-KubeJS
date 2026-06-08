import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $BiConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Holder_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $CamoList } from "@package/xfacthd/framedblocks/api/util";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $List_ } from "@package/java/util";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $Vector3fc } from "@package/org/joml";

declare module "@package/xfacthd/framedblocks/api/ghost" {
    export class $RegisterGhostRenderBehavioursEvent extends $Event implements $IModBusEvent {
        registerItems(arg0: $GhostRenderBehaviour, arg1: $List_<$Holder_<$Item>>): void;
        registerItems(arg0: $GhostRenderBehaviour, ...arg1: $Item_[]): void;
        registerBlocks(arg0: $GhostRenderBehaviour, ...arg1: $Block_[]): void;
        registerBlocks(arg0: $GhostRenderBehaviour, arg1: $List_<$Holder_<$Block>>): void;
        registerItem(arg0: $GhostRenderBehaviour, arg1: $Holder_<$Item>): void;
        registerBlock(arg0: $GhostRenderBehaviour, arg1: $Holder_<$Block>): void;
        constructor(arg0: $BiConsumer_<$GhostRenderBehaviour, $Block[]>, arg1: $BiConsumer_<$GhostRenderBehaviour, $Item[]>);
    }
    export class $GhostRenderBehaviour {
        static OFFSET_ZERO: $Vector3fc;
    }
    export interface $GhostRenderBehaviour {
        getRenderOffset(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $BlockPlaceContext, arg3: $BlockState_, arg4: number, arg5: $ModelData): $Vector3fc;
        readCamo(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): $CamoList;
        mayRender(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getRenderPos(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $BlockHitResult, arg3: $BlockPlaceContext, arg4: $BlockState_, arg5: $BlockPos_, arg6: number): $BlockPos;
        canRenderAt(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $BlockHitResult, arg3: $BlockPlaceContext, arg4: $BlockState_, arg5: $BlockState_, arg6: $BlockPos_): boolean;
        appendModelData(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $BlockPlaceContext, arg3: $BlockState_, arg4: number, arg5: $ModelData): $ModelData;
        getRenderState(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $BlockHitResult, arg3: $BlockPlaceContext, arg4: $BlockState_, arg5: number): $BlockState;
        postProcessCamo(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $BlockPlaceContext, arg3: $BlockState_, arg4: number, arg5: $CamoList): $CamoList;
        buildModelData(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $BlockPlaceContext, arg3: $BlockState_, arg4: number, arg5: $CamoList): $ModelData;
        getProxiedStack(arg0: $ItemStack_): $ItemStack;
        getPassCount(arg0: $ItemStack_, arg1: $ItemStack_): number;
    }
}
