import { $AbstractCommonScriptingExtension } from "@package/mod/chloeprime/gunsmithlib/common";
import { $GunAnimationStateContextExtension, $RenderGunTooltipTextEvent } from "@package/mod/chloeprime/gunsmithlib/api/client";
import { $InternalEvent } from "@package/mod/chloeprime/gunsmithlib/common/internal";
export * as gunpack_extension from "@package/mod/chloeprime/gunsmithlib/client/gunpack_extension";

declare module "@package/mod/chloeprime/gunsmithlib/client" {
    export class $ClientInternalEvents$RenderGunTooltipTextPre extends $InternalEvent<$RenderGunTooltipTextEvent> {
        constructor(arg0: $RenderGunTooltipTextEvent);
    }
    export class $AbstractGunAnimationStateContextExtension {
    }
    export interface $AbstractGunAnimationStateContextExtension extends $AbstractCommonScriptingExtension, $GunAnimationStateContextExtension {
    }
}
