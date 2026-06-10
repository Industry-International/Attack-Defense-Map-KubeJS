import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/me/muksc/tacztweaks/mixininterface/feature/synced_slide" {
    export class $SlideDataHolder {
        static of(arg0: $LivingEntity): $SlideDataHolder;
    }
    export interface $SlideDataHolder {
        tacztweaks$getShouldSlide(): boolean;
        tacztweaks$setShouldSlide(arg0: boolean): void;
    }
}
