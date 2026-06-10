import { $Config } from "@package/xaero/lib/common/config";

declare module "@package/xaero/lib/common/config/single/io" {
    export class $SingleConfigManagerIO<C extends $Config> {
        load(): void;
        save(): void;
    }
}
