import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $CustomBlockStateOrTombstone } from "@package/com/moulberry/axiom/editor/palette";
import { $Collection, $List } from "@package/java/util";
import { $Comparable, $Comparable_ } from "@package/java/lang";

declare module "@package/com/moulberry/axiom/custom_blocks" {
    export class $CustomBlock {
    }
    export interface $CustomBlock {
        axiom$asItemStack(): $ItemStack;
        preventShapeUpdates(): boolean;
        axiom$defaultCustomState(): $CustomBlockState;
        axiom$getIdentifier(): $ResourceLocation;
        axiom$translationKey(): string;
        getCustomStateForPlacement(blockPlaceContext: $BlockPlaceContext, force: boolean): $CustomBlockState;
        axiom$getProperties(): $Collection<$Property<never>>;
        axiom$customPickBlockStack(): $ItemStack;
        preventRightClickInteraction(): boolean;
        axiom$getPossibleCustomStates(): $List<$CustomBlockState>;
        sendServerPickBlockIfPossible(): boolean;
    }
    export class $CustomBlockState {
    }
    export interface $CustomBlockState extends $CustomBlockStateOrTombstone {
        getProperty<T extends $Comparable<T>>(arg0: $Property<T>): T;
        getProperties(): $Collection<$Property<never>>;
        getCustomBlock(): $CustomBlock;
        axiomHasProperty<T extends $Comparable<T>>(arg0: $Property<T>): boolean;
        getVanillaState(): $BlockState;
        setPropertyUnsafe<T extends $Comparable<T>>(arg0: $Property<T>, arg1: $Comparable_<never>): $CustomBlockState;
        get properties(): $Collection<$Property<never>>;
        get customBlock(): $CustomBlock;
        get vanillaState(): $BlockState;
    }
}
