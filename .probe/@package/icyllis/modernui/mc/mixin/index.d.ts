import { $OptionInstance } from "@package/net/minecraft/client";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/icyllis/modernui/mc/mixin" {
    export class $AccessClientTextTooltip {
    }
    export interface $AccessClientTextTooltip {
        getText(): $FormattedCharSequence;
        get text(): $FormattedCharSequence;
    }
    /**
     * Values that may be interpreted as {@link $AccessClientTextTooltip}.
     */
    export type $AccessClientTextTooltip_ = (() => $FormattedCharSequence);
    export class $AccessNativeImage {
    }
    export interface $AccessNativeImage {
        getPixels(): number;
        get pixels(): number;
    }
    /**
     * Values that may be interpreted as {@link $AccessNativeImage}.
     */
    export type $AccessNativeImage_ = (() => number);
    export class $AccessOptions {
    }
    export interface $AccessOptions {
        setGuiScale(arg0: $OptionInstance<number>): void;
        set guiScale(value: $OptionInstance<number>);
    }
    /**
     * Values that may be interpreted as {@link $AccessOptions}.
     */
    export type $AccessOptions_ = ((arg0: $OptionInstance<number>) => void);
}
