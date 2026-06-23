import { $KubeBlockEntity } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $JsonElement } from "@package/com/google/gson";
import { $Logger } from "@package/org/slf4j";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Dist_ } from "@package/net/neoforged/api/distmarker";
import { $BuildCreativeModeTabContentsEvent } from "@package/net/neoforged/neoforge/event";
import { $ClassNode } from "@package/org/objectweb/asm/tree";
import { $List, $Map, $Set_, $List_ } from "@package/java/util";
import { $KubeServerData_ } from "@package/dev/latvian/mods/kubejs/net";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $ExportablePackResources } from "@package/dev/latvian/mods/kubejs/script/data";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $BaseProperties } from "@package/dev/latvian/mods/kubejs/util";
import { $Path_, $Path } from "@package/java/nio/file";
import { $FMLLoadCompleteEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { $PackType_ } from "@package/net/minecraft/server/packs";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IMixinConfigPlugin, $IMixinInfo } from "@package/org/spongepowered/asm/mixin/extensibility";
import { $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $Runnable_, $Record } from "@package/java/lang";
import { $ConsoleLine, $ScriptType, $ScriptType_, $KubeJSContextFactory, $ScriptPack, $ScriptManager } from "@package/dev/latvian/mods/kubejs/script";
import { $ICapabilityProvider, $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as recipe from "@package/dev/latvian/mods/kubejs/recipe";
export * as item from "@package/dev/latvian/mods/kubejs/item";
export * as error from "@package/dev/latvian/mods/kubejs/error";
export * as script from "@package/dev/latvian/mods/kubejs/script";
export * as util from "@package/dev/latvian/mods/kubejs/util";
export * as net from "@package/dev/latvian/mods/kubejs/net";
export * as block from "@package/dev/latvian/mods/kubejs/block";
export * as client from "@package/dev/latvian/mods/kubejs/client";
export * as event from "@package/dev/latvian/mods/kubejs/event";
export * as registry from "@package/dev/latvian/mods/kubejs/registry";
export * as player from "@package/dev/latvian/mods/kubejs/player";
export * as entity from "@package/dev/latvian/mods/kubejs/entity";
export * as level from "@package/dev/latvian/mods/kubejs/level";
export * as core from "@package/dev/latvian/mods/kubejs/core";
export * as server from "@package/dev/latvian/mods/kubejs/server";
export * as component from "@package/dev/latvian/mods/kubejs/component";
export * as fluid from "@package/dev/latvian/mods/kubejs/fluid";
export * as codec from "@package/dev/latvian/mods/kubejs/codec";
export * as misc from "@package/dev/latvian/mods/kubejs/misc";
export * as plugin from "@package/dev/latvian/mods/kubejs/plugin";
export * as web from "@package/dev/latvian/mods/kubejs/web";
export * as gui from "@package/dev/latvian/mods/kubejs/gui";
export * as integration from "@package/dev/latvian/mods/kubejs/integration";
export * as color from "@package/dev/latvian/mods/kubejs/color";
export * as text from "@package/dev/latvian/mods/kubejs/text";
export * as holder from "@package/dev/latvian/mods/kubejs/holder";
export * as stages from "@package/dev/latvian/mods/kubejs/stages";
export * as typings from "@package/dev/latvian/mods/kubejs/typings";
export * as generator from "@package/dev/latvian/mods/kubejs/generator";
export * as command from "@package/dev/latvian/mods/kubejs/command";
export * as ingredient from "@package/dev/latvian/mods/kubejs/ingredient";

declare module "@package/dev/latvian/mods/kubejs" {
    export class $CommonProperties extends $BaseProperties {
        static get(): $CommonProperties;
        static reload(): void;
        getCreativeModeTabName(): $Component;
        getMaxSlotSize(original: number): number;
        getMaxStackSize(original: number): number;
        setPackMode(s: string): void;
        matchJsonRecipes: boolean;
        allowAsyncStreams: boolean;
        announceReload: boolean;
        packMode: string;
        removeSlotLimit: boolean;
        serverOnly: boolean;
        ignoreCustomUniqueRecipeIds: boolean;
        creativeModeTabIcon: $JsonElement;
        startupErrorGUI: boolean;
        hideServerScriptErrors: boolean;
        saveDevPropertiesInConfig: boolean;
        defaultMaxStackSize: number;
        creativeModeTabName: $JsonElement;
        startupErrorReportUrl: string;
    }
    export class $KubeJSComponents {
    }
    export interface $KubeJSComponents {
    }
    export class $KubeJS {
        static id(path: string): $ResourceLocation;
        static getClientScriptManager(): $ScriptManager;
        static getStartupScriptManager(): $ScriptManager;
        static thisMod: $ModContainer;
        static PROXY: $KubeJSCommon;
        static MC_VERSION_STRING: string;
        static QUERY: string;
        static MOD_ID: string;
        static MOD_NAME: string;
        static VERSION: string;
        static modEventBus: $IEventBus;
        static LOGGER: $Logger;
        static MC_VERSION_NUMBER: number;
        static DISPLAY_NAME: string;
        constructor(bus: $IEventBus, dist: $Dist_, mod: $ModContainer);
        static get clientScriptManager(): $ScriptManager;
        static get startupScriptManager(): $ScriptManager;
    }
    export class $KubeJSModEventHandler {
        static loadComplete(event: $FMLLoadCompleteEvent): void;
        static creativeTab(event: $BuildCreativeModeTabContentsEvent): void;
        static registerCapabilities(event: $RegisterCapabilitiesEvent): void;
        constructor();
    }
    export class $StartupScriptManager extends $ScriptManager {
        scriptType: $ScriptType;
        canListenEvents: boolean;
        packs: $Map<string, $ScriptPack>;
        contextFactory: $KubeJSContextFactory;
        constructor();
    }
    export class $KubeJSMixinPlugin implements $IMixinConfigPlugin {
        onLoad(mixinPackage: string): void;
        preApply(targetClassName: string, targetClass: $ClassNode, mixinClassName: string, mixinInfo: $IMixinInfo): void;
        getMixins(): $List<string>;
        postApply(targetClassName: string, targetClass: $ClassNode, mixinClassName: string, mixinInfo: $IMixinInfo): void;
        getRefMapperConfig(): string;
        shouldApplyMixin(targetClassName: string, mixinClassName: string): boolean;
        acceptTargets(myTargets: $Set_<string>, otherTargets: $Set_<string>): void;
        constructor();
        get mixins(): $List<string>;
        get refMapperConfig(): string;
    }
    export class $DevProperties extends $BaseProperties {
        static get(): $DevProperties;
        static reload(): void;
        logRegistryTypes: boolean;
        logSkippedTags: boolean;
        logSkippedRecipes: boolean;
        logRecipeDebug: boolean;
        logSkippedPlugins: boolean;
        strictTags: boolean;
        virtualPackOutput: boolean;
        logAddedRecipes: boolean;
        logRemovedRecipes: boolean;
        logModifiedRecipes: boolean;
        logInvalidRecipeHandlers: boolean;
        reloadOnFileSave: boolean;
        logGeneratedData: boolean;
        logErroringRecipes: boolean;
        logEventErrorStackTrace: boolean;
        alwaysCaptureErrors: boolean;
        openUriFormat: string;
        logRegistryEventObjects: boolean;
        logErroringParsedRecipes: boolean;
        logChangesInChat: boolean;
        kubedexSound: string;
    }
    export class $KubeJSPaths {
        static get(type: $PackType_): $Path;
        static dir(dir: $Path_, markFirstRun: boolean): $Path;
        static dir(dir: $Path_): $Path;
        static getLocalDevProperties(): $Path;
        static verifyFilePath(path: $Path_): $Path;
        static ASSETS: $Path;
        static CLIENT_PROPERTIES: $Path;
        static WEB_SERVER_PROPERTIES: $Path;
        static LOCAL_SERVER_SCRIPTS: $Path;
        static FIRST_RUN: $MutableBoolean;
        static EXPORT: $Path;
        static LOCAL_STARTUP_SCRIPTS: $Path;
        static CONFIG_DEV_PROPERTIES: $Path;
        static CONFIG: $Path;
        static EXPORTED_PACKS: $Path;
        static STARTUP_SCRIPTS: $Path;
        static DIRECTORY: $Path;
        static DATA: $Path;
        static COMMON_PROPERTIES: $Path;
        static SERVER_SCRIPTS: $Path;
        static CLIENT_SCRIPTS: $Path;
        static README: $Path;
        static LOCAL_DEV_PROPERTIES: $Path;
        static PACKICON: $Path;
        static LOCAL: $Path;
        static GAMEDIR: $Path;
        static get localDevProperties(): $Path;
    }
    export interface $KubeJSPaths {
    }
    export class $KubeJSModEventHandler$KubeEntityCapabilityProvider<CAP, SRC> extends $Record implements $ICapabilityProvider<$KubeBlockEntity, SRC, CAP> {
    }
    export class $KubeJSCommon {
        "export"(packs: $List_<$ExportablePackResources>): void;
        runInMainThread(runnable: $Runnable_): void;
        generateTypings(source: $CommandSourceStack): void;
        reloadConfig(): void;
        getClientPlayer(): $Player;
        updateServerData(data: $KubeServerData_): void;
        getWebServerWindowTitle(): string;
        reloadStartupScripts(dedicated: boolean): void;
        handleDataFromServerPacket(channel: string, data: $CompoundTag_): void;
        openErrors(type: $ScriptType_): void;
        openErrors(type: $ScriptType_, errors: $List_<$ConsoleLine>, warnings: $List_<$ConsoleLine>): void;
        constructor();
        get clientPlayer(): $Player;
        get webServerWindowTitle(): string;
    }
}
