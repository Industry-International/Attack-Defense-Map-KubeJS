import { $JsonObject, $JsonObject_ } from "@package/com/google/gson";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ModelResource } from "@package/com/atsuishio/superbwarfare/resource";
import { $IDBasedData, $DefaultDataSupplier, $ModColor } from "@package/com/atsuishio/superbwarfare/data";
import { $GunItem } from "@package/com/atsuishio/superbwarfare/item/gun";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $LoadingCache } from "@package/com/google/common/cache";

declare module "@package/com/atsuishio/superbwarfare/resource/gun" {
    export class $GunAnimation {
        prepare: string;
        idle: string;
        edit: string;
        reloadEmpty: string;
        iterative: string;
        reloadNormal: string;
        run: string;
        reload: string;
        fire: string;
        finish: string;
        bolt: string;
        melee: string;
        transitionTickTime: number;
        constructor();
    }
    export class $GunResource implements $DefaultDataSupplier<$DefaultGunResource> {
        update(): void;
        getDefault(): $DefaultGunResource;
        static getDefault(arg0: $ItemStack_): $DefaultGunResource;
        static getDefault(arg0: $Item_): $DefaultGunResource;
        static getDefault(arg0: string): $DefaultGunResource;
        static from(arg0: $ItemStack_): $GunResource;
        compute(): $DefaultGunResource;
        static compute(arg0: $ItemStack_): $DefaultGunResource;
        static create(arg0: $Item_): $GunResource;
        static getRegistryId(arg0: $Item_): string;
        stack: $ItemStack;
        item: $GunItem;
        id: string;
        static RESOURCE_CACHE: $LoadingCache<$ItemStack, $GunResource>;
    }
    export class $DefaultGunResource implements $IDBasedData<$DefaultGunResource> {
        getId(): string;
        setId(arg0: string): void;
        getModel(): $ModelResource;
        limit(): void;
        copy(): $DefaultGunResource;
        toJson(): $JsonObject;
        fromJson(arg0: $JsonObject_): $DefaultGunResource;
        flareSize: number;
        useOldHandRenderer: boolean;
        dischargeSound: $SoundEvent;
        canZoom: boolean;
        icon: string;
        flarePosition: $Vec3;
        model: $ModelResource;
        hideCrosshairWhenZoom: boolean;
        triggerSound: $SoundEvent;
        ejectShell: boolean;
        energyBarColor: $ModColor;
        animation: $GunAnimation;
        constructor();
    }
}
