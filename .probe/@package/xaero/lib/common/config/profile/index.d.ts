import { $Config } from "@package/xaero/lib/common/config";
import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $Consumer_ } from "@package/java/util/function";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator } from "@package/java/util";
export * as io from "@package/xaero/lib/common/config/profile/io";

declare module "@package/xaero/lib/common/config/profile" {
    export class $ConfigProfileManager implements $Iterable<$ConfigProfile> {
        remove(arg0: string): void;
        reset(): void;
        get(arg0: string): $ConfigProfile;
        add(arg0: $ConfigProfile): void;
        add(arg0: number, arg1: $ConfigProfile): void;
        iterator(): $Iterator<$ConfigProfile>;
        getIndex(arg0: string): number;
        getConfigType(): string;
        setChangeListener(arg0: $IConfigChangeListener): void;
        spliterator(): $Spliterator<$ConfigProfile>;
        forEach(arg0: $Consumer_<$ConfigProfile>): void;
        logger: $Logger;
        [Symbol.iterator](): Iterator<$ConfigProfile>
        get configType(): string;
        set changeListener(value: $IConfigChangeListener);
    }
    export class $IConfigProfileInfo {
    }
    export interface $IConfigProfileInfo {
        getName(): string;
        getId(): string;
        get name(): string;
        get id(): string;
    }
    export class $ConfigProfile extends $Config implements $IConfigProfileInfo {
        getName(): string;
        getId(): string;
        get name(): string;
        get id(): string;
    }
}
