import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/com/mapter/aeroclaims/protect" {
    export class $IPlacerTracked {
    }
    export interface $IPlacerTracked {
        aeroclaims$setPlacerUUID(arg0: $UUID_): void;
        aeroclaims$getPlacerUUID(): $UUID;
    }
}
