import { $File_, $File } from "@package/java/io";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Resources } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $Editor } from "@package/com/lowdragmc/lowdraglib2/editor/ui";

declare module "@package/com/lowdragmc/lowdraglib2/editor/project" {
    export class $IProject {
    }
    export interface $IProject extends $INBTSerializable<$CompoundTag> {
        getName(): string;
        getResources(): $Resources;
        getDisplayName(): $Component;
        getVersion(): string;
        getSuffix(): string;
        onLoad(arg0: $Editor): void;
        getMetadata(): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        onClosed(arg0: $Editor): void;
        getProjectType(): $ProjectType;
        initNewProject(): void;
        serializeProject(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeProject(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        get name(): string;
        get resources(): $Resources;
        get displayName(): $Component;
        get version(): string;
        get suffix(): string;
        get metadata(): $CompoundTag;
        get projectType(): $ProjectType;
    }
    export class $ProjectType {
        getName(): string;
        static of(arg0: $IGuiTexture_, arg1: string, arg2: string, arg3: $Supplier_<$IProject>): $ProjectType;
        getSuffix(): string;
        getIcon(): $IGuiTexture;
        saveProjectToFile(arg0: $IProject, arg1: $File_): void;
        isProjectDirty(arg0: $IProject, arg1: $File_): boolean;
        getRootSavePath(arg0: $IProject, arg1: $File_): $File;
        loadProjectFromFile(arg0: $File_): $IProject;
        newEmptyProject(): $IProject;
        getProjectCreator(): $Supplier<$IProject>;
        icon: $IGuiTexture;
        name: string;
        projectCreator: $Supplier<$IProject>;
        suffix: string;
        constructor(arg0: $IGuiTexture_, arg1: string, arg2: string, arg3: $Supplier_<$IProject>);
    }
}
