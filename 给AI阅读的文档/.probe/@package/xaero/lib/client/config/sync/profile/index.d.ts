import { $Consumer_ } from "@package/java/util/function";
import { $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator } from "@package/java/util";
import { $IConfigProfileInfo } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/client/config/sync/profile" {
    export class $SyncedConfigProfileInfoManager implements $Iterable<$IConfigProfileInfo> {
        remove(arg0: string): void;
        reset(): void;
        get(arg0: string): $SyncedConfigProfileInfo;
        add(arg0: string, arg1: string): void;
        iterator(): $Iterator<$IConfigProfileInfo>;
        setDefaultEnforcedProfileId(arg0: string): void;
        getDefaultEnforcedProfileId(): string;
        spliterator(): $Spliterator<$IConfigProfileInfo>;
        forEach(arg0: $Consumer_<$IConfigProfileInfo>): void;
        [Symbol.iterator](): Iterator<$IConfigProfileInfo>
    }
}
