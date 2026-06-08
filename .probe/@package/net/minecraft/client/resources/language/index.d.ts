import { $Codec } from "@package/com/mojang/serialization";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $Language } from "@package/net/minecraft/locale";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $SortedMap, $List_, $Locale, $Map, $Collection } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/client/resources/language" {
    export class $I18n {
        static get(arg0: string, ...arg1: $Object[]): string;
        static exists(arg0: string): boolean;
        static setLanguage(arg0: $Language): void;
        static language: $Language;
    }
    export class $LanguageManager implements $ResourceManagerReloadListener, $IdentifiableResourceReloadListener {
        getLanguage(arg0: string): $LanguageInfo;
        getSelected(): string;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getJavaLocale(): $Locale;
        setSelected(arg0: string): void;
        getLanguages(): $SortedMap<string, $LanguageInfo>;
        handler$iok001$axiom$onReload(resourceManager: $ResourceManager, ci: $CallbackInfo): void;
        onResourceManagerReload(arg0: $ResourceManager): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor(arg0: string, arg1: $Consumer_<$ClientLanguage>);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get javaLocale(): $Locale;
        get languages(): $SortedMap<string, $LanguageInfo>;
        get name(): string;
    }
    export class $ClientLanguage extends $Language {
        static loadFrom(arg0: $ResourceManager, arg1: $List_<string>, arg2: boolean): $ClientLanguage;
        storage: $Map<string, string>;
        static DEFAULT: string;
    }
    export class $FormattedBidiReorder {
        static reorder(text: $FormattedText, defaultRtl: boolean): $FormattedCharSequence;
        constructor();
    }
    export class $LanguageInfo extends $Record {
        name(): string;
        region(): string;
        toComponent(): $Component;
        bidirectional(): boolean;
        static CODEC: $Codec<$LanguageInfo>;
        constructor(arg0: string, arg1: string, arg2: boolean);
    }
}
