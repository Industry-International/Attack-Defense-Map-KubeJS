import { $ObjectOpenCustomHashSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $ReentrantLock } from "@package/java/util/concurrent/locks";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $Map, $IdentityHashMap } from "@package/java/util";
import { $Object, $Class } from "@package/java/lang";
import { $WeakReference } from "@package/java/lang/ref";
export * as core from "@package/dev/uncandango/alltheleaks/mixin/core";

declare module "@package/dev/uncandango/alltheleaks/mixin" {
    export class $Trackable {
        static getSummary(): $Map<$Class<never>, $Map<$Class<never>, number>>;
        static startTracking(arg0: $Object): void;
        static clearNullReferences(): void;
        static createWeakRefBasedSet(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>;
        static LOCK: $ReentrantLock;
        static WEAK_REFERENCE_STRATEGY: $Hash$Strategy<$WeakReference<$Trackable>>;
        static TRACKABLE_MAP: $IdentityHashMap<$Class<never>, $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>>;
        static get summary(): $Map<$Class<never>, $Map<$Class<never>, number>>;
    }
    export interface $Trackable {
        wrap(): $WeakReference<$Trackable>;
        atl$getBaseClass(): $Class<never>;
        startTracking(): void;
    }
    /**
     * Values that may be interpreted as {@link $Trackable}.
     */
    export type $Trackable_ = (() => $Class<never>);
}
