import { $RecipeKey } from "@package/dev/latvian/mods/kubejs/recipe";
import { $MutedError } from "@package/dev/latvian/mods/kubejs/util";
import { $Collection_, $Collection } from "@package/java/util";
import { $Object, $Throwable, $RuntimeException } from "@package/java/lang";
import { $ConsoleLine, $SourceLine_ } from "@package/dev/latvian/mods/kubejs/script";
import { $RecipeComponentValue, $RecipeComponent } from "@package/dev/latvian/mods/kubejs/recipe/component";

declare module "@package/dev/latvian/mods/kubejs/error" {
    export class $KubeRuntimeException extends $RuntimeException implements $MutedError {
        apply(line: $ConsoleLine): void;
        source(sourceLine: $SourceLine_): $KubeRuntimeException;
        customData(key: string, data: $Object): $KubeRuntimeException;
        isMuted(): boolean;
        constructor(cause: $Throwable);
        constructor(m: string, cause: $Throwable);
        constructor(m: string);
        get muted(): boolean;
    }
    export class $InvalidRecipeComponentValueException extends $RecipeComponentException {
        component: $RecipeComponent<never>;
        value: $Object;
        key: $RecipeKey<never>;
        constructor(message: string, component: $RecipeComponent<never>, value: $Object);
        constructor(component: $RecipeComponent<never>, value: $Object);
    }
    export class $EmptyRecipeComponentException extends $InvalidRecipeComponentValueException {
        component: $RecipeComponent<never>;
        value: $Object;
        key: $RecipeKey<never>;
        constructor(component: $RecipeComponent<never>, value: $Object);
    }
    export class $LegacyError extends $KubeRuntimeException {
        constructor(message: string);
    }
    export class $InvalidRecipeComponentException extends $RecipeComponentException {
        component: $RecipeComponent<never>;
        componentValueHolder: $RecipeComponentValue<never>;
        value: $Object;
        key: $RecipeKey<never>;
        constructor(h: $RecipeComponentValue<never>, cause: $Throwable);
    }
    export class $EmptyTagTargetException extends $KubeRuntimeException {
        constructor(message: string);
    }
    export class $RecipeComponentException extends $KubeRuntimeException {
        component: $RecipeComponent<never>;
        value: $Object;
        key: $RecipeKey<never>;
        constructor(msg: string, cause: $Throwable, value: $RecipeComponentValue<never>);
        constructor(msg: string, cause: $Throwable, component: $RecipeComponent<never>, key: $RecipeKey<never>, value: $Object);
    }
    export class $MissingRequiredValueException extends $KubeRuntimeException {
        constructor();
    }
    export class $MissingComponentException extends $KubeRuntimeException {
        valid: $Collection<$RecipeKey<never>>;
        key: $RecipeKey<never>;
        constructor(keyName: string, key: $RecipeKey<never>, valid: $Collection_<$RecipeKey<never>>);
    }
    export class $RecipeComponentTooLargeException extends $InvalidRecipeComponentValueException {
        component: $RecipeComponent<never>;
        max: number;
        value: $Object;
        key: $RecipeKey<never>;
        constructor(component: $RecipeComponent<never>, value: $Object, size: number, max: number);
    }
}
