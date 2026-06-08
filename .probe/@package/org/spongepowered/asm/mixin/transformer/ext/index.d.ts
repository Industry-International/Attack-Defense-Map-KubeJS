import { $ISyntheticClassRegistry } from "@package/org/spongepowered/asm/service";
import { $List } from "@package/java/util";
import { $Class } from "@package/java/lang";

declare module "@package/org/spongepowered/asm/mixin/transformer/ext" {
    export class $IExtensionRegistry {
    }
    export interface $IExtensionRegistry {
        getExtensions(): $List<$IExtension>;
        getExtension<T extends $IExtension>(arg0: $Class<$IExtension>): T;
        getActiveExtensions(): $List<$IExtension>;
        getSyntheticClassRegistry(): $ISyntheticClassRegistry;
        get extensions(): $List<$IExtension>;
        get activeExtensions(): $List<$IExtension>;
        get syntheticClassRegistry(): $ISyntheticClassRegistry;
    }
}
