import { $JsonObject, $JsonObject_ } from "@package/com/google/gson";
import { $Function_ } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $UUID_, $Date, $Set_, $UUID, $List, $Set } from "@package/java/util";
import { $ReflectionBasedSerialization } from "@package/com/mojang/realmsclient/dto";
export * as task from "@package/com/mojang/realmsclient/util/task";

declare module "@package/com/mojang/realmsclient/util" {
    export class $RealmsUtil {
        static convertToAgePresentation(arg0: number): $Component;
        static convertToAgePresentationFromInstant(arg0: $Date): $Component;
        static renderPlayerFace(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $UUID_): void;
        constructor();
    }
    export class $RealmsTextureManager$RealmsTexture extends $Record {
        image(): string;
        textureId(): $ResourceLocation;
        constructor(arg0: string, arg1: $ResourceLocation_);
    }
    export class $RealmsPersistence {
        read(): $RealmsPersistence$RealmsPersistenceData;
        save(arg0: $RealmsPersistence$RealmsPersistenceData): void;
        static writeFile(arg0: $RealmsPersistence$RealmsPersistenceData): void;
        static readFile(): $RealmsPersistence$RealmsPersistenceData;
        constructor();
    }
    export class $TextRenderingUtils$Line {
        segments: $List<$TextRenderingUtils$LineSegment>;
    }
    export class $RealmsPersistence$RealmsPersistenceData implements $ReflectionBasedSerialization {
        hasUnreadNews: boolean;
        newsLink: string;
        constructor();
    }
    export class $TextRenderingUtils {
        static split(arg0: string, arg1: string): $List<string>;
        static decompose(arg0: string, ...arg1: $TextRenderingUtils$LineSegment[]): $List<$TextRenderingUtils$Line>;
    }
    export class $WorldGenerationInfo extends $Record {
        seed(): string;
        levelType(): $LevelType;
        experiments(): $Set<string>;
        generateStructures(): boolean;
        constructor(arg0: string, arg1: $LevelType_, arg2: boolean, arg3: $Set_<string>);
    }
    export class $JsonUtils {
        static getLongOr(arg0: string, arg1: $JsonObject_, arg2: number): number;
        static getIntOr(arg0: string, arg1: $JsonObject_, arg2: number): number;
        static getUuidOr(arg0: string, arg1: $JsonObject_, arg2: $UUID_): $UUID;
        static getOptional<T>(arg0: string, arg1: $JsonObject_, arg2: $Function_<$JsonObject, T>): T;
        static getBooleanOr(arg0: string, arg1: $JsonObject_, arg2: boolean): boolean;
        static getStringOr(arg0: string, arg1: $JsonObject_, arg2: string): string;
        static getRequired<T>(arg0: string, arg1: $JsonObject_, arg2: $Function_<$JsonObject, T>): T;
        static getRequiredString(arg0: string, arg1: $JsonObject_): string;
        static getRequiredStringOr(arg0: string, arg1: $JsonObject_, arg2: string): string;
        static getDateOr(arg0: string, arg1: $JsonObject_): $Date;
        constructor();
    }
    export class $RealmsTextureManager {
        static worldTemplate(arg0: string, arg1: string): $ResourceLocation;
        constructor();
    }
    export class $UploadTokenCache {
        static invalidate(arg0: number): void;
        static get(arg0: number): string;
        static put(arg0: number, arg1: string): void;
        constructor();
    }
    export class $LevelType extends $Enum<$LevelType> {
        getName(): $Component;
        static values(): $LevelType[];
        static valueOf(arg0: string): $LevelType;
        getDtoIndex(): number;
        static AMPLIFIED: $LevelType;
        static FLAT: $LevelType;
        static LARGE_BIOMES: $LevelType;
        static DEFAULT: $LevelType;
        get dtoIndex(): number;
    }
    /**
     * Values that may be interpreted as {@link $LevelType}.
     */
    export type $LevelType_ = "default" | "flat" | "large_biomes" | "amplified";
    export class $TextRenderingUtils$LineSegment {
        getLinkUrl(): string;
        static link(arg0: string, arg1: string): $TextRenderingUtils$LineSegment;
        isLink(): boolean;
        renderedText(): string;
        get linkUrl(): string;
    }
}
