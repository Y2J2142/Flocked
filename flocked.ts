type UnaryCallable<Arg, Result> = (t: Arg) => Result
type BinaryCallable<Arg1, Arg2, Result> = (l: Arg1, r: Arg2) => Result
type VariadicCallableSameType<Args, Result> = (...args: Args[]) => Result
type VariadicCallable<Args extends any[], Result> = (...args: Args) => Result
type ArrayOfLength<T, Size extends number> = Array<T> & { readonly length: Size }
type LengthOf<T extends any[]> = T["length"] & { length: number }
type ParamCount<T extends (...args: any[]) => any> = LengthOf<Parameters<T>>
export const idiot = <T>(t: T) => t

export const kestrel = <T>(t: T) => <U extends any[]>(...args: U) => t

export const bluebird = <T extends any[], U, R>(outer: UnaryCallable<U, R>, inner: VariadicCallable<T, U>) => (...args: T) => outer(inner(...args))

export const bluebirdVariadic = <T extends any[]>(...t: T) => t.reduce((l, r) => bluebird(l, r))

export const cardinal = <T, U, R>(f: BinaryCallable<T, U, R>) => (u: U, t: T) => f(t, u)

export const applicator = <T extends any[], U>(f: VariadicCallable<T, U>) => (...t: T) => f(...t);

export const psi = <T, U, R>(f: BinaryCallable<T, T, R>, g: UnaryCallable<U, T>) => (a: U, b: U) => f(g(a), g(b))

export const psivVariadic = <T, U, R>(f: VariadicCallableSameType<T, R>, g: UnaryCallable<U, T>) => (...args: U[]) => f(...args.map(g))
