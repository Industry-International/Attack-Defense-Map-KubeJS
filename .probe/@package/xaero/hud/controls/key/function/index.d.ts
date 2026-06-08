
declare module "@package/xaero/hud/controls/key/function" {
    export class $KeyMappingFunction {
        onPress(): void;
        isHeld(): boolean;
        onRelease(): void;
        get held(): boolean;
    }
}
