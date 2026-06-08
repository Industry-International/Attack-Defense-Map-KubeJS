import { $File_ } from "@package/java/io";
import { $LDLRegisterClient } from "@package/com/lowdragmc/lowdraglib2/registry/annotation";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $GUIContext } from "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $AutoRegistry$Holder, $AutoRegistry$LDLibRegisterClient, $ILDLRegisterClient } from "@package/com/lowdragmc/lowdraglib2/registry";
import { $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $Transform2D } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $Position, $Size } from "@package/com/lowdragmc/lowdraglib2/math";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $IPersistedSerializable } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LDShaderHolder } from "@package/com/lowdragmc/lowdraglib2/client/shader";
import { $Color } from "@package/java/awt";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $AutoCloseable } from "@package/java/lang";
import { $IResourcePath } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $Vector4f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/gui/texture" {
    export class $UIResourceTexture extends $TransformTexture {
        getResourcePath(): $IResourcePath;
        getInternalTexture(): $IGuiTexture;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor(arg0: $IResourcePath);
        constructor();
        get resourcePath(): $IResourcePath;
        get internalTexture(): $IGuiTexture;
    }
    export class $RectTexture extends $TransformTexture {
        static of(arg0: number): $RectTexture;
        copy(): $RectTexture;
        getColor(): number;
        getRadius(): $Vector4f;
        getStroke(): number;
        setStroke(arg0: number): $RectTexture;
        setBorderColor(arg0: number): $RectTexture;
        getBorderColor(): number;
        setRadius(arg0: $Vector4f): $RectTexture;
        setCornerSegments(arg0: number): $RectTexture;
        getCornerSegments(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        get color(): number;
    }
    export class $DynamicTexture implements $IGuiTexture {
        static of(arg0: $Supplier_<$IGuiTexture>): $DynamicTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        copy(): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeDeserialize(): void;
        beforeSerialize(): void;
        afterSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        name(): string;
        group(): string;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        getTranslateKey(): string;
        getChatComponent(): $Component;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        isLDLRegister(): boolean;
        registryName(): $ResourceLocation;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        textureSupplier: $Supplier<$IGuiTexture>;
        constructor(arg0: $Supplier_<$IGuiTexture>);
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get registerUIClient(): $LDLRegisterClient;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get translateKey(): string;
        get chatComponent(): $Component;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get LDLRegister(): boolean;
    }
    export class $SpriteTexture$WrapMode extends $Enum<$SpriteTexture$WrapMode> {
        static values(): $SpriteTexture$WrapMode[];
        static valueOf(arg0: string): $SpriteTexture$WrapMode;
        static REPEAT: $SpriteTexture$WrapMode;
        static CLAMP: $SpriteTexture$WrapMode;
        static MIRRORED_REPEAT: $SpriteTexture$WrapMode;
    }
    /**
     * Values that may be interpreted as {@link $SpriteTexture$WrapMode}.
     */
    export type $SpriteTexture$WrapMode_ = "clamp" | "repeat" | "mirrored_repeat";
    export class $ItemStackTexture extends $TransformTexture {
        copy(): $ItemStackTexture;
        updateTick(): void;
        setItems(...arg0: $ItemStack_[]): $ItemStackTexture;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        items: $ItemStack[];
        constructor(...arg0: $Item_[]);
        constructor(...arg0: $ItemStack_[]);
        constructor();
    }
    export class $TextTexture extends $TransformTexture {
        setType(arg0: $TextTexture$TextType_): $TextTexture;
        copy(): $TextTexture;
        getLines(): number;
        setSupplier(arg0: $Supplier_<string>): $TextTexture;
        setRollSpeed(arg0: number): void;
        setDropShadow(arg0: boolean): $TextTexture;
        updateTick(): void;
        setWidth(arg0: number): $TextTexture;
        updateText(arg0: string): void;
        setBackgroundColor(arg0: number): $TextTexture;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        dropShadow: boolean;
        backgroundColor: number;
        color: number;
        rollSpeed: number;
        supplier: $Supplier<string>;
        width: number;
        text: string;
        type: $TextTexture$TextType;
        constructor(arg0: $Supplier_<string>);
        constructor(arg0: string);
        constructor(arg0: string, arg1: number);
        constructor();
        get lines(): number;
    }
    export class $ColorBorderTexture extends $TransformTexture {
        setBorder(arg0: number): $ColorBorderTexture;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        border: number;
        color: number;
        constructor(arg0: number, arg1: $Color);
        constructor(arg0: number, arg1: number);
        constructor();
    }
    export class $IGuiTexture$EmptyTexture implements $IGuiTexture {
        copy(): $IGuiTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeDeserialize(): void;
        beforeSerialize(): void;
        afterSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        name(): string;
        group(): string;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        getTranslateKey(): string;
        getChatComponent(): $Component;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        isLDLRegister(): boolean;
        registryName(): $ResourceLocation;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get registerUIClient(): $LDLRegisterClient;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get translateKey(): string;
        get chatComponent(): $Component;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get LDLRegister(): boolean;
    }
    export class $GuiTextureGroup extends $TransformTexture {
        static of(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        copy(): $GuiTextureGroup;
        setTextures(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        getTextures(): $IGuiTexture[];
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        constructor(...arg0: $IGuiTexture_[]);
    }
    export class $ITextureSize {
    }
    export interface $ITextureSize {
        getWidth(): number;
        ldlib2$getImageWidth(): number;
        ldlib2$getImageHeight(): number;
        getHeight(): number;
        get width(): number;
        get height(): number;
    }
    export class $IGuiTexture {
        static group(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        static dynamic(arg0: $Supplier_<$IGuiTexture>): $DynamicTexture;
        static createCodec(): $Codec<$IGuiTexture>;
        static getTextureFromFile(arg0: $File_): $ResourceLocation;
        static CODEC: $Codec<$IGuiTexture>;
        static EMPTY: $IGuiTexture$EmptyTexture;
        static MISSING_TEXTURE: $IGuiTexture$MissingTexture;
    }
    export interface $IGuiTexture extends $IPersistedSerializable, $IConfigurable, $ILDLRegisterClient<$IGuiTexture, $Supplier<$IGuiTexture>> {
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        copy(): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        set color(value: number);
        get rawTexture(): $IGuiTexture;
    }
    /**
     * Values that may be interpreted as {@link $IGuiTexture}.
     */
    export type $IGuiTexture_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => void);
    export class $SpriteTexture extends $TransformTexture {
        setColor(arg0: number): $SpriteTexture;
        getImageSize(): $Size;
        setBorder(arg0: number, arg1: number, arg2: number, arg3: number): $SpriteTexture;
        setBorder(arg0: number): $SpriteTexture;
        setWrapMode(arg0: $SpriteTexture$WrapMode_): $SpriteTexture;
        setImageLocation(arg0: $ResourceLocation_): $SpriteTexture;
        getImageLocation(): $ResourceLocation;
        setSpriteSize(arg0: $Size): $SpriteTexture;
        setSpritePosition(arg0: $Position): $SpriteTexture;
        setBorderLT(arg0: $Position): $SpriteTexture;
        setBorderRB(arg0: $Position): $SpriteTexture;
        setSprite(arg0: number, arg1: number, arg2: number, arg3: number): $SpriteTexture;
        static of(arg0: $ResourceLocation_): $SpriteTexture;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        borderLT: $Position;
        color: number;
        wrapMode: $SpriteTexture$WrapMode;
        borderRB: $Position;
        spriteSize: $Size;
        spritePosition: $Position;
        constructor();
        get imageSize(): $Size;
    }
    export class $SDFRectTexture extends $TransformTexture {
        static of(arg0: number): $SDFRectTexture;
        copy(): $SDFRectTexture;
        getColor(): number;
        getRadius(): $Vector4f;
        getStroke(): number;
        setStroke(arg0: number): $SDFRectTexture;
        setBorderColor(arg0: number): $SDFRectTexture;
        getBorderColor(): number;
        setRadius(arg0: number): $SDFRectTexture;
        setRadius(arg0: $Vector4f): $SDFRectTexture;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        get color(): number;
    }
    export class $AnimationTexture extends $TransformTexture {
        getFrom(): number;
        getColor(): number;
        getTo(): number;
        updateTick(): void;
        setTexture(arg0: string): $AnimationTexture;
        getAnimation(): number;
        setCellSize(arg0: number): $AnimationTexture;
        getCellSize(): number;
        setAnimation(arg0: number, arg1: number): $AnimationTexture;
        setAnimation(arg0: number): $AnimationTexture;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        imageLocation: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
        constructor(arg0: string);
        constructor();
        get from(): number;
        get color(): number;
        get to(): number;
        set texture(value: string);
    }
    export class $TextTexture$TextType extends $Enum<$TextTexture$TextType> {
        static values(): $TextTexture$TextType[];
        static valueOf(arg0: string): $TextTexture$TextType;
        static LEFT_ROLL_ALWAYS: $TextTexture$TextType;
        static HIDE: $TextTexture$TextType;
        static LEFT_HIDE: $TextTexture$TextType;
        static LEFT: $TextTexture$TextType;
        static ROLL_ALWAYS: $TextTexture$TextType;
        static RIGHT: $TextTexture$TextType;
        static ROLL: $TextTexture$TextType;
        static LEFT_ROLL: $TextTexture$TextType;
        static NORMAL: $TextTexture$TextType;
    }
    /**
     * Values that may be interpreted as {@link $TextTexture$TextType}.
     */
    export type $TextTexture$TextType_ = "normal" | "hide" | "roll" | "roll_always" | "left" | "right" | "left_hide" | "left_roll" | "left_roll_always";
    export class $ColorRectTexture extends $TransformTexture {
        setColor(arg0: number): $ColorRectTexture;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        color: number;
        constructor(arg0: $Color);
        constructor(arg0: number);
        constructor();
    }
    export class $TransformTexture implements $IGuiTexture {
        scale(arg0: number, arg1: number): $TransformTexture;
        scale(arg0: number): $TransformTexture;
        transform(arg0: number, arg1: number): $TransformTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        beforeDeserialize(): void;
        getTransform2D(): $Transform2D;
        copyTransform(arg0: $Transform2D): void;
        copyTransform(arg0: $TransformTexture): void;
        transform(arg0: number, arg1: number): $IGuiTexture;
        copy(): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        afterSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        name(): string;
        group(): string;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        getTranslateKey(): string;
        getChatComponent(): $Component;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        isLDLRegister(): boolean;
        registryName(): $ResourceLocation;
        rotate(arg0: number): $IGuiTexture;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        get transform2D(): $Transform2D;
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get registerUIClient(): $LDLRegisterClient;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get translateKey(): string;
        get chatComponent(): $Component;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get LDLRegister(): boolean;
    }
    export class $ShaderTexture extends $TransformTexture implements $AutoCloseable {
        close(): void;
        setColor(arg0: number): $ShaderTexture;
        getColor(): number;
        setShader(arg0: $ResourceLocation_): $ShaderTexture;
        getShaderHolder(): $LDShaderHolder;
        getShaderFromFile(arg0: $File_): $ResourceLocation;
        getShaderLocation(): $ResourceLocation;
        constructor();
        constructor(arg0: $ResourceLocation_);
        set shader(value: $ResourceLocation_);
        get shaderHolder(): $LDShaderHolder;
        get shaderLocation(): $ResourceLocation;
    }
    export class $IGuiTexture$MissingTexture implements $IGuiTexture {
        copy(): $IGuiTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeDeserialize(): void;
        beforeSerialize(): void;
        afterSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        name(): string;
        group(): string;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        getTranslateKey(): string;
        getChatComponent(): $Component;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        isLDLRegister(): boolean;
        registryName(): $ResourceLocation;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get registerUIClient(): $LDLRegisterClient;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get translateKey(): string;
        get chatComponent(): $Component;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get LDLRegister(): boolean;
    }
    export class $FluidStackTexture extends $TransformTexture {
        updateTick(): void;
        setFluids(...arg0: $FluidStack_[]): $FluidStackTexture;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        fluids: $FluidStack[];
        constructor(...arg0: $Fluid_[]);
        constructor(...arg0: $FluidStack_[]);
        constructor();
    }
    export class $VanillaSpriteTexture extends $TransformTexture {
        copy(): $VanillaSpriteTexture;
        setColor(arg0: number): $VanillaSpriteTexture;
        getColor(): number;
        setSprite(arg0: $ResourceLocation_): $VanillaSpriteTexture;
        getSprite(): $ResourceLocation;
        static of(arg0: $ResourceLocation_): $VanillaSpriteTexture;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        constructor(arg0: $ResourceLocation_);
    }
}
