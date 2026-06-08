import { $ResourceLocation } from "@package/net/minecraft/resources";
export * as data from "@package/com/tacz/guns/resource/pojo/data";

declare module "@package/com/tacz/guns/resource/pojo" {
    export class $GunIndexPOJO {
        getName(): string;
        getType(): string;
        getSort(): number;
        getData(): $ResourceLocation;
        getDisplay(): $ResourceLocation;
        getItemType(): string;
        getTooltip(): string;
        constructor();
        get name(): string;
        get type(): string;
        get sort(): number;
        get data(): $ResourceLocation;
        get display(): $ResourceLocation;
        get itemType(): string;
        get tooltip(): string;
    }
}
