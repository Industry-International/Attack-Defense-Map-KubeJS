import { $Feature, $FeatureType, $Feature_ } from "@package/com/rafacasari/fairylights/server/feature";
import { $Record } from "@package/java/lang";
import { $AABB, $Vec3_, $AABB_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/rafacasari/fairylights/server/collision" {
    export class $Intersection extends $Record {
        result(): $Vec3;
        feature(): $Feature;
        featureType(): $FeatureType;
        hitBox(): $AABB;
        constructor(result: $Vec3_, hitBox: $AABB_, featureType: $FeatureType, feature: $Feature_);
    }
    export class $CollidableList implements $Collidable {
        intersect(arg0: $Vec3_, arg1: $Vec3_): $Intersection;
    }
    export class $Collidable {
        static empty(): $Collidable;
    }
    export interface $Collidable {
        intersect(arg0: $Vec3_, arg1: $Vec3_): $Intersection;
    }
    /**
     * Values that may be interpreted as {@link $Collidable}.
     */
    export type $Collidable_ = ((arg0: $Vec3, arg1: $Vec3) => $Intersection_);
    export class $CollidableList$Builder {
        add(arg0: $Collidable_): $CollidableList$Builder;
        build(): $CollidableList;
        constructor();
    }
}
