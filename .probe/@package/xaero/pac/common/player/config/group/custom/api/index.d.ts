import { $List } from "@package/java/util";

declare module "@package/xaero/pac/common/player/config/group/custom/api" {
    export class $ICustomPlayerConfigGroupDataManagerAPI {
    }
    export interface $ICustomPlayerConfigGroupDataManagerAPI {
        getMaxGroups(): number;
        getGroupSpace(): number;
        getAllIdsSorted(): $List<string>;
        dataExists(arg0: string): boolean;
        get maxGroups(): number;
        get groupSpace(): number;
        get allIdsSorted(): $List<string>;
    }
}
