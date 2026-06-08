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
        getElementName(arg0: number): string;
        getElementsCount(): number;
        getSerialName(): string;
        getElementIndex(arg0: string): number;
        isElementOptional(arg0: number): boolean;
        getElementDescriptor(arg0: number): $SerialDescriptor;
        getKind(): $SerialKind;
        isNullable(): boolean;
        getElementAnnotations(arg0: number): $List<$Annotation>;
        isInline(): boolean;
        get annotations(): $List<$Annotation>;
        get elementsCount(): number;
        get serialName(): string;
        get kind(): $SerialKind;
        get nullable(): boolean;
        get inline(): boolean;
    }
    export class $SerialKind {
        constructor(arg0: $DefaultConstructorMarker);
    }
}
