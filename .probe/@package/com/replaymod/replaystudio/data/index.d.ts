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
        setPitch(pitch: number): void;
        getY(): number;
        getX(): number;
        getYaw(): number;
        getZ(): number;
        setY(y: number): void;
        setX(x: number): void;
        setZ(z: number): void;
        getPitch(): number;
        getRoll(): number;
        setYaw(yaw: number): void;
        setRoll(roll: number): void;
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
