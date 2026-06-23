import { $Stream } from "@package/java/util/stream";
import { $GlslFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $GlslTypeQualifier, $GlslSpecifiedType, $GlslStructSpecifier, $GlslType_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/variable" {
    export class $GlslGetArrayNode implements $GlslNode {
        getNodeType(): $GlslNodeType;
        stream(): $Stream<$GlslNode>;
        getIndex(): $GlslNode;
        visit(arg0: $GlslNodeVisitor): void;
        setIndex(arg0: $GlslNode): $GlslGetArrayNode;
        getExpression(): $GlslNode;
        setExpression(arg0: $GlslNode): $GlslGetArrayNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslNode, arg1: $GlslNode);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslVariableNode implements $GlslNode {
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslVariableNode;
        visit(arg0: $GlslNodeVisitor): void;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        getBody(): $GlslNodeList;
        constructor(arg0: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslStructDeclarationNode implements $GlslRootNode {
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslStructDeclarationNode;
        visit(arg0: $GlslNodeVisitor): void;
        getSpecifiedType(): $GlslSpecifiedType;
        setSpecifiedType(arg0: $GlslSpecifiedType): $GlslStructDeclarationNode;
        getStructSpecifier(): $GlslStructSpecifier;
        isStruct(): boolean;
        isField(): boolean;
        isFunction(): boolean;
        isDeclaration(): boolean;
        asField(): $GlslNewFieldNode;
        asFunction(): $GlslFunctionNode;
        asStruct(): $GlslStructDeclarationNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslSpecifiedType);
        get nodeType(): $GlslNodeType;
        get structSpecifier(): $GlslStructSpecifier;
        get struct(): boolean;
        get field(): boolean;
        get function(): boolean;
        get declaration(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslGetFieldNode implements $GlslNode {
        getNodeType(): $GlslNodeType;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getExpression(): $GlslNode;
        setExpression(arg0: $GlslNode): $GlslGetFieldNode;
        setFieldSelection(arg0: string): $GlslGetFieldNode;
        getFieldSelection(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslNode, arg1: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslNewFieldNode implements $GlslRootNode {
        setType(arg0: $GlslType_): $GlslNewFieldNode;
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        getType(): $GlslSpecifiedType;
        visit(arg0: $GlslNodeVisitor): void;
        setInitializer(arg0: $GlslNode): $GlslNewFieldNode;
        getInitializer(): $GlslNode;
        isStruct(): boolean;
        isField(): boolean;
        isFunction(): boolean;
        isDeclaration(): boolean;
        asField(): $GlslNewFieldNode;
        asFunction(): $GlslFunctionNode;
        asStruct(): $GlslStructDeclarationNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        toList(): $List<$GlslNode>;
        toSourceString(): string;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        getBody(): $GlslNodeList;
        setName(arg0: string): $GlslRootNode;
        constructor(arg0: $GlslType_, arg1: string, arg2: $GlslNode);
        get nodeType(): $GlslNodeType;
        get struct(): boolean;
        get field(): boolean;
        get function(): boolean;
        get declaration(): boolean;
    }
    export class $GlslVariableDeclarationNode implements $GlslRootNode {
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslRootNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNames(): $List<string>;
        getTypeQualifiers(): $List<$GlslTypeQualifier>;
        isStruct(): boolean;
        isField(): boolean;
        isFunction(): boolean;
        isDeclaration(): boolean;
        asField(): $GlslNewFieldNode;
        asFunction(): $GlslFunctionNode;
        asStruct(): $GlslStructDeclarationNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        getBody(): $GlslNodeList;
        constructor(arg0: $Collection_<$GlslTypeQualifier>, arg1: $Collection_<string>);
        get nodeType(): $GlslNodeType;
        get names(): $List<string>;
        get typeQualifiers(): $List<$GlslTypeQualifier>;
        get struct(): boolean;
        get field(): boolean;
        get function(): boolean;
        get declaration(): boolean;
        get type(): $GlslSpecifiedType;
    }
}
