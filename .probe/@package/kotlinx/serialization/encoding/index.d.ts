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
        shouldEncodeElementDefault(arg0: $SerialDescriptor, arg1: number): boolean;
        encodeStringElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeIntElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeLongElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeCharElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        endStructure(arg0: $SerialDescriptor): void;
        encodeFloatElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeShortElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeByteElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        getSerializersModule(): $SerializersModule;
        encodeDoubleElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeInlineElement(arg0: $SerialDescriptor, arg1: number): $Encoder;
        encodeSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        encodeBooleanElement(arg0: $SerialDescriptor, arg1: number, arg2: boolean): void;
        get serializersModule(): $SerializersModule;
    }
    export class $Encoder {
        static access$encodeNotNullMark$jd(arg0: $Encoder): void;
        static access$encodeNullableSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$beginCollection$jd(arg0: $Encoder, arg1: $SerialDescriptor, arg2: number): $CompositeEncoder;
        static access$encodeSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
    }
    export interface $Encoder {
        encodeInt(arg0: number): void;
        encodeChar(arg0: string): void;
        encodeNotNullMark(): void;
        encodeString(arg0: string): void;
        beginStructure(arg0: $SerialDescriptor): $CompositeEncoder;
        beginCollection(arg0: $SerialDescriptor, arg1: number): $CompositeEncoder;
        encodeDouble(arg0: number): void;
        encodeFloat(arg0: number): void;
        encodeInline(arg0: $SerialDescriptor): $Encoder;
        encodeShort(arg0: number): void;
        encodeBoolean(arg0: boolean): void;
        encodeSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        getSerializersModule(): $SerializersModule;
        encodeLong(arg0: number): void;
        encodeByte(arg0: number): void;
        encodeNullableSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        encodeEnum(arg0: $SerialDescriptor, arg1: number): void;
        encodeNull(): void;
        get serializersModule(): $SerializersModule;
    }
    export class $Decoder {
        static access$decodeNullableSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
        static access$decodeSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
    }
    export interface $Decoder {
        decodeInt(): number;
        decodeDouble(): number;
        decodeString(): string;
        beginStructure(arg0: $SerialDescriptor): $CompositeDecoder;
        decodeFloat(): number;
        decodeInline(arg0: $SerialDescriptor): $Decoder;
        decodeShort(): number;
        decodeBoolean(): boolean;
        getSerializersModule(): $SerializersModule;
        decodeSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        decodeChar(): string;
        decodeLong(): number;
        decodeByte(): number;
        decodeNull(): void;
        decodeEnum(arg0: $SerialDescriptor): number;
        decodeNotNullMark(): boolean;
        decodeNullableSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        get serializersModule(): $SerializersModule;
    }
}
