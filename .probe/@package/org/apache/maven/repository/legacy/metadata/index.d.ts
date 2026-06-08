import { $ArtifactRepository } from "@package/org/apache/maven/artifact/repository";
import { $Object } from "@package/java/lang";

declare module "@package/org/apache/maven/repository/legacy/metadata" {
    export class $ArtifactMetadata {
    }
    export interface $ArtifactMetadata {
        merge(arg0: $ArtifactMetadata): void;
        getKey(): $Object;
        getArtifactId(): string;
        getGroupId(): string;
        storedInGroupDirectory(): boolean;
        storeInLocalRepository(arg0: $ArtifactRepository, arg1: $ArtifactRepository): void;
        getLocalFilename(arg0: $ArtifactRepository): string;
        extendedToString(): string;
        getRemoteFilename(): string;
        getBaseVersion(): string;
        storedInArtifactVersionDirectory(): boolean;
        get key(): $Object;
        get artifactId(): string;
        get groupId(): string;
        get remoteFilename(): string;
        get baseVersion(): string;
    }
}
