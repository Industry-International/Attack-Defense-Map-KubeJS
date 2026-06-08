import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $List_, $List } from "@package/java/util";

declare module "@package/net/blay09/mods/waystones/mixin" {
    export class $StructureTemplatePoolAccessor {
    }
    export interface $StructureTemplatePoolAccessor {
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
    }
}
