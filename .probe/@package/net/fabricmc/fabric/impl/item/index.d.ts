import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $EquipmentSlotProvider_, $CustomDamageHandler, $EquipmentSlotProvider, $CustomDamageHandler_ } from "@package/net/fabricmc/fabric/api/item/v1";

declare module "@package/net/fabricmc/fabric/impl/item" {
    export class $ItemStackExtensions {
    }
    export interface $ItemStackExtensions {
        fabric_getLivingEntity(): $LivingEntity;
        fabric_setLivingEntity(arg0: $LivingEntity): void;
    }
    export class $ItemExtensions {
    }
    export interface $ItemExtensions {
        fabric_getEquipmentSlotProvider(): $EquipmentSlotProvider;
        fabric_setEquipmentSlotProvider(arg0: $EquipmentSlotProvider_): void;
        fabric_setCustomDamageHandler(arg0: $CustomDamageHandler_): void;
        fabric_getCustomDamageHandler(): $CustomDamageHandler;
    }
}
