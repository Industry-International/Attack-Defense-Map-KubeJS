import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List_ } from "@package/java/util";

declare module "@package/net/blay09/mods/waystones/api/requirement" {
    export class $WarpRequirement {
    }
    export interface $WarpRequirement {
        isEmpty(): boolean;
        consume(arg0: $Player): void;
        canAfford(arg0: $Player): boolean;
        rollback(arg0: $Player): void;
        appendHoverText(arg0: $Player, arg1: $List_<$Component_>): void;
        get empty(): boolean;
    }
}
