import { $ToIntFunction } from "@package/java/util/function";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $ClientGunTooltip } from "@package/com/tacz/guns/client/tooltip";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $Record } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $GunInfo_, $GunInfo } from "@package/mod/chloeprime/gunsmithlib/api/util";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/mod/chloeprime/gunsmithlib/api/client" {
    export class $RenderGunTooltipTextEvent$AfterUpgradeTip extends $RenderGunTooltipTextEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $GunTooltipContext_, arg1: $RenderGunTooltipTextEvent$RenderContext_);
    }
    export class $RenderGunTooltipTextEvent$AfterPackInfo extends $RenderGunTooltipTextEvent {
        constructor(arg0: $GunTooltipContext_, arg1: $RenderGunTooltipTextEvent$RenderContext_);
    }
    export class $RenderGunTooltipTextEvent$AfterAmmoInfo extends $RenderGunTooltipTextEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $GunTooltipContext_, arg1: $RenderGunTooltipTextEvent$RenderContext_);
    }
    export class $RenderGunTooltipTextEvent$BeforeDescription extends $RenderGunTooltipTextEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $GunTooltipContext_, arg1: $RenderGunTooltipTextEvent$RenderContext_);
    }
    export class $GunTooltipEvent$ComputeHeight extends $GunTooltipEvent$ComputeSize {
        getOriginalHeight(): number;
        setHeight(arg0: number): void;
        getHeight(): number;
        pumpHeight(arg0: number): void;
        constructor(arg0: $GunTooltipContext_, arg1: number);
        get originalHeight(): number;
    }
    export class $GunTooltipEvent$ComputeWidth extends $GunTooltipEvent$ComputeSize {
        getOriginalWidth(): number;
        getWidth(): number;
        setWidth(arg0: number): void;
        pumpWidth(arg0: number): void;
        constructor(arg0: $GunTooltipContext_, arg1: number);
        get originalWidth(): number;
    }
    export class $RenderGunTooltipTextEvent extends $GunTooltipEvent {
        enqueue(arg0: $RenderGunTooltipTextEvent$RenderFunc_): void;
        doRender(): void;
        getHeight(): number;
        pumpHeight(arg0: number): void;
        constructor(arg0: $GunTooltipContext_, arg1: $RenderGunTooltipTextEvent$RenderContext_);
        get height(): number;
    }
    export class $RenderGunTooltipTextEvent$AfterDescription extends $RenderGunTooltipTextEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $GunTooltipContext_, arg1: $RenderGunTooltipTextEvent$RenderContext_);
    }
    export class $RenderGunTooltipTextEvent$RenderFunc {
    }
    export interface $RenderGunTooltipTextEvent$RenderFunc extends $ToIntFunction<$RenderGunTooltipTextEvent$RenderContext> {
    }
    /**
     * Values that may be interpreted as {@link $RenderGunTooltipTextEvent$RenderFunc}.
     */
    export type $RenderGunTooltipTextEvent$RenderFunc_ = (() => void);
    export class $RenderGunTooltipTextEvent$AfterBaseInfo extends $RenderGunTooltipTextEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $GunTooltipContext_, arg1: $RenderGunTooltipTextEvent$RenderContext_);
    }
    export class $GunTooltipEvent$Initialize extends $GunTooltipEvent {
        constructor(arg0: $GunTooltipContext_);
    }
    export class $GunTooltipEvent extends $Event {
        getTooltipComponent(): $ClientGunTooltip;
        getGunInfo(): ($GunInfo) | undefined;
        get tooltipComponent(): $ClientGunTooltip;
        get gunInfo(): ($GunInfo) | undefined;
    }
    export class $GunTooltipContext extends $Record {
        instance(): $ClientGunTooltip;
        gunInfo(): $GunInfo;
        constructor(instance: $ClientGunTooltip, gunInfo: $GunInfo_);
    }
    export class $RenderGunTooltipTextEvent$AfterExtraDamageInfo extends $RenderGunTooltipTextEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $GunTooltipContext_, arg1: $RenderGunTooltipTextEvent$RenderContext_);
    }
    export class $GunTooltipEvent$ComputeSize extends $GunTooltipEvent {
        constructor(arg0: $GunTooltipContext_);
    }
    export class $RenderGunTooltipTextEvent$RenderContext extends $Record {
        x(): number;
        buffer(): $MultiBufferSource$BufferSource;
        y(): number;
        y0(): $MutableInt;
        matrix(): $Matrix4f;
        font(): $Font;
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $MultiBufferSource$BufferSource);
        constructor(font: $Font, x: number, y0: $MutableInt, matrix: $Matrix4f, buffer: $MultiBufferSource$BufferSource);
    }
}
