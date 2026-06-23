import { $Holder } from "@package/net/minecraft/core";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AttributeModifier$Operation, $AttributeModifier, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID } from "@package/java/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/attribute" {
    export class $GunsmithLibAttributeModifierEntry {
        getAttribute(): ($Holder<$Attribute>) | undefined;
        getModifierIdForMC121(): $ResourceLocation;
        getOperation(): $AttributeModifier$Operation;
        getAmount(): number;
        getModifier(): ($Pair<$Holder<$Attribute>, $AttributeModifier>) | undefined;
        getModifierId(): $UUID;
        getModifierName(): string;
        getAttributeId(): $ResourceLocation;
        constructor();
        get attribute(): ($Holder<$Attribute>) | undefined;
        get modifierIdForMC121(): $ResourceLocation;
        get operation(): $AttributeModifier$Operation;
        get amount(): number;
        get modifier(): ($Pair<$Holder<$Attribute>, $AttributeModifier>) | undefined;
        get modifierId(): $UUID;
        get modifierName(): string;
        get attributeId(): $ResourceLocation;
    }
}
