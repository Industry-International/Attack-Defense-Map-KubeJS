import { $BiConsumer_ } from "@package/java/util/function";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $ResourceManagerReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $IBindingsProvider } from "@package/net/neoforged/fml";
export * as versions from "@package/net/neoforged/neoforge/internal/versions";

declare module "@package/net/neoforged/neoforge/internal" {
    export class $RegistrationEvents {
        static modifyComponents(): void;
        static canModifyComponents(): boolean;
        constructor();
    }
    export class $BrandingControl {
        static getServerBranding(): string;
        static resourceManagerReloadListener(): $ResourceManagerReloadListener;
        static forEachAboveCopyrightLine(arg0: $BiConsumer_<number, string>): void;
        static forEachLine(arg0: boolean, arg1: boolean, arg2: $BiConsumer_<number, string>): void;
        static getClientBranding(): string;
        constructor();
        static get serverBranding(): string;
        static get clientBranding(): string;
    }
    export class $NeoForgeBindings implements $IBindingsProvider {
        getGameBus(): $IEventBus;
        constructor();
        get gameBus(): $IEventBus;
    }
    export class $CommonModLoader {
        static areRegistriesLoaded(): boolean;
        constructor();
    }
}
