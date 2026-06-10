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
        setRadius(arg0: $Vector4f): $RectTexture;
        getCornerSegments(): number;
        setBorderColor(arg0: number): $RectTexture;
        setCornerSegments(arg0: number): $RectTexture;
        getBorderColor(): number;
        setStroke(arg0: number): $RectTexture;
        getStroke(): number;
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
        createPreview(arg0: $ConfiguratorGroup): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        beforeSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        beforeDeserialize(): void;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        name(): string;
        group(): string;
        registryName(): $ResourceLocation;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        getChatComponent(): $Component;
        getTranslateKey(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        textureSupplier: $Supplier<$IGuiTexture>;
        constructor(arg0: $Supplier_<$IGuiTexture>);
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        get registerUIClient(): $LDLRegisterClient;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get chatComponent(): $Component;
        get translateKey(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
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
        setItems(...arg0: $ItemStack_[]): $ItemStackTexture;
        updateTick(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        items: $ItemStack[];
        constructor(...arg0: $Item_[]);
        constructor(...arg0: $ItemStack_[]);
        constructor();
    }
    export class $TextTexture extends $TransformTexture {
        copy(): $TextTexture;
        getLines(): number;
        setBackgroundColor(arg0: number): $TextTexture;
        setType(arg0: $TextTexture$TextType_): $TextTexture;
        setSupplier(arg0: $Supplier_<string>): $TextTexture;
        setWidth(arg0: number): $TextTexture;
        updateTick(): void;
        updateText(arg0: string): void;
        setDropShadow(arg0: boolean): $TextTexture;
        setRollSpeed(arg0: number): void;
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
        createPreview(arg0: $ConfiguratorGroup): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        beforeSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        beforeDeserialize(): void;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        name(): string;
        group(): string;
        registryName(): $ResourceLocation;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        getChatComponent(): $Component;
        getTranslateKey(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        get registerUIClient(): $LDLRegisterClient;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get chatComponent(): $Component;
        get translateKey(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
    }
    export class $GuiTextureGroup extends $TransformTexture {
        static of(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        copy(): $GuiTextureGroup;
        getTextures(): $IGuiTexture[];
        setTextures(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        constructor(...arg0: $IGuiTexture_[]);
    }
    export class $ITextureSize {
    }
    export interface $ITextureSize {
        getWidth(): number;
        getHeight(): number;
        ldlib2$getImageWidth(): number;
        ldlib2$getImageHeight(): number;
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
        createPreview(arg0: $ConfiguratorGroup): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        set color(value: number);
        get rawTexture(): $IGuiTexture;
    }
    /**
     * Values that may be interpreted as {@link $IGuiTexture}.
     */
    export type $IGuiTexture_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => void);
    export class $SpriteTexture extends $TransformTexture {
        copy(): $SpriteTexture;
        setImageLocation(arg0: $ResourceLocation_): $SpriteTexture;
        setWrapMode(arg0: $SpriteTexture$WrapMode_): $SpriteTexture;
        setSpritePosition(arg0: $Position): $SpriteTexture;
        setSpriteSize(arg0: $Size): $SpriteTexture;
        getImageLocation(): $ResourceLocation;
        setBorderRB(arg0: $Position): $SpriteTexture;
        setBorderLT(arg0: $Position): $SpriteTexture;
        setBorder(arg0: number, arg1: number, arg2: number, arg3: number): $SpriteTexture;
        setBorder(arg0: number): $SpriteTexture;
        setSprite(arg0: number, arg1: number, arg2: number, arg3: number): $SpriteTexture;
        getImageSize(): $Size;
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
        setRadius(arg0: $Vector4f): $SDFRectTexture;
        setRadius(arg0: number): $SDFRectTexture;
        setBorderColor(arg0: number): $SDFRectTexture;
        getBorderColor(): number;
        setStroke(arg0: number): $SDFRectTexture;
        getStroke(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        get color(): number;
    }
    export class $AnimationTexture extends $TransformTexture {
        getFrom(): number;
        getColor(): number;
        setTexture(arg0: string): $AnimationTexture;
        getTo(): number;
        getAnimation(): number;
        updateTick(): void;
        setAnimation(arg0: number, arg1: number): $AnimationTexture;
        setAnimation(arg0: number): $AnimationTexture;
        setCellSize(arg0: number): $AnimationTexture;
        getCellSize(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        imageLocation: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
        constructor(arg0: string);
        constructor();
        get from(): number;
        get color(): number;
        set texture(value: string);
        get to(): number;
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
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        beforeDeserialize(): void;
        getTransform2D(): $Transform2D;
        copyTransform(arg0: $Transform2D): void;
        copyTransform(arg0: $TransformTexture): void;
        transform(arg0: number, arg1: number): $IGuiTexture;
        copy(): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        beforeSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        name(): string;
        group(): string;
        registryName(): $ResourceLocation;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        getChatComponent(): $Component;
        getTranslateKey(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        rotate(arg0: number): $IGuiTexture;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        get transform2D(): $Transform2D;
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        get registerUIClient(): $LDLRegisterClient;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get chatComponent(): $Component;
        get translateKey(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
    }
    export class $ShaderTexture extends $TransformTexture implements $AutoCloseable {
        close(): void;
        getColor(): number;
        setShader(arg0: $ResourceLocation_): $ShaderTexture;
        getShaderHolder(): $LDShaderHolder;
        getShaderLocation(): $ResourceLocation;
        getShaderFromFile(arg0: $File_): $ResourceLocation;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        constructor(arg0: $ResourceLocation_);
        get color(): number;
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
        createPreview(arg0: $ConfiguratorGroup): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        beforeSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        beforeDeserialize(): void;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        name(): string;
        group(): string;
        registryName(): $ResourceLocation;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        getChatComponent(): $Component;
        getTranslateKey(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        get registerUIClient(): $LDLRegisterClient;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get chatComponent(): $Component;
        get translateKey(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
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
