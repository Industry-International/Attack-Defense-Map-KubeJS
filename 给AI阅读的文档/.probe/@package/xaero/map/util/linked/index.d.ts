
declare module "@package/xaero/map/util/linked" {
    export class $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
    }
    export interface $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
        isDestroyed(): boolean;
        getNext(): V;
        getPrevious(): V;
        onDestroyed(): void;
        setNext(arg0: V): void;
        setPrevious(arg0: V): void;
        get destroyed(): boolean;
    }
}
