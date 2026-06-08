import { $Function_, $Function } from "@package/java/util/function";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Record } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/client/icon" {
    export class $AtlasSpriteKubeIcon extends $Record implements $KubeIcon {
        getType(): $KubeIconType<never>;
        sprite(): $ResourceLocation;
        atlas(): ($ResourceLocation) | undefined;
        static TYPE: $KubeIconType<$AtlasSpriteKubeIcon>;
        constructor(atlas: ($ResourceLocation_) | undefined, sprite: $ResourceLocation_);
        get type(): $KubeIconType<never>;
    }
    export class $KubeIconRenderer$FromAtlasSprite extends $Record implements $KubeIconRenderer {
        draw(mc: $Minecraft, graphics: $GuiGraphics, x: number, y: number, size: number): void;
        icon(): $AtlasSpriteKubeIcon;
        constructor(icon: $AtlasSpriteKubeIcon_);
    }
    export class $KubeIconRenderer$FromItem extends $Record implements $KubeIconRenderer {
        draw(mc: $Minecraft, graphics: $GuiGraphics, x: number, y: number, size: number): void;
        icon(): $ItemKubeIcon;
        constructor(icon: $ItemKubeIcon_);
    }
    export class $TextureKubeIcon extends $Record implements $KubeIcon {
        getType(): $KubeIconType<never>;
        texture(): $ResourceLocation;
        static TYPE: $KubeIconType<$TextureKubeIcon>;
        constructor(texture: $ResourceLocation_);
        get type(): $KubeIconType<never>;
    }
    export class $KubeIconRenderer$FromTexture extends $Record implements $KubeIconRenderer {
        draw(mc: $Minecraft, graphics: $GuiGraphics, x: number, y: number, size: number): void;
        icon(): $TextureKubeIcon;
        constructor(icon: $TextureKubeIcon_);
    }
    export class $KubeIconTypeRegistry {
    }
    export interface $KubeIconTypeRegistry {
        register(type: $KubeIconType_<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $KubeIconTypeRegistry}.
     */
    export type $KubeIconTypeRegistry_ = ((type: $KubeIconType<never>) => void);
    export class $KubeIconType<T extends $KubeIcon> extends $Record {
        id(): $ResourceLocation;
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static TYPES: $Lazy<$Map<$ResourceLocation, $KubeIconType<never>>>;
        static CODEC: $Codec<$KubeIconType<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $KubeIconType<never>>;
        constructor(id: $ResourceLocation_, codec: $MapCodec_<T>);
        constructor(id: $ResourceLocation_, codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    export class $KubeIconRenderer {
        static from(icon: $KubeIcon_): $KubeIconRenderer;
        static RENDERERS: $Lazy<$Map<$KubeIconType<never>, $Function<never, $KubeIconRenderer>>>;
    }
    export interface $KubeIconRenderer {
        draw(mc: $Minecraft, graphics: $GuiGraphics, x: number, y: number, size: number): void;
    }
    /**
     * Values that may be interpreted as {@link $KubeIconRenderer}.
     */
    export type $KubeIconRenderer_ = ((mc: $Minecraft, graphics: $GuiGraphics, x: number, y: number, size: number) => void);
    export class $KubeIcon {
        static CODEC: $Codec<$KubeIcon>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($KubeIcon) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $KubeIcon>;
    }
    export interface $KubeIcon {
        getType(): $KubeIconType<never>;
        get type(): $KubeIconType<never>;
    }
    /**
     * Values that may be interpreted as {@link $KubeIcon}.
     */
    export type $KubeIcon_ = { type: "kubejs:item", item: { id: RegistryTypes.Item, count?: number,  },  } | { type: "kubejs:texture", texture: `${string}:${string}`,  } | { type: "kubejs:atlas_sprite", atlas?: `${string}:${string}`, sprite: `${string}:${string}`,  } | (() => $KubeIconType_<never>);
    export class $ItemKubeIcon extends $Record implements $KubeIcon {
        getType(): $KubeIconType<never>;
        item(): $ItemStack;
        static TYPE: $KubeIconType<$ItemKubeIcon>;
        constructor(item: $ItemStack_);
        get type(): $KubeIconType<never>;
    }
    export class $KubeIconRenderer$Registry {
    }
    export interface $KubeIconRenderer$Registry {
        register<T extends $KubeIcon>(type: $KubeIconType_<T>, factory: $Function_<T, $KubeIconRenderer>): void;
    }
    /**
     * Values that may be interpreted as {@link $KubeIconRenderer$Registry}.
     */
    export type $KubeIconRenderer$Registry_ = ((type: $KubeIconType<any>, factory: $Function<any, $KubeIconRenderer>) => void);
}
