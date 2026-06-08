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
        getOrderingEntries(): $List<$StoryBoardEntry$SceneOrderingEntry>;
        getNamespace(): string;
        getTags(): $List<$ResourceLocation>;
        getBoard(): $PonderStoryBoard;
        getSchematicLocation(): $ResourceLocation;
        highlightAllTags(): $StoryBoardEntry;
        orderBefore(arg0: string): $StoryBoardEntry;
        orderBefore(arg0: string, arg1: string): $StoryBoardEntry;
        highlightTag(arg0: $ResourceLocation_): $StoryBoardEntry;
        highlightTags(...arg0: $ResourceLocation_[]): $StoryBoardEntry;
        orderAfter(arg0: string, arg1: string): $StoryBoardEntry;
        orderAfter(arg0: string): $StoryBoardEntry;
        get component(): $ResourceLocation;
        get orderingEntries(): $List<$StoryBoardEntry$SceneOrderingEntry>;
        get namespace(): string;
        get tags(): $List<$ResourceLocation>;
        get board(): $PonderStoryBoard;
        get schematicLocation(): $ResourceLocation;
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
        registerTag(arg0: string): $TagBuilder;
        registerTag(arg0: $ResourceLocation_): $TagBuilder;
        addToTag(...arg0: $ResourceLocation_[]): $MultiTagBuilder$Tag<T>;
        addToTag(arg0: $ResourceLocation_): $MultiTagBuilder$Tag<T>;
        addToComponent(arg0: T): $MultiTagBuilder$Component;
        addToComponent(...arg0: T[]): $MultiTagBuilder$Component;
        addTagToComponent(arg0: T, arg1: $ResourceLocation_): void;
        withKeyFunction<S>(arg0: $Function_<S, T>): $PonderTagRegistrationHelper<S>;
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
        doScenesExistForId(arg0: $ResourceLocation_): boolean;
        getRegisteredEntries(): $Collection<$Map$Entry<$ResourceLocation, $StoryBoardEntry>>;
        get registeredEntries(): $Collection<$Map$Entry<$ResourceLocation, $StoryBoardEntry>>;
    }
    export class $LangRegistryAccess {
    }
    export interface $LangRegistryAccess {
        getTagName(arg0: $ResourceLocation_): string;
        getShared(arg0: $ResourceLocation_, ...arg1: $Object[]): string;
        getShared(arg0: $ResourceLocation_): string;
        provideLang(arg0: string, arg1: $BiConsumer_<string, string>): void;
        getTagDescription(arg0: $ResourceLocation_): string;
        getSpecific(arg0: $ResourceLocation_, arg1: string): string;
        getSpecific(arg0: $ResourceLocation_, arg1: string, ...arg2: $Object[]): string;
    }
}
