import { $List_, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/versioning" {
    export class $ArtifactVersion {
    }
    export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
        getMajorVersion(): number;
        getMinorVersion(): number;
        getQualifier(): string;
        parseVersion(arg0: string): void;
        getBuildNumber(): number;
        getIncrementalVersion(): number;
        get majorVersion(): number;
        get minorVersion(): number;
        get qualifier(): string;
        get buildNumber(): number;
        get incrementalVersion(): number;
    }
    export class $VersionRange {
        getRestrictions(): $List<$Restriction>;
        static createFromVersion(arg0: string): $VersionRange;
        containsVersion(arg0: $ArtifactVersion): boolean;
        hasRestrictions(): boolean;
        getSelectedVersion(arg0: $Artifact): $ArtifactVersion;
        matchVersion(arg0: $List_<$ArtifactVersion>): $ArtifactVersion;
        isSelectedVersionKnown(arg0: $Artifact): boolean;
        restrict(arg0: $VersionRange): $VersionRange;
        /**
         * @deprecated
         */
        cloneOf(): $VersionRange;
        getRecommendedVersion(): $ArtifactVersion;
        static createFromVersionSpec(arg0: string): $VersionRange;
        get restrictions(): $List<$Restriction>;
        get recommendedVersion(): $ArtifactVersion;
    }
    export class $Restriction {
        containsVersion(arg0: $ArtifactVersion): boolean;
        getLowerBound(): $ArtifactVersion;
        getUpperBound(): $ArtifactVersion;
        isUpperBoundInclusive(): boolean;
        isLowerBoundInclusive(): boolean;
        static EVERYTHING: $Restriction;
        constructor(arg0: $ArtifactVersion, arg1: boolean, arg2: $ArtifactVersion, arg3: boolean);
        get lowerBound(): $ArtifactVersion;
        get upperBound(): $ArtifactVersion;
        get upperBoundInclusive(): boolean;
        get lowerBoundInclusive(): boolean;
    }
}
