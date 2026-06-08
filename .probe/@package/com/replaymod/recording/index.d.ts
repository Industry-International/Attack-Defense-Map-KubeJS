import { $ServerData } from "@package/net/minecraft/client/multiplayer";
export * as mixin from "@package/com/replaymod/recording/mixin";
export * as packet from "@package/com/replaymod/recording/packet";
export * as handler from "@package/com/replaymod/recording/handler";

declare module "@package/com/replaymod/recording" {
    export class $ServerInfoExt {
        static from(base: $ServerData): $ServerInfoExt;
    }
    export interface $ServerInfoExt {
        setAutoRecording(arg0: boolean): void;
        getAutoRecording(): boolean;
    }
}
