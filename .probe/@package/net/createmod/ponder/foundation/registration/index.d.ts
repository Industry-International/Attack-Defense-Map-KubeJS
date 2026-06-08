import { $InputStream } from "@package/java/io";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Multimap } from "@package/com/google/common/collect";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Collection_, $List, $Map, $Collection, $Map$Entry } from "@package/java/util";
import { $PonderSceneRegistryAccessor } from "@package/com/almostreliable/ponderjs/mixin";
import { $BiConsumer_ } from "@package/java/util/function";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SceneRegistryAccess, $LangRegistryAccess, $StoryBoardEntry } from "@package/net/createmod/ponder/api/registration";
import { $Object } from "@package/java/lang";
import { $PonderLevel } from "@package/net/createmod/ponder/api/level";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/net/createmod/ponder/foundation/registration" {
    export class $PonderLocalization implements $LangRegistryAccess {
        provideLang(arg0: string, arg1: $BiConsumer_<string, string>): void;
        getTagName(arg0: $ResourceLocation_): string;
        clearAll(): void;
        handler$gce000$ponderjs$getTagName(arg0: $ResourceLocation_, arg1: $CallbackInfoReturnable<any>): void;
        registerTag(arg0: $ResourceLocation_, arg1: string, arg2: string): void;
        handler$gce000$ponderjs$getTagDescription(arg0: $ResourceLocation_, arg1: $CallbackInfoReturnable<any>): void;
        handler$gce000$ponderjs$getSpecific(arg0: $ResourceLocation_, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        handler$gce000$ponderjs$getSpecific(arg0: $ResourceLocation_, arg1: string, arg2: $Object[], arg3: $CallbackInfoReturnable<any>): void;
        registerShared(arg0: $ResourceLocation_, arg1: string): void;
        registerSpecific(arg0: $ResourceLocation_, arg1: string, arg2: string): void;
        getTagDescription(arg0: $ResourceLocation_): string;
        getSpecific(arg0: $ResourceLocation_, arg1: string, ...arg2: $Object[]): string;
        getSpecific(arg0: $ResourceLocation_, arg1: string): string;
        generateSceneLang(): void;
        getShared(arg0: $ResourceLocation_, ...arg1: $Object[]): string;
        getShared(arg0: $ResourceLocation_): string;
        clearShared(): void;
        shared: $Map<$ResourceLocation, string>;
        static UI_PREFIX: string;
        tag: $Map<$ResourceLocation, $Couple<string>>;
        static LANG_PREFIX: string;
        specific: $Map<$ResourceLocation, $Map<string, string>>;
        constructor();
    }
    export class $PonderSceneRegistry implements $SceneRegistryAccess, $PonderSceneRegistryAccessor {
        compile(arg0: $Collection_<$StoryBoardEntry>): $List<$PonderScene>;
        compile(arg0: $ResourceLocation_): $List<$PonderScene>;
        getRegisteredEntries(): $Collection<$Map$Entry<$ResourceLocation, $StoryBoardEntry>>;
        static loadSchematic(arg0: $InputStream): $StructureTemplate;
        static loadSchematic(arg0: $ResourceLocation_): $StructureTemplate;
        static loadSchematic(arg0: $ResourceManager, arg1: $ResourceLocation_): $StructureTemplate;
        addStoryBoard(arg0: $StoryBoardEntry): void;
        doScenesExistForId(arg0: $ResourceLocation_): boolean;
        static compileScene(arg0: $PonderLocalization, arg1: $StoryBoardEntry, arg2: $PonderLevel): $PonderScene;
        clearRegistry(): void;
        ponderjs$scenes(): $Multimap<$ResourceLocation, $StoryBoardEntry>;
        constructor(arg0: $PonderLocalization);
        get registeredEntries(): $Collection<$Map$Entry<$ResourceLocation, $StoryBoardEntry>>;
    }
}
