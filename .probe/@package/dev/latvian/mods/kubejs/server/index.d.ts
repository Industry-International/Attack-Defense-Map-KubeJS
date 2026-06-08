import { $JsonElement_ } from "@package/com/google/gson";
import { $MinecraftServer, $ReloadableServerResources } from "@package/net/minecraft/server";
import { $Callable_, $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $List_, $Map, $Set } from "@package/java/util";
import { $SyncServerDataPayload } from "@package/dev/latvian/mods/kubejs/net";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ItemEntityPickupEvent$Pre } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ScheduledEvents$ScheduledEvent, $ScheduledEvents } from "@package/dev/latvian/mods/kubejs/util";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $RecipeSchemaStorage } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $Throwable, $Record, $Object } from "@package/java/lang";
import { $LevelEvent$Save, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $KubeJSContextFactory, $ScriptManager, $ScriptType, $ScriptPack } from "@package/dev/latvian/mods/kubejs/script";
import { $Level } from "@package/net/minecraft/world/level";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $PreTagKubeEvent } from "@package/dev/latvian/mods/kubejs/server/tag";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $RegisterCommandsEvent, $CommandEvent, $AddReloadListenerEvent } from "@package/net/neoforged/neoforge/event";
import { $ServerScriptManagerAccessor } from "@package/com/lowdragmc/lowdraglib2/core/mixins/kjs";
import { $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $VirtualDataPack, $GeneratedDataStage } from "@package/dev/latvian/mods/kubejs/script/data";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $AdditionalObjectRegistry } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ServerAboutToStartEvent, $ServerStoppingEvent, $ServerStoppedEvent, $ServerStartingEvent } from "@package/net/neoforged/neoforge/event/server";
export * as tag from "@package/dev/latvian/mods/kubejs/server/tag";

declare module "@package/dev/latvian/mods/kubejs/server" {
    export class $KubeJSReloadListener extends $Record implements $ResourceManagerReloadListener {
        resources(): $ReloadableServerResources;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor(resources: $ReloadableServerResources);
        get name(): string;
    }
    export class $DataExport {
        add(path: string, data: $Callable_<number[]>): void;
        static exportData(): void;
        addJson(path: string, json: $JsonElement_): void;
        addString(path: string, data: string): void;
        source: $CommandSourceStack;
        constructor();
    }
    export class $ServerScriptManager extends $ScriptManager implements $ServerScriptManagerAccessor {
        static release(): $ServerScriptManager;
        static createPackResources(original: $List_<$PackResources>): $List<$PackResources>;
        static createForDataGen(): $ServerScriptManager;
        reloadAndCapture(): void;
        static getStaticInstance$ldlib2_$md$d64506$0(): $ServerScriptManager;
        virtualPacks: $Map<$GeneratedDataStage, $VirtualDataPack>;
        scriptType: $ScriptType;
        registriesDataPack: $VirtualDataPack;
        serverRegistryTags: $Map<$ResourceLocation, $Set<$ResourceLocation>>;
        internalDataPack: $VirtualDataPack;
        canListenEvents: boolean;
        recipeSchemaStorage: $RecipeSchemaStorage;
        firstLoad: boolean;
        packs: $Map<string, $ScriptPack>;
        preTagEvents: $Map<$ResourceKey<never>, $PreTagKubeEvent>;
        serverData: $SyncServerDataPayload;
        contextFactory: $KubeJSContextFactory;
        static get staticInstance$ldlib2_$md$d64506$0(): $ServerScriptManager;
    }
    export class $ScheduledServerEvent extends $ScheduledEvents$ScheduledEvent {
        getServer(): $MinecraftServer;
        timer: number;
        static EVENTS: $ScheduledEvents;
        repeating: boolean;
        scheduledEvents: $ScheduledEvents;
        id: number;
        endTime: number;
        ofTicks: boolean;
        constructor();
        get server(): $MinecraftServer;
    }
    export class $ChangesForChat {
        static print(out: $Consumer_<$Component>): void;
        static recipesModified: number;
        static recipesRemoved: number;
        static recipesMs: number;
        static recipesAdded: number;
        constructor();
    }
    export class $ServerScriptManager$AdditionalServerRegistryHandler extends $Record implements $AdditionalObjectRegistry {
    }
    export class $CommandKubeEvent extends $ServerKubeEvent {
        getException(): $Throwable;
        setException(exception: $Throwable): void;
        getInput(): string;
        getParseResults(): $ParseResults<$CommandSourceStack>;
        setParseResults(parse: $ParseResults<$CommandSourceStack>): void;
        getCommandName(): string;
        server: $MinecraftServer;
        constructor(event: $CommandEvent);
        get input(): string;
        get commandName(): string;
    }
    export class $BasicCommandKubeEvent implements $KubeEntityEvent {
        getId(): string;
        getLevel(): $Level;
        getEntity(): $Entity;
        getBlock(): $LevelBlock;
        getPlayer(): $ServerPlayer;
        respondLazily(text: $Supplier_<$Component>, informAdmins: boolean): void;
        respond(text: $Component_): void;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        input: string;
        id: string;
        constructor(source: $CommandSourceStack, id: string, input: string);
        get level(): $Level;
        get entity(): $Entity;
        get block(): $LevelBlock;
        get player(): $ServerPlayer;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $ServerKubeEvent implements $KubeEvent {
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        server: $MinecraftServer;
        constructor(s: $MinecraftServer);
    }
    export class $KubeJSServerEventHandler {
        static command(event: $CommandEvent): void;
        static serverStopping(event: $ServerStoppingEvent): void;
        static serverStarting(event: $ServerStartingEvent): void;
        static registerCommands(event: $RegisterCommandsEvent): void;
        static serverStopped(event: $ServerStoppedEvent): void;
        static serverLevelSaved(event: $LevelEvent$Save): void;
        static serverBeforeStart(event: $ServerAboutToStartEvent): void;
        static serverLevelLoaded(event: $LevelEvent$Load): void;
        static addReloadListeners(event: $AddReloadListenerEvent): void;
        static preventPickupDuringChestGUI(event: $ItemEntityPickupEvent$Pre): void;
        constructor();
    }
}
