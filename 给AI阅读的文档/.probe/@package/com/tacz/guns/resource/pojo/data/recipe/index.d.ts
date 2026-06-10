import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AttachmentType_, $AttachmentType } from "@package/com/tacz/guns/api/item/attachment";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $GunSmithTableIngredient } from "@package/com/tacz/guns/crafting";
import { $List, $List_, $EnumMap } from "@package/java/util";
import { $GunSmithTableResult } from "@package/com/tacz/guns/crafting/result";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/tacz/guns/resource/pojo/data/recipe" {
    export class $TableRecipe {
        getResult(): $GunSmithTableResult;
        getMaterials(): $List<$GunSmithTableIngredient>;
        static CODEC: $MapCodec<$TableRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TableRecipe>;
        constructor();
        constructor(arg0: $List_<$GunSmithTableIngredient>, arg1: $GunSmithTableResult);
        get result(): $GunSmithTableResult;
        get materials(): $List<$GunSmithTableIngredient>;
    }
    export class $GunResult {
        getAttachments(): $EnumMap<$AttachmentType, $ResourceLocation>;
        getAmmoCount(): number;
        static CODEC: $Codec<$GunResult>;
        constructor();
        constructor(arg0: number, arg1: $EnumMap<$AttachmentType_, $ResourceLocation_>);
        get attachments(): $EnumMap<$AttachmentType, $ResourceLocation>;
        get ammoCount(): number;
    }
}
