import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/rafacasari/fairylights/mixins/accessor" {
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        fairylights$getLeftPos(): number;
        fairylights$getTopPos(): number;
    }
    export class $ModelPartAccessor {
    }
    export interface $ModelPartAccessor {
        fairylights$getChildren(): $Map<string, $ModelPart>;
    }
    /**
     * Values that may be interpreted as {@link $ModelPartAccessor}.
     */
    export type $ModelPartAccessor_ = (() => $Map_<string, $ModelPart>);
}
