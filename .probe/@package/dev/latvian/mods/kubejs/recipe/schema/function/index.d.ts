import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $KubeRecipe, $RecipeKey, $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $MapCodec_, $DataResult, $MapCodec, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $Record, $Object } from "@package/java/lang";
import { $List, $Map, $List_ } from "@package/java/util";
import { $Scriptable, $BaseFunction } from "@package/dev/latvian/mods/rhino";
import { $RecipeComponent } from "@package/dev/latvian/mods/kubejs/recipe/component";

declare module "@package/dev/latvian/mods/kubejs/recipe/schema/function" {
    export class $CustomRecipeSchemaFunctionRegistry {
    }
    export interface $CustomRecipeSchemaFunctionRegistry {
        register(id: $ResourceLocation_, arg1: $ResolvedRecipeSchemaFunction_): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomRecipeSchemaFunctionRegistry}.
     */
    export type $CustomRecipeSchemaFunctionRegistry_ = ((id: $ResourceLocation, arg1: $ResolvedRecipeSchemaFunction) => void);
    export class $SetFunction extends $Record implements $RecipeSchemaFunction {
        type(): $RecipeSchemaFunctionType<never>;
        value(): $JsonElement;
        resolve(jsonOps: $DynamicOps<$JsonElement_>, schema: $RecipeSchema): $DataResult<$ResolvedRecipeSchemaFunction>;
        key(): string;
        static TYPE: $RecipeSchemaFunctionType<$SetFunction>;
        constructor(key: string, value: $JsonElement_);
    }
    export class $SetFunction$Resolved<T> extends $Record implements $ResolvedRecipeSchemaFunction {
        to(): T;
        key(): $RecipeKey<T>;
        execute(cx: $RecipeScriptContext, args: $List_<$Object>): void;
        "arguments"(): $List<$RecipeComponent<never>>;
        constructor(key: $RecipeKey<T>, to: T);
    }
    export class $RecipeFunctionInstance extends $Record {
        name(): string;
        "function"(): $ResolvedRecipeSchemaFunction;
        "arguments"(): $List<$RecipeComponent<never>>;
        constructor(name: string, arg1: $ResolvedRecipeSchemaFunction_);
        constructor(name: string, arg1: $List_<$RecipeComponent<never>>, arg2: $ResolvedRecipeSchemaFunction_);
    }
    export class $RecipeSchemaJSFunction extends $BaseFunction {
        call(scope: $Scriptable, thisObj: $Scriptable, args: $Object[]): $KubeRecipe;
        argTypes: $TypeInfo[];
        func: $ResolvedRecipeSchemaFunction;
        static DONTENUM: number;
        static CONST: number;
        recipe: $KubeRecipe;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(recipe: $KubeRecipe, argTypes: $TypeInfo_[], func: $ResolvedRecipeSchemaFunction_);
    }
    export class $AddToListFunction extends $Record implements $RecipeSchemaFunction {
        type(): $RecipeSchemaFunctionType<never>;
        resolve(jsonOps: $DynamicOps<$JsonElement_>, schema: $RecipeSchema): $DataResult<$ResolvedRecipeSchemaFunction>;
        key(): string;
        static TYPE: $RecipeSchemaFunctionType<$AddToListFunction>;
        constructor(key: string);
    }
    export class $RecipeSchemaFunction {
        static CODEC: $Codec<$RecipeSchemaFunction>;
        static DIRECT_CODEC: $Codec<$RecipeSchemaFunction>;
        static LIST_CODEC: $Codec<$RecipeSchemaFunction>;
    }
    export interface $RecipeSchemaFunction {
        type(): $RecipeSchemaFunctionType<never>;
        resolve(jsonOps: $DynamicOps<$JsonElement_>, schema: $RecipeSchema): $DataResult<$ResolvedRecipeSchemaFunction>;
    }
    export class $CustomFunction extends $Record implements $RecipeSchemaFunction {
        type(): $RecipeSchemaFunctionType<never>;
        id(): $ResourceLocation;
        resolve(jsonOps: $DynamicOps<$JsonElement_>, schema: $RecipeSchema): $DataResult<$ResolvedRecipeSchemaFunction>;
        static TYPE: $RecipeSchemaFunctionType<$CustomFunction>;
        static MAP: $Lazy<$Map<$ResourceLocation, $ResolvedRecipeSchemaFunction>>;
        constructor(id: $ResourceLocation_);
    }
    export class $BundleFunction$Resolved extends $Record implements $ResolvedRecipeSchemaFunction {
        execute(cx: $RecipeScriptContext, args: $List_<$Object>): void;
        functions(): $List<$ResolvedRecipeSchemaFunction>;
        "arguments"(): $List<$RecipeComponent<never>>;
        constructor(functions: $List_<$ResolvedRecipeSchemaFunction_>);
    }
    export class $ResolvedRecipeSchemaFunction {
    }
    export interface $ResolvedRecipeSchemaFunction {
        execute(cx: $RecipeScriptContext, args: $List_<$Object>): void;
        "arguments"(): $List<$RecipeComponent<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ResolvedRecipeSchemaFunction}.
     */
    export type $ResolvedRecipeSchemaFunction_ = ((cx: $RecipeScriptContext, args: $List<$Object>) => void);
    export class $AddToListFunction$Resolved<T> extends $Record implements $ResolvedRecipeSchemaFunction {
        key(): $RecipeKey<$List<T>>;
        execute(cx: $RecipeScriptContext, args: $List_<$Object>): void;
        "arguments"(): $List<$RecipeComponent<never>>;
        constructor(key: $RecipeKey<$List_<T>>);
    }
    export class $RecipeSchemaFunctionType<T extends $RecipeSchemaFunction> extends $Record {
        mapCodec(): $MapCodec<T>;
        id(): string;
        static CODEC: $Codec<$RecipeSchemaFunctionType<never>>;
        static REGISTRY: $Lazy<$Map<string, $RecipeSchemaFunctionType<never>>>;
        constructor(id: string, mapCodec: $MapCodec_<T>);
    }
    export class $RecipeSchemaFunctionRegistry {
    }
    export interface $RecipeSchemaFunctionRegistry {
        register(type: $RecipeSchemaFunctionType_<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeSchemaFunctionRegistry}.
     */
    export type $RecipeSchemaFunctionRegistry_ = ((type: $RecipeSchemaFunctionType<never>) => void);
    export class $BundleFunction extends $Record implements $RecipeSchemaFunction {
        type(): $RecipeSchemaFunctionType<never>;
        resolve(jsonOps: $DynamicOps<$JsonElement_>, schema: $RecipeSchema): $DataResult<$ResolvedRecipeSchemaFunction>;
        functions(): $List<$RecipeSchemaFunction>;
        static TYPE: $RecipeSchemaFunctionType<$BundleFunction>;
        constructor(functions: $List_<$RecipeSchemaFunction>);
    }
}
