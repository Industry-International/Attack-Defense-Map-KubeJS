import { $Lookup, $Index, $Solver, $HeuristicStateLookup } from "@package/eu/ha3/presencefootsteps/world";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType_, $LivingEntity, $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Map_ } from "@package/java/util";
import { $PFConfig } from "@package/eu/ha3/presencefootsteps";
import { $Holder_ } from "@package/net/minecraft/core";
import { $SoundSource_, $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Variator } from "@package/eu/ha3/presencefootsteps/config";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Locomotion_, $StepSoundGenerator, $Locomotion } from "@package/eu/ha3/presencefootsteps/sound/generator";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $JsonObjectWriter_, $BlockReport$Reportable } from "@package/eu/ha3/presencefootsteps/util";
import { $SoundType_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $AcousticLibrary } from "@package/eu/ha3/presencefootsteps/sound/acoustics";
export * as generator from "@package/eu/ha3/presencefootsteps/sound/generator";
export * as acoustics from "@package/eu/ha3/presencefootsteps/sound/acoustics";
export * as player from "@package/eu/ha3/presencefootsteps/sound/player";

declare module "@package/eu/ha3/presencefootsteps/sound" {
    export class $State extends $Enum<$State> {
        getName(): string;
        static values(): $State[];
        static valueOf(arg0: string): $State;
        getTransitionDestination(): $State;
        isExtraLoud(): boolean;
        canTransition(): boolean;
        static WALK: $State;
        static DOWN: $State;
        static WANDER: $State;
        static CLIMB: $State;
        static DOWN_RUN: $State;
        static LAND: $State;
        static RUN: $State;
        static JUMP: $State;
        static STAND: $State;
        static SWIM: $State;
        static UP_RUN: $State;
        static UP: $State;
        static CLIMB_RUN: $State;
        get transitionDestination(): $State;
        get extraLoud(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $State}.
     */
    export type $State_ = "stand" | "walk" | "wander" | "swim" | "run" | "jump" | "land" | "climb" | "climb_run" | "down" | "down_run" | "up" | "up_run";
    export class $Options {
        static singular(arg0: string, arg1: number): $Options;
        static ofGetter(arg0: string, arg1: $Options$FloatSupplier_): $Options;
        static EMPTY: $Options;
        static FOLIAGE_VOLUME_OPTIONS: $Options;
        static WET_VOLUME_OPTIONS: $Options;
    }
    export interface $Options {
        get(arg0: string): number;
        containsKey(arg0: string): boolean;
        getOrDefault(arg0: string, arg1: number): number;
        and(arg0: $Options): $Options;
    }
    export class $SoundEngine implements $PreparableReloadListener {
        shutdown(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        reload(): void;
        getSolver(): $Solver;
        isRunning(arg0: $Minecraft): boolean;
        getConfig(): $PFConfig;
        getIsolator(): $Isolator;
        hasData(): boolean;
        onSoundRecieved(arg0: $Holder_<$SoundEvent>, arg1: $SoundSource_): boolean;
        onFrame(arg0: $Minecraft, arg1: $Entity): void;
        isEnabledFor(arg0: $Entity): boolean;
        getVolumeForSource(arg0: $LivingEntity): number;
        reloadEverything(arg0: $ResourceManager): void;
        getName(): string;
        constructor(arg0: $PFConfig);
        get solver(): $Solver;
        get config(): $PFConfig;
        get isolator(): $Isolator;
        get name(): string;
    }
    export class $Isolator extends $Record implements $BlockReport$Reportable {
        load(arg0: $ResourceManager): boolean;
        primitives(): $Lookup<$SoundEvent>;
        blocks(): $Lookup<$BlockState>;
        heuristics(): $HeuristicStateLookup;
        golems(): $Lookup<$EntityType<never>>;
        acoustics(): $AcousticLibrary;
        variator(): $Variator;
        locomotions(): $Index<$Entity, $Locomotion>;
        writeToReport(arg0: boolean, arg1: $JsonObjectWriter_, arg2: $Map_<string, $SoundType_>): void;
        static ACOUSTICS: $ResourceLocation;
        constructor(arg0: $SoundEngine);
        constructor(variator: $Variator, locomotions: $Index<$Entity, $Locomotion_>, heuristics: $HeuristicStateLookup, golems: $Lookup<$EntityType_<never>>, blocks: $Lookup<$BlockState_>, primitives: $Lookup<$SoundEvent_>, acoustics: $AcousticLibrary);
    }
    export class $StepSoundSource {
    }
    export interface $StepSoundSource {
        isStepBlocked(): boolean;
        getStepGenerator(arg0: $SoundEngine): ($StepSoundGenerator) | undefined;
        get stepBlocked(): boolean;
    }
    export class $Options$FloatSupplier {
    }
    export interface $Options$FloatSupplier {
        get(): number;
    }
    /**
     * Values that may be interpreted as {@link $Options$FloatSupplier}.
     */
    export type $Options$FloatSupplier_ = (() => number);
}
