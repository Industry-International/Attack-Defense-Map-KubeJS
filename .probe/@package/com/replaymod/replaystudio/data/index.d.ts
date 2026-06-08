import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/com/replaymod/replaystudio/data" {
    export class $ReplayAssetEntry {
        getName(): string;
        setName(name: string): void;
        getFileExtension(): string;
        getUuid(): $UUID;
        constructor(uuid: $UUID_, fileExtension: string);
        constructor(uuid: $UUID_, fileExtension: string, name: string);
        get fileExtension(): string;
        get uuid(): $UUID;
    }
    export class $Marker {
        getName(): string;
        setName(name: string): void;
        getTime(): number;
        setTime(time: number): void;
        setY(y: number): void;
        setX(x: number): void;
        setZ(z: number): void;
        getY(): number;
        getX(): number;
        getZ(): number;
        setYaw(yaw: number): void;
        setRoll(roll: number): void;
        getYaw(): number;
        getPitch(): number;
        setPitch(pitch: number): void;
        getRoll(): number;
        constructor();
    }
    export class $ModInfo {
        getName(): string;
        getId(): string;
        getVersion(): string;
        constructor(id: string, name: string, version: string);
        get name(): string;
        get id(): string;
        get version(): string;
    }
}
