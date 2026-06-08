import { $SerializersModule } from "@package/kotlinx/serialization/modules";
import { $SerializationStrategy, $DeserializationStrategy } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $Object } from "@package/java/lang";

declare module "@package/kotlinx/serialization/encoding" {
    export class $CompositeEncoder {
        static access$shouldEncodeElementDefault$jd(arg0: $CompositeEncoder, arg1: $SerialDescriptor, arg2: number): boolean;
    }
    export interface $CompositeEncoder {
        encodeDoubleElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        getSerializersModule(): $SerializersModule;
        encodeShortElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeByteElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeCharElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        endStructure(arg0: $SerialDescriptor): void;
        encodeLongElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeFloatElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeIntElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeNullableSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        shouldEncodeElementDefault(arg0: $SerialDescriptor, arg1: number): boolean;
        encodeStringElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeBooleanElement(arg0: $SerialDescriptor, arg1: number, arg2: boolean): void;
        encodeInlineElement(arg0: $SerialDescriptor, arg1: number): $Encoder;
        get serializersModule(): $SerializersModule;
    }
    export class $Encoder {
        static access$encodeNullableSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$encodeNotNullMark$jd(arg0: $Encoder): void;
        static access$encodeSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$beginCollection$jd(arg0: $Encoder, arg1: $SerialDescriptor, arg2: number): $CompositeEncoder;
    }
    export interface $Encoder {
        encodeChar(arg0: string): void;
        encodeByte(arg0: number): void;
        encodeNull(): void;
        encodeString(arg0: string): void;
        getSerializersModule(): $SerializersModule;
        encodeShort(arg0: number): void;
        encodeBoolean(arg0: boolean): void;
        encodeLong(arg0: number): void;
        beginCollection(arg0: $SerialDescriptor, arg1: number): $CompositeEncoder;
        encodeFloat(arg0: number): void;
        encodeDouble(arg0: number): void;
        beginStructure(arg0: $SerialDescriptor): $CompositeEncoder;
        encodeInline(arg0: $SerialDescriptor): $Encoder;
        encodeInt(arg0: number): void;
        encodeSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        encodeEnum(arg0: $SerialDescriptor, arg1: number): void;
        encodeNotNullMark(): void;
        encodeNullableSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        get serializersModule(): $SerializersModule;
    }
    export class $Decoder {
        static access$decodeNullableSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
        static access$decodeSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
    }
    export interface $Decoder {
        decodeDouble(): number;
        decodeNull(): void;
        decodeEnum(arg0: $SerialDescriptor): number;
        decodeByte(): number;
        getSerializersModule(): $SerializersModule;
        decodeSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        decodeShort(): number;
        decodeBoolean(): boolean;
        decodeString(): string;
        decodeChar(): string;
        decodeLong(): number;
        decodeFloat(): number;
        beginStructure(arg0: $SerialDescriptor): $CompositeDecoder;
        decodeInline(arg0: $SerialDescriptor): $Decoder;
        decodeInt(): number;
        decodeNotNullMark(): boolean;
        decodeNullableSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        get serializersModule(): $SerializersModule;
    }
}
