import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Material } from "@package/dev/engine_room/flywheel/api/material";
import { $Vector4fc } from "@package/org/joml";

declare module "@package/dev/engine_room/flywheel/api/model" {
    export class $Model$ConfiguredMesh extends $Record {
        material(): $Material;
        mesh(): $Mesh;
        constructor(material: $Material, mesh: $Mesh);
    }
    export class $Model {
    }
    export interface $Model {
        meshes(): $List<$Model$ConfiguredMesh>;
        boundingSphere(): $Vector4fc;
    }
}
