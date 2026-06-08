import { $FilterObjectCategoryData$Builder, $FilterObjectCategoryData } from "@package/xaero/hud/category/serialization/data";

declare module "@package/xaero/hud/minimap/radar/category/serialization/data" {
    export class $EntityRadarCategoryData extends $FilterObjectCategoryData<$EntityRadarCategoryData> {
    }
    export class $EntityRadarCategoryData$Builder extends $FilterObjectCategoryData$Builder<$EntityRadarCategoryData, $EntityRadarCategoryData$Builder> {
        static begin(): $EntityRadarCategoryData$Builder;
    }
}
