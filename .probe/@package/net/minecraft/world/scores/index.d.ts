import { $ListTag, $CompoundTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ObjectiveCriteria$RenderType, $ObjectiveCriteria, $ObjectiveCriteria$RenderType_ } from "@package/net/minecraft/world/scores/criteria";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $Collection } from "@package/java/util";
import { $NumberFormat } from "@package/net/minecraft/network/chat/numbers";
import { $StringRepresentable$EnumCodec, $StringRepresentable } from "@package/net/minecraft/util";
import { $IntFunction, $Consumer_ } from "@package/java/util/function";
import { $ChatFormatting_, $ChatFormatting } from "@package/net/minecraft";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Enum, $Record } from "@package/java/lang";
export * as criteria from "@package/net/minecraft/world/scores/criteria";

declare module "@package/net/minecraft/world/scores" {
    export class $Scoreboard {
        addPlayerToTeam(arg0: string, arg1: $PlayerTeam): boolean;
        getPlayerTeam(arg0: string): $PlayerTeam;
        getPlayersTeam(arg0: string): $PlayerTeam;
        forAllObjectives(arg0: $ObjectiveCriteria, arg1: $ScoreHolder_, arg2: $Consumer_<$ScoreAccess>): void;
        onTeamChanged(arg0: $PlayerTeam): void;
        resetAllPlayerScores(arg0: $ScoreHolder_): void;
        getDisplayObjective(arg0: $DisplaySlot_): $Objective;
        removePlayerFromTeam(arg0: string, arg1: $PlayerTeam): void;
        removePlayerFromTeam(arg0: string): boolean;
        resetSinglePlayerScore(arg0: $ScoreHolder_, arg1: $Objective): void;
        onPlayerScoreRemoved(arg0: $ScoreHolder_, arg1: $Objective): void;
        setDisplayObjective(arg0: $DisplaySlot_, arg1: $Objective): void;
        getOrCreatePlayerScore(arg0: $ScoreHolder_, arg1: $Objective, arg2: boolean): $ScoreAccess;
        getOrCreatePlayerScore(arg0: $ScoreHolder_, arg1: $Objective): $ScoreAccess;
        getObjective(arg0: string): $Objective;
        getPlayerScoreInfo(arg0: $ScoreHolder_, arg1: $Objective): $ReadOnlyScoreInfo;
        addObjective(arg0: string, arg1: $ObjectiveCriteria, arg2: $Component_, arg3: $ObjectiveCriteria$RenderType_, arg4: boolean, arg5: $NumberFormat): $Objective;
        getTeamNames(): $Collection<string>;
        onTeamRemoved(arg0: $PlayerTeam): void;
        getPlayerTeams(): $Collection<$PlayerTeam>;
        addPlayerTeam(arg0: string): $PlayerTeam;
        onObjectiveChanged(arg0: $Objective): void;
        getObjectives(): $Collection<$Objective>;
        onTeamAdded(arg0: $PlayerTeam): void;
        getTrackedPlayers(): $Collection<$ScoreHolder>;
        removePlayerTeam(arg0: $PlayerTeam): void;
        onPlayerRemoved(arg0: $ScoreHolder_): void;
        onScoreLockChanged(arg0: $ScoreHolder_, arg1: $Objective): void;
        removeObjective(arg0: $Objective): void;
        onObjectiveRemoved(arg0: $Objective): void;
        entityRemoved(arg0: $Entity): void;
        onScoreChanged(arg0: $ScoreHolder_, arg1: $Objective, arg2: $Score): void;
        loadPlayerScores(arg0: $ListTag_, arg1: $HolderLookup$Provider): void;
        onObjectiveAdded(arg0: $Objective): void;
        getObjectiveNames(): $Collection<string>;
        listPlayerScores(arg0: $ScoreHolder_): $Object2IntMap<$Objective>;
        listPlayerScores(arg0: $Objective): $Collection<$PlayerScoreEntry>;
        savePlayerScores(arg0: $HolderLookup$Provider): $ListTag;
        static HIDDEN_SCORE_PREFIX: string;
        constructor();
        get teamNames(): $Collection<string>;
        get playerTeams(): $Collection<$PlayerTeam>;
        get objectives(): $Collection<$Objective>;
        get trackedPlayers(): $Collection<$ScoreHolder>;
        get objectiveNames(): $Collection<string>;
    }
    export class $ReadOnlyScoreInfo {
        static safeFormatValue(arg0: $ReadOnlyScoreInfo, arg1: $NumberFormat): $MutableComponent;
    }
    export interface $ReadOnlyScoreInfo {
        value(): number;
        isLocked(): boolean;
        numberFormat(): $NumberFormat;
        formatValue(arg0: $NumberFormat): $MutableComponent;
        get locked(): boolean;
    }
    export class $Objective {
        displayAutoUpdate(): boolean;
        getName(): string;
        getDisplayName(): $Component;
        numberFormat(): $NumberFormat;
        setNumberFormat(arg0: $NumberFormat): void;
        numberFormatOrDefault(arg0: $NumberFormat): $NumberFormat;
        setRenderType(arg0: $ObjectiveCriteria$RenderType_): void;
        getRenderType(): $ObjectiveCriteria$RenderType;
        getScoreboard(): $Scoreboard;
        setDisplayName(arg0: $Component_): void;
        getFormattedDisplayName(): $Component;
        getCriteria(): $ObjectiveCriteria;
        setDisplayAutoUpdate(arg0: boolean): void;
        constructor(arg0: $Scoreboard, arg1: string, arg2: $ObjectiveCriteria, arg3: $Component_, arg4: $ObjectiveCriteria$RenderType_, arg5: boolean, arg6: $NumberFormat);
        get name(): string;
        get scoreboard(): $Scoreboard;
        get formattedDisplayName(): $Component;
        get criteria(): $ObjectiveCriteria;
    }
    export class $DisplaySlot extends $Enum<$DisplaySlot> implements $StringRepresentable {
        static values(): $DisplaySlot[];
        static valueOf(arg0: string): $DisplaySlot;
        id(): number;
        getSerializedName(): string;
        static teamColorToSlot(arg0: $ChatFormatting_): $DisplaySlot;
        getRemappedEnumConstantName(): string;
        static BELOW_NAME: $DisplaySlot;
        static TEAM_GREEN: $DisplaySlot;
        static CODEC: $StringRepresentable$EnumCodec<$DisplaySlot>;
        static TEAM_BLACK: $DisplaySlot;
        static TEAM_DARK_GREEN: $DisplaySlot;
        static TEAM_BLUE: $DisplaySlot;
        static TEAM_DARK_RED: $DisplaySlot;
        static TEAM_YELLOW: $DisplaySlot;
        static TEAM_DARK_GRAY: $DisplaySlot;
        static TEAM_AQUA: $DisplaySlot;
        static BY_ID: $IntFunction<$DisplaySlot>;
        static SIDEBAR: $DisplaySlot;
        static TEAM_DARK_AQUA: $DisplaySlot;
        static TEAM_RED: $DisplaySlot;
        static TEAM_DARK_BLUE: $DisplaySlot;
        static TEAM_LIGHT_PURPLE: $DisplaySlot;
        static TEAM_DARK_PURPLE: $DisplaySlot;
        static TEAM_WHITE: $DisplaySlot;
        static TEAM_GOLD: $DisplaySlot;
        static LIST: $DisplaySlot;
        static TEAM_GRAY: $DisplaySlot;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DisplaySlot}.
     */
    export type $DisplaySlot_ = "list" | "sidebar" | "below_name" | "sidebar.team.black" | "sidebar.team.dark_blue" | "sidebar.team.dark_green" | "sidebar.team.dark_aqua" | "sidebar.team.dark_red" | "sidebar.team.dark_purple" | "sidebar.team.gold" | "sidebar.team.gray" | "sidebar.team.dark_gray" | "sidebar.team.blue" | "sidebar.team.green" | "sidebar.team.aqua" | "sidebar.team.red" | "sidebar.team.light_purple" | "sidebar.team.yellow" | "sidebar.team.white";
    export class $Score implements $ReadOnlyScoreInfo {
        value(arg0: number): void;
        value(): number;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $Score;
        display(arg0: $Component_): void;
        display(): $Component;
        isLocked(): boolean;
        numberFormat(): $NumberFormat;
        numberFormat(arg0: $NumberFormat): void;
        setLocked(arg0: boolean): void;
        formatValue(arg0: $NumberFormat): $MutableComponent;
        constructor();
    }
    export class $Team {
        getName(): string;
        isAllowFriendlyFire(): boolean;
        getColor(): $ChatFormatting;
        getDeathMessageVisibility(): $Team$Visibility;
        canSeeFriendlyInvisibles(): boolean;
        isAlliedTo(arg0: $Team): boolean;
        getPlayers(): $Collection<string>;
        getCollisionRule(): $Team$CollisionRule;
        getFormattedName(arg0: $Component_): $MutableComponent;
        getNameTagVisibility(): $Team$Visibility;
        constructor();
        get name(): string;
        get allowFriendlyFire(): boolean;
        get color(): $ChatFormatting;
        get deathMessageVisibility(): $Team$Visibility;
        get players(): $Collection<string>;
        get collisionRule(): $Team$CollisionRule;
        get nameTagVisibility(): $Team$Visibility;
    }
    export class $Team$CollisionRule extends $Enum<$Team$CollisionRule> {
        static values(): $Team$CollisionRule[];
        static valueOf(arg0: string): $Team$CollisionRule;
        getDisplayName(): $Component;
        static byName(arg0: string): $Team$CollisionRule;
        static PUSH_OTHER_TEAMS: $Team$CollisionRule;
        static NEVER: $Team$CollisionRule;
        id: number;
        static PUSH_OWN_TEAM: $Team$CollisionRule;
        static ALWAYS: $Team$CollisionRule;
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Team$CollisionRule}.
     */
    export type $Team$CollisionRule_ = "always" | "never" | "push_other_teams" | "push_own_team";
    export class $ScoreHolder {
        static forNameOnly(arg0: string): $ScoreHolder;
        static fromGameProfile(arg0: $GameProfile): $ScoreHolder;
        static WILDCARD: $ScoreHolder;
        static WILDCARD_NAME: string;
    }
    export interface $ScoreHolder {
        getDisplayName(): $Component;
        getFeedbackDisplayName(): $Component;
        getScoreboardName(): string;
        get displayName(): $Component;
        get feedbackDisplayName(): $Component;
        get scoreboardName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ScoreHolder}.
     */
    export type $ScoreHolder_ = (() => string);
    export class $PlayerScoreEntry extends $Record {
        value(): number;
        isHidden(): boolean;
        owner(): string;
        display(): $Component;
        ownerName(): $Component;
        formatValue(arg0: $NumberFormat): $MutableComponent;
        numberFormatOverride(): $NumberFormat;
        constructor(arg0: string, arg1: number, arg2: $Component_, arg3: $NumberFormat);
        get hidden(): boolean;
    }
    export class $Team$Visibility extends $Enum<$Team$Visibility> {
        static values(): $Team$Visibility[];
        static valueOf(arg0: string): $Team$Visibility;
        getDisplayName(): $Component;
        static byName(arg0: string): $Team$Visibility;
        static getAllNames(): string[];
        static HIDE_FOR_OTHER_TEAMS: $Team$Visibility;
        static NEVER: $Team$Visibility;
        id: number;
        static ALWAYS: $Team$Visibility;
        static HIDE_FOR_OWN_TEAM: $Team$Visibility;
        get displayName(): $Component;
        static get allNames(): string[];
    }
    /**
     * Values that may be interpreted as {@link $Team$Visibility}.
     */
    export type $Team$Visibility_ = "always" | "never" | "hide_for_other_teams" | "hide_for_own_team";
    export class $PlayerScores {
    }
    export class $PlayerTeam extends $Team {
        getDisplayName(): $Component;
        setColor(arg0: $ChatFormatting_): void;
        getScoreboard(): $Scoreboard;
        static formatNameForTeam(arg0: $Team, arg1: $Component_): $MutableComponent;
        packOptions(): number;
        setDisplayName(arg0: $Component_): void;
        getPlayerPrefix(): $Component;
        getPlayerSuffix(): $Component;
        unpackOptions(arg0: number): void;
        setPlayerSuffix(arg0: $Component_): void;
        setPlayerPrefix(arg0: $Component_): void;
        setCollisionRule(arg0: $Team$CollisionRule_): void;
        getFormattedDisplayName(): $MutableComponent;
        setNameTagVisibility(arg0: $Team$Visibility_): void;
        setAllowFriendlyFire(arg0: boolean): void;
        setDeathMessageVisibility(arg0: $Team$Visibility_): void;
        setSeeFriendlyInvisibles(arg0: boolean): void;
        constructor(arg0: $Scoreboard, arg1: string);
        set color(value: $ChatFormatting_);
        get scoreboard(): $Scoreboard;
        set collisionRule(value: $Team$CollisionRule_);
        get formattedDisplayName(): $MutableComponent;
        set nameTagVisibility(value: $Team$Visibility_);
        set allowFriendlyFire(value: boolean);
        set deathMessageVisibility(value: $Team$Visibility_);
        set seeFriendlyInvisibles(value: boolean);
    }
    export class $ScoreboardSaveData extends $SavedData {
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ScoreboardSaveData;
        static FILE_ID: string;
        constructor(arg0: $Scoreboard);
    }
    export class $ScoreAccess {
    }
    export interface $ScoreAccess {
        lock(): void;
        reset(): void;
        get(): number;
        add(arg0: number): number;
        increment(): number;
        set(arg0: number): void;
        unlock(): void;
        display(arg0: $Component_): void;
        display(): $Component;
        locked(): boolean;
        numberFormatOverride(arg0: $NumberFormat): void;
    }
}
