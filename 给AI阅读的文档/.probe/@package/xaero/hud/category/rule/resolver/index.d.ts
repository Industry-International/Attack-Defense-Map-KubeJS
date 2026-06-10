import { $FilterObjectCategory } from "@package/xaero/hud/category";

declare module "@package/xaero/hud/category/rule/resolver" {
    export class $ObjectCategoryRuleResolver {
        resolve<E, P, C extends $FilterObjectCategory<E, P, never, C>>(arg0: C, arg1: E, arg2: P): C;
    }
}
