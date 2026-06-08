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
        getRefMapperConfig(): string;
        shouldApplyMixin(arg0: string, arg1: string): boolean;
        acceptTargets(arg0: $Set_<string>, arg1: $Set_<string>): void;
        postApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        getMixins(): $List<string>;
        preApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        get refMapperConfig(): string;
        get mixins(): $List<string>;
    }
    export class $IMixinInfo {
    }
    export interface $IMixinInfo {
        getName(): string;
        getPriority(): number;
        getClassName(): string;
        getClassBytes(): number[];
        getConfig(): $IMixinConfig;
        getClassNode(arg0: number): $ClassNode;
        getPhase(): $MixinEnvironment$Phase;
        getTargetClasses(): $List<string>;
        getClassRef(): string;
        isDetachedSuper(): boolean;
        get name(): string;
        get priority(): number;
        get className(): string;
        get classBytes(): number[];
        get config(): $IMixinConfig;
        get phase(): $MixinEnvironment$Phase;
        get targetClasses(): $List<string>;
        get classRef(): string;
        get detachedSuper(): boolean;
    }
    export class $IRemapper {
    }
    export interface $IRemapper {
        unmap(arg0: string): string;
        map(arg0: string): string;
        mapMethodName(arg0: string, arg1: string, arg2: string): string;
        mapFieldName(arg0: string, arg1: string, arg2: string): string;
        mapDesc(arg0: string): string;
        unmapDesc(arg0: string): string;
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
        getTargets(): $Set<string>;
        isRequired(): boolean;
        getEnvironment(): $MixinEnvironment;
        getCleanSourceId(): string;
        getDecoration<V>(arg0: string): V;
        getMixinPackage(): string;
        hasDecoration(arg0: string): boolean;
        decorate<V>(arg0: string, arg1: V): void;
        getPlugin(): $IMixinConfigPlugin;
        get name(): string;
        get priority(): number;
        get source(): $IMixinConfigSource;
        get targets(): $Set<string>;
        get required(): boolean;
        get environment(): $MixinEnvironment;
        get cleanSourceId(): string;
        get mixinPackage(): string;
        get plugin(): $IMixinConfigPlugin;
    }
}
