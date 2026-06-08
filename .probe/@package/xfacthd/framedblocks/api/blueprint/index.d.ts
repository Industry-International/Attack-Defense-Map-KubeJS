import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $BlockItemStateProperties_, $BlockItemStateProperties } from "@package/net/minecraft/world/item/component";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $FramedBlockEntity } from "@package/xfacthd/framedblocks/api/block/blockentity";
import { $BiConsumer_ } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Holder_, $Registry } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $CamoList } from "@package/xfacthd/framedblocks/api/util";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Record, $Object } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/xfacthd/framedblocks/api/blueprint" {
    export class $AuxBlueprintData<T extends $AuxBlueprintData<T>> {
        static CODEC: $Codec<$AuxBlueprintData<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AuxBlueprintData<never>>;
        static REGISTRY: $Registry<$AuxBlueprintData$Type<never>>;
    }
    export interface $AuxBlueprintData<T extends $AuxBlueprintData<T>> {
        type(): $AuxBlueprintData$Type<T>;
        equals(arg0: $Object): boolean;
        hashCode(): number;
    }
    export class $BlueprintData extends $Record {
        isEmpty(): boolean;
        block(): $Block;
        blockState(): $BlockItemStateProperties;
        glowing(): boolean;
        camos(): $CamoList;
        withBlockState(arg0: $BlockItemStateProperties_): $BlueprintData;
        auxData(): ($AuxBlueprintData<never>) | undefined;
        withAuxData(arg0: $AuxBlueprintData<never>): $BlueprintData;
        intangible(): boolean;
        reinforced(): boolean;
        getAuxDataOrDefault<T extends $AuxBlueprintData<T>>(arg0: T): T;
        static CODEC: $Codec<$BlueprintData>;
        static EMPTY: $BlueprintData;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BlueprintData>;
        /**
         * @deprecated
         */
        constructor(arg0: $Block_, arg1: $CamoList, arg2: boolean, arg3: boolean, arg4: boolean, arg5: ($AuxBlueprintData<never>) | undefined);
        constructor(block: $Block_, camos: $CamoList, glowing: boolean, intangible: boolean, reinforced: boolean, blockState: $BlockItemStateProperties_, auxData: ($AuxBlueprintData<never>) | undefined);
        get empty(): boolean;
    }
    export interface $AuxBlueprintData$Type extends RegistryMarked<RegistryTypes.FramedblocksAuxBlueprintDataTag, RegistryTypes.FramedblocksAuxBlueprintData> {}
    export class $RegisterBlueprintCopyBehavioursEvent extends $Event implements $IModBusEvent {
        register(arg0: $BlueprintCopyBehaviour, arg1: $List_<$Holder_<$Block>>): void;
        register(arg0: $BlueprintCopyBehaviour, arg1: $Holder_<$Block>): void;
        register(arg0: $BlueprintCopyBehaviour, ...arg1: $Block_[]): void;
        constructor(arg0: $BiConsumer_<$BlueprintCopyBehaviour, $Block[]>);
    }
    export class $AuxBlueprintData$Type<T extends $AuxBlueprintData<never>> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $AuxBlueprintData$Type}.
     */
    export type $AuxBlueprintData$Type_<T> = RegistryTypes.FramedblocksAuxBlueprintData;
    export class $BlueprintCopyBehaviour {
    }
    export interface $BlueprintCopyBehaviour {
        getPropertiesToCopy(arg0: $BlockState_): $List<$Property<never>>;
        getReinforcementCount(arg0: $BlueprintData_): number;
        writeToBlueprint(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FramedBlockEntity): $BlueprintData;
        getCamos(arg0: $BlueprintData_): $CamoList;
        attachDataToDummyRenderStack(arg0: $ItemStack_, arg1: $BlueprintData_): void;
        getAdditionalConsumedMaterials(arg0: $BlueprintData_): $List<$ItemStack>;
        getBlockItem(arg0: $BlueprintData_): $ItemStack;
        getIntangibleCount(arg0: $BlueprintData_): number;
        getGlowstoneCount(arg0: $BlueprintData_): number;
        postProcessPaste(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $BlueprintData_, arg4: $ItemStack_): void;
    }
}
