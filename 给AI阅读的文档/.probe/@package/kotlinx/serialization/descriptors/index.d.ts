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
        isNullable(): boolean;
        getKind(): $SerialKind;
        getElementDescriptor(arg0: number): $SerialDescriptor;
        isElementOptional(arg0: number): boolean;
        getElementIndex(arg0: string): number;
        getElementsCount(): number;
        isInline(): boolean;
        getSerialName(): string;
        getElementAnnotations(arg0: number): $List<$Annotation>;
        get annotations(): $List<$Annotation>;
        get nullable(): boolean;
        get kind(): $SerialKind;
        get elementsCount(): number;
        get inline(): boolean;
        get serialName(): string;
    }
    export class $SerialKind {
        constructor(arg0: $DefaultConstructorMarker);
    }
}
