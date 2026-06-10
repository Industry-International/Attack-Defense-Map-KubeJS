import { $JsonObject_ } from "@package/com/google/gson";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $AnimationMetadataSectionAccessor } from "@package/net/irisshaders/iris/mixin/texture";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/net/minecraft/client/resources/metadata/animation" {
    export class $VillagerMetaDataSection {
        getHat(): $VillagerMetaDataSection$Hat;
        static SECTION_NAME: string;
        static SERIALIZER: $VillagerMetadataSectionSerializer;
        constructor(arg0: $VillagerMetaDataSection$Hat_);
        get hat(): $VillagerMetaDataSection$Hat;
    }
    export class $AnimationFrame {
        getIndex(): number;
        getTime(arg0: number): number;
        static UNKNOWN_FRAME_TIME: number;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        get index(): number;
    }
    export class $VillagerMetaDataSection$Hat extends $Enum<$VillagerMetaDataSection$Hat> {
        getName(): string;
        static values(): $VillagerMetaDataSection$Hat[];
        static valueOf(arg0: string): $VillagerMetaDataSection$Hat;
        static getByName(arg0: string): $VillagerMetaDataSection$Hat;
        static PARTIAL: $VillagerMetaDataSection$Hat;
        static NONE: $VillagerMetaDataSection$Hat;
        static FULL: $VillagerMetaDataSection$Hat;
    }
    /**
     * Values that may be interpreted as {@link $VillagerMetaDataSection$Hat}.
     */
    export type $VillagerMetaDataSection$Hat_ = "none" | "partial" | "full";
    export class $AnimationMetadataSection implements $AnimationMetadataSectionAccessor {
        calculateFrameSize(arg0: number, arg1: number): $FrameSize;
        forEachFrame(arg0: $AnimationMetadataSection$FrameOutput_): void;
        getDefaultFrameTime(): number;
        isInterpolatedFrames(): boolean;
        getFrameHeight(): number;
        getFrameWidth(): number;
        setFrameHeight(arg0: number): void;
        setFrameWidth(arg0: number): void;
        static SECTION_NAME: string;
        frameHeight: number;
        frameWidth: number;
        frames: $List<$AnimationFrame>;
        static SERIALIZER: $AnimationMetadataSectionSerializer;
        static UNKNOWN_SIZE: number;
        static DEFAULT_FRAME_TIME: number;
        static EMPTY: $AnimationMetadataSection;
        constructor(arg0: $List_<$AnimationFrame>, arg1: number, arg2: number, arg3: number, arg4: boolean);
        get defaultFrameTime(): number;
        get interpolatedFrames(): boolean;
    }
    export class $AnimationMetadataSectionSerializer implements $MetadataSectionSerializer<$AnimationMetadataSection> {
        getMetadataSectionName(): string;
        fromJson(arg0: $JsonObject_): $AnimationMetadataSection;
        constructor();
        get metadataSectionName(): string;
    }
    export class $VillagerMetadataSectionSerializer implements $MetadataSectionSerializer<$VillagerMetaDataSection> {
        getMetadataSectionName(): string;
        fromJson(arg0: $JsonObject_): $VillagerMetaDataSection;
        constructor();
        get metadataSectionName(): string;
    }
    export class $FrameSize extends $Record {
        width(): number;
        height(): number;
        constructor(arg0: number, arg1: number);
    }
    export class $AnimationMetadataSection$FrameOutput {
    }
    export interface $AnimationMetadataSection$FrameOutput {
        accept(arg0: number, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimationMetadataSection$FrameOutput}.
     */
    export type $AnimationMetadataSection$FrameOutput_ = ((arg0: number, arg1: number) => void);
}
