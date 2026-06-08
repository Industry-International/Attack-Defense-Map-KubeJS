import { $Level } from "@package/net/minecraft/world/level";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Piglin } from "@package/net/minecraft/world/entity/monster/piglin";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Object, $Enum } from "@package/java/lang";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";

declare module "@package/com/almostreliable/morejs/features/misc" {
    export class $PiglinPlayerBehaviorEventJS implements $KubePlayerEvent {
        isIgnoreHoldingCheck(): boolean;
        isAggressiveAlready(): boolean;
        getPreviousTargetPlayer(): $Player;
        ignoreHoldingCheck(): void;
        getBehavior(): $PiglinPlayerBehaviorEventJS$PiglinBehavior;
        getPiglin(): $Piglin;
        setBehavior(arg0: $PiglinPlayerBehaviorEventJS$PiglinBehavior_): void;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $Piglin, arg1: $Player, arg2: ($Player) | undefined);
        get aggressiveAlready(): boolean;
        get previousTargetPlayer(): $Player;
        get piglin(): $Piglin;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $ExperiencePlayerEventJS implements $KubePlayerEvent {
        getEntity(): $Player;
        getAmount(): number;
        getXpNeededForNextLevel(): number;
        setAmount(arg0: number): void;
        getExperienceLevel(): number;
        getTotalExperience(): number;
        getExperienceProgress(): number;
        setExperienceLevel(arg0: number): void;
        setTotalExperience(arg0: number): void;
        willLevelUp(): boolean;
        getRemainingExperience(): number;
        setExperienceProgress(arg0: number): void;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: $Player, arg1: number);
        get entity(): $Player;
        get xpNeededForNextLevel(): number;
        get remainingExperience(): number;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $PiglinPlayerBehaviorEventJS$PiglinBehavior extends $Enum<$PiglinPlayerBehaviorEventJS$PiglinBehavior> {
        static values(): $PiglinPlayerBehaviorEventJS$PiglinBehavior[];
        static valueOf(arg0: string): $PiglinPlayerBehaviorEventJS$PiglinBehavior;
        static KEEP: $PiglinPlayerBehaviorEventJS$PiglinBehavior;
        static ATTACK: $PiglinPlayerBehaviorEventJS$PiglinBehavior;
        static IGNORE: $PiglinPlayerBehaviorEventJS$PiglinBehavior;
    }
    /**
     * Values that may be interpreted as {@link $PiglinPlayerBehaviorEventJS$PiglinBehavior}.
     */
    export type $PiglinPlayerBehaviorEventJS$PiglinBehavior_ = "attack" | "ignore" | "keep";
}
