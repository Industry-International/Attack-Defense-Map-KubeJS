import { $Function2, $Function1 } from "@package/kotlin/jvm/functions";
import { $Annotation } from "@package/java/lang/annotation";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Enum, $Object } from "@package/java/lang";
import { $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $Function, $Unit } from "@package/kotlin";

declare module "@package/kotlin/reflect" {
    export class $KMutableProperty$Setter<V> {
    }
    export interface $KMutableProperty$Setter<V> extends $KProperty$Accessor<V>, $KFunction<$Unit> {
    }
    export class $KProperty$Getter<V> {
    }
    export interface $KProperty$Getter<V> extends $KProperty$Accessor<V>, $KFunction<V> {
    }
    export class $KVisibility extends $Enum<$KVisibility> {
        static values(): $KVisibility[];
        static valueOf(arg0: string): $KVisibility;
        static getEntries(): $EnumEntries<$KVisibility>;
        static INTERNAL: $KVisibility;
        static PUBLIC: $KVisibility;
        static PROTECTED: $KVisibility;
        static PRIVATE: $KVisibility;
        static get entries(): $EnumEntries<$KVisibility>;
    }
    /**
     * Values that may be interpreted as {@link $KVisibility}.
     */
    export type $KVisibility_ = "public" | "protected" | "internal" | "private";
    export class $KCallable<R> {
    }
    export interface $KCallable<R> extends $KAnnotatedElement {
        getName(): string;
        getTypeParameters(): $List<$KTypeParameter>;
        getReturnType(): $KType;
        isFinal(): boolean;
        isOpen(): boolean;
        call(...arg0: $Object[]): R;
        getParameters(): $List<$KParameter>;
        isAbstract(): boolean;
        getVisibility(): $KVisibility;
        isSuspend(): boolean;
        callBy(arg0: $Map_<$KParameter, never>): R;
        get name(): string;
        get typeParameters(): $List<$KTypeParameter>;
        get returnType(): $KType;
        get final(): boolean;
        get open(): boolean;
        get parameters(): $List<$KParameter>;
        get abstract(): boolean;
        get visibility(): $KVisibility;
        get suspend(): boolean;
    }
    export class $KProperty1<T, V> {
    }
    export interface $KProperty1<T, V> extends $KProperty<V>, $Function1<T, V> {
        get(arg0: T): V;
        getDelegate(arg0: T): $Object;
        getGetter(): $KProperty$Getter<V>;
        get getter(): $KProperty$Getter<V>;
    }
    export class $KMutableProperty1<T, V> {
    }
    export interface $KMutableProperty1<T, V> extends $KProperty1<T, V>, $KMutableProperty<V> {
        set(arg0: T, arg1: V): void;
        getSetter(): $KMutableProperty1$Setter<T, V>;
        get setter(): $KMutableProperty1$Setter<T, V>;
    }
    export class $KAnnotatedElement {
    }
    export interface $KAnnotatedElement {
        getAnnotations(): $List<$Annotation>;
        get annotations(): $List<$Annotation>;
    }
    /**
     * Values that may be interpreted as {@link $KAnnotatedElement}.
     */
    export type $KAnnotatedElement_ = (() => $List_<$Annotation>);
    export class $KMutableProperty<V> {
    }
    export interface $KMutableProperty<V> extends $KProperty<V> {
        getSetter(): $KMutableProperty$Setter<V>;
        get setter(): $KMutableProperty$Setter<V>;
    }
    export class $KType {
    }
    export interface $KType extends $KAnnotatedElement {
        getArguments(): $List<$KTypeProjection>;
        getClassifier(): $KClassifier;
        isMarkedNullable(): boolean;
        get arguments(): $List<$KTypeProjection>;
        get classifier(): $KClassifier;
        get markedNullable(): boolean;
    }
    export class $KTypeParameter {
    }
    export interface $KTypeParameter extends $KClassifier {
        getName(): string;
        getUpperBounds(): $List<$KType>;
        getVariance(): $KVariance;
        isReified(): boolean;
        get name(): string;
        get upperBounds(): $List<$KType>;
        get variance(): $KVariance;
        get reified(): boolean;
    }
    export class $KClass<T> {
    }
    export interface $KClass<T> extends $KDeclarationContainer, $KAnnotatedElement, $KClassifier {
        equals(arg0: $Object): boolean;
        hashCode(): number;
        isInstance(arg0: $Object): boolean;
        getTypeParameters(): $List<$KTypeParameter>;
        getSimpleName(): string;
        isFinal(): boolean;
        isOpen(): boolean;
        getConstructors(): $Collection<$KFunction<T>>;
        isSealed(): boolean;
        isAbstract(): boolean;
        isValue(): boolean;
        getObjectInstance(): T;
        getQualifiedName(): string;
        isData(): boolean;
        getVisibility(): $KVisibility;
        isInner(): boolean;
        getMembers(): $Collection<$KCallable<never>>;
        getSealedSubclasses(): $List<$KClass<T>>;
        getNestedClasses(): $Collection<$KClass<never>>;
        getSupertypes(): $List<$KType>;
        isCompanion(): boolean;
        isFun(): boolean;
        get typeParameters(): $List<$KTypeParameter>;
        get simpleName(): string;
        get final(): boolean;
        get open(): boolean;
        get constructors(): $Collection<$KFunction<T>>;
        get sealed(): boolean;
        get abstract(): boolean;
        get value(): boolean;
        get objectInstance(): T;
        get qualifiedName(): string;
        get data(): boolean;
        get visibility(): $KVisibility;
        get inner(): boolean;
        get members(): $Collection<$KCallable<never>>;
        get sealedSubclasses(): $List<$KClass<T>>;
        get nestedClasses(): $Collection<$KClass<never>>;
        get supertypes(): $List<$KType>;
        get companion(): boolean;
        get fun(): boolean;
    }
    export class $KClassifier {
    }
    export interface $KClassifier {
    }
    export class $KProperty<V> {
    }
    export interface $KProperty<V> extends $KCallable<V> {
        getGetter(): $KProperty$Getter<V>;
        isLateinit(): boolean;
        isConst(): boolean;
        get getter(): $KProperty$Getter<V>;
        get lateinit(): boolean;
        get const(): boolean;
    }
    export class $KFunction<R> {
    }
    export interface $KFunction<R> extends $KCallable<R>, $Function<R> {
        isExternal(): boolean;
        isOperator(): boolean;
        isInline(): boolean;
        isInfix(): boolean;
        isSuspend(): boolean;
        get external(): boolean;
        get operator(): boolean;
        get inline(): boolean;
        get infix(): boolean;
        get suspend(): boolean;
    }
    export class $KMutableProperty1$Setter<T, V> {
    }
    export interface $KMutableProperty1$Setter<T, V> extends $KMutableProperty$Setter<V>, $Function2<T, V, $Unit> {
    }
    export class $KDeclarationContainer {
    }
    export interface $KDeclarationContainer {
        getMembers(): $Collection<$KCallable<never>>;
        get members(): $Collection<$KCallable<never>>;
    }
    /**
     * Values that may be interpreted as {@link $KDeclarationContainer}.
     */
    export type $KDeclarationContainer_ = (() => $Collection_<$KCallable<never>>);
}
