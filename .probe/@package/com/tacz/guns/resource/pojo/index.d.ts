import { $ResourceLocation } from "@package/net/minecraft/resources";
export * as data from "@package/com/tacz/guns/resource/pojo/data";

declare module "@package/com/tacz/guns/resource/pojo" {
    export class $GunIndexPOJO {
        getName(): string;
        getType(): string;
        getSort(): number;
        getData(): $ResourceLocation;
        getTooltip(): string;
        getItemType(): string;
        getDisplay(): $ResourceLocation;
        constructor();
        get name(): string;
        get type(): string;
        get sort(): number;
        get data(): $ResourceLocation;
        get tooltip(): string;
        get itemType(): string;
        get display(): $ResourceLocation;
    }
}
