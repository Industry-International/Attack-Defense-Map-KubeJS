import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $AdvancementHolder, $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $SoundManager } from "@package/net/minecraft/client/sounds";
import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $AdvancementToastAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";
import { $Object, $Enum, $Class } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/components/toasts" {
    export class $ToastComponent {
        clear(): void;
        render(arg0: $GuiGraphics): void;
        getNotificationDisplayTimeMultiplier(): number;
        getToast<T extends $Toast>(arg0: $Class<T>, arg1: $Object): T;
        getMinecraft(): $Minecraft;
        addToast(arg0: $Toast_): void;
        minecraft: $Minecraft;
        visible: $List<$ToastComponent$ToastInstance<never>>;
        constructor(arg0: $Minecraft);
        get notificationDisplayTimeMultiplier(): number;
    }
    export class $RecipeToast implements $Toast {
        render(arg0: $GuiGraphics, arg1: $ToastComponent, arg2: number): $Toast$Visibility;
        static addOrUpdate(arg0: $ToastComponent, arg1: $RecipeHolder_<never>): void;
        slotCount(): number;
        width(): number;
        getToken(): $Object;
        height(): number;
        constructor(arg0: $RecipeHolder_<never>);
        get token(): $Object;
    }
    export class $SystemToast$SystemToastId {
        static WORLD_ACCESS_FAILURE: $SystemToast$SystemToastId;
        displayTime: number;
        static CHUNK_LOAD_FAILURE: $SystemToast$SystemToastId;
        static WORLD_BACKUP: $SystemToast$SystemToastId;
        static FILE_DROP_FAILURE: $SystemToast$SystemToastId;
        static PERIODIC_NOTIFICATION: $SystemToast$SystemToastId;
        static PACK_LOAD_FAILURE: $SystemToast$SystemToastId;
        static UNSECURE_SERVER_WARNING: $SystemToast$SystemToastId;
        static CHUNK_SAVE_FAILURE: $SystemToast$SystemToastId;
        static PACK_COPY_FAILURE: $SystemToast$SystemToastId;
        static LOW_DISK_SPACE: $SystemToast$SystemToastId;
        static NARRATOR_TOGGLE: $SystemToast$SystemToastId;
        constructor(arg0: number);
        constructor();
    }
    export class $AdvancementToast implements $Toast, $AdvancementToastAccess {
        render(arg0: $GuiGraphics, arg1: $ToastComponent, arg2: number): $Toast$Visibility;
        slotCount(): number;
        width(): number;
        getToken(): $Object;
        height(): number;
        getAdvancement(): $AdvancementHolder;
        static DISPLAY_TIME: number;
        constructor(arg0: $AdvancementHolder_);
        get token(): $Object;
        get advancement(): $AdvancementHolder;
    }
    export class $Toast$Visibility extends $Enum<$Toast$Visibility> {
        static values(): $Toast$Visibility[];
        static valueOf(arg0: string): $Toast$Visibility;
        playSound(arg0: $SoundManager): void;
        static HIDE: $Toast$Visibility;
        static SHOW: $Toast$Visibility;
    }
    /**
     * Values that may be interpreted as {@link $Toast$Visibility}.
     */
    export type $Toast$Visibility_ = "show" | "hide";
    export class $Toast {
        static NO_TOKEN: $Object;
        static SLOT_HEIGHT: number;
    }
    export interface $Toast {
        slotCount(): number;
        width(): number;
        getToken(): $Object;
        render(arg0: $GuiGraphics, arg1: $ToastComponent, arg2: number): $Toast$Visibility;
        height(): number;
        get token(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Toast}.
     */
    export type $Toast_ = ((arg0: $GuiGraphics, arg1: $ToastComponent, arg2: number) => $Toast$Visibility_);
    export class $TutorialToast$Icons extends $Enum<$TutorialToast$Icons> {
        static values(): $TutorialToast$Icons[];
        static valueOf(arg0: string): $TutorialToast$Icons;
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        static MOUSE: $TutorialToast$Icons;
        static WOODEN_PLANKS: $TutorialToast$Icons;
        static MOVEMENT_KEYS: $TutorialToast$Icons;
        static RIGHT_CLICK: $TutorialToast$Icons;
        static TREE: $TutorialToast$Icons;
        static SOCIAL_INTERACTIONS: $TutorialToast$Icons;
        static RECIPE_BOOK: $TutorialToast$Icons;
    }
    /**
     * Values that may be interpreted as {@link $TutorialToast$Icons}.
     */
    export type $TutorialToast$Icons_ = "movement_keys" | "mouse" | "tree" | "recipe_book" | "wooden_planks" | "social_interactions" | "right_click";
    export class $ToastComponent$ToastInstance<T extends $Toast> {
        render(arg0: number, arg1: $GuiGraphics): boolean;
        getToast(): T;
        slotCount: number;
        this$0: $ToastComponent;
        index: number;
        get toast(): T;
    }
    export class $SystemToast implements $Toast {
        forceHide(): void;
        static forceHide(arg0: $ToastComponent, arg1: $SystemToast$SystemToastId): void;
        reset(arg0: $Component_, arg1: $Component_): void;
        static add(arg0: $ToastComponent, arg1: $SystemToast$SystemToastId, arg2: $Component_, arg3: $Component_): void;
        width(): number;
        static multiline(arg0: $Minecraft, arg1: $SystemToast$SystemToastId, arg2: $Component_, arg3: $Component_): $SystemToast;
        getToken(): $SystemToast$SystemToastId;
        render(arg0: $GuiGraphics, arg1: $ToastComponent, arg2: number): $Toast$Visibility;
        height(): number;
        static onChunkSaveFailure(arg0: $Minecraft, arg1: $ChunkPos): void;
        static onLowDiskSpace(arg0: $Minecraft): void;
        static onChunkLoadFailure(arg0: $Minecraft, arg1: $ChunkPos): void;
        static onFileDropFailure(arg0: $Minecraft, arg1: number): void;
        static addOrUpdate(arg0: $ToastComponent, arg1: $SystemToast$SystemToastId, arg2: $Component_, arg3: $Component_): void;
        static onWorldDeleteFailure(arg0: $Minecraft, arg1: string): void;
        static onWorldAccessFailure(arg0: $Minecraft, arg1: string): void;
        static onPackCopyFailure(arg0: $Minecraft, arg1: string): void;
        slotCount(): number;
        constructor(arg0: $SystemToast$SystemToastId, arg1: $Component_, arg2: $Component_);
        get token(): $SystemToast$SystemToastId;
    }
    export class $TutorialToast implements $Toast {
        render(arg0: $GuiGraphics, arg1: $ToastComponent, arg2: number): $Toast$Visibility;
        updateProgress(arg0: number): void;
        hide(): void;
        slotCount(): number;
        width(): number;
        getToken(): $Object;
        height(): number;
        static PROGRESS_BAR_HEIGHT: number;
        static PROGRESS_BAR_X: number;
        static PROGRESS_BAR_WIDTH: number;
        static PROGRESS_BAR_Y: number;
        constructor(arg0: $TutorialToast$Icons_, arg1: $Component_, arg2: $Component_, arg3: boolean);
        get token(): $Object;
    }
}
