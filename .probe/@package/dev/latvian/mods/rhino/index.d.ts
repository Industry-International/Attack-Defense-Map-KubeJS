import { $Reader } from "@package/java/io";
import { $IntFunction_, $Supplier_, $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $RegExp } from "@package/dev/latvian/mods/rhino/regexp";
import { $TypeInfo_, $TypeInfo, $VariableTypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Stream } from "@package/java/util/stream";
import { $TypeWrappers } from "@package/dev/latvian/mods/rhino/util/wrap";
import { $Method, $AccessibleObject, $Field, $Executable, $Member, $Constructor } from "@package/java/lang/reflect";
import { $MethodHandles$Lookup, $MethodHandle } from "@package/java/lang/invoke";
import { $ClassVisibilityContext_, $DataObject, $DefaultValueTypeHint_, $ArrayValueProvider } from "@package/dev/latvian/mods/rhino/util";
import { $ClassLoader, $Throwable, $Enum, $Record, $RuntimeException, $Class, $StringBuilder, $Object } from "@package/java/lang";
import { $Spliterator, $Iterator, $List, $SequencedCollection, $Map_, $Collection_, $List_, $Comparator, $Map, $Set, $ListIterator } from "@package/java/util";
export * as util from "@package/dev/latvian/mods/rhino/util";
export * as type from "@package/dev/latvian/mods/rhino/type";
export * as regexp from "@package/dev/latvian/mods/rhino/regexp";

declare module "@package/dev/latvian/mods/rhino" {
    export class $CustomProperty {
    }
    export interface $CustomProperty {
        get(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $CustomProperty}.
     */
    export type $CustomProperty_ = (() => $Object);
    export class $Script {
    }
    export interface $Script {
        exec(arg1: $Scriptable): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Script}.
     */
    export type $Script_ = ((arg1: $Scriptable) => $Object);
    export class $CachedClassStorage {
        get(arg0: $Class<never>): $CachedClassInfo;
        include(arg0: $Class<never>, arg1: $Member): boolean;
        isVisible(arg0: number): boolean;
        getDebugClassName(arg0: $Class<never>): string;
        static GLOBAL_PUBLIC: $CachedClassStorage;
        includeProtected: boolean;
        static GLOBAL_PROTECTED: $CachedClassStorage;
        objectClass: $CachedClassInfo;
        constructor(arg0: boolean);
    }
    export class $CachedMethodInfo$Accessible {
        getName(): string;
        getSignature(): $MethodSignature;
        getInfo(): $CachedMethodInfo;
        constructor();
        get name(): string;
        get signature(): $MethodSignature;
        get info(): $CachedMethodInfo;
    }
    export class $EvaluatorException extends $RhinoException {
        constructor(arg1: string);
        constructor(arg1: string, arg2: string, arg3: number);
        constructor(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number);
    }
    export class $MemberType extends $Enum<$MemberType> {
        static get(arg0: $Object, arg1: $Context): $MemberType;
        static values(): $MemberType[];
        static valueOf(arg0: string): $MemberType;
        static NUMBER: $MemberType;
        static SYMBOL: $MemberType;
        static UNDEFINED: $MemberType;
        static STRING: $MemberType;
        static OBJECT: $MemberType;
        static FUNCTION: $MemberType;
        static BOOLEAN: $MemberType;
    }
    /**
     * Values that may be interpreted as {@link $MemberType}.
     */
    export type $MemberType_ = "undefined" | "object" | "function" | "symbol" | "string" | "number" | "boolean";
    export class $CachedParameters extends $Record {
        count(): number;
        types(): $List<$Class<never>>;
        typesMatch(arg0: $Class<never>[]): boolean;
        isVarArg(): boolean;
        firstArgContext(): boolean;
        typeInfos(): $List<$TypeInfo>;
        varArgType(): $TypeInfo;
        static EMPTY: $CachedParameters;
        static EMPTY_FIRST_CX: $CachedParameters;
        constructor(count: number, types: $List_<$Class<never>>, typeInfos: $List_<$TypeInfo_>, firstArgContext: boolean, varArgType: $TypeInfo_);
        get varArg(): boolean;
    }
    export class $ErrorReporter {
    }
    export interface $ErrorReporter {
        error(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): void;
        warning(arg0: string, arg1: string, arg2: number, arg3: string, arg4: number): void;
        runtimeError(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): $EvaluatorException;
    }
    export class $Wrapper {
        static unwrapped(arg0: $Object): $Object;
    }
    export interface $Wrapper {
        unwrap(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Wrapper}.
     */
    export type $Wrapper_ = (() => $Object);
    export class $ConstProperties {
    }
    export interface $ConstProperties {
        defineConst(arg1: string, arg2: $Scriptable): void;
        isConst(arg0: string): boolean;
        putConst(arg1: string, arg2: $Scriptable, arg3: $Object): void;
    }
    export class $RhinoException extends $RuntimeException {
        lineNumber(): number;
        details(): string;
        columnNumber(): number;
        sourceName(): string;
        lineSource(): string;
        initColumnNumber(arg0: number): void;
        initSourceName(arg0: string): void;
        initLineNumber(arg0: number): void;
        initLineSource(arg0: string): void;
        getScriptStackTrace(): string;
        getScriptStackTrace(arg0: number, arg1: string): string;
        getScriptStack(): $ScriptStackElement[];
        getScriptStack(arg0: number, arg1: string): $ScriptStackElement[];
    }
    export class $CustomMember extends $Record {
        name(): string;
        type(): $TypeInfo;
        value(): $Object;
        constructor(name: string, type: $TypeInfo_, value: $Object);
    }
    export class $MethodSignature extends $Record {
        name(): string;
        args(): $Class<never>[];
        constructor(arg0: $Executable);
        constructor(name: string, args: $Class<never>[]);
    }
    export class $SymbolScriptable {
    }
    export interface $SymbolScriptable {
        get(arg1: $Symbol, arg2: $Scriptable): $Object;
        put(arg1: $Symbol, arg2: $Scriptable, arg3: $Object): void;
        "delete"(arg1: $Symbol): void;
        has(arg1: $Symbol, arg2: $Scriptable): boolean;
    }
    export class $CachedConstructorInfo extends $CachedExecutableInfo {
        getCached(): $Constructor<never>;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Constructor<never>);
        get cached(): $Constructor<never>;
    }
    export class $IdEnumerationIterator {
    }
    export interface $IdEnumerationIterator {
        enumerationIteratorHasNext(arg1: $Consumer_<$Object>): boolean;
        enumerationIteratorNext(arg1: $Consumer_<$Object>): boolean;
    }
    export class $CachedFieldInfo$Accessible {
        getName(): string;
        getInfo(): $CachedFieldInfo;
        constructor();
        get name(): string;
        get info(): $CachedFieldInfo;
    }
    export class $IdScriptableObject extends $ScriptableObject implements $IdFunctionCall {
        hasPrototypeMap(): boolean;
        exportAsJSClass(arg0: number, arg1: $Scriptable, arg2: boolean, arg3: $Context): $IdFunctionObject;
        initPrototypeValue(arg0: number, arg1: $Symbol, arg2: $Object, arg3: number): void;
        initPrototypeValue(arg0: number, arg1: string, arg2: $Object, arg3: number): void;
        execIdCall(arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: $Object[]): $Object;
        initPrototypeConstructor(arg0: $IdFunctionObject, arg1: $Context): void;
        initPrototypeMethod(arg0: $Object, arg1: number, arg2: string, arg3: number, arg4: $Context): $IdFunctionObject;
        initPrototypeMethod(arg0: $Object, arg1: number, arg2: string, arg3: string, arg4: number, arg5: $Context): $IdFunctionObject;
        initPrototypeMethod(arg0: $Object, arg1: number, arg2: $Symbol, arg3: string, arg4: number, arg5: $Context): $IdFunctionObject;
        activatePrototypeMap(arg0: number): void;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor();
        constructor(arg0: $Scriptable, arg1: $Scriptable);
    }
    export class $NativeJavaObject implements $Scriptable, $SymbolScriptable, $Wrapper {
        get(arg1: number, arg2: $Scriptable): $Object;
        get(arg1: string, arg2: $Scriptable): $Object;
        get(arg1: $Symbol, arg2: $Scriptable): $Object;
        put(arg1: $Symbol, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: number, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        "delete"(arg1: $Symbol): void;
        "delete"(arg1: number): void;
        "delete"(arg1: string): void;
        getDefaultValue(arg1: $DefaultValueTypeHint_): $Object;
        getClassName(): string;
        unwrap(): $Object;
        has(arg1: $Symbol, arg2: $Scriptable): boolean;
        has(arg1: string, arg2: $Scriptable): boolean;
        has(arg1: number, arg2: $Scriptable): boolean;
        setPrototype(arg0: $Scriptable): void;
        getPrototype(): $Scriptable;
        hasInstance(arg1: $Scriptable): boolean;
        getIds(): $Object[];
        setParentScope(arg0: $Scriptable): void;
        getParentScope(): $Scriptable;
        getTypeMapping(): $Map<$VariableTypeInfo, $TypeInfo>;
        addCustomMember(arg0: $CustomMember_): void;
        addCustomProperty(arg0: string, arg1: $TypeInfo_, arg2: $CustomProperty_): void;
        enumerationIteratorHasNext(arg1: $Consumer_<$Object>): boolean;
        enumerationIteratorNext(arg1: $Consumer_<$Object>): boolean;
        getTypeOf(): $MemberType;
        getAllIds(): $Object[];
        constructor(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_, arg3: $Context);
        constructor(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_, arg3: boolean, arg4: $Context);
        get className(): string;
        get ids(): $Object[];
        get typeMapping(): $Map<$VariableTypeInfo, $TypeInfo>;
        get typeOf(): $MemberType;
        get allIds(): $Object[];
    }
    export class $CachedMemberInfo {
        getName(): string;
        getDeclaringClass(): $CachedClassInfo;
        getCached(): $AccessibleObject;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $AccessibleObject, arg2: string, arg3: number);
        get name(): string;
        get declaringClass(): $CachedClassInfo;
        get cached(): $AccessibleObject;
    }
    export class $NativeJavaClass extends $NativeJavaObject implements $Function {
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
        getClassObject(): $Class<never>;
        constructor(arg1: $Scriptable, arg2: $Class<never>);
        constructor(arg1: $Scriptable, arg2: $Class<never>, arg3: boolean);
        get classObject(): $Class<never>;
    }
    export class $Function {
    }
    export interface $Function extends $Scriptable, $Callable {
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
    }
    export class $ScriptStackElement {
        renderJavaStyle(arg0: $StringBuilder): void;
        renderMozillaStyle(arg0: $StringBuilder): void;
        fileName: string;
        functionName: string;
        lineNumber: number;
        constructor(arg0: string, arg1: string, arg2: number);
    }
    export class $NativeJavaMap extends $NativeJavaObject {
        mapValueType: $TypeInfo;
        mapKeyType: $TypeInfo;
        map: $Map<any, any>;
        constructor(arg1: $Scriptable, arg2: $Object, arg3: $Map_<any, any>, arg4: $TypeInfo_);
    }
    export class $CachedFieldInfo extends $CachedMemberInfo {
        get(arg1: $Object): $Object;
        set(arg1: $Object, arg2: $Object): void;
        getType(): $TypeInfo;
        getCached(): $Field;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Field);
        get type(): $TypeInfo;
        get cached(): $Field;
    }
    export class $ScriptableObject implements $Scriptable, $SymbolScriptable, $ConstProperties {
        size(): number;
        get(arg1: string, arg2: $Scriptable): $Object;
        get(arg1: number, arg2: $Scriptable): $Object;
        get(arg1: $Object): $Object;
        get(arg1: $Symbol, arg2: $Scriptable): $Object;
        put(arg1: number, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: $Symbol, arg2: $Scriptable, arg3: $Object): void;
        static getProperty(arg0: $Scriptable, arg1: number, arg2: $Context): $Object;
        static getProperty(arg0: $Scriptable, arg1: $Symbol, arg2: $Context): $Object;
        static getProperty(arg0: $Scriptable, arg1: string, arg2: $Context): $Object;
        isEmpty(): boolean;
        isSealed(): boolean;
        "delete"(arg1: $Symbol): void;
        "delete"(arg1: number): void;
        "delete"(arg1: string): void;
        getDefaultValue(arg1: $DefaultValueTypeHint_): $Object;
        static getDefaultValue(arg0: $Scriptable, arg1: $DefaultValueTypeHint_, arg2: $Context): $Object;
        getClassName(): string;
        getAttributes(arg1: $Symbol): number;
        getAttributes(arg1: number): number;
        getAttributes(arg1: string): number;
        has(arg1: string, arg2: $Scriptable): boolean;
        has(arg1: number, arg2: $Scriptable): boolean;
        has(arg1: $Symbol, arg2: $Scriptable): boolean;
        setAttributes(arg1: number, arg2: number): void;
        setAttributes(arg1: string, arg2: number): void;
        setAttributes(arg1: $Symbol, arg2: number): void;
        static hasProperty(arg0: $Scriptable, arg1: string, arg2: $Context): boolean;
        static hasProperty(arg0: $Scriptable, arg1: $Symbol, arg2: $Context): boolean;
        static hasProperty(arg0: $Scriptable, arg1: number, arg2: $Context): boolean;
        setGetterOrSetter(arg1: string, arg2: number, arg3: $Callable_, arg4: boolean): void;
        defineConst(arg1: string, arg2: $Scriptable): void;
        static getTopScopeValue(arg0: $Scriptable, arg1: $Object, arg2: $Context): $Object;
        static putConstProperty(arg0: $Scriptable, arg1: string, arg2: $Object, arg3: $Context): void;
        static getClassPrototype(arg0: $Scriptable, arg1: string, arg2: $Context): $Scriptable;
        static redefineProperty(arg0: $Scriptable, arg1: string, arg2: boolean, arg3: $Context): void;
        getGetterOrSetter(arg0: string, arg1: number, arg2: boolean): $Object;
        static getPropertyIds(arg1: $Scriptable): $Object[];
        static deleteProperty(arg0: $Scriptable, arg1: number, arg2: $Context): boolean;
        static deleteProperty(arg0: $Scriptable, arg1: string, arg2: $Context): boolean;
        preventExtensions(): void;
        isExtensible(): boolean;
        static getFunctionPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        defineOwnProperty(arg1: $Object, arg2: $ScriptableObject): void;
        setPrototype(arg0: $Scriptable): void;
        isConst(arg0: string): boolean;
        getPrototype(): $Scriptable;
        static getObjectPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        hasInstance(arg1: $Scriptable): boolean;
        static getArrayPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        getIds(): $Object[];
        getTypeOf(): $MemberType;
        getAllIds(): $Object[];
        setParentScope(arg0: $Scriptable): void;
        getParentScope(): $Scriptable;
        associateValue(arg0: $Object, arg1: $Object): $Object;
        static getTopLevelScope(arg0: $Scriptable): $Scriptable;
        getAssociatedValue(arg0: $Object): $Object;
        static putProperty(arg0: $Scriptable, arg1: string, arg2: $Object, arg3: $Context): void;
        static putProperty(arg0: $Scriptable, arg1: number, arg2: $Object, arg3: $Context): void;
        static putProperty(arg0: $Scriptable, arg1: $Symbol, arg2: $Object, arg3: $Context): void;
        defineProperty(arg1: string, arg2: $Object, arg3: number): void;
        defineProperty(arg1: $Symbol, arg2: $Object, arg3: number): void;
        static defineProperty(arg0: $Scriptable, arg1: string, arg2: $Object, arg3: number, arg4: $Context): void;
        defineProperty(arg1: string, arg2: $Object, arg3: $WrappedExecutable_, arg4: $WrappedExecutable_, arg5: number): void;
        defineProperty(arg1: string, arg2: $Class<never>, arg3: number): void;
        static getGeneratorFunctionPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        putConst(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        sealObject(): void;
        static defineConstProperty(arg0: $Scriptable, arg1: string, arg2: $Context): void;
        setExternalArrayData(arg1: $ExternalArrayData): void;
        defineOwnProperties(arg1: $ScriptableObject): void;
        avoidObjectDetection(): boolean;
        defineFunctionProperties(arg1: string[], arg2: $Class<never>, arg3: number): void;
        getExternalArrayLength(): $Object;
        getExternalArrayData(): $ExternalArrayData;
        enumerationIteratorHasNext(arg1: $Consumer_<$Object>): boolean;
        enumerationIteratorNext(arg1: $Consumer_<$Object>): boolean;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor();
        constructor(arg0: $Scriptable, arg1: $Scriptable);
        get empty(): boolean;
        get sealed(): boolean;
        get className(): string;
        get extensible(): boolean;
        get ids(): $Object[];
        get typeOf(): $MemberType;
        get allIds(): $Object[];
        get externalArrayLength(): $Object;
    }
    export class $ExternalArrayData {
    }
    export interface $ExternalArrayData {
        getArrayElement(arg0: number): $Object;
        getArrayLength(): number;
        setArrayElement(arg0: number, arg1: $Object): void;
        get arrayLength(): number;
    }
    export class $CachedMethodInfo extends $CachedExecutableInfo {
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Method);
    }
    export class $Scriptable {
        static NOT_FOUND: $Object;
    }
    export interface $Scriptable extends $IdEnumerationIterator {
        get(arg1: number, arg2: $Scriptable): $Object;
        get(arg1: string, arg2: $Scriptable): $Object;
        put(arg1: number, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        "delete"(arg1: string): void;
        "delete"(arg1: number): void;
        getDefaultValue(arg1: $DefaultValueTypeHint_): $Object;
        getClassName(): string;
        has(arg1: string, arg2: $Scriptable): boolean;
        has(arg1: number, arg2: $Scriptable): boolean;
        setPrototype(arg0: $Scriptable): void;
        enumerationIteratorHasNext(arg1: $Consumer_<$Object>): boolean;
        enumerationIteratorNext(arg1: $Consumer_<$Object>): boolean;
        getPrototype(): $Scriptable;
        hasInstance(arg1: $Scriptable): boolean;
        getIds(): $Object[];
        getTypeOf(): $MemberType;
        getAllIds(): $Object[];
        setParentScope(arg0: $Scriptable): void;
        getParentScope(): $Scriptable;
        get className(): string;
        get ids(): $Object[];
        get typeOf(): $MemberType;
        get allIds(): $Object[];
    }
    export class $Symbol {
    }
    export interface $Symbol {
    }
    export class $IdFunctionCall {
    }
    export interface $IdFunctionCall {
        execIdCall(arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: $Object[]): $Object;
    }
    /**
     * Values that may be interpreted as {@link $IdFunctionCall}.
     */
    export type $IdFunctionCall_ = ((arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: $Object[]) => $Object);
    export class $WrappedExecutable {
    }
    export interface $WrappedExecutable {
        invoke(arg1: $Scriptable, arg2: $Object, arg3: $Object[]): $Object;
        getReturnType(): $TypeInfo;
        isStatic(): boolean;
        unwrap(): $CachedExecutableInfo;
        construct(arg1: $Scriptable, arg2: $Object[]): $Object;
        get returnType(): $TypeInfo;
        get static(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrappedExecutable}.
     */
    export type $WrappedExecutable_ = ((arg1: $Scriptable, arg2: $Object, arg3: $Object[]) => $Object);
    export class $BaseFunction extends $IdScriptableObject implements $Function {
        getLength(): number;
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        createObject(arg1: $Scriptable): $Scriptable;
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
        getArity(): number;
        getFunctionName(): string;
        setImmunePrototypeProperty(arg0: $Object): void;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: $Scriptable, arg1: $Scriptable);
        get length(): number;
        get arity(): number;
        get functionName(): string;
        set immunePrototypeProperty(value: $Object);
    }
    export class $IdFunctionObject extends $BaseFunction {
        getTag(): $Object;
        methodId(): number;
        unknown(): $RuntimeException;
        addAsProperty(arg0: $Scriptable, arg1: $Context): void;
        hasTag(arg0: $Object): boolean;
        markAsConstructor(arg0: $Scriptable): void;
        initFunction(arg0: string, arg1: $Scriptable): void;
        exportAsScopeProperty(): void;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(arg0: $IdFunctionCall_, arg1: $Object, arg2: number, arg3: string, arg4: number, arg5: $Scriptable);
        constructor(arg0: $IdFunctionCall_, arg1: $Object, arg2: number, arg3: number);
        get tag(): $Object;
    }
    export class $CachedClassInfo {
        getSuperclass(): $CachedClassInfo;
        getInterfaces(): $List<$CachedClassInfo>;
        getMethod(arg0: string, arg1: $Class<never>[]): $CachedMethodInfo;
        getConstructors(): $List<$CachedConstructorInfo>;
        getDeclaredFields(): $List<$CachedFieldInfo>;
        getDeclaredMethods(): $List<$CachedMethodInfo>;
        getTypeInfo(): $TypeInfo;
        getDebugInfo(): $List<string>;
        getRemapPrefixes(): $Set<string>;
        appendDebugType(arg0: $StringBuilder): void;
        getAccessibleFields(arg0: boolean): $List<$CachedFieldInfo$Accessible>;
        getAccessibleMethods(arg0: boolean): $List<$CachedMethodInfo$Accessible>;
        storage: $CachedClassStorage;
        type: $Class<never>;
        modifiers: number;
        isInterface: boolean;
        constructor(arg0: $CachedClassStorage, arg1: $Class<never>);
        get superclass(): $CachedClassInfo;
        get interfaces(): $List<$CachedClassInfo>;
        get constructors(): $List<$CachedConstructorInfo>;
        get declaredFields(): $List<$CachedFieldInfo>;
        get declaredMethods(): $List<$CachedMethodInfo>;
        get typeInfo(): $TypeInfo;
        get debugInfo(): $List<string>;
        get remapPrefixes(): $Set<string>;
    }
    export class $Callable {
    }
    export interface $Callable {
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Callable}.
     */
    export type $Callable_ = ((arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]) => $Object);
    export class $CachedExecutableInfo extends $CachedMemberInfo {
        invoke(arg1: $Scriptable, arg2: $Object, arg3: $Object[]): $Object;
        getReturnType(): $TypeInfo;
        getParameters(): $CachedParameters;
        getSignature(): $MethodSignature;
        transformArgs(arg1: $Object, arg2: $CachedParameters_, arg3: $Object[]): $Object[];
        appendDebugParams(arg0: $StringBuilder): void;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Executable);
        get returnType(): $TypeInfo;
        get parameters(): $CachedParameters;
        get signature(): $MethodSignature;
    }
    export class $Context {
        toString(arg0: $Object): string;
        newArray(arg0: $Scriptable, arg1: number): $Scriptable;
        newArray(arg0: $Scriptable, arg1: $Object[]): $Scriptable;
        wrap(arg0: $Scriptable, arg1: $Object): $Object;
        wrap(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_): $Object;
        canConvert(arg0: $Object, arg1: $TypeInfo_): boolean;
        getImplementationVersion(): string;
        static reportError(arg1: string): void;
        static reportError(arg1: string, arg2: number, arg3: string, arg4: number, arg5: string): void;
        toBoolean(arg0: $Object): boolean;
        createClassLoader(arg0: $ClassLoader): $GeneratedClassLoader;
        toNumber(arg0: $Object): number;
        toObject(arg0: $Object, arg1: $Scriptable): $Scriptable;
        getMaximumInterpreterStackDepth(): number;
        getInstructionObserverThreshold(): number;
        internalConversionWeightLast(arg0: $Object, arg1: $TypeInfo_): number;
        setInstructionObserverThreshold(arg0: number): void;
        arrayOf(arg0: $Object, arg1: $TypeInfo_): $Object;
        listOf(arg0: $Object, arg1: $TypeInfo_): $Object;
        getRegExp(): $RegExp;
        newObject(arg0: $Scriptable, arg1: string, arg2: $Object[]): $Scriptable;
        newObject(arg0: $Scriptable): $Scriptable;
        newObject(arg0: $Scriptable, arg1: string): $Scriptable;
        setGenerateObserverCount(arg0: boolean): void;
        reportConversionError(arg0: $Object, arg1: $TypeInfo_): $Object;
        static getSourcePositionFromStack(arg1: number[]): string;
        static reportRuntimeError1(arg0: string, arg1: $Object, arg2: $Context): $EvaluatorException;
        getApplicationClassLoader(): $ClassLoader;
        initStandardObjects(): $ScriptableObject;
        initStandardObjects(arg0: $ScriptableObject): $Scriptable;
        initStandardObjects(arg0: $ScriptableObject, arg1: boolean): $ScriptableObject;
        arrayValueProviderOf(arg0: $Object): $ArrayValueProvider;
        getConversionWeight(arg0: $Object, arg1: $TypeInfo_): number;
        initSafeStandardObjects(arg0: $ScriptableObject, arg1: boolean): $ScriptableObject;
        initSafeStandardObjects(): $ScriptableObject;
        initSafeStandardObjects(arg0: $ScriptableObject): $Scriptable;
        setApplicationClassLoader(arg0: $ClassLoader): void;
        getCachedClassStorage(arg0: boolean): $CachedClassStorage;
        static reportRuntimeError2(arg0: string, arg1: $Object, arg2: $Object, arg3: $Context): $EvaluatorException;
        static reportRuntimeError3(arg0: string, arg1: $Object, arg2: $Object, arg3: $Object, arg4: $Context): $EvaluatorException;
        static reportRuntimeError4(arg0: string, arg1: $Object, arg2: $Object, arg3: $Object, arg4: $Object, arg5: $Context): $EvaluatorException;
        static throwAsScriptRuntimeEx(arg0: $Throwable, arg1: $Context): $RuntimeException;
        lastStoredScriptable(): $Scriptable;
        defaultObjectToSource(arg0: $Scriptable, arg1: $Scriptable, arg2: $Object[]): string;
        internalConversionWeight(arg0: $Object, arg1: $TypeInfo_): number;
        createInterfaceAdapter(arg0: $TypeInfo_, arg1: $ScriptableObject): $Object;
        newClassSerialNumber(): number;
        static reportRuntimeError0(arg0: string, arg1: $Context): $EvaluatorException;
        setTopCall(arg0: $Scriptable): void;
        javaToJS(arg0: $Object, arg1: $Scriptable): $Object;
        javaToJS(arg0: $Object, arg1: $Scriptable, arg2: $TypeInfo_): $Object;
        callSync(arg0: $Callable_, arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        mapOf(arg0: $Object, arg1: $TypeInfo_, arg2: $TypeInfo_): $Object;
        setOf(arg0: $Object, arg1: $TypeInfo_): $Object;
        classOf(arg0: $Object): $Object;
        jsToJava(arg0: $Object, arg1: $TypeInfo_): $Object;
        isListLike(arg0: $Object): boolean;
        isMapLike(arg0: $Object): boolean;
        doTopCall(arg0: $Scriptable, arg1: $Callable_, arg2: $Scriptable, arg3: $Object[], arg4: boolean): $Object;
        initJSON(arg0: $ScriptableObject, arg1: boolean): void;
        addToScope(arg0: $Scriptable, arg1: string, arg2: $Object): void;
        wrapAny(arg0: $Scriptable, arg1: $Object): $Object;
        wrapAsJavaObject(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_): $Scriptable;
        visibleToScripts(arg0: string, arg1: $ClassVisibilityContext_): boolean;
        optionalListOf<K>(arg0: $Object, arg1: $TypeInfo_): $List<K>;
        optionalListOf(arg0: $Object): $List<$Object>;
        static reportRuntimeError(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): $EvaluatorException;
        static reportRuntimeError(arg0: string, arg1: $Context): $EvaluatorException;
        getErrorReporter(): $ErrorReporter;
        compileReader(arg0: $Reader, arg1: string, arg2: number, arg3: $Object): $Script;
        hasTopCallScope(): boolean;
        optionalMapOf<K, V>(arg0: $Object, arg1: $TypeInfo_, arg2: $TypeInfo_): $Map<K, V>;
        optionalMapOf(arg0: $Object): $Map<string, $Object>;
        static reportWarning(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): void;
        static reportWarning(arg0: string, arg1: $Context): void;
        compileString(arg0: string, arg1: string, arg2: number, arg3: $Object): $Script;
        getTopCallScope(): $Scriptable;
        storeScriptable(arg0: $Scriptable): void;
        getThreadLocal(arg0: $Object): $Object;
        evaluateReader(arg0: $Scriptable, arg1: $Reader, arg2: string, arg3: number, arg4: $Object): $Object;
        getTopCallOrThrow(): $Scriptable;
        static getSizeRank(arg0: $TypeInfo_): number;
        static getUndefinedValue(): $Object;
        putThreadLocal(arg0: $Object, arg1: $Object): void;
        wrapNewObject(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_): $Scriptable;
        removeThreadLocal(arg0: $Object): void;
        evaluateString(arg0: $Scriptable, arg1: string, arg2: string, arg3: number, arg4: $Object): $Object;
        wrapJavaClass(arg0: $Scriptable, arg1: $Class<never>): $Scriptable;
        isStrictMode(): boolean;
        static JSTYPE_JAVA_CLASS: number;
        factory: $ContextFactory;
        static JSTYPE_JAVA_ARRAY: number;
        static CONVERSION_TRIVIAL: number;
        static CONVERSION_NONE: number;
        generateObserverCount: boolean;
        static CONVERSION_EXACT: number;
        static JSTYPE_BOOLEAN: number;
        static JSTYPE_UNDEFINED: number;
        static JSTYPE_OBJECT: number;
        lock: $Object;
        static JSTYPE_STRING: number;
        static JSTYPE_NULL: number;
        static JSTYPE_JAVA_OBJECT: number;
        static JSTYPE_NUMBER: number;
        constructor(arg0: $ContextFactory);
        get implementationVersion(): string;
        get maximumInterpreterStackDepth(): number;
        get regExp(): $RegExp;
        set topCall(value: $Scriptable);
        get errorReporter(): $ErrorReporter;
        get topCallScope(): $Scriptable;
        get topCallOrThrow(): $Scriptable;
        static get undefinedValue(): $Object;
        get strictMode(): boolean;
    }
    export class $NativeArray extends $IdScriptableObject implements $List<any>, $DataObject {
        remove(arg0: $Object): boolean;
        remove(arg0: number): $Object;
        get(arg0: number, arg1: $Context): $Object;
        get(arg0: number): $Object;
        getLength(): number;
        indexOf(arg0: $Object): number;
        clear(): void;
        lastIndexOf(arg0: $Object): number;
        add(arg0: $Object): boolean;
        add(arg0: number, arg1: $Object): void;
        subList(arg0: number, arg1: number): $List<any>;
        toArray(): $Object[];
        toArray(arg0: $Object[]): $Object[];
        iterator(): $Iterator<any>;
        contains(arg0: $Object): boolean;
        addAll(arg0: number, arg1: $Collection_<any>): boolean;
        addAll(arg0: $Collection_<any>): boolean;
        set(arg0: number, arg1: $Object): $Object;
        removeAll(arg0: $Collection_<any>): boolean;
        retainAll(arg0: $Collection_<any>): boolean;
        listIterator(arg0: number): $ListIterator<any>;
        listIterator(): $ListIterator<any>;
        containsAll(arg0: $Collection_<any>): boolean;
        getIds(arg1: boolean, arg2: boolean): $Object[];
        isDataObjectList(): boolean;
        createDataObject<T>(arg0: $Supplier_<T>, arg1: $Context): T;
        createDataObjectList<T>(arg0: $Supplier_<T>, arg1: $Context): $List<T>;
        getIndexIds(): $List<number>;
        replaceAll(arg0: $UnaryOperator_<$Object>): void;
        spliterator(): $Spliterator<$Object>;
        sort(arg0: $Comparator<$Object>): void;
        getFirst(): $Object;
        getLast(): $Object;
        addFirst(arg0: $Object): void;
        addLast(arg0: $Object): void;
        removeFirst(): $Object;
        removeLast(): $Object;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<$Object>;
        removeIf(arg0: $Predicate_<$Object>): boolean;
        parallelStream(): $Stream<$Object>;
        forEach(arg0: $Consumer_<$Object>): void;
        reversed(): $SequencedCollection<$Object>;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(arg1: number);
        constructor(arg1: $Object[]);
        [Symbol.iterator](): Iterator<any>
        get length(): number;
        get dataObjectList(): boolean;
        get indexIds(): $List<number>;
        get first(): $Object;
        get last(): $Object;
    }
    export class $ContextFactory {
        enter(): $Context;
        getCachedClassStorage(): $CachedClassStorage;
        getTypeWrappers(): $TypeWrappers;
        registerDefaultRecordProperties(arg0: $Record): void;
        getRecordConstructor(arg0: $Class<never>): $MethodHandle;
        getDefaultRecordProperties(arg0: $Class<never>): $Object[];
        getInstanceStaticFallback(): boolean;
        setInstanceStaticFallback(arg0: boolean): void;
        getMethodHandlesLookup(): $MethodHandles$Lookup;
        constructor();
        get cachedClassStorage(): $CachedClassStorage;
        get typeWrappers(): $TypeWrappers;
        get methodHandlesLookup(): $MethodHandles$Lookup;
    }
    export class $GeneratedClassLoader {
    }
    export interface $GeneratedClassLoader {
        defineClass(arg0: string, arg1: number[]): $Class<never>;
        linkClass(arg0: $Class<never>): void;
    }
}
