import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";

declare module "@package/com/lowdragmc/lowdraglib2/core/mixins/kjs" {
    export class $ServerScriptManagerAccessor {
        static getStaticInstance(): $ServerScriptManager;
        static get staticInstance(): $ServerScriptManager;
    }
    export interface $ServerScriptManagerAccessor {
    }
}
