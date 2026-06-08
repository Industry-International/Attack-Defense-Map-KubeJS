
declare module "@package/xaero/hud/controls/key/function" {
    export class $KeyMappingFunction {
        onPress(): void;
        onRelease(): void;
        isHeld(): boolean;
        get held(): boolean;
    }
}
