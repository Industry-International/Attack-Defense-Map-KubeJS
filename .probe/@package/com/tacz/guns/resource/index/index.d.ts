import { $AmmoIndexPOJO, $GunIndexPOJO, $AttachmentIndexPOJO } from "@package/com/tacz/guns/resource/pojo";
import { $AttachmentType } from "@package/com/tacz/guns/api/item/attachment";
import { $AttachmentData } from "@package/com/tacz/guns/resource/pojo/data/attachment";
import { $CommonGunIndexAccessor } from "@package/mod/chloeprime/gunsmithlib/mixin";
import { $BulletData, $GunData } from "@package/com/tacz/guns/resource/pojo/data/gun";
import { $LuaTable } from "@package/org/luaj/vm2";

declare module "@package/com/tacz/guns/resource/index" {
    export class $CommonAmmoIndex {
        static getInstance(arg0: $AmmoIndexPOJO): $CommonAmmoIndex;
        getSort(): number;
        getStackSize(): number;
        getPojo(): $AmmoIndexPOJO;
        get sort(): number;
        get stackSize(): number;
        get pojo(): $AmmoIndexPOJO;
    }
    export class $CommonAttachmentIndex {
        static getInstance(arg0: $AttachmentIndexPOJO): $CommonAttachmentIndex;
        getType(): $AttachmentType;
        getSort(): number;
        getData(): $AttachmentData;
        getPojo(): $AttachmentIndexPOJO;
        get type(): $AttachmentType;
        get sort(): number;
        get data(): $AttachmentData;
        get pojo(): $AttachmentIndexPOJO;
    }
    export class $CommonGunIndex implements $CommonGunIndexAccessor {
        static getInstance(arg0: $GunIndexPOJO): $CommonGunIndex;
        getType(): string;
        getSort(): number;
        getScript(): $LuaTable;
        getGunData(): $GunData;
        getBulletData(): $BulletData;
        getScriptParam(): $LuaTable;
        getPojo(): $GunIndexPOJO;
        setScript(arg0: $LuaTable): void;
        setScriptParam(arg0: $LuaTable): void;
        get type(): string;
        get sort(): number;
        get gunData(): $GunData;
        get bulletData(): $BulletData;
        get pojo(): $GunIndexPOJO;
    }
}
