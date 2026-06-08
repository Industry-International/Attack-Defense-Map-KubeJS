import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Annotation } from "@package/java/lang/annotation";
import { $List } from "@package/java/util";

declare module "@package/kotlinx/serialization/descriptors" {
    export class $SerialDescriptor {
        static access$isInline$jd(arg0: $SerialDescriptor): boolean;
        static access$isNullable$jd(arg0: $SerialDescriptor): boolean;
        static access$getAnnotations$jd(arg0: $SerialDescriptor): $List<any>;
    }
    export interface $SerialDescriptor {
        getAnnotations(): $List<$Annotation>;
        getKind(): $SerialKind;
        getElementName(arg0: number): string;
        getElementsCount(): number;
        getElementIndex(arg0: string): number;
        isElementOptional(arg0: number): boolean;
        getElementDescriptor(arg0: number): $SerialDescriptor;
        getSerialName(): string;
        isNullable(): boolean;
        isInline(): boolean;
        getElementAnnotations(arg0: number): $List<$Annotation>;
        get annotations(): $List<$Annotation>;
        get kind(): $SerialKind;
        get elementsCount(): number;
        get serialName(): string;
        get nullable(): boolean;
        get inline(): boolean;
    }
    export class $SerialKind {
        constructor(arg0: $DefaultConstructorMarker);
    }
}
