import { $Record } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/mojang/authlib/yggdrasil/response" {
    export class $KeyPairResponse extends $Record {
        expiresAt(): string;
        keyPair(): $KeyPairResponse$KeyPair;
        refreshedAfter(): string;
        publicKeySignature(): $ByteBuffer;
        constructor(keyPair: $KeyPairResponse$KeyPair_, publicKeySignature: $ByteBuffer, expiresAt: string, refreshedAfter: string);
    }
    export class $KeyPairResponse$KeyPair extends $Record {
        privateKey(): string;
        publicKey(): string;
        constructor(privateKey: string, publicKey: string);
    }
}
