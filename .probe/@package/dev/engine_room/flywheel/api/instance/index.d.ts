import { $Layout } from "@package/dev/engine_room/flywheel/api/layout";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Model } from "@package/dev/engine_room/flywheel/api/model";

declare module "@package/dev/engine_room/flywheel/api/instance" {
    export class $InstanceHandle {
    }
    export interface $InstanceHandle {
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        setChanged(): void;
        setDeleted(): void;
    }
    export class $InstancerProvider {
    }
    export interface $InstancerProvider {
        instancer<I extends $Instance>(arg0: $InstanceType<I>, arg1: $Model, arg2: number): $Instancer<I>;
        instancer<I extends $Instance>(type: $InstanceType<I>, model: $Model): $Instancer<I>;
    }
    /**
     * Values that may be interpreted as {@link $InstancerProvider}.
     */
    export type $InstancerProvider_ = ((arg0: $InstanceType<any>, arg1: $Model, arg2: number) => $Instancer<any>);
    export class $Instancer<I extends $Instance> {
    }
    export interface $Instancer<I extends $Instance> {
        createInstance(): I;
        createInstances(arr: I[]): void;
        stealInstance(arg0: I): void;
    }
    export class $InstanceWriter<I extends $Instance> {
    }
    export interface $InstanceWriter<I extends $Instance> {
        write(arg0: number, arg1: I): void;
    }
    /**
     * Values that may be interpreted as {@link $InstanceWriter}.
     */
    export type $InstanceWriter_<I> = ((arg0: number, arg1: I) => void);
    export class $InstanceType<I extends $Instance> {
    }
    export interface $InstanceType<I extends $Instance> {
        writer(): $InstanceWriter<I>;
        create(arg0: $InstanceHandle): I;
        layout(): $Layout;
        vertexShader(): $ResourceLocation;
        cullShader(): $ResourceLocation;
    }
    export class $Instance {
    }
    export interface $Instance {
        type(): $InstanceType<never>;
        "delete"(): void;
        handle(): $InstanceHandle;
        setVisible(visible: boolean): void;
        setChanged(): void;
        set visible(value: boolean);
    }
}
