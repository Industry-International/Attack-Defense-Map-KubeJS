import { $Predicate_ } from "@package/java/util/function";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $WorldPropertyDataType, $WorldPropertyCategory, $WorldPropertyWidgetType, $WorldPropertyCategory_ } from "@package/com/moulberry/axiom/world_properties";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $LinkedHashMap, $List_, $Map } from "@package/java/util";

declare module "@package/com/moulberry/axiom/world_properties/server" {
    export class $ServerWorldProperty<T> {
        update(serverLevel: $ServerLevel, data: number[]): void;
        write(friendlyByteBuf: $FriendlyByteBuf): void;
        getId(): $ResourceLocation;
        setValue(value: T): void;
        getType(): $WorldPropertyDataType<T>;
        constructor(id: $ResourceLocation_, name: string, localizeName: boolean, widget: $WorldPropertyWidgetType<T>, value: T, handler: $Predicate_<T>);
        get id(): $ResourceLocation;
        set value(value: T);
        get type(): $WorldPropertyDataType<T>;
    }
    export class $ServerWorldPropertiesRegistry {
        clear(): void;
        registerDefault(serverLevel: $ServerLevel): void;
        registerFor(serverPlayer: $ServerPlayer): void;
        addCategory(category: $WorldPropertyCategory_, properties: $List_<$ServerWorldProperty<never>>): void;
        propertyList: $LinkedHashMap<$WorldPropertyCategory, $List<$ServerWorldProperty<never>>>;
        propertyMap: $Map<$ResourceLocation, $ServerWorldProperty<never>>;
        constructor(serverLevel: $ServerLevel);
    }
}
