import { $File_, $File } from "@package/java/io";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IPersistedSerializable } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Editor } from "@package/com/lowdragmc/lowdraglib2/editor/ui";
import { $IConfigurable } from "@package/com/lowdragmc/lowdraglib2/configurator";

declare module "@package/com/lowdragmc/lowdraglib2/editor/settings" {
    export class $EditorSettings implements $IPersistedSerializable {
        isDirty(): boolean;
        getSettings(arg0: $ResourceLocation_): ($Settings) | undefined;
        restoreSettings(): void;
        saveAllSettingsToFile(): void;
        markDirty(): void;
        createSettingsPanel(): $UIElement;
        applyCurrentSettings(): void;
        loadAllSettingsFromFile(): void;
        registerSettings<T extends $Settings>(arg0: T, arg1: $Codec<T>): void;
        getSettingsFile(): $File;
        setSettingsFile(arg0: $File_): $EditorSettings;
        unregisterSettings(arg0: $ResourceLocation_): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        writeToBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        beforeDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        beforeSerialize(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        editor: $Editor;
        constructor(arg0: $Editor);
        get dirty(): boolean;
    }
    export class $Settings {
    }
    export interface $Settings extends $IConfigurable {
        getId(): $ResourceLocation;
        getPath(): string;
        getDisplayName(): $Component;
        onApply(arg0: $Editor): void;
        get id(): $ResourceLocation;
        get path(): string;
        get displayName(): $Component;
    }
}
