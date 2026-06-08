import { $Predicate, $Consumer } from "@package/java/util/function";

declare module "@package/com/blamejared/searchables/mixin" {
    export class $AccessEditBox {
    }
    export interface $AccessEditBox {
        searchables$getResponder(): $Consumer<string>;
        searchables$getFilter(): $Predicate<string>;
    }
}
