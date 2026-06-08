import { $Enum, $Record } from "@package/java/lang";
import { $UUID_, $Map_, $Map } from "@package/java/util";

declare module "@package/com/sighs/apricityui/instance/container/bind" {
    export class $OpenBindPlan$BindOverride extends $Record {
        args(): $Map<string, string>;
        bindType(): $ContainerBindType;
        constructor(bindType: $ContainerBindType_, args: $Map_<string, string>);
    }
    export class $OpenBindPlan$ContainerOverride extends $Record {
        merge(arg0: $OpenBindPlan$ContainerOverride_): $OpenBindPlan$ContainerOverride;
        capacity(): $OpenBindPlan$CapacityOverride;
        bind(): $OpenBindPlan$BindOverride;
        constructor(bind: $OpenBindPlan$BindOverride_, capacity: $OpenBindPlan$CapacityOverride_);
    }
    export class $OpenBindPlan$ResizePolicy extends $Enum<$OpenBindPlan$ResizePolicy> {
        static values(): $OpenBindPlan$ResizePolicy[];
        static valueOf(arg0: string): $OpenBindPlan$ResizePolicy;
        static KEEP_OVERFLOW: $OpenBindPlan$ResizePolicy;
        static TRUNCATE: $OpenBindPlan$ResizePolicy;
    }
    /**
     * Values that may be interpreted as {@link $OpenBindPlan$ResizePolicy}.
     */
    export type $OpenBindPlan$ResizePolicy_ = "keep_overflow" | "truncate";
    export class $OpenBindPlan$CapacityOverride extends $Record {
        minCapacity(): number;
        resizePolicy(): $OpenBindPlan$ResizePolicy;
        exactCapacity(): number;
        constructor(minCapacity: number, exactCapacity: number, resizePolicy: $OpenBindPlan$ResizePolicy_);
    }
    export class $OpenBindPlan$Builder$ContainerBindBuilder {
        arg(arg0: string, arg1: string): $OpenBindPlan$Builder$ContainerBindBuilder;
        policy(arg0: $OpenBindPlan$ResizePolicy_): $OpenBindPlan$Builder$ContainerBindBuilder;
        minCapacity(arg0: number): $OpenBindPlan$Builder$ContainerBindBuilder;
        build(): $OpenBindPlan;
        bind(arg0: string): $OpenBindPlan$Builder$ContainerBindBuilder;
        bind(): $OpenBindPlan$Builder;
        entity(arg0: string): $OpenBindPlan$Builder$ContainerBindBuilder;
        entity(arg0: $UUID_): $OpenBindPlan$Builder$ContainerBindBuilder;
        player(): $OpenBindPlan$Builder$ContainerBindBuilder;
        savedData(arg0: string, arg1: string): $OpenBindPlan$Builder$ContainerBindBuilder;
        savedData(arg0: string, arg1: string, arg2: number): $OpenBindPlan$Builder$ContainerBindBuilder;
        primaryBind(arg0: string): $OpenBindPlan$Builder$ContainerBindBuilder;
        exactCapacity(arg0: number): $OpenBindPlan$Builder$ContainerBindBuilder;
        bindType(arg0: $ContainerBindType_): $OpenBindPlan$Builder$ContainerBindBuilder;
        blockEntity(arg0: number, arg1: number, arg2: number, arg3: string): $OpenBindPlan$Builder$ContainerBindBuilder;
    }
    export class $ContainerBindType extends $Enum<$ContainerBindType> {
        static values(): $ContainerBindType[];
        static valueOf(arg0: string): $ContainerBindType;
        id(): string;
        static fromRaw(arg0: string): $ContainerBindType;
        static hasDataSource(arg0: $ContainerBindType_): boolean;
        static isPlayer(arg0: $ContainerBindType_): boolean;
        static isVirtualUi(arg0: $ContainerBindType_): boolean;
        static PLAYER: $ContainerBindType;
        static ENTITY: $ContainerBindType;
        static SAVED_DATA: $ContainerBindType;
        static VIRTUAL_UI: $ContainerBindType;
        static BLOCK_ENTITY: $ContainerBindType;
        static PLAYER_SLOT_COUNT: number;
    }
    /**
     * Values that may be interpreted as {@link $ContainerBindType}.
     */
    export type $ContainerBindType_ = "player" | "entity" | "block_entity" | "saved_data" | "virtual_ui";
    export class $OpenBindPlan {
        static builder(): $OpenBindPlan$Builder;
        merge(arg0: $OpenBindPlan): $OpenBindPlan;
        static merge(arg0: $OpenBindPlan, arg1: $OpenBindPlan): $OpenBindPlan;
        container(arg0: string): $OpenBindPlan$ContainerOverride;
        options(): $OpenBindPlan$Options;
        containers(): $Map<string, $OpenBindPlan$ContainerOverride>;
        templatePath(): string;
        primaryContainerIdOverride(): string;
    }
    export class $OpenBindPlan$Builder {
        build(): $OpenBindPlan;
        bind(arg0: string): $OpenBindPlan$Builder$ContainerBindBuilder;
        primaryContainer(arg0: string): $OpenBindPlan$Builder;
        templatePath(arg0: string): $OpenBindPlan$Builder;
        primaryBind(arg0: string): $OpenBindPlan$Builder$ContainerBindBuilder;
        defaultResizePolicy(arg0: $OpenBindPlan$ResizePolicy_): $OpenBindPlan$Builder;
        constructor();
    }
    export class $OpenBindPlan$Options extends $Record {
        merge(arg0: $OpenBindPlan$Options_): $OpenBindPlan$Options;
        defaultResizePolicy(): $OpenBindPlan$ResizePolicy;
        constructor(defaultResizePolicy: $OpenBindPlan$ResizePolicy_);
    }
}
