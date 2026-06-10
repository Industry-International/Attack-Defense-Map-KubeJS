import { $Profiler } from "@package/org/spongepowered/asm/util/perf";
import { $RemapperChain } from "@package/org/spongepowered/asm/obfuscation";
import { $ITransformer } from "@package/org/spongepowered/asm/service";
import { $IEnvironmentTokenProvider } from "@package/org/spongepowered/asm/mixin/extensibility";
import { $IMixinTransformer } from "@package/org/spongepowered/asm/mixin/transformer";
import { $ITokenProvider } from "@package/org/spongepowered/asm/util";
import { $List, $Set } from "@package/java/util";
import { $Object, $Enum } from "@package/java/lang";
export * as extensibility from "@package/org/spongepowered/asm/mixin/extensibility";
export * as transformer from "@package/org/spongepowered/asm/mixin/transformer";
export * as injection from "@package/org/spongepowered/asm/mixin/injection";

declare module "@package/org/spongepowered/asm/mixin" {
    export class $MixinEnvironment$Phase {
        static forName(arg0: string): $MixinEnvironment$Phase;
        static INIT: $MixinEnvironment$Phase;
        static PREINIT: $MixinEnvironment$Phase;
        static DEFAULT: $MixinEnvironment$Phase;
    }
    export class $MixinEnvironment$Option extends $Enum<$MixinEnvironment$Option> {
        static values(): $MixinEnvironment$Option[];
        static valueOf(arg0: string): $MixinEnvironment$Option;
        static DEBUG_EXPORT_FILTER: $MixinEnvironment$Option;
        static DEBUG_UNIQUE: $MixinEnvironment$Option;
        static REFMAP_REMAP_RESOURCE: $MixinEnvironment$Option;
        static DEBUG_EXPORT_DECOMPILE_THREADED: $MixinEnvironment$Option;
        static TUNABLE: $MixinEnvironment$Option;
        static CHECK_ALL: $MixinEnvironment$Option;
        static ENVIRONMENT: $MixinEnvironment$Option;
        static REFMAP_REMAP: $MixinEnvironment$Option;
        static OBFUSCATION_TYPE: $MixinEnvironment$Option;
        static DEBUG_STRICT: $MixinEnvironment$Option;
        static SHIFT_BY_VIOLATION_BEHAVIOUR: $MixinEnvironment$Option;
        static DEBUG_EXPORT_DECOMPILE_MERGESIGNATURES: $MixinEnvironment$Option;
        static DEBUG_VERIFY: $MixinEnvironment$Option;
        static DEBUG_INJECTORS: $MixinEnvironment$Option;
        static DEBUG_PROFILER: $MixinEnvironment$Option;
        static IGNORE_REQUIRED: $MixinEnvironment$Option;
        static DEBUG_EXPORT: $MixinEnvironment$Option;
        static DEBUG_VERBOSE: $MixinEnvironment$Option;
        static IGNORE_CONSTRAINTS: $MixinEnvironment$Option;
        static REFMAP_REMAP_SOURCE_ENV: $MixinEnvironment$Option;
        static CHECK_IMPLEMENTS: $MixinEnvironment$Option;
        static CLASSREADER_EXPAND_FRAMES: $MixinEnvironment$Option;
        static REFMAP_REMAP_ALLOW_PERMISSIVE: $MixinEnvironment$Option;
        static INITIALISER_INJECTION_MODE: $MixinEnvironment$Option;
        static CHECK_IMPLEMENTS_STRICT: $MixinEnvironment$Option;
        static DEFAULT_COMPATIBILITY_LEVEL: $MixinEnvironment$Option;
        static DISABLE_REFMAP: $MixinEnvironment$Option;
        static DUMP_TARGET_ON_FAILURE: $MixinEnvironment$Option;
        static DEBUG_ALL: $MixinEnvironment$Option;
        static DEBUG_EXPORT_DECOMPILE: $MixinEnvironment$Option;
        static DEBUG_TARGETS: $MixinEnvironment$Option;
        static HOT_SWAP: $MixinEnvironment$Option;
    }
    /**
     * Values that may be interpreted as {@link $MixinEnvironment$Option}.
     */
    export type $MixinEnvironment$Option_ = "debug_all" | "debug_export" | "debug_export_filter" | "debug_export_decompile" | "debug_export_decompile_threaded" | "debug_export_decompile_mergesignatures" | "debug_verify" | "debug_verbose" | "debug_injectors" | "debug_strict" | "debug_unique" | "debug_targets" | "debug_profiler" | "dump_target_on_failure" | "check_all" | "check_implements" | "check_implements_strict" | "ignore_constraints" | "hot_swap" | "environment" | "obfuscation_type" | "disable_refmap" | "refmap_remap" | "refmap_remap_resource" | "refmap_remap_source_env" | "refmap_remap_allow_permissive" | "ignore_required" | "default_compatibility_level" | "shift_by_violation_behaviour" | "initialiser_injection_mode" | "tunable" | "classreader_expand_frames";
    export class $MixinEnvironment$Side extends $Enum<$MixinEnvironment$Side> {
        static values(): $MixinEnvironment$Side[];
        static valueOf(arg0: string): $MixinEnvironment$Side;
        static SERVER: $MixinEnvironment$Side;
        static UNKNOWN: $MixinEnvironment$Side;
        static CLIENT: $MixinEnvironment$Side;
    }
    /**
     * Values that may be interpreted as {@link $MixinEnvironment$Side}.
     */
    export type $MixinEnvironment$Side_ = "unknown" | "client" | "server";
    export class $MixinEnvironment implements $ITokenProvider {
        audit(): void;
        static init(arg0: $MixinEnvironment$Phase): void;
        getVersion(): string;
        static getEnvironment(arg0: $MixinEnvironment$Phase): $MixinEnvironment;
        /**
         * @deprecated
         */
        getTransformers(): $List<$ITransformer>;
        getToken(arg0: string): number;
        getRemappers(): $RemapperChain;
        /**
         * @deprecated
         */
        getMixinConfigs(): $List<string>;
        getOptionValue(arg0: $MixinEnvironment$Option_): string;
        /**
         * @deprecated
         */
        addConfiguration(arg0: string): $MixinEnvironment;
        /**
         * @deprecated
         */
        static getProfiler(): $Profiler;
        /**
         * @deprecated
         */
        addTransformerExclusion(arg0: string): void;
        static getMinCompatibilityLevel(): $MixinEnvironment$CompatibilityLevel;
        static getCurrentEnvironment(): $MixinEnvironment;
        static getCompatibilityLevel(): $MixinEnvironment$CompatibilityLevel;
        /**
         * @deprecated
         */
        static setCompatibilityLevel(arg0: $MixinEnvironment$CompatibilityLevel_): void;
        getActiveTransformer(): $Object;
        setActiveTransformer(arg0: $IMixinTransformer): void;
        /**
         * @deprecated
         */
        getErrorHandlerClasses(): $Set<string>;
        registerTokenProvider(arg0: $IEnvironmentTokenProvider): $MixinEnvironment;
        static getDefaultEnvironment(): $MixinEnvironment;
        registerTokenProviderClass(arg0: string): $MixinEnvironment;
        setObfuscationContext(arg0: string): void;
        getObfuscationContext(): string;
        getPhase(): $MixinEnvironment$Phase;
        getSide(): $MixinEnvironment$Side;
        setSide(arg0: $MixinEnvironment$Side_): $MixinEnvironment;
        getRefmapObfuscationContext(): string;
        setOption(arg0: $MixinEnvironment$Option_, arg1: boolean): void;
        getOption(arg0: $MixinEnvironment$Option_): boolean;
        getOption<E extends $Enum<E>>(arg0: $MixinEnvironment$Option_, arg1: E): E;
        get version(): string;
        get transformers(): $List<$ITransformer>;
        get remappers(): $RemapperChain;
        get mixinConfigs(): $List<string>;
        static get profiler(): $Profiler;
        static get minCompatibilityLevel(): $MixinEnvironment$CompatibilityLevel;
        static get currentEnvironment(): $MixinEnvironment;
        get errorHandlerClasses(): $Set<string>;
        static get defaultEnvironment(): $MixinEnvironment;
        get phase(): $MixinEnvironment$Phase;
        get refmapObfuscationContext(): string;
    }
    export class $MixinEnvironment$CompatibilityLevel extends $Enum<$MixinEnvironment$CompatibilityLevel> {
        static values(): $MixinEnvironment$CompatibilityLevel[];
        static valueOf(arg0: string): $MixinEnvironment$CompatibilityLevel;
        /**
         * @deprecated
         */
        classVersion(): number;
        getClassVersion(): number;
        canElevateTo(arg0: $MixinEnvironment$CompatibilityLevel_): boolean;
        static getMaxEffective(): $MixinEnvironment$CompatibilityLevel;
        static requiredFor(arg0: number): $MixinEnvironment$CompatibilityLevel;
        supports(arg0: number): boolean;
        /**
         * @deprecated
         */
        supportsMethodsInInterfaces(): boolean;
        getClassMajorVersion(): number;
        getLanguageFeatures(): number;
        isLessThan(arg0: $MixinEnvironment$CompatibilityLevel_): boolean;
        isAtLeast(arg0: $MixinEnvironment$CompatibilityLevel_): boolean;
        canSupport(arg0: $MixinEnvironment$CompatibilityLevel_): boolean;
        static JAVA_20: $MixinEnvironment$CompatibilityLevel;
        static JAVA_12: $MixinEnvironment$CompatibilityLevel;
        static JAVA_13: $MixinEnvironment$CompatibilityLevel;
        static JAVA_10: $MixinEnvironment$CompatibilityLevel;
        static JAVA_21: $MixinEnvironment$CompatibilityLevel;
        static JAVA_11: $MixinEnvironment$CompatibilityLevel;
        static JAVA_22: $MixinEnvironment$CompatibilityLevel;
        static JAVA_16: $MixinEnvironment$CompatibilityLevel;
        static JAVA_17: $MixinEnvironment$CompatibilityLevel;
        static JAVA_14: $MixinEnvironment$CompatibilityLevel;
        static JAVA_15: $MixinEnvironment$CompatibilityLevel;
        static JAVA_18: $MixinEnvironment$CompatibilityLevel;
        static JAVA_19: $MixinEnvironment$CompatibilityLevel;
        static JAVA_7: $MixinEnvironment$CompatibilityLevel;
        static JAVA_8: $MixinEnvironment$CompatibilityLevel;
        static JAVA_6: $MixinEnvironment$CompatibilityLevel;
        static JAVA_9: $MixinEnvironment$CompatibilityLevel;
        static DEFAULT: $MixinEnvironment$CompatibilityLevel;
        static MAX_SUPPORTED: $MixinEnvironment$CompatibilityLevel;
        static get maxEffective(): $MixinEnvironment$CompatibilityLevel;
        get classMajorVersion(): number;
        get languageFeatures(): number;
    }
    /**
     * Values that may be interpreted as {@link $MixinEnvironment$CompatibilityLevel}.
     */
    export type $MixinEnvironment$CompatibilityLevel_ = "java_6" | "java_7" | "java_8" | "java_9" | "java_10" | "java_11" | "java_12" | "java_13" | "java_14" | "java_15" | "java_16" | "java_17" | "java_18" | "java_19" | "java_20" | "java_21" | "java_22";
}
