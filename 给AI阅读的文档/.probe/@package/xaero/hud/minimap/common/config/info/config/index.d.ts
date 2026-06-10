import { $Stream } from "@package/java/util/stream";
import { $List_, $Map_, $List } from "@package/java/util";

declare module "@package/xaero/hud/minimap/common/config/info/config" {
    export class $InfoDisplayConfigData {
        getState(): string;
        getTextColor(): number;
        getBackgroundColor(): number;
        constructor(arg0: number, arg1: number, arg2: string);
        get state(): string;
        get textColor(): number;
        get backgroundColor(): number;
    }
    export class $InfoDisplayManagerConfigData {
        get(arg0: string): $InfoDisplayConfigData;
        getOrderStream(): $Stream<string>;
        getFromOrder(arg0: number): string;
        copyOrder(): $List<string>;
        static EMPTY: $InfoDisplayManagerConfigData;
        constructor(arg0: $List_<string>, arg1: $Map_<string, $InfoDisplayConfigData>);
        get orderStream(): $Stream<string>;
    }
}
