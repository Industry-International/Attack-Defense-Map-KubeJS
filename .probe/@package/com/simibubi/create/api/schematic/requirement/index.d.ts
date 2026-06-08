import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/api/schematic/requirement" {
    export class $SpecialBlockItemRequirement {
    }
    export interface $SpecialBlockItemRequirement {
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
    }
    /**
     * Values that may be interpreted as {@link $SpecialBlockItemRequirement}.
     */
    export type $SpecialBlockItemRequirement_ = ((arg0: $BlockState, arg1: $BlockEntity) => $ItemRequirement);
    export class $SpecialBlockEntityItemRequirement {
    }
    export interface $SpecialBlockEntityItemRequirement {
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
    }
    /**
     * Values that may be interpreted as {@link $SpecialBlockEntityItemRequirement}.
     */
    export type $SpecialBlockEntityItemRequirement_ = ((arg0: $BlockState) => $ItemRequirement);
}
