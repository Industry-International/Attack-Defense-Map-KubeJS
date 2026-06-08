import { $ChatFormatting_ } from "@package/net/minecraft";
import { $MutableComponent, $Component_, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List_ } from "@package/java/util";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Object } from "@package/java/lang";

declare module "@package/net/createmod/catnip/lang" {
    export class $LangBuilder {
        add(arg0: $LangBuilder): $LangBuilder;
        add(arg0: $MutableComponent_): $LangBuilder;
        add(arg0: $Component_): $LangBuilder;
        component(): $MutableComponent;
        newLine(): $LangBuilder;
        color(arg0: number): $LangBuilder;
        color(arg0: $Color): $LangBuilder;
        string(): string;
        text(arg0: number, arg1: string): $LangBuilder;
        text(arg0: $ChatFormatting_, arg1: string): $LangBuilder;
        text(arg0: string): $LangBuilder;
        space(): $LangBuilder;
        style(arg0: $ChatFormatting_): $LangBuilder;
        addTo(arg0: $List_<$MutableComponent_>): void;
        json(): string;
        forGoggles(arg0: $List_<$MutableComponent_>, arg1: number): void;
        forGoggles(arg0: $List_<$MutableComponent_>): void;
        sendChat(arg0: $Player): void;
        translate(arg0: string, ...arg1: $Object[]): $LangBuilder;
        sendStatus(arg0: $Player): void;
        static resolveBuilders(arg0: $Object[]): $Object[];
        static DEFAULT_SPACE_WIDTH: number;
        constructor(arg0: string);
    }
}
