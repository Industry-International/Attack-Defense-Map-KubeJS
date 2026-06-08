import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ScoreHolder } from "@package/net/minecraft/world/scores";
import { $Set } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContext, $LootContext$EntityTarget, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/providers/score" {
    export class $ContextScoreboardNameProvider extends $Record implements $ScoreboardNameProvider {
        target(): $LootContext$EntityTarget;
        getType(): $LootScoreProviderType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static forTarget(arg0: $LootContext$EntityTarget_): $ScoreboardNameProvider;
        getScoreHolder(arg0: $LootContext): $ScoreHolder;
        static INLINE_CODEC: $Codec<$ContextScoreboardNameProvider>;
        static CODEC: $MapCodec<$ContextScoreboardNameProvider>;
        constructor(arg0: $LootContext$EntityTarget_);
        get type(): $LootScoreProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $ScoreboardNameProvider {
    }
    export interface $ScoreboardNameProvider {
        getType(): $LootScoreProviderType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getScoreHolder(arg0: $LootContext): $ScoreHolder;
        get type(): $LootScoreProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootScoreProviderType extends $Record {
        codec(): $MapCodec<$ScoreboardNameProvider>;
        constructor(arg0: $MapCodec_<$ScoreboardNameProvider>);
    }
    /**
     * Values that may be interpreted as {@link $LootScoreProviderType}.
     */
    export type $LootScoreProviderType_ = RegistryTypes.LootScoreProviderType;
    export interface $LootScoreProviderType extends RegistryMarked<RegistryTypes.LootScoreProviderTypeTag, RegistryTypes.LootScoreProviderType> {}
    export class $ScoreboardNameProviders {
        static CODEC: $Codec<$ScoreboardNameProvider>;
        static FIXED: $LootScoreProviderType;
        static CONTEXT: $LootScoreProviderType;
        constructor();
    }
    export class $FixedScoreboardNameProvider extends $Record implements $ScoreboardNameProvider {
        name(): string;
        static forName(arg0: string): $ScoreboardNameProvider;
        getType(): $LootScoreProviderType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getScoreHolder(arg0: $LootContext): $ScoreHolder;
        static CODEC: $MapCodec<$FixedScoreboardNameProvider>;
        constructor(arg0: string);
        get type(): $LootScoreProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
}
