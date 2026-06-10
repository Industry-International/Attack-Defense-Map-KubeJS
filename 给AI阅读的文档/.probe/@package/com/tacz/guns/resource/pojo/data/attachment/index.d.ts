import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EnhancedAttachmentData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/attachment";
import { $JsonProperty } from "@package/com/tacz/guns/api/modifier";
import { $Optional, $Map, $List } from "@package/java/util";

declare module "@package/com/tacz/guns/resource/pojo/data/attachment" {
    export class $EffectData {
        getTime(): number;
        getAmplifier(): number;
        isHideParticles(): boolean;
        getEffectId(): $ResourceLocation;
        constructor();
        get time(): number;
        get amplifier(): number;
        get hideParticles(): boolean;
        get effectId(): $ResourceLocation;
    }
    export class $AttachmentData implements $EnhancedAttachmentData {
        getWeight(): number;
        getMeleeData(): $MeleeData;
        getModifier(): $Map<string, $JsonProperty<never>>;
        gunsmith$getGunsmithLibExtension(): $Optional<any>;
        addModifier(arg0: string, arg1: $JsonProperty<never>): void;
        getExtendedMagLevel(): number;
        constructor();
        get weight(): number;
        get meleeData(): $MeleeData;
        get modifier(): $Map<string, $JsonProperty<never>>;
        get extendedMagLevel(): number;
    }
    export class $MeleeData {
        getDistance(): number;
        getEffects(): $List<$EffectData>;
        getCooldown(): number;
        getKnockback(): number;
        getDamage(): number;
        getRangeAngle(): number;
        getPrepTime(): number;
        constructor();
        get distance(): number;
        get effects(): $List<$EffectData>;
        get cooldown(): number;
        get knockback(): number;
        get damage(): number;
        get rangeAngle(): number;
        get prepTime(): number;
    }
}
