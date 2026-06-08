import { $EnvType_ } from "@package/net/fabricmc/api";
import { $Path } from "@package/java/nio/file";
import { $Version } from "@package/net/fabricmc/loader/api";
import { $List, $Map, $Map$Entry, $Collection } from "@package/java/util";
import { $VersionPredicate, $VersionInterval } from "@package/net/fabricmc/loader/api/metadata/version";
import { $Iterable, $Number, $Enum } from "@package/java/lang";
export * as version from "@package/net/fabricmc/loader/api/metadata/version";

declare module "@package/net/fabricmc/loader/api/metadata" {
    export class $ModOrigin {
    }
    export interface $ModOrigin {
        getKind(): $ModOrigin$Kind;
        getPaths(): $List<$Path>;
        getParentModId(): string;
        getParentSubLocation(): string;
        get kind(): $ModOrigin$Kind;
        get paths(): $List<$Path>;
        get parentModId(): string;
        get parentSubLocation(): string;
    }
    export class $CustomValue$CvObject {
    }
    export interface $CustomValue$CvObject extends $CustomValue, $Iterable<$Map$Entry<string, $CustomValue>> {
        size(): number;
        get(arg0: string): $CustomValue;
        containsKey(arg0: string): boolean;
    }
    export class $Person {
    }
    export interface $Person {
        getName(): string;
        getContact(): $ContactInformation;
        get name(): string;
        get contact(): $ContactInformation;
    }
    export class $ModDependency$Kind extends $Enum<$ModDependency$Kind> {
        static values(): $ModDependency$Kind[];
        static valueOf(name: string): $ModDependency$Kind;
        getKey(): string;
        static parse(key: string): $ModDependency$Kind;
        isPositive(): boolean;
        isSoft(): boolean;
        static CONFLICTS: $ModDependency$Kind;
        static RECOMMENDS: $ModDependency$Kind;
        static BREAKS: $ModDependency$Kind;
        static DEPENDS: $ModDependency$Kind;
        static SUGGESTS: $ModDependency$Kind;
        get key(): string;
        get positive(): boolean;
        get soft(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ModDependency$Kind}.
     */
    export type $ModDependency$Kind_ = "depends" | "recommends" | "suggests" | "conflicts" | "breaks";
    export class $ContactInformation {
        static EMPTY: $ContactInformation;
    }
    export interface $ContactInformation {
        get(arg0: string): (string) | undefined;
        asMap(): $Map<string, string>;
    }
    export class $CustomValue$CvArray {
    }
    export interface $CustomValue$CvArray extends $CustomValue, $Iterable<$CustomValue> {
        size(): number;
        get(arg0: number): $CustomValue;
    }
    export class $ModOrigin$Kind extends $Enum<$ModOrigin$Kind> {
        static values(): $ModOrigin$Kind[];
        static valueOf(name: string): $ModOrigin$Kind;
        static PATH: $ModOrigin$Kind;
        static NESTED: $ModOrigin$Kind;
        static UNKNOWN: $ModOrigin$Kind;
    }
    /**
     * Values that may be interpreted as {@link $ModOrigin$Kind}.
     */
    export type $ModOrigin$Kind_ = "path" | "nested" | "unknown";
    export class $CustomValue$CvType extends $Enum<$CustomValue$CvType> {
        static values(): $CustomValue$CvType[];
        static valueOf(name: string): $CustomValue$CvType;
        static NUMBER: $CustomValue$CvType;
        static ARRAY: $CustomValue$CvType;
        static NULL: $CustomValue$CvType;
        static STRING: $CustomValue$CvType;
        static OBJECT: $CustomValue$CvType;
        static BOOLEAN: $CustomValue$CvType;
    }
    /**
     * Values that may be interpreted as {@link $CustomValue$CvType}.
     */
    export type $CustomValue$CvType_ = "object" | "array" | "string" | "number" | "boolean" | "null";
    export class $ModEnvironment extends $Enum<$ModEnvironment> {
        static values(): $ModEnvironment[];
        static valueOf(name: string): $ModEnvironment;
        matches(type: $EnvType_): boolean;
        static UNIVERSAL: $ModEnvironment;
        static SERVER: $ModEnvironment;
        static CLIENT: $ModEnvironment;
    }
    /**
     * Values that may be interpreted as {@link $ModEnvironment}.
     */
    export type $ModEnvironment_ = "client" | "server" | "universal";
    export class $ModMetadata {
    }
    export interface $ModMetadata {
        getName(): string;
        getId(): string;
        getType(): string;
        getVersion(): $Version;
        getEnvironment(): $ModEnvironment;
        getContributors(): $Collection<$Person>;
        getProvides(): $Collection<string>;
        /**
         * @deprecated
         */
        getRecommends(): $Collection<$ModDependency>;
        /**
         * @deprecated
         */
        getSuggests(): $Collection<$ModDependency>;
        getCustomValue(arg0: string): $CustomValue;
        /**
         * @deprecated
         */
        getConflicts(): $Collection<$ModDependency>;
        getCustomValues(): $Map<string, $CustomValue>;
        getIconPath(arg0: number): (string) | undefined;
        containsCustomValue(arg0: string): boolean;
        /**
         * @deprecated
         */
        containsCustomElement(arg0: string): boolean;
        /**
         * @deprecated
         */
        getDepends(): $Collection<$ModDependency>;
        /**
         * @deprecated
         */
        getBreaks(): $Collection<$ModDependency>;
        getAuthors(): $Collection<$Person>;
        getContact(): $ContactInformation;
        getLicense(): $Collection<string>;
        getDependencies(): $Collection<$ModDependency>;
        getDescription(): string;
        get name(): string;
        get id(): string;
        get type(): string;
        get version(): $Version;
        get environment(): $ModEnvironment;
        get contributors(): $Collection<$Person>;
        get provides(): $Collection<string>;
        get recommends(): $Collection<$ModDependency>;
        get suggests(): $Collection<$ModDependency>;
        get conflicts(): $Collection<$ModDependency>;
        get customValues(): $Map<string, $CustomValue>;
        get depends(): $Collection<$ModDependency>;
        get breaks(): $Collection<$ModDependency>;
        get authors(): $Collection<$Person>;
        get contact(): $ContactInformation;
        get license(): $Collection<string>;
        get dependencies(): $Collection<$ModDependency>;
        get description(): string;
    }
    export class $CustomValue {
    }
    export interface $CustomValue {
        getType(): $CustomValue$CvType;
        getAsBoolean(): boolean;
        getAsObject(): $CustomValue$CvObject;
        getAsString(): string;
        getAsArray(): $CustomValue$CvArray;
        getAsNumber(): $Number;
        get type(): $CustomValue$CvType;
        get asBoolean(): boolean;
        get asObject(): $CustomValue$CvObject;
        get asString(): string;
        get asArray(): $CustomValue$CvArray;
        get asNumber(): $Number;
    }
    export class $ModDependency {
    }
    export interface $ModDependency {
        matches(arg0: $Version): boolean;
        getVersionIntervals(): $List<$VersionInterval>;
        getVersionRequirements(): $Collection<$VersionPredicate>;
        getKind(): $ModDependency$Kind;
        getModId(): string;
        get versionIntervals(): $List<$VersionInterval>;
        get versionRequirements(): $Collection<$VersionPredicate>;
        get kind(): $ModDependency$Kind;
        get modId(): string;
    }
}
