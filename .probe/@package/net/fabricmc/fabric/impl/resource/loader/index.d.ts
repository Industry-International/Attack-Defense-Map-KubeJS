import { $KnownPack_, $KnownPack, $PackSource } from "@package/net/minecraft/server/packs/repository";
import { $Predicate_ } from "@package/java/util/function";
import { $PackType, $PackType_ } from "@package/net/minecraft/server/packs";
import { $List_, $Set, $Set_, $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/impl/resource/loader" {
    export class $FabricOriginalKnownPacksGetter {
    }
    export interface $FabricOriginalKnownPacksGetter {
        fabric_getOriginalKnownPacks(): $List<$KnownPack>;
    }
    /**
     * Values that may be interpreted as {@link $FabricOriginalKnownPacksGetter}.
     */
    export type $FabricOriginalKnownPacksGetter_ = (() => $List_<$KnownPack_>);
    export class $FabricLifecycledResourceManager {
    }
    export interface $FabricLifecycledResourceManager {
        fabric_getResourceType(): $PackType;
    }
    /**
     * Values that may be interpreted as {@link $FabricLifecycledResourceManager}.
     */
    export type $FabricLifecycledResourceManager_ = (() => $PackType_);
    export class $FabricResource {
    }
    export interface $FabricResource {
        getFabricPackSource(): $PackSource;
        get fabricPackSource(): $PackSource;
    }
    export class $FabricResourcePackProfile {
    }
    export interface $FabricResourcePackProfile {
        fabric_isHidden(): boolean;
        fabric_parentsEnabled(arg0: $Set_<string>): boolean;
        fabric_setParentsPredicate(arg0: $Predicate_<$Set<string>>): void;
    }
}
