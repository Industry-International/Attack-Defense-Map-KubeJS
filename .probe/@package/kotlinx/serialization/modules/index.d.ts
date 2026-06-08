import { $Function1_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer, $SerializationStrategy, $DeserializationStrategy } from "@package/kotlinx/serialization";
import { $List_, $List } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $KClass } from "@package/kotlin/reflect";

declare module "@package/kotlinx/serialization/modules" {
    export class $SerializersModule {
        static getHasInterfaceContextualSerializers$kotlinx_serialization_core$annotations(): void;
        getHasInterfaceContextualSerializers$kotlinx_serialization_core(): boolean;
        getPolymorphic<T>(arg0: $KClass<T>, arg1: string): $DeserializationStrategy<T>;
        getPolymorphic<T>(arg0: $KClass<T>, arg1: T): $SerializationStrategy<T>;
        getContextual<T>(arg0: $KClass<T>, arg1: $List_<$KSerializer<never>>): $KSerializer<T>;
        getContextual(arg0: $KClass<any>): $KSerializer<any>;
        static getContextual$default(arg0: $SerializersModule, arg1: $KClass<any>, arg2: $List_<any>, arg3: number, arg4: $Object): $KSerializer<any>;
        dumpTo(arg0: $SerializersModuleCollector): void;
        constructor(arg0: $DefaultConstructorMarker);
        static get hasInterfaceContextualSerializers$kotlinx_serialization_core$annotations(): void;
        get hasInterfaceContextualSerializers$kotlinx_serialization_core(): boolean;
    }
    export class $SerializersModuleCollector {
        static access$polymorphicDefault$jd(arg0: $SerializersModuleCollector, arg1: $KClass<any>, arg2: $Function1_<any, any>): void;
        static access$contextual$jd(arg0: $SerializersModuleCollector, arg1: $KClass<any>, arg2: $KSerializer<any>): void;
    }
    export interface $SerializersModuleCollector {
        contextual<T>(arg0: $KClass<T>, arg1: $KSerializer<T>): void;
        contextual<T>(arg0: $KClass<T>, arg1: $Function1_<$List<$KSerializer<never>>, $KSerializer<never>>): void;
        polymorphic<Base, Sub extends Base>(arg0: $KClass<Base>, arg1: $KClass<Sub>, arg2: $KSerializer<Sub>): void;
        polymorphicDefault<Base>(arg0: $KClass<Base>, arg1: $Function1_<string, $DeserializationStrategy<Base>>): void;
        polymorphicDefaultDeserializer<Base>(arg0: $KClass<Base>, arg1: $Function1_<string, $DeserializationStrategy<Base>>): void;
        polymorphicDefaultSerializer<Base>(arg0: $KClass<Base>, arg1: $Function1_<Base, $SerializationStrategy<Base>>): void;
    }
}
