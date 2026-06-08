import { $SpruceWidget } from "@package/dev/lambdaurora/spruceui/widget";
export * as widget from "@package/dev/lambdaurora/spruceui/widget";
export * as util from "@package/dev/lambdaurora/spruceui/util";
export * as option from "@package/dev/lambdaurora/spruceui/option";

declare module "@package/dev/lambdaurora/spruceui" {
    export class $Position implements $SprucePositioned {
        static of(anchor: $SprucePositioned, x: number, y: number): $Position;
        static of(x: number, y: number): $Position;
        copy(): $Position;
        static origin(): $Position;
        move(x: number, y: number): $Position;
        setAnchor(anchor: $SprucePositioned): void;
        getY(): number;
        getX(): number;
        static center(parent: $SpruceWidget, y: number): $Position;
        static center(width: number, y: number): $Position;
        static center(anchor: $SprucePositioned, width: number, y: number): $Position;
        getAnchor(): $SprucePositioned;
        getRelativeX(): number;
        setRelativeX(x: number): void;
        getRelativeY(): number;
        setRelativeY(y: number): void;
        get y(): number;
        get x(): number;
    }
}
