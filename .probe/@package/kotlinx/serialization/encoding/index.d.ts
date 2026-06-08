import { $SerializersModule } from "@package/kotlinx/serialization/modules";
import { $SerializationStrategy, $DeserializationStrategy } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $Object } from "@package/java/lang";

declare module "@package/kotlinx/serialization/encoding" {
    export class $CompositeEncoder {
        static access$shouldEncodeElementDefault$jd(arg0: $CompositeEncoder, arg1: $SerialDescriptor, arg2: number): boolean;
    }
    export interface $CompositeEncoder {
        encodeNullableSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        getSerializersModule(): $SerializersModule;
        encodeIntElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeFloatElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeInlineElement(arg0: $SerialDescriptor, arg1: number): $Encoder;
        shouldEncodeElementDefault(arg0: $SerialDescriptor, arg1: number): boolean;
        encodeStringElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeDoubleElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeByteElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeShortElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        encodeBooleanElement(arg0: $SerialDescriptor, arg1: number, arg2: boolean): void;
        encodeLongElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        endStructure(arg0: $SerialDescriptor): void;
        encodeCharElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        get serializersModule(): $SerializersModule;
    }
    export class $Encoder {
        static access$encodeNullableSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$encodeSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$encodeNotNullMark$jd(arg0: $Encoder): void;
        static access$beginCollection$jd(arg0: $Encoder, arg1: $SerialDescriptor, arg2: number): $CompositeEncoder;
    }
    export interface $Encoder {
        encodeChar(arg0: string): void;
        getSerializersModule(): $SerializersModule;
        encodeSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        encodeString(arg0: string): void;
        encodeDouble(arg0: number): void;
        encodeFloat(arg0: number): void;
        encodeByte(arg0: number): void;
        encodeInline(arg0: $SerialDescriptor): $Encoder;
        encodeLong(arg0: number): void;
        encodeInt(arg0: number): void;
        encodeBoolean(arg0: boolean): void;
        encodeShort(arg0: number): void;
        beginStructure(arg0: $SerialDescriptor): $CompositeEncoder;
        beginCollection(arg0: $SerialDescriptor, arg1: number): $CompositeEncoder;
        encodeNullableSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        encodeEnum(arg0: $SerialDescriptor, arg1: number): void;
        encodeNull(): void;
        encodeNotNullMark(): void;
        get serializersModule(): $SerializersModule;
    }
    export class $Decoder {
        static access$decodeNullableSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
        static access$decodeSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
    }
    export interface $Decoder {
        decodeDouble(): number;
        decodeChar(): string;
        getSerializersModule(): $SerializersModule;
        decodeString(): string;
        decodeFloat(): number;
        decodeSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        decodeByte(): number;
        decodeInline(arg0: $SerialDescriptor): $Decoder;
        decodeLong(): number;
        decodeInt(): number;
        decodeBoolean(): boolean;
        decodeShort(): number;
        decodeNullableSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        beginStructure(arg0: $SerialDescriptor): $CompositeDecoder;
        decodeNull(): void;
        decodeEnum(arg0: $SerialDescriptor): number;
        decodeNotNullMark(): boolean;
        get serializersModule(): $SerializersModule;
    }
}
