import { $ArtifactRepository } from "@package/org/apache/maven/artifact/repository";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";

declare module "@package/org/apache/maven/artifact/repository/layout" {
    export class $ArtifactRepositoryLayout {
        static ROLE: string;
    }
    export interface $ArtifactRepositoryLayout {
        getId(): string;
        pathOf(arg0: $Artifact): string;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        get id(): string;
    }
}
