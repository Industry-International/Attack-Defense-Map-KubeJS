import { $Stream } from "@package/java/util/stream";
import { $GlslTypeQualifier$Precision, $GlslTypeSpecifier, $GlslSpecifiedType, $GlslTypeQualifier$Precision_, $GlslTypeSpecifier_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Enum } from "@package/java/lang";
import { $List, $Collection_ } from "@package/java/util";
import { $GlslNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/expression" {
    export class $GlslUnaryNode$Operand extends $Enum<$GlslUnaryNode$Operand> {
        static values(): $GlslUnaryNode$Operand[];
        static valueOf(arg0: string): $GlslUnaryNode$Operand;
        getDelimiter(): string;
        static POST_INCREMENT: $GlslUnaryNode$Operand;
        static POST_DECREMENT: $GlslUnaryNode$Operand;
        static BANG: $GlslUnaryNode$Operand;
        static TILDE: $GlslUnaryNode$Operand;
        static PRE_DECREMENT: $GlslUnaryNode$Operand;
        static DASH: $GlslUnaryNode$Operand;
        static PRE_INCREMENT: $GlslUnaryNode$Operand;
        static PLUS: $GlslUnaryNode$Operand;
        get delimiter(): string;
    }
    /**
     * Values that may be interpreted as {@link $GlslUnaryNode$Operand}.
     */
    export type $GlslUnaryNode$Operand_ = "pre_increment" | "pre_decrement" | "post_increment" | "post_decrement" | "plus" | "dash" | "bang" | "tilde";
    export class $GlslBitwiseNode$Operand extends $Enum<$GlslBitwiseNode$Operand> {
        static values(): $GlslBitwiseNode$Operand[];
        static valueOf(arg0: string): $GlslBitwiseNode$Operand;
        getNodeType(): $GlslNodeType;
        getDelimiter(): string;
        static BITWISE_INCLUSIVE_OR: $GlslBitwiseNode$Operand;
        static LOGICAL_AND: $GlslBitwiseNode$Operand;
        static BITWISE_EXCLUSIVE_OR: $GlslBitwiseNode$Operand;
        static BITWISE_AND: $GlslBitwiseNode$Operand;
        static LOGICAL_EXCLUSIVE_OR: $GlslBitwiseNode$Operand;
        static LOGICAL_OR: $GlslBitwiseNode$Operand;
        get nodeType(): $GlslNodeType;
        get delimiter(): string;
    }
    /**
     * Values that may be interpreted as {@link $GlslBitwiseNode$Operand}.
     */
    export type $GlslBitwiseNode$Operand_ = "bitwise_and" | "bitwise_inclusive_or" | "bitwise_exclusive_or" | "logical_and" | "logical_or" | "logical_exclusive_or";
    export class $GlslCompareNode$Operand extends $Enum<$GlslCompareNode$Operand> {
        static values(): $GlslCompareNode$Operand[];
        static valueOf(arg0: string): $GlslCompareNode$Operand;
        getDelimiter(): string;
        static EQUAL: $GlslCompareNode$Operand;
        static GEQUAL: $GlslCompareNode$Operand;
        static NOT_EQUAL: $GlslCompareNode$Operand;
        static GREATER: $GlslCompareNode$Operand;
        static LESS: $GlslCompareNode$Operand;
        static LEQUAL: $GlslCompareNode$Operand;
        get delimiter(): string;
    }
    /**
     * Values that may be interpreted as {@link $GlslCompareNode$Operand}.
     */
    export type $GlslCompareNode$Operand_ = "equal" | "not_equal" | "less" | "greater" | "lequal" | "gequal";
    export class $GlslPrecisionNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getPrecision(): $GlslTypeQualifier$Precision;
        setPrecision(arg0: $GlslTypeQualifier$Precision_): $GlslPrecisionNode;
        getTypeSpecifier(): $GlslTypeSpecifier;
        setTypeSpecifier(arg0: $GlslTypeSpecifier_): $GlslPrecisionNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        constructor(arg0: $GlslTypeQualifier$Precision_, arg1: $GlslTypeSpecifier_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslOperationNode$Operand extends $Enum<$GlslOperationNode$Operand> {
        static values(): $GlslOperationNode$Operand[];
        static valueOf(arg0: string): $GlslOperationNode$Operand;
        getDelimiter(): string;
        static ADD: $GlslOperationNode$Operand;
        static RIGHT_SHIFT: $GlslOperationNode$Operand;
        static LEFT_SHIFT: $GlslOperationNode$Operand;
        static MODULO: $GlslOperationNode$Operand;
        static MULTIPLY: $GlslOperationNode$Operand;
        static SUBTRACT: $GlslOperationNode$Operand;
        static DIVIDE: $GlslOperationNode$Operand;
        get delimiter(): string;
    }
    /**
     * Values that may be interpreted as {@link $GlslOperationNode$Operand}.
     */
    export type $GlslOperationNode$Operand_ = "left_shift" | "right_shift" | "add" | "subtract" | "multiply" | "divide" | "modulo";
    export class $GlslOperationNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        getFirst(): $GlslNode;
        visit(arg0: $GlslNodeVisitor): void;
        getSecond(): $GlslNode;
        getNodeType(): $GlslNodeType;
        getOperand(): $GlslOperationNode$Operand;
        setSecond(arg0: $GlslNode): $GlslOperationNode;
        setFirst(arg0: $GlslNode): $GlslOperationNode;
        setOperand(arg0: $GlslOperationNode$Operand_): $GlslOperationNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        constructor(arg0: $GlslNode, arg1: $GlslNode, arg2: $GlslOperationNode$Operand_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslAssignmentNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getFirst(): $GlslNode;
        visit(arg0: $GlslNodeVisitor): void;
        getSecond(): $GlslNode;
        getNodeType(): $GlslNodeType;
        getOperand(): $GlslAssignmentNode$Operand;
        setSecond(arg0: $GlslNode): $GlslAssignmentNode;
        setFirst(arg0: $GlslNode): $GlslAssignmentNode;
        setOperand(arg0: $GlslAssignmentNode$Operand_): $GlslAssignmentNode;
        toList(): $List<$GlslNode>;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        constructor(arg0: $GlslNode, arg1: $GlslNode, arg2: $GlslAssignmentNode$Operand_);
        get type(): $GlslSpecifiedType;
        get nodeType(): $GlslNodeType;
    }
    export class $GlslCompareNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        getFirst(): $GlslNode;
        visit(arg0: $GlslNodeVisitor): void;
        getSecond(): $GlslNode;
        getNodeType(): $GlslNodeType;
        getOperand(): $GlslCompareNode$Operand;
        setSecond(arg0: $GlslNode): $GlslCompareNode;
        setFirst(arg0: $GlslNode): $GlslCompareNode;
        setOperand(arg0: $GlslCompareNode$Operand_): $GlslCompareNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        constructor(arg0: $GlslNode, arg1: $GlslNode, arg2: $GlslCompareNode$Operand_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslConditionalNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        getFirst(): $GlslNode;
        visit(arg0: $GlslNodeVisitor): void;
        getSecond(): $GlslNode;
        getNodeType(): $GlslNodeType;
        setSecond(arg0: $GlslNode): $GlslConditionalNode;
        setFirst(arg0: $GlslNode): $GlslConditionalNode;
        getCondition(): $GlslNode;
        setCondition(arg0: $GlslNode): $GlslConditionalNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        constructor(arg0: $GlslNode, arg1: $GlslNode, arg2: $GlslNode);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslBitwiseNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        static logicalAnd(arg0: $Collection_<$GlslNode>): $GlslBitwiseNode;
        static logicalOr(arg0: $Collection_<$GlslNode>): $GlslBitwiseNode;
        static logicalXor(arg0: $Collection_<$GlslNode>): $GlslBitwiseNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getExpressions(): $List<$GlslNode>;
        getOperand(): $GlslBitwiseNode$Operand;
        setOperand(arg0: $GlslBitwiseNode$Operand_): $GlslBitwiseNode;
        static bitOr(arg0: $Collection_<$GlslNode>): $GlslBitwiseNode;
        static bitXor(arg0: $Collection_<$GlslNode>): $GlslBitwiseNode;
        static bitAnd(arg0: $Collection_<$GlslNode>): $GlslBitwiseNode;
        setExpressions(...arg0: $GlslNode[]): $GlslBitwiseNode;
        setExpressions(arg0: $Collection_<$GlslNode>): $GlslBitwiseNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        constructor(arg0: $Collection_<$GlslNode>, arg1: $GlslBitwiseNode$Operand_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslAssignmentNode$Operand extends $Enum<$GlslAssignmentNode$Operand> {
        static values(): $GlslAssignmentNode$Operand[];
        static valueOf(arg0: string): $GlslAssignmentNode$Operand;
        getDelimiter(): string;
        static DIV_ASSIGN: $GlslAssignmentNode$Operand;
        static RIGHT_ASSIGN: $GlslAssignmentNode$Operand;
        static XOR_ASSIGN: $GlslAssignmentNode$Operand;
        static MOD_ASSIGN: $GlslAssignmentNode$Operand;
        static AND_ASSIGN: $GlslAssignmentNode$Operand;
        static EQUAL: $GlslAssignmentNode$Operand;
        static MUL_ASSIGN: $GlslAssignmentNode$Operand;
        static SUB_ASSIGN: $GlslAssignmentNode$Operand;
        static OR_ASSIGN: $GlslAssignmentNode$Operand;
        static LEFT_ASSIGN: $GlslAssignmentNode$Operand;
        static ADD_ASSIGN: $GlslAssignmentNode$Operand;
        get delimiter(): string;
    }
    /**
     * Values that may be interpreted as {@link $GlslAssignmentNode$Operand}.
     */
    export type $GlslAssignmentNode$Operand_ = "equal" | "mul_assign" | "div_assign" | "mod_assign" | "add_assign" | "sub_assign" | "left_assign" | "right_assign" | "and_assign" | "xor_assign" | "or_assign";
    export class $GlslUnaryNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        getType(): $GlslSpecifiedType;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getOperand(): $GlslUnaryNode$Operand;
        getExpression(): $GlslNode;
        setExpression(arg0: $GlslNode): $GlslUnaryNode;
        setOperand(arg0: $GlslUnaryNode$Operand_): $GlslUnaryNode;
        toList(): $List<$GlslNode>;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        constructor(arg0: $GlslNode, arg1: $GlslUnaryNode$Operand_);
        get type(): $GlslSpecifiedType;
        get nodeType(): $GlslNodeType;
    }
}
