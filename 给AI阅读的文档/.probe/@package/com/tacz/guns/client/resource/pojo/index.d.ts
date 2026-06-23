import { $Vector3f } from "@package/org/joml";
export * as display from "@package/com/tacz/guns/client/resource/pojo/display";
export * as model from "@package/com/tacz/guns/client/resource/pojo/model";

declare module "@package/com/tacz/guns/client/resource/pojo" {
    export class $TransformScale {
        getThirdPerson(): $Vector3f;
        getFixed(): $Vector3f;
        getGround(): $Vector3f;
        static getAmmoDefault(): $TransformScale;
        static getGunDefault(): $TransformScale;
        constructor();
        get thirdPerson(): $Vector3f;
        get fixed(): $Vector3f;
        get ground(): $Vector3f;
        static get ammoDefault(): $TransformScale;
        static get gunDefault(): $TransformScale;
    }
}
