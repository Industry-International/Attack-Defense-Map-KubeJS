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
        static at(context: $BlockPlaceContext, pos: $BlockPos_, direction: $Direction_): $BlockPlaceContext;
        canPlace(): boolean;
        getNearestLookingVerticalDirection(): $Direction;
        handler$gig000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        handler$gig000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        handler$gig000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        getNearestLookingDirections(): $Direction[];
        getNearestLookingDirection(): $Direction;
        replacingClickedOnBlock(): boolean;
        replaceClicked: boolean;
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(context: $UseOnContext);
        constructor(player: $Player, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get nearestLookingVerticalDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
        get nearestLookingDirection(): $Direction;
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        replaceClicked: boolean;
        constructor(level: $Level_, pos: $BlockPos_, direction: $Direction_, itemStack: $ItemStack_, face: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor, $UseOnContextInvoker {
        getLevel(): $Level;
        isInside(): boolean;
        getClickLocation(): $Vec3;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        getRotation(): number;
        getItemInHand(): $ItemStack;
        getHorizontalDirection(): $Direction;
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getHitResult(): $BlockHitResult;
        isSecondaryUseActive(): boolean;
        create$getHitResult(): $BlockHitResult;
        cdg_getHitResult(): $BlockHitResult;
        constructor(player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult);
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get level(): $Level;
        get inside(): boolean;
        get clickLocation(): $Vec3;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get rotation(): number;
        get itemInHand(): $ItemStack;
        get horizontalDirection(): $Direction;
        get hand(): $InteractionHand;
        get player(): $Player;
        get hitResult(): $BlockHitResult;
        get secondaryUseActive(): boolean;
    }
}
