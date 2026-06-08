import { $LevelAccessor } from "@package/net/minecraft/world/level";

declare module "@package/dev/architectury/event/forge" {
    export class $EventHandlerImplCommon$LevelEventAttachment {
    }
    export interface $EventHandlerImplCommon$LevelEventAttachment {
        architectury$attachLevel(arg0: $LevelAccessor): void;
        architectury$getAttachedLevel(): $LevelAccessor;
    }
}
