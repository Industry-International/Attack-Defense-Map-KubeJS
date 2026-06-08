import { $Level, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $MultiBufferSource_, $MultiBufferSource, $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener, $PositionSource, $GameEvent, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $Minecraft } from "@package/net/minecraft/client";
import { $BeeDebugPayload$BeeInfo_, $HiveDebugPayload$HiveInfo_, $BrainDebugPayload$BrainDump_, $StructuresDebugPayload$PieceInfo_, $BreezeDebugPayload$BreezeInfo_, $GoalDebugPayload$DebugGoal_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $Collection_, $List_ } from "@package/java/util";
import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/client/renderer/debug" {
    export class $LightSectionDebugRenderer$SectionData {
    }
    export class $DebugRenderer {
        clear(): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource$BufferSource, arg2: number, arg3: number, arg4: number): void;
        handler$ccd000$vista$renderDebug(arg0: $PoseStack, arg1: $MultiBufferSource$BufferSource, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        handler$gnp000$moonlight$supp$renderVanillaDebug(arg0: $PoseStack, arg1: $MultiBufferSource$BufferSource, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        static getTargetedEntity(arg0: $Entity, arg1: number): ($Entity) | undefined;
        static renderFilledBox(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static renderFilledBox(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $AABB_, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static renderFilledBox(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        static renderFilledBox(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $BlockPos_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static renderFloatingText(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static renderFloatingText(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static renderFloatingText(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number, arg10: boolean): void;
        static renderFloatingText(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        switchRenderChunkborder(): boolean;
        static renderFilledUnitCube(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $BlockPos_, arg3: number, arg4: number, arg5: number, arg6: number): void;
        waterDebugRenderer: $DebugRenderer$SimpleDebugRenderer;
        neighborsUpdateRenderer: $DebugRenderer$SimpleDebugRenderer;
        pathfindingRenderer: $PathfindingRenderer;
        gameTestDebugRenderer: $GameTestDebugRenderer;
        supportBlockRenderer: $DebugRenderer$SimpleDebugRenderer;
        solidFaceRenderer: $DebugRenderer$SimpleDebugRenderer;
        breezeDebugRenderer: $BreezeDebugRenderer;
        gameEventListenerRenderer: $GameEventListenerRenderer;
        structureRenderer: $StructureRenderer;
        lightDebugRenderer: $DebugRenderer$SimpleDebugRenderer;
        chunkRenderer: $DebugRenderer$SimpleDebugRenderer;
        brainDebugRenderer: $BrainDebugRenderer;
        heightMapRenderer: $DebugRenderer$SimpleDebugRenderer;
        chunkBorderRenderer: $DebugRenderer$SimpleDebugRenderer;
        collisionBoxRenderer: $DebugRenderer$SimpleDebugRenderer;
        skyLightSectionDebugRenderer: $LightSectionDebugRenderer;
        goalSelectorRenderer: $GoalSelectorDebugRenderer;
        beeDebugRenderer: $BeeDebugRenderer;
        villageSectionsDebugRenderer: $VillageSectionsDebugRenderer;
        raidDebugRenderer: $RaidDebugRenderer;
        worldGenAttemptRenderer: $DebugRenderer$SimpleDebugRenderer;
        constructor(arg0: $Minecraft);
    }
    export class $HeightMapRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        constructor(arg0: $Minecraft);
    }
    export class $NeighborsUpdateRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        addUpdate(arg0: number, arg1: $BlockPos_): void;
        clear(): void;
        constructor(arg0: $Minecraft);
    }
    export class $StructureRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        addBoundingBox(arg0: $BoundingBox, arg1: $List_<$StructuresDebugPayload$PieceInfo_>, arg2: $ResourceKey_<$Level>): void;
        constructor(arg0: $Minecraft);
    }
    export class $BreezeDebugRenderer {
        clear(): void;
        add(arg0: $BreezeDebugPayload$BreezeInfo_): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        constructor(arg0: $Minecraft);
    }
    export class $BrainDebugRenderer$PoiInfo {
        pos: $BlockPos;
        freeTicketCount: number;
        type: string;
        constructor(arg0: $BlockPos_, arg1: string, arg2: number);
    }
    export class $SolidFaceRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        constructor(arg0: $Minecraft);
    }
    export class $GameTestDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        addMarker(arg0: $BlockPos_, arg1: number, arg2: string, arg3: number): void;
        constructor();
    }
    export class $RaidDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        setRaidCenters(arg0: $Collection_<$BlockPos_>): void;
        clear(): void;
        constructor(arg0: $Minecraft);
        set raidCenters(value: $Collection_<$BlockPos_>);
    }
    export class $PathfindingRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        addPath(arg0: number, arg1: $Path, arg2: number): void;
        static renderPathLine(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $Path, arg3: number, arg4: number, arg5: number): void;
        static renderPath(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Path, arg3: number, arg4: boolean, arg5: boolean, arg6: number, arg7: number, arg8: number): void;
        clear(): void;
        constructor();
    }
    export class $WorldGenAttemptRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        addPos(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        clear(): void;
        constructor();
    }
    export class $SupportBlockRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        constructor(arg0: $Minecraft);
    }
    export class $GameEventListenerRenderer$TrackedGameEvent extends $Record {
    }
    export class $ChunkBorderRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        constructor(arg0: $Minecraft);
    }
    export class $CollisionBoxRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        constructor(arg0: $Minecraft);
    }
    export class $WaterDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        constructor(arg0: $Minecraft);
    }
    export class $LightDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        constructor(arg0: $Minecraft);
    }
    export class $GoalSelectorDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        addGoalSelector(arg0: number, arg1: $BlockPos_, arg2: $List_<$GoalDebugPayload$DebugGoal_>): void;
        removeGoalSelector(arg0: number): void;
        constructor(arg0: $Minecraft);
    }
    export class $BeeDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        addOrUpdateHiveInfo(arg0: $HiveDebugPayload$HiveInfo_, arg1: number): void;
        addOrUpdateBeeInfo(arg0: $BeeDebugPayload$BeeInfo_): void;
        removeBeeInfo(arg0: number): void;
        constructor(arg0: $Minecraft);
    }
    export class $GameEventListenerRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        trackListener(arg0: $PositionSource, arg1: number): void;
        trackGameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $Vec3_): void;
        clear(): void;
        constructor(arg0: $Minecraft);
    }
    export class $ChunkDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        minecraft: $Minecraft;
        constructor(arg0: $Minecraft);
    }
    export class $LightSectionDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        constructor(arg0: $Minecraft, arg1: $LightLayer_);
    }
    export class $GoalSelectorDebugRenderer$EntityGoalInfo extends $Record {
    }
    export class $GameTestDebugRenderer$Marker {
    }
    export class $BeeDebugRenderer$HiveDebugInfo extends $Record {
    }
    export class $VillageSectionsDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        setNotVillageSection(arg0: $SectionPos): void;
        setVillageSection(arg0: $SectionPos): void;
        constructor();
        set notVillageSection(value: $SectionPos);
        set villageSection(value: $SectionPos);
    }
    export class $DebugRenderer$SimpleDebugRenderer {
    }
    export interface $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DebugRenderer$SimpleDebugRenderer}.
     */
    export type $DebugRenderer$SimpleDebugRenderer_ = ((arg0: $PoseStack, arg1: $MultiBufferSource, arg2: number, arg3: number, arg4: number) => void);
    export class $ChunkDebugRenderer$ChunkData {
    }
    export class $GameEventListenerRenderer$TrackedListener implements $GameEventListener {
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        get deliveryMode(): $GameEventListener$DeliveryMode;
    }
    export class $BrainDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        addOrUpdateBrainDump(arg0: $BrainDebugPayload$BrainDump_): void;
        addPoi(arg0: $BrainDebugRenderer$PoiInfo): void;
        removePoi(arg0: $BlockPos_): void;
        setFreeTicketCount(arg0: $BlockPos_, arg1: number): void;
        removeBrainDump(arg0: number): void;
        constructor(arg0: $Minecraft);
    }
}
