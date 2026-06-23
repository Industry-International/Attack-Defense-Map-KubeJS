import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";
export * as type from "@package/top/theillusivec4/curios/api/type";
export * as event from "@package/top/theillusivec4/curios/api/event";
export * as extensions from "@package/top/theillusivec4/curios/api/extensions";

declare module "@package/top/theillusivec4/curios/api" {
    export class $SlotContext extends $Record {
        identifier(): string;
        index(): number;
        visible(): boolean;
        entity(): $LivingEntity;
        cosmetic(): boolean;
        constructor(identifier: string, entity: $LivingEntity, index: number, cosmetic: boolean, visible: boolean);
    }
    export class $SlotResult extends $Record {
        slotContext(): $SlotContext;
        stack(): $ItemStack;
        constructor(slotContext: $SlotContext_, stack: $ItemStack_);
    }
}
