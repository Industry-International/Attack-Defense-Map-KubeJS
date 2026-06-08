import { $Function_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractIterator } from "@package/com/google/common/collect";
import { $Comparator, $List_, $Iterator, $List } from "@package/java/util";

declare module "@package/net/minecraft/client/searchtree" {
    export class $SuffixArray<T> {
        add(arg0: T, arg1: string): void;
        search(arg0: string): $List<T>;
        generate(): void;
        list: $List<T>;
        constructor();
    }
    export class $ResourceLocationSearchTree<T> {
        static empty<T>(): $ResourceLocationSearchTree<T>;
        static create<T>(arg0: $List_<T>, arg1: $Function_<T, $Stream<$ResourceLocation>>): $ResourceLocationSearchTree<T>;
    }
    export interface $ResourceLocationSearchTree<T> {
        searchNamespace(arg0: string): $List<T>;
        searchPath(arg0: string): $List<T>;
    }
    export class $IdSearchTree<T> implements $SearchTree<T> {
        search(arg0: string): $List<T>;
        searchPlainText(arg0: string): $List<T>;
        searchResourceLocation(arg0: string, arg1: string): $List<T>;
        resourceLocationSearchTree: $ResourceLocationSearchTree<T>;
        additionOrder: $Comparator<T>;
        constructor(arg0: $Function_<T, $Stream<$ResourceLocation>>, arg1: $List_<T>);
    }
    export class $FullTextSearchTree<T> extends $IdSearchTree<T> {
        resourceLocationSearchTree: $ResourceLocationSearchTree<T>;
        additionOrder: $Comparator<T>;
        constructor(arg0: $Function_<T, $Stream<string>>, arg1: $Function_<T, $Stream<$ResourceLocation>>, arg2: $List_<T>);
    }
    export class $MergingUniqueIterator<T> extends $AbstractIterator<T> {
        computeNext(): T;
        constructor(arg0: $Iterator<T>, arg1: $Iterator<T>, arg2: $Comparator<T>);
    }
    export class $IntersectionIterator<T> extends $AbstractIterator<T> {
        computeNext(): T;
        constructor(arg0: $Iterator<T>, arg1: $Iterator<T>, arg2: $Comparator<T>);
    }
    export class $SearchTree<T> {
        static empty<T>(): $SearchTree<T>;
        static plainText<T>(arg0: $List_<T>, arg1: $Function_<T, $Stream<string>>): $SearchTree<T>;
    }
    export interface $SearchTree<T> {
        search(arg0: string): $List<T>;
    }
    /**
     * Values that may be interpreted as {@link $SearchTree}.
     */
    export type $SearchTree_<T> = ((arg0: string) => $List_<T>);
}
