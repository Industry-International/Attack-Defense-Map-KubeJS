import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/network/protocol/login/custom" {
    export class $DiscardedQueryAnswerPayload extends $Record implements $CustomQueryAnswerPayload {
        write(arg0: $FriendlyByteBuf): void;
        static INSTANCE: $DiscardedQueryAnswerPayload;
        constructor();
    }
    export class $DiscardedQueryPayload extends $Record implements $CustomQueryPayload {
        id(): $ResourceLocation;
        write(arg0: $FriendlyByteBuf): void;
        constructor(arg0: $ResourceLocation_);
    }
    export class $CustomQueryPayload {
    }
    export interface $CustomQueryPayload {
        id(): $ResourceLocation;
        write(arg0: $FriendlyByteBuf): void;
    }
    export class $CustomQueryAnswerPayload {
    }
    export interface $CustomQueryAnswerPayload {
        write(arg0: $FriendlyByteBuf): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomQueryAnswerPayload}.
     */
    export type $CustomQueryAnswerPayload_ = ((arg0: $FriendlyByteBuf) => void);
}
