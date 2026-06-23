import { $JsonDeserializer } from "@package/com/google/gson";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/software/bernie/geckolib/loading/json/raw" {
    export class $ModelProperties extends $Record {
        identifier(): string;
        animationSingleArmAnimation(): boolean;
        animationStatueOfLibertyArms(): boolean;
        animationSingleLegAnimation(): boolean;
        static deserializer(): $JsonDeserializer<$ModelProperties>;
        textureWidth(): number;
        textureHeight(): number;
        visibleBoundsOffset(): number[];
        animationArmsOutFront(): boolean;
        animationDontShowArmor(): boolean;
        animationInvertedCrouch(): boolean;
        animationStationaryLegs(): boolean;
        animationUpsideDown(): boolean;
        visibleBoundsHeight(): number;
        animationNoHeadBob(): boolean;
        visibleBoundsWidth(): number;
        preserveModelPose(): boolean;
        animationArmsDown(): boolean;
        constructor(animationArmsDown: boolean, animationArmsOutFront: boolean, animationDontShowArmor: boolean, animationInvertedCrouch: boolean, animationNoHeadBob: boolean, animationSingleArmAnimation: boolean, animationSingleLegAnimation: boolean, animationStationaryLegs: boolean, animationStatueOfLibertyArms: boolean, animationUpsideDown: boolean, identifier: string, preserveModelPose: boolean, textureHeight: number, textureWidth: number, visibleBoundsHeight: number, visibleBoundsOffset: number[], visibleBoundsWidth: number);
    }
    export class $FaceUV$Rotation extends $Enum<$FaceUV$Rotation> {
        static values(): $FaceUV$Rotation[];
        static valueOf(arg0: string): $FaceUV$Rotation;
        static fromValue(arg0: number): $FaceUV$Rotation;
        rotateUvs(arg0: number, arg1: number, arg2: number, arg3: number): number[];
        static CLOCKWISE_90: $FaceUV$Rotation;
        static CLOCKWISE_270: $FaceUV$Rotation;
        static CLOCKWISE_180: $FaceUV$Rotation;
        static NONE: $FaceUV$Rotation;
    }
    /**
     * Values that may be interpreted as {@link $FaceUV$Rotation}.
     */
    export type $FaceUV$Rotation_ = "none" | "clockwise_90" | "clockwise_180" | "clockwise_270";
}
