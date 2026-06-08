import { $TagType, $StreamTagVisitor$EntryResult, $StreamTagVisitor$ValueResult, $StreamTagVisitor, $Tag } from "@package/net/minecraft/nbt";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Map_, $Map } from "@package/java/util";

declare module "@package/net/minecraft/nbt/visitors" {
    export class $SkipFields extends $CollectToTag {
        constructor(...arg0: $FieldSelector_[]);
    }
    export class $CollectToTag implements $StreamTagVisitor {
        depth(): number;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: string): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visitEnd(): $StreamTagVisitor$ValueResult;
        getResult(): $Tag;
        visitEntry(arg0: $TagType<never>, arg1: string): $StreamTagVisitor$EntryResult;
        visitEntry(arg0: $TagType<never>): $StreamTagVisitor$EntryResult;
        visitList(arg0: $TagType<never>, arg1: number): $StreamTagVisitor$ValueResult;
        visitRootEntry(arg0: $TagType<never>): $StreamTagVisitor$ValueResult;
        visitContainerEnd(): $StreamTagVisitor$ValueResult;
        visitElement(arg0: $TagType<never>, arg1: number): $StreamTagVisitor$EntryResult;
        constructor();
        get result(): $Tag;
    }
    export class $SkipAll {
        static INSTANCE: $SkipAll;
    }
    export interface $SkipAll extends $StreamTagVisitor {
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: string): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visitEnd(): $StreamTagVisitor$ValueResult;
        visitEntry(arg0: $TagType<never>, arg1: string): $StreamTagVisitor$EntryResult;
        visitEntry(arg0: $TagType<never>): $StreamTagVisitor$EntryResult;
        visitList(arg0: $TagType<never>, arg1: number): $StreamTagVisitor$ValueResult;
        visitRootEntry(arg0: $TagType<never>): $StreamTagVisitor$ValueResult;
        visitContainerEnd(): $StreamTagVisitor$ValueResult;
        visitElement(arg0: $TagType<never>, arg1: number): $StreamTagVisitor$EntryResult;
    }
    export class $FieldTree extends $Record {
        depth(): number;
        addEntry(arg0: $FieldSelector_): void;
        isSelected(arg0: $TagType<never>, arg1: string): boolean;
        static createRoot(): $FieldTree;
        selectedFields(): $Map<string, $TagType<never>>;
        fieldsToRecurse(): $Map<string, $FieldTree>;
        constructor(arg0: number, arg1: $Map_<string, $TagType<never>>, arg2: $Map_<string, $FieldTree_>);
    }
    export class $CollectFields extends $CollectToTag {
        getMissingFieldCount(): number;
        constructor(...arg0: $FieldSelector_[]);
        get missingFieldCount(): number;
    }
    export class $FieldSelector extends $Record {
        name(): string;
        type(): $TagType<never>;
        path(): $List<string>;
        constructor(arg0: $List_<string>, arg1: $TagType<never>, arg2: string);
        constructor(arg0: string, arg1: string, arg2: $TagType<never>, arg3: string);
        constructor(arg0: string, arg1: $TagType<never>, arg2: string);
        constructor(arg0: $TagType<never>, arg1: string);
    }
}
