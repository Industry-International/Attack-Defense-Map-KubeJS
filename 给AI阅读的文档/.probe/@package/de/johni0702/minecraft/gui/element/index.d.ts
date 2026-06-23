import { $GuiContainer } from "@package/de/johni0702/minecraft/gui/container";
import { $GuiRenderer, $RenderInfo } from "@package/de/johni0702/minecraft/gui";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ReadableDimension } from "@package/de/johni0702/minecraft/gui/utils/lwjgl";

declare module "@package/de/johni0702/minecraft/gui/element" {
    export class $GuiElement<T extends $GuiElement<T>> {
    }
    export interface $GuiElement<T extends $GuiElement<T>> {
        isEnabled(): boolean;
        getLayer(): number;
        layout(arg0: $ReadableDimension, arg1: $RenderInfo): void;
        getMinSize(): $ReadableDimension;
        getContainer(): $GuiContainer<any>;
        setMaxSize(arg0: $ReadableDimension): T;
        setDisabled(): T;
        setContainer(arg0: $GuiContainer<any>): T;
        getMaxSize(): $ReadableDimension;
        draw(arg0: $GuiRenderer, arg1: $ReadableDimension, arg2: $RenderInfo): void;
        setTooltip(arg0: $GuiElement<any>): T;
        getTooltip(arg0: $RenderInfo): $GuiElement<any>;
        getMinecraft(): $Minecraft;
        setEnabled(arg0: boolean): T;
        setEnabled(): T;
        get layer(): number;
        get minSize(): $ReadableDimension;
        get minecraft(): $Minecraft;
    }
}
