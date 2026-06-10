import { $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/common/config/profile/io" {
    export class $ConfigProfileManagerIO {
        load(): void;
        "delete"(arg0: $ConfigProfile): void;
        "delete"(arg0: $ConfigProfile, arg1: number): void;
        save(arg0: $ConfigProfile): void;
        saveAll(): void;
    }
}
