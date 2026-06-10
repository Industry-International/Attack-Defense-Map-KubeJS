import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
import { $List } from "@package/java/util";
import { $CommandStorage } from "@package/net/minecraft/world/level/storage";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Function_, $Function } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $SuggestionProvider } from "@package/com/mojang/brigadier/suggestion";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/server/commands/data" {
    export class $BlockDataAccessor implements $DataAccessor {
        getData(): $CompoundTag;
        setData(arg0: $CompoundTag_): void;
        getPrintSuccess(arg0: $Tag_): $Component;
        getPrintSuccess(arg0: $NbtPathArgument$NbtPath, arg1: number, arg2: number): $Component;
        getModifiedSuccess(): $Component;
        static PROVIDER: $Function<string, $DataCommands$DataProvider>;
        static ERROR_NOT_A_BLOCK_ENTITY: $SimpleCommandExceptionType;
        constructor(arg0: $BlockEntity, arg1: $BlockPos_);
        get modifiedSuccess(): $Component;
    }
    export class $DataAccessor {
    }
    export interface $DataAccessor {
        getData(): $CompoundTag;
        setData(arg0: $CompoundTag_): void;
        getPrintSuccess(arg0: $Tag_): $Component;
        getPrintSuccess(arg0: $NbtPathArgument$NbtPath, arg1: number, arg2: number): $Component;
        getModifiedSuccess(): $Component;
        get modifiedSuccess(): $Component;
    }
    export class $DataCommands$DataProvider {
    }
    export interface $DataCommands$DataProvider {
        wrap(arg0: $ArgumentBuilder<$CommandSourceStack, never>, arg1: $Function_<$ArgumentBuilder<$CommandSourceStack, never>, $ArgumentBuilder<$CommandSourceStack, never>>): $ArgumentBuilder<$CommandSourceStack, never>;
        access(arg0: $CommandContext<$CommandSourceStack>): $DataAccessor;
    }
    export class $EntityDataAccessor implements $DataAccessor {
        getData(): $CompoundTag;
        setData(arg0: $CompoundTag_): void;
        getPrintSuccess(arg0: $Tag_): $Component;
        getPrintSuccess(arg0: $NbtPathArgument$NbtPath, arg1: number, arg2: number): $Component;
        getModifiedSuccess(): $Component;
        static PROVIDER: $Function<string, $DataCommands$DataProvider>;
        constructor(arg0: $Entity);
        get modifiedSuccess(): $Component;
    }
    export class $DataCommands {
        static register(arg0: $CommandDispatcher<$CommandSourceStack>): void;
        static getSingleTag(arg0: $NbtPathArgument$NbtPath, arg1: $DataAccessor): $Tag;
        static TARGET_PROVIDERS: $List<$DataCommands$DataProvider>;
        static ALL_PROVIDERS: $List<$Function<string, $DataCommands$DataProvider>>;
        static SOURCE_PROVIDERS: $List<$DataCommands$DataProvider>;
        constructor();
    }
    export class $DataCommands$DataManipulator {
    }
    export interface $DataCommands$DataManipulator {
    }
    /**
     * Values that may be interpreted as {@link $DataCommands$DataManipulator}.
     */
    export type $DataCommands$DataManipulator_ = (() => void);
    export class $StorageDataAccessor implements $DataAccessor {
        getData(): $CompoundTag;
        setData(arg0: $CompoundTag_): void;
        getPrintSuccess(arg0: $NbtPathArgument$NbtPath, arg1: number, arg2: number): $Component;
        getPrintSuccess(arg0: $Tag_): $Component;
        getModifiedSuccess(): $Component;
        static getGlobalTags(arg0: $CommandContext<$CommandSourceStack>): $CommandStorage;
        static SUGGEST_STORAGE: $SuggestionProvider<$CommandSourceStack>;
        static PROVIDER: $Function<string, $DataCommands$DataProvider>;
        constructor(arg0: $CommandStorage, arg1: $ResourceLocation_);
        get modifiedSuccess(): $Component;
    }
    export class $DataCommands$DataManipulatorDecorator {
    }
    export interface $DataCommands$DataManipulatorDecorator {
    }
    /**
     * Values that may be interpreted as {@link $DataCommands$DataManipulatorDecorator}.
     */
    export type $DataCommands$DataManipulatorDecorator_ = (() => void);
    export class $DataCommands$StringProcessor {
    }
    export interface $DataCommands$StringProcessor {
    }
    /**
     * Values that may be interpreted as {@link $DataCommands$StringProcessor}.
     */
    export type $DataCommands$StringProcessor_ = (() => void);
}
