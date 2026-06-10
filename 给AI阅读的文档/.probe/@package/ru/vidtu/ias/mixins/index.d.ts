import { $ProfileKeyPairManager } from "@package/net/minecraft/client/multiplayer";
import { $ProfileResult_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $User } from "@package/net/minecraft/client";
import { $UserApiService$UserProperties_, $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";

declare module "@package/ru/vidtu/ias/mixins" {
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        ias$userPropertiesFuture(future: $CompletableFuture<$UserApiService$UserProperties_>): void;
        ias$telemetryManager(manager: $ClientTelemetryManager): void;
        ias$profileKeyPairManager(manager: $ProfileKeyPairManager): void;
        ias$playerSocialManager(manager: $PlayerSocialManager): void;
        ias$authenticationService(): $YggdrasilAuthenticationService;
        ias$reportingContext(context: $ReportingContext): void;
        ias$user(user: $User): void;
        ias$userApiService(service: $UserApiService): void;
        ias$profileFuture(future: $CompletableFuture<$ProfileResult_>): void;
    }
}
