import { $ModuleSession } from "@package/xaero/hud/module";
import { $Iterable } from "@package/java/lang";

declare module "@package/xaero/hud/pushbox" {
    export class $PushboxHandler {
        updateAll(arg0: $PushboxManager): void;
        applyScreenEdges(arg0: $PushboxHandler$State, arg1: number, arg2: number, arg3: number): void;
        applyPushboxes(arg0: $PushboxManager, arg1: $PushboxHandler$State, arg2: number, arg3: number, arg4: number): void;
        postUpdateAll(arg0: $PushboxManager): void;
        constructor();
    }
    export class $PushBox {
        update(): void;
        isActive(): boolean;
        push(arg0: $PushboxHandler$State, arg1: number, arg2: number): void;
        postUpdate(): void;
        getY(arg0: number, arg1: number): number;
        getX(arg0: number, arg1: number): number;
        setActive(arg0: boolean): void;
        getW(arg0: number, arg1: number): number;
        getH(arg0: number, arg1: number): number;
        getAnchorX(): number;
        getAnchorY(): number;
        getVerticalBias(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        get anchorX(): number;
        get anchorY(): number;
        get verticalBias(): number;
    }
    export class $PushboxManager {
        add(arg0: $PushBox): void;
        getAll(): $Iterable<$PushBox>;
        constructor();
        get all(): $Iterable<$PushBox>;
    }
    export class $PushboxHandler$State {
        resetForModule(arg0: $ModuleSession<never>, arg1: number, arg2: number, arg3: number): $PushboxHandler$State;
        w: number;
        x: number;
        h: number;
        y: number;
        constructor();
    }
}
