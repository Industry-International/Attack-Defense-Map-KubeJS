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
        shouldAddAutomatically(): boolean;
        decorate(arg0: $Component_): $Component;
    }
    export class $Pack$ResourcesSupplier {
    }
    export interface $Pack$ResourcesSupplier {
        openPrimary(arg0: $PackLocationInfo_): $PackResources;
        openFull(arg0: $PackLocationInfo_, arg1: $Pack$Metadata_): $PackResources;
    }
    export class $FolderRepositorySource implements $RepositorySource {
        static discoverPacks(arg0: $Path_, arg1: $DirectoryValidator, arg2: $BiConsumer_<$Path, $Pack$ResourcesSupplier>): void;
        loadPacks(arg0: $Consumer_<$Pack>): void;
        packSource: $PackSource;
        static LOGGER: $Logger;
        constructor(arg0: $Path_, arg1: $PackType_, arg2: $PackSource, arg3: $DirectoryValidator);
    }
    export class $PackRepository implements $InvokerPackRepository {
        reload(): void;
        isAvailable(arg0: string): boolean;
        addPackFinder(arg0: $RepositorySource_): void;
        getAvailableIds(): $Collection<string>;
        rebuildSelected(arg0: $Collection_<string>): $List<$Pack>;
        getAvailablePacks(): $Collection<$Pack>;
        getRequestedFeatureFlags(): $FeatureFlagSet;
        handler$gbe000$fabric_resource_loader_v0$construct(arg0: $RepositorySource_[], arg1: $CallbackInfo): void;
        setSelected(arg0: $Collection_<string>): void;
        removePack(arg0: string): boolean;
        getPack(arg0: string): $Pack;
        addPack(arg0: string): boolean;
        static displayPackList(arg0: $Collection_<$Pack>): string;
        getSelectedPacks(): $Collection<$Pack>;
        openAllSelected(): $List<$PackResources>;
        getSelectedIds(): $Collection<string>;
        callRebuildSelected(arg0: $Collection_<string>): $List<$Pack>;
        sources: $Set<$RepositorySource>;
        constructor(...arg0: $RepositorySource_[]);
        get availableIds(): $Collection<string>;
        get availablePacks(): $Collection<$Pack>;
        get requestedFeatureFlags(): $FeatureFlagSet;
        set selected(value: $Collection_<string>);
        get selectedPacks(): $Collection<$Pack>;
        get selectedIds(): $Collection<string>;
    }
    export class $KnownPack extends $Record {
        version(): string;
        id(): string;
        namespace(): string;
        static vanilla(arg0: string): $KnownPack;
        isVanilla(): boolean;
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
        static createVanillaTrustedRepository(): $PackRepository;
        static createPackRepository(arg0: $LevelStorageSource$LevelStorageAccess): $PackRepository;
        static createPackRepository(arg0: $Path_, arg1: $DirectoryValidator): $PackRepository;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(arg0: $DirectoryValidator);
    }
    export class $Pack$Metadata extends $Record {
        isHidden(): boolean;
        description(): $Component;
        compatibility(): $PackCompatibility;
        requestedFeatures(): $FeatureFlagSet;
        overlays(): $List<string>;
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
        isCompatible(): boolean;
        getConfirmation(): $Component;
        static forVersion(arg0: $InclusiveRange_<number>, arg1: number): $PackCompatibility;
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
        getDescription(): $Component;
        isHidden(): boolean;
        location(): $PackLocationInfo;
        getId(): string;
        open(): $PackResources;
        getChildren(): $List<$Pack>;
        isRequired(): boolean;
        getTitle(): $Component;
        static readPackMetadata(arg0: $PackLocationInfo_, arg1: $Pack$ResourcesSupplier, arg2: number): $Pack$Metadata;
        selectionConfig(): $PackSelectionConfig;
        getDefaultPosition(): $Pack$Position;
        hidden(): $Pack;
        fabric_setParentsPredicate(arg0: $Predicate_<any>): void;
        static getDeclaredPackVersions(arg0: string, arg1: $PackMetadataSection_): $InclusiveRange<number>;
        getCompatibility(): $PackCompatibility;
        getRequestedFeatures(): $FeatureFlagSet;
        streamSelfAndChildren(): $Stream<$Pack>;
        fabric_parentsEnabled(arg0: $Set_<any>): boolean;
        getChatLink(arg0: boolean): $Component;
        withChildren(arg0: $List_<$Pack>): $Pack;
        fabric_isHidden(): boolean;
        static readMetaAndCreate(arg0: $PackLocationInfo_, arg1: $Pack$ResourcesSupplier, arg2: $PackType_, arg3: $PackSelectionConfig_): $Pack;
        getPackSource(): $PackSource;
        isFixedPosition(): boolean;
        constructor(arg0: $PackLocationInfo_, arg1: $Pack$ResourcesSupplier, arg2: $Pack$Metadata_, arg3: $PackSelectionConfig_);
        get description(): $Component;
        get id(): string;
        get children(): $List<$Pack>;
        get required(): boolean;
        get title(): $Component;
        get defaultPosition(): $Pack$Position;
        get compatibility(): $PackCompatibility;
        get requestedFeatures(): $FeatureFlagSet;
        get packSource(): $PackSource;
        get fixedPosition(): boolean;
    }
    export class $BuiltInPackSource implements $RepositorySource {
        discoverPacksInPath(arg0: $Path_, arg1: $BiConsumer_<string, $Function<string, $Pack>>): void;
        getPackTitle(arg0: string): $Component;
        createBuiltinPack(arg0: string, arg1: $Pack$ResourcesSupplier, arg2: $Component_): $Pack;
        createVanillaPack(arg0: $PackResources): $Pack;
        populatePackList(arg0: $BiConsumer_<string, $Function<string, $Pack>>): void;
        static fixedResources(arg0: $PackResources): $Pack$ResourcesSupplier;
        loadPacks(arg0: $Consumer_<$Pack>): void;
        getVanillaPack(): $VanillaPackResources;
        static fromName(arg0: $Function_<$PackLocationInfo, $PackResources>): $Pack$ResourcesSupplier;
        handler$inn000$axiom$loadPacks(consumer: $Consumer_<any>, ci: $CallbackInfo): void;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(arg0: $PackType_, arg1: $VanillaPackResources, arg2: $ResourceLocation_, arg3: $DirectoryValidator);
        get vanillaPack(): $VanillaPackResources;
    }
}
