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
        render(guiGraphics: $GuiGraphics): void;
        getNotificationDisplayTimeMultiplier(): number;
        getToast<T extends $Toast>(toastClass: $Class<T>, token: $Object): T;
        getMinecraft(): $Minecraft;
        addToast(toast: $Toast_): void;
        minecraft: $Minecraft;
        visible: $List<$ToastComponent$ToastInstance<never>>;
        constructor(minecraft: $Minecraft);
        get notificationDisplayTimeMultiplier(): number;
    }
    export class $RecipeToast implements $Toast {
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        static addOrUpdate(toastComponent: $ToastComponent, recipe: $RecipeHolder_<never>): void;
        slotCount(): number;
        width(): number;
        getToken(): $Object;
        height(): number;
        constructor(recipe: $RecipeHolder_<never>);
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
        constructor(displayTime: number);
        constructor();
    }
    export class $AdvancementToast implements $Toast, $AdvancementToastAccess {
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        slotCount(): number;
        width(): number;
        getToken(): $Object;
        height(): number;
        getAdvancement(): $AdvancementHolder;
        static DISPLAY_TIME: number;
        constructor(advancement: $AdvancementHolder_);
        get token(): $Object;
        get advancement(): $AdvancementHolder;
    }
    export class $Toast$Visibility extends $Enum<$Toast$Visibility> {
        static values(): $Toast$Visibility[];
        static valueOf(arg0: string): $Toast$Visibility;
        playSound(handler: $SoundManager): void;
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
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
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
        render(guiGraphics: $GuiGraphics, x: number, y: number): void;
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
        render(screenWidth: number, guiGraphics: $GuiGraphics): boolean;
        getToast(): T;
        slotCount: number;
        this$0: $ToastComponent;
        index: number;
        get toast(): T;
    }
    export class $SystemToast implements $Toast {
        reset(title: $Component_, message: $Component_ | null): void;
        static add(toastComponent: $ToastComponent, id: $SystemToast$SystemToastId, title: $Component_, message: $Component_ | null): void;
        width(): number;
        static multiline(minecraft: $Minecraft, id: $SystemToast$SystemToastId, title: $Component_, message: $Component_): $SystemToast;
        static onWorldDeleteFailure(minecraft: $Minecraft, message: string): void;
        static onWorldAccessFailure(minecraft: $Minecraft, message: string): void;
        getToken(): $SystemToast$SystemToastId;
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        height(): number;
        static onFileDropFailure(minecraft: $Minecraft, failedFileCount: number): void;
        static addOrUpdate(toastComponent: $ToastComponent, id: $SystemToast$SystemToastId, title: $Component_, message: $Component_ | null): void;
        static onLowDiskSpace(minecraft: $Minecraft): void;
        static onChunkSaveFailure(minecraft: $Minecraft, chunkPos: $ChunkPos): void;
        static onChunkLoadFailure(minecraft: $Minecraft, chunkPos: $ChunkPos): void;
        static onPackCopyFailure(minecraft: $Minecraft, message: string): void;
        static forceHide(toastComponent: $ToastComponent, id: $SystemToast$SystemToastId): void;
        forceHide(): void;
        slotCount(): number;
        constructor(id: $SystemToast$SystemToastId, title: $Component_, message: $Component_ | null);
        get token(): $SystemToast$SystemToastId;
    }
    export class $TutorialToast implements $Toast {
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        updateProgress(progress: number): void;
        hide(): void;
        slotCount(): number;
        width(): number;
        getToken(): $Object;
        height(): number;
        static PROGRESS_BAR_HEIGHT: number;
        static PROGRESS_BAR_X: number;
        static PROGRESS_BAR_WIDTH: number;
        static PROGRESS_BAR_Y: number;
        constructor(icon: $TutorialToast$Icons_, title: $Component_, message: $Component_ | null, progressable: boolean);
        get token(): $Object;
    }
}
