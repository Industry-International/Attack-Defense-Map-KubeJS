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
        getKind(): $SerialKind;
        getElementDescriptor(arg0: number): $SerialDescriptor;
        getSerialName(): string;
        isInline(): boolean;
        isElementOptional(arg0: number): boolean;
        getElementIndex(arg0: string): number;
        getElementsCount(): number;
        isNullable(): boolean;
        getElementAnnotations(arg0: number): $List<$Annotation>;
        get annotations(): $List<$Annotation>;
        get kind(): $SerialKind;
        get serialName(): string;
        get inline(): boolean;
        get elementsCount(): number;
        get nullable(): boolean;
    }
    export class $SerialKind {
        constructor(arg0: $DefaultConstructorMarker);
    }
}
