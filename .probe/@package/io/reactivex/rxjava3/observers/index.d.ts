import { $Disposable } from "@package/io/reactivex/rxjava3/disposables";
import { $Throwable } from "@package/java/lang";
import { $SingleObserver, $CompletableObserver, $Observer, $MaybeObserver } from "@package/io/reactivex/rxjava3/core";

declare module "@package/io/reactivex/rxjava3/observers" {
    export class $TestObserver<T> extends $BaseTestConsumer<T, $TestObserver<T>> implements $Observer<T>, $Disposable, $MaybeObserver<T>, $SingleObserver<T>, $CompletableObserver {
        static create<T>(): $TestObserver<T>;
        static create<T>(delegate: $Observer<T>): $TestObserver<T>;
        dispose(): void;
        onComplete(): void;
        onError(t: $Throwable): void;
        onSuccess(value: T): void;
        isDisposed(): boolean;
        onNext(t: T): void;
        onSubscribe(d: $Disposable): void;
        hasSubscription(): boolean;
        constructor(downstream: $Observer<T>);
        constructor();
    }
}
