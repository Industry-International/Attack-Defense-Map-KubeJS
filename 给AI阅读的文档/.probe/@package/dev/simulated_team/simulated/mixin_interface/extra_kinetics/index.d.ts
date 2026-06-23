
declare module "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics" {
    export class $KineticBlockEntityExtension {
    }
    export interface $KineticBlockEntityExtension {
        simulated$getConnectedToExtraKinetics(): boolean;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        simulated$setValidationCountdown(arg0: number): void;
    }
}
