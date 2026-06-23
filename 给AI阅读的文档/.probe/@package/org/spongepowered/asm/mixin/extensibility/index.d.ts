import { $MixinEnvironment, $MixinEnvironment$Phase } from "@package/org/spongepowered/asm/mixin";
import { $ClassNode } from "@package/org/objectweb/asm/tree";
import { $Set_, $Set, $List } from "@package/java/util";

declare module "@package/org/spongepowered/asm/mixin/extensibility" {
    export class $IEnvironmentTokenProvider {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IEnvironmentTokenProvider {
        getPriority(): number;
        getToken(arg0: string, arg1: $MixinEnvironment): number;
        get priority(): number;
    }
    export class $IMixinConfigPlugin {
    }
    export interface $IMixinConfigPlugin {
        onLoad(arg0: string): void;
        preApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        getMixins(): $List<string>;
        postApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        getRefMapperConfig(): string;
        shouldApplyMixin(arg0: string, arg1: string): boolean;
        acceptTargets(arg0: $Set_<string>, arg1: $Set_<string>): void;
        get mixins(): $List<string>;
        get refMapperConfig(): string;
    }
    export class $IMixinInfo {
    }
    export interface $IMixinInfo {
        getClassBytes(): number[];
        getName(): string;
        getPriority(): number;
        getClassName(): string;
        getConfig(): $IMixinConfig;
        getClassNode(arg0: number): $ClassNode;
        getPhase(): $MixinEnvironment$Phase;
        getTargetClasses(): $List<string>;
        isDetachedSuper(): boolean;
        getClassRef(): string;
        get classBytes(): number[];
        get name(): string;
        get priority(): number;
        get className(): string;
        get config(): $IMixinConfig;
        get phase(): $MixinEnvironment$Phase;
        get targetClasses(): $List<string>;
        get detachedSuper(): boolean;
        get classRef(): string;
    }
    export class $IRemapper {
    }
    export interface $IRemapper {
        unmap(arg0: string): string;
        map(arg0: string): string;
        mapDesc(arg0: string): string;
        unmapDesc(arg0: string): string;
        mapFieldName(arg0: string, arg1: string, arg2: string): string;
        mapMethodName(arg0: string, arg1: string, arg2: string): string;
    }
    export class $IMixinConfigSource {
    }
    export interface $IMixinConfigSource {
        getDescription(): string;
        getId(): string;
        get description(): string;
        get id(): string;
    }
    export class $IMixinConfig {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IMixinConfig {
        getName(): string;
        getPriority(): number;
        getSource(): $IMixinConfigSource;
        getEnvironment(): $MixinEnvironment;
        getTargets(): $Set<string>;
        isRequired(): boolean;
        decorate<V>(arg0: string, arg1: V): void;
        getPlugin(): $IMixinConfigPlugin;
        hasDecoration(arg0: string): boolean;
        getCleanSourceId(): string;
        getMixinPackage(): string;
        getDecoration<V>(arg0: string): V;
        get name(): string;
        get priority(): number;
        get source(): $IMixinConfigSource;
        get environment(): $MixinEnvironment;
        get targets(): $Set<string>;
        get required(): boolean;
        get plugin(): $IMixinConfigPlugin;
        get cleanSourceId(): string;
        get mixinPackage(): string;
    }
}
