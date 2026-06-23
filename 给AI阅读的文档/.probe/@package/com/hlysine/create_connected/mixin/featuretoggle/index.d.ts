import { $CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters_ } from "@package/net/minecraft/world/item";

declare module "@package/com/hlysine/create_connected/mixin/featuretoggle" {
    export class $CreativeModeTabsAccessor {
        static getCACHED_PARAMETERS(): $CreativeModeTab$ItemDisplayParameters;
        static callBuildAllTabContents(arg0: $CreativeModeTab$ItemDisplayParameters_): void;
        static get CACHED_PARAMETERS(): $CreativeModeTab$ItemDisplayParameters;
    }
    export interface $CreativeModeTabsAccessor {
    }
}
