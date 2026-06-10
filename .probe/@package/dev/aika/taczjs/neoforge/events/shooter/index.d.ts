import { $Level } from "@package/net/minecraft/world/level";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Object } from "@package/java/lang";
import { $KubeLivingEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";

declare module "@package/dev/aika/taczjs/neoforge/events/shooter" {
    export class $LivingEntityMeleeEvent extends $AbstractShooterEvent {
        cancelMelee(): void;
        constructor(entity: $LivingEntity, gunItem: $ItemStack_);
    }
    export class $LivingEntityAimEvent extends $AbstractShooterEvent {
        cancelAim(): void;
        constructor(entity: $LivingEntity, gunItem: $ItemStack_);
    }
    export class $LivingEntityShootEvent extends $AbstractShooterEvent {
        cancelShoot(): void;
        constructor(entity: $LivingEntity, gunItem: $ItemStack_);
    }
    export class $AbstractShooterEvent implements $KubeLivingEntityEvent {
        getShooter(): $LivingEntity;
        getGunId(): $ResourceLocation;
        getGunItem(): $ItemStack;
        getLevel(): $Level;
        getPlayer(): $Player;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getEntity(): $LivingEntity;
        constructor(entity: $LivingEntity, gunItem: $ItemStack_);
        get shooter(): $LivingEntity;
        get gunId(): $ResourceLocation;
        get gunItem(): $ItemStack;
        get level(): $Level;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $LivingEntityReloadEvent extends $AbstractShooterEvent {
        cancelReload(): void;
        constructor(entity: $LivingEntity, gunItem: $ItemStack_);
    }
}
