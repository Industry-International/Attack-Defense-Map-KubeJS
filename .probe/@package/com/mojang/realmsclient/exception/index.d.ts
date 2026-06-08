import { $Logger } from "@package/org/slf4j";
import { $Throwable, $Thread$UncaughtExceptionHandler, $Exception, $RuntimeException, $Thread } from "@package/java/lang";
import { $RealmsError } from "@package/com/mojang/realmsclient/client";

declare module "@package/com/mojang/realmsclient/exception" {
    export class $RealmsServiceException extends $Exception {
        realmsError: $RealmsError;
        constructor(arg0: $RealmsError);
    }
    export class $RealmsHttpException extends $RuntimeException {
        constructor(arg0: string, arg1: $Exception);
    }
    export class $RealmsDefaultUncaughtExceptionHandler implements $Thread$UncaughtExceptionHandler {
        uncaughtException(arg0: $Thread, arg1: $Throwable): void;
        constructor(arg0: $Logger);
    }
    export class $RetryCallException extends $RealmsServiceException {
        delaySeconds: number;
        realmsError: $RealmsError;
        static DEFAULT_DELAY: number;
        constructor(arg0: number, arg1: number);
    }
}
