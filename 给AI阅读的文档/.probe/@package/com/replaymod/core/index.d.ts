import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $EventRegistrations } from "@package/de/johni0702/minecraft/gui/utils";
import { $ReplayFoldersService, $ReplayFilesService } from "@package/com/replaymod/core/files";
import { $FMLConstructModEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { $PathPackResources } from "@package/net/minecraft/server/packs";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Scheduler } from "@package/com/replaymod/core/versions/scheduler";
import { $Minecraft, $KeyMapping } from "@package/net/minecraft/client";
import { $Map, $Set } from "@package/java/util";
import { $Runnable_, $Object, $Class } from "@package/java/lang";
import { $GuiBackgroundProcesses } from "@package/com/replaymod/core/gui";
import { $RegisterKeyMappingsEvent } from "@package/net/neoforged/neoforge/client/event";
export * as versions from "@package/com/replaymod/core/versions";
export * as mixin from "@package/com/replaymod/core/mixin";
export * as files from "@package/com/replaymod/core/files";
export * as gui from "@package/com/replaymod/core/gui";

declare module "@package/com/replaymod/core" {
    export class $SettingsRegistry$SettingKey<T> {
    }
    export interface $SettingsRegistry$SettingKey<T> {
        getDefault(): T;
        getKey(): string;
        getDisplayString(): string;
        getCategory(): string;
        get default(): T;
        get key(): string;
        get displayString(): string;
        get category(): string;
    }
    export class $SettingsRegistry {
        get<T>(key: $SettingsRegistry$SettingKey<T>): T;
        register(key: $SettingsRegistry$SettingKey<never>): void;
        register(): void;
        register(settingsClass: $Class<never>): void;
        set<T>(key: $SettingsRegistry$SettingKey<T>, value: T): void;
        save(): void;
        getSettings(): $Set<$SettingsRegistry$SettingKey<never>>;
        constructor();
        get settings(): $Set<$SettingsRegistry$SettingKey<never>>;
    }
    export class $ReplayModBackend {
        getVersion(): string;
        static construct(event: $FMLConstructModEvent): void;
        isModLoaded(id: string): boolean;
        getMinecraftVersion(): string;
        constructor();
        get version(): string;
        get minecraftVersion(): string;
    }
    export class $KeyBindingRegistry$Binding {
        trigger(): void;
        isBound(): boolean;
        isAutoActivating(): boolean;
        setAutoActivating(active: boolean): void;
        registerAutoActivationSupport(active: boolean, update: $Consumer_<boolean>): void;
        getBoundKey(): string;
        supportsAutoActivation(): boolean;
        keyBinding: $KeyMapping;
        name: string;
        constructor(this$0: $KeyBindingRegistry, name: string, keyBinding: $KeyMapping);
        get bound(): boolean;
        get boundKey(): string;
    }
    export class $ReplayMod implements $Module, $Scheduler {
        getVersion(): string;
        getSettingsRegistry(): $SettingsRegistry;
        isModLoaded(id: string): boolean;
        registerKeyBindings(registry: $KeyBindingRegistry): void;
        runLaterWithoutLock(runnable: $Runnable_): void;
        getMinecraftVersion(): string;
        getBackgroundProcesses(): $GuiBackgroundProcesses;
        printWarningToChat(message: string, ...args: $Object[]): void;
        printInfoToChat(message: string, ...args: $Object[]): void;
        static isMinimalMode(): boolean;
        runPostStartup(runnable: $Runnable_): void;
        static isCompatible(fileFormatVersion: number, protocolVersion: number): boolean;
        getMinecraft(): $Minecraft;
        runSync(runnable: $Runnable_): void;
        runLater(runnable: $Runnable_): void;
        runTasks(): void;
        initClient(): void;
        getKeyBindingRegistry(): $KeyBindingRegistry;
        initCommon(): void;
        static TEXTURE_SIZE: number;
        static TEXTURE: $ResourceLocation;
        static instance: $ReplayMod;
        folders: $ReplayFoldersService;
        static jGuiResourcePack: $PathPackResources;
        static MOD_ID: string;
        static LOGO_FAVICON: $ResourceLocation;
        files: $ReplayFilesService;
        static JGUI_RESOURCE_PACK_NAME: string;
        constructor(backend: $ReplayModBackend);
        get version(): string;
        get settingsRegistry(): $SettingsRegistry;
        get minecraftVersion(): string;
        get backgroundProcesses(): $GuiBackgroundProcesses;
        static get minimalMode(): boolean;
        get minecraft(): $Minecraft;
        get keyBindingRegistry(): $KeyBindingRegistry;
    }
    export class $Module {
    }
    export interface $Module {
        initCommon(): void;
        registerKeyBindings(registry: $KeyBindingRegistry): void;
        initClient(): void;
    }
    export class $KeyBindingRegistry extends $EventRegistrations {
        registerRepeatedKeyBinding(name: string, keyCode: number, whenPressed: $Runnable_, onlyInRepay: boolean): $KeyBindingRegistry$Binding;
        handleRepeatedKeyBindings(): void;
        getBindings(): $Map<string, $KeyBindingRegistry$Binding>;
        getOnlyInReplay(): $Set<$KeyMapping>;
        registerRaw(keyCode: number, whenPressed: $Supplier_<boolean>): void;
        registerKeyBinding(name: string, keyCode: number, whenPressed: $Runnable_, onlyInRepay: boolean): $KeyBindingRegistry$Binding;
        static registerKeybinds(event: $RegisterKeyMappingsEvent): void;
        constructor();
        get bindings(): $Map<string, $KeyBindingRegistry$Binding>;
        get onlyInReplay(): $Set<$KeyMapping>;
    }
}
