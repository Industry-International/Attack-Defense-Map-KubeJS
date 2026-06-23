
declare module "@package/dev/tr7zw/entityculling/versionless/access" {
    export class $Cullable {
    }
    export interface $Cullable {
        setTimeout(): void;
        isCulled(): boolean;
        setCulled(arg0: boolean): void;
        isOutOfCamera(): boolean;
        setOutOfCamera(arg0: boolean): void;
        isForcedVisible(): boolean;
        get forcedVisible(): boolean;
    }
}
