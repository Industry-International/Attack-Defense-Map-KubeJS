import { $RenderGunTooltipTextEvent } from "@package/mod/chloeprime/gunsmithlib/api/client";
import { $InternalEvent } from "@package/mod/chloeprime/gunsmithlib/common/internal";

declare module "@package/mod/chloeprime/gunsmithlib/client" {
    export class $ClientInternalEvents$RenderGunTooltipTextPre extends $InternalEvent<$RenderGunTooltipTextEvent> {
        constructor(arg0: $RenderGunTooltipTextEvent);
    }
}
