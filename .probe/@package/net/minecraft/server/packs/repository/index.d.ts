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
        insert<T>(arg0: $List_<T>, arg1: T, arg2: $Function_<T, $PackSelectionConfig>, arg3: boolean): number;
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
        static create(arg0: $UnaryOperator_<$Component>, arg1: boolean): $PackSource;
        static BUILT_IN: $PackSource;
        static SERVER: $PackSource;
        static FEATURE: $PackSource;
        static NO_DECORATION: $UnaryOperator<$Component>;
        static WORLD: $PackSource;
        static DEFAULT: $PackSource;
    }
    export interface $PackSource {
        decorate(arg0: $Component_): $Component;
        shouldAddAutomatically(): boolean;
    }
    export class $Pack$ResourcesSupplier {
    }
    export interface $Pack$ResourcesSupplier {
        openFull(arg0: $PackLocationInfo_, arg1: $Pack$Metadata_): $PackResources;
        openPrimary(arg0: $PackLocationInfo_): $PackResources;
    }
    export class $FolderRepositorySource implements $RepositorySource {
        loadPacks(arg0: $Consumer_<$Pack>): void;
        static discoverPacks(arg0: $Path_, arg1: $DirectoryValidator, arg2: $BiConsumer_<$Path, $Pack$ResourcesSupplier>): void;
        packSource: $PackSource;
        static LOGGER: $Logger;
        constructor(arg0: $Path_, arg1: $PackType_, arg2: $PackSource, arg3: $DirectoryValidator);
    }
    export class $PackRepository {
        reload(): void;
        isAvailable(arg0: string): boolean;
        openAllSelected(): $List<$PackResources>;
        getSelectedPacks(): $Collection<$Pack>;
        setSelected(arg0: $Collection_<string>): void;
        getAvailableIds(): $Collection<string>;
        addPackFinder(arg0: $RepositorySource_): void;
        getAvailablePacks(): $Collection<$Pack>;
        rebuildSelected(arg0: $Collection_<string>): $List<$Pack>;
        getRequestedFeatureFlags(): $FeatureFlagSet;
        getSelectedIds(): $Collection<string>;
        handler$gbe000$fabric_resource_loader_v0$construct(arg0: $RepositorySource_[], arg1: $CallbackInfo): void;
        static displayPackList(arg0: $Collection_<$Pack>): string;
        getPack(arg0: string): $Pack;
        addPack(arg0: string): boolean;
        removePack(arg0: string): boolean;
        sources: $Set<$RepositorySource>;
        constructor(...arg0: $RepositorySource_[]);
        get selectedPacks(): $Collection<$Pack>;
        set selected(value: $Collection_<string>);
        get availableIds(): $Collection<string>;
        get availablePacks(): $Collection<$Pack>;
        get requestedFeatureFlags(): $FeatureFlagSet;
        get selectedIds(): $Collection<string>;
    }
    export class $KnownPack extends $Record {
        version(): string;
        id(): string;
        namespace(): string;
        isVanilla(): boolean;
        static vanilla(arg0: string): $KnownPack;
        static VANILLA_NAMESPACE: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $KnownPack>;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    export class $FolderRepositorySource$FolderPackDetector extends $PackDetector<$Pack$ResourcesSupplier> {
    }
    export class $PackDetector<T> {
        detectPackResources(arg0: $Path_, arg1: $List_<$ForbiddenSymlinkInfo_>): T;
        createZipPack(arg0: $Path_): T;
        createDirectoryPack(arg0: $Path_): T;
        constructor(arg0: $DirectoryValidator);
    }
    export class $ServerPacksSource extends $BuiltInPackSource {
        static createVanillaPackSource(): $VanillaPackResources;
        static createPackRepository(arg0: $Path_, arg1: $DirectoryValidator): $PackRepository;
        static createPackRepository(arg0: $LevelStorageSource$LevelStorageAccess): $PackRepository;
        static createVanillaTrustedRepository(): $PackRepository;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(arg0: $DirectoryValidator);
    }
    export class $Pack$Metadata extends $Record {
        isHidden(): boolean;
        description(): $Component;
        compatibility(): $PackCompatibility;
        overlays(): $List<string>;
        requestedFeatures(): $FeatureFlagSet;
        /**
         * @deprecated
         */
        constructor(arg0: $Component_, arg1: $PackCompatibility_, arg2: $FeatureFlagSet, arg3: $List_<string>);
        constructor(description: $Component_, compatibility: $PackCompatibility_, requestedFeatures: $FeatureFlagSet, overlays: $List_<string>, isHidden: boolean);
        get hidden(): boolean;
    }
    export class $PackCompatibility extends $Enum<$PackCompatibility> {
        static values(): $PackCompatibility[];
        static valueOf(arg0: string): $PackCompatibility;
        getDescription(): $Component;
        static forVersion(arg0: $InclusiveRange_<number>, arg1: number): $PackCompatibility;
        isCompatible(): boolean;
        getConfirmation(): $Component;
        static TOO_OLD: $PackCompatibility;
        static COMPATIBLE: $PackCompatibility;
        static TOO_NEW: $PackCompatibility;
        get description(): $Component;
        get compatible(): boolean;
        get confirmation(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PackCompatibility}.
     */
    export type $PackCompatibility_ = "too_old" | "too_new" | "compatible";
    export class $RepositorySource {
    }
    export interface $RepositorySource {
        loadPacks(arg0: $Consumer_<$Pack>): void;
    }
    /**
     * Values that may be interpreted as {@link $RepositorySource}.
     */
    export type $RepositorySource_ = ((arg0: $Consumer<$Pack>) => void);
    export class $Pack implements $FabricResourcePackProfile {
        isHidden(): boolean;
        location(): $PackLocationInfo;
        getId(): string;
        open(): $PackResources;
        getChildren(): $List<$Pack>;
        getTitle(): $Component;
        isRequired(): boolean;
        hidden(): $Pack;
        getCompatibility(): $PackCompatibility;
        getPackSource(): $PackSource;
        static readPackMetadata(arg0: $PackLocationInfo_, arg1: $Pack$ResourcesSupplier, arg2: number): $Pack$Metadata;
        selectionConfig(): $PackSelectionConfig;
        getDefaultPosition(): $Pack$Position;
        fabric_setParentsPredicate(arg0: $Predicate_<any>): void;
        static getDeclaredPackVersions(arg0: string, arg1: $PackMetadataSection_): $InclusiveRange<number>;
        streamSelfAndChildren(): $Stream<$Pack>;
        getRequestedFeatures(): $FeatureFlagSet;
        fabric_parentsEnabled(arg0: $Set_<any>): boolean;
        getDescription(): $Component;
        isFixedPosition(): boolean;
        static readMetaAndCreate(arg0: $PackLocationInfo_, arg1: $Pack$ResourcesSupplier, arg2: $PackType_, arg3: $PackSelectionConfig_): $Pack;
        getChatLink(arg0: boolean): $Component;
        fabric_isHidden(): boolean;
        withChildren(arg0: $List_<$Pack>): $Pack;
        constructor(arg0: $PackLocationInfo_, arg1: $Pack$ResourcesSupplier, arg2: $Pack$Metadata_, arg3: $PackSelectionConfig_);
        get id(): string;
        get children(): $List<$Pack>;
        get title(): $Component;
        get required(): boolean;
        get compatibility(): $PackCompatibility;
        get packSource(): $PackSource;
        get defaultPosition(): $Pack$Position;
        get requestedFeatures(): $FeatureFlagSet;
        get description(): $Component;
        get fixedPosition(): boolean;
    }
    export class $BuiltInPackSource implements $RepositorySource {
        getVanillaPack(): $VanillaPackResources;
        handler$inc000$axiom$loadPacks(consumer: $Consumer_<any>, ci: $CallbackInfo): void;
        static fromName(arg0: $Function_<$PackLocationInfo, $PackResources>): $Pack$ResourcesSupplier;
        loadPacks(arg0: $Consumer_<$Pack>): void;
        discoverPacksInPath(arg0: $Path_, arg1: $BiConsumer_<string, $Function<string, $Pack>>): void;
        getPackTitle(arg0: string): $Component;
        static fixedResources(arg0: $PackResources): $Pack$ResourcesSupplier;
        createBuiltinPack(arg0: string, arg1: $Pack$ResourcesSupplier, arg2: $Component_): $Pack;
        populatePackList(arg0: $BiConsumer_<string, $Function<string, $Pack>>): void;
        createVanillaPack(arg0: $PackResources): $Pack;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(arg0: $PackType_, arg1: $VanillaPackResources, arg2: $ResourceLocation_, arg3: $DirectoryValidator);
        get vanillaPack(): $VanillaPackResources;
    }
}
