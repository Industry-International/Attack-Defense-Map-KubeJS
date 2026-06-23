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
        static convertToAgePresentationFromInstant(date: $Date): $Component;
        static convertToAgePresentation(millis: number): $Component;
        static renderPlayerFace(guiGraphics: $GuiGraphics, x: number, y: number, size: number, playerUuid: $UUID_): void;
        constructor();
    }
    export class $RealmsTextureManager$RealmsTexture extends $Record {
        image(): string;
        textureId(): $ResourceLocation;
        constructor(arg0: string, arg1: $ResourceLocation_);
    }
    export class $RealmsPersistence {
        read(): $RealmsPersistence$RealmsPersistenceData;
        save(persistenceData: $RealmsPersistence$RealmsPersistenceData): void;
        static writeFile(persistenceData: $RealmsPersistence$RealmsPersistenceData): void;
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
        static split(toSplit: string, delimiter: string): $List<string>;
        static decompose(text: string, ...segments: $TextRenderingUtils$LineSegment[]): $List<$TextRenderingUtils$Line>;
    }
    export class $WorldGenerationInfo extends $Record {
        levelType(): $LevelType;
        seed(): string;
        generateStructures(): boolean;
        experiments(): $Set<string>;
        constructor(arg0: string, arg1: $LevelType_, arg2: boolean, arg3: $Set_<string>);
    }
    export class $JsonUtils {
        static getOptional<T>(key: string, json: $JsonObject_, output: $Function_<$JsonObject, T>): T;
        static getLongOr(key: string, json: $JsonObject_, defaultValue: number): number;
        static getUuidOr(key: string, json: $JsonObject_, defaultValue: $UUID_ | null): $UUID;
        static getIntOr(key: string, json: $JsonObject_, defaultValue: number): number;
        static getDateOr(key: string, json: $JsonObject_): $Date;
        static getBooleanOr(key: string, json: $JsonObject_, defaultValue: boolean): boolean;
        static getStringOr(key: string, json: $JsonObject_, defaultValue: string | null): string;
        static getRequired<T>(key: string, json: $JsonObject_, output: $Function_<$JsonObject, T>): T;
        static getRequiredStringOr(key: string, json: $JsonObject_, defaultValue: string): string;
        static getRequiredString(key: string, json: $JsonObject_): string;
        constructor();
    }
    export class $RealmsTextureManager {
        static worldTemplate(key: string, image: string | null): $ResourceLocation;
        constructor();
    }
    export class $UploadTokenCache {
        static invalidate(worldId: number): void;
        static get(worldId: number): string;
        static put(worldId: number, arg1: string): void;
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
        static link(linkTitle: string, linkUrl: string): $TextRenderingUtils$LineSegment;
        renderedText(): string;
        isLink(): boolean;
        getLinkUrl(): string;
        get linkUrl(): string;
    }
}
