import { $Supplier_, $UnaryOperator_ } from "@package/java/util/function";
import { $MobCategory_, $EntityType$EntityFactory_, $SpawnPlacementType_, $EntityType_, $Mob, $LivingEntity, $EntityType$Builder, $SpawnPlacements$SpawnPredicate_ } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $FabricEntityType$Builder$Mob, $FabricEntityType$Builder$Living } from "@package/net/fabricmc/fabric/api/object/builder/v1/entity";

declare module "@package/net/fabricmc/fabric/impl/object/builder" {
    export class $FabricEntityTypeImpl {
    }
    export interface $FabricEntityTypeImpl {
        fabric_setAlwaysUpdateVelocity(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $FabricEntityTypeImpl}.
     */
    export type $FabricEntityTypeImpl_ = ((arg0: boolean) => void);
    export class $FabricEntityTypeImpl$Builder$Mob<T extends $Mob> extends $FabricEntityTypeImpl$Builder$Living<T> implements $FabricEntityType$Builder$Mob<T> {
        spawnRestriction(arg0: $SpawnPlacementType_, arg1: $Heightmap$Types_, arg2: $SpawnPlacements$SpawnPredicate_<T>): $FabricEntityType$Builder$Mob<T>;
        constructor();
    }
    export class $FabricEntityTypeImpl$Builder$Living<T extends $LivingEntity> implements $FabricEntityType$Builder$Living<T> {
        defaultAttributes(arg0: $Supplier_<$AttributeSupplier$Builder>): $FabricEntityType$Builder$Living<T>;
        onBuild(arg0: $EntityType_<T>): void;
        constructor();
    }
    export class $FabricEntityTypeImpl$Builder {
        static createLiving<T extends $LivingEntity>(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: $UnaryOperator_<$FabricEntityType$Builder$Living<T>>): $EntityType$Builder<T>;
        static createMob<T extends $Mob>(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: $UnaryOperator_<$FabricEntityType$Builder$Mob<T>>): $EntityType$Builder<T>;
    }
    export interface $FabricEntityTypeImpl$Builder {
        fabric_setMobEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Mob<$Mob>): void;
        fabric_setLivingEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Living<$LivingEntity>): void;
    }
}
