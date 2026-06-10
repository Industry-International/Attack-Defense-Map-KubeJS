import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Collection } from "@package/java/util";
export * as conditions from "@package/net/fabricmc/fabric/api/resource/conditions";

declare module "@package/net/fabricmc/fabric/api/resource" {
    export class $IdentifiableResourceReloadListener {
    }
    export interface $IdentifiableResourceReloadListener extends $PreparableReloadListener {
        getFabricDependencies(): $Collection<$ResourceLocation>;
        getFabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<$ResourceLocation>;
        get fabricId(): $ResourceLocation;
    }
}
