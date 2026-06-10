import { $Set, $List } from "@package/java/util";
import { $Comparable, $Enum } from "@package/java/lang";
import { $J_L_Record } from "@package/com/replaymod/replaystudio/lib/xyz/wagyourtail/jvmdg/j16/stub/java_base";

declare module "@package/com/replaymod/replaystudio/lib/viaversion/api/protocol/version" {
    export class $VersionType extends $Enum<$VersionType> {
        static values(): $VersionType[];
        static valueOf(name: string): $VersionType;
        static BETA_INITIAL: $VersionType;
        static RELEASE_INITIAL: $VersionType;
        static RELEASE: $VersionType;
        static ALPHA_INITIAL: $VersionType;
        static SPECIAL: $VersionType;
        static CLASSIC: $VersionType;
        static ALPHA_LATER: $VersionType;
        static BETA_LATER: $VersionType;
    }
    /**
     * Values that may be interpreted as {@link $VersionType}.
     */
    export type $VersionType_ = "classic" | "alpha_initial" | "alpha_later" | "beta_initial" | "beta_later" | "release_initial" | "release" | "special";
    export class $SubVersionRange extends $J_L_Record {
        baseVersion(): string;
        rangeTo(): number;
        rangeFrom(): number;
        constructor(baseVersion: string, rangeFrom: number, rangeTo: number);
    }
    export class $ProtocolVersion implements $Comparable<$ProtocolVersion> {
        getName(): string;
        compareTo(other: $ProtocolVersion): number;
        static isRegistered(version: number): boolean;
        static isRegistered(versionType: $VersionType_, version: number): boolean;
        static register(version: number, name: string): $ProtocolVersion;
        static register(version: number, name: string, versionRange: $SubVersionRange): $ProtocolVersion;
        static register(protocolVersion: $ProtocolVersion): void;
        static register(version: number, snapshotVersion: number, name: string): $ProtocolVersion;
        static getProtocol(version: number): $ProtocolVersion;
        static getProtocol(versionType: $VersionType_, version: number): $ProtocolVersion;
        /**
         * @deprecated
         */
        static getIndex(version: $ProtocolVersion): number;
        getVersion(): number;
        isKnown(): boolean;
        betweenInclusive(min: $ProtocolVersion, max: $ProtocolVersion): boolean;
        getSnapshotVersion(): number;
        olderThanOrEqualTo(other: $ProtocolVersion): boolean;
        getOriginalVersion(): number;
        isVersionWildcard(): boolean;
        newerThanOrEqualTo(other: $ProtocolVersion): boolean;
        betweenExclusive(min: $ProtocolVersion, max: $ProtocolVersion): boolean;
        equalTo(other: $ProtocolVersion): boolean;
        static getProtocols(): $List<$ProtocolVersion>;
        newerThan(other: $ProtocolVersion): boolean;
        isRange(): boolean;
        olderThan(other: $ProtocolVersion): boolean;
        static getClosest(protocol: string): $ProtocolVersion;
        getVersionType(): $VersionType;
        isSnapshot(): boolean;
        getFullSnapshotVersion(): number;
        getIncludedVersions(): $Set<string>;
        static v1_8: $ProtocolVersion;
        static v1_9: $ProtocolVersion;
        static unknown: $ProtocolVersion;
        static v1_7_6: $ProtocolVersion;
        static v1_16_4: $ProtocolVersion;
        static v1_18_2: $ProtocolVersion;
        static v1_19_1: $ProtocolVersion;
        static v1_9_2: $ProtocolVersion;
        static v1_14_4: $ProtocolVersion;
        static v1_16_2: $ProtocolVersion;
        static v1_17_1: $ProtocolVersion;
        static v1_9_3: $ProtocolVersion;
        static v1_16_3: $ProtocolVersion;
        static v1_14_2: $ProtocolVersion;
        static v1_15_1: $ProtocolVersion;
        static v1_20: $ProtocolVersion;
        static v1_14_3: $ProtocolVersion;
        static v1_15_2: $ProtocolVersion;
        static v1_16_1: $ProtocolVersion;
        static v1_21: $ProtocolVersion;
        static v1_12_2: $ProtocolVersion;
        static v1_13_1: $ProtocolVersion;
        static v1_13_2: $ProtocolVersion;
        static v1_14_1: $ProtocolVersion;
        static v1_11_1: $ProtocolVersion;
        static v1_12_1: $ProtocolVersion;
        static v1_7_2: $ProtocolVersion;
        static v1_9_1: $ProtocolVersion;
        /**
         * @deprecated
         */
        static v1_7_1: $ProtocolVersion;
        static v1_19_3: $ProtocolVersion;
        static v1_19_4: $ProtocolVersion;
        static v1_13: $ProtocolVersion;
        static v1_14: $ProtocolVersion;
        static v1_11: $ProtocolVersion;
        static v1_12: $ProtocolVersion;
        static v1_10: $ProtocolVersion;
        static v1_20_5: $ProtocolVersion;
        static v1_20_3: $ProtocolVersion;
        static v1_19: $ProtocolVersion;
        static v1_20_2: $ProtocolVersion;
        static v1_17: $ProtocolVersion;
        static v1_18: $ProtocolVersion;
        static v1_15: $ProtocolVersion;
        static v1_16: $ProtocolVersion;
        constructor(versionType: $VersionType_, version: number, snapshotVersion: number, name: string, versionRange: $SubVersionRange);
        get name(): string;
        get version(): number;
        get known(): boolean;
        get snapshotVersion(): number;
        get originalVersion(): number;
        get versionWildcard(): boolean;
        static get protocols(): $List<$ProtocolVersion>;
        get range(): boolean;
        get versionType(): $VersionType;
        get snapshot(): boolean;
        get fullSnapshotVersion(): number;
        get includedVersions(): $Set<string>;
    }
}
