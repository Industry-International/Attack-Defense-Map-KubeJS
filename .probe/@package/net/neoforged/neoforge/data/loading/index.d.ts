import { $File_ } from "@package/java/io";
import { $Path_ } from "@package/java/nio/file";
import { $Set_, $Collection_ } from "@package/java/util";
import { $CommonModLoader } from "@package/net/neoforged/neoforge/internal";

declare module "@package/net/neoforged/neoforge/data/loading" {
    export class $DatagenModLoader extends $CommonModLoader {
        static begin(arg0: $Set_<string>, arg1: $Path_, arg2: $Collection_<$Path_>, arg3: $Collection_<$Path_>, arg4: $Set_<string>, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: string, arg12: $File_): void;
        static isRunningDataGen(): boolean;
        constructor();
        static get runningDataGen(): boolean;
    }
}
