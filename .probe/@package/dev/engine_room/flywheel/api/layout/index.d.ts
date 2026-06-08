import { $Map, $List } from "@package/java/util";

declare module "@package/dev/engine_room/flywheel/api/layout" {
    export class $Layout {
        static MAX_ELEMENT_NAME_LENGTH: number;
    }
    export interface $Layout {
        byteSize(): number;
        byteAlignment(): number;
        elements(): $List<$Layout$Element>;
        asMap(): $Map<string, $Layout$Element>;
    }
}
