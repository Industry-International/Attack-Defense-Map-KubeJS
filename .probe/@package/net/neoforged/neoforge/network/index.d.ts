import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $ConfigFilePayload } from "@package/net/neoforged/neoforge/network/payload";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $InetAddress, $SocketAddress } from "@package/java/net";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ConfigurationTask } from "@package/net/minecraft/server/network";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $MenuType$MenuSupplier, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";
import { $ServerConfigurationPacketListener } from "@package/net/minecraft/network/protocol/configuration";
export * as negotiation from "@package/net/neoforged/neoforge/network/negotiation";
export * as event from "@package/net/neoforged/neoforge/network/event";
export * as payload from "@package/net/neoforged/neoforge/network/payload";
export * as configuration from "@package/net/neoforged/neoforge/network/configuration";
export * as registration from "@package/net/neoforged/neoforge/network/registration";
export * as handling from "@package/net/neoforged/neoforge/network/handling";
export * as codec from "@package/net/neoforged/neoforge/network/codec";
export * as filters from "@package/net/neoforged/neoforge/network/filters";
export * as connection from "@package/net/neoforged/neoforge/network/connection";
export * as handlers from "@package/net/neoforged/neoforge/network/handlers";
export * as bundle from "@package/net/neoforged/neoforge/network/bundle";

declare module "@package/net/neoforged/neoforge/network" {
    export class $ConfigSync {
        static syncConfigs(): $List<$ConfigFilePayload>;
        static receiveSyncedConfig(arg0: number[], arg1: string): void;
    }
    export class $DualStackUtils {
        static getLocalAddress(): $InetAddress;
        static checkIPv6(arg0: string): boolean;
        static checkIPv6(arg0: $InetAddress): boolean;
        static logInitialPreferences(): void;
        static getMulticastGroup(): string;
        static getAddressString(arg0: $SocketAddress): string;
        static initialise(): void;
        constructor();
        static get localAddress(): $InetAddress;
        static get multicastGroup(): string;
    }
    export class $ConfigurationInitialization {
        static configureEarlyTasks(arg0: $ServerConfigurationPacketListener, arg1: $Consumer_<$ConfigurationTask>): void;
        constructor();
    }
    export class $NetworkInitialization {
        constructor();
    }
    export class $IContainerFactory<T extends $AbstractContainerMenu> {
    }
    export interface $IContainerFactory<T extends $AbstractContainerMenu> extends $MenuType$MenuSupplier<T> {
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
        create(arg0: number, arg1: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $IContainerFactory}.
     */
    export type $IContainerFactory_<T> = ((arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf) => T);
    export class $PacketDistributor {
        static sendToPlayersTrackingEntityAndSelf(arg0: $Entity, arg1: $CustomPacketPayload_, ...arg2: $CustomPacketPayload_[]): void;
        static sendToPlayersInDimension(arg0: $ServerLevel, arg1: $CustomPacketPayload_, ...arg2: $CustomPacketPayload_[]): void;
        static sendToServer(arg0: $CustomPacketPayload_, ...arg1: $CustomPacketPayload_[]): void;
        static sendToPlayersNear(arg0: $ServerLevel, arg1: $ServerPlayer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CustomPacketPayload_, ...arg7: $CustomPacketPayload_[]): void;
        static sendToPlayer(arg0: $ServerPlayer, arg1: $CustomPacketPayload_, ...arg2: $CustomPacketPayload_[]): void;
        static sendToPlayersTrackingChunk(arg0: $ServerLevel, arg1: $ChunkPos, arg2: $CustomPacketPayload_, ...arg3: $CustomPacketPayload_[]): void;
        static sendToPlayersTrackingEntity(arg0: $Entity, arg1: $CustomPacketPayload_, ...arg2: $CustomPacketPayload_[]): void;
        static sendToAllPlayers(arg0: $CustomPacketPayload_, ...arg1: $CustomPacketPayload_[]): void;
    }
}
