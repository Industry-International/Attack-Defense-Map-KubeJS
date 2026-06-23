import { $Function_ } from "@package/java/util/function";
import { $Message_, $Message, $ImmutableStringReader } from "@package/com/mojang/brigadier";
import { $Object, $Exception } from "@package/java/lang";

declare module "@package/com/mojang/brigadier/exceptions" {
    export class $DynamicCommandExceptionType implements $CommandExceptionType {
        create(arg0: $Object): $CommandSyntaxException;
        createWithContext(arg0: $ImmutableStringReader, arg1: $Object): $CommandSyntaxException;
        constructor(arg0: $Function_<$Object, $Message>);
    }
    export class $Dynamic2CommandExceptionType$Function {
    }
    export interface $Dynamic2CommandExceptionType$Function {
        apply(arg0: $Object, arg1: $Object): $Message;
    }
    /**
     * Values that may be interpreted as {@link $Dynamic2CommandExceptionType$Function}.
     */
    export type $Dynamic2CommandExceptionType$Function_ = ((arg0: $Object, arg1: $Object) => $Message_);
    export class $Dynamic3CommandExceptionType implements $CommandExceptionType {
        create(arg0: $Object, arg1: $Object, arg2: $Object): $CommandSyntaxException;
        createWithContext(arg0: $ImmutableStringReader, arg1: $Object, arg2: $Object, arg3: $Object): $CommandSyntaxException;
        constructor(arg0: $Dynamic3CommandExceptionType$Function_);
    }
    export class $Dynamic2CommandExceptionType implements $CommandExceptionType {
        create(arg0: $Object, arg1: $Object): $CommandSyntaxException;
        createWithContext(arg0: $ImmutableStringReader, arg1: $Object, arg2: $Object): $CommandSyntaxException;
        constructor(arg0: $Dynamic2CommandExceptionType$Function_);
    }
    export class $SimpleCommandExceptionType implements $CommandExceptionType {
        create(): $CommandSyntaxException;
        createWithContext(arg0: $ImmutableStringReader): $CommandSyntaxException;
        constructor(arg0: $Message_);
    }
    export class $Dynamic3CommandExceptionType$Function {
    }
    export interface $Dynamic3CommandExceptionType$Function {
        apply(arg0: $Object, arg1: $Object, arg2: $Object): $Message;
    }
    /**
     * Values that may be interpreted as {@link $Dynamic3CommandExceptionType$Function}.
     */
    export type $Dynamic3CommandExceptionType$Function_ = ((arg0: $Object, arg1: $Object, arg2: $Object) => $Message_);
    export class $CommandExceptionType {
    }
    export interface $CommandExceptionType {
    }
    export class $CommandSyntaxException extends $Exception {
        getInput(): string;
        getContext(): string;
        getType(): $CommandExceptionType;
        getCursor(): number;
        getRawMessage(): $Message;
        static BUILT_IN_EXCEPTIONS: $BuiltInExceptionProvider;
        static ENABLE_COMMAND_STACK_TRACES: boolean;
        static CONTEXT_AMOUNT: number;
        constructor(arg0: $CommandExceptionType, arg1: $Message_);
        constructor(arg0: $CommandExceptionType, arg1: $Message_, arg2: string, arg3: number);
        get input(): string;
        get context(): string;
        get type(): $CommandExceptionType;
        get cursor(): number;
        get rawMessage(): $Message;
    }
    export class $BuiltInExceptionProvider {
    }
    export interface $BuiltInExceptionProvider {
        dispatcherExpectedArgumentSeparator(): $SimpleCommandExceptionType;
        readerExpectedDouble(): $SimpleCommandExceptionType;
        readerExpectedSymbol(): $DynamicCommandExceptionType;
        readerInvalidDouble(): $DynamicCommandExceptionType;
        readerExpectedStartOfQuote(): $SimpleCommandExceptionType;
        readerExpectedEndOfQuote(): $SimpleCommandExceptionType;
        readerExpectedFloat(): $SimpleCommandExceptionType;
        dispatcherParseException(): $DynamicCommandExceptionType;
        readerInvalidEscape(): $DynamicCommandExceptionType;
        dispatcherUnknownCommand(): $SimpleCommandExceptionType;
        dispatcherUnknownArgument(): $SimpleCommandExceptionType;
        longTooLow(): $Dynamic2CommandExceptionType;
        integerTooLow(): $Dynamic2CommandExceptionType;
        literalIncorrect(): $DynamicCommandExceptionType;
        doubleTooLow(): $Dynamic2CommandExceptionType;
        longTooHigh(): $Dynamic2CommandExceptionType;
        doubleTooHigh(): $Dynamic2CommandExceptionType;
        readerInvalidInt(): $DynamicCommandExceptionType;
        readerExpectedInt(): $SimpleCommandExceptionType;
        readerInvalidLong(): $DynamicCommandExceptionType;
        readerExpectedBool(): $SimpleCommandExceptionType;
        floatTooHigh(): $Dynamic2CommandExceptionType;
        readerExpectedLong(): $SimpleCommandExceptionType;
        readerInvalidBool(): $DynamicCommandExceptionType;
        floatTooLow(): $Dynamic2CommandExceptionType;
        readerInvalidFloat(): $DynamicCommandExceptionType;
        integerTooHigh(): $Dynamic2CommandExceptionType;
    }
}
