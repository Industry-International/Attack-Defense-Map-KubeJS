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
        getPaths(): $List<$Path>;
        getKind(): $ModOrigin$Kind;
        getParentSubLocation(): string;
        getParentModId(): string;
        get paths(): $List<$Path>;
        get kind(): $ModOrigin$Kind;
        get parentSubLocation(): string;
        get parentModId(): string;
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
        getDescription(): string;
        getName(): string;
        getId(): string;
        getType(): string;
        getVersion(): $Version;
        getEnvironment(): $ModEnvironment;
        /**
         * @deprecated
         */
        getDepends(): $Collection<$ModDependency>;
        getAuthors(): $Collection<$Person>;
        getContact(): $ContactInformation;
        /**
         * @deprecated
         */
        getBreaks(): $Collection<$ModDependency>;
        containsCustomValue(arg0: string): boolean;
        /**
         * @deprecated
         */
        containsCustomElement(arg0: string): boolean;
        getLicense(): $Collection<string>;
        getDependencies(): $Collection<$ModDependency>;
        getCustomValues(): $Map<string, $CustomValue>;
        getIconPath(arg0: number): (string) | undefined;
        getCustomValue(arg0: string): $CustomValue;
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
        /**
         * @deprecated
         */
        getConflicts(): $Collection<$ModDependency>;
        get description(): string;
        get name(): string;
        get id(): string;
        get type(): string;
        get version(): $Version;
        get environment(): $ModEnvironment;
        get depends(): $Collection<$ModDependency>;
        get authors(): $Collection<$Person>;
        get contact(): $ContactInformation;
        get breaks(): $Collection<$ModDependency>;
        get license(): $Collection<string>;
        get dependencies(): $Collection<$ModDependency>;
        get customValues(): $Map<string, $CustomValue>;
        get contributors(): $Collection<$Person>;
        get provides(): $Collection<string>;
        get recommends(): $Collection<$ModDependency>;
        get suggests(): $Collection<$ModDependency>;
        get conflicts(): $Collection<$ModDependency>;
    }
    export class $CustomValue {
    }
    export interface $CustomValue {
        getType(): $CustomValue$CvType;
        getAsBoolean(): boolean;
        getAsString(): string;
        getAsNumber(): $Number;
        getAsObject(): $CustomValue$CvObject;
        getAsArray(): $CustomValue$CvArray;
        get type(): $CustomValue$CvType;
        get asBoolean(): boolean;
        get asString(): string;
        get asNumber(): $Number;
        get asObject(): $CustomValue$CvObject;
        get asArray(): $CustomValue$CvArray;
    }
    export class $ModDependency {
    }
    export interface $ModDependency {
        matches(arg0: $Version): boolean;
        getVersionRequirements(): $Collection<$VersionPredicate>;
        getVersionIntervals(): $List<$VersionInterval>;
        getKind(): $ModDependency$Kind;
        getModId(): string;
        get versionRequirements(): $Collection<$VersionPredicate>;
        get versionIntervals(): $List<$VersionInterval>;
        get kind(): $ModDependency$Kind;
        get modId(): string;
    }
}
