
declare module "@package/com/verr1/synaxis/mixin/accessor" {
    export class $MouseHandlerAccessor {
    }
    export interface $MouseHandlerAccessor {
        synaxis$setLeftPressed(arg0: boolean): void;
        synaxis$setRightPressed(arg0: boolean): void;
        synaxis$setMiddlePressed(arg0: boolean): void;
        synaxis$getXpos(): number;
        synaxis$getYpos(): number;
    }
}
