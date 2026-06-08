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
        getChecksumPolicy(): string;
        checkOutOfDate(arg0: $Date): boolean;
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
        setPassword(arg0: string): void;
        getPassword(): string;
        setUsername(arg0: string): void;
        getPrivateKey(): string;
        getUsername(): string;
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
        getLayout(): $ArtifactRepositoryLayout;
        getUrl(): string;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        setId(arg0: string): void;
        getReleases(): $ArtifactRepositoryPolicy;
        getSnapshots(): $ArtifactRepositoryPolicy;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        getProxy(): $Proxy;
        setUrl(arg0: string): void;
        isBlocked(): boolean;
        setProxy(arg0: $Proxy): void;
        setBlocked(arg0: boolean): void;
        pathOf(arg0: $Artifact): string;
        setAuthentication(arg0: $Authentication): void;
        getAuthentication(): $Authentication;
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
        getBasedir(): string;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        get key(): string;
        get protocol(): string;
        get releases(): $ArtifactRepositoryPolicy;
        get snapshots(): $ArtifactRepositoryPolicy;
        get uniqueVersion(): boolean;
        get projectAware(): boolean;
        get basedir(): string;
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
    }
}
