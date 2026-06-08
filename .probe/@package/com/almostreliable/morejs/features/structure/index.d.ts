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
import { $StructurePiece, $BoundingBox, $Structure_, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/com/almostreliable/morejs/features/structure" {
    export class $StructureTemplateAccess {
    }
    export interface $StructureTemplateAccess {
        getEntities(): $List<$StructureTemplate$StructureEntityInfo>;
        getBorderSize(): $Vec3i;
        getPalettes(): $List<$StructureTemplate$Palette>;
        get entities(): $List<$StructureTemplate$StructureEntityInfo>;
        get borderSize(): $Vec3i;
        get palettes(): $List<$StructureTemplate$Palette>;
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
        getStructure(): $Structure;
        getStructureManager(): $StructureManager;
        getChunkPos(): $ChunkPos;
        getRandomSource(): $RandomSource;
        getChunkBoundingBox(): $BoundingBox;
        getIntersectionPieces(): $Collection<$StructurePiece>;
        getIntersectionBoxes(): $Collection<$BoundingBox>;
        getStructureBoundingBox(): $BoundingBox;
        getWorldGenLevel(): $WorldGenLevel;
        getIntersectionMap(): $Map<$StructurePiece, $BoundingBox>;
        getChunkGenerator(): $ChunkGenerator;
        getPiecesContainer(): $PiecesContainer;
        getPieceType(arg0: $StructurePieceType_): $ResourceLocation;
        getGenStep(): string;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        getLevel(): $Level;
        constructor(arg0: $Structure_, arg1: $WorldGenLevel, arg2: $StructureManager, arg3: $ChunkGenerator, arg4: $RandomSource, arg5: $BoundingBox, arg6: $ChunkPos, arg7: $PiecesContainer_);
        get id(): $ResourceLocation;
        get type(): $ResourceLocation;
        get structure(): $Structure;
        get structureManager(): $StructureManager;
        get chunkPos(): $ChunkPos;
        get randomSource(): $RandomSource;
        get chunkBoundingBox(): $BoundingBox;
        get intersectionPieces(): $Collection<$StructurePiece>;
        get intersectionBoxes(): $Collection<$BoundingBox>;
        get structureBoundingBox(): $BoundingBox;
        get worldGenLevel(): $WorldGenLevel;
        get intersectionMap(): $Map<$StructurePiece, $BoundingBox>;
        get chunkGenerator(): $ChunkGenerator;
        get piecesContainer(): $PiecesContainer;
        get genStep(): string;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get level(): $Level;
    }
    export class $StructureBlockInfoModification {
    }
    export interface $StructureBlockInfoModification {
        getProperties(): $Map<string, $Object>;
        getId(): string;
        getNbt(): $CompoundTag;
        getBlock(): $Block;
        setBlock(arg0: $ResourceLocation_, arg1: $Map_<string, $Object>): void;
        setBlock(arg0: $ResourceLocation_): void;
        getPosition(): $BlockPos;
        setVanillaBlockState(arg0: $BlockState_): void;
        hasNbt(): boolean;
        setNbt(arg0: $CompoundTag_): void;
        get properties(): $Map<string, $Object>;
        get id(): string;
        get position(): $BlockPos;
        set vanillaBlockState(value: $BlockState_);
    }
    export class $StructureLoadEventJS implements $KubeEvent {
        static invoke(arg0: $StructureTemplate, arg1: $ResourceLocation_): void;
        getId(): string;
        getEntities(): $EntityInfoWrapper;
        getStructureSize(): $Vec3i;
        getPalette(arg0: number): $PaletteWrapper;
        getPalettesSize(): number;
        getEntitiesSize(): number;
        removePalette(arg0: number): void;
        forEachPalettes(arg0: $Consumer_<$PaletteWrapper>): void;
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
        constructor(arg0: $StructureTemplateAccess, arg1: $ResourceLocation_);
        get id(): string;
        get entities(): $EntityInfoWrapper;
        get structureSize(): $Vec3i;
        get palettesSize(): number;
        get entitiesSize(): number;
    }
    export class $PaletteWrapper {
        get(arg0: $BlockPos_): $StructureTemplate$StructureBlockInfo;
        clear(): void;
        add(arg0: $BlockPos_, arg1: $BlockState_, arg2: $CompoundTag_): void;
        add(arg0: $BlockPos_, arg1: $BlockState_): void;
        forEach(arg0: $Consumer_<$StructureTemplate$StructureBlockInfo>): void;
        removeIf(arg0: $Predicate_<$StructureTemplate$StructureBlockInfo>): void;
        constructor(arg0: $StructureTemplate$Palette, arg1: $Vec3i);
    }
}
