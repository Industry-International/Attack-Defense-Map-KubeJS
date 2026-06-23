import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ColumnPos, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $Direction$Axis } from "@package/net/minecraft/core";
import { $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $EnumSet, $Collection } from "@package/java/util";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/commands/arguments/coordinates" {
    export class $RotationArgument implements $ArgumentType<$Coordinates> {
        parse(reader: $StringReader): $Coordinates;
        getExamples(): $Collection<string>;
        static getRotation(context: $CommandContext<$CommandSourceStack>, name: string): $Coordinates;
        static rotation(): $RotationArgument;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $BlockPosArgument implements $ArgumentType<$Coordinates> {
        parse(reader: $StringReader): $Coordinates;
        getExamples(): $Collection<string>;
        static blockPos(): $BlockPosArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getLoadedBlockPos(context: $CommandContext<$CommandSourceStack>, level: $ServerLevel, name: string): $BlockPos;
        static getLoadedBlockPos(context: $CommandContext<$CommandSourceStack>, name: string): $BlockPos;
        static getSpawnablePos(context: $CommandContext<$CommandSourceStack>, name: string): $BlockPos;
        static getBlockPos(context: $CommandContext<$CommandSourceStack>, name: string): $BlockPos;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        static ERROR_OUT_OF_WORLD: $SimpleCommandExceptionType;
        static ERROR_OUT_OF_BOUNDS: $SimpleCommandExceptionType;
        static ERROR_NOT_LOADED: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $SwizzleArgument implements $ArgumentType<$EnumSet<$Direction$Axis>> {
        parse(reader: $StringReader): $EnumSet<$Direction$Axis>;
        getExamples(): $Collection<string>;
        static getSwizzle(context: $CommandContext<$CommandSourceStack>, name: string): $EnumSet<$Direction$Axis>;
        static swizzle(): $SwizzleArgument;
        parse<S>(arg0: $StringReader, arg1: S): $EnumSet<$Direction$Axis>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $LocalCoordinates implements $Coordinates {
        getPosition(source: $CommandSourceStack): $Vec3;
        static parse(reader: $StringReader): $LocalCoordinates;
        getRotation(source: $CommandSourceStack): $Vec2;
        isZRelative(): boolean;
        isXRelative(): boolean;
        isYRelative(): boolean;
        getBlockPos(source: $CommandSourceStack): $BlockPos;
        static PREFIX_LOCAL_COORDINATE: string;
        constructor(left: number, arg1: number, up: number);
        get ZRelative(): boolean;
        get XRelative(): boolean;
        get YRelative(): boolean;
    }
    export class $WorldCoordinate {
        get(coord: number): number;
        static parseInt(reader: $StringReader): $WorldCoordinate;
        isRelative(): boolean;
        static isRelative(reader: $StringReader): boolean;
        static parseDouble(reader: $StringReader, centerCorrect: boolean): $WorldCoordinate;
        static ERROR_EXPECTED_INT: $SimpleCommandExceptionType;
        static ERROR_EXPECTED_DOUBLE: $SimpleCommandExceptionType;
        constructor(relative: boolean, value: number);
    }
    export class $Vec3Argument implements $ArgumentType<$Coordinates> {
        getExamples(): $Collection<string>;
        static getVec3(context: $CommandContext<$CommandSourceStack>, name: string): $Vec3;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getCoordinates(context: $CommandContext<$CommandSourceStack>, name: string): $Coordinates;
        static vec3(): $Vec3Argument;
        static vec3(centerCorrect: boolean): $Vec3Argument;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        parse(arg0: $StringReader): $Coordinates;
        static ERROR_MIXED_TYPE: $SimpleCommandExceptionType;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor(centerCorrect: boolean);
        get examples(): $Collection<string>;
    }
    export class $ColumnPosArgument implements $ArgumentType<$Coordinates> {
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getColumnPos(context: $CommandContext<$CommandSourceStack>, name: string): $ColumnPos;
        static columnPos(): $ColumnPosArgument;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        parse(arg0: $StringReader): $Coordinates;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $WorldCoordinates implements $Coordinates {
        getPosition(source: $CommandSourceStack): $Vec3;
        /**
         * A location with a delta of 0 for all values (equivalent to `~ ~ ~` or `~0 ~0 ~0`)
         */
        static current(): $WorldCoordinates;
        static parseInt(reader: $StringReader): $WorldCoordinates;
        static parseDouble(reader: $StringReader, centerCorrect: boolean): $WorldCoordinates;
        static absolute(vector: $Vec2): $WorldCoordinates;
        static absolute(x: number, arg1: number, y: number): $WorldCoordinates;
        getRotation(source: $CommandSourceStack): $Vec2;
        isZRelative(): boolean;
        isXRelative(): boolean;
        isYRelative(): boolean;
        getBlockPos(source: $CommandSourceStack): $BlockPos;
        constructor(x: $WorldCoordinate, y: $WorldCoordinate, z: $WorldCoordinate);
        get ZRelative(): boolean;
        get XRelative(): boolean;
        get YRelative(): boolean;
    }
    export class $Coordinates {
    }
    export interface $Coordinates {
        getPosition(source: $CommandSourceStack): $Vec3;
        getRotation(source: $CommandSourceStack): $Vec2;
        isZRelative(): boolean;
        isXRelative(): boolean;
        isYRelative(): boolean;
        getBlockPos(source: $CommandSourceStack): $BlockPos;
        get ZRelative(): boolean;
        get XRelative(): boolean;
        get YRelative(): boolean;
    }
    export class $Vec2Argument implements $ArgumentType<$Coordinates> {
        getExamples(): $Collection<string>;
        static getVec2(context: $CommandContext<$CommandSourceStack>, name: string): $Vec2;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static vec2(): $Vec2Argument;
        static vec2(centerCorrect: boolean): $Vec2Argument;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        parse(arg0: $StringReader): $Coordinates;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor(centerCorrect: boolean);
        get examples(): $Collection<string>;
    }
}
