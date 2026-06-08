import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ExcludeListMode } from "@package/xaero/hud/category/rule";
import { $ListFactory, $MapFactory } from "@package/xaero/common/misc";
import { $Iterator, $Map$Entry } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/xaero/hud/category/serialization/data" {
    export class $ObjectCategoryDataSerializer<D extends $ObjectCategoryData<D>, S> {
        deserialize(arg0: S): D;
        serialize(arg0: D): S;
    }
    export class $ObjectCategoryDataNbtSerializer<D extends $ObjectCategoryData<D>, DB extends $ObjectCategoryData$Builder<D, DB>> extends $ObjectCategoryDataSerializer<D, $CompoundTag> {
        deserialize(arg0: $CompoundTag_): D;
        serialize(arg0: D): $CompoundTag;
    }
    export class $FilterObjectCategoryData<D extends $FilterObjectCategoryData<D>> extends $ObjectCategoryData<D> {
        getHardInclude(): string;
        getExcludeMode(): $ExcludeListMode;
        getIncludeListInSuperCategory(): boolean;
        getIncludeListIterator(): $Iterator<string>;
        getExcludeListIterator(): $Iterator<string>;
        get hardInclude(): string;
        get excludeMode(): $ExcludeListMode;
        get includeListInSuperCategory(): boolean;
        get includeListIterator(): $Iterator<string>;
        get excludeListIterator(): $Iterator<string>;
    }
    export class $FilterObjectCategoryData$Builder<D extends $FilterObjectCategoryData<D>, B extends $FilterObjectCategoryData$Builder<D, B>> extends $ObjectCategoryData$Builder<D, B> {
        build(): D;
        setHardInclude(arg0: string): void;
        setExcludeMode(arg0: $ExcludeListMode): void;
        addToIncludeList(arg0: string): B;
        addToExcludeList(arg0: string): B;
        setIncludeListInSuperCategory(arg0: boolean): B;
        constructor(arg0: $ListFactory, arg1: $MapFactory);
        set hardInclude(value: string);
        set excludeMode(value: $ExcludeListMode);
        set includeListInSuperCategory(value: boolean);
    }
    export class $ObjectCategoryData<D extends $ObjectCategoryData<D>> {
        getName(): string;
        getProtection(): boolean;
        getSettingOverrideIterator(): $Iterator<$Map$Entry<string, $Object>>;
        getSubCategoryIterator(): $Iterator<D>;
        get name(): string;
        get protection(): boolean;
        get settingOverrideIterator(): $Iterator<$Map$Entry<string, $Object>>;
        get subCategoryIterator(): $Iterator<D>;
    }
    export class $ObjectCategoryDataGsonSerializer<D extends $ObjectCategoryData<D>> extends $ObjectCategoryDataSerializer<D, string> {
        deserialize(arg0: string): D;
        serialize(arg0: D): string;
    }
}
