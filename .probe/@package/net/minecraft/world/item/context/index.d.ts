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
        handler$gmg000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        handler$gmg000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        handler$gmg000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        canPlace(): boolean;
        getNearestLookingDirection(): $Direction;
        replacingClickedOnBlock(): boolean;
        getNearestLookingDirections(): $Direction[];
        getNearestLookingVerticalDirection(): $Direction;
        replaceClicked: boolean;
        constructor(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $BlockHitResult);
        constructor(arg0: $UseOnContext);
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $ItemStack_, arg3: $BlockHitResult);
        get nearestLookingDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
        get nearestLookingVerticalDirection(): $Direction;
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        replaceClicked: boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $ItemStack_, arg4: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor, $UseOnContextInvoker {
        getLevel(): $Level;
        getRotation(): number;
        getClickedFace(): $Direction;
        getClickedPos(): $BlockPos;
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getItemInHand(): $ItemStack;
        isInside(): boolean;
        isSecondaryUseActive(): boolean;
        getHitResult(): $BlockHitResult;
        getClickLocation(): $Vec3;
        getHorizontalDirection(): $Direction;
        create$getHitResult(): $BlockHitResult;
        cdg_getHitResult(): $BlockHitResult;
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockHitResult);
        constructor(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $BlockHitResult);
        get level(): $Level;
        get rotation(): number;
        get clickedFace(): $Direction;
        get clickedPos(): $BlockPos;
        get hand(): $InteractionHand;
        get player(): $Player;
        get itemInHand(): $ItemStack;
        get inside(): boolean;
        get secondaryUseActive(): boolean;
        get hitResult(): $BlockHitResult;
        get clickLocation(): $Vec3;
        get horizontalDirection(): $Direction;
    }
}
