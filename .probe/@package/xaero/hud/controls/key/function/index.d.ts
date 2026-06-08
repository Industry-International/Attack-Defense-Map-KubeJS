
declare module "@package/xaero/hud/controls/key/function" {
    export class $KeyMappingFunction {
        onRelease(): void;
        onPress(): void;
        isHeld(): boolean;
        get held(): boolean;
    }
}
