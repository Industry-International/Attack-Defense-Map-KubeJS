import { $ConfigurationTask$Type, $ConfigurationTask } from "@package/net/minecraft/server/network";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $List, $List_ } from "@package/java/util";
import { $ClientConfigurationPacketListener, $ServerConfigurationPacketListener } from "@package/net/minecraft/network/protocol/configuration";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";
import { $Consumer_ } from "@package/java/util/function";
import { $ExtensibleEnumAcknowledgePayload, $ExtensibleEnumDataPayload_, $FeatureFlagAcknowledgePayload, $FeatureFlagDataPayload_ } from "@package/net/neoforged/neoforge/network/payload";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $NetworkedEnum$NetworkCheck, $NetworkedEnum$NetworkCheck_ } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/network/configuration" {
    export class $SyncRegistries extends $Record implements $ICustomConfigurationTask {
        run(arg0: $Consumer_<$CustomPacketPayload>): void;
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
        static TYPE: $ConfigurationTask$Type;
        constructor();
    }
    /**
     * Defines a custom configuration task that should be run when a client connects.
     * 
     * This interface is a wrapper functional interface around `ConfigurationTask`.
     * Allowing for easily sending custom payloads to the client, without having to perform the wrapping
     * in `ClientboundCustomPayloadPacket` yourself.
     * 
     * It is recommended to use this interface over `ConfigurationTask` when you need to send custom payloads.
     * It's functionality is otherwise identical.
     */
    export class $ICustomConfigurationTask {
    }
    export interface $ICustomConfigurationTask extends $ConfigurationTask {
        /**
         * Invoked when it is time for this configuration to run.
         */
        run(sender: $Consumer_<$CustomPacketPayload>): void;
        /**
         * Invoked when it is time for this configuration to run.
         */
        start(sender: $Consumer_<$Packet<never>>): void;
    }
    export class $CheckExtensibleEnums extends $Record implements $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
        listener(): $ServerConfigurationPacketListener;
        static handleServerboundPayload(arg0: $ExtensibleEnumAcknowledgePayload, arg1: $IPayloadContext): void;
        static handleClientboundPayload(arg0: $ExtensibleEnumDataPayload_, arg1: $IPayloadContext): void;
        static handleVanillaServerConnection(arg0: $ClientConfigurationPacketListener): boolean;
        static TYPE: $ConfigurationTask$Type;
        constructor(listener: $ServerConfigurationPacketListener);
    }
    export class $CommonVersionTask extends $Record implements $ICustomConfigurationTask {
        run(arg0: $Consumer_<$CustomPacketPayload>): void;
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
        static TYPE: $ConfigurationTask$Type;
        constructor();
    }
    export class $CommonRegisterTask extends $Record implements $ICustomConfigurationTask {
        run(arg0: $Consumer_<$CustomPacketPayload>): void;
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
        static TYPE: $ConfigurationTask$Type;
        constructor();
    }
    export class $CheckExtensibleEnums$Mismatch extends $Enum<$CheckExtensibleEnums$Mismatch> {
    }
    /**
     * Values that may be interpreted as {@link $CheckExtensibleEnums$Mismatch}.
     */
    export type $CheckExtensibleEnums$Mismatch_ = "extensibility" | "network_check" | "extension" | "entry_count" | "entry_mismatch";
    export class $SyncConfig extends $Record implements $ICustomConfigurationTask {
        run(arg0: $Consumer_<$CustomPacketPayload>): void;
        type(): $ConfigurationTask$Type;
        listener(): $ServerConfigurationPacketListener;
        start(arg0: $Consumer_<$Packet<never>>): void;
        static TYPE: $ConfigurationTask$Type;
        constructor(listener: $ServerConfigurationPacketListener);
    }
    export class $CheckExtensibleEnums$ExtensionData extends $Record {
        entries(): $List<string>;
        vanillaCount(): number;
        totalCount(): number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CheckExtensibleEnums$ExtensionData>;
        constructor(vanillaCount: number, totalCount: number, entries: $List_<string>);
    }
    export class $RegistryDataMapNegotiation extends $Record implements $ICustomConfigurationTask {
        run(arg0: $Consumer_<$CustomPacketPayload>): void;
        type(): $ConfigurationTask$Type;
        listener(): $ServerConfigurationPacketListener;
        start(arg0: $Consumer_<$Packet<never>>): void;
        static ID: $ResourceLocation;
        static TYPE: $ConfigurationTask$Type;
        constructor(listener: $ServerConfigurationPacketListener);
    }
    export class $CheckFeatureFlags extends $Record implements $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
        listener(): $ServerConfigurationPacketListener;
        static handleServerboundPayload(arg0: $FeatureFlagAcknowledgePayload, arg1: $IPayloadContext): void;
        static handleClientboundPayload(arg0: $FeatureFlagDataPayload_, arg1: $IPayloadContext): void;
        static handleVanillaServerConnection(arg0: $ClientConfigurationPacketListener): boolean;
        static TYPE: $ConfigurationTask$Type;
        constructor(listener: $ServerConfigurationPacketListener);
    }
    export class $CheckExtensibleEnums$EnumEntry extends $Record {
        className(): string;
        data(): ($CheckExtensibleEnums$ExtensionData) | undefined;
        isClientbound(): boolean;
        isServerbound(): boolean;
        isExtended(): boolean;
        networkCheck(): $NetworkedEnum$NetworkCheck;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CheckExtensibleEnums$EnumEntry>;
        constructor(className: string, networkCheck: $NetworkedEnum$NetworkCheck_, data: ($CheckExtensibleEnums$ExtensionData_) | undefined);
        get clientbound(): boolean;
        get serverbound(): boolean;
        get extended(): boolean;
    }
}
