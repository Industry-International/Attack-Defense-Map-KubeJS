import { $IRemapper } from "@package/org/spongepowered/asm/mixin/extensibility";

declare module "@package/org/spongepowered/asm/obfuscation" {
    export class $RemapperChain implements $IRemapper {
        unmap(arg0: string): string;
        add(arg0: $IRemapper): $RemapperChain;
        map(arg0: string): string;
        mapMethodName(arg0: string, arg1: string, arg2: string): string;
        mapFieldName(arg0: string, arg1: string, arg2: string): string;
        mapDesc(arg0: string): string;
        unmapDesc(arg0: string): string;
        constructor();
    }
}
