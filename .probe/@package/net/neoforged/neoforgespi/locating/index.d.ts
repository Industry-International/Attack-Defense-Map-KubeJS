import { $File_ } from "@package/java/io";
import { $Supplier } from "@package/java/util/function";
import { $ModFileScanData, $IModFileInfo, $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Level } from "@package/org/slf4j/event";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $List, $Map, $List_ } from "@package/java/util";
import { $SecureJar$Status_, $SecureJar, $JarContents } from "@package/cpw/mods/jarhandling";
import { $ModLoadingIssue$Severity } from "@package/net/neoforged/fml";
import { $IIssueReporting, $ILaunchContext } from "@package/net/neoforged/neoforgespi";

declare module "@package/net/neoforged/neoforgespi/locating" {
    export class $IDiscoveryPipeline {
    }
    export interface $IDiscoveryPipeline extends $IIssueReporting {
        addPath(arg0: $Path_, arg1: $ModFileDiscoveryAttributes_, arg2: $IncompatibleFileReporting_): ($IModFile) | undefined;
        addPath(arg0: $List_<$Path_>, arg1: $ModFileDiscoveryAttributes_, arg2: $IncompatibleFileReporting_): ($IModFile) | undefined;
        readModFile(arg0: $JarContents, arg1: $ModFileDiscoveryAttributes_): $IModFile;
        addJarContent(arg0: $JarContents, arg1: $ModFileDiscoveryAttributes_, arg2: $IncompatibleFileReporting_): ($IModFile) | undefined;
        addModFile(arg0: $IModFile): boolean;
    }
    export class $IOrderedProvider {
        static HIGHEST_SYSTEM_PRIORITY: number;
        static LOWEST_SYSTEM_PRIORITY: number;
        static DEFAULT_PRIORITY: number;
    }
    export interface $IOrderedProvider {
        getPriority(): number;
        get priority(): number;
    }
    export class $IModFileReader {
    }
    export interface $IModFileReader extends $IOrderedProvider {
        read(arg0: $JarContents, arg1: $ModFileDiscoveryAttributes_): $IModFile;
    }
    /**
     * Values that may be interpreted as {@link $IModFileReader}.
     */
    export type $IModFileReader_ = ((arg0: $JarContents, arg1: $ModFileDiscoveryAttributes) => $IModFile);
    export class $IDependencyLocator {
    }
    export interface $IDependencyLocator extends $IOrderedProvider {
        scanMods(arg0: $List_<$IModFile>, arg1: $IDiscoveryPipeline): void;
    }
    /**
     * Values that may be interpreted as {@link $IDependencyLocator}.
     */
    export type $IDependencyLocator_ = ((arg0: $List<$IModFile>, arg1: $IDiscoveryPipeline) => void);
    export class $IModFile$Type extends $Enum<$IModFile$Type> {
        static values(): $IModFile$Type[];
        static valueOf(arg0: string): $IModFile$Type;
        static MOD: $IModFile$Type;
        static GAMELIBRARY: $IModFile$Type;
        static LIBRARY: $IModFile$Type;
    }
    /**
     * Values that may be interpreted as {@link $IModFile$Type}.
     */
    export type $IModFile$Type_ = "mod" | "library" | "gamelibrary";
    export class $ForgeFeature$Bound extends $Record {
        bound<T>(): T;
        featureName(): string;
        modInfo(): $IModInfo;
        featureBound(): string;
        constructor(featureName: string, featureBound: string, modInfo: $IModInfo);
    }
    export class $ModFileInfoParser {
    }
    export interface $ModFileInfoParser {
        build(arg0: $IModFile): $IModFileInfo;
    }
    /**
     * Values that may be interpreted as {@link $ModFileInfoParser}.
     */
    export type $ModFileInfoParser_ = ((arg0: $IModFile) => $IModFileInfo);
    export class $IModFile {
        static create(arg0: $SecureJar, arg1: $ModFileInfoParser_): $IModFile;
        static create(arg0: $SecureJar, arg1: $ModFileInfoParser_, arg2: $ModFileDiscoveryAttributes_): $IModFile;
        static create(arg0: $SecureJar, arg1: $ModFileInfoParser_, arg2: $IModFile$Type_, arg3: $ModFileDiscoveryAttributes_): $IModFile;
    }
    export interface $IModFile {
        findResource(...arg0: string[]): $Path;
        getType(): $IModFile$Type;
        getFileName(): string;
        getFilePath(): $Path;
        getDiscoveryAttributes(): $ModFileDiscoveryAttributes;
        getScanResult(): $ModFileScanData;
        setSecurityStatus(arg0: $SecureJar$Status_): void;
        getSubstitutionMap(): $Supplier<$Map<string, $Object>>;
        getSecureJar(): $SecureJar;
        getModFileInfo(): $IModFileInfo;
        getModInfos(): $List<$IModInfo>;
        get type(): $IModFile$Type;
        get fileName(): string;
        get filePath(): $Path;
        get discoveryAttributes(): $ModFileDiscoveryAttributes;
        get scanResult(): $ModFileScanData;
        set securityStatus(value: $SecureJar$Status_);
        get substitutionMap(): $Supplier<$Map<string, $Object>>;
        get secureJar(): $SecureJar;
        get modFileInfo(): $IModFileInfo;
        get modInfos(): $List<$IModInfo>;
    }
    export class $IncompatibleFileReporting extends $Enum<$IncompatibleFileReporting> {
        static values(): $IncompatibleFileReporting[];
        static valueOf(arg0: string): $IncompatibleFileReporting;
        getIssueSeverity(): $ModLoadingIssue$Severity;
        getLogLevel(): $Level;
        static WARN_ALWAYS: $IncompatibleFileReporting;
        static ERROR: $IncompatibleFileReporting;
        static IGNORE: $IncompatibleFileReporting;
        static WARN_ON_KNOWN_INCOMPATIBILITY: $IncompatibleFileReporting;
        get issueSeverity(): $ModLoadingIssue$Severity;
        get logLevel(): $Level;
    }
    /**
     * Values that may be interpreted as {@link $IncompatibleFileReporting}.
     */
    export type $IncompatibleFileReporting_ = "error" | "warn_always" | "warn_on_known_incompatibility" | "ignore";
    export class $IModFileCandidateLocator {
        static forFolder(arg0: $File_, arg1: string): $IModFileCandidateLocator;
    }
    export interface $IModFileCandidateLocator extends $IOrderedProvider {
        findCandidates(arg0: $ILaunchContext, arg1: $IDiscoveryPipeline): void;
    }
    /**
     * Values that may be interpreted as {@link $IModFileCandidateLocator}.
     */
    export type $IModFileCandidateLocator_ = ((arg0: $ILaunchContext, arg1: $IDiscoveryPipeline) => void);
    export class $ModFileDiscoveryAttributes extends $Record {
        parent(): $IModFile;
        merge(arg0: $ModFileDiscoveryAttributes_): $ModFileDiscoveryAttributes;
        reader(): $IModFileReader;
        locator(): $IModFileCandidateLocator;
        withDependencyLocator(arg0: $IDependencyLocator_): $ModFileDiscoveryAttributes;
        dependencyLocator(): $IDependencyLocator;
        withParent(arg0: $IModFile): $ModFileDiscoveryAttributes;
        withReader(arg0: $IModFileReader_): $ModFileDiscoveryAttributes;
        withLocator(arg0: $IModFileCandidateLocator_): $ModFileDiscoveryAttributes;
        static DEFAULT: $ModFileDiscoveryAttributes;
        constructor(parent: $IModFile, reader: $IModFileReader_, locator: $IModFileCandidateLocator_, dependencyLocator: $IDependencyLocator_);
    }
}
