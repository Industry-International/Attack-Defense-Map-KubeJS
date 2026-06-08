import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $Decoder, $Encoder } from "@package/kotlinx/serialization/encoding";
export * as descriptors from "@package/kotlinx/serialization/descriptors";
export * as modules from "@package/kotlinx/serialization/modules";
export * as encoding from "@package/kotlinx/serialization/encoding";
export * as json from "@package/kotlinx/serialization/json";
export * as internal from "@package/kotlinx/serialization/internal";

declare module "@package/kotlinx/serialization" {
    export class $KSerializer<T> {
    }
    export interface $KSerializer<T> extends $SerializationStrategy<T>, $DeserializationStrategy<T> {
        getDescriptor(): $SerialDescriptor;
        get descriptor(): $SerialDescriptor;
    }
    export class $SerializationStrategy<T> {
    }
    export interface $SerializationStrategy<T> {
        getDescriptor(): $SerialDescriptor;
        serialize(arg0: $Encoder, arg1: T): void;
        get descriptor(): $SerialDescriptor;
    }
    export class $DeserializationStrategy<T> {
    }
    export interface $DeserializationStrategy<T> {
        getDescriptor(): $SerialDescriptor;
        deserialize(arg0: $Decoder): T;
        get descriptor(): $SerialDescriptor;
    }
}
