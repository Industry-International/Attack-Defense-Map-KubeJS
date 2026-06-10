import { $Annotation } from "@package/java/lang/annotation";
import { $Class } from "@package/java/lang";

declare module "@package/dev/latvian/mods/kubejs/typings" {
    export class $Info implements $Annotation {
        value(): string;
        params(): $Param[];
    }
    export class $Param implements $Annotation {
        name(): string;
        value(): string;
    }
    export class $ThisIs implements $Annotation {
        value(): $Class<never>[];
        classes(): $Class<never>[];
        classNames(): string[];
    }
}
