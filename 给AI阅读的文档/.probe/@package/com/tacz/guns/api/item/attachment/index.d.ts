import { $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/tacz/guns/api/item/attachment" {
    export class $AttachmentType extends $Enum<$AttachmentType> implements $StringRepresentable {
        static values(): $AttachmentType[];
        static valueOf(arg0: string): $AttachmentType;
        getSerializedName(): string;
        static fromId(arg0: number): $AttachmentType;
        getRemappedEnumConstantName(): string;
        static GRIP: $AttachmentType;
        static CODEC: $Codec<$AttachmentType>;
        static SCOPE: $AttachmentType;
        static LASER: $AttachmentType;
        static EXTENDED_MAG: $AttachmentType;
        static MUZZLE: $AttachmentType;
        static NONE: $AttachmentType;
        static STOCK: $AttachmentType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AttachmentType}.
     */
    export type $AttachmentType_ = "scope" | "muzzle" | "stock" | "grip" | "laser" | "extended_mag" | "none";
}
