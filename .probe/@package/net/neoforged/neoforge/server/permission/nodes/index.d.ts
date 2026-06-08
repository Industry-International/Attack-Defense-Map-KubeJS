import { $Function_, $Function } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record, $Class } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/server/permission/nodes" {
    export class $PermissionDynamicContextKey<T> extends $Record {
        name(): string;
        typeToken(): $Class<T>;
        createContext(arg0: T): $PermissionDynamicContext<T>;
        serializer(): $Function<T, string>;
        constructor(typeToken: $Class<T>, name: string, serializer: $Function_<T, string>);
    }
    export class $PermissionNode<T> {
        getDescription(): $Component;
        getType(): $PermissionType<T>;
        getNodeName(): string;
        getReadableName(): $Component;
        getDynamics(): $PermissionDynamicContextKey<never>[];
        setInformation(arg0: $Component_, arg1: $Component_): $PermissionNode<any>;
        getDefaultResolver(): $PermissionNode$PermissionResolver<T>;
        constructor(arg0: $ResourceLocation_, arg1: $PermissionType<T>, arg2: $PermissionNode$PermissionResolver_<T>, ...arg3: $PermissionDynamicContextKey_<any>[]);
        constructor(arg0: string, arg1: string, arg2: $PermissionType<T>, arg3: $PermissionNode$PermissionResolver_<T>, ...arg4: $PermissionDynamicContextKey_<any>[]);
        get description(): $Component;
        get type(): $PermissionType<T>;
        get nodeName(): string;
        get readableName(): $Component;
        get dynamics(): $PermissionDynamicContextKey<never>[];
        get defaultResolver(): $PermissionNode$PermissionResolver<T>;
    }
    export class $PermissionTypes {
        static getTypeByName(arg0: string): $PermissionType<never>;
        static STRING: $PermissionType<string>;
        static COMPONENT: $PermissionType<$Component>;
        static BOOLEAN: $PermissionType<boolean>;
        static INTEGER: $PermissionType<number>;
    }
    export class $PermissionType<T> {
        typeName(): string;
        typeToken(): $Class<T>;
    }
    export class $PermissionNode$PermissionResolver<T> {
    }
    export interface $PermissionNode$PermissionResolver<T> {
        resolve(arg0: $ServerPlayer, arg1: $UUID_, ...arg2: $PermissionDynamicContext<never>[]): T;
    }
    /**
     * Values that may be interpreted as {@link $PermissionNode$PermissionResolver}.
     */
    export type $PermissionNode$PermissionResolver_<T> = ((arg0: $ServerPlayer, arg1: $UUID, arg2: $PermissionDynamicContext<never>[]) => T);
    export class $PermissionDynamicContext<T> {
        getValue(): T;
        getSerializedValue(): string;
        getDynamic(): $PermissionDynamicContextKey<T>;
        get value(): T;
        get serializedValue(): string;
        get dynamic(): $PermissionDynamicContextKey<T>;
    }
}
