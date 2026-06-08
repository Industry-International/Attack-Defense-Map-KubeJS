import { $DefaultGunData } from "@package/com/atsuishio/superbwarfare/data/gun";
import { $DefaultVehicleData } from "@package/com/atsuishio/superbwarfare/data/vehicle";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $LoadingDataEvent$Gun, $LoadingDataEvent$Vehicle, $LoadingJsonEvent } from "@package/com/atsuishio/superbwarfare/api/event";

declare module "@package/com/atsuishio/superbwarfare/compat/kubejs/event" {
    export class $LoadingJsonEventJS implements $KubeEvent {
        getEvent(): $LoadingJsonEvent;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $LoadingJsonEvent);
        get event(): $LoadingJsonEvent;
    }
    export class $LoadingDataEventJS$Gun extends $LoadingDataEventJS {
        getId(): string;
        getData(): $DefaultGunData;
        setData(arg0: $DefaultGunData): void;
        getEvent(): $LoadingDataEvent$Gun;
        setId(arg0: string): void;
        constructor(arg0: $LoadingDataEvent$Gun);
        get event(): $LoadingDataEvent$Gun;
    }
    export class $LoadingDataEventJS$Vehicle extends $LoadingDataEventJS {
        getId(): string;
        getData(): $DefaultVehicleData;
        setData(arg0: $DefaultVehicleData): void;
        getEvent(): $LoadingDataEvent$Vehicle;
        setId(arg0: string): void;
        constructor(arg0: $LoadingDataEvent$Vehicle);
        get event(): $LoadingDataEvent$Vehicle;
    }
    export class $LoadingDataEventJS implements $KubeEvent {
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
}
