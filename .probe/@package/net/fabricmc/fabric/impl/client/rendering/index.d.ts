
declare module "@package/net/fabricmc/fabric/impl/client/rendering" {
    export class $ColorProviderRegistryImpl$ColorMapperHolder<T, Provider> {
    }
    export interface $ColorProviderRegistryImpl$ColorMapperHolder<T, Provider> {
        get(arg0: T): Provider;
    }
    /**
     * Values that may be interpreted as {@link $ColorProviderRegistryImpl$ColorMapperHolder}.
     */
    export type $ColorProviderRegistryImpl$ColorMapperHolder_<T, Provider> = ((arg0: T) => Provider);
}
