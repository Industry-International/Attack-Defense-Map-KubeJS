import { $Annotation } from "@package/java/lang/annotation";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ValueConverter } from "@package/joptsimple";
import { $Method } from "@package/java/lang/reflect";
import { $Class } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/gametest" {
    export class $GameTestHooks {
        static registerGametests(): void;
        static isGametestServer(): boolean;
        static isGametestEnabled(): boolean;
        static getTemplateNamespace(arg0: $Method): string;
        static prefixGameTestTemplate(arg0: $Method): boolean;
        constructor();
        static get gametestServer(): boolean;
        static get gametestEnabled(): boolean;
    }
    export class $GameTestHolder implements $Annotation {
        value(): string;
    }
    export class $BlockPosValueConverter implements $ValueConverter<$BlockPos> {
        valueType(): $Class<$BlockPos>;
        valuePattern(): string;
        convert(arg0: string): $BlockPos;
        constructor();
    }
    export class $PrefixGameTestTemplate implements $Annotation {
        value(): boolean;
    }
}
