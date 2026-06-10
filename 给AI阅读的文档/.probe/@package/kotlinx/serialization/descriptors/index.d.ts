import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Annotation } from "@package/java/lang/annotation";
import { $List } from "@package/java/util";

declare module "@package/kotlinx/serialization/descriptors" {
    export class $SerialDescriptor {
        static access$isInline$jd(arg0: $SerialDescriptor): boolean;
        static access$getAnnotations$jd(arg0: $SerialDescriptor): $List<any>;
        static access$isNullable$jd(arg0: $SerialDescriptor): boolean;
    }
    export interface $SerialDescriptor {
        getAnnotations(): $List<$Annotation>;
        getElementName(arg0: number): string;
        getElementDescriptor(arg0: number): $SerialDescriptor;
        getKind(): $SerialKind;
        getElementsCount(): number;
        getElementIndex(arg0: string): number;
        isElementOptional(arg0: number): boolean;
        isNullable(): boolean;
        isInline(): boolean;
        getElementAnnotations(arg0: number): $List<$Annotation>;
        getSerialName(): string;
        get annotations(): $List<$Annotation>;
        get kind(): $SerialKind;
        get elementsCount(): number;
        get nullable(): boolean;
        get inline(): boolean;
        get serialName(): string;
    }
    export class $SerialKind {
        constructor(arg0: $DefaultConstructorMarker);
    }
}
