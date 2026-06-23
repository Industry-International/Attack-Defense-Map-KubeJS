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
        getDamage(): number;
        getKnockback(): number;
        getCooldown(): number;
        getRangeAngle(): number;
        getPrepTime(): number;
        constructor();
        get distance(): number;
        get effects(): $List<$EffectData>;
        get damage(): number;
        get knockback(): number;
        get cooldown(): number;
        get rangeAngle(): number;
        get prepTime(): number;
    }
}
