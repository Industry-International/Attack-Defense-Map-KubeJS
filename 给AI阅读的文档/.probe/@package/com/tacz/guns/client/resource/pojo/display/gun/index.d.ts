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
        getIronZoom(): number;
        getSounds(): $Map<string, $ResourceLocation>;
        getThirdPersonAnimation(): string;
        getControllableData(): $EnumMap<$FireMode, $ControllableData>;
        getAnimationLocation(): $ResourceLocation;
        getPlayerAnimator3rd(): $ResourceLocation;
        enablesTransparency(): boolean;
        getDefaultAnimation(): $ResourceLocation;
        getHudTextureLocation(): $ResourceLocation;
        getStateMachineLocation(): $ResourceLocation;
        getDefaultAnimationType(): $DefaultAnimationType;
        getSlotTextureLocation(): $ResourceLocation;
        getHudEmptyTextureLocation(): $ResourceLocation;
        getStateMachineParam(): $Map<string, $Object>;
        gunsmith$getGunsmithLibExtension(): $Optional<any>;
        getGunLod(): $GunLod;
        getGunAmmo(): $GunAmmo;
        getModelLocation(): $ResourceLocation;
        getTextShows(): $Map<string, $TextShow>;
        is3rdFixedHand(): boolean;
        getDamageStyle(): $DamageStyle;
        getModelType(): string;
        getModelTexture(): $ResourceLocation;
        isShowCrosshair(): boolean;
        getAmmoCountStyle(): $AmmoCountStyle;
        getLaserConfig(): $LaserConfig;
        getZoomModelFov(): number;
        getPreloadSounds(): $List<string>;
        getMuzzleFlash(): $MuzzleFlash;
        getOffhandShow(): $LayerGunShow;
        getShellEjection(): $ShellEjection;
        getHotbarShow(): $Map<string, $LayerGunShow>;
        getTransform(): $GunTransform;
        constructor();
        get ironZoom(): number;
        get sounds(): $Map<string, $ResourceLocation>;
        get thirdPersonAnimation(): string;
        get controllableData(): $EnumMap<$FireMode, $ControllableData>;
        get animationLocation(): $ResourceLocation;
        get playerAnimator3rd(): $ResourceLocation;
        get defaultAnimation(): $ResourceLocation;
        get hudTextureLocation(): $ResourceLocation;
        get stateMachineLocation(): $ResourceLocation;
        get defaultAnimationType(): $DefaultAnimationType;
        get slotTextureLocation(): $ResourceLocation;
        get hudEmptyTextureLocation(): $ResourceLocation;
        get stateMachineParam(): $Map<string, $Object>;
        get gunLod(): $GunLod;
        get gunAmmo(): $GunAmmo;
        get modelLocation(): $ResourceLocation;
        get textShows(): $Map<string, $TextShow>;
        get 3rdFixedHand(): boolean;
        get damageStyle(): $DamageStyle;
        get modelType(): string;
        get modelTexture(): $ResourceLocation;
        get showCrosshair(): boolean;
        get ammoCountStyle(): $AmmoCountStyle;
        get laserConfig(): $LaserConfig;
        get zoomModelFov(): number;
        get preloadSounds(): $List<string>;
        get muzzleFlash(): $MuzzleFlash;
        get offhandShow(): $LayerGunShow;
        get shellEjection(): $ShellEjection;
        get hotbarShow(): $Map<string, $LayerGunShow>;
        get transform(): $GunTransform;
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
        getScale(): $Vector3f;
        getPos(): $Vector3f;
        getRotate(): $Vector3f;
        constructor();
        get scale(): $Vector3f;
        get pos(): $Vector3f;
        get rotate(): $Vector3f;
    }
    export class $ControllableData {
        getTimeInMs(): number;
        getHighFrequency(): number;
        getLowFrequency(): number;
        constructor();
        get timeInMs(): number;
        get highFrequency(): number;
        get lowFrequency(): number;
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
        getAlign(): $Align;
        getScale(): number;
        isShadow(): boolean;
        setColorInt(arg0: number): void;
        getColorText(): string;
        getTextKey(): string;
        getColorInt(): number;
        getTextLight(): number;
        constructor();
        get align(): $Align;
        get scale(): number;
        get shadow(): boolean;
        get colorText(): string;
        get textKey(): string;
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
        getAngularVelocity(): $Vector3f;
        getInitialVelocity(): $Vector3f;
        getRandomVelocity(): $Vector3f;
        getLivingTime(): number;
        constructor();
        get acceleration(): $Vector3f;
        get angularVelocity(): $Vector3f;
        get initialVelocity(): $Vector3f;
        get randomVelocity(): $Vector3f;
        get livingTime(): number;
    }
}
