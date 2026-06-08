import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Function_, $BiConsumer_ } from "@package/java/util/function";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $PonderStoryBoard } from "@package/net/createmod/ponder/api/scene";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Collection_, $List, $Map$Entry, $Collection } from "@package/java/util";
import { $Object, $Enum, $Record } from "@package/java/lang";

declare module "@package/net/createmod/ponder/api/registration" {
    export class $StoryBoardEntry {
    }
    export interface $StoryBoardEntry {
        getComponent(): $ResourceLocation;
        getNamespace(): string;
        getOrderingEntries(): $List<$StoryBoardEntry$SceneOrderingEntry>;
        getSchematicLocation(): $ResourceLocation;
        getBoard(): $PonderStoryBoard;
        getTags(): $List<$ResourceLocation>;
        orderBefore(arg0: string, arg1: string): $StoryBoardEntry;
        orderBefore(arg0: string): $StoryBoardEntry;
        highlightTags(...arg0: $ResourceLocation_[]): $StoryBoardEntry;
        highlightTag(arg0: $ResourceLocation_): $StoryBoardEntry;
        highlightAllTags(): $StoryBoardEntry;
        orderAfter(arg0: string): $StoryBoardEntry;
        orderAfter(arg0: string, arg1: string): $StoryBoardEntry;
        get component(): $ResourceLocation;
        get namespace(): string;
        get orderingEntries(): $List<$StoryBoardEntry$SceneOrderingEntry>;
        get schematicLocation(): $ResourceLocation;
        get board(): $PonderStoryBoard;
        get tags(): $List<$ResourceLocation>;
    }
    export class $MultiTagBuilder$Component {
    }
    export interface $MultiTagBuilder$Component {
        add(arg0: $ResourceLocation_): $MultiTagBuilder$Component;
    }
    /**
     * Values that may be interpreted as {@link $MultiTagBuilder$Component}.
     */
    export type $MultiTagBuilder$Component_ = ((arg0: $ResourceLocation) => $MultiTagBuilder$Component);
    export class $MultiTagBuilder$Tag<T> {
    }
    export interface $MultiTagBuilder$Tag<T> {
        add(arg0: T): $MultiTagBuilder$Tag<T>;
    }
    /**
     * Values that may be interpreted as {@link $MultiTagBuilder$Tag}.
     */
    export type $MultiTagBuilder$Tag_<T> = ((arg0: T) => $MultiTagBuilder$Tag<T>);
    export class $StoryBoardEntry$SceneOrderingType extends $Enum<$StoryBoardEntry$SceneOrderingType> {
        static values(): $StoryBoardEntry$SceneOrderingType[];
        static valueOf(arg0: string): $StoryBoardEntry$SceneOrderingType;
        static BEFORE: $StoryBoardEntry$SceneOrderingType;
        static AFTER: $StoryBoardEntry$SceneOrderingType;
    }
    /**
     * Values that may be interpreted as {@link $StoryBoardEntry$SceneOrderingType}.
     */
    export type $StoryBoardEntry$SceneOrderingType_ = "before" | "after";
    export class $StoryBoardEntry$SceneOrderingEntry extends $Record {
        type(): $StoryBoardEntry$SceneOrderingType;
        static before(arg0: string, arg1: string): $StoryBoardEntry$SceneOrderingEntry;
        static after(arg0: string, arg1: string): $StoryBoardEntry$SceneOrderingEntry;
        sceneId(): $ResourceLocation;
        constructor(type: $StoryBoardEntry$SceneOrderingType_, sceneId: $ResourceLocation_);
    }
    export class $PonderTagRegistrationHelper<T> {
    }
    export interface $PonderTagRegistrationHelper<T> {
        addToComponent(...arg0: T[]): $MultiTagBuilder$Component;
        addToComponent(arg0: T): $MultiTagBuilder$Component;
        withKeyFunction<S>(arg0: $Function_<S, T>): $PonderTagRegistrationHelper<S>;
        addTagToComponent(arg0: T, arg1: $ResourceLocation_): void;
        registerTag(arg0: $ResourceLocation_): $TagBuilder;
        registerTag(arg0: string): $TagBuilder;
        addToTag(arg0: $ResourceLocation_): $MultiTagBuilder$Tag<T>;
        addToTag(...arg0: $ResourceLocation_[]): $MultiTagBuilder$Tag<T>;
    }
    export class $TagBuilder {
    }
    export interface $TagBuilder {
        register(): void;
        description(arg0: string): $TagBuilder;
        item(arg0: $ItemLike_, arg1: boolean, arg2: boolean): $TagBuilder;
        item(arg0: $ItemLike_): $TagBuilder;
        title(arg0: string): $TagBuilder;
        icon(arg0: string): $TagBuilder;
        icon(arg0: $ResourceLocation_): $TagBuilder;
        addToIndex(): $TagBuilder;
        idAsIcon(): $TagBuilder;
    }
    export class $SceneRegistryAccess {
    }
    export interface $SceneRegistryAccess {
        compile(arg0: $Collection_<$StoryBoardEntry>): $List<$PonderScene>;
        compile(arg0: $ResourceLocation_): $List<$PonderScene>;
        getRegisteredEntries(): $Collection<$Map$Entry<$ResourceLocation, $StoryBoardEntry>>;
        doScenesExistForId(arg0: $ResourceLocation_): boolean;
        get registeredEntries(): $Collection<$Map$Entry<$ResourceLocation, $StoryBoardEntry>>;
    }
    export class $LangRegistryAccess {
    }
    export interface $LangRegistryAccess {
        provideLang(arg0: string, arg1: $BiConsumer_<string, string>): void;
        getTagName(arg0: $ResourceLocation_): string;
        getTagDescription(arg0: $ResourceLocation_): string;
        getSpecific(arg0: $ResourceLocation_, arg1: string): string;
        getSpecific(arg0: $ResourceLocation_, arg1: string, ...arg2: $Object[]): string;
        getShared(arg0: $ResourceLocation_): string;
        getShared(arg0: $ResourceLocation_, ...arg1: $Object[]): string;
    }
}
