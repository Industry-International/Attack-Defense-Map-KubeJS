import { $List_, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/versioning" {
    export class $ArtifactVersion {
    }
    export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
        getMajorVersion(): number;
        getMinorVersion(): number;
        parseVersion(arg0: string): void;
        getIncrementalVersion(): number;
        getQualifier(): string;
        getBuildNumber(): number;
        get majorVersion(): number;
        get minorVersion(): number;
        get incrementalVersion(): number;
        get qualifier(): string;
        get buildNumber(): number;
    }
    export class $VersionRange {
        /**
         * @deprecated
         */
        cloneOf(): $VersionRange;
        restrict(arg0: $VersionRange): $VersionRange;
        getRecommendedVersion(): $ArtifactVersion;
        static createFromVersionSpec(arg0: string): $VersionRange;
        isSelectedVersionKnown(arg0: $Artifact): boolean;
        containsVersion(arg0: $ArtifactVersion): boolean;
        getSelectedVersion(arg0: $Artifact): $ArtifactVersion;
        static createFromVersion(arg0: string): $VersionRange;
        hasRestrictions(): boolean;
        getRestrictions(): $List<$Restriction>;
        matchVersion(arg0: $List_<$ArtifactVersion>): $ArtifactVersion;
        get recommendedVersion(): $ArtifactVersion;
        get restrictions(): $List<$Restriction>;
    }
    export class $Restriction {
        isUpperBoundInclusive(): boolean;
        isLowerBoundInclusive(): boolean;
        containsVersion(arg0: $ArtifactVersion): boolean;
        getLowerBound(): $ArtifactVersion;
        getUpperBound(): $ArtifactVersion;
        static EVERYTHING: $Restriction;
        constructor(arg0: $ArtifactVersion, arg1: boolean, arg2: $ArtifactVersion, arg3: boolean);
        get upperBoundInclusive(): boolean;
        get lowerBoundInclusive(): boolean;
        get lowerBound(): $ArtifactVersion;
        get upperBound(): $ArtifactVersion;
    }
}
