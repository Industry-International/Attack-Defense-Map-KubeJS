
declare module "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics" {
    export class $KineticBlockEntityExtension {
    }
    export interface $KineticBlockEntityExtension {
        simulated$setValidationCountdown(arg0: number): void;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        simulated$getConnectedToExtraKinetics(): boolean;
    }
}
