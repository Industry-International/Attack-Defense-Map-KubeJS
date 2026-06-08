import { $Supplier_ } from "@package/java/util/function";
import { $TypeWrapperFactory } from "@package/dev/latvian/mods/rhino/util/wrap";
import { $Type, $TypeVariable } from "@package/java/lang/reflect";
import { $Record, $StringBuilder, $Object, $Class } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $Collection_, $List_ } from "@package/java/util";

declare module "@package/dev/latvian/mods/rhino/type" {
    export class $JSFixedArrayTypeInfo extends $Record implements $TypeInfo {
        append(arg0: $TypeStringContext, arg1: $StringBuilder): void;
        types(): $List<$JSOptionalParam>;
        collectContainedComponentClasses(arg0: $Collection_<$Class<never>>): void;
        asClass(): $Class<never>;
        signature(): string;
        isPrimitive(): boolean;
        newArray(arg0: number): $Object;
        componentType(): $TypeInfo;
        enumConstants(): $List<$Object>;
        param(arg0: number): $TypeInfo;
        isVoid(): boolean;
        is(arg0: $TypeInfo_): boolean;
        or(arg0: $TypeInfo_): $TypeInfo;
        isCharacter(): boolean;
        isFloat(): boolean;
        asArray(): $TypeInfo;
        getContainedComponentClasses(): $Set<$Class<never>>;
        recordComponents(): $Map<string, $RecordTypeInfo$Component>;
        isLong(): boolean;
        isBoolean(): boolean;
        isShort(): boolean;
        shouldConvert(): boolean;
        consolidate(arg0: $Map_<$VariableTypeInfo, $TypeInfo_>): $TypeInfo;
        createDefaultValue(): $Object;
        isInt(): boolean;
        isDouble(): boolean;
        isByte(): boolean;
        isFunctionalInterface(): boolean;
        withParams(...arg0: $TypeInfo_[]): $TypeInfo;
        constructor(types: $List_<$JSOptionalParam_>);
        get primitive(): boolean;
        get void(): boolean;
        get character(): boolean;
        get float(): boolean;
        get containedComponentClasses(): $Set<$Class<never>>;
        get long(): boolean;
        get boolean(): boolean;
        get short(): boolean;
        get int(): boolean;
        get double(): boolean;
        get byte(): boolean;
        get functionalInterface(): boolean;
    }
    export class $RecordTypeInfo extends $ClassTypeInfo implements $TypeWrapperFactory<$Object> {
        wrap(arg1: $Object, arg2: $TypeInfo_): $Object;
        getData(): $RecordTypeInfo$Data;
        createInstance(arg1: $Map_<never, never>): $Object;
        createInstance(...arg1: $Object[]): $Object;
        getObjectTypeInfo(): $JSObjectTypeInfo;
        getArrayTypeInfo(): $JSFixedArrayTypeInfo;
        createCombinedType(...arg0: $TypeInfo_[]): $TypeInfo;
        static setGlobalDefaultValue<T>(arg0: $Class<T>, arg1: T): void;
        get data(): $RecordTypeInfo$Data;
        get objectTypeInfo(): $JSObjectTypeInfo;
        get arrayTypeInfo(): $JSFixedArrayTypeInfo;
    }
    export class $EnumTypeInfo extends $ClassTypeInfo implements $TypeWrapperFactory<$Object> {
        static getName(arg0: $Object): string;
        wrap(arg1: $Object, arg2: $TypeInfo_): $Object;
    }
    export class $JSObjectTypeInfo extends $Record implements $TypeInfo {
        append(arg0: $TypeStringContext, arg1: $StringBuilder): void;
        static of(...arg0: $JSOptionalParam_[]): $JSObjectTypeInfo;
        static of(arg0: $JSOptionalParam_, arg1: $JSOptionalParam_): $JSObjectTypeInfo;
        static of(arg0: $JSOptionalParam_): $JSObjectTypeInfo;
        fields(): $List<$JSOptionalParam>;
        collectContainedComponentClasses(arg0: $Collection_<$Class<never>>): void;
        asClass(): $Class<never>;
        signature(): string;
        isPrimitive(): boolean;
        newArray(arg0: number): $Object;
        componentType(): $TypeInfo;
        enumConstants(): $List<$Object>;
        param(arg0: number): $TypeInfo;
        isVoid(): boolean;
        is(arg0: $TypeInfo_): boolean;
        or(arg0: $TypeInfo_): $TypeInfo;
        isCharacter(): boolean;
        isFloat(): boolean;
        asArray(): $TypeInfo;
        getContainedComponentClasses(): $Set<$Class<never>>;
        recordComponents(): $Map<string, $RecordTypeInfo$Component>;
        isLong(): boolean;
        isBoolean(): boolean;
        isShort(): boolean;
        shouldConvert(): boolean;
        consolidate(arg0: $Map_<$VariableTypeInfo, $TypeInfo_>): $TypeInfo;
        createDefaultValue(): $Object;
        isInt(): boolean;
        isDouble(): boolean;
        isByte(): boolean;
        isFunctionalInterface(): boolean;
        withParams(...arg0: $TypeInfo_[]): $TypeInfo;
        constructor(fields: $List_<$JSOptionalParam_>);
        get primitive(): boolean;
        get void(): boolean;
        get character(): boolean;
        get float(): boolean;
        get containedComponentClasses(): $Set<$Class<never>>;
        get long(): boolean;
        get boolean(): boolean;
        get short(): boolean;
        get int(): boolean;
        get double(): boolean;
        get byte(): boolean;
        get functionalInterface(): boolean;
    }
    export class $JSOptionalParam extends $Record {
        name(): string;
        type(): $TypeInfo;
        append(arg0: $TypeStringContext, arg1: $StringBuilder): void;
        optional(): boolean;
        constructor(arg0: string, arg1: $TypeInfo_);
        constructor(name: string, type: $TypeInfo_, optional: boolean);
    }
    export class $TypeStringContext {
        static DEFAULT: $TypeStringContext;
    }
    export interface $TypeStringContext {
        toString(arg0: $TypeInfo_): string;
        append(arg0: $StringBuilder, arg1: $TypeInfo_): void;
        appendSpace(arg0: $StringBuilder): void;
        appendClassName(arg0: $StringBuilder, arg1: $ClassTypeInfo): void;
    }
    export class $RecordTypeInfo$Component extends $Record {
        index(): number;
        name(): string;
        type(): $TypeInfo;
        constructor(index: number, name: string, type: $TypeInfo_);
    }
    export class $VariableTypeInfo extends $TypeInfoBase {
        getName(): string;
        getBounds(): $TypeInfo[];
        getMainBound(): $TypeInfo;
        get name(): string;
        get bounds(): $TypeInfo[];
        get mainBound(): $TypeInfo;
    }
    export class $TypeInfo {
        static of(arg0: $Type): $TypeInfo;
        static of(arg0: $TypeVariable<never>): $VariableTypeInfo;
        static of(arg0: $Class<never>): $TypeInfo;
        static safeOfArray(arg0: $Supplier_<$Type[]>): $TypeInfo[];
        static ofArray(arg0: $Type[]): $TypeInfo[];
        static safeOf(arg0: $Supplier_<$Type>): $TypeInfo;
        static PRIMITIVE_INT_ARRAY: $TypeInfo;
        static PRIMITIVE_VOID: $TypeInfo;
        static PRIMITIVE_DOUBLE_ARRAY: $TypeInfo;
        static FLOAT: $TypeInfo;
        static PRIMITIVE_BYTE: $TypeInfo;
        static PRIMITIVE_LONG_ARRAY: $TypeInfo;
        static PRIMITIVE_FLOAT_ARRAY: $TypeInfo;
        static RAW_ENUM_SET: $TypeInfo;
        static EMPTY_ARRAY: $TypeInfo[];
        static PRIMITIVE_BOOLEAN_ARRAY: $TypeInfo;
        static PRIMITIVE_BYTE_ARRAY: $TypeInfo;
        static RUNNABLE: $TypeInfo;
        static CLASS: $TypeInfo;
        static PRIMITIVE_FLOAT: $TypeInfo;
        static CONTEXT: $TypeInfo;
        static INT: $TypeInfo;
        static BYTE: $TypeInfo;
        static PRIMITIVE_BOOLEAN: $TypeInfo;
        static PRIMITIVE_DOUBLE: $TypeInfo;
        static PRIMITIVE_SHORT: $TypeInfo;
        static CHARACTER: $TypeInfo;
        static DOUBLE: $TypeInfo;
        static NONE: $TypeInfo;
        static RAW_LIST: $TypeInfo;
        static LONG: $TypeInfo;
        static NUMBER: $TypeInfo;
        static SCRIPTABLE: $TypeInfo;
        static PRIMITIVE_CHARACTER_ARRAY: $TypeInfo;
        static RAW_MAP: $TypeInfo;
        static RAW_FUNCTION: $TypeInfo;
        static RAW_PREDICATE: $TypeInfo;
        static RAW_SET: $TypeInfo;
        static OBJECT: $TypeInfo;
        static RAW_CONSUMER: $TypeInfo;
        static BOOLEAN: $TypeInfo;
        static SHORT: $TypeInfo;
        static STRING_ARRAY: $TypeInfo;
        static DATE: $TypeInfo;
        static PRIMITIVE_CHARACTER: $TypeInfo;
        static RAW_OPTIONAL: $TypeInfo;
        static RAW_SUPPLIER: $TypeInfo;
        static PRIMITIVE_SHORT_ARRAY: $TypeInfo;
        static STRING: $TypeInfo;
        static PRIMITIVE_INT: $TypeInfo;
        static OBJECT_ARRAY: $TypeInfo;
        static VOID: $TypeInfo;
        static PRIMITIVE_LONG: $TypeInfo;
    }
    export interface $TypeInfo {
        signature(): string;
        append(arg0: $TypeStringContext, arg1: $StringBuilder): void;
        isPrimitive(): boolean;
        newArray(arg0: number): $Object;
        componentType(): $TypeInfo;
        enumConstants(): $List<$Object>;
        param(arg0: number): $TypeInfo;
        isVoid(): boolean;
        is(arg0: $TypeInfo_): boolean;
        or(arg0: $TypeInfo_): $TypeInfo;
        isCharacter(): boolean;
        isFloat(): boolean;
        asArray(): $TypeInfo;
        collectContainedComponentClasses(arg0: $Collection_<$Class<never>>): void;
        getContainedComponentClasses(): $Set<$Class<never>>;
        recordComponents(): $Map<string, $RecordTypeInfo$Component>;
        isLong(): boolean;
        isBoolean(): boolean;
        isShort(): boolean;
        shouldConvert(): boolean;
        consolidate(arg0: $Map_<$VariableTypeInfo, $TypeInfo_>): $TypeInfo;
        createDefaultValue(): $Object;
        isInt(): boolean;
        isDouble(): boolean;
        asClass(): $Class<never>;
        isByte(): boolean;
        isFunctionalInterface(): boolean;
        withParams(...arg0: $TypeInfo_[]): $TypeInfo;
        get primitive(): boolean;
        get void(): boolean;
        get character(): boolean;
        get float(): boolean;
        get containedComponentClasses(): $Set<$Class<never>>;
        get long(): boolean;
        get boolean(): boolean;
        get short(): boolean;
        get int(): boolean;
        get double(): boolean;
        get byte(): boolean;
        get functionalInterface(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TypeInfo}.
     */
    export type $TypeInfo_ = (() => $Class<never>);
    export class $ClassTypeInfo extends $TypeInfoBase {
    }
    export class $TypeInfoBase implements $TypeInfo {
        newArray(arg0: number): $Object;
        asArray(): $TypeInfo;
        signature(): string;
        append(arg0: $TypeStringContext, arg1: $StringBuilder): void;
        isPrimitive(): boolean;
        componentType(): $TypeInfo;
        enumConstants(): $List<$Object>;
        param(arg0: number): $TypeInfo;
        isVoid(): boolean;
        is(arg0: $TypeInfo_): boolean;
        or(arg0: $TypeInfo_): $TypeInfo;
        isCharacter(): boolean;
        isFloat(): boolean;
        collectContainedComponentClasses(arg0: $Collection_<$Class<never>>): void;
        getContainedComponentClasses(): $Set<$Class<never>>;
        recordComponents(): $Map<string, $RecordTypeInfo$Component>;
        isLong(): boolean;
        isBoolean(): boolean;
        isShort(): boolean;
        shouldConvert(): boolean;
        consolidate(arg0: $Map_<$VariableTypeInfo, $TypeInfo_>): $TypeInfo;
        createDefaultValue(): $Object;
        isInt(): boolean;
        isDouble(): boolean;
        isByte(): boolean;
        isFunctionalInterface(): boolean;
        withParams(...arg0: $TypeInfo_[]): $TypeInfo;
        constructor();
        get primitive(): boolean;
        get void(): boolean;
        get character(): boolean;
        get float(): boolean;
        get containedComponentClasses(): $Set<$Class<never>>;
        get long(): boolean;
        get boolean(): boolean;
        get short(): boolean;
        get int(): boolean;
        get double(): boolean;
        get byte(): boolean;
        get functionalInterface(): boolean;
    }
    export class $RecordTypeInfo$Data extends $Record {
        componentMap(): $Map<string, $RecordTypeInfo$Component>;
        components(): $RecordTypeInfo$Component[];
        defaultArguments(): $Object[];
        constructor(components: $RecordTypeInfo$Component_[], componentMap: $Map_<string, $RecordTypeInfo$Component_>, defaultArguments: $Object[]);
    }
}
