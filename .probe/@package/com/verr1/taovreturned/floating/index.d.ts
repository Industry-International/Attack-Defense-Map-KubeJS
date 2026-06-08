import { $List_, $List } from "@package/java/util";
import { $Vector3dc, $Vector3d } from "@package/org/joml";

declare module "@package/com/verr1/taovreturned/floating" {
    export class $SubmergedFloaterContainerAccess {
    }
    export interface $SubmergedFloaterContainerAccess {
        taovReturned$getAdventureFloaters(): $List<$Vector3d>;
        taovReturned$translateAdventureFloaters(arg0: $Vector3dc): void;
    }
    /**
     * Values that may be interpreted as {@link $SubmergedFloaterContainerAccess}.
     */
    export type $SubmergedFloaterContainerAccess_ = (() => $List_<$Vector3d>);
}
