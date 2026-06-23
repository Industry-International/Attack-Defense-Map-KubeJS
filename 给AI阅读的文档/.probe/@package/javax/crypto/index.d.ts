import { $Destroyable } from "@package/javax/security/auth";
import { $AlgorithmParameterSpec } from "@package/java/security/spec";
import { $Certificate } from "@package/java/security/cert";
import { $SecureRandom, $AlgorithmParameters, $Provider, $Key } from "@package/java/security";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/javax/crypto" {
    export class $SecretKey {
        /**
         * @deprecated
         */
        static serialVersionUID: number;
    }
    export interface $SecretKey extends $Key, $Destroyable {
    }
    export class $Cipher {
        getBlockSize(): number;
        static getMaxAllowedKeyLength(arg0: string): number;
        update(arg0: number[], arg1: number, arg2: number): number[];
        update(arg0: $ByteBuffer, arg1: $ByteBuffer): number;
        update(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
        update(arg0: number[]): number[];
        update(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;
        wrap(arg0: $Key): number[];
        static getInstance(arg0: string): $Cipher;
        static getInstance(arg0: string, arg1: string): $Cipher;
        static getInstance(arg0: string, arg1: $Provider): $Cipher;
        init(arg0: number, arg1: $Key, arg2: $AlgorithmParameters): void;
        init(arg0: number, arg1: $Key, arg2: $AlgorithmParameterSpec): void;
        init(arg0: number, arg1: $Key, arg2: $SecureRandom): void;
        init(arg0: number, arg1: $Key): void;
        init(arg0: number, arg1: $Key, arg2: $AlgorithmParameterSpec, arg3: $SecureRandom): void;
        init(arg0: number, arg1: $Certificate, arg2: $SecureRandom): void;
        init(arg0: number, arg1: $Certificate): void;
        init(arg0: number, arg1: $Key, arg2: $AlgorithmParameters, arg3: $SecureRandom): void;
        getParameters(): $AlgorithmParameters;
        unwrap(arg0: number[], arg1: string, arg2: number): $Key;
        getProvider(): $Provider;
        getAlgorithm(): string;
        getExemptionMechanism(): $ExemptionMechanism;
        updateAAD(arg0: $ByteBuffer): void;
        updateAAD(arg0: number[]): void;
        updateAAD(arg0: number[], arg1: number, arg2: number): void;
        getOutputSize(arg0: number): number;
        getIV(): number[];
        doFinal(arg0: number[]): number[];
        doFinal(arg0: number[], arg1: number): number;
        doFinal(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;
        doFinal(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
        doFinal(arg0: number[], arg1: number, arg2: number): number[];
        doFinal(arg0: $ByteBuffer, arg1: $ByteBuffer): number;
        doFinal(): number[];
        static getMaxAllowedParameterSpec(arg0: string): $AlgorithmParameterSpec;
        static WRAP_MODE: number;
        static UNWRAP_MODE: number;
        static ENCRYPT_MODE: number;
        static PUBLIC_KEY: number;
        static PRIVATE_KEY: number;
        static SECRET_KEY: number;
        static DECRYPT_MODE: number;
        get blockSize(): number;
        get parameters(): $AlgorithmParameters;
        get provider(): $Provider;
        get algorithm(): string;
        get exemptionMechanism(): $ExemptionMechanism;
        get IV(): number[];
    }
    export class $ExemptionMechanism {
        getName(): string;
        static getInstance(arg0: string, arg1: string): $ExemptionMechanism;
        static getInstance(arg0: string, arg1: $Provider): $ExemptionMechanism;
        static getInstance(arg0: string): $ExemptionMechanism;
        init(arg0: $Key, arg1: $AlgorithmParameterSpec): void;
        init(arg0: $Key): void;
        init(arg0: $Key, arg1: $AlgorithmParameters): void;
        getProvider(): $Provider;
        genExemptionBlob(arg0: number[]): number;
        genExemptionBlob(): number[];
        genExemptionBlob(arg0: number[], arg1: number): number;
        isCryptoAllowed(arg0: $Key): boolean;
        getOutputSize(arg0: number): number;
        get name(): string;
        get provider(): $Provider;
    }
}
