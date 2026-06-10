
declare module "@package/xaero/map/util/linked" {
    export class $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
    }
    export interface $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
        isDestroyed(): boolean;
        onDestroyed(): void;
        getPrevious(): V;
        getNext(): V;
        setNext(arg0: V): void;
        setPrevious(arg0: V): void;
        get destroyed(): boolean;
    }
}
