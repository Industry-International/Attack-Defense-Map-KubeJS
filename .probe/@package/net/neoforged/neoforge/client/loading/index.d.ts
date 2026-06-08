import { $Supplier_, $IntConsumer_, $IntSupplier_, $Consumer_, $Supplier, $LongSupplier_, $LongSupplier } from "@package/java/util/function";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $LoadingOverlay } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ReloadInstance, $ReloadableResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Monitor } from "@package/com/mojang/blaze3d/platform";
import { $Throwable, $Runnable_, $Runnable } from "@package/java/lang";
import { $DisplayWindow } from "@package/net/neoforged/fml/earlydisplay";
import { $VersionChecker$Status } from "@package/net/neoforged/fml";
import { $CommonModLoader } from "@package/net/neoforged/neoforge/internal";

declare module "@package/net/neoforged/neoforge/client/loading" {
    export class $ClientModLoader extends $CommonModLoader {
        static begin(arg0: $Minecraft, arg1: $PackRepository, arg2: $ReloadableResourceManager): void;
        static isLoading(): boolean;
        static completeModLoading(arg0: $Runnable_): $Runnable;
        static checkForUpdates(): $VersionChecker$Status;
        constructor();
        static get loading(): boolean;
    }
    export class $NeoForgeLoadingOverlay extends $LoadingOverlay {
        static newInstance(arg0: $Supplier_<$Minecraft>, arg1: $Supplier_<$ReloadInstance>, arg2: $Consumer_<($Throwable) | undefined>, arg3: $DisplayWindow): $Supplier<$LoadingOverlay>;
        static FADE_OUT_TIME: number;
        static MOJANG_STUDIOS_LOGO_LOCATION: $ResourceLocation;
        static FADE_IN_TIME: number;
        constructor(arg0: $Minecraft, arg1: $ReloadInstance, arg2: $Consumer_<($Throwable) | undefined>, arg3: $DisplayWindow);
    }
    export class $NoVizFallback {
        static glVersion(): string;
        static loadingOverlay(arg0: $Supplier_<$Minecraft>, arg1: $Supplier_<$ReloadInstance>, arg2: $Consumer_<($Throwable) | undefined>, arg3: boolean): $Supplier<$LoadingOverlay>;
        static windowPositioning(arg0: ($Monitor) | undefined, arg1: $IntConsumer_, arg2: $IntConsumer_, arg3: $IntConsumer_, arg4: $IntConsumer_): boolean;
        static windowHandoff(arg0: $IntSupplier_, arg1: $IntSupplier_, arg2: $Supplier_<string>, arg3: $LongSupplier_): $LongSupplier;
        constructor();
    }
}
