import { $TransformScale } from "@package/com/tacz/guns/client/resource/pojo";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AmmoParticle } from "@package/com/tacz/guns/client/resource/pojo/display/ammo";
import { $Enum, $Object } from "@package/java/lang";
import { $List, $EnumMap, $Map, $Optional } from "@package/java/util";
import { $LaserConfig, $IDisplay } from "@package/com/tacz/guns/client/resource/pojo/display";
import { $FireMode } from "@package/com/tacz/guns/api/item/gun";
import { $Vector3f } from "@package/org/joml";
import { $EnhancedGunDisplay } from "@package/mod/chloeprime/gunsmithlib/client/gunpack_extension";

declare module "@package/com/tacz/guns/client/resource/pojo/display/gun" {
    export class $GunDisplay implements $IDisplay, $EnhancedGunDisplay {
        init(): void;
        is3rdFixedHand(): boolean;
        getZoomModelFov(): number;
        getDamageStyle(): $DamageStyle;
        getModelLocation(): $ResourceLocation;
        getAmmoCountStyle(): $AmmoCountStyle;
        isShowCrosshair(): boolean;
        getLaserConfig(): $LaserConfig;
        getModelType(): string;
        getTextShows(): $Map<string, $TextShow>;
        getModelTexture(): $ResourceLocation;
        getGunAmmo(): $GunAmmo;
        getTransform(): $GunTransform;
        getGunLod(): $GunLod;
        getSounds(): $Map<string, $ResourceLocation>;
        getHudTextureLocation(): $ResourceLocation;
        getSlotTextureLocation(): $ResourceLocation;
        getHudEmptyTextureLocation(): $ResourceLocation;
        gunsmith$getGunsmithLibExtension(): $Optional<any>;
        getIronZoom(): number;
        getMuzzleFlash(): $MuzzleFlash;
        getPreloadSounds(): $List<string>;
        getShellEjection(): $ShellEjection;
        getOffhandShow(): $LayerGunShow;
        getHotbarShow(): $Map<string, $LayerGunShow>;
        getStateMachineParam(): $Map<string, $Object>;
        getThirdPersonAnimation(): string;
        getPlayerAnimator3rd(): $ResourceLocation;
        getControllableData(): $EnumMap<$FireMode, $ControllableData>;
        getAnimationLocation(): $ResourceLocation;
        enablesTransparency(): boolean;
        getDefaultAnimation(): $ResourceLocation;
        getDefaultAnimationType(): $DefaultAnimationType;
        getStateMachineLocation(): $ResourceLocation;
        constructor();
        get 3rdFixedHand(): boolean;
        get zoomModelFov(): number;
        get damageStyle(): $DamageStyle;
        get modelLocation(): $ResourceLocation;
        get ammoCountStyle(): $AmmoCountStyle;
        get showCrosshair(): boolean;
        get laserConfig(): $LaserConfig;
        get modelType(): string;
        get textShows(): $Map<string, $TextShow>;
        get modelTexture(): $ResourceLocation;
        get gunAmmo(): $GunAmmo;
        get transform(): $GunTransform;
        get gunLod(): $GunLod;
        get sounds(): $Map<string, $ResourceLocation>;
        get hudTextureLocation(): $ResourceLocation;
        get slotTextureLocation(): $ResourceLocation;
        get hudEmptyTextureLocation(): $ResourceLocation;
        get ironZoom(): number;
        get muzzleFlash(): $MuzzleFlash;
        get preloadSounds(): $List<string>;
        get shellEjection(): $ShellEjection;
        get offhandShow(): $LayerGunShow;
        get hotbarShow(): $Map<string, $LayerGunShow>;
        get stateMachineParam(): $Map<string, $Object>;
        get thirdPersonAnimation(): string;
        get playerAnimator3rd(): $ResourceLocation;
        get controllableData(): $EnumMap<$FireMode, $ControllableData>;
        get animationLocation(): $ResourceLocation;
        get defaultAnimation(): $ResourceLocation;
        get defaultAnimationType(): $DefaultAnimationType;
        get stateMachineLocation(): $ResourceLocation;
    }
    export class $GunLod {
        getModelLocation(): $ResourceLocation;
        getModelTexture(): $ResourceLocation;
        constructor();
        get modelLocation(): $ResourceLocation;
        get modelTexture(): $ResourceLocation;
    }
    export class $Align extends $Enum<$Align> {
        static values(): $Align[];
        static valueOf(arg0: string): $Align;
        static CENTER: $Align;
        static LEFT: $Align;
        static RIGHT: $Align;
    }
    /**
     * Values that may be interpreted as {@link $Align}.
     */
    export type $Align_ = "left" | "center" | "right";
    export class $DefaultAnimationType extends $Enum<$DefaultAnimationType> {
        static values(): $DefaultAnimationType[];
        static valueOf(arg0: string): $DefaultAnimationType;
        static PISTOL: $DefaultAnimationType;
        static RIFLE: $DefaultAnimationType;
    }
    /**
     * Values that may be interpreted as {@link $DefaultAnimationType}.
     */
    export type $DefaultAnimationType_ = "rifle" | "pistol";
    export class $LayerGunShow {
        getPos(): $Vector3f;
        getRotate(): $Vector3f;
        getScale(): $Vector3f;
        constructor();
        get pos(): $Vector3f;
        get rotate(): $Vector3f;
        get scale(): $Vector3f;
    }
    export class $ControllableData {
        getHighFrequency(): number;
        getLowFrequency(): number;
        getTimeInMs(): number;
        constructor();
        get highFrequency(): number;
        get lowFrequency(): number;
        get timeInMs(): number;
    }
    export class $GunAmmo {
        getParticle(): $AmmoParticle;
        getTracerColor(): string;
        constructor();
        get particle(): $AmmoParticle;
        get tracerColor(): string;
    }
    export class $MuzzleFlash {
        getTexture(): $ResourceLocation;
        getScale(): number;
        constructor();
        get texture(): $ResourceLocation;
        get scale(): number;
    }
    export class $TextShow {
        isShadow(): boolean;
        getTextKey(): string;
        getScale(): number;
        getAlign(): $Align;
        setColorInt(arg0: number): void;
        getColorText(): string;
        getColorInt(): number;
        getTextLight(): number;
        constructor();
        get shadow(): boolean;
        get textKey(): string;
        get scale(): number;
        get align(): $Align;
        get colorText(): string;
        get textLight(): number;
    }
    export class $GunTransform {
        static getDefault(): $GunTransform;
        getScale(): $TransformScale;
        constructor();
        static get default(): $GunTransform;
        get scale(): $TransformScale;
    }
    export class $DamageStyle extends $Enum<$DamageStyle> {
        static values(): $DamageStyle[];
        static valueOf(arg0: string): $DamageStyle;
        static TOTAL: $DamageStyle;
        static PER_PROJECTILE: $DamageStyle;
    }
    /**
     * Values that may be interpreted as {@link $DamageStyle}.
     */
    export type $DamageStyle_ = "total" | "per_projectile";
    export class $AmmoCountStyle extends $Enum<$AmmoCountStyle> {
        static values(): $AmmoCountStyle[];
        static valueOf(arg0: string): $AmmoCountStyle;
        static PERCENT: $AmmoCountStyle;
        static NORMAL: $AmmoCountStyle;
    }
    /**
     * Values that may be interpreted as {@link $AmmoCountStyle}.
     */
    export type $AmmoCountStyle_ = "normal" | "percent";
    export class $ShellEjection {
        getAcceleration(): $Vector3f;
        getRandomVelocity(): $Vector3f;
        getInitialVelocity(): $Vector3f;
        getAngularVelocity(): $Vector3f;
        getLivingTime(): number;
        constructor();
        get acceleration(): $Vector3f;
        get randomVelocity(): $Vector3f;
        get initialVelocity(): $Vector3f;
        get angularVelocity(): $Vector3f;
        get livingTime(): number;
    }
}
