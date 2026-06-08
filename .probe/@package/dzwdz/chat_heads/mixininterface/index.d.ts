import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $HeadData_, $HeadData } from "@package/dzwdz/chat_heads";

declare module "@package/dzwdz/chat_heads/mixininterface" {
    export class $HeadRenderable {
    }
    export interface $HeadRenderable {
        chatheads$getHeadData(): $HeadData;
        chatheads$setHeadData(arg0: $HeadData_): void;
    }
    export class $Ownable {
    }
    export interface $Ownable {
        chatheads$getOwner(): $PlayerInfo;
        chatheads$setOwner(arg0: $PlayerInfo): void;
    }
    export class $TextureLocationSettable {
    }
    export interface $TextureLocationSettable {
        chatheads$setTextureLocation(arg0: $ResourceLocation_): void;
    }
    /**
     * Values that may be interpreted as {@link $TextureLocationSettable}.
     */
    export type $TextureLocationSettable_ = ((arg0: $ResourceLocation) => void);
}
