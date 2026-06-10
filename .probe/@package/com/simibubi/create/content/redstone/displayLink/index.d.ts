import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FactoryPanelSupportBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DisplayTarget, $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $Object } from "@package/java/lang";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as target from "@package/com/simibubi/create/content/redstone/displayLink/target";

declare module "@package/com/simibubi/create/content/redstone/displayLink" {
    export class $DisplayLinkContext {
        level(): $Level;
        getTargetPos(): $BlockPos;
        getTargetBlockEntity(): $BlockEntity;
        sourceConfig(): $CompoundTag;
        blockEntity(): $DisplayLinkBlockEntity;
        getSourcePos(): $BlockPos;
        getSourceBlockEntity(): $BlockEntity;
        flapDisplayContext: $Object;
        constructor(arg0: $Level_, arg1: $DisplayLinkBlockEntity);
        get targetPos(): $BlockPos;
        get targetBlockEntity(): $BlockEntity;
        get sourcePos(): $BlockPos;
        get sourceBlockEntity(): $BlockEntity;
    }
    export class $DisplayLinkBlockEntity extends $LinkWithBulbBlockEntity implements $TransformableBlockEntity {
        target(arg0: $BlockPos_): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        getTargetPosition(): $BlockPos;
        onNoLongerPowered(): void;
        handler$hkc001$sable$accountForSubLevels(arg0: $CallbackInfoReturnable<any>): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getSourcePosition(): $BlockPos;
        getDirection(): $Direction;
        updateGatheredData(): void;
        getSourceConfig(): $CompoundTag;
        tickSource(): void;
        setSourceConfig(arg0: $CompoundTag_): void;
        worldPosition: $BlockPos;
        refreshTicks: number;
        level: $Level;
        targetLine: number;
        static ATTACHMENTS_NBT_KEY: string;
        activeTarget: $DisplayTarget;
        computerBehaviour: $AbstractComputerBehaviour;
        factoryPanelSupport: $FactoryPanelSupportBehaviour;
        activeSource: $DisplaySource;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get targetPosition(): $BlockPos;
        get sourcePosition(): $BlockPos;
        get direction(): $Direction;
    }
    export class $LinkWithBulbBlockEntity extends $SmartBlockEntity {
        pulse(): void;
        getGlow(arg0: number): number;
        getBulbOffset(arg0: $BlockState_): $Vec3;
        getBulbFacing(arg0: $BlockState_): $Direction;
        sendPulseNextSync(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
