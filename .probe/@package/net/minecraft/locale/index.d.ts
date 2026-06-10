import { $InputStream } from "@package/java/io";
import { $BiConsumer_ } from "@package/java/util/function";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $List_, $Map, $List } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/locale" {
    export class $Language {
        static getInstance(): $Language;
        getOrDefault(arg0: string): string;
        getOrDefault(arg0: string, arg1: string): string;
        has(arg0: string): boolean;
        static loadFromJson(arg0: $InputStream, arg1: $BiConsumer_<string, string>, arg2: $BiConsumer_<string, $Component>): void;
        static loadFromJson(arg0: $InputStream, arg1: $BiConsumer_<string, string>): void;
        getLanguageData(): $Map<string, string>;
        getVisualOrder(arg0: $FormattedText): $FormattedCharSequence;
        getVisualOrder(texts: $List_<any>): $List<any>;
        getComponent(arg0: string): $Component;
        isDefaultRightToLeft(): boolean;
        static inject(arg0: $Language): void;
        static DEFAULT: string;
        constructor();
        static get instance(): $Language;
        get languageData(): $Map<string, string>;
        get defaultRightToLeft(): boolean;
    }
}
