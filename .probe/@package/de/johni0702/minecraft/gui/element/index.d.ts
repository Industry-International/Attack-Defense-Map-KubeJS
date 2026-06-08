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
        setTooltip(arg0: $GuiElement<any>): T;
        setMaxSize(arg0: $ReadableDimension): T;
        getContainer(): $GuiContainer<any>;
        getMaxSize(): $ReadableDimension;
        draw(arg0: $GuiRenderer, arg1: $ReadableDimension, arg2: $RenderInfo): void;
        setEnabled(arg0: boolean): T;
        setEnabled(): T;
        getMinecraft(): $Minecraft;
        setDisabled(): T;
        setContainer(arg0: $GuiContainer<any>): T;
        getTooltip(arg0: $RenderInfo): $GuiElement<any>;
        getMinSize(): $ReadableDimension;
        get layer(): number;
        get minecraft(): $Minecraft;
        get minSize(): $ReadableDimension;
    }
}
