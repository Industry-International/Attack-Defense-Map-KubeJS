import { $StageCreationEvent } from "@package/dev/latvian/mods/kubejs/stages";

declare module "@package/dev/latvian/mods/kubejs/integration/gamestages" {
    export class $GameStageClientHelper {
        constructor();
    }
    export class $GameStagesIntegration {
        static override(event: $StageCreationEvent): void;
        constructor();
    }
}
