import { $Tag } from "@package/net/minecraft/nbt";
import { $ConfigValueSyncCodec } from "@package/xaero/lib/common/config/option/value/sync/serialization";
import { $ConfigValueIOCodec } from "@package/xaero/lib/common/config/option/value/io/serialization";

declare module "@package/xaero/lib/common/config/option/value/type" {
    export class $ConfigValueType<T> {
        getIoCodec(): $ConfigValueIOCodec<T>;
        getSyncCodec(): $ConfigValueSyncCodec<T, $Tag>;
        get ioCodec(): $ConfigValueIOCodec<T>;
        get syncCodec(): $ConfigValueSyncCodec<T, $Tag>;
    }
}
