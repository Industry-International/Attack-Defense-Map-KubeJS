import { $OpenBindPlan$Builder, $OpenBindPlan, $ContainerBindType_ } from "@package/com/sighs/apricityui/instance/container/bind";
import { $PendingMenu } from "@package/com/sighs/apricityui/instance/network/handler";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $FollowFacingWorldWindow, $WorldWindow } from "@package/com/sighs/apricityui/instance";
import { $ArrayList, $List } from "@package/java/util";
import { $Document, $Window } from "@package/com/sighs/apricityui/init";

declare module "@package/com/sighs/apricityui/util/kjs" {
    export class $ApricityUIClientUtil {
        static bind(): $OpenBindPlan$Builder;
        static getDocument(arg0: string): $ArrayList<$Document>;
        static createFollowFacingWorldWindow(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $FollowFacingWorldWindow;
        static screen(arg0: string): void;
        static getWindow(): $Window;
        static createInWorldDocument(arg0: string): $Document;
        /**
         * @deprecated
         */
        static openScreen(arg0: string): void;
        static toast(arg0: string, arg1: number, arg2: string, arg3: string, arg4: string, arg5: boolean, arg6: string): string;
        static toast(arg0: string): string;
        static toast(arg0: string, arg1: number): string;
        static removeDocument(arg0: string): void;
        static createDocument(arg0: string): $Document;
        static getAllDocument(): $List<$Document>;
        static removeWorldWindow(arg0: $WorldWindow): void;
        static createWorldWindow(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $WorldWindow;
        static clearWorldWindows(): void;
        static hasDataSource(arg0: $ContainerBindType_): boolean;
        static getDocumentByUUID(arg0: string): $Document;
        static closeScreen(): void;
        static dismissToast(arg0: string): void;
        static clearToasts(): void;
        constructor();
        static get window(): $Window;
        static get allDocument(): $List<$Document>;
    }
    export class $ApricityUIServerUtil {
        static bind(): $OpenBindPlan$Builder;
        static menu(arg0: $ServerPlayer, arg1: string): $PendingMenu;
        static openScreen(arg0: $ServerPlayer, arg1: string, arg2: $OpenBindPlan): void;
        constructor();
    }
}
