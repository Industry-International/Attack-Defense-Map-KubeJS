import { $Level_ } from "@package/net/minecraft/world/level";
import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $StructureTemplate$StructureBlockInfo } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Vec3i, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/blusunrize/immersiveengineering/api/multiblocks" {
    export class $ClientMultiblocks$MultiblockManualData {
    }
    export interface $ClientMultiblocks$MultiblockManualData {
        canRenderFormedStructure(): boolean;
        renderFormedStructure(arg0: $PoseStack, arg1: $MultiBufferSource_): void;
        getTotalMaterials(): $NonNullList<$ItemStack>;
        get totalMaterials(): $NonNullList<$ItemStack>;
    }
    export class $MultiblockHandler$IMultiblock {
    }
    export interface $MultiblockHandler$IMultiblock {
        getSize(arg0: $Level_): $Vec3i;
        getDisplayName(): $Component;
        getBlock(): $Block;
        getStructure(arg0: $Level_): $List<$StructureTemplate$StructureBlockInfo>;
        getUniqueName(): $ResourceLocation;
        disassemble(arg0: $Level_, arg1: $BlockPos_, arg2: boolean, arg3: $Direction_): void;
        initializeClient(arg0: $Consumer_<$ClientMultiblocks$MultiblockManualData>): void;
        getManualScale(): number;
        getTriggerOffset(): $BlockPos;
        isBlockTrigger(arg0: $BlockState_, arg1: $Direction_, arg2: $Level_): boolean;
        createStructure(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Player): boolean;
        get displayName(): $Component;
        get block(): $Block;
        get uniqueName(): $ResourceLocation;
        get manualScale(): number;
        get triggerOffset(): $BlockPos;
    }
    export class $MultiblockHandler$MultiblockFormEvent extends $PlayerEvent implements $ICancellableEvent {
        getMultiblock(): $MultiblockHandler$IMultiblock;
        getHammer(): $ItemStack;
        getClickedBlock(): $BlockPos;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $MultiblockHandler$IMultiblock, arg2: $BlockPos_, arg3: $ItemStack_);
        get multiblock(): $MultiblockHandler$IMultiblock;
        get hammer(): $ItemStack;
        get clickedBlock(): $BlockPos;
    }
}
