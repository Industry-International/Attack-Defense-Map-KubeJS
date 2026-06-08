import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $UseOnContextInvoker } from "@package/com/jesz/createdieselgenerators/mixins";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        static at(arg0: $BlockPlaceContext, arg1: $BlockPos_, arg2: $Direction_): $BlockPlaceContext;
        replacingClickedOnBlock(): boolean;
        canPlace(): boolean;
        handler$glm000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        handler$glm000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        handler$glm000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        getNearestLookingDirection(): $Direction;
        getNearestLookingVerticalDirection(): $Direction;
        getNearestLookingDirections(): $Direction[];
        replaceClicked: boolean;
        constructor(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $BlockHitResult);
        constructor(arg0: $UseOnContext);
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $ItemStack_, arg3: $BlockHitResult);
        get nearestLookingDirection(): $Direction;
        get nearestLookingVerticalDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        replaceClicked: boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $ItemStack_, arg4: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor, $UseOnContextInvoker {
        getLevel(): $Level;
        getClickLocation(): $Vec3;
        getClickedFace(): $Direction;
        getClickedPos(): $BlockPos;
        getHitResult(): $BlockHitResult;
        getRotation(): number;
        isInside(): boolean;
        getPlayer(): $Player;
        getHorizontalDirection(): $Direction;
        getHand(): $InteractionHand;
        isSecondaryUseActive(): boolean;
        getItemInHand(): $ItemStack;
        cdg_getHitResult(): $BlockHitResult;
        create$getHitResult(): $BlockHitResult;
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockHitResult);
        constructor(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $BlockHitResult);
        get level(): $Level;
        get clickLocation(): $Vec3;
        get clickedFace(): $Direction;
        get clickedPos(): $BlockPos;
        get hitResult(): $BlockHitResult;
        get rotation(): number;
        get inside(): boolean;
        get player(): $Player;
        get horizontalDirection(): $Direction;
        get hand(): $InteractionHand;
        get secondaryUseActive(): boolean;
        get itemInHand(): $ItemStack;
    }
}
