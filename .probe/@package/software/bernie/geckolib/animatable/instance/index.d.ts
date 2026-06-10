import { $DataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $Object } from "@package/java/lang";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $AnimatableManager } from "@package/software/bernie/geckolib/animation";

declare module "@package/software/bernie/geckolib/animatable/instance" {
    export class $AnimatableInstanceCache {
        getDataPoint<D>(arg0: number, arg1: $DataTicket<D>): D;
        addDataPoint<D>(arg0: number, arg1: $DataTicket<D>, arg2: D): void;
        getManagerForId<T extends $GeoAnimatable>(arg0: number): $AnimatableManager<T>;
        getRenderProvider(): $Object;
        constructor(arg0: $GeoAnimatable);
        get renderProvider(): $Object;
    }
}
