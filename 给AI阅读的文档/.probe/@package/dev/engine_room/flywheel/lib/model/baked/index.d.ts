import { $ConcurrentMap } from "@package/java/util/concurrent";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $AccessorPartialModel } from "@package/com/railwayteam/railways/mixin/client";

declare module "@package/dev/engine_room/flywheel/lib/model/baked" {
    export class $PartialModel implements $AccessorPartialModel {
        get(): $BakedModel;
        static of(modelLocation: $ResourceLocation_): $PartialModel;
        static getPopulateOnInit$railways_$md$dd6cb9$2(): boolean;
        static setPopulateOnInit$railways_$md$dd6cb9$1(arg0: boolean): void;
        modelLocation(): $ResourceLocation;
        static getALL$railways_$md$dd6cb9$0(): $ConcurrentMap<any, any>;
        railways$getBakedModel(): $BakedModel;
        railways$setBakedModel(arg0: $BakedModel): void;
        static get populateOnInit$railways_$md$dd6cb9$2(): boolean;
        static set populateOnInit$railways_$md$dd6cb9$1(value: boolean);
        static get ALL$railways_$md$dd6cb9$0(): $ConcurrentMap<any, any>;
    }
}
