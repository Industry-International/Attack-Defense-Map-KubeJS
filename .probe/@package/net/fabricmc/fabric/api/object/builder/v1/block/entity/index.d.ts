import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/fabricmc/fabric/api/object/builder/v1/block/entity" {
    export class $FabricBlockEntityType {
    }
    export interface $FabricBlockEntityType {
        addSupportedBlock(arg0: $Block_): void;
    }
    export class $FabricBlockEntityType$Builder<T extends $BlockEntity> {
    }
    export interface $FabricBlockEntityType$Builder<T extends $BlockEntity> {
        build(): $BlockEntityType<T>;
    }
}
