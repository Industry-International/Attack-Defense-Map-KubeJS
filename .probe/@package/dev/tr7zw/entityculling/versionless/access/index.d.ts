
declare module "@package/dev/tr7zw/entityculling/versionless/access" {
    export class $Cullable {
    }
    export interface $Cullable {
        setTimeout(): void;
        isForcedVisible(): boolean;
        isOutOfCamera(): boolean;
        setOutOfCamera(arg0: boolean): void;
        isCulled(): boolean;
        setCulled(arg0: boolean): void;
        get forcedVisible(): boolean;
    }
}
