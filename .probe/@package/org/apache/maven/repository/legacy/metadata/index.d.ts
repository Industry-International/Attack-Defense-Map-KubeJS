import { $ArtifactRepository } from "@package/org/apache/maven/artifact/repository";
import { $Object } from "@package/java/lang";

declare module "@package/org/apache/maven/repository/legacy/metadata" {
    export class $ArtifactMetadata {
    }
    export interface $ArtifactMetadata {
        merge(arg0: $ArtifactMetadata): void;
        getKey(): $Object;
        getGroupId(): string;
        getArtifactId(): string;
        extendedToString(): string;
        getLocalFilename(arg0: $ArtifactRepository): string;
        getRemoteFilename(): string;
        storedInArtifactVersionDirectory(): boolean;
        getBaseVersion(): string;
        storedInGroupDirectory(): boolean;
        storeInLocalRepository(arg0: $ArtifactRepository, arg1: $ArtifactRepository): void;
        get key(): $Object;
        get groupId(): string;
        get artifactId(): string;
        get remoteFilename(): string;
        get baseVersion(): string;
    }
}
