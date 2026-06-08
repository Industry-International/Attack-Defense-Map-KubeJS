import { $Codec } from "@package/com/mojang/serialization";
import { $Style } from "@package/net/minecraft/network/chat";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $ILanguageDefinition, $SyntaxParser, $StyleManager } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor/language";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Scroller, $TextArea } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
export * as language from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor/language";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor" {
    export class $CodeEditor extends $TextArea {
        setValue(arg0: string[], arg1: boolean): $CodeEditor;
        getLanguage(): $ILanguageDefinition;
        setLanguage(arg0: $ILanguageDefinition): $CodeEditor;
        getSyntaxParser(): $SyntaxParser;
        setStyleManager(arg0: $StyleManager): $CodeEditor;
        getStyleManager(): $StyleManager;
        getStyledLines(): $List<$StyledLine>;
        contentView: $UIElement;
        verticalScroller: $Scroller;
        static CODEC: $Codec<$UIElement>;
        horizontalScroller: $Scroller;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get syntaxParser(): $SyntaxParser;
        get styledLines(): $List<$StyledLine>;
    }
    export class $StyledLine extends $Record {
        line(): number;
        text(): $List<$StyledText>;
        getWidth(arg0: $Font, arg1: $Style): number;
        constructor(line: number, text: $List_<$StyledText_>);
    }
    export class $StyledText extends $Record {
        text(): string;
        style(): $Style;
        constructor(text: string, style: $Style);
    }
}
