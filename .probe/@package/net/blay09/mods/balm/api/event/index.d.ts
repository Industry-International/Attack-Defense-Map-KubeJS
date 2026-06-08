import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BalmConfigSchema } from "@package/net/blay09/mods/balm/api/config/schema";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $InteractionResult, $InteractionResult_, $InteractionHand, $Container, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as client from "@package/net/blay09/mods/balm/api/event/client";
export * as server from "@package/net/blay09/mods/balm/api/event/server";

declare module "@package/net/blay09/mods/balm/api/event" {
    export class $LivingDeathEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        getDamageSource(): $DamageSource;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_);
        get entity(): $LivingEntity;
        get damageSource(): $DamageSource;
    }
    export class $CommandEvent extends $BalmEvent {
        getParseResults(): $ParseResults<$CommandSourceStack>;
        constructor(arg0: $ParseResults<$CommandSourceStack>);
        get parseResults(): $ParseResults<$CommandSourceStack>;
    }
    export class $ConfigReloadedEvent extends $BalmEvent {
        getSchema(): $BalmConfigSchema;
        constructor();
        constructor(arg0: $BalmConfigSchema);
        get schema(): $BalmConfigSchema;
    }
    export class $BalmEvent extends $Event implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor();
    }
    export class $CropGrowEvent extends $BalmEvent {
        getState(): $BlockState;
        getLevel(): $Level;
        getPos(): $BlockPos;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $BlockState;
        get level(): $Level;
        get pos(): $BlockPos;
    }
    export class $BreakBlockEvent extends $BalmEvent {
        getState(): $BlockState;
        getLevel(): $Level;
        getPos(): $BlockPos;
        getBlockEntity(): $BlockEntity;
        getPlayer(): $Player;
        constructor(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockEntity);
        get state(): $BlockState;
        get level(): $Level;
        get pos(): $BlockPos;
        get blockEntity(): $BlockEntity;
        get player(): $Player;
    }
    export class $CropGrowEvent$Pre extends $CropGrowEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $LivingDamageEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        setDamageAmount(arg0: number): void;
        getDamageSource(): $DamageSource;
        getDamageAmount(): number;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number);
        get entity(): $LivingEntity;
        get damageSource(): $DamageSource;
    }
    export class $PlayerRespawnEvent extends $BalmEvent {
        getNewPlayer(): $ServerPlayer;
        getOldPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer, arg1: $ServerPlayer);
        get newPlayer(): $ServerPlayer;
        get oldPlayer(): $ServerPlayer;
    }
    export class $PlayerAttackEvent extends $BalmEvent {
        getTarget(): $Entity;
        getPlayer(): $Player;
        constructor(arg0: $Player, arg1: $Entity);
        get target(): $Entity;
        get player(): $Player;
    }
    export class $UseBlockEvent extends $BalmEvent {
        setResult(arg0: $InteractionResult_): void;
        getLevel(): $Level;
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getInteractionResult(): $InteractionResult;
        getHitResult(): $BlockHitResult;
        constructor(arg0: $Player, arg1: $Level_, arg2: $InteractionHand_, arg3: $BlockHitResult);
        set result(value: $InteractionResult_);
        get level(): $Level;
        get hand(): $InteractionHand;
        get player(): $Player;
        get interactionResult(): $InteractionResult;
        get hitResult(): $BlockHitResult;
    }
    export class $PlayerLogoutEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $EntityAddedEvent extends $BalmEvent {
        getLevel(): $Level;
        getEntity(): $Entity;
        constructor(arg0: $Entity, arg1: $Level_);
        get level(): $Level;
        get entity(): $Entity;
    }
    export class $PlayerOpenMenuEvent extends $BalmEvent {
        getMenu(): $AbstractContainerMenu;
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer, arg1: $AbstractContainerMenu);
        get menu(): $AbstractContainerMenu;
        get player(): $ServerPlayer;
    }
    export class $DigSpeedEvent extends $BalmEvent {
        getState(): $BlockState;
        setSpeedOverride(arg0: number): void;
        getPlayer(): $Player;
        getSpeed(): number;
        getSpeedOverride(): number;
        constructor(arg0: $Player, arg1: $BlockState_, arg2: number);
        get state(): $BlockState;
        get player(): $Player;
        get speed(): number;
    }
    export class $TossItemEvent extends $BalmEvent {
        getPlayer(): $Player;
        getItemStack(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_);
        get player(): $Player;
        get itemStack(): $ItemStack;
    }
    export class $LivingFallEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        getFallDamageOverride(): number;
        setFallDamageOverride(arg0: number): void;
        constructor(arg0: $LivingEntity);
        get entity(): $LivingEntity;
    }
    export class $CropGrowEvent$Post extends $CropGrowEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $ConfigLoadedEvent extends $BalmEvent {
        getSchema(): $BalmConfigSchema;
        constructor(arg0: $BalmConfigSchema);
        get schema(): $BalmConfigSchema;
    }
    export class $UseItemEvent extends $BalmEvent {
        setResult(arg0: $InteractionResult_): void;
        getLevel(): $Level;
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getInteractionResult(): $InteractionResult;
        constructor(arg0: $Player, arg1: $Level_, arg2: $InteractionHand_);
        set result(value: $InteractionResult_);
        get level(): $Level;
        get hand(): $InteractionHand;
        get player(): $Player;
        get interactionResult(): $InteractionResult;
    }
    export class $LivingHealEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        getAmount(): number;
        constructor(arg0: $LivingEntity, arg1: number);
        get entity(): $LivingEntity;
        get amount(): number;
    }
    export class $PlayerChangedDimensionEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        getFromDim(): $ResourceKey<$Level>;
        getToDim(): $ResourceKey<$Level>;
        constructor(arg0: $ServerPlayer, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>);
        get player(): $ServerPlayer;
        get fromDim(): $ResourceKey<$Level>;
        get toDim(): $ResourceKey<$Level>;
    }
    export class $PlayerConnectedEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $ItemCraftedEvent extends $BalmEvent {
        getCraftMatrix(): $Container;
        getPlayer(): $Player;
        getItemStack(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $Container);
        get craftMatrix(): $Container;
        get player(): $Player;
        get itemStack(): $ItemStack;
    }
    export class $PlayerLoginEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
}
