
declare module "@package/net/fabricmc/fabric/mixin/event/interaction/client" {
    export class $KeyBindingAccessor {
    }
    export interface $KeyBindingAccessor {
        fabric_getTimesPressed(): number;
    }
    /**
     * Values that may be interpreted as {@link $KeyBindingAccessor}.
     */
    export type $KeyBindingAccessor_ = (() => number);
}
