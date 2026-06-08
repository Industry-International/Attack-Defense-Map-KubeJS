import { $Set, $List } from "@package/java/util";
import { $ICustomPlayerConfigGroupDataManagerAPI } from "@package/xaero/pac/common/player/config/group/custom/api";

declare module "@package/xaero/pac/client/player/config/group/api" {
    export class $IClientPlayerConfigGroupManagerAPI {
    }
    export interface $IClientPlayerConfigGroupManagerAPI extends $ICustomPlayerConfigGroupDataManagerAPI {
        getIds(): $Set<string>;
        getMaxGroups(): number;
        getGroupSpace(): number;
        getAllIdsSorted(): $List<string>;
        isSyncInProgress(): boolean;
        dataExists(arg0: string): boolean;
        get ids(): $Set<string>;
        get maxGroups(): number;
        get groupSpace(): number;
        get allIdsSorted(): $List<string>;
        get syncInProgress(): boolean;
    }
}
