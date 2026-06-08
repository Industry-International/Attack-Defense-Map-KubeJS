import { $EntityRadarCategoryData$Builder, $EntityRadarCategoryData } from "@package/xaero/hud/minimap/radar/category/serialization/data";
import { $ObjectCategoryDataGsonSerializer, $ObjectCategoryDataNbtSerializer } from "@package/xaero/hud/category/serialization/data";

declare module "@package/xaero/hud/minimap/common/radar/category" {
    export class $EntityRadarCategorySerializers {
        getGson(): $ObjectCategoryDataGsonSerializer<$EntityRadarCategoryData>;
        getNbt(): $ObjectCategoryDataNbtSerializer<$EntityRadarCategoryData, $EntityRadarCategoryData$Builder>;
        constructor(arg0: $ObjectCategoryDataGsonSerializer<$EntityRadarCategoryData>, arg1: $ObjectCategoryDataNbtSerializer<$EntityRadarCategoryData, $EntityRadarCategoryData$Builder>);
        get gson(): $ObjectCategoryDataGsonSerializer<$EntityRadarCategoryData>;
        get nbt(): $ObjectCategoryDataNbtSerializer<$EntityRadarCategoryData, $EntityRadarCategoryData$Builder>;
    }
}
