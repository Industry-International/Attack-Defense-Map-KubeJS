import { $File_, $File } from "@package/java/io";
import { $Predicate_, $Consumer_ } from "@package/java/util/function";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Runnable_, $Runnable } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Tuple } from "@package/net/minecraft/util";

declare module "@package/com/lowdragmc/lowdraglib2/gui/util" {
    export class $FileNode implements $ITreeNode<$File, void> {
        getContent(): void;
        isLeaf(): boolean;
        getChildren(): $List<$FileNode>;
        getDimension(): number;
        setValid(arg0: $Predicate_<$FileNode>): $FileNode;
        flatten(): $List<$ITreeNode<$File, void>>;
        getChild(arg0: $File_): $ITreeNode<$File, void>;
        isBranch(): boolean;
        getSiblingIndex(): number;
        getKey(): $File;
        getParent(): $ITreeNode<$File, void>;
        parent: $FileNode;
        dimension: number;
        key: $File;
        constructor(arg0: $File_);
        get content(): void;
        get leaf(): boolean;
        get children(): $List<$FileNode>;
        set valid(value: $Predicate_<$FileNode>);
        get branch(): boolean;
        get siblingIndex(): number;
    }
    export class $TreeNode<T, K> implements $ITreeNode<T, K> {
        getKey(): T;
        getContent(): K;
        getChildren(): $List<$TreeNode<T, K>>;
        getDimension(): number;
        removeChild(arg0: $TreeNode<T, K>): void;
        removeChild(arg0: T): void;
        createChild(arg0: T): $TreeNode<T, K>;
        addContent(arg0: T, arg1: K): void;
        getOrCreateChild(arg0: T): $TreeNode<T, K>;
        setValid(arg0: $Predicate_<$TreeNode<T, K>>): $TreeNode<T, K>;
        flatten(): $List<$ITreeNode<T, K>>;
        isLeaf(): boolean;
        getChild(arg0: T): $ITreeNode<T, K>;
        isBranch(): boolean;
        getSiblingIndex(): number;
        getParent(): $ITreeNode<T, K>;
        parent: $TreeNode<T, K>;
        dimension: number;
        constructor(arg0: T);
        constructor(arg0: $TreeNode<T, K>, arg1: number, arg2: T);
        get key(): T;
        get content(): K;
        get children(): $List<$TreeNode<T, K>>;
        set valid(value: $Predicate_<$TreeNode<T, K>>);
        get leaf(): boolean;
        get branch(): boolean;
        get siblingIndex(): number;
    }
    export class $TreeBuilder<K, V> {
        remove(arg0: K): $TreeBuilder<K, V>;
        isEmpty(): boolean;
        static start<K, V>(arg0: K): $TreeBuilder<K, V>;
        peek(): $ITreeNode<K, V>;
        build(): $TreeNode<K, V>;
        content(arg0: V): $TreeBuilder<K, V>;
        branch(arg0: K, arg1: $Consumer_<$TreeBuilder<K, V>>): $TreeBuilder<K, V>;
        endBranch(): $TreeBuilder<K, V>;
        diveBranch(arg0: $List_<K>, arg1: $Consumer_<$TreeBuilder<K, V>>): $TreeBuilder<K, V>;
        leaf(arg0: K, arg1: V): $TreeBuilder<K, V>;
        startBranch(arg0: K): $TreeBuilder<K, V>;
        constructor(arg0: K);
        get empty(): boolean;
    }
    export class $TreeBuilder$Menu extends $TreeBuilder<$Tuple<$IGuiTexture, $Component>, $Runnable> {
        static getName(arg0: $Tuple<$IGuiTexture_, $Component_>): $Component;
        remove(arg0: string): $TreeBuilder$Menu;
        remove(arg0: $Component_): $TreeBuilder$Menu;
        static start(): $TreeBuilder$Menu;
        static handle(arg0: $ITreeNode<$Tuple<$IGuiTexture_, $Component_>, $Runnable_>): void;
        branch(arg0: $IGuiTexture_, arg1: string, arg2: $Consumer_<$TreeBuilder$Menu>): $TreeBuilder$Menu;
        branch(arg0: $Component_, arg1: $Consumer_<$TreeBuilder$Menu>): $TreeBuilder$Menu;
        branch(arg0: string, arg1: $Consumer_<$TreeBuilder$Menu>): $TreeBuilder$Menu;
        branch(arg0: $IGuiTexture_, arg1: $Component_, arg2: $Consumer_<$TreeBuilder$Menu>): $TreeBuilder$Menu;
        static uiProvider(arg0: $Tuple<$IGuiTexture_, $Component_>): $UIElement;
        static getIcon(arg0: $Tuple<$IGuiTexture_, $Component_>): $IGuiTexture;
        leaf(arg0: string, arg1: $Runnable_): $TreeBuilder$Menu;
        leaf(arg0: $Component_, arg1: $Runnable_): $TreeBuilder$Menu;
        leaf(arg0: $IGuiTexture_, arg1: string, arg2: $Runnable_): $TreeBuilder$Menu;
        leaf(arg0: $IGuiTexture_, arg1: $Component_, arg2: $Runnable_): $TreeBuilder$Menu;
        static hoverTextureProvider(arg0: $ITreeNode<$Tuple<$IGuiTexture_, $Component_>, $Runnable_>): $IGuiTexture;
        crossLine(): $TreeBuilder$Menu;
        static isCrossLine(arg0: $Tuple<$IGuiTexture_, $Component_>): boolean;
        static CROSS_LINE: $Tuple<$IGuiTexture, $Component>;
    }
    export class $ITickable {
    }
    export interface $ITickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $ITickable}.
     */
    export type $ITickable_ = (() => void);
    export class $ITreeNode<KEY, CONTENT> {
    }
    export interface $ITreeNode<KEY, CONTENT> {
        getKey(): KEY;
        getParent(): $ITreeNode<KEY, CONTENT>;
        getContent(): CONTENT;
        flatten(): $List<$ITreeNode<KEY, CONTENT>>;
        isLeaf(): boolean;
        getChild(arg0: KEY): $ITreeNode<KEY, CONTENT>;
        getChildren(): $List<$ITreeNode<KEY, CONTENT>>;
        getDimension(): number;
        isBranch(): boolean;
        getSiblingIndex(): number;
        get key(): KEY;
        get parent(): $ITreeNode<KEY, CONTENT>;
        get content(): CONTENT;
        get leaf(): boolean;
        get children(): $List<$ITreeNode<KEY, CONTENT>>;
        get dimension(): number;
        get branch(): boolean;
        get siblingIndex(): number;
    }
}
