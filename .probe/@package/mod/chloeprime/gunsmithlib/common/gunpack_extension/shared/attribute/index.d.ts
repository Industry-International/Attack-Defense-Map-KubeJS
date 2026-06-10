import { $Holder } from "@package/net/minecraft/core";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AttributeModifier$Operation, $AttributeModifier, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID } from "@package/java/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/attribute" {
    export class $GunsmithLibAttributeModifierEntry {
        getAttribute(): ($Holder<$Attribute>) | undefined;
        getOperation(): $AttributeModifier$Operation;
        getModifier(): ($Pair<$Holder<$Attribute>, $AttributeModifier>) | undefined;
        getAmount(): number;
        getModifierId(): $UUID;
        getModifierName(): string;
        getAttributeId(): $ResourceLocation;
        getModifierIdForMC121(): $ResourceLocation;
        constructor();
        get attribute(): ($Holder<$Attribute>) | undefined;
        get operation(): $AttributeModifier$Operation;
        get modifier(): ($Pair<$Holder<$Attribute>, $AttributeModifier>) | undefined;
        get amount(): number;
        get modifierId(): $UUID;
        get modifierName(): string;
        get attributeId(): $ResourceLocation;
        get modifierIdForMC121(): $ResourceLocation;
    }
}
