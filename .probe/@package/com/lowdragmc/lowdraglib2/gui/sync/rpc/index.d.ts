import { $Consumer_, $BiConsumer_, $Supplier_, $Function_, $BiFunction_, $Function, $Supplier } from "@package/java/util/function";
import { $Function4_, $Function8_, $Function11_, $Function6_, $Function5_, $Function3_, $Function9_, $Function10_, $Function7_, $Function12_ } from "@package/com/mojang/datafixers/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $SyncValueHolder } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $Type } from "@package/java/lang/reflect";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Consumer7_, $Consumer5_, $Consumer12_, $Consumer10_, $Consumer8_, $Consumer6_, $Consumer4_, $Consumer11_, $Consumer9_ } from "@package/com/lowdragmc/lowdraglib2/utils/consumer";
import { $TriConsumer_ } from "@package/org/apache/logging/log4j/util";
import { $Runnable_, $Record, $Object, $Class } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/gui/sync/rpc" {
    export class $RPCEvent extends $Record {
        executor(): $Function<$Object[], $Object>;
        hasReturn(): boolean;
        returnHolder(): $SyncValueHolder<any>;
        readReturnValueFromBuffer(arg0: $RegistryFriendlyByteBuf): $Object;
        writeParametersToBuffer(arg0: $RegistryFriendlyByteBuf, arg1: $Object[]): void;
        readParametersFromBuffer(arg0: $RegistryFriendlyByteBuf): $Object[];
        writeReturnValueToBuffer(arg0: $RegistryFriendlyByteBuf, arg1: $Object): void;
        argHolders(): $SyncValueHolder<any>[];
        constructor(argHolders: $SyncValueHolder<any>[], returnHolder: $SyncValueHolder<any>, executor: $Function_<$Object[], $Object>);
    }
    export class $RPCEmitter extends $Record {
        event(): $RPCEvent;
        send<T>(arg0: $Consumer_<T>, ...arg1: $Object[]): boolean;
        send(...arg0: $Object[]): boolean;
        modularProvider(): $Supplier<$ModularUI>;
        constructor(event: $RPCEvent_, modularProvider: $Supplier_<$ModularUI>);
    }
    export class $RPCEventBuilder {
        returnType(arg0: $Type, arg1: $Object): $RPCEventBuilder;
        returnType(arg0: $Type): $RPCEventBuilder;
        args(...arg0: $Type[]): $RPCEventBuilder;
        arg(arg0: $Type, arg1: $Object): $RPCEventBuilder;
        static create(): $RPCEventBuilder;
        build(): $RPCEvent;
        executor(arg0: $Function_<$Object[], $Object>): $RPCEventBuilder;
        static simple<A1, A2, A3, A4, A5, A6, R>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<R>, arg7: $Function6_<A1, A2, A3, A4, A5, A6, R>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6, A7, A8, R>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<A7>, arg7: $Class<A8>, arg8: $Class<R>, arg9: $Function8_<A1, A2, A3, A4, A5, A6, A7, A8, R>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6, A7, A8, A9>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<A7>, arg7: $Class<A8>, arg8: $Class<A9>, arg9: $Consumer9_<A1, A2, A3, A4, A5, A6, A7, A8, A9>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<A7>, arg7: $Class<A8>, arg8: $Class<A9>, arg9: $Class<R>, arg10: $Function9_<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6, A7, A8>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<A7>, arg7: $Class<A8>, arg8: $Consumer8_<A1, A2, A3, A4, A5, A6, A7, A8>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6, A7, R>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<A7>, arg7: $Class<R>, arg8: $Function7_<A1, A2, A3, A4, A5, A6, A7, R>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6, A7>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<A7>, arg7: $Consumer7_<A1, A2, A3, A4, A5, A6, A7>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<A7>, arg7: $Class<A8>, arg8: $Class<A9>, arg9: $Class<A10>, arg10: $Class<A11>, arg11: $Consumer11_<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, R>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<A7>, arg7: $Class<A8>, arg8: $Class<A9>, arg9: $Class<A10>, arg10: $Class<A11>, arg11: $Class<A12>, arg12: $Class<R>, arg13: $Function12_<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, R>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<A7>, arg7: $Class<A8>, arg8: $Class<A9>, arg9: $Class<A10>, arg10: $Class<A11>, arg11: $Class<A12>, arg12: $Consumer12_<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, R>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<A7>, arg7: $Class<A8>, arg8: $Class<A9>, arg9: $Class<A10>, arg10: $Class<A11>, arg11: $Class<R>, arg12: $Function11_<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, R>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<A7>, arg7: $Class<A8>, arg8: $Class<A9>, arg9: $Class<A10>, arg10: $Class<R>, arg11: $Function10_<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Class<A7>, arg7: $Class<A8>, arg8: $Class<A9>, arg9: $Class<A10>, arg10: $Consumer10_<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>): $RPCEvent;
        static simple<A1, R>(arg0: $Class<A1>, arg1: $Class<R>, arg2: $Function_<A1, R>): $RPCEvent;
        static simple<A1, A2>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $BiConsumer_<A1, A2>): $RPCEvent;
        static simple<A1, A2, R>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<R>, arg3: $BiFunction_<A1, A2, R>): $RPCEvent;
        static simple<A1, A2, A3>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $TriConsumer_<A1, A2, A3>): $RPCEvent;
        static simple<A1>(arg0: $Class<A1>, arg1: $Consumer_<A1>): $RPCEvent;
        static simple<R>(arg0: $Class<R>, arg1: $Supplier_<R>): $RPCEvent;
        static simple(arg0: $Runnable_): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, A6>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<A6>, arg6: $Consumer6_<A1, A2, A3, A4, A5, A6>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5, R>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Class<R>, arg6: $Function5_<A1, A2, A3, A4, A5, R>): $RPCEvent;
        static simple<A1, A2, A3, A4, A5>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<A5>, arg5: $Consumer5_<A1, A2, A3, A4, A5>): $RPCEvent;
        static simple<A1, A2, A3, R>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<R>, arg4: $Function3_<A1, A2, A3, R>): $RPCEvent;
        static simple<A1, A2, A3, A4>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Consumer4_<A1, A2, A3, A4>): $RPCEvent;
        static simple<A1, A2, A3, A4, R>(arg0: $Class<A1>, arg1: $Class<A2>, arg2: $Class<A3>, arg3: $Class<A4>, arg4: $Class<R>, arg5: $Function4_<A1, A2, A3, A4, R>): $RPCEvent;
    }
}
