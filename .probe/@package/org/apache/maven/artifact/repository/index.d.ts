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
        setUpdatePolicy(arg0: string): void;
        getUpdatePolicy(): string;
        setChecksumPolicy(arg0: string): void;
        checkOutOfDate(arg0: $Date): boolean;
        getChecksumPolicy(): string;
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
        getUsername(): string;
        setUsername(arg0: string): void;
        setPrivateKey(arg0: string): void;
        getPassphrase(): string;
        setPassphrase(arg0: string): void;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        getUrl(): string;
        getLayout(): $ArtifactRepositoryLayout;
        setId(arg0: string): void;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        getSnapshots(): $ArtifactRepositoryPolicy;
        getReleases(): $ArtifactRepositoryPolicy;
        isBlocked(): boolean;
        setUrl(arg0: string): void;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        getProxy(): $Proxy;
        setProxy(arg0: $Proxy): void;
        setBlocked(arg0: boolean): void;
        getBasedir(): string;
        pathOf(arg0: $Artifact): string;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        findVersions(arg0: $Artifact): $List<string>;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        setAuthentication(arg0: $Authentication): void;
        isProjectAware(): boolean;
        getAuthentication(): $Authentication;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        get key(): string;
        get protocol(): string;
        get snapshots(): $ArtifactRepositoryPolicy;
        get releases(): $ArtifactRepositoryPolicy;
        get basedir(): string;
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get uniqueVersion(): boolean;
        get projectAware(): boolean;
    }
}
