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
        parse(arg0: $StringReader): $Coordinates;
        getExamples(): $Collection<string>;
        static rotation(): $RotationArgument;
        static getRotation(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Coordinates;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $BlockPosArgument implements $ArgumentType<$Coordinates> {
        parse(arg0: $StringReader): $Coordinates;
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getSpawnablePos(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $BlockPos;
        static getLoadedBlockPos(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $BlockPos;
        static getLoadedBlockPos(arg0: $CommandContext<$CommandSourceStack>, arg1: $ServerLevel, arg2: string): $BlockPos;
        static blockPos(): $BlockPosArgument;
        static getBlockPos(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $BlockPos;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        static ERROR_OUT_OF_WORLD: $SimpleCommandExceptionType;
        static ERROR_OUT_OF_BOUNDS: $SimpleCommandExceptionType;
        static ERROR_NOT_LOADED: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $SwizzleArgument implements $ArgumentType<$EnumSet<$Direction$Axis>> {
        parse(arg0: $StringReader): $EnumSet<$Direction$Axis>;
        getExamples(): $Collection<string>;
        static swizzle(): $SwizzleArgument;
        static getSwizzle(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $EnumSet<$Direction$Axis>;
        parse<S>(arg0: $StringReader, arg1: S): $EnumSet<$Direction$Axis>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $LocalCoordinates implements $Coordinates {
        static parse(arg0: $StringReader): $LocalCoordinates;
        getPosition(arg0: $CommandSourceStack): $Vec3;
        isYRelative(): boolean;
        isZRelative(): boolean;
        isXRelative(): boolean;
        getRotation(arg0: $CommandSourceStack): $Vec2;
        getBlockPos(arg0: $CommandSourceStack): $BlockPos;
        static PREFIX_LOCAL_COORDINATE: string;
        constructor(arg0: number, arg1: number, arg2: number);
        get YRelative(): boolean;
        get ZRelative(): boolean;
        get XRelative(): boolean;
    }
    export class $WorldCoordinate {
        get(arg0: number): number;
        static parseInt(arg0: $StringReader): $WorldCoordinate;
        isRelative(): boolean;
        static isRelative(arg0: $StringReader): boolean;
        static parseDouble(arg0: $StringReader, arg1: boolean): $WorldCoordinate;
        static ERROR_EXPECTED_INT: $SimpleCommandExceptionType;
        static ERROR_EXPECTED_DOUBLE: $SimpleCommandExceptionType;
        constructor(arg0: boolean, arg1: number);
    }
    export class $Vec3Argument implements $ArgumentType<$Coordinates> {
        parse(arg0: $StringReader): $Coordinates;
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getCoordinates(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Coordinates;
        static vec3(arg0: boolean): $Vec3Argument;
        static vec3(): $Vec3Argument;
        static getVec3(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Vec3;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        static ERROR_MIXED_TYPE: $SimpleCommandExceptionType;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor(arg0: boolean);
        get examples(): $Collection<string>;
    }
    export class $ColumnPosArgument implements $ArgumentType<$Coordinates> {
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getColumnPos(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $ColumnPos;
        static columnPos(): $ColumnPosArgument;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        parse(arg0: $StringReader): $Coordinates;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $WorldCoordinates implements $Coordinates {
        static current(): $WorldCoordinates;
        static parseInt(arg0: $StringReader): $WorldCoordinates;
        static parseDouble(arg0: $StringReader, arg1: boolean): $WorldCoordinates;
        static absolute(arg0: $Vec2): $WorldCoordinates;
        static absolute(arg0: number, arg1: number, arg2: number): $WorldCoordinates;
        getPosition(arg0: $CommandSourceStack): $Vec3;
        isYRelative(): boolean;
        isZRelative(): boolean;
        isXRelative(): boolean;
        getRotation(arg0: $CommandSourceStack): $Vec2;
        getBlockPos(arg0: $CommandSourceStack): $BlockPos;
        constructor(arg0: $WorldCoordinate, arg1: $WorldCoordinate, arg2: $WorldCoordinate);
        get YRelative(): boolean;
        get ZRelative(): boolean;
        get XRelative(): boolean;
    }
    export class $Coordinates {
    }
    export interface $Coordinates {
        getPosition(arg0: $CommandSourceStack): $Vec3;
        isYRelative(): boolean;
        isZRelative(): boolean;
        isXRelative(): boolean;
        getRotation(arg0: $CommandSourceStack): $Vec2;
        getBlockPos(arg0: $CommandSourceStack): $BlockPos;
        get YRelative(): boolean;
        get ZRelative(): boolean;
        get XRelative(): boolean;
    }
    export class $Vec2Argument implements $ArgumentType<$Coordinates> {
        parse(arg0: $StringReader): $Coordinates;
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static vec2(): $Vec2Argument;
        static vec2(arg0: boolean): $Vec2Argument;
        static getVec2(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Vec2;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor(arg0: boolean);
        get examples(): $Collection<string>;
    }
}
