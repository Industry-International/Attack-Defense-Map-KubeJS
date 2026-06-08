import { $File_, $File } from "@package/java/io";
import { $ThreadInfo } from "@package/java/lang/management";
import { $CrashReport, $SystemReport } from "@package/net/minecraft";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $List_ } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StackTraceElement, $Throwable, $Exception, $StringBuilder } from "@package/java/lang";
import { $ModLoadingIssue_ } from "@package/net/neoforged/fml";

declare module "@package/net/neoforged/neoforge/logging" {
    export class $CrashReportExtender$ModLoadingCrashException extends $Exception {
    }
    export class $PacketDump {
        static getContentDump(arg0: $ByteBuf): string;
        constructor();
    }
    export class $ThreadInfoUtil {
        static getEntireStacktrace(arg0: $ThreadInfo): string;
        constructor();
    }
    export class $CrashReportExtender {
        static generateEnhancedStackTrace(arg0: $StackTraceElement[]): string;
        static generateEnhancedStackTrace(arg0: $Throwable): string;
        static generateEnhancedStackTrace(arg0: $Throwable, arg1: boolean): string;
        static extendSystemReport(arg0: $SystemReport): void;
        static dumpModLoadingCrashReport(arg0: $Logger, arg1: $List_<$ModLoadingIssue_>, arg2: $File_): $File;
        static addCrashReportHeader(arg0: $StringBuilder, arg1: $CrashReport): void;
        constructor();
    }
}
