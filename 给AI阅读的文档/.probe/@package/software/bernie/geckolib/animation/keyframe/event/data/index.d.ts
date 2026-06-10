
declare module "@package/software/bernie/geckolib/animation/keyframe/event/data" {
    export class $ParticleKeyframeData extends $KeyFrameData {
        script(): string;
        getLocator(): string;
        getEffect(): string;
        constructor(arg0: number, arg1: string, arg2: string, arg3: string);
        get locator(): string;
        get effect(): string;
    }
    export class $CustomInstructionKeyframeData extends $KeyFrameData {
        getInstructions(): string;
        constructor(arg0: number, arg1: string);
        get instructions(): string;
    }
    export class $SoundKeyframeData extends $KeyFrameData {
        getSound(): string;
        constructor(arg0: number, arg1: string);
        get sound(): string;
    }
}
