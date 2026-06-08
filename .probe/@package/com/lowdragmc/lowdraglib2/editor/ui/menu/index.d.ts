import { $BiConsumer_ } from "@package/java/util/function";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $ProjectType } from "@package/com/lowdragmc/lowdraglib2/editor/project";
import { $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Editor } from "@package/com/lowdragmc/lowdraglib2/editor/ui";

declare module "@package/com/lowdragmc/lowdraglib2/editor/ui/menu" {
    export class $FileMenu extends $MenuTab {
        addProjectProvider(arg0: $ProjectType): void;
        registerNewMenuCreator(arg0: $BiConsumer_<$MenuTab, $TreeBuilder$Menu>): $ISubscription;
        editor: $Editor;
        constructor(arg0: $Editor);
    }
    export class $ViewMenu extends $MenuTab {
        editor: $Editor;
        constructor(arg0: $Editor);
    }
    export class $MenuTab {
        createMenuTab(): $UIElement;
        registerMenuCreator(arg0: $BiConsumer_<$MenuTab, $TreeBuilder$Menu>): $ISubscription;
        editor: $Editor;
    }
}
