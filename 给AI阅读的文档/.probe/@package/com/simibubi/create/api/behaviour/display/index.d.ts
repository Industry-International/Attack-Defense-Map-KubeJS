import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $FlapDisplayLayout, $FlapDisplayBlockEntity } from "@package/com/simibubi/create/content/trains/display";
import { $DisplayLinkContext } from "@package/com/simibubi/create/content/redstone/displayLink";
import { $MutableComponent, $Component, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $SimpleRegistry, $SimpleRegistry$Multi } from "@package/com/simibubi/create/api/registry";
import { $List, $List_ } from "@package/java/util";
import { $NonNullUnaryOperator } from "@package/com/tterrag/registrate/util/nullness";
import { $BlockBuilder } from "@package/com/tterrag/registrate/builders";
import { $RegistryEntry } from "@package/com/tterrag/registrate/util/entry";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModularGuiLineBuilder } from "@package/com/simibubi/create/foundation/gui";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $DisplayTargetStats, $DisplayTargetStats_ } from "@package/com/simibubi/create/content/redstone/displayLink/target";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/api/behaviour/display" {
    export class $DisplayTarget {
        static get(arg0: $ResourceLocation_): $DisplayTarget;
        static get(arg0: $LevelAccessor, arg1: $BlockPos_): $DisplayTarget;
        static reserve(arg0: number, arg1: $BlockEntity, arg2: $DisplayLinkContext): void;
        provideStats(arg0: $DisplayLinkContext): $DisplayTargetStats;
        getLineOptionText(arg0: number): $Component;
        getMultiblockBounds(arg0: $LevelAccessor, arg1: $BlockPos_): $AABB;
        requiresComponentSanitization(): boolean;
        static displayTarget<B extends $Block, P>(arg0: $RegistryEntry<$DisplayTarget_, $DisplayTarget_>): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        acceptText(arg0: number, arg1: $List_<$MutableComponent_>, arg2: $DisplayLinkContext): void;
        isReserved(arg0: number, arg1: $BlockEntity, arg2: $DisplayLinkContext): boolean;
        static BY_BLOCK_ENTITY: $SimpleRegistry<$BlockEntityType<never>, $DisplayTarget>;
        static BY_BLOCK: $SimpleRegistry<$Block, $DisplayTarget>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $DisplayTarget}.
     */
    export type $DisplayTarget_ = RegistryTypes.CreateDisplayTarget;
    export class $DisplaySource {
        getName(): $Component;
        static get(arg0: $ResourceLocation_): $DisplaySource;
        static getAll(arg0: $LevelAccessor, arg1: $BlockPos_): $List<$DisplaySource>;
        shouldPassiveReset(): boolean;
        transferData(arg0: $DisplayLinkContext, arg1: $DisplayTarget_, arg2: number): void;
        onSignalReset(arg0: $DisplayLinkContext): void;
        populateData(arg0: $DisplayLinkContext): void;
        initConfigurationWidgets(arg0: $DisplayLinkContext, arg1: $ModularGuiLineBuilder, arg2: boolean): void;
        static displaySource<B extends $Block, P>(arg0: $RegistryEntry<$DisplaySource_, $DisplaySource_>): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        provideText(arg0: $DisplayLinkContext, arg1: $DisplayTargetStats_): $List<$MutableComponent>;
        loadFlapDisplayLayout(arg0: $DisplayLinkContext, arg1: $FlapDisplayBlockEntity, arg2: $FlapDisplayLayout, arg3: number): void;
        loadFlapDisplayLayout(arg0: $DisplayLinkContext, arg1: $FlapDisplayBlockEntity, arg2: $FlapDisplayLayout): void;
        provideFlapDisplayText(arg0: $DisplayLinkContext, arg1: $DisplayTargetStats_): $List<$List<$MutableComponent>>;
        getPassiveRefreshTicks(): number;
        static BY_BLOCK_ENTITY: $SimpleRegistry$Multi<$BlockEntityType<never>, $DisplaySource>;
        static WHITESPACE: $MutableComponent;
        static EMPTY: $List<$MutableComponent>;
        static EMPTY_LINE: $MutableComponent;
        static BY_BLOCK: $SimpleRegistry$Multi<$Block, $DisplaySource>;
        constructor();
        get name(): $Component;
        get passiveRefreshTicks(): number;
    }
    /**
     * Values that may be interpreted as {@link $DisplaySource}.
     */
    export type $DisplaySource_ = RegistryTypes.CreateDisplaySource;
    export interface $DisplaySource extends RegistryMarked<RegistryTypes.CreateDisplaySourceTag, RegistryTypes.CreateDisplaySource> {}
    export interface $DisplayTarget extends RegistryMarked<RegistryTypes.CreateDisplayTargetTag, RegistryTypes.CreateDisplayTarget> {}
}
