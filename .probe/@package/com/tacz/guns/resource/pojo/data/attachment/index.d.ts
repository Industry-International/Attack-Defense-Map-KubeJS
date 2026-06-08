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
        addModifier(arg0: string, arg1: $JsonProperty<never>): void;
        getModifier(): $Map<string, $JsonProperty<never>>;
        gunsmith$getGunsmithLibExtension(): $Optional<any>;
        getMeleeData(): $MeleeData;
        getExtendedMagLevel(): number;
        constructor();
        get weight(): number;
        get modifier(): $Map<string, $JsonProperty<never>>;
        get meleeData(): $MeleeData;
        get extendedMagLevel(): number;
    }
    export class $MeleeData {
        getDamage(): number;
        getKnockback(): number;
        getRangeAngle(): number;
        getDistance(): number;
        getEffects(): $List<$EffectData>;
        getCooldown(): number;
        getPrepTime(): number;
        constructor();
        get damage(): number;
        get knockback(): number;
        get rangeAngle(): number;
        get distance(): number;
        get effects(): $List<$EffectData>;
        get cooldown(): number;
        get prepTime(): number;
    }
}
