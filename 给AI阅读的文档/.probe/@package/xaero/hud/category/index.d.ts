import { $ObjectCategoryRule, $ObjectCategoryListRuleType, $ObjectCategoryIncludeList, $ObjectCategoryExcludeList, $ExcludeListMode } from "@package/xaero/hud/category/rule";
import { $List } from "@package/java/util";
import { $FilterObjectCategoryData } from "@package/xaero/hud/category/serialization/data";
export * as serialization from "@package/xaero/hud/category/serialization";
export * as rule from "@package/xaero/hud/category/rule";

declare module "@package/xaero/hud/category" {
    export class $FilterObjectCategory<E, P, D extends $FilterObjectCategoryData<D>, C extends $FilterObjectCategory<E, P, D, C>> extends $ObjectCategory<D, C> {
        getIncludeInSuperCategory(): boolean;
        getExcludeMode(): $ExcludeListMode;
        getBaseRule(): $ObjectCategoryRule<E, P>;
        getIncludeList<S>(arg0: $ObjectCategoryListRuleType<E, P, S>): $ObjectCategoryIncludeList<E, P, S>;
        getExcludeList<S>(arg0: $ObjectCategoryListRuleType<E, P, S>): $ObjectCategoryExcludeList<E, P, S>;
        getIncludeLists(): $List<$ObjectCategoryIncludeList<E, P, never>>;
        getExcludeLists(): $List<$ObjectCategoryExcludeList<E, P, never>>;
        get includeInSuperCategory(): boolean;
        get excludeMode(): $ExcludeListMode;
        get baseRule(): $ObjectCategoryRule<E, P>;
        get includeLists(): $List<$ObjectCategoryIncludeList<E, P, never>>;
        get excludeLists(): $List<$ObjectCategoryExcludeList<E, P, never>>;
    }
}
