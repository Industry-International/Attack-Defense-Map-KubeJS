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
        getContainer(): $GuiContainer<any>;
        getMaxSize(): $ReadableDimension;
        setMaxSize(arg0: $ReadableDimension): T;
        draw(arg0: $GuiRenderer, arg1: $ReadableDimension, arg2: $RenderInfo): void;
        setDisabled(): T;
        setContainer(arg0: $GuiContainer<any>): T;
        getMinSize(): $ReadableDimension;
        setTooltip(arg0: $GuiElement<any>): T;
        setEnabled(arg0: boolean): T;
        setEnabled(): T;
        getMinecraft(): $Minecraft;
        getTooltip(arg0: $RenderInfo): $GuiElement<any>;
        get layer(): number;
        get minSize(): $ReadableDimension;
        get minecraft(): $Minecraft;
    }
}
