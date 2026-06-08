import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Button } from "@package/net/minecraft/client/gui/components";
import { $KeyBindsList } from "@package/net/minecraft/client/gui/screens/options/controls";
import { $Map } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/com/blamejared/controlling/mixin" {
    export class $AccessKeyBindsScreen {
    }
    export interface $AccessKeyBindsScreen {
        controlling$getResetButton(): $Button;
        controlling$setResetButton(arg0: $Button): void;
        controlling$getKeyBindsList(): $KeyBindsList;
        controlling$setKeyBindsList(arg0: $KeyBindsList): void;
    }
    export class $AccessKeyMapping {
    }
    export interface $AccessKeyMapping {
        controlling$getKey(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $AccessKeyMapping}.
     */
    export type $AccessKeyMapping_ = (() => $InputConstants$Key);
    export class $AccessOptionsSubScreen {
    }
    export interface $AccessOptionsSubScreen {
        controlling$getLastScreen(): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $AccessOptionsSubScreen}.
     */
    export type $AccessOptionsSubScreen_ = (() => $Screen);
    export class $AccessKeyBindsScreenNeoForge {
    }
    export interface $AccessKeyBindsScreenNeoForge {
        getLastPressedKey(): $InputConstants$Key;
        setLastPressedKey(arg0: $InputConstants$Key): void;
        setLastPressedModifier(arg0: $InputConstants$Key): void;
        setIsLastKeyHeldDown(arg0: boolean): void;
        isIsLastModifierHeldDown(): boolean;
        setIsLastModifierHeldDown(arg0: boolean): void;
        isIsLastKeyHeldDown(): boolean;
        getLastPressedModifier(): $InputConstants$Key;
    }
    export class $AccessInputConstantsKey {
        static controlling$getNAME_MAP(): $Map<string, $InputConstants$Key>;
    }
    export interface $AccessInputConstantsKey {
    }
}
