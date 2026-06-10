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
        encodeByteElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeIntElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeLongElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeCharElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        endStructure(arg0: $SerialDescriptor): void;
        encodeShortElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeFloatElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeBooleanElement(arg0: $SerialDescriptor, arg1: number, arg2: boolean): void;
        encodeDoubleElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        getSerializersModule(): $SerializersModule;
        encodeInlineElement(arg0: $SerialDescriptor, arg1: number): $Encoder;
        encodeStringElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        shouldEncodeElementDefault(arg0: $SerialDescriptor, arg1: number): boolean;
        encodeSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        get serializersModule(): $SerializersModule;
    }
    export class $Encoder {
        static access$beginCollection$jd(arg0: $Encoder, arg1: $SerialDescriptor, arg2: number): $CompositeEncoder;
        static access$encodeNullableSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$encodeNotNullMark$jd(arg0: $Encoder): void;
        static access$encodeSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
    }
    export interface $Encoder {
        encodeByte(arg0: number): void;
        encodeBoolean(arg0: boolean): void;
        encodeChar(arg0: string): void;
        encodeLong(arg0: number): void;
        encodeString(arg0: string): void;
        beginCollection(arg0: $SerialDescriptor, arg1: number): $CompositeEncoder;
        beginStructure(arg0: $SerialDescriptor): $CompositeEncoder;
        encodeShort(arg0: number): void;
        encodeDouble(arg0: number): void;
        encodeFloat(arg0: number): void;
        encodeInline(arg0: $SerialDescriptor): $Encoder;
        getSerializersModule(): $SerializersModule;
        encodeSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        encodeInt(arg0: number): void;
        encodeEnum(arg0: $SerialDescriptor, arg1: number): void;
        encodeNull(): void;
        encodeNotNullMark(): void;
        encodeNullableSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        get serializersModule(): $SerializersModule;
    }
    export class $Decoder {
        static access$decodeSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
        static access$decodeNullableSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
    }
    export interface $Decoder {
        decodeChar(): string;
        decodeByte(): number;
        decodeString(): string;
        decodeBoolean(): boolean;
        decodeDouble(): number;
        decodeNullableSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        decodeLong(): number;
        beginStructure(arg0: $SerialDescriptor): $CompositeDecoder;
        decodeShort(): number;
        decodeFloat(): number;
        decodeInline(arg0: $SerialDescriptor): $Decoder;
        getSerializersModule(): $SerializersModule;
        decodeSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        decodeInt(): number;
        decodeNotNullMark(): boolean;
        decodeEnum(arg0: $SerialDescriptor): number;
        decodeNull(): void;
        get serializersModule(): $SerializersModule;
    }
}
