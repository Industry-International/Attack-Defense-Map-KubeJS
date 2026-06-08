import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EnhancedAttachmentData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/attachment";
import { $JsonProperty } from "@package/com/tacz/guns/api/modifier";
import { $Optional, $Map, $List } from "@package/java/util";

declare module "@package/com/tacz/guns/resource/pojo/data/attachment" {
    export class $EffectData {
        getTime(): number;
        getAmplifier(): number;
        getEffectId(): $ResourceLocation;
        isHideParticles(): boolean;
        constructor();
        get time(): number;
        get amplifier(): number;
        get effectId(): $ResourceLocation;
        get hideParticles(): boolean;
    }
    export class $AttachmentData implements $EnhancedAttachmentData {
        getWeight(): number;
        gunsmith$getGunsmithLibExtension(): $Optional<any>;
        getMeleeData(): $MeleeData;
        getModifier(): $Map<string, $JsonProperty<never>>;
        getExtendedMagLevel(): number;
        addModifier(arg0: string, arg1: $JsonProperty<never>): void;
        constructor();
        get weight(): number;
        get meleeData(): $MeleeData;
        get modifier(): $Map<string, $JsonProperty<never>>;
        get extendedMagLevel(): number;
    }
    export class $MeleeData {
        getPrepTime(): number;
        getKnockback(): number;
        getDistance(): number;
        getDamage(): number;
        getEffects(): $List<$EffectData>;
        getRangeAngle(): number;
        getCooldown(): number;
        constructor();
        get prepTime(): number;
        get knockback(): number;
        get distance(): number;
        get damage(): number;
        get effects(): $List<$EffectData>;
        get rangeAngle(): number;
        get cooldown(): number;
    }
}
