import { $Set, $List } from "@package/java/util";
import { $ICustomPlayerConfigGroupDataManagerAPI } from "@package/xaero/pac/common/player/config/group/custom/api";

declare module "@package/xaero/pac/client/player/config/group/api" {
    export class $IClientPlayerConfigGroupManagerAPI {
    }
    export interface $IClientPlayerConfigGroupManagerAPI extends $ICustomPlayerConfigGroupDataManagerAPI {
        dataExists(arg0: string): boolean;
        getIds(): $Set<string>;
        getGroupSpace(): number;
        getAllIdsSorted(): $List<string>;
        getMaxGroups(): number;
        isSyncInProgress(): boolean;
        get ids(): $Set<string>;
        get groupSpace(): number;
        get allIdsSorted(): $List<string>;
        get maxGroups(): number;
        get syncInProgress(): boolean;
    }
}
