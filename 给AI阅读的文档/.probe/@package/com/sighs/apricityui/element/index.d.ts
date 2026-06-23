import { $CopyOnWriteArrayList } from "@package/java/util/concurrent";
import { $Set, $UUID, $HashMap } from "@package/java/util";
import { $Style, $Document, $Element, $Event } from "@package/com/sighs/apricityui/init";

declare module "@package/com/sighs/apricityui/element" {
    export class $Div extends $Element {
        document: $Document;
        scrollHeight: number;
        classNames: $Set<string>;
        isActive: boolean;
        uuid: $UUID;
        isLoaded: boolean;
        parentElement: $Element;
        children: $CopyOnWriteArrayList<$Element>;
        targetScrollLeft: number;
        targetScrollTop: number;
        id: string;
        scrollLeft: number;
        EventListener: $CopyOnWriteArrayList<$Event>;
        value: string;
        scrollWidth: number;
        cssCache: $HashMap<string, string>;
        innerText: string;
        isHover: boolean;
        isVisible: boolean;
        tagName: string;
        scrollTop: number;
        static TAG_NAME: string;
        depth: number;
        isPointerEnabled: boolean;
        isFocus: boolean;
        style: $Style;
        constructor(arg0: $Document);
    }
    export class $Body extends $Div {
        document: $Document;
        scrollHeight: number;
        classNames: $Set<string>;
        isActive: boolean;
        uuid: $UUID;
        isLoaded: boolean;
        parentElement: $Element;
        children: $CopyOnWriteArrayList<$Element>;
        targetScrollLeft: number;
        targetScrollTop: number;
        id: string;
        scrollLeft: number;
        EventListener: $CopyOnWriteArrayList<$Event>;
        value: string;
        scrollWidth: number;
        cssCache: $HashMap<string, string>;
        innerText: string;
        isHover: boolean;
        isVisible: boolean;
        tagName: string;
        scrollTop: number;
        static TAG_NAME: string;
        depth: number;
        isPointerEnabled: boolean;
        isFocus: boolean;
        style: $Style;
        constructor(arg0: $Document);
    }
}
