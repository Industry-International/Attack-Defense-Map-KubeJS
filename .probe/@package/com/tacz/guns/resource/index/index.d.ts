import { $GunIndexPOJO } from "@package/com/tacz/guns/resource/pojo";
import { $CommonGunIndexAccessor } from "@package/mod/chloeprime/gunsmithlib/mixin";
import { $GunData, $BulletData } from "@package/com/tacz/guns/resource/pojo/data/gun";
import { $LuaTable } from "@package/org/luaj/vm2";

declare module "@package/com/tacz/guns/resource/index" {
    export class $CommonGunIndex implements $CommonGunIndexAccessor {
        static getInstance(arg0: $GunIndexPOJO): $CommonGunIndex;
        getType(): string;
        getSort(): number;
        getScript(): $LuaTable;
        getGunData(): $GunData;
        getPojo(): $GunIndexPOJO;
        getBulletData(): $BulletData;
        getScriptParam(): $LuaTable;
        setScript(arg0: $LuaTable): void;
        setScriptParam(arg0: $LuaTable): void;
        get type(): string;
        get sort(): number;
        get gunData(): $GunData;
        get pojo(): $GunIndexPOJO;
        get bulletData(): $BulletData;
    }
}
