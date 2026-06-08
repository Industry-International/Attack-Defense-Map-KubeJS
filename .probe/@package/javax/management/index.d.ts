import { $Serializable } from "@package/java/io";
import { $Constructor, $Method } from "@package/java/lang/reflect";
import { $ArrayList, $List, $SequencedCollection, $List_ } from "@package/java/util";
import { $Object, $Cloneable } from "@package/java/lang";
export * as openmbean from "@package/javax/management/openmbean";

declare module "@package/javax/management" {
    export class $MBeanConstructorInfo extends $MBeanFeatureInfo implements $Cloneable {
        clone(): $Object;
        getSignature(): $MBeanParameterInfo[];
        constructor(arg0: string, arg1: string, arg2: $MBeanParameterInfo[], arg3: $Descriptor);
        constructor(arg0: string, arg1: string, arg2: $MBeanParameterInfo[]);
        constructor(arg0: string, arg1: $Constructor<never>);
        get signature(): $MBeanParameterInfo[];
    }
    export class $MBeanNotificationInfo extends $MBeanFeatureInfo implements $Cloneable {
        clone(): $Object;
        getNotifTypes(): string[];
        constructor(arg0: string[], arg1: string, arg2: string);
        constructor(arg0: string[], arg1: string, arg2: string, arg3: $Descriptor);
        get notifTypes(): string[];
    }
    export class $MBeanFeatureInfo implements $Serializable, $DescriptorRead {
        getName(): string;
        getDescriptor(): $Descriptor;
        getDescription(): string;
        constructor(arg0: string, arg1: string);
        constructor(arg0: string, arg1: string, arg2: $Descriptor);
        get name(): string;
        get descriptor(): $Descriptor;
        get description(): string;
    }
    export class $DescriptorRead {
    }
    export interface $DescriptorRead {
        getDescriptor(): $Descriptor;
        get descriptor(): $Descriptor;
    }
    /**
     * Values that may be interpreted as {@link $DescriptorRead}.
     */
    export type $DescriptorRead_ = (() => $Descriptor);
    export class $Descriptor {
    }
    export interface $Descriptor extends $Serializable, $Cloneable {
        equals(arg0: $Object): boolean;
        hashCode(): number;
        clone(): $Object;
        getFields(): string[];
        setFields(arg0: string[], arg1: $Object[]): void;
        isValid(): boolean;
        setField(arg0: string, arg1: $Object): void;
        removeField(arg0: string): void;
        getFieldNames(): string[];
        getFieldValues(...arg0: string[]): $Object[];
        getFieldValue(arg0: string): $Object;
        get valid(): boolean;
        get fieldNames(): string[];
    }
    export class $MBeanInfo implements $Cloneable, $Serializable, $DescriptorRead {
        clone(): $Object;
        getDescriptor(): $Descriptor;
        getConstructors(): $MBeanConstructorInfo[];
        getClassName(): string;
        getAttributes(): $MBeanAttributeInfo[];
        getDescription(): string;
        getOperations(): $MBeanOperationInfo[];
        getNotifications(): $MBeanNotificationInfo[];
        constructor(arg0: string, arg1: string, arg2: $MBeanAttributeInfo[], arg3: $MBeanConstructorInfo[], arg4: $MBeanOperationInfo[], arg5: $MBeanNotificationInfo[]);
        constructor(arg0: string, arg1: string, arg2: $MBeanAttributeInfo[], arg3: $MBeanConstructorInfo[], arg4: $MBeanOperationInfo[], arg5: $MBeanNotificationInfo[], arg6: $Descriptor);
        get descriptor(): $Descriptor;
        get constructors(): $MBeanConstructorInfo[];
        get className(): string;
        get attributes(): $MBeanAttributeInfo[];
        get description(): string;
        get operations(): $MBeanOperationInfo[];
        get notifications(): $MBeanNotificationInfo[];
    }
    export class $DynamicMBean {
    }
    export interface $DynamicMBean {
        invoke(arg0: string, arg1: $Object[], arg2: string[]): $Object;
        getAttributes(arg0: string[]): $AttributeList;
        setAttribute(arg0: $Attribute): void;
        getAttribute(arg0: string): $Object;
        getMBeanInfo(): $MBeanInfo;
        setAttributes(arg0: $AttributeList): $AttributeList;
        get MBeanInfo(): $MBeanInfo;
    }
    export class $Attribute implements $Serializable {
        getName(): string;
        getValue(): $Object;
        constructor(arg0: string, arg1: $Object);
        get name(): string;
        get value(): $Object;
    }
    export class $MBeanAttributeInfo extends $MBeanFeatureInfo implements $Cloneable {
        clone(): $Object;
        getType(): string;
        isReadable(): boolean;
        isWritable(): boolean;
        isIs(): boolean;
        constructor(arg0: string, arg1: string, arg2: $Method, arg3: $Method);
        constructor(arg0: string, arg1: string, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $Descriptor);
        constructor(arg0: string, arg1: string, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean);
        get type(): string;
        get readable(): boolean;
        get writable(): boolean;
        get is(): boolean;
    }
    export class $MBeanParameterInfo extends $MBeanFeatureInfo implements $Cloneable {
        clone(): $Object;
        getType(): string;
        constructor(arg0: string, arg1: string, arg2: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: $Descriptor);
        get type(): string;
    }
    export class $MBeanOperationInfo extends $MBeanFeatureInfo implements $Cloneable {
        clone(): $Object;
        getReturnType(): string;
        getSignature(): $MBeanParameterInfo[];
        getImpact(): number;
        static ACTION_INFO: number;
        static ACTION: number;
        static UNKNOWN: number;
        static INFO: number;
        constructor(arg0: string, arg1: string, arg2: $MBeanParameterInfo[], arg3: string, arg4: number, arg5: $Descriptor);
        constructor(arg0: string, arg1: string, arg2: $MBeanParameterInfo[], arg3: string, arg4: number);
        constructor(arg0: string, arg1: $Method);
        get returnType(): string;
        get signature(): $MBeanParameterInfo[];
        get impact(): number;
    }
    export class $AttributeList extends $ArrayList<$Object> {
        add(arg0: number, arg1: $Attribute): void;
        add(arg0: $Attribute): void;
        addAll(arg0: number, arg1: $AttributeList): boolean;
        addAll(arg0: $AttributeList): boolean;
        set(arg0: number, arg1: $Attribute): void;
        asList(): $List<$Attribute>;
        reversed(): $SequencedCollection<$Object>;
        constructor(arg0: $List_<$Attribute>);
        constructor(arg0: $AttributeList);
        constructor(arg0: number);
        constructor();
    }
}
