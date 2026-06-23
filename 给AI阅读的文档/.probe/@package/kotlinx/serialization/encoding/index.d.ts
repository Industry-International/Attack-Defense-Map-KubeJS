import { $SerializersModule } from "@package/kotlinx/serialization/modules";
import { $SerializationStrategy, $DeserializationStrategy } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $Object } from "@package/java/lang";

declare module "@package/kotlinx/serialization/encoding" {
    export class $CompositeEncoder {
        static access$shouldEncodeElementDefault$jd(arg0: $CompositeEncoder, arg1: $SerialDescriptor, arg2: number): boolean;
    }
    export interface $CompositeEncoder {
        encodeIntElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeInlineElement(arg0: $SerialDescriptor, arg1: number): $Encoder;
        encodeNullableSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        encodeSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        encodeBooleanElement(arg0: $SerialDescriptor, arg1: number, arg2: boolean): void;
        encodeDoubleElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        endStructure(arg0: $SerialDescriptor): void;
        encodeCharElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeFloatElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeShortElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeStringElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        shouldEncodeElementDefault(arg0: $SerialDescriptor, arg1: number): boolean;
        encodeLongElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeByteElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        getSerializersModule(): $SerializersModule;
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
        encodeInt(arg0: number): void;
        encodeNullableSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        encodeByte(arg0: number): void;
        encodeString(arg0: string): void;
        beginCollection(arg0: $SerialDescriptor, arg1: number): $CompositeEncoder;
        encodeDouble(arg0: number): void;
        beginStructure(arg0: $SerialDescriptor): $CompositeEncoder;
        encodeFloat(arg0: number): void;
        encodeInline(arg0: $SerialDescriptor): $Encoder;
        encodeShort(arg0: number): void;
        encodeBoolean(arg0: boolean): void;
        getSerializersModule(): $SerializersModule;
        encodeLong(arg0: number): void;
        encodeSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        encodeNotNullMark(): void;
        encodeEnum(arg0: $SerialDescriptor, arg1: number): void;
        encodeNull(): void;
        get serializersModule(): $SerializersModule;
    }
    export class $Decoder {
        static access$decodeSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
        static access$decodeNullableSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
    }
    export interface $Decoder {
        decodeDouble(): number;
        decodeInt(): number;
        decodeSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        decodeString(): string;
        decodeByte(): number;
        decodeNullableSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        beginStructure(arg0: $SerialDescriptor): $CompositeDecoder;
        decodeFloat(): number;
        decodeInline(arg0: $SerialDescriptor): $Decoder;
        decodeShort(): number;
        decodeBoolean(): boolean;
        getSerializersModule(): $SerializersModule;
        decodeChar(): string;
        decodeLong(): number;
        decodeNotNullMark(): boolean;
        decodeNull(): void;
        decodeEnum(arg0: $SerialDescriptor): number;
        get serializersModule(): $SerializersModule;
    }
}
