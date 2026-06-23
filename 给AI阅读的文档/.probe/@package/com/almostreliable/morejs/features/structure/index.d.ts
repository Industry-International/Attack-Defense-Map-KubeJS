import { $ChunkPos, $Level, $StructureManager, $WorldGenLevel } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $StructureTemplate$Palette, $StructureTemplate$StructureBlockInfo, $StructureTemplate, $StructureTemplate$StructureEntityInfo } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Map_, $Map, $List_, $Collection } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Vec3i } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PiecesContainer, $StructurePieceType_, $PiecesContainer_ } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $StructurePiece, $BoundingBox, $Structure, $Structure_ } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/com/almostreliable/morejs/features/structure" {
    export class $StructureTemplateAccess {
    }
    export interface $StructureTemplateAccess {
        getEntities(): $List<$StructureTemplate$StructureEntityInfo>;
        getPalettes(): $List<$StructureTemplate$Palette>;
        getBorderSize(): $Vec3i;
        get entities(): $List<$StructureTemplate$StructureEntityInfo>;
        get palettes(): $List<$StructureTemplate$Palette>;
        get borderSize(): $Vec3i;
    }
    export class $EntityInfoWrapper {
        add(arg0: $CompoundTag_): void;
        forEach(arg0: $Consumer_<$StructureTemplate$StructureEntityInfo>): void;
        removeIf(arg0: $Predicate_<$StructureTemplate$StructureEntityInfo>): void;
        constructor(arg0: $List_<$StructureTemplate$StructureEntityInfo>, arg1: $Vec3i);
    }
    export class $StructureAfterPlaceEventJS implements $KubeLevelEvent {
        getId(): $ResourceLocation;
        getType(): $ResourceLocation;
        getChunkPos(): $ChunkPos;
        getRandomSource(): $RandomSource;
        getStructureManager(): $StructureManager;
        getStructure(): $Structure;
        getStructureBoundingBox(): $BoundingBox;
        getGenStep(): string;
        getIntersectionBoxes(): $Collection<$BoundingBox>;
        getChunkBoundingBox(): $BoundingBox;
        getIntersectionPieces(): $Collection<$StructurePiece>;
        getChunkGenerator(): $ChunkGenerator;
        getIntersectionMap(): $Map<$StructurePiece, $BoundingBox>;
        getWorldGenLevel(): $WorldGenLevel;
        getPiecesContainer(): $PiecesContainer;
        getPieceType(arg0: $StructurePieceType_): $ResourceLocation;
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
        getLevel(): $Level;
        constructor(arg0: $Structure_, arg1: $WorldGenLevel, arg2: $StructureManager, arg3: $ChunkGenerator, arg4: $RandomSource, arg5: $BoundingBox, arg6: $ChunkPos, arg7: $PiecesContainer_);
        get id(): $ResourceLocation;
        get type(): $ResourceLocation;
        get chunkPos(): $ChunkPos;
        get randomSource(): $RandomSource;
        get structureManager(): $StructureManager;
        get structure(): $Structure;
        get structureBoundingBox(): $BoundingBox;
        get genStep(): string;
        get intersectionBoxes(): $Collection<$BoundingBox>;
        get chunkBoundingBox(): $BoundingBox;
        get intersectionPieces(): $Collection<$StructurePiece>;
        get chunkGenerator(): $ChunkGenerator;
        get intersectionMap(): $Map<$StructurePiece, $BoundingBox>;
        get worldGenLevel(): $WorldGenLevel;
        get piecesContainer(): $PiecesContainer;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get level(): $Level;
    }
    export class $StructureBlockInfoModification {
    }
    export interface $StructureBlockInfoModification {
        getPosition(): $BlockPos;
        getProperties(): $Map<string, $Object>;
        getId(): string;
        getBlock(): $Block;
        getNbt(): $CompoundTag;
        setNbt(arg0: $CompoundTag_ | null): void;
        hasNbt(): boolean;
        setBlock(arg0: $ResourceLocation_): void;
        setBlock(arg0: $ResourceLocation_, arg1: $Map_<string, $Object>): void;
        setVanillaBlockState(arg0: $BlockState_): void;
        get position(): $BlockPos;
        get properties(): $Map<string, $Object>;
        get id(): string;
        set vanillaBlockState(value: $BlockState_);
    }
    export class $StructureLoadEventJS implements $KubeEvent {
        getEntities(): $EntityInfoWrapper;
        static invoke(arg0: $StructureTemplate, arg1: $ResourceLocation_): void;
        getId(): string;
        getPalette(arg0: number): $PaletteWrapper;
        getStructureSize(): $Vec3i;
        getEntitiesSize(): number;
        getPalettesSize(): number;
        removePalette(arg0: number): void;
        forEachPalettes(arg0: $Consumer_<$PaletteWrapper>): void;
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
        constructor(arg0: $StructureTemplateAccess, arg1: $ResourceLocation_);
        get entities(): $EntityInfoWrapper;
        get id(): string;
        get structureSize(): $Vec3i;
        get entitiesSize(): number;
        get palettesSize(): number;
    }
    export class $PaletteWrapper {
        get(arg0: $BlockPos_): $StructureTemplate$StructureBlockInfo;
        clear(): void;
        add(arg0: $BlockPos_, arg1: $BlockState_, arg2: $CompoundTag_ | null): void;
        add(arg0: $BlockPos_, arg1: $BlockState_): void;
        forEach(arg0: $Consumer_<$StructureTemplate$StructureBlockInfo>): void;
        removeIf(arg0: $Predicate_<$StructureTemplate$StructureBlockInfo>): void;
        constructor(arg0: $StructureTemplate$Palette, arg1: $Vec3i);
    }
}
