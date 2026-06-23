import { $BlockGetter, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Holder_, $Holder, $HolderSet } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Products$P7 } from "@package/com/mojang/datafixers";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/map/decoration" {
    export class $MLMapDecoration {
        getType(): $Holder<$MLMapDecorationType<never, never>>;
        getDisplayName(): $Component;
        getY(): number;
        getRot(): number;
        getX(): number;
        static CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MLMapDecoration>;
        constructor(arg0: $Holder_<$MLMapDecorationType<never, never>>, arg1: number, arg2: number, arg3: number, arg4: ($Component_) | undefined);
        get type(): $Holder<$MLMapDecorationType<never, never>>;
        get displayName(): $Component;
        get y(): number;
        get rot(): number;
        get x(): number;
    }
    export class $MLMapMarker<D extends $MLMapDecoration> {
        getType(): $Holder<$MLMapDecorationType<never, never>>;
        getDisplayName(): ($Component) | undefined;
        getFlags(): number;
        getPos(): $BlockPos;
        getRotation(): number;
        preventsExtending(): boolean;
        static baseCodecGroup<T extends $MLMapMarker<never>>(arg0: $RecordCodecBuilder$Instance<T>): $Products$P7<$RecordCodecBuilder$Mu<T>, $Holder<$MLMapDecorationType<never, never>>, $BlockPos, number, ($Component) | undefined, (boolean) | undefined, (boolean) | undefined, boolean>;
        getMarkerUniqueId(): string;
        hasFlag(arg0: number): boolean;
        shouldSave(): boolean;
        shouldRefreshFromWorld(): boolean;
        createDecorationFromMarker(arg0: $MapItemSavedData): D;
        static HAS_SMALL_TEXTURE_FLAG: number;
        static CODEC: $Codec<$MLMapMarker<never>>;
        /**
         * @deprecated
         */
        static REFERENCE_CODEC: $Codec<$MLMapMarker<never>>;
        constructor(arg0: $Holder_<$MLMapDecorationType<never, never>>, arg1: $BlockPos_, arg2: number, arg3: ($Component_) | undefined, arg4: (boolean) | undefined, arg5: (boolean) | undefined, arg6: boolean);
        get type(): $Holder<$MLMapDecorationType<never, never>>;
        get displayName(): ($Component) | undefined;
        get flags(): number;
        get pos(): $BlockPos;
        get rotation(): number;
        get markerUniqueId(): string;
    }
    export interface $MLMapDecorationType<D, M> extends RegistryMarked<RegistryTypes.MoonlightMapMarkerTag, RegistryTypes.MoonlightMapMarker> {}
    export class $MLMapDecorationType<D extends $MLMapDecoration, M extends $MLMapMarker<D>> {
        getDecorationCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        getCustomFactoryID(): $ResourceLocation;
        getMarkerCodec(): $MapCodec<M>;
        getDefaultMapColor(): number;
        createMarkerFromWorld(arg0: $LevelAccessor, arg1: $BlockPos_): M;
        /**
         * @deprecated
         */
        createMarkerFromWorld(arg0: $BlockGetter, arg1: $BlockPos_): M;
        getAssociatedStructure(): ($HolderSet<$Structure>) | undefined;
        static CODEC: $Codec<$Holder<$MLMapDecorationType<never, never>>>;
        static DIRECT_CODEC: $Codec<$MLMapDecorationType<never, never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MLMapDecorationType<never, never>>>;
        get decorationCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        get customFactoryID(): $ResourceLocation;
        get markerCodec(): $MapCodec<M>;
        get defaultMapColor(): number;
        get associatedStructure(): ($HolderSet<$Structure>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $MLMapDecorationType}.
     */
    export type $MLMapDecorationType_<D, M> = RegistryTypes.MoonlightMapMarker;
}
