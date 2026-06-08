import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $TypeInfo_ } from "@package/dev/latvian/mods/rhino/type";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $Holder, $Holder$Reference, $Registry } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $Pattern } from "@package/java/util/regex";
import { $Object, $Record } from "@package/java/lang";

declare module "@package/dev/latvian/mods/kubejs/util/registrypredicate" {
    export class $RegistryRegExpPredicate<T> extends $Record implements $RegistryPredicate<T> {
        test(holder: $Holder_<T>): boolean;
        pattern(): $Pattern;
        getHolders(registry: $Registry<T>): $List<$Holder$Reference<T>>;
        getValues(registry: $Registry<T>): $List<T>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(pattern: $Pattern);
    }
    export class $RegistryTagIDPredicate<T> extends $Record implements $RegistryPredicate<T> {
        test(holder: $Holder_<T>): boolean;
        predicate(): $RegistryTagIDPredicate$TagKeyPredicate;
        getHolders(registry: $Registry<T>): $List<$Holder$Reference<T>>;
        getValues(registry: $Registry<T>): $List<T>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(tag: $ResourceLocation_);
        constructor(predicate: $RegistryTagIDPredicate$TagKeyPredicate_);
    }
    export class $RegistryPredicate<T> {
        static of(from: $Object, target: $TypeInfo_): $RegistryPredicate<never>;
    }
    export interface $RegistryPredicate<T> extends $Predicate<$Holder<T>> {
        getHolders(registry: $Registry<$Holder_<T>>): $List<$Holder$Reference<$Holder<T>>>;
        getValues(registry: $Registry<$Holder_<T>>): $List<$Holder<T>>;
    }
    /**
     * Values that may be interpreted as {@link $RegistryPredicate}.
     */
    export type $RegistryPredicate_<T> = (() => void);
    export class $RegistryTagIDPredicate$TagKeyPredicate extends $Record implements $Predicate<$TagKey<never>> {
        or(arg0: $Predicate_<$TagKey<never>>): $Predicate<$TagKey<never>>;
        negate(): $Predicate<$TagKey<never>>;
        and(arg0: $Predicate_<$TagKey<never>>): $Predicate<$TagKey<never>>;
    }
    export class $RegistryTagKeyPredicate<T> extends $Record implements $RegistryPredicate<T> {
        test(holder: $Holder_<T>): boolean;
        key(): $TagKey<T>;
        getHolders(registry: $Registry<T>): $List<$Holder$Reference<T>>;
        getValues(registry: $Registry<T>): $List<T>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(key: $TagKey_<T>);
    }
    export class $EntireRegistryPredicate extends $Record implements $RegistryPredicate<$Object> {
        test(holder: $Holder_<$Object>): boolean;
        match(): boolean;
        getHolders(registry: $Registry<$Object>): $List<$Holder$Reference<$Object>>;
        getValues(registry: $Registry<$Object>): $List<$Object>;
        or(arg0: $Predicate_<$Object>): $Predicate<$Object>;
        negate(): $Predicate<$Object>;
        and(arg0: $Predicate_<$Object>): $Predicate<$Object>;
        static TRUE: $EntireRegistryPredicate;
        static FALSE: $EntireRegistryPredicate;
        constructor(match: boolean);
    }
    export class $RegistryHolderPredicate<T> extends $Record implements $RegistryPredicate<T> {
        value(): $Holder<T>;
        test(holder: $Holder_<T>): boolean;
        getHolders(registry: $Registry<T>): $List<$Holder$Reference<T>>;
        getValues(registry: $Registry<T>): $List<T>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(value: $Holder_<T>);
    }
    export class $RegistryNamespacePredicate<T> extends $Record implements $RegistryPredicate<T> {
        test(holder: $Holder_<T>): boolean;
        namespace(): string;
        getHolders(registry: $Registry<T>): $List<$Holder$Reference<T>>;
        getValues(registry: $Registry<T>): $List<T>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(namespace: string);
    }
    export class $RegistryIDPredicate<T> extends $Record implements $RegistryPredicate<T> {
        test(holder: $Holder_<T>): boolean;
        id(): $ResourceLocation;
        getHolders(registry: $Registry<T>): $List<$Holder$Reference<T>>;
        getValues(registry: $Registry<T>): $List<T>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(id: $ResourceLocation_);
    }
}
