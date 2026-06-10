import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Pattern } from "@package/java/util/regex";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $KubeRecipe, $RecipeLikeContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $RegistryOpsContainer, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { SpecialTypes, RegistryTypes } from "@special/types";
import { $ReplacementMatchInfo, $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record, $Object } from "@package/java/lang";
import { $RecipeLikeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Context } from "@package/dev/latvian/mods/rhino";

declare module "@package/dev/latvian/mods/kubejs/recipe/filter" {
    export class $RecipeFilterParseEvent extends $Event {
        cx: $Context;
        filters: $List<$RecipeFilter>;
        map: $Map<never, never>;
        constructor(filters: $List_<$RecipeFilter_>, map: $Map_<never, never>);
    }
    export class $RecipeFilter {
        static wrap(o: $Object): $RecipeFilter;
    }
    export interface $RecipeFilter extends $Predicate<$RecipeMatchContext> {
        test(cx: $RecipeMatchContext): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RecipeFilter}.
     */
    export type $RecipeFilter_ = RegExp | "*" | "-" | $RecipeFilter[] | { or?: $RecipeFilter_[], not?: $RecipeFilter_, id?: SpecialTypes.RecipeId, type?: RegistryTypes.RecipeSerializer, group?: string, mod?: SpecialTypes.ModId, input?: $Ingredient_, output?: $ItemStack_,  } | ((cx: $RecipeMatchContext) => boolean);
    export class $TypeFilter implements $RecipeFilter {
        test(cx: $RecipeMatchContext): boolean;
        or(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        negate(): $Predicate<$RecipeMatchContext>;
        and(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        constructor(t: $ResourceLocation_);
    }
    export class $RecipeMatchContext$Impl extends $Record implements $RecipeMatchContext {
        recipe(): $RecipeLikeKJS;
        cx(): $Context;
        ops(): $RegistryOpsContainer;
        registries(): $RegistryAccessContainer;
        constructor(recipe: $KubeRecipe);
        constructor(registries: $RegistryAccessContainer, ops: $RegistryOpsContainer, recipe: $RecipeLikeKJS);
    }
    export class $OrFilter implements $RecipeFilter {
        test(cx: $RecipeMatchContext): boolean;
        or(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        negate(): $Predicate<$RecipeMatchContext>;
        and(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        list: $List<$RecipeFilter>;
        constructor();
    }
    export class $OutputFilter implements $RecipeFilter {
        test(cx: $RecipeMatchContext): boolean;
        or(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        negate(): $Predicate<$RecipeMatchContext>;
        and(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        constructor(match: $ReplacementMatchInfo_);
    }
    export class $AndFilter implements $RecipeFilter {
        test(cx: $RecipeMatchContext): boolean;
        or(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        negate(): $Predicate<$RecipeMatchContext>;
        and(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        list: $List<$RecipeFilter>;
        constructor();
    }
    export class $GroupFilter implements $RecipeFilter {
        test(cx: $RecipeMatchContext): boolean;
        or(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        negate(): $Predicate<$RecipeMatchContext>;
        and(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        constructor(g: string);
    }
    export class $ConstantFilter extends $Record implements $RecipeFilter {
        test(cx: $RecipeMatchContext): boolean;
        filter(): boolean;
        or(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        negate(): $Predicate<$RecipeMatchContext>;
        and(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        static TRUE: $ConstantFilter;
        static FALSE: $ConstantFilter;
        constructor(filter: boolean);
    }
    export class $IDFilter implements $RecipeFilter {
        test(cx: $RecipeMatchContext): boolean;
        or(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        negate(): $Predicate<$RecipeMatchContext>;
        and(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $RecipeMatchContext {
    }
    export interface $RecipeMatchContext extends $RecipeLikeContext {
    }
    export class $RegexIDFilter implements $RecipeFilter {
        test(cx: $RecipeMatchContext): boolean;
        static of(i: $Pattern): $RegexIDFilter;
        static clearInternCache(): void;
        or(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        negate(): $Predicate<$RecipeMatchContext>;
        and(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
    }
    export class $ModFilter implements $RecipeFilter {
        test(cx: $RecipeMatchContext): boolean;
        or(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        negate(): $Predicate<$RecipeMatchContext>;
        and(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        constructor(m: string);
    }
    export class $NotFilter extends $Record implements $RecipeFilter {
        test(cx: $RecipeMatchContext): boolean;
        original(): $RecipeFilter;
        or(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        negate(): $Predicate<$RecipeMatchContext>;
        and(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        constructor(original: $RecipeFilter_);
    }
    export class $InputFilter extends $Record implements $RecipeFilter {
        test(cx: $RecipeMatchContext): boolean;
        match(): $ReplacementMatchInfo;
        or(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        negate(): $Predicate<$RecipeMatchContext>;
        and(arg0: $Predicate_<$RecipeMatchContext>): $Predicate<$RecipeMatchContext>;
        constructor(match: $ReplacementMatchInfo_);
    }
}
