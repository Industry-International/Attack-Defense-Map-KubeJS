import { $ExecutionCommandSource } from "@package/net/minecraft/commands";
import { $UnboundEntryAction, $UnboundEntryAction_ } from "@package/net/minecraft/commands/execution";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $StringReader, $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $CharSequence, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/net/minecraft/commands/functions" {
    export class $MacroFunction<T extends $ExecutionCommandSource<T>> implements $CommandFunction<T> {
        id(): $ResourceLocation;
        instantiate(arg0: $CompoundTag_, arg1: $CommandDispatcher<T>): $InstantiatedFunction<T>;
        constructor(arg0: $ResourceLocation_, arg1: $List_<$MacroFunction$Entry<T>>, arg2: $List_<string>);
    }
    export class $CommandFunction<T> {
        static parseCommand<T extends $ExecutionCommandSource<T>>(arg0: $CommandDispatcher<T>, arg1: T, arg2: $StringReader): $UnboundEntryAction<T>;
        static checkCommandLineLength(arg0: $CharSequence): void;
        static fromLines<T extends $ExecutionCommandSource<T>>(arg0: $ResourceLocation_, arg1: $CommandDispatcher<T>, arg2: T, arg3: $List_<string>): $CommandFunction<T>;
    }
    export interface $CommandFunction<T> {
        id(): $ResourceLocation;
        instantiate(arg0: $CompoundTag_, arg1: $CommandDispatcher<T>): $InstantiatedFunction<T>;
    }
    export class $MacroFunction$Entry<T> {
    }
    export interface $MacroFunction$Entry<T> {
    }
    export class $InstantiatedFunction<T> {
    }
    export interface $InstantiatedFunction<T> {
        id(): $ResourceLocation;
        entries(): $List<$UnboundEntryAction<T>>;
    }
    export class $StringTemplate extends $Record {
        static fromString(arg0: string, arg1: number): $StringTemplate;
        segments(): $List<string>;
        substitute(arg0: $List_<string>): string;
        variables(): $List<string>;
        constructor(arg0: $List_<string>, arg1: $List_<string>);
    }
    export class $MacroFunction$PlainTextEntry<T> implements $MacroFunction$Entry<T> {
    }
    export class $FunctionBuilder<T extends $ExecutionCommandSource<T>> {
    }
    export class $MacroFunction$MacroEntry<T extends $ExecutionCommandSource<T>> implements $MacroFunction$Entry<T> {
    }
    export class $PlainTextFunction<T> extends $Record implements $CommandFunction<T>, $InstantiatedFunction<T> {
        id(): $ResourceLocation;
        entries(): $List<$UnboundEntryAction<T>>;
        instantiate(arg0: $CompoundTag_, arg1: $CommandDispatcher<T>): $InstantiatedFunction<T>;
        constructor(arg0: $ResourceLocation_, arg1: $List_<$UnboundEntryAction_<T>>);
    }
}
