import { $GlslVariableDeclarationNode, $GlslStructDeclarationNode, $GlslGetFieldNode, $GlslNewFieldNode, $GlslGetArrayNode, $GlslVariableNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $GlslPrimitiveConstructorNode, $GlslInvokeFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $GlslConstantNode } from "@package/io/github/ocelot/glslprocessor/api/node/constant";
import { $GlslJumpNode_, $GlslCaseLabelNode, $GlslSwitchNode, $GlslIfNode, $GlslForLoopNode, $GlslWhileLoopNode, $GlslReturnNode } from "@package/io/github/ocelot/glslprocessor/api/node/branch";
import { $GlslUnaryNode, $GlslAssignmentNode, $GlslPrecisionNode, $GlslCompareNode, $GlslBitwiseNode, $GlslConditionalNode, $GlslOperationNode } from "@package/io/github/ocelot/glslprocessor/api/node/expression";

declare module "@package/io/github/ocelot/glslprocessor/api/visitor" {
    export class $GlslNodeVisitor {
        visitOperation(arg0: $GlslOperationNode): void;
        visitPrimitiveConstructor(arg0: $GlslPrimitiveConstructorNode): void;
        visitStructDeclaration(arg0: $GlslStructDeclarationNode): void;
        visitFunctionInvocation(arg0: $GlslInvokeFunctionNode): $GlslInvokeVisitor;
        visitVariableDeclaration(arg0: $GlslVariableDeclarationNode): void;
        visitConstant(arg0: $GlslConstantNode): void;
        visitIf(arg0: $GlslIfNode): $GlslIfVisitor;
        visitUnary(arg0: $GlslUnaryNode): void;
        visitJump(arg0: $GlslJumpNode_): void;
        visitNewField(arg0: $GlslNewFieldNode): void;
        visitWhileLoop(arg0: $GlslWhileLoopNode): $GlslNodeVisitor;
        visitPrecision(arg0: $GlslPrecisionNode): void;
        visitReturn(arg0: $GlslReturnNode): void;
        visitCompare(arg0: $GlslCompareNode): void;
        visitForLoopEnd(arg0: $GlslForLoopNode): void;
        visitAssign(arg0: $GlslAssignmentNode): void;
        visitWhileLoopEnd(arg0: $GlslWhileLoopNode): void;
        visitBitwise(arg0: $GlslBitwiseNode): $GlslBitwiseVisitor;
        visitCondition(arg0: $GlslConditionalNode): void;
        visitGetField(arg0: $GlslGetFieldNode): void;
        visitSwitch(arg0: $GlslSwitchNode): $GlslSwitchVisitor;
        visitGetArray(arg0: $GlslGetArrayNode): void;
        visitVariable(arg0: $GlslVariableNode): void;
        visitForLoop(arg0: $GlslForLoopNode): $GlslNodeVisitor;
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
        visitNode(arg0: number): $GlslNodeVisitor;
        visitBitwiseExpressionEnd(arg0: $GlslBitwiseNode): void;
        constructor();
        constructor(arg0: $GlslBitwiseVisitor);
    }
    export class $GlslInvokeVisitor {
        visitParameter(arg0: number): $GlslNodeVisitor;
        visitInvokeEnd(arg0: $GlslInvokeFunctionNode): void;
        visitHeader(): void;
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
