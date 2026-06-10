import { $Event } from "@package/net/neoforged/bus/api";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";

declare module "@package/com/lowdragmc/lowdraglib2/gui/event" {
    export class $ContainerMenuEvent$Create extends $ContainerMenuEvent {
        isRemote(): boolean;
        menu: $AbstractContainerMenu;
        player: $Player;
        constructor(arg0: $Player, arg1: $AbstractContainerMenu);
        get remote(): boolean;
    }
    export class $ContainerMenuEvent extends $Event {
        menu: $AbstractContainerMenu;
        player: $Player;
    }
}
