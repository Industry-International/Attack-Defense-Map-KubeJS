import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $InfoDisplayManagerConfigData } from "@package/xaero/hud/minimap/common/config/info/config";
import { $List_, $Map_, $List } from "@package/java/util";
import { $InfoDisplayRenderer } from "@package/xaero/hud/minimap/info/render";
export * as render from "@package/xaero/hud/minimap/info/render";

declare module "@package/xaero/hud/minimap/info" {
    export class $InfoDisplays {
        getManager(): $InfoDisplayManager;
        getRenderer(): $InfoDisplayRenderer;
        clearStateCache(): void;
        getIo(): $InfoDisplayIO;
        constructor(arg0: $InfoDisplayIO);
        get manager(): $InfoDisplayManager;
        get renderer(): $InfoDisplayRenderer;
        get io(): $InfoDisplayIO;
    }
    export class $InfoDisplayManager {
        get(arg0: string): $InfoDisplay<never>;
        add(arg0: $InfoDisplay<never>): void;
        getCount(): number;
        getStream(): $Stream<$InfoDisplay<never>>;
        getLocalConfig(): $InfoDisplayManagerConfigData;
        applyLocalConfig(): void;
        getEnforcedConfig(): $InfoDisplayManagerConfigData;
        clearStateCache(): void;
        getOrderedStream(): $Stream<$InfoDisplay<never>>;
        getDefaultOrder(): $List<string>;
        adaptOrder(arg0: $Stream<string>): $List<string>;
        constructor(arg0: $Map_<string, $InfoDisplay<never>>, arg1: $List_<string>, arg2: $List_<string>, arg3: $Supplier_<$InfoDisplayManagerConfigData>, arg4: $Consumer_<$InfoDisplayManagerConfigData>, arg5: $Supplier_<$InfoDisplayManagerConfigData>);
        get count(): number;
        get stream(): $Stream<$InfoDisplay<never>>;
        get localConfig(): $InfoDisplayManagerConfigData;
        get enforcedConfig(): $InfoDisplayManagerConfigData;
        get orderedStream(): $Stream<$InfoDisplay<never>>;
        get defaultOrder(): $List<string>;
    }
    export class $InfoDisplayIO {
        decode(arg0: string): $InfoDisplayManagerConfigData;
        encode(arg0: $InfoDisplayManagerConfigData): string;
        constructor();
    }
}
