import { $ShooterStates } from "@package/mod/chloeprime/gunsmithlib/api/common/scripting_v2/content";

declare module "@package/mod/chloeprime/gunsmithlib/api/client/scripting_v2/content" {
    export class $ClientShootStates {
    }
    export interface $ClientShootStates extends $ShooterStates {
    }
}
