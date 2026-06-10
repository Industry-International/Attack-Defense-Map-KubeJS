import { $EnhancedAmmoData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/ammo";
import { $AttachmentType } from "@package/com/tacz/guns/api/item/attachment";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Optional } from "@package/java/util";
export * as data from "@package/com/tacz/guns/resource/pojo/data";

declare module "@package/com/tacz/guns/resource/pojo" {
    export class $AmmoIndexPOJO implements $EnhancedAmmoData {
        getName(): string;
        getSort(): number;
        getStackSize(): number;
        getTooltip(): string;
        gunsmith$getGunsmithLibExtension(): $Optional<any>;
        getDisplay(): $ResourceLocation;
        constructor();
        get name(): string;
        get sort(): number;
        get stackSize(): number;
        get tooltip(): string;
        get display(): $ResourceLocation;
    }
    export class $GunIndexPOJO {
        getName(): string;
        getType(): string;
        getSort(): number;
        getData(): $ResourceLocation;
        getTooltip(): string;
        getItemType(): string;
        getDisplay(): $ResourceLocation;
        constructor();
        get name(): string;
        get type(): string;
        get sort(): number;
        get data(): $ResourceLocation;
        get tooltip(): string;
        get itemType(): string;
        get display(): $ResourceLocation;
    }
    export class $AttachmentIndexPOJO {
        getName(): string;
        isHidden(): boolean;
        getType(): $AttachmentType;
        getSort(): number;
        getData(): $ResourceLocation;
        getTooltip(): string;
        getDisplay(): $ResourceLocation;
        constructor();
        get name(): string;
        get hidden(): boolean;
        get type(): $AttachmentType;
        get sort(): number;
        get data(): $ResourceLocation;
        get tooltip(): string;
        get display(): $ResourceLocation;
    }
}
