
declare module "@package/xaero/hud/controls/key/function" {
    export class $KeyMappingFunction {
        onRelease(): void;
        isHeld(): boolean;
        onPress(): void;
        get held(): boolean;
    }
}
