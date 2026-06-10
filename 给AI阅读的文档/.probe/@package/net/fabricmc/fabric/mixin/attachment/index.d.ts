import { $AttachmentTarget } from "@package/net/fabricmc/fabric/api/attachment/v1";
import { $Map_, $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $AttachmentType, $IAttachmentSerializer, $AttachmentType_ } from "@package/net/neoforged/neoforge/attachment";

declare module "@package/net/fabricmc/fabric/mixin/attachment" {
    export class $AttachmentHolderAccessor {
    }
    export interface $AttachmentHolderAccessor {
        invokeGetAttachmentMap(): $Map<$AttachmentType<never>, $Object>;
    }
    /**
     * Values that may be interpreted as {@link $AttachmentHolderAccessor}.
     */
    export type $AttachmentHolderAccessor_ = (() => $Map_<$AttachmentType_<never>, $Object>);
    export class $AttachmentTypeAccessor {
    }
    export interface $AttachmentTypeAccessor {
        getSerializer(): $IAttachmentSerializer<never, never>;
        get serializer(): $IAttachmentSerializer<never, never>;
    }
    /**
     * Values that may be interpreted as {@link $AttachmentTypeAccessor}.
     */
    export type $AttachmentTypeAccessor_ = (() => $IAttachmentSerializer<never, never>);
    export class $IAttachmentHolderMixin {
    }
    export interface $IAttachmentHolderMixin extends $AttachmentTarget {
    }
    export class $BaseMappedRegistryAccessor {
    }
    export interface $BaseMappedRegistryAccessor {
        invokeUnfreeze(): void;
    }
    /**
     * Values that may be interpreted as {@link $BaseMappedRegistryAccessor}.
     */
    export type $BaseMappedRegistryAccessor_ = (() => void);
}
