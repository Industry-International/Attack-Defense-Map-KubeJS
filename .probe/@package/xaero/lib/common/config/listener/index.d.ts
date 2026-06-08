import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
export * as handler from "@package/xaero/lib/common/config/listener/handler";

declare module "@package/xaero/lib/common/config/listener" {
    export class $IConfigChangeListener {
    }
    export interface $IConfigChangeListener {
        onChange(arg0: $Config, arg1: $ConfigOption<never>): void;
        onRemoved(arg0: $Config): void;
        onFullChange(arg0: $Config): void;
    }
}
