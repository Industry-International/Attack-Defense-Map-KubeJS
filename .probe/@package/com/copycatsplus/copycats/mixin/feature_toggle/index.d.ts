import { $CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters_ } from "@package/net/minecraft/world/item";

declare module "@package/com/copycatsplus/copycats/mixin/feature_toggle" {
    export class $CreativeModeTabsAccessor {
        static getCACHED_PARAMETERS(): $CreativeModeTab$ItemDisplayParameters;
        static callBuildAllTabContents(pParameters: $CreativeModeTab$ItemDisplayParameters_): void;
        static get CACHED_PARAMETERS(): $CreativeModeTab$ItemDisplayParameters;
    }
    export interface $CreativeModeTabsAccessor {
    }
}
