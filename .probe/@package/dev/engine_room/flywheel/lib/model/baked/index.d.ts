import { $ConcurrentMap } from "@package/java/util/concurrent";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $AccessorPartialModel } from "@package/com/railwayteam/railways/mixin/client";

declare module "@package/dev/engine_room/flywheel/lib/model/baked" {
    export class $PartialModel implements $AccessorPartialModel {
        get(): $BakedModel;
        static of(modelLocation: $ResourceLocation_): $PartialModel;
        modelLocation(): $ResourceLocation;
        static getALL$railways_$md$9aa1a5$0(): $ConcurrentMap<any, any>;
        static getPopulateOnInit$railways_$md$9aa1a5$2(): boolean;
        static setPopulateOnInit$railways_$md$9aa1a5$1(arg0: boolean): void;
        railways$setBakedModel(arg0: $BakedModel): void;
        static get ALL$railways_$md$9aa1a5$0(): $ConcurrentMap<any, any>;
        static get populateOnInit$railways_$md$9aa1a5$2(): boolean;
        static set populateOnInit$railways_$md$9aa1a5$1(value: boolean);
    }
}
