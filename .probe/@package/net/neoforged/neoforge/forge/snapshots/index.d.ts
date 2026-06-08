import { $CrashReport } from "@package/net/minecraft";
import { $Options$FieldAccess } from "@package/net/minecraft/client";
import { $StringBuilder } from "@package/java/lang";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/neoforged/neoforge/forge/snapshots" {
    export class $ForgeSnapshotsMod {
        static logStartupWarning(): void;
        static addCrashReportHeader(arg0: $StringBuilder, arg1: $CrashReport): void;
        static processOptions(arg0: $Options$FieldAccess): void;
        static BRANDING_ID: string;
        static BRANDING_NAME: string;
        constructor();
    }
    export class $ForgeSnapshotsModClient {
        static renderMainMenuWarning(arg0: string, arg1: $GuiGraphics, arg2: $Font, arg3: number, arg4: number, arg5: number): void;
        constructor();
    }
}
