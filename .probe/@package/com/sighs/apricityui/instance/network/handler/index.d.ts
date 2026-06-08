import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/com/sighs/apricityui/instance/network/handler" {
    export class $BindingBuilder {
        entity(arg0: string): $BindingBuilder;
        entity(arg0: $Entity): $BindingBuilder;
        player(): $BindingBuilder;
        savedData(arg0: string): $BindingBuilder;
        savedData(arg0: string, arg1: number): $BindingBuilder;
        savedData(arg0: string, arg1: string, arg2: number): $BindingBuilder;
        savedData(): $BindingBuilder;
        blockEntity(arg0: $BlockPos_, arg1: $Direction_): $BindingBuilder;
        blockEntity(arg0: $BlockPos_): $BindingBuilder;
        saveddata(arg0: string): $BindingBuilder;
        saveddata(arg0: string, arg1: number): $BindingBuilder;
        saveddata(): $BindingBuilder;
    }
    export class $PendingMenu {
        bind(arg0: $Consumer_<$BindingBuilder>): void;
        constructor(arg0: $ServerPlayer, arg1: string);
    }
}
