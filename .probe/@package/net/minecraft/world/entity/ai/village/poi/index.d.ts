import { $ChunkPos, $LevelHeightAccessor, $LevelReader } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LevelChunkSection } from "@package/net/minecraft/world/level/chunk";
import { $Set, $Set_ } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $RandomSource } from "@package/net/minecraft/util";
import { $RegionStorageInfo_, $ChunkIOErrorReporter, $SectionStorage } from "@package/net/minecraft/world/level/chunk/storage";
import { $Predicate, $Consumer_, $BiConsumer, $Predicate_, $BiPredicate_ } from "@package/java/util/function";
import { $SectionTracker } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Holder_, $RegistryAccess, $Registry, $SectionPos, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Runnable_, $Enum, $Record } from "@package/java/lang";
import { $IPOIUnloading } from "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks";

declare module "@package/net/minecraft/world/entity/ai/village/poi" {
    export class $PoiType extends $Record {
        is(arg0: $BlockState_): boolean;
        matchingStates(): $Set<$BlockState>;
        maxTickets(): number;
        validRange(): number;
        static NONE: $Predicate<$Holder<$PoiType>>;
        constructor(matchingStates: $Set_<$BlockState_>, maxTickets: number, validRange: number);
    }
    /**
     * Values that may be interpreted as {@link $PoiType}.
     */
    export type $PoiType_ = RegistryTypes.PointOfInterestType;
    export class $PoiManager extends $SectionStorage<$PoiSection> implements $IPOIUnloading {
        findAllClosestFirstWithType(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $Predicate_<$BlockPos>, arg2: $BlockPos_, arg3: number, arg4: $PoiManager$Occupancy_): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>;
        remove(arg0: $BlockPos_): void;
        add(arg0: $BlockPos_, arg1: $Holder_<$PoiType>): void;
        find(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $Predicate_<$BlockPos>, arg2: $BlockPos_, arg3: number, arg4: $PoiManager$Occupancy_): ($BlockPos) | undefined;
        getType(arg0: $BlockPos_): ($Holder<$PoiType>) | undefined;
        release(arg0: $BlockPos_): boolean;
        exists(arg0: $BlockPos_, arg1: $Predicate_<$Holder<$PoiType>>): boolean;
        findAll(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $Predicate_<$BlockPos>, arg2: $BlockPos_, arg3: number, arg4: $PoiManager$Occupancy_): $Stream<$BlockPos>;
        take(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $BiPredicate_<$Holder<$PoiType>, $BlockPos>, arg2: $BlockPos_, arg3: number): ($BlockPos) | undefined;
        getInChunk(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $ChunkPos, arg2: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        getRandom(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $Predicate_<$BlockPos>, arg2: $PoiManager$Occupancy_, arg3: $BlockPos_, arg4: number, arg5: $RandomSource): ($BlockPos) | undefined;
        findClosest(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $BlockPos_, arg2: number, arg3: $PoiManager$Occupancy_): ($BlockPos) | undefined;
        findClosest(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $Predicate_<$BlockPos>, arg2: $BlockPos_, arg3: number, arg4: $PoiManager$Occupancy_): ($BlockPos) | undefined;
        sectionsToVillage(arg0: $SectionPos): number;
        existsAtPosition(arg0: $ResourceKey_<$PoiType>, arg1: $BlockPos_): boolean;
        findAllWithType(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $Predicate_<$BlockPos>, arg2: $BlockPos_, arg3: number, arg4: $PoiManager$Occupancy_): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>;
        getInRange(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $BlockPos_, arg2: number, arg3: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        findClosestWithType(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $BlockPos_, arg2: number, arg3: $PoiManager$Occupancy_): ($Pair<$Holder<$PoiType>, $BlockPos>) | undefined;
        checkConsistencyWithBlocks(arg0: $SectionPos, arg1: $LevelChunkSection): void;
        ensureLoadedAndValid(arg0: $LevelReader, arg1: $BlockPos_, arg2: number): void;
        getInSquare(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $BlockPos_, arg2: number, arg3: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        isVillageCenter(arg0: number): boolean;
        /**
         * @deprecated
         */
        getFreeTickets(arg0: $BlockPos_): number;
        getCountInRange(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $BlockPos_, arg2: number, arg3: $PoiManager$Occupancy_): number;
        static MAX_VILLAGE_DISTANCE: number;
        static VILLAGE_SECTION_SIZE: number;
        levelHeightAccessor: $LevelHeightAccessor;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $DataFixer, arg3: boolean, arg4: $RegistryAccess, arg5: $ChunkIOErrorReporter, arg6: $LevelHeightAccessor);
    }
    export interface $PoiType extends RegistryMarked<RegistryTypes.PointOfInterestTypeTag, RegistryTypes.PointOfInterestType> {}
    export class $PoiManager$DistanceTracker extends $SectionTracker {
        levelCount: number;
        static SOURCE: number;
    }
    export class $PoiManager$Occupancy extends $Enum<$PoiManager$Occupancy> {
        static values(): $PoiManager$Occupancy[];
        static valueOf(arg0: string): $PoiManager$Occupancy;
        getTest(): $Predicate<$PoiRecord>;
        static IS_OCCUPIED: $PoiManager$Occupancy;
        static HAS_SPACE: $PoiManager$Occupancy;
        static ANY: $PoiManager$Occupancy;
        get test(): $Predicate<$PoiRecord>;
    }
    /**
     * Values that may be interpreted as {@link $PoiManager$Occupancy}.
     */
    export type $PoiManager$Occupancy_ = "has_space" | "is_occupied" | "any";
    export class $PoiRecord {
        getPos(): $BlockPos;
        static codec(arg0: $Runnable_): $Codec<$PoiRecord>;
        isOccupied(): boolean;
        hasSpace(): boolean;
        /**
         * @deprecated
         */
        getFreeTickets(): number;
        releaseTicket(): boolean;
        acquireTicket(): boolean;
        getPoiType(): $Holder<$PoiType>;
        constructor(arg0: $BlockPos_, arg1: $Holder_<$PoiType>, arg2: $Runnable_);
        get pos(): $BlockPos;
        get occupied(): boolean;
        get freeTickets(): number;
        get poiType(): $Holder<$PoiType>;
    }
    export class $PoiTypes {
        static register(arg0: $Registry<$PoiType_>, arg1: $ResourceKey_<$PoiType>, arg2: $Set_<$BlockState_>, arg3: number, arg4: number): $PoiType;
        static bootstrap(arg0: $Registry<$PoiType_>): $PoiType;
        static forState(arg0: $BlockState_): ($Holder<$PoiType>) | undefined;
        static hasPoi(arg0: $BlockState_): boolean;
        static registerBlockStates(arg0: $Holder_<$PoiType>, arg1: $Set_<$BlockState_>): void;
        static CARTOGRAPHER: $ResourceKey<$PoiType>;
        static MASON: $ResourceKey<$PoiType>;
        static SHEPHERD: $ResourceKey<$PoiType>;
        static ARMORER: $ResourceKey<$PoiType>;
        static TOOLSMITH: $ResourceKey<$PoiType>;
        static MEETING: $ResourceKey<$PoiType>;
        static BEE_NEST: $ResourceKey<$PoiType>;
        static LODESTONE: $ResourceKey<$PoiType>;
        static FARMER: $ResourceKey<$PoiType>;
        static FLETCHER: $ResourceKey<$PoiType>;
        static LEATHERWORKER: $ResourceKey<$PoiType>;
        static LIBRARIAN: $ResourceKey<$PoiType>;
        static CLERIC: $ResourceKey<$PoiType>;
        static FISHERMAN: $ResourceKey<$PoiType>;
        static BUTCHER: $ResourceKey<$PoiType>;
        static BEEHIVE: $ResourceKey<$PoiType>;
        static NETHER_PORTAL: $ResourceKey<$PoiType>;
        static WEAPONSMITH: $ResourceKey<$PoiType>;
        static LIGHTNING_ROD: $ResourceKey<$PoiType>;
        static HOME: $ResourceKey<$PoiType>;
        constructor();
    }
    export class $PoiSection {
        refresh(arg0: $Consumer_<$BiConsumer<$BlockPos, $Holder<$PoiType>>>): void;
        remove(arg0: $BlockPos_): void;
        add(arg0: $BlockPos_, arg1: $Holder_<$PoiType>): void;
        getType(arg0: $BlockPos_): ($Holder<$PoiType>) | undefined;
        release(arg0: $BlockPos_): boolean;
        exists(arg0: $BlockPos_, arg1: $Predicate_<$Holder<$PoiType>>): boolean;
        isValid(): boolean;
        static codec(arg0: $Runnable_): $Codec<$PoiSection>;
        /**
         * @deprecated
         */
        getFreeTickets(arg0: $BlockPos_): number;
        getRecords(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        constructor(arg0: $Runnable_);
        get valid(): boolean;
    }
}
