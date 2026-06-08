import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";

declare module "@package/net/neoforged/neoforge/event/entity/item" {
    export class $ItemExpireEvent extends $ItemEvent {
        getExtraLife(): number;
        setExtraLife(arg0: number): void;
        addExtraLife(arg0: number): void;
        constructor(arg0: $ItemEntity);
    }
    export class $ItemTossEvent extends $ItemEvent implements $ICancellableEvent {
        getPlayer(): $Player;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ItemEntity, arg1: $Player);
        get player(): $Player;
    }
    export class $ItemEvent extends $EntityEvent {
        getEntity(): $ItemEntity;
        constructor(arg0: $ItemEntity);
        get entity(): $ItemEntity;
    }
}
