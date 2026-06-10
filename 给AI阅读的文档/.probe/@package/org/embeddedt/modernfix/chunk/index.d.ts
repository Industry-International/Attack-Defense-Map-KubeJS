import { $Palette } from "@package/net/minecraft/world/level/chunk";

declare module "@package/org/embeddedt/modernfix/chunk" {
    export class $ExtendedPalettedContainer<T> {
    }
    export interface $ExtendedPalettedContainer<T> {
        mfix$getPalette(): $Palette<T>;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedPalettedContainer}.
     */
    export type $ExtendedPalettedContainer_<T> = (() => $Palette<T>);
}
