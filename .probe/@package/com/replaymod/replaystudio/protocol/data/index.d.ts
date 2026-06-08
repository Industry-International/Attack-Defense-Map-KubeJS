import { $Tag } from "@package/com/github/steveice10/opennbt/tag/builtin";

declare module "@package/com/replaymod/replaystudio/protocol/data" {
    export class $StringOrNbtText {
        str: string;
        nbt: $Tag;
        constructor(str: string);
        constructor(nbt: $Tag);
    }
}
