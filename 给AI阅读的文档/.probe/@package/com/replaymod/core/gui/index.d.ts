import { $EventRegistrations } from "@package/de/johni0702/minecraft/gui/utils";
import { $GuiElement } from "@package/de/johni0702/minecraft/gui/element";

declare module "@package/com/replaymod/core/gui" {
    export class $GuiBackgroundProcesses extends $EventRegistrations {
        addProcess(element: $GuiElement<never>): void;
        removeProcess(element: $GuiElement<never>): void;
        constructor();
    }
}
