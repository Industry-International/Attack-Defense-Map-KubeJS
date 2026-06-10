import { $PermissionNode } from "@package/xaero/lib/common/permission";

declare module "@package/xaero/lib/common/permission/config/channel" {
    export class $BuiltInConfigChannelPermissions {
        register(): void;
        getEnforcedServerProfileNode(): $PermissionNode<string>;
        get enforcedServerProfileNode(): $PermissionNode<string>;
    }
}
