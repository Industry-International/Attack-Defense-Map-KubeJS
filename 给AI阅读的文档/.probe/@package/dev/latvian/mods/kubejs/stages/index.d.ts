import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Record } from "@package/java/lang";
import { $Collection, $Collection_ } from "@package/java/util";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/dev/latvian/mods/kubejs/stages" {
    export class $Stages {
    }
    export interface $Stages {
        remove(stage: string): boolean;
        clear(): boolean;
        replace(stages: $Collection_<string>): void;
        add(stage: string): boolean;
        set(stage: string, enabled: boolean): boolean;
        sync(): void;
        getAll(): $Collection<string>;
        has(stage: string): boolean;
        toggle(stage: string): boolean;
        getPlayer(): $Player;
        removeNoUpdate(stage: string): boolean;
        addNoUpdate(stage: string): boolean;
        get all(): $Collection<string>;
        get player(): $Player;
    }
    export class $TagWrapperStages extends $Record implements $Stages {
        clear(): boolean;
        replace(stages: $Collection_<string>): void;
        getAll(): $Collection<string>;
        player(): $Player;
        getPlayer(): $Player;
        removeNoUpdate(stage: string): boolean;
        addNoUpdate(stage: string): boolean;
        remove(stage: string): boolean;
        add(stage: string): boolean;
        set(stage: string, enabled: boolean): boolean;
        sync(): void;
        has(stage: string): boolean;
        toggle(stage: string): boolean;
        constructor(player: $Player);
        get all(): $Collection<string>;
    }
    export class $StageCreationEvent extends $PlayerEvent implements $ICancellableEvent {
        setPlayerStages(s: $Stages): void;
        getPlayerStages(): $Stages;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
    }
    export class $StageEvents {
        static get(player: $Player): $Stages;
        static create(player: $Player): $Stages;
    }
    export interface $StageEvents {
    }
    export class $NoStages extends $Record implements $Stages {
        clear(): boolean;
        replace(stages: $Collection_<string>): void;
        sync(): void;
        getAll(): $Collection<string>;
        has(stage: string): boolean;
        player(): $Player;
        getPlayer(): $Player;
        removeNoUpdate(stage: string): boolean;
        addNoUpdate(stage: string): boolean;
        remove(stage: string): boolean;
        add(stage: string): boolean;
        set(stage: string, enabled: boolean): boolean;
        toggle(stage: string): boolean;
        static NULL_INSTANCE: $NoStages;
        constructor(player: $Player);
        get all(): $Collection<string>;
    }
}
