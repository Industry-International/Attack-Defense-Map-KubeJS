import { $InputStream } from "@package/java/io";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $MutableComponent, $Style } from "@package/net/minecraft/network/chat";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List } from "@package/java/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $DocumentBuilderFactory } from "@package/javax/xml/parsers";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DataComponentMap } from "@package/net/minecraft/core/component";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $Vec2 } from "@package/net/minecraft/world/phys";
import { $EntityInfo, $BlockInfo } from "@package/com/lowdragmc/lowdraglib2/utils/data";
import { $Document, $Element } from "@package/org/w3c/dom";
import { $Vector3f } from "@package/org/joml";
export * as animation from "@package/com/lowdragmc/lowdraglib2/utils/animation";
export * as consumer from "@package/com/lowdragmc/lowdraglib2/utils/consumer";
export * as search from "@package/com/lowdragmc/lowdraglib2/utils/search";
export * as virtuallevel from "@package/com/lowdragmc/lowdraglib2/utils/virtuallevel";
export * as data from "@package/com/lowdragmc/lowdraglib2/utils/data";

declare module "@package/com/lowdragmc/lowdraglib2/utils" {
    export class $XmlUtils$SizedIngredient extends $Record {
        count(): number;
        ingredient(): $Ingredient;
        constructor(ingredient: $Ingredient_, count: number);
    }
    export class $XmlUtils {
        static getContent(arg0: $Element, arg1: boolean): string;
        static getAsInt(arg0: $Element, arg1: string, arg2: number): number;
        static getAsLong(arg0: $Element, arg1: string, arg2: number): number;
        static getAsBoolean(arg0: $Element, arg1: string, arg2: boolean): boolean;
        static getComponents(arg0: $Element, arg1: $Style): $List<$MutableComponent>;
        static getComponents(arg0: $Element): $DataComponentMap;
        static getAsFloat(arg0: $Element, arg1: string, arg2: number): number;
        static getAsString(arg0: $Element, arg1: string, arg2: string): string;
        static setBlockState(arg0: $BlockState_, arg1: $Element): $BlockState;
        static getIngredient(arg0: $Element): $XmlUtils$SizedIngredient;
        static getAsBlockPos(arg0: $Element, arg1: string, arg2: $BlockPos_): $BlockPos;
        static getEntityInfo(arg0: $Element): $EntityInfo;
        static getAsVector3f(arg0: $Element, arg1: string, arg2: $Vector3f): $Vector3f;
        static getBlockInfo(arg0: $Element): $BlockInfo;
        static getItemStack(arg0: $Element): $ItemStack;
        static getFluidStack(arg0: $Element): $FluidStack;
        static getAsEnum<T extends $Enum<T>>(arg0: $Element, arg1: string, arg2: $Class<T>, arg3: T): T;
        static loadXml(arg0: string): $Document;
        static loadXml(arg0: $ResourceLocation_): $Document;
        static loadXml(arg0: $InputStream): $Document;
        static getCompoundTag(arg0: $Element): $CompoundTag;
        static getAsColor(arg0: $Element, arg1: string, arg2: number): number;
        static getAsVec2(arg0: $Element, arg1: string, arg2: $Vec2): $Vec2;
        static documentBuilderFactory: $DocumentBuilderFactory;
    }
    export class $HistoryStack<T> {
        clear(): void;
        record(arg0: T): void;
        getMaxSize(): number;
        setMaxSize(arg0: number): void;
        redoSize(): number;
        undoSize(): number;
        undo(): boolean;
        canUndo(): boolean;
        canRedo(): boolean;
        getCurrent(): T;
        redo(): boolean;
        replaceCurrent(arg0: T): void;
        trackedSize(): number;
        isDedupeConsecutive(): boolean;
        setDedupeConsecutive(arg0: boolean): void;
        constructor(arg0: number);
        constructor(arg0: number, arg1: boolean);
        get current(): T;
    }
}
