import { $PistonStructureResolver } from "@package/net/minecraft/world/level/block/piston";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MobCategory_, $MobCategory, $Entity } from "@package/net/minecraft/world/entity";
import { $List, $EnumSet, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkHolder, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkType_, $ChunkType } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum } from "@package/java/lang";
import { $ItemAbility_, $ItemAbility } from "@package/net/neoforged/neoforge/common";
import { $CustomSpawner_, $Explosion, $LevelAccessor, $ChunkPos, $Level, $CustomSpawner, $Level_ } from "@package/net/minecraft/world/level";
import { $TreeDecorator$Context } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $LevelChunk, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $NoteBlockInstrument, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $PortalShape } from "@package/net/minecraft/world/level/portal";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $EventHandlerImplCommon$LevelEventAttachment } from "@package/dev/architectury/event/forge";
export * as block from "@package/net/neoforged/neoforge/event/level/block";

declare module "@package/net/neoforged/neoforge/event/level" {
    export class $SleepFinishedTimeEvent extends $LevelEvent {
        getNewTime(): number;
        setTimeAddition(arg0: number): boolean;
        constructor(arg0: $ServerLevel, arg1: number, arg2: number);
        get newTime(): number;
        set timeAddition(value: number);
    }
    export class $AlterGroundEvent extends $Event {
        getContext(): $TreeDecorator$Context;
        getPositions(): $List<$BlockPos>;
        getStateProvider(): $AlterGroundEvent$StateProvider;
        setStateProvider(arg0: $AlterGroundEvent$StateProvider_): void;
        constructor(arg0: $TreeDecorator$Context, arg1: $List_<$BlockPos_>, arg2: $AlterGroundEvent$StateProvider_);
        get context(): $TreeDecorator$Context;
        get positions(): $List<$BlockPos>;
    }
    export class $ChunkWatchEvent$Watch extends $ChunkWatchEvent {
        getChunk(): $LevelChunk;
        constructor(arg0: $ServerPlayer, arg1: $LevelChunk, arg2: $ServerLevel);
        get chunk(): $LevelChunk;
    }
    export class $NoteBlockEvent$Octave extends $Enum<$NoteBlockEvent$Octave> {
        static values(): $NoteBlockEvent$Octave[];
        static valueOf(arg0: string): $NoteBlockEvent$Octave;
        static HIGH: $NoteBlockEvent$Octave;
        static LOW: $NoteBlockEvent$Octave;
        static MID: $NoteBlockEvent$Octave;
    }
    /**
     * Values that may be interpreted as {@link $NoteBlockEvent$Octave}.
     */
    export type $NoteBlockEvent$Octave_ = "low" | "mid" | "high";
    export class $ExplosionEvent$Start extends $ExplosionEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $Explosion);
    }
    export class $ModifyCustomSpawnersEvent extends $Event {
        getLevel(): $ServerLevel;
        getCustomSpawners(): $List<$CustomSpawner>;
        addCustomSpawner(arg0: $CustomSpawner_): void;
        constructor(arg0: $ServerLevel, arg1: $List_<$CustomSpawner_>);
        get level(): $ServerLevel;
        get customSpawners(): $List<$CustomSpawner>;
    }
    export class $ChunkTicketLevelUpdatedEvent extends $Event {
        getLevel(): $ServerLevel;
        getChunkHolder(): $ChunkHolder;
        getChunkPos(): number;
        getOldTicketLevel(): number;
        getNewTicketLevel(): number;
        constructor(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: $ChunkHolder);
        get level(): $ServerLevel;
        get chunkHolder(): $ChunkHolder;
        get chunkPos(): number;
        get oldTicketLevel(): number;
        get newTicketLevel(): number;
    }
    export class $ChunkWatchEvent$UnWatch extends $ChunkWatchEvent {
        constructor(arg0: $ServerPlayer, arg1: $ChunkPos, arg2: $ServerLevel);
    }
    export class $ChunkEvent$Load extends $ChunkEvent {
        isNewChunk(): boolean;
        constructor(arg0: $ChunkAccess, arg1: boolean);
        get newChunk(): boolean;
    }
    export class $LevelEvent$PotentialSpawns extends $LevelEvent implements $ICancellableEvent {
        getPos(): $BlockPos;
        getSpawnerDataList(): $List<$MobSpawnSettings$SpawnerData>;
        removeSpawnerData(arg0: $MobSpawnSettings$SpawnerData): boolean;
        getMobCategory(): $MobCategory;
        addSpawnerData(arg0: $MobSpawnSettings$SpawnerData): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $MobCategory_, arg2: $BlockPos_, arg3: $WeightedRandomList<$MobSpawnSettings$SpawnerData>);
        get pos(): $BlockPos;
        get spawnerDataList(): $List<$MobSpawnSettings$SpawnerData>;
        get mobCategory(): $MobCategory;
    }
    export class $ChunkWatchEvent extends $Event {
        getLevel(): $ServerLevel;
        getPlayer(): $ServerPlayer;
        getPos(): $ChunkPos;
        constructor(arg0: $ServerPlayer, arg1: $ChunkPos, arg2: $ServerLevel);
        get level(): $ServerLevel;
        get player(): $ServerPlayer;
        get pos(): $ChunkPos;
    }
    export class $LevelEvent extends $Event implements $EventHandlerImplCommon$LevelEventAttachment {
        getLevel(): $LevelAccessor;
        architectury$getAttachedLevel(): $LevelAccessor;
        architectury$attachLevel(level: $LevelAccessor): void;
        constructor(arg0: $LevelAccessor);
        get level(): $LevelAccessor;
    }
    export class $LevelEvent$Save extends $LevelEvent {
        constructor(arg0: $LevelAccessor);
    }
    export class $LevelEvent$Load extends $LevelEvent {
        constructor(arg0: $LevelAccessor);
    }
    export class $ExplosionEvent extends $Event {
        getLevel(): $Level;
        getExplosion(): $Explosion;
        constructor(arg0: $Level_, arg1: $Explosion);
        get level(): $Level;
        get explosion(): $Explosion;
    }
    export class $BlockEvent$PortalSpawnEvent extends $BlockEvent implements $ICancellableEvent {
        getPortalSize(): $PortalShape;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PortalShape);
        get portalSize(): $PortalShape;
    }
    export class $BlockDropsEvent extends $BlockEvent implements $ICancellableEvent {
        getLevel(): $ServerLevel;
        setDroppedExperience(arg0: number): void;
        getDroppedExperience(): number;
        getDrops(): $List<$ItemEntity>;
        setCanceled(arg0: boolean): void;
        getBreaker(): $Entity;
        getTool(): $ItemStack;
        getBlockEntity(): $BlockEntity;
        isCanceled(): boolean;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $List_<$ItemEntity>, arg5: $Entity, arg6: $ItemStack_);
        get level(): $ServerLevel;
        get drops(): $List<$ItemEntity>;
        get breaker(): $Entity;
        get tool(): $ItemStack;
        get blockEntity(): $BlockEntity;
    }
    export class $BlockEvent$NeighborNotifyEvent extends $BlockEvent implements $ICancellableEvent {
        getForceRedstoneUpdate(): boolean;
        getNotifiedSides(): $EnumSet<$Direction>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnumSet<$Direction_>, arg4: boolean);
        get forceRedstoneUpdate(): boolean;
        get notifiedSides(): $EnumSet<$Direction>;
    }
    export class $LevelEvent$CreateSpawnPosition extends $LevelEvent implements $ICancellableEvent {
        getSettings(): $ServerLevelData;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $ServerLevelData);
        get settings(): $ServerLevelData;
    }
    export class $BlockEvent$FarmlandTrampleEvent extends $BlockEvent implements $ICancellableEvent {
        getEntity(): $Entity;
        getFallDistance(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: $Entity);
        get entity(): $Entity;
        get fallDistance(): number;
    }
    export class $BlockEvent$EntityPlaceEvent extends $BlockEvent implements $ICancellableEvent {
        getEntity(): $Entity;
        getBlockSnapshot(): $BlockSnapshot;
        getPlacedBlock(): $BlockState;
        getPlacedAgainst(): $BlockState;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $BlockSnapshot, arg1: $BlockState_, arg2: $Entity);
        get entity(): $Entity;
        get blockSnapshot(): $BlockSnapshot;
        get placedBlock(): $BlockState;
        get placedAgainst(): $BlockState;
    }
    export class $NoteBlockEvent$Play extends $NoteBlockEvent implements $ICancellableEvent {
        setInstrument(arg0: $NoteBlockInstrument_): void;
        getInstrument(): $NoteBlockInstrument;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: $NoteBlockInstrument_);
    }
    export class $ChunkDataEvent$Save extends $ChunkDataEvent {
        constructor(arg0: $ChunkAccess, arg1: $LevelAccessor, arg2: $CompoundTag_);
    }
    export class $ChunkDataEvent extends $ChunkEvent {
        getData(): $CompoundTag;
        constructor(arg0: $ChunkAccess, arg1: $CompoundTag_);
        constructor(arg0: $ChunkAccess, arg1: $LevelAccessor, arg2: $CompoundTag_);
        get data(): $CompoundTag;
    }
    export class $BlockEvent$EntityMultiPlaceEvent extends $BlockEvent$EntityPlaceEvent implements $ICancellableEvent {
        getReplacedBlockSnapshots(): $List<$BlockSnapshot>;
        constructor(arg0: $List_<$BlockSnapshot>, arg1: $BlockState_, arg2: $Entity);
        get replacedBlockSnapshots(): $List<$BlockSnapshot>;
    }
    export class $ChunkDataEvent$Load extends $ChunkDataEvent {
        getType(): $ChunkType;
        constructor(arg0: $ChunkAccess, arg1: $CompoundTag_, arg2: $ChunkType_);
        get type(): $ChunkType;
    }
    export class $PistonEvent$PistonMoveType extends $Enum<$PistonEvent$PistonMoveType> {
        static values(): $PistonEvent$PistonMoveType[];
        static valueOf(arg0: string): $PistonEvent$PistonMoveType;
        static RETRACT: $PistonEvent$PistonMoveType;
        isExtend: boolean;
        static EXTEND: $PistonEvent$PistonMoveType;
    }
    /**
     * Values that may be interpreted as {@link $PistonEvent$PistonMoveType}.
     */
    export type $PistonEvent$PistonMoveType_ = "extend" | "retract";
    export class $NoteBlockEvent$Note extends $Enum<$NoteBlockEvent$Note> {
        static values(): $NoteBlockEvent$Note[];
        static valueOf(arg0: string): $NoteBlockEvent$Note;
        static A: $NoteBlockEvent$Note;
        static F_SHARP: $NoteBlockEvent$Note;
        static B: $NoteBlockEvent$Note;
        static C: $NoteBlockEvent$Note;
        static D: $NoteBlockEvent$Note;
        static E: $NoteBlockEvent$Note;
        static F: $NoteBlockEvent$Note;
        static G: $NoteBlockEvent$Note;
        static G_SHARP: $NoteBlockEvent$Note;
        static A_SHARP: $NoteBlockEvent$Note;
        static D_SHARP: $NoteBlockEvent$Note;
        static C_SHARP: $NoteBlockEvent$Note;
    }
    /**
     * Values that may be interpreted as {@link $NoteBlockEvent$Note}.
     */
    export type $NoteBlockEvent$Note_ = "f_sharp" | "g" | "g_sharp" | "a" | "a_sharp" | "b" | "c" | "c_sharp" | "d" | "d_sharp" | "e" | "f";
    export class $PistonEvent$Post extends $PistonEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $PistonEvent$PistonMoveType_);
    }
    export class $BlockEvent$BreakEvent extends $BlockEvent implements $ICancellableEvent {
        getPlayer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Player);
        get player(): $Player;
    }
    export class $BlockGrowFeatureEvent extends $LevelEvent implements $ICancellableEvent {
        getFeature(): $Holder<$ConfiguredFeature<never, never>>;
        setFeature(arg0: $Holder_<$ConfiguredFeature<never, never>>): void;
        setFeature(arg0: $ResourceKey_<$ConfiguredFeature<never, never>>): void;
        getPos(): $BlockPos;
        getRandom(): $RandomSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $RandomSource, arg2: $BlockPos_, arg3: $Holder_<$ConfiguredFeature<never, never>>);
        get pos(): $BlockPos;
        get random(): $RandomSource;
    }
    export class $PistonEvent$Pre extends $PistonEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $PistonEvent$PistonMoveType_);
    }
    export class $PistonEvent extends $BlockEvent {
        getDirection(): $Direction;
        getPistonMoveType(): $PistonEvent$PistonMoveType;
        getFaceOffsetPos(): $BlockPos;
        getStructureHelper(): $PistonStructureResolver;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $PistonEvent$PistonMoveType_);
        get direction(): $Direction;
        get pistonMoveType(): $PistonEvent$PistonMoveType;
        get faceOffsetPos(): $BlockPos;
        get structureHelper(): $PistonStructureResolver;
    }
    export class $ChunkWatchEvent$Sent extends $ChunkWatchEvent {
        getChunk(): $LevelChunk;
        constructor(arg0: $ServerPlayer, arg1: $LevelChunk, arg2: $ServerLevel);
        get chunk(): $LevelChunk;
    }
    export class $ChunkEvent extends $LevelEvent {
        getChunk(): $ChunkAccess;
        constructor(arg0: $ChunkAccess);
        constructor(arg0: $ChunkAccess, arg1: $LevelAccessor);
        get chunk(): $ChunkAccess;
    }
    export class $NoteBlockEvent extends $BlockEvent {
        getVanillaNoteId(): number;
        getOctave(): $NoteBlockEvent$Octave;
        setNote(arg0: $NoteBlockEvent$Note_, arg1: $NoteBlockEvent$Octave_): void;
        getNote(): $NoteBlockEvent$Note;
        get vanillaNoteId(): number;
        get octave(): $NoteBlockEvent$Octave;
    }
    export class $ExplosionKnockbackEvent extends $ExplosionEvent {
        getAffectedBlocks(): $List<$BlockPos>;
        getKnockbackVelocity(): $Vec3;
        setKnockbackVelocity(arg0: $Vec3_): void;
        getAffectedEntity(): $Entity;
        constructor(arg0: $Level_, arg1: $Explosion, arg2: $Entity, arg3: $Vec3_);
        get affectedBlocks(): $List<$BlockPos>;
        get affectedEntity(): $Entity;
    }
    export class $BlockEvent extends $Event {
        getState(): $BlockState;
        getLevel(): $LevelAccessor;
        getPos(): $BlockPos;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $BlockState;
        get level(): $LevelAccessor;
        get pos(): $BlockPos;
    }
    export class $BlockEvent$BlockToolModificationEvent extends $BlockEvent implements $ICancellableEvent {
        getContext(): $UseOnContext;
        getFinalState(): $BlockState;
        isSimulated(): boolean;
        setFinalState(arg0: $BlockState_): void;
        getPlayer(): $Player;
        getHeldItemStack(): $ItemStack;
        getItemAbility(): $ItemAbility;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $BlockState_, arg1: $UseOnContext, arg2: $ItemAbility_, arg3: boolean);
        get context(): $UseOnContext;
        get simulated(): boolean;
        get player(): $Player;
        get heldItemStack(): $ItemStack;
        get itemAbility(): $ItemAbility;
    }
    export class $LevelEvent$Unload extends $LevelEvent {
        constructor(arg0: $LevelAccessor);
    }
    export class $NoteBlockEvent$Change extends $NoteBlockEvent implements $ICancellableEvent {
        getOldOctave(): $NoteBlockEvent$Octave;
        getOldNote(): $NoteBlockEvent$Note;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: number);
        get oldOctave(): $NoteBlockEvent$Octave;
        get oldNote(): $NoteBlockEvent$Note;
    }
    export class $AlterGroundEvent$StateProvider {
    }
    export interface $AlterGroundEvent$StateProvider {
        getState(arg0: $RandomSource, arg1: $BlockPos_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $AlterGroundEvent$StateProvider}.
     */
    export type $AlterGroundEvent$StateProvider_ = ((arg0: $RandomSource, arg1: $BlockPos) => $BlockState_);
    export class $ExplosionEvent$Detonate extends $ExplosionEvent {
        getAffectedEntities(): $List<$Entity>;
        getAffectedBlocks(): $List<$BlockPos>;
        constructor(arg0: $Level_, arg1: $Explosion, arg2: $List_<$Entity>);
        get affectedEntities(): $List<$Entity>;
        get affectedBlocks(): $List<$BlockPos>;
    }
    export class $BlockEvent$FluidPlaceBlockEvent extends $BlockEvent implements $ICancellableEvent {
        getOriginalState(): $BlockState;
        getNewState(): $BlockState;
        setNewState(arg0: $BlockState_): void;
        getLiquidPos(): $BlockPos;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $BlockState_);
        get originalState(): $BlockState;
        get liquidPos(): $BlockPos;
    }
    export class $ChunkEvent$Unload extends $ChunkEvent {
        constructor(arg0: $ChunkAccess);
    }
}
