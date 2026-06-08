import { $Supplier, $UnaryOperator_, $Supplier_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/net/fabricmc/fabric/api/attachment/v1" {
    export class $AttachmentTarget {
        static NBT_ATTACHMENT_KEY: string;
    }
    export interface $AttachmentTarget {
        getAttachedOrCreate<A>(arg0: $AttachmentType<A>): A;
        getAttachedOrCreate<A>(arg0: $AttachmentType<A>, arg1: $Supplier_<A>): A;
        getAttachedOrThrow<A>(arg0: $AttachmentType<A>): A;
        hasAttached(arg0: $AttachmentType<never>): boolean;
        removeAttached<A>(arg0: $AttachmentType<A>): A;
        modifyAttached<A>(arg0: $AttachmentType<A>, arg1: $UnaryOperator_<A>): A;
        getAttached<A>(arg0: $AttachmentType<A>): A;
        getAttachedOrSet<A>(arg0: $AttachmentType<A>, arg1: A): A;
        getAttachedOrGet<A>(arg0: $AttachmentType<A>, arg1: $Supplier_<A>): A;
        setAttached<A>(arg0: $AttachmentType<A>, arg1: A): A;
        getAttachedOrElse<A>(arg0: $AttachmentType<A>, arg1: A): A;
    }
    export class $AttachmentType<A> {
    }
    export interface $AttachmentType<A> {
        identifier(): $ResourceLocation;
        initializer(): $Supplier<A>;
        isSynced(): boolean;
        copyOnDeath(): boolean;
        persistenceCodec(): $Codec<A>;
        isPersistent(): boolean;
        get synced(): boolean;
        get persistent(): boolean;
    }
}
