import { $Logger } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $List, $Set_, $Collection_, $List_, $Collection, $Set } from "@package/java/util";
import { $InclusiveRange, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $Consumer, $BiConsumer_, $Function_, $Consumer_, $UnaryOperator_, $Predicate_, $Function, $UnaryOperator } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $PackSelectionConfig_, $PackResources, $PackType_, $PackLocationInfo, $PackLocationInfo_, $VanillaPackResources, $PackSelectionConfig } from "@package/net/minecraft/server/packs";
import { $InvokerPackRepository } from "@package/com/rinko1231/op2r/mixin/accessor";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $FabricResourcePackProfile } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Record } from "@package/java/lang";
import { $PackMetadataSection_ } from "@package/net/minecraft/server/packs/metadata/pack";
import { $DirectoryValidator, $ForbiddenSymlinkInfo_ } from "@package/net/minecraft/world/level/validation";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/server/packs/repository" {
    export class $Pack$Position extends $Enum<$Pack$Position> {
        static values(): $Pack$Position[];
        insert<T>(list: $List_<T>, element: T, packFactory: $Function_<T, $PackSelectionConfig>, flipPosition: boolean): number;
        static valueOf(arg0: string): $Pack$Position;
        opposite(): $Pack$Position;
        static TOP: $Pack$Position;
        static BOTTOM: $Pack$Position;
    }
    /**
     * Values that may be interpreted as {@link $Pack$Position}.
     */
    export type $Pack$Position_ = "top" | "bottom";
    export class $PackSource {
        static create(decorator: $UnaryOperator_<$Component>, shouldAddAutomatically: boolean): $PackSource;
        static BUILT_IN: $PackSource;
        static SERVER: $PackSource;
        static FEATURE: $PackSource;
        static NO_DECORATION: $UnaryOperator<$Component>;
        static WORLD: $PackSource;
        static DEFAULT: $PackSource;
    }
    export interface $PackSource {
        shouldAddAutomatically(): boolean;
        decorate(name: $Component_): $Component;
    }
    export class $Pack$ResourcesSupplier {
    }
    export interface $Pack$ResourcesSupplier {
        openPrimary(location: $PackLocationInfo_): $PackResources;
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
    }
    export class $FolderRepositorySource implements $RepositorySource {
        static discoverPacks(folder: $Path_, validator: $DirectoryValidator, output: $BiConsumer_<$Path, $Pack$ResourcesSupplier>): void;
        loadPacks(onLoad: $Consumer_<$Pack>): void;
        packSource: $PackSource;
        static LOGGER: $Logger;
        constructor(folder: $Path_, packType: $PackType_, packSource: $PackSource, validator: $DirectoryValidator);
    }
    export class $PackRepository implements $InvokerPackRepository {
        reload(): void;
        getRequestedFeatureFlags(): $FeatureFlagSet;
        isAvailable(id: string): boolean;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getAvailablePacks(): $Collection<$Pack>;
        addPackFinder(arg0: $RepositorySource_): void;
        rebuildSelected(ids: $Collection_<string>): $List<$Pack>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getAvailableIds(): $Collection<string>;
        static displayPackList(packs: $Collection_<$Pack>): string;
        setSelected(ids: $Collection_<string>): void;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getSelectedIds(): $Collection<string>;
        removePack(id: string): boolean;
        addPack(id: string): boolean;
        getPack(id: string): $Pack;
        handler$fnh000$fabric_resource_loader_v0$construct(arg0: $RepositorySource_[], arg1: $CallbackInfo): void;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getSelectedPacks(): $Collection<$Pack>;
        openAllSelected(): $List<$PackResources>;
        callRebuildSelected(ids: $Collection_<string>): $List<$Pack>;
        sources: $Set<$RepositorySource>;
        constructor(...sources: $RepositorySource_[]);
        get requestedFeatureFlags(): $FeatureFlagSet;
        get availablePacks(): $Collection<$Pack>;
        get availableIds(): $Collection<string>;
        set selected(value: $Collection_<string>);
        get selectedIds(): $Collection<string>;
        get selectedPacks(): $Collection<$Pack>;
    }
    export class $KnownPack extends $Record {
        version(): string;
        id(): string;
        namespace(): string;
        isVanilla(): boolean;
        static vanilla(name: string): $KnownPack;
        static VANILLA_NAMESPACE: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $KnownPack>;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    export class $FolderRepositorySource$FolderPackDetector extends $PackDetector<$Pack$ResourcesSupplier> {
    }
    export class $PackDetector<T> {
        detectPackResources(path: $Path_, forbiddenSymlinkInfos: $List_<$ForbiddenSymlinkInfo_>): T;
        createZipPack(path: $Path_): T;
        createDirectoryPack(path: $Path_): T;
        constructor(validator: $DirectoryValidator);
    }
    export class $ServerPacksSource extends $BuiltInPackSource {
        static createVanillaPackSource(): $VanillaPackResources;
        static createPackRepository(folder: $Path_, validator: $DirectoryValidator): $PackRepository;
        static createPackRepository(level: $LevelStorageSource$LevelStorageAccess): $PackRepository;
        static createVanillaTrustedRepository(): $PackRepository;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(validator: $DirectoryValidator);
    }
    export class $Pack$Metadata extends $Record {
        isHidden(): boolean;
        description(): $Component;
        overlays(): $List<string>;
        compatibility(): $PackCompatibility;
        requestedFeatures(): $FeatureFlagSet;
        /**
         * @deprecated
         */
        constructor(arg0: $Component_, arg1: $PackCompatibility_, arg2: $FeatureFlagSet, arg3: $List_<string>);
        constructor(description: $Component_, compatibility: $PackCompatibility_, requestedFeatures: $FeatureFlagSet, overlays: $List_<string>, isHidden: boolean);
        get hidden(): boolean;
    }
    export class $PackCompatibility extends $Enum<$PackCompatibility> {
        getDescription(): $Component;
        static values(): $PackCompatibility[];
        static valueOf(arg0: string): $PackCompatibility;
        static forVersion(range: $InclusiveRange_<number>, version: number): $PackCompatibility;
        getConfirmation(): $Component;
        isCompatible(): boolean;
        static TOO_OLD: $PackCompatibility;
        static COMPATIBLE: $PackCompatibility;
        static TOO_NEW: $PackCompatibility;
        get description(): $Component;
        get confirmation(): $Component;
        get compatible(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PackCompatibility}.
     */
    export type $PackCompatibility_ = "too_old" | "too_new" | "compatible";
    export class $RepositorySource {
    }
    export interface $RepositorySource {
        loadPacks(onLoad: $Consumer_<$Pack>): void;
    }
    /**
     * Values that may be interpreted as {@link $RepositorySource}.
     */
    export type $RepositorySource_ = ((arg0: $Consumer<$Pack>) => void);
    export class $Pack implements $FabricResourcePackProfile {
        getDescription(): $Component;
        isHidden(): boolean;
        location(): $PackLocationInfo;
        getId(): string;
        open(): $PackResources;
        getChildren(): $List<$Pack>;
        getTitle(): $Component;
        fabric_setParentsPredicate(arg0: $Predicate_<any>): void;
        fabric_parentsEnabled(arg0: $Set_<any>): boolean;
        getRequestedFeatures(): $FeatureFlagSet;
        streamSelfAndChildren(): $Stream<$Pack>;
        static getDeclaredPackVersions(id: string, metadata: $PackMetadataSection_): $InclusiveRange<number>;
        withChildren(arg0: $List_<$Pack>): $Pack;
        getChatLink(green: boolean): $Component;
        fabric_isHidden(): boolean;
        isRequired(): boolean;
        getDefaultPosition(): $Pack$Position;
        selectionConfig(): $PackSelectionConfig;
        static readMetaAndCreate(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, packType: $PackType_, selectionConfig: $PackSelectionConfig_): $Pack;
        static readPackMetadata(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, version: number): $Pack$Metadata;
        hidden(): $Pack;
        getPackSource(): $PackSource;
        getCompatibility(): $PackCompatibility;
        isFixedPosition(): boolean;
        constructor(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, metadata: $Pack$Metadata_, selectionConfig: $PackSelectionConfig_);
        get description(): $Component;
        get id(): string;
        get children(): $List<$Pack>;
        get title(): $Component;
        get requestedFeatures(): $FeatureFlagSet;
        get required(): boolean;
        get defaultPosition(): $Pack$Position;
        get packSource(): $PackSource;
        get compatibility(): $PackCompatibility;
        get fixedPosition(): boolean;
    }
    export class $BuiltInPackSource implements $RepositorySource {
        discoverPacksInPath(directoryPath: $Path_ | null, packGetter: $BiConsumer_<string, $Function<string, $Pack>>): void;
        getPackTitle(id: string): $Component;
        createBuiltinPack(id: string, resources: $Pack$ResourcesSupplier, title: $Component_): $Pack;
        populatePackList(populator: $BiConsumer_<string, $Function<string, $Pack>>): void;
        createVanillaPack(resources: $PackResources): $Pack;
        static fixedResources(resources: $PackResources): $Pack$ResourcesSupplier;
        handler$jdf000$axiom$loadPacks(consumer: $Consumer_<any>, ci: $CallbackInfo): void;
        loadPacks(packConsumer: $Consumer_<$Pack>): void;
        static fromName(arg0: $Function_<$PackLocationInfo, $PackResources>): $Pack$ResourcesSupplier;
        getVanillaPack(): $VanillaPackResources;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(packType: $PackType_, vanillaPack: $VanillaPackResources, packDir: $ResourceLocation_, validator: $DirectoryValidator);
        get vanillaPack(): $VanillaPackResources;
    }
}
