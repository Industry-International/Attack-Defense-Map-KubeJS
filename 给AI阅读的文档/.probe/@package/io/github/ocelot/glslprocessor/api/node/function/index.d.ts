import { $GlslNewFieldNode, $GlslVariableDeclarationNode, $GlslStructDeclarationNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType, $GlslParameterDeclaration, $GlslFunctionHeader, $GlslTypeSpecifier, $GlslTypeSpecifier_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/function" {
    export class $GlslFunctionNode implements $GlslRootNode {
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        getReturnType(): $GlslSpecifiedType;
        setName(arg0: string): $GlslFunctionNode;
        getParameters(): $List<$GlslParameterDeclaration>;
        visit(arg0: $GlslNodeVisitor): void;
        getHeader(): $GlslFunctionHeader;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        setHeader(arg0: $GlslFunctionHeader): void;
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
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslFunctionHeader, arg1: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get returnType(): $GlslSpecifiedType;
        get parameters(): $List<$GlslParameterDeclaration>;
        get struct(): boolean;
        get field(): boolean;
        get function(): boolean;
        get declaration(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslInvokeFunctionNode implements $GlslNode {
        getNodeType(): $GlslNodeType;
        stream(): $Stream<$GlslNode>;
        getParameters(): $List<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getHeader(): $GlslNode;
        setHeader(arg0: $GlslNode): void;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get parameters(): $List<$GlslNode>;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslPrimitiveConstructorNode implements $GlslNode {
        getNodeType(): $GlslNodeType;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getPrimitiveType(): $GlslTypeSpecifier;
        setPrimitiveType(arg0: $GlslTypeSpecifier_): void;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslTypeSpecifier_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
}
