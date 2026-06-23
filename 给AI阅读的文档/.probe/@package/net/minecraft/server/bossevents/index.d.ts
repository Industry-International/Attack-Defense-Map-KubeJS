import { $BossEvent$BossBarOverlay, $BossEvent$BossBarColor } from "@package/net/minecraft/world";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerBossEvent } from "@package/net/minecraft/server/level";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $UUID_, $Collection_, $Collection } from "@package/java/util";

declare module "@package/net/minecraft/server/bossevents" {
    export class $CustomBossEvents {
        remove(bossbar: $CustomBossEvent): void;
        get(id: $ResourceLocation_): $CustomBossEvent;
        load(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        save(levelRegistry: $HolderLookup$Provider): $CompoundTag;
        create(id: $ResourceLocation_, name: $Component_): $CustomBossEvent;
        getEvents(): $Collection<$CustomBossEvent>;
        onPlayerDisconnect(player: $ServerPlayer): void;
        getIds(): $Collection<$ResourceLocation>;
        onPlayerConnect(player: $ServerPlayer): void;
        constructor();
        get events(): $Collection<$CustomBossEvent>;
        get ids(): $Collection<$ResourceLocation>;
    }
    export class $CustomBossEvent extends $ServerBossEvent {
        static load(tag: $CompoundTag_, id: $ResourceLocation_, levelRegistry: $HolderLookup$Provider): $CustomBossEvent;
        getValue(): number;
        save(levelRegistry: $HolderLookup$Provider): $CompoundTag;
        setValue(max: number): void;
        getDisplayName(): $Component;
        getMax(): number;
        setMax(max: number): void;
        /**
         * Makes the boss visible to the given player.
         */
        onPlayerDisconnect(player: $ServerPlayer): void;
        setPlayers(serverPlayerList: $Collection_<$ServerPlayer>): boolean;
        getTextId(): $ResourceLocation;
        /**
         * Makes the boss visible to the given player.
         */
        onPlayerConnect(player: $ServerPlayer): void;
        addOfflinePlayer(player: $UUID_): void;
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        constructor(id: $ResourceLocation_, name: $Component_);
        get displayName(): $Component;
        set players(value: $Collection_<$ServerPlayer>);
        get textId(): $ResourceLocation;
    }
}
