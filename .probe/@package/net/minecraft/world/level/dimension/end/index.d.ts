import { $EndCrystal, $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Enum, $Record } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/level/dimension/end" {
    export class $DragonRespawnAnimation extends $Enum<$DragonRespawnAnimation> {
        static values(): $DragonRespawnAnimation[];
        static valueOf(arg0: string): $DragonRespawnAnimation;
        tick(arg0: $ServerLevel, arg1: $EndDragonFight, arg2: $List_<$EndCrystal>, arg3: number, arg4: $BlockPos_): void;
        static SUMMONING_PILLARS: $DragonRespawnAnimation;
        static START: $DragonRespawnAnimation;
        static END: $DragonRespawnAnimation;
        static PREPARING_TO_SUMMON_PILLARS: $DragonRespawnAnimation;
        static SUMMONING_DRAGON: $DragonRespawnAnimation;
    }
    /**
     * Values that may be interpreted as {@link $DragonRespawnAnimation}.
     */
    export type $DragonRespawnAnimation_ = "start" | "preparing_to_summon_pillars" | "summoning_pillars" | "summoning_dragon" | "end";
    export class $EndDragonFight {
        tick(): void;
        addPlayer(arg0: $ServerPlayer): void;
        saveData(): $EndDragonFight$Data;
        removePlayer(arg0: $ServerPlayer): void;
        hasPreviouslyKilledDragon(): boolean;
        tryRespawn(): void;
        onCrystalDestroyed(arg0: $EndCrystal, arg1: $DamageSource_): void;
        getCrystalsAlive(): number;
        updateDragon(arg0: $EnderDragon): void;
        getDragonUUID(): $UUID;
        setDragonKilled(arg0: $EnderDragon): void;
        resetSpikeCrystals(): void;
        setRespawnStage(arg0: $DragonRespawnAnimation_): void;
        /**
         * @deprecated
         */
        removeAllGateways(): void;
        /**
         * @deprecated
         */
        skipArenaLoadedCheck(): void;
        static TIME_BETWEEN_PLAYER_SCANS: number;
        static ARENA_TICKET_LEVEL: number;
        static DRAGON_SPAWN_Y: number;
        constructor(arg0: $ServerLevel, arg1: number, arg2: $EndDragonFight$Data_);
        constructor(arg0: $ServerLevel, arg1: number, arg2: $EndDragonFight$Data_, arg3: $BlockPos_);
        get crystalsAlive(): number;
        get dragonUUID(): $UUID;
        set dragonKilled(value: $EnderDragon);
        set respawnStage(value: $DragonRespawnAnimation_);
    }
    export class $EndDragonFight$Data extends $Record {
        dragonUUID(): ($UUID) | undefined;
        gateways(): ($List<number>) | undefined;
        needsStateScanning(): boolean;
        dragonKilled(): boolean;
        previouslyKilled(): boolean;
        exitPortalLocation(): ($BlockPos) | undefined;
        isRespawning(): boolean;
        static CODEC: $Codec<$EndDragonFight$Data>;
        static DEFAULT: $EndDragonFight$Data;
        constructor(needsStateScanning: boolean, dragonKilled: boolean, previouslyKilled: boolean, isRespawning: boolean, dragonUUID: ($UUID_) | undefined, exitPortalLocation: ($BlockPos_) | undefined, gateways: ($List_<number>) | undefined);
        get respawning(): boolean;
    }
}
