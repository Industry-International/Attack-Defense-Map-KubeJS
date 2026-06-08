import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/compat/computercraft" {
    export class $AbstractComputerBehaviour extends $BlockEntityBehaviour {
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$AbstractComputerBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
}
