import { $Level_ } from "@package/net/minecraft/world/level";
import { $BiFunction_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Class } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockApiLookup$BlockApiProvider_, $BlockApiLookup$BlockEntityApiProvider_, $BlockApiCache, $BlockApiLookup$BlockApiProvider, $BlockApiLookup } from "@package/net/fabricmc/fabric/api/lookup/v1/block";

declare module "@package/net/fabricmc/fabric/impl/lookup/block" {
    export class $BlockApiCacheImpl<A, C> implements $BlockApiCache<A, C> {
        find(arg0: $BlockState_, arg1: C): A;
        invalidate(): void;
        getLookup(): $BlockApiLookupImpl<A, C>;
        getPos(): $BlockPos;
        getBlockEntity(): $BlockEntity;
        getWorld(): $ServerLevel;
        find(arg0: C): A;
        constructor(arg0: $BlockApiLookupImpl<A, C>, arg1: $ServerLevel, arg2: $BlockPos_);
        get lookup(): $BlockApiLookupImpl<A, C>;
        get pos(): $BlockPos;
        get blockEntity(): $BlockEntity;
        get world(): $ServerLevel;
    }
    export class $BlockApiLookupImpl<A, C> implements $BlockApiLookup<A, C> {
        static get<A, C>(arg0: $ResourceLocation_, arg1: $Class<A>, arg2: $Class<C>): $BlockApiLookup<A, C>;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): A;
        getId(): $ResourceLocation;
        getProvider(arg0: $Block_): $BlockApiLookup$BlockApiProvider<A, C>;
        apiClass(): $Class<A>;
        contextClass(): $Class<C>;
        registerFallback(arg0: $BlockApiLookup$BlockApiProvider_<A, C>): void;
        registerSelf(...arg0: $BlockEntityType_<never>[]): void;
        registerForBlocks(arg0: $BlockApiLookup$BlockApiProvider_<A, C>, ...arg1: $Block_[]): void;
        registerForBlockEntities(arg0: $BlockApiLookup$BlockEntityApiProvider_<A, C>, ...arg1: $BlockEntityType_<never>[]): void;
        getFallbackProviders(): $List<$BlockApiLookup$BlockApiProvider<A, C>>;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: C): A;
        registerForBlockEntity<T extends $BlockEntity>(arg0: $BiFunction_<T, C, A>, arg1: $BlockEntityType_<T>): void;
        get id(): $ResourceLocation;
        get fallbackProviders(): $List<$BlockApiLookup$BlockApiProvider<A, C>>;
    }
    export class $ServerWorldCache {
    }
    export interface $ServerWorldCache {
        fabric_invalidateCache(arg0: $BlockPos_): void;
        fabric_registerCache(arg0: $BlockPos_, arg1: $BlockApiCacheImpl<never, never>): void;
    }
}
