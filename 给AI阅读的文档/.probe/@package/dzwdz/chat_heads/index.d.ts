import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Record } from "@package/java/lang";
export * as mixininterface from "@package/dzwdz/chat_heads/mixininterface";

declare module "@package/dzwdz/chat_heads" {
    export class $HeadData extends $Record {
        hasHeadPosition(): boolean;
        static of(playerInfo: $PlayerInfo): $HeadData;
        playerInfo(): $PlayerInfo;
        codePointIndex(): number;
        static EMPTY: $HeadData;
        constructor(playerInfo: $PlayerInfo, codePointIndex: number);
    }
}
