import { $Enum } from "@package/java/lang";
export * as data from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
export * as trigger from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting" {
    export class $SortType extends $Enum<$SortType> {
        static values(): $SortType[];
        static valueOf(arg0: string): $SortType;
        static STATIC_TOPO: $SortType;
        static NO_TRANSLUCENT: $SortType;
        static EMPTY_SECTION: $SortType;
        static STATIC_NORMAL_RELATIVE: $SortType;
        needsDirectionMixing: boolean;
        static NONE: $SortType;
        static DYNAMIC: $SortType;
    }
    /**
     * Values that may be interpreted as {@link $SortType}.
     */
    export type $SortType_ = "empty_section" | "no_translucent" | "none" | "static_normal_relative" | "static_topo" | "dynamic";
}
