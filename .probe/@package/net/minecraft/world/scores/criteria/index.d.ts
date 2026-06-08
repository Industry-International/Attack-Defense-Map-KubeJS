import { $Set } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable$EnumCodec, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/scores/criteria" {
    export class $ObjectiveCriteria {
        getName(): string;
        isReadOnly(): boolean;
        static byName(arg0: string): ($ObjectiveCriteria) | undefined;
        static registerCustom(arg0: string): $ObjectiveCriteria;
        static registerCustom(arg0: string, arg1: boolean, arg2: $ObjectiveCriteria$RenderType_): $ObjectiveCriteria;
        static getCustomCriteriaNames(): $Set<string>;
        getDefaultRenderType(): $ObjectiveCriteria$RenderType;
        static DEATH_COUNT: $ObjectiveCriteria;
        static ARMOR: $ObjectiveCriteria;
        static TRIGGER: $ObjectiveCriteria;
        static KILL_COUNT_ALL: $ObjectiveCriteria;
        static AIR: $ObjectiveCriteria;
        static LEVEL: $ObjectiveCriteria;
        static DUMMY: $ObjectiveCriteria;
        static EXPERIENCE: $ObjectiveCriteria;
        static HEALTH: $ObjectiveCriteria;
        static KILL_COUNT_PLAYERS: $ObjectiveCriteria;
        static TEAM_KILL: $ObjectiveCriteria[];
        static KILLED_BY_TEAM: $ObjectiveCriteria[];
        static FOOD: $ObjectiveCriteria;
        constructor(arg0: string, arg1: boolean, arg2: $ObjectiveCriteria$RenderType_);
        constructor(arg0: string);
        get name(): string;
        get readOnly(): boolean;
        static get customCriteriaNames(): $Set<string>;
        get defaultRenderType(): $ObjectiveCriteria$RenderType;
    }
    export class $ObjectiveCriteria$RenderType extends $Enum<$ObjectiveCriteria$RenderType> implements $StringRepresentable {
        static values(): $ObjectiveCriteria$RenderType[];
        static valueOf(arg0: string): $ObjectiveCriteria$RenderType;
        getId(): string;
        getSerializedName(): string;
        static byId(arg0: string): $ObjectiveCriteria$RenderType;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$ObjectiveCriteria$RenderType>;
        static HEARTS: $ObjectiveCriteria$RenderType;
        static INTEGER: $ObjectiveCriteria$RenderType;
        get id(): string;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ObjectiveCriteria$RenderType}.
     */
    export type $ObjectiveCriteria$RenderType_ = "integer" | "hearts";
}
