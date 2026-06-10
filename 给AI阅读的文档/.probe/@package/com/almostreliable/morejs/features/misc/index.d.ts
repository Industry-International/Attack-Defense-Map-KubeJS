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
        ignoreHoldingCheck(): void;
        getBehavior(): $PiglinPlayerBehaviorEventJS$PiglinBehavior;
        setBehavior(arg0: $PiglinPlayerBehaviorEventJS$PiglinBehavior_): void;
        getPiglin(): $Piglin;
        getPreviousTargetPlayer(): $Player;
        isAggressiveAlready(): boolean;
        getPlayer(): $Player;
        getLevel(): $Level;
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
        constructor(arg0: $Piglin, arg1: $Player, arg2: ($Player) | undefined);
        get piglin(): $Piglin;
        get previousTargetPlayer(): $Player;
        get aggressiveAlready(): boolean;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $ExperiencePlayerEventJS implements $KubePlayerEvent {
        getEntity(): $Player;
        setAmount(arg0: number): void;
        getExperienceProgress(): number;
        getAmount(): number;
        getXpNeededForNextLevel(): number;
        getTotalExperience(): number;
        getExperienceLevel(): number;
        setTotalExperience(arg0: number): void;
        setExperienceLevel(arg0: number): void;
        willLevelUp(): boolean;
        setExperienceProgress(arg0: number): void;
        getRemainingExperience(): number;
        getPlayer(): $Player;
        getLevel(): $Level;
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
