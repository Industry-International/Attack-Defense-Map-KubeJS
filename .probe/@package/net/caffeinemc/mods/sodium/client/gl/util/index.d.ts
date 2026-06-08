import { $Enum } from "@package/java/lang";

declare module "@package/net/caffeinemc/mods/sodium/client/gl/util" {
    export class $EnumBit {
    }
    export interface $EnumBit {
        getBits(): number;
        get bits(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumBit}.
     */
    export type $EnumBit_ = (() => number);
    export class $EnumBitField<T extends $Enum<T>> {
        static of<T extends $Enum<T>>(...arg0: T[]): $EnumBitField<T>;
        contains(arg0: T): boolean;
        getBitField(): number;
        get bitField(): number;
    }
}
