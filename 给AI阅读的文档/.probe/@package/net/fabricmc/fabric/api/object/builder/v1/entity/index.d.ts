import { $Supplier_, $Supplier, $UnaryOperator_ } from "@package/java/util/function";
import { $MobCategory_, $EntityType$EntityFactory_, $SpawnPlacementType_, $EntityType, $Mob, $LivingEntity, $Entity, $EntityType$Builder, $SpawnPlacements$SpawnPredicate_ } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/fabricmc/fabric/api/object/builder/v1/entity" {
    export class $FabricEntityType$Builder<T extends $Entity> {
        static createLiving<T extends $LivingEntity>(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: $UnaryOperator_<$FabricEntityType$Builder$Living<T>>): $EntityType$Builder<T>;
        static createMob<T extends $Mob>(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: $UnaryOperator_<$FabricEntityType$Builder$Mob<T>>): $EntityType$Builder<T>;
    }
    export interface $FabricEntityType$Builder<T extends $Entity> {
        build(): $EntityType<T>;
        alwaysUpdateVelocity(arg0: boolean): $EntityType$Builder<T>;
    }
    export class $FabricEntityType$Builder$Mob<T extends $Mob> {
    }
    export interface $FabricEntityType$Builder$Mob<T extends $Mob> extends $FabricEntityType$Builder$Living<T> {
        defaultAttributes(arg0: $Supplier_<$AttributeSupplier$Builder>): $FabricEntityType$Builder$Mob<T>;
        spawnRestriction(arg0: $SpawnPlacementType_, arg1: $Heightmap$Types_, arg2: $SpawnPlacements$SpawnPredicate_<T>): $FabricEntityType$Builder$Mob<T>;
    }
    export class $FabricEntityType$Builder$Living<T extends $LivingEntity> {
    }
    export interface $FabricEntityType$Builder$Living<T extends $LivingEntity> {
        defaultAttributes(arg0: $Supplier_<$AttributeSupplier$Builder>): $FabricEntityType$Builder$Living<T>;
    }
    /**
     * Values that may be interpreted as {@link $FabricEntityType$Builder$Living}.
     */
    export type $FabricEntityType$Builder$Living_<T> = ((arg0: $Supplier<$AttributeSupplier$Builder>) => $FabricEntityType$Builder$Living<T>);
}
