import { $DataInput, $DataOutput } from "@package/java/io";
import { $Consumer_ } from "@package/java/util/function";
import { $Object, $Iterable, $Cloneable } from "@package/java/lang";
import { $Spliterator, $Iterator, $LinkedHashMap, $Map_, $Map$Entry, $Collection, $Set } from "@package/java/util";

declare module "@package/com/github/steveice10/opennbt/tag/builtin" {
    export class $CompoundTag extends $Tag implements $Iterable<$Map$Entry<string, $Tag>> {
        remove<T extends $Tag>(arg0: string): T;
        size(): number;
        get<T extends $Tag>(arg0: string): T;
        put<T extends $Tag>(arg0: string, arg1: T): T;
        values(): $Collection<$Tag>;
        clear(): void;
        isEmpty(): boolean;
        iterator(): $Iterator<$Map$Entry<string, $Tag>>;
        contains(arg0: string): boolean;
        entrySet(): $Set<$Map$Entry<string, $Tag>>;
        keySet(): $Set<string>;
        setValue(arg0: $Map_<string, $Tag>): void;
        setValue(arg0: $LinkedHashMap<string, $Tag>): void;
        spliterator(): $Spliterator<$Map$Entry<string, $Tag>>;
        forEach(arg0: $Consumer_<$Map$Entry<string, $Tag>>): void;
        static ID: number;
        constructor(arg0: $LinkedHashMap<string, $Tag>);
        constructor(arg0: $Map_<string, $Tag>);
        constructor();
        [Symbol.iterator](): Iterator<$Map$Entry<string, $Tag>>
        get empty(): boolean;
    }
    export class $Tag implements $Cloneable {
        clone(): $Object;
        getValue(): $Object;
        write(arg0: $DataOutput): void;
        read(arg0: $DataInput): void;
        getTagId(): number;
        constructor();
        get value(): $Object;
        get tagId(): number;
    }
}
