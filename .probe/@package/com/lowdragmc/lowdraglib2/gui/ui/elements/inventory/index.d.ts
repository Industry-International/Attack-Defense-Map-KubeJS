import { $Consumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $ItemSlot } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/inventory" {
    export class $InventorySlots extends $UIElement {
        apply(arg0: $Consumer_<$ItemSlot>): $InventorySlots;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        rows: $InventorySlots$Row[];
        hotbar: $InventorySlots$Row;
        constructor();
    }
    export class $InventorySlots$Row extends $UIElement {
        apply(arg0: $Consumer_<$ItemSlot>): $InventorySlots$Row;
        slots: $ItemSlot[];
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
}
