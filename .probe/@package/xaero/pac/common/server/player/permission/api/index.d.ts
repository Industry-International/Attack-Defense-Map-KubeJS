import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Class } from "@package/java/lang";
import { $OptionalInt } from "@package/java/util";

declare module "@package/xaero/pac/common/server/player/permission/api" {
    export class $IPlayerPermissionSystemAPI {
    }
    export interface $IPlayerPermissionSystemAPI {
        getPermission(arg0: $ServerPlayer, arg1: $IPermissionNodeAPI<boolean>): boolean;
        getPermissionTyped<T>(arg0: $ServerPlayer, arg1: $IPermissionNodeAPI<T>): (T) | undefined;
        getIntPermission(arg0: $ServerPlayer, arg1: $IPermissionNodeAPI<number>): $OptionalInt;
    }
    export class $IPermissionNodeAPI<T> {
    }
    export interface $IPermissionNodeAPI<T> {
        getName(): $Component;
        getType(): $Class<T>;
        getComment(): $Component;
        getNodeString(): string;
        getDefaultNodeString(): string;
        get name(): $Component;
        get type(): $Class<T>;
        get comment(): $Component;
        get nodeString(): string;
        get defaultNodeString(): string;
    }
    export class $IPlayerPermissionSystemRegisterAPI {
    }
    export interface $IPlayerPermissionSystemRegisterAPI {
        register(arg0: string, arg1: $IPlayerPermissionSystemAPI): void;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerPermissionSystemRegisterAPI}.
     */
    export type $IPlayerPermissionSystemRegisterAPI_ = ((arg0: string, arg1: $IPlayerPermissionSystemAPI) => void);
}
