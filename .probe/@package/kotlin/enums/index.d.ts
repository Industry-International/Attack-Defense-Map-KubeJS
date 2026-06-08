import { $KMappedMarker } from "@package/kotlin/jvm/internal/markers";
import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/kotlin/enums" {
    export class $EnumEntries<E extends $Enum<E>> {
    }
    export interface $EnumEntries<E extends $Enum<E>> extends $List<E>, $KMappedMarker {
    }
}
