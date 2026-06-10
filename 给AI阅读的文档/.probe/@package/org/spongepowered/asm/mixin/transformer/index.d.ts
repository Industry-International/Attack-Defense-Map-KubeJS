import { $IExtensionRegistry } from "@package/org/spongepowered/asm/mixin/transformer/ext";
import { $MixinEnvironment } from "@package/org/spongepowered/asm/mixin";
import { $ClassNode } from "@package/org/objectweb/asm/tree";
import { $List } from "@package/java/util";
export * as ext from "@package/org/spongepowered/asm/mixin/transformer/ext";

declare module "@package/org/spongepowered/asm/mixin/transformer" {
    export class $IMixinTransformer {
    }
    export interface $IMixinTransformer {
        audit(arg0: $MixinEnvironment): void;
        reload(arg0: string, arg1: $ClassNode): $List<string>;
        getExtensions(): $IExtensionRegistry;
        generateClass(arg0: $MixinEnvironment, arg1: string): number[];
        generateClass(arg0: $MixinEnvironment, arg1: string, arg2: $ClassNode): boolean;
        transformClass(arg0: $MixinEnvironment, arg1: string, arg2: number[]): number[];
        transformClass(arg0: $MixinEnvironment, arg1: string, arg2: $ClassNode): boolean;
        transformClassBytes(arg0: string, arg1: string, arg2: number[]): number[];
        computeFramesForClass(arg0: $MixinEnvironment, arg1: string, arg2: $ClassNode): boolean;
        get extensions(): $IExtensionRegistry;
    }
}
