import { $List_, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/versioning" {
    export class $ArtifactVersion {
    }
    export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
        getMajorVersion(): number;
        getMinorVersion(): number;
        getIncrementalVersion(): number;
        parseVersion(arg0: string): void;
        getBuildNumber(): number;
        getQualifier(): string;
        get majorVersion(): number;
        get minorVersion(): number;
        get incrementalVersion(): number;
        get buildNumber(): number;
        get qualifier(): string;
    }
    export class $VersionRange {
        /**
         * @deprecated
         */
        cloneOf(): $VersionRange;
        restrict(arg0: $VersionRange): $VersionRange;
        static createFromVersionSpec(arg0: string): $VersionRange;
        getRecommendedVersion(): $ArtifactVersion;
        isSelectedVersionKnown(arg0: $Artifact): boolean;
        matchVersion(arg0: $List_<$ArtifactVersion>): $ArtifactVersion;
        containsVersion(arg0: $ArtifactVersion): boolean;
        getRestrictions(): $List<$Restriction>;
        hasRestrictions(): boolean;
        static createFromVersion(arg0: string): $VersionRange;
        getSelectedVersion(arg0: $Artifact): $ArtifactVersion;
        get recommendedVersion(): $ArtifactVersion;
        get restrictions(): $List<$Restriction>;
    }
    export class $Restriction {
        isUpperBoundInclusive(): boolean;
        isLowerBoundInclusive(): boolean;
        containsVersion(arg0: $ArtifactVersion): boolean;
        getUpperBound(): $ArtifactVersion;
        getLowerBound(): $ArtifactVersion;
        static EVERYTHING: $Restriction;
        constructor(arg0: $ArtifactVersion, arg1: boolean, arg2: $ArtifactVersion, arg3: boolean);
        get upperBoundInclusive(): boolean;
        get lowerBoundInclusive(): boolean;
        get upperBound(): $ArtifactVersion;
        get lowerBound(): $ArtifactVersion;
    }
}
