import { $JsonElement } from "@package/com/google/gson";
import { $ContextAwareReloadListenerAccessor as $ContextAwareReloadListenerAccessor$1 } from "@package/net/mehvahdjukaar/moonlight/core/mixins/platform";
import { $IModFileInfo } from "@package/net/neoforged/neoforgespi/language";
import { $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Collection_ } from "@package/java/util";
import { $IModFile } from "@package/net/neoforged/neoforgespi/locating";
import { $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $PackRepository, $Pack$ResourcesSupplier, $Pack$Metadata_, $Pack, $RepositorySource } from "@package/net/minecraft/server/packs/repository";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $AbstractPackResources, $PackLocationInfo_, $PackSelectionConfig_, $PackResources, $PackType_ } from "@package/net/minecraft/server/packs";
import { $ICondition$IContext, $ICondition$IContext_, $ConditionalOps } from "@package/net/neoforged/neoforge/common/conditions";
import { $PackMetadataSection_, $PackMetadataSection } from "@package/net/minecraft/server/packs/metadata/pack";
import { $ContextAwareReloadListenerAccessor } from "@package/rbasamoyai/createbigcannons/mixin";

declare module "@package/net/neoforged/neoforge/resource" {
    export class $EmptyPackResources$EmptyResourcesSupplier implements $Pack$ResourcesSupplier {
        openFull(arg0: $PackLocationInfo_, arg1: $Pack$Metadata_): $PackResources;
        openPrimary(arg0: $PackLocationInfo_): $PackResources;
        constructor(arg0: $PackMetadataSection_);
    }
    export class $EmptyPackResources extends $AbstractPackResources {
        constructor(arg0: $PackLocationInfo_, arg1: $PackMetadataSection_);
    }
    export class $ResourcePackLoader {
        static getPackNames(arg0: $PackType_): $List<string>;
        static populatePackRepository(arg0: $PackRepository, arg1: $PackType_, arg2: boolean): void;
        static readWithOptionalMeta(arg0: $PackLocationInfo_, arg1: $Pack$ResourcesSupplier, arg2: $PackType_, arg3: $PackSelectionConfig_): $Pack;
        static buildPackFinder(arg0: $Map_<$IModFile, $Pack$ResourcesSupplier>, arg1: $PackType_): $RepositorySource;
        static createPackForMod(arg0: $IModFileInfo): $Pack$ResourcesSupplier;
        static expandAndRemoveRootChildren(arg0: $Stream<$Pack>, arg1: $Collection_<$Pack>): $List<$Pack>;
        static reorderNewlyDiscoveredPacks(arg0: $Collection_<string>, arg1: $Collection_<string>, arg2: $PackRepository): void;
        static getPackFor(arg0: string): ($Pack$ResourcesSupplier) | undefined;
        static MOD_RESOURCES_ID: string;
        static MOD_DATA_ID: string;
        static OPTIONAL_FORMAT: $MetadataSectionType<$PackMetadataSection>;
        constructor();
    }
    export class $ContextAwareReloadListener implements $PreparableReloadListener, $ContextAwareReloadListenerAccessor, $ContextAwareReloadListenerAccessor$1 {
        injectContext(arg0: $ICondition$IContext_, arg1: $HolderLookup$Provider): void;
        getName(): string;
        invokeGetContext(): $ICondition$IContext;
        callMakeConditionalOps(): $ConditionalOps<$JsonElement>;
        constructor();
        get name(): string;
    }
}
