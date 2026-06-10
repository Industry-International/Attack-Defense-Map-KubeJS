import { $GlslVariableDeclarationNode, $GlslStructDeclarationNode, $GlslGetFieldNode, $GlslNewFieldNode, $GlslGetArrayNode, $GlslVariableNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $GlslPrimitiveConstructorNode, $GlslInvokeFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $GlslConstantNode } from "@package/io/github/ocelot/glslprocessor/api/node/constant";
import { $GlslJumpNode_, $GlslCaseLabelNode, $GlslSwitchNode, $GlslIfNode, $GlslForLoopNode, $GlslWhileLoopNode, $GlslReturnNode } from "@package/io/github/ocelot/glslprocessor/api/node/branch";
import { $GlslUnaryNode, $GlslAssignmentNode, $GlslPrecisionNode, $GlslCompareNode, $GlslBitwiseNode, $GlslConditionalNode, $GlslOperationNode } from "@package/io/github/ocelot/glslprocessor/api/node/expression";

declare module "@package/io/github/ocelot/glslprocessor/api/visitor" {
    export class $GlslNodeVisitor {
        visitOperation(arg0: $GlslOperationNode): void;
        visitUnary(arg0: $GlslUnaryNode): void;
        visitVariableDeclaration(arg0: $GlslVariableDeclarationNode): void;
        visitStructDeclaration(arg0: $GlslStructDeclarationNode): void;
        visitPrimitiveConstructor(arg0: $GlslPrimitiveConstructorNode): void;
        visitFunctionInvocation(arg0: $GlslInvokeFunctionNode): $GlslInvokeVisitor;
        visitConstant(arg0: $GlslConstantNode): void;
        visitJump(arg0: $GlslJumpNode_): void;
        visitIf(arg0: $GlslIfNode): $GlslIfVisitor;
        visitForLoopEnd(arg0: $GlslForLoopNode): void;
        visitWhileLoopEnd(arg0: $GlslWhileLoopNode): void;
        visitReturn(arg0: $GlslReturnNode): void;
        visitSwitch(arg0: $GlslSwitchNode): $GlslSwitchVisitor;
        visitBitwise(arg0: $GlslBitwiseNode): $GlslBitwiseVisitor;
        visitAssign(arg0: $GlslAssignmentNode): void;
        visitCompare(arg0: $GlslCompareNode): void;
        visitWhileLoop(arg0: $GlslWhileLoopNode): $GlslNodeVisitor;
        visitCondition(arg0: $GlslConditionalNode): void;
        visitForLoop(arg0: $GlslForLoopNode): $GlslNodeVisitor;
        visitVariable(arg0: $GlslVariableNode): void;
        visitPrecision(arg0: $GlslPrecisionNode): void;
        visitGetField(arg0: $GlslGetFieldNode): void;
        visitGetArray(arg0: $GlslGetArrayNode): void;
        visitNewField(arg0: $GlslNewFieldNode): void;
        constructor();
        constructor(arg0: $GlslNodeVisitor);
    }
    export class $GlslSwitchVisitor {
        visitLabel(arg0: $GlslCaseLabelNode): $GlslNodeVisitor;
        visitSwitchEnd(arg0: $GlslSwitchNode): void;
        constructor();
        constructor(arg0: $GlslSwitchVisitor);
    }
    export class $GlslBitwiseVisitor {
        visitBitwiseExpressionEnd(arg0: $GlslBitwiseNode): void;
        visitNode(arg0: number): $GlslNodeVisitor;
        constructor();
        constructor(arg0: $GlslBitwiseVisitor);
    }
    export class $GlslInvokeVisitor {
        visitParameter(arg0: number): $GlslNodeVisitor;
        visitHeader(): void;
        visitInvokeEnd(arg0: $GlslInvokeFunctionNode): void;
        constructor();
        constructor(arg0: $GlslInvokeVisitor);
    }
    export class $GlslIfVisitor {
        visitIf(): $GlslNodeVisitor;
        visitElse(): $GlslNodeVisitor;
        visitIfEnd(arg0: $GlslIfNode): void;
        constructor();
        constructor(arg0: $GlslIfVisitor);
    }
}
