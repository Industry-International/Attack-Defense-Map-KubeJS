import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $WorldPropertyDataType } from "@package/com/moulberry/axiom/world_properties";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/com/moulberry/axiom/world_properties/client" {
    export class $ClientWorldProperty<T> {
        static read(friendlyByteBuf: $FriendlyByteBuf): $ClientWorldProperty<never>;
        getId(): $ResourceLocation;
        getType(): $WorldPropertyDataType<T>;
        getLocalizedName(): string;
        ackChangesUpTo(updateId: number): void;
        setRemoteValue(bytes: number[]): void;
        changeLocalValue(value: T): void;
        getLocalValue(): T;
        renderImgui(): void;
        constructor(id: $ResourceLocation_, name: string, localizeName: boolean, initialValue: T);
        get id(): $ResourceLocation;
        get type(): $WorldPropertyDataType<T>;
        get localizedName(): string;
        set remoteValue(value: number[]);
        get localValue(): T;
    }
}
