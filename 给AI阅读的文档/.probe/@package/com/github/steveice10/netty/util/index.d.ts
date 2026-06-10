import { $Object } from "@package/java/lang";

declare module "@package/com/github/steveice10/netty/util" {
    export class $ByteProcessor {
        static FIND_NUL: $ByteProcessor;
        static FIND_COMMA: $ByteProcessor;
        static FIND_CR: $ByteProcessor;
        static FIND_ASCII_SPACE: $ByteProcessor;
        static FIND_NON_CR: $ByteProcessor;
        static FIND_NON_CRLF: $ByteProcessor;
        static FIND_LF: $ByteProcessor;
        static FIND_LINEAR_WHITESPACE: $ByteProcessor;
        static FIND_NON_LINEAR_WHITESPACE: $ByteProcessor;
        static FIND_SEMI_COLON: $ByteProcessor;
        static FIND_NON_NUL: $ByteProcessor;
        static FIND_CRLF: $ByteProcessor;
        static FIND_NON_LF: $ByteProcessor;
    }
    export interface $ByteProcessor {
        process(arg0: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ByteProcessor}.
     */
    export type $ByteProcessor_ = ((arg0: number) => boolean);
    export class $ReferenceCounted {
    }
    export interface $ReferenceCounted {
        release(arg0: number): boolean;
        release(): boolean;
        refCnt(): number;
        retain(): $ReferenceCounted;
        retain(arg0: number): $ReferenceCounted;
        touch(arg0: $Object): $ReferenceCounted;
        touch(): $ReferenceCounted;
    }
}
