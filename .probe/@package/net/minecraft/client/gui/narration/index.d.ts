import { $Consumer_ } from "@package/java/util/function";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $TabOrderedElement } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $List_, $Map } from "@package/java/util";

declare module "@package/net/minecraft/client/gui/narration" {
    export class $NarrationThunk<T> {
        static from(arg0: $List_<$Component_>): $NarrationThunk<never>;
        static from(arg0: string): $NarrationThunk<never>;
        static from(arg0: $Component_): $NarrationThunk<never>;
        getText(arg0: $Consumer_<string>): void;
        static EMPTY: $NarrationThunk<never>;
    }
    export class $NarrationElementOutput {
    }
    export interface $NarrationElementOutput {
        add(arg0: $NarratedElementType_, arg1: $NarrationThunk<never>): void;
        add(arg0: $NarratedElementType_, ...arg1: $Component_[]): void;
        add(arg0: $NarratedElementType_, arg1: string): void;
        add(arg0: $NarratedElementType_, arg1: $Component_): void;
        nest(): $NarrationElementOutput;
    }
    export class $NarratableEntry$NarrationPriority extends $Enum<$NarratableEntry$NarrationPriority> {
        static values(): $NarratableEntry$NarrationPriority[];
        static valueOf(arg0: string): $NarratableEntry$NarrationPriority;
        isTerminal(): boolean;
        static HOVERED: $NarratableEntry$NarrationPriority;
        static NONE: $NarratableEntry$NarrationPriority;
        static FOCUSED: $NarratableEntry$NarrationPriority;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NarratableEntry$NarrationPriority}.
     */
    export type $NarratableEntry$NarrationPriority_ = "none" | "hovered" | "focused";
    export class $ScreenNarrationCollector$EntryKey {
    }
    export class $NarratableEntry {
    }
    export interface $NarratableEntry extends $TabOrderedElement, $NarrationSupplier {
        isActive(): boolean;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        get active(): boolean;
    }
    export class $NarratedElementType extends $Enum<$NarratedElementType> {
        static values(): $NarratedElementType[];
        static valueOf(arg0: string): $NarratedElementType;
        static POSITION: $NarratedElementType;
        static USAGE: $NarratedElementType;
        static HINT: $NarratedElementType;
        static TITLE: $NarratedElementType;
    }
    /**
     * Values that may be interpreted as {@link $NarratedElementType}.
     */
    export type $NarratedElementType_ = "title" | "position" | "hint" | "usage";
    export class $ScreenNarrationCollector {
        update(arg0: $Consumer_<$NarrationElementOutput>): void;
        collectNarrationText(arg0: boolean): string;
        generation: number;
        entries: $Map<$ScreenNarrationCollector$EntryKey, $ScreenNarrationCollector$NarrationEntry>;
        constructor();
    }
    export class $ScreenNarrationCollector$NarrationEntry {
    }
    export class $NarrationSupplier {
    }
    export interface $NarrationSupplier {
        updateNarration(arg0: $NarrationElementOutput): void;
    }
    /**
     * Values that may be interpreted as {@link $NarrationSupplier}.
     */
    export type $NarrationSupplier_ = ((arg0: $NarrationElementOutput) => void);
    export class $ScreenNarrationCollector$Output implements $NarrationElementOutput {
        add(arg0: $NarratedElementType_, ...arg1: $Component_[]): void;
        add(arg0: $NarratedElementType_, arg1: string): void;
        add(arg0: $NarratedElementType_, arg1: $Component_): void;
    }
}
