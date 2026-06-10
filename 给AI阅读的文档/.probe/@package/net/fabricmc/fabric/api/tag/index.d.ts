import { $Component } from "@package/net/minecraft/network/chat";

declare module "@package/net/fabricmc/fabric/api/tag" {
    export class $FabricTagKey {
    }
    export interface $FabricTagKey {
        getName(): $Component;
        getTranslationKey(): string;
        get name(): $Component;
        get translationKey(): string;
    }
}
