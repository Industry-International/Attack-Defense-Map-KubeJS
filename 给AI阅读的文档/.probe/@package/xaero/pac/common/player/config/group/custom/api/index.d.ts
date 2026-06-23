import { $List } from "@package/java/util";

declare module "@package/xaero/pac/common/player/config/group/custom/api" {
    export class $ICustomPlayerConfigGroupDataManagerAPI {
    }
    export interface $ICustomPlayerConfigGroupDataManagerAPI {
        dataExists(arg0: string): boolean;
        getGroupSpace(): number;
        getAllIdsSorted(): $List<string>;
        getMaxGroups(): number;
        get groupSpace(): number;
        get allIdsSorted(): $List<string>;
        get maxGroups(): number;
    }
}
