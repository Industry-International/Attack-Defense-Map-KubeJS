import { $InputStream, $File_ } from "@package/java/io";
import { $Path_, $Path } from "@package/java/nio/file";
import { $URL } from "@package/java/net";
import { $ConfigFormat } from "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core";

declare module "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core/file" {
    export class $FileNotFoundAction {
        static copyResource(resourcePath: string): $FileNotFoundAction;
        static copyData(file: $Path_): $FileNotFoundAction;
        static copyData(file: $File_): $FileNotFoundAction;
        static copyData(data: $InputStream): $FileNotFoundAction;
        static copyData(url: $URL): $FileNotFoundAction;
        static READ_NOTHING: $FileNotFoundAction;
        static CREATE_EMPTY: $FileNotFoundAction;
        static THROW_ERROR: $FileNotFoundAction;
    }
    export interface $FileNotFoundAction {
        run(arg0: $Path_, arg1: $ConfigFormat<never>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FileNotFoundAction}.
     */
    export type $FileNotFoundAction_ = ((arg0: $Path, arg1: $ConfigFormat<never>) => boolean);
}
