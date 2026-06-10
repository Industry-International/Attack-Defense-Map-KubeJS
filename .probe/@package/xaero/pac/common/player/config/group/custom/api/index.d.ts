import { $List } from "@package/java/util";

declare module "@package/xaero/pac/common/player/config/group/custom/api" {
    export class $ICustomPlayerConfigGroupDataManagerAPI {
    }
    export interface $ICustomPlayerConfigGroupDataManagerAPI {
        dataExists(arg0: string): boolean;
        getMaxGroups(): number;
        getAllIdsSorted(): $List<string>;
        getGroupSpace(): number;
        get maxGroups(): number;
        get allIdsSorted(): $List<string>;
        get groupSpace(): number;
    }
}
