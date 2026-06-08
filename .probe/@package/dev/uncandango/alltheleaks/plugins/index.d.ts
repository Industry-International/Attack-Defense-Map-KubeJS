import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/dev/uncandango/alltheleaks/plugins" {
    export class $ATLJeiPlugin$RuntimeUnavailableEvent extends $Event {
        constructor();
    }
}
