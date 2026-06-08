import { $Config } from "@package/xaero/lib/common/config";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
export * as profile from "@package/xaero/lib/common/packet/config/profile";

declare module "@package/xaero/lib/common/packet/config" {
    export class $AbstractConfigPacket$OptionEntry {
        static of<T>(arg0: $ConfigOption<T>, arg1: T): $AbstractConfigPacket$OptionEntry;
        static of<T>(arg0: $Config, arg1: $ConfigOption<T>): $AbstractConfigPacket$OptionEntry;
        static NULL_VALUE: $Tag;
        optionId: string;
        valueTag: $Tag;
        constructor(arg0: string, arg1: $Tag_);
    }
}
