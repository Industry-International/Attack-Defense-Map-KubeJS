import { $Vector3f } from "@package/org/joml";
export * as display from "@package/com/tacz/guns/client/resource/pojo/display";
export * as model from "@package/com/tacz/guns/client/resource/pojo/model";

declare module "@package/com/tacz/guns/client/resource/pojo" {
    export class $TransformScale {
        getGround(): $Vector3f;
        getFixed(): $Vector3f;
        getThirdPerson(): $Vector3f;
        static getGunDefault(): $TransformScale;
        static getAmmoDefault(): $TransformScale;
        constructor();
        get ground(): $Vector3f;
        get fixed(): $Vector3f;
        get thirdPerson(): $Vector3f;
        static get gunDefault(): $TransformScale;
        static get ammoDefault(): $TransformScale;
    }
}
