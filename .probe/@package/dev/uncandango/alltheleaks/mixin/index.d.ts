import { $ObjectOpenCustomHashSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $ReentrantLock } from "@package/java/util/concurrent/locks";
import { $Map, $IdentityHashMap } from "@package/java/util";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $Object, $Class } from "@package/java/lang";
import { $WeakReference } from "@package/java/lang/ref";
export * as core from "@package/dev/uncandango/alltheleaks/mixin/core";

declare module "@package/dev/uncandango/alltheleaks/mixin" {
    export class $Trackable {
        static createWeakRefBasedSet(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>;
        static startTracking(arg0: $Object): void;
        static getSummary(): $Map<$Class<never>, $Map<$Class<never>, number>>;
        static clearNullReferences(): void;
        static LOCK: $ReentrantLock;
        static WEAK_REFERENCE_STRATEGY: $Hash$Strategy<$WeakReference<$Trackable>>;
        static TRACKABLE_MAP: $IdentityHashMap<$Class<never>, $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>>;
        static get summary(): $Map<$Class<never>, $Map<$Class<never>, number>>;
    }
    export interface $Trackable {
        wrap(): $WeakReference<$Trackable>;
        startTracking(): void;
        atl$getBaseClass(): $Class<never>;
    }
    /**
     * Values that may be interpreted as {@link $Trackable}.
     */
    export type $Trackable_ = (() => $Class<never>);
}
