import { $Serializable } from "@package/java/io";
import { $BigInteger } from "@package/java/math";
import { $Number, $Comparable } from "@package/java/lang";

declare module "@package/com/google/common/primitives" {
    export class $UnsignedLong extends $Number implements $Comparable<$UnsignedLong>, $Serializable {
        toString(radix: number): string;
        compareTo(o: $UnsignedLong): number;
        static valueOf(string: string, radix: number): $UnsignedLong;
        static valueOf(value: number): $UnsignedLong;
        static valueOf(string: string): $UnsignedLong;
        static valueOf(value: $BigInteger): $UnsignedLong;
        mod(val: $UnsignedLong): $UnsignedLong;
        bigIntegerValue(): $BigInteger;
        minus(val: $UnsignedLong): $UnsignedLong;
        plus(val: $UnsignedLong): $UnsignedLong;
        dividedBy(val: $UnsignedLong): $UnsignedLong;
        times(val: $UnsignedLong): $UnsignedLong;
        static fromLongBits(bits: number): $UnsignedLong;
        static ZERO: $UnsignedLong;
        static ONE: $UnsignedLong;
        static MAX_VALUE: $UnsignedLong;
    }
}
