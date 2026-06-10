import { $PrintWriter, $BufferedReader } from "@package/java/io";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";

declare module "@package/xaero/common/server/level" {
    export class $LevelMapProperties {
        write(arg0: $FriendlyByteBuf): void;
        write(arg0: $PrintWriter): void;
        read(arg0: $BufferedReader): void;
        static read(arg0: $FriendlyByteBuf): $LevelMapProperties;
        getId(): number;
        isUsable(): boolean;
        setUsable(arg0: boolean): void;
        constructor();
        get id(): number;
    }
}
