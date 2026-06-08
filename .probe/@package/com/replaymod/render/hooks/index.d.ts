import { $EventRegistrations } from "@package/de/johni0702/minecraft/gui/utils";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $WorldRenderer, $RenderInfo, $CaptureData } from "@package/com/replaymod/render/capturer";
import { $VirtualWindow } from "@package/com/replaymod/render/gui/progress";
import { $Minecraft } from "@package/net/minecraft/client";
import { $RenderSettings } from "@package/com/replaymod/render";

declare module "@package/com/replaymod/render/hooks" {
    export class $ForceChunkLoadingHook {
        uninstall(): void;
        constructor(renderGlobal: $LevelRenderer);
    }
    export class $EntityRendererHandler$IEntityRenderer {
    }
    export interface $EntityRendererHandler$IEntityRenderer {
        replayModRender_setHandler(arg0: $EntityRendererHandler): void;
        replayModRender_getHandler(): $EntityRendererHandler;
    }
    export class $MinecraftClientExt {
        static get(mc: $Minecraft): $MinecraftClientExt;
    }
    export interface $MinecraftClientExt {
        setWindowDelegate(arg0: $VirtualWindow): void;
        set windowDelegate(value: $VirtualWindow);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientExt}.
     */
    export type $MinecraftClientExt_ = ((arg0: $VirtualWindow) => void);
    export class $EntityRendererHandler extends $EventRegistrations implements $WorldRenderer {
        close(): void;
        getSettings(): $RenderSettings;
        renderWorld(partialTicks: number, finishTimeNano: number): void;
        renderWorld(partialTicks: number, data: $CaptureData): void;
        getFakeFinishTimeNano(): number;
        getRenderInfo(): $RenderInfo;
        setOmnidirectional(omnidirectional: boolean): void;
        data: $CaptureData;
        mc: $Minecraft;
        omnidirectional: boolean;
        constructor(settings: $RenderSettings, renderInfo: $RenderInfo);
        get settings(): $RenderSettings;
        get fakeFinishTimeNano(): number;
        get renderInfo(): $RenderInfo;
    }
    export class $ForceChunkLoadingHook$IBlockOnChunkRebuilds {
    }
    export interface $ForceChunkLoadingHook$IBlockOnChunkRebuilds {
        uploadEverythingBlocking(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ForceChunkLoadingHook$IBlockOnChunkRebuilds}.
     */
    export type $ForceChunkLoadingHook$IBlockOnChunkRebuilds_ = (() => boolean);
    export class $IForceChunkLoading {
        static from(worldRenderer: $LevelRenderer): $IForceChunkLoading;
    }
    export interface $IForceChunkLoading {
        replayModRender_setHook(arg0: $ForceChunkLoadingHook): void;
    }
    /**
     * Values that may be interpreted as {@link $IForceChunkLoading}.
     */
    export type $IForceChunkLoading_ = ((arg0: $ForceChunkLoadingHook) => void);
}
