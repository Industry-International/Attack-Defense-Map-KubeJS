
declare module "@package/xaero/pac/common/capability" {
    export class $ICapableObject {
    }
    export interface $ICapableObject {
        getXaero_OPAC_CapabilityProvider(): $ICapabilityProvider;
        setXaero_OPAC_CapabilityProvider(arg0: $ICapabilityProvider_): void;
    }
    export class $ICapabilityProvider {
    }
    export interface $ICapabilityProvider {
        getCapability<T>(arg0: $ICapability<T>): T;
    }
    /**
     * Values that may be interpreted as {@link $ICapabilityProvider}.
     */
    export type $ICapabilityProvider_ = ((arg0: $ICapability<any>) => any);
    export class $ICapability<T> {
    }
    export interface $ICapability<T> {
    }
}
