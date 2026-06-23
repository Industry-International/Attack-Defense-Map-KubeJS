import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
        setEnabled(arg0: boolean): void;
        setChecksumPolicy(arg0: string): void;
        getChecksumPolicy(): string;
        checkOutOfDate(arg0: $Date): boolean;
        setUpdatePolicy(arg0: string): void;
        getUpdatePolicy(): string;
        static CHECKSUM_POLICY_IGNORE: string;
        static UPDATE_POLICY_DAILY: string;
        static CHECKSUM_POLICY_FAIL: string;
        static UPDATE_POLICY_NEVER: string;
        static CHECKSUM_POLICY_WARN: string;
        static UPDATE_POLICY_INTERVAL: string;
        static UPDATE_POLICY_ALWAYS: string;
        constructor(arg0: boolean, arg1: string, arg2: string);
        constructor(arg0: $ArtifactRepositoryPolicy);
        constructor();
    }
    export class $Authentication {
        getPassword(): string;
        setPassword(arg0: string): void;
        getPrivateKey(): string;
        setUsername(arg0: string): void;
        getUsername(): string;
        setPassphrase(arg0: string): void;
        getPassphrase(): string;
        setPrivateKey(arg0: string): void;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        getProxy(): $Proxy;
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        setProxy(arg0: $Proxy): void;
        setId(arg0: string): void;
        getUrl(): string;
        getLayout(): $ArtifactRepositoryLayout;
        setUrl(arg0: string): void;
        pathOf(arg0: $Artifact): string;
        getReleases(): $ArtifactRepositoryPolicy;
        getSnapshots(): $ArtifactRepositoryPolicy;
        setBlocked(arg0: boolean): void;
        isBlocked(): boolean;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        setAuthentication(arg0: $Authentication): void;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        findVersions(arg0: $Artifact): $List<string>;
        isProjectAware(): boolean;
        getAuthentication(): $Authentication;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        getBasedir(): string;
        get key(): string;
        get protocol(): string;
        get releases(): $ArtifactRepositoryPolicy;
        get snapshots(): $ArtifactRepositoryPolicy;
        get uniqueVersion(): boolean;
        get projectAware(): boolean;
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get basedir(): string;
    }
}
