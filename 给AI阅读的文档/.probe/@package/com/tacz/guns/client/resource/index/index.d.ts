import { $GunIndexPOJO } from "@package/com/tacz/guns/resource/pojo";
import { $GunDisplayInstance } from "@package/com/tacz/guns/client/resource";
import { $IClientGun } from "@package/dev/aika/taczjs/interfaces/client";
import { $GunData } from "@package/com/tacz/guns/resource/pojo/data/gun";

declare module "@package/com/tacz/guns/client/resource/index" {
    export class $ClientGunIndex implements $IClientGun {
        getName(): string;
        static getInstance(arg0: $GunIndexPOJO): $ClientGunIndex;
        getType(): string;
        getGunData(): $GunData;
        getDefaultDisplay(): $GunDisplayInstance;
        setVanillaInteract(v: boolean): void;
        getItemType(): string;
        isVanillaInteract(): boolean;
        get name(): string;
        get type(): string;
        get gunData(): $GunData;
        get defaultDisplay(): $GunDisplayInstance;
        get itemType(): string;
    }
}
