import { $ClientWorldProperty } from "@package/com/moulberry/axiom/world_properties/client";
import { $Item } from "@package/net/minecraft/world/item";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $Unit } from "@package/net/minecraft/util";
export * as server from "@package/com/moulberry/axiom/world_properties/server";
export * as client from "@package/com/moulberry/axiom/world_properties/client";

declare module "@package/com/moulberry/axiom/world_properties" {
    export class $WorldPropertyWidgetType<T> {
        static read(friendlyByteBuf: $FriendlyByteBuf): $WorldPropertyWidgetType<never>;
        static CHECKBOX: $WorldPropertyWidgetType<boolean>;
        static TEXTBOX: $WorldPropertyWidgetType<string>;
        static BUTTON: $WorldPropertyWidgetType<$Unit>;
        static TIME: $WorldPropertyWidgetType<$Unit>;
    }
    export interface $WorldPropertyWidgetType<T> {
        write(arg0: $FriendlyByteBuf): void;
        create(arg0: $ResourceLocation_, arg1: string, arg2: boolean, arg3: number[]): $ClientWorldProperty<T>;
        dataType(): $WorldPropertyDataType<T>;
    }
    export class $WorldPropertyCategory extends $Record {
        name(): string;
        write(friendlyByteBuf: $FriendlyByteBuf): void;
        static read(friendlyByteBuf: $FriendlyByteBuf): $WorldPropertyCategory;
        getLocalizedName(): string;
        localizeName(): boolean;
        constructor(name: string, localizeName: boolean);
        get localizedName(): string;
    }
    export class $WorldPropertyDataType<T> {
        deserialize(arg0: number[]): T;
        serialize(arg0: T): number[];
        getTypeId(): number;
        static ITEM: $WorldPropertyDataType<$Item>;
        static BLOCK: $WorldPropertyDataType<$Block>;
        static STRING: $WorldPropertyDataType<string>;
        static EMPTY: $WorldPropertyDataType<$Unit>;
        static BOOLEAN: $WorldPropertyDataType<boolean>;
        static INTEGER: $WorldPropertyDataType<number>;
        constructor();
        get typeId(): number;
    }
}
