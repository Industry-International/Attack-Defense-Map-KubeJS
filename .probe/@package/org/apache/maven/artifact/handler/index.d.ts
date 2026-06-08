
declare module "@package/org/apache/maven/artifact/handler" {
    export class $ArtifactHandler {
        static ROLE: string;
    }
    export interface $ArtifactHandler {
        getLanguage(): string;
        getExtension(): string;
        getClassifier(): string;
        getDirectory(): string;
        getPackaging(): string;
        isAddedToClasspath(): boolean;
        isIncludesDependencies(): boolean;
        get language(): string;
        get extension(): string;
        get classifier(): string;
        get directory(): string;
        get packaging(): string;
        get addedToClasspath(): boolean;
        get includesDependencies(): boolean;
    }
}
