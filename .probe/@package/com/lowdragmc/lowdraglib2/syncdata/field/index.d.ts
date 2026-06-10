import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $Field, $Method, $Type } from "@package/java/lang/reflect";
import { $Object, $Class } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/field" {
    export class $ManagedKey {
        getName(): string;
        getFieldAccessor(): $IAccessor<never>;
        isLazy(): boolean;
        isDestSync(): boolean;
        createRef(arg0: $Object): $IRef<never>;
        isPersist(): boolean;
        getContentType(): $Type;
        getRawField(): $Field;
        isDrop(): boolean;
        isReadOnlyManaged(): boolean;
        getPersistentKey(): string;
        getDeserializeMethod(): $Method;
        setRedOnlyManaged(arg0: $Method, arg1: $Method, arg2: $Method): void;
        setPersistentKey(arg0: string): void;
        getClazzType(): $Class<never>;
        static getClazzType(arg0: $Type): $Class<never>;
        getSerializeMethod(): $Method;
        getOnDirtyMethod(): $Method;
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $Type, arg6: $Field);
        get name(): string;
        get fieldAccessor(): $IAccessor<never>;
        get lazy(): boolean;
        get destSync(): boolean;
        get persist(): boolean;
        get contentType(): $Type;
        get rawField(): $Field;
        get drop(): boolean;
        get readOnlyManaged(): boolean;
        get deserializeMethod(): $Method;
        get serializeMethod(): $Method;
        get onDirtyMethod(): $Method;
    }
}
