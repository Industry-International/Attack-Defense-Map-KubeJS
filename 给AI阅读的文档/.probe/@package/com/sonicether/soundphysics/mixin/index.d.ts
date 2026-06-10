
declare module "@package/com/sonicether/soundphysics/mixin" {
    export class $ChannelAccessor {
    }
    export interface $ChannelAccessor {
        getSource(): number;
        get source(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChannelAccessor}.
     */
    export type $ChannelAccessor_ = (() => number);
}
