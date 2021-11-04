type UnaryCallable<Arg, Result> = (t: Arg) => Result
type BinaryCallable<Arg1, Arg2, Result> = (l: Arg1, r: Arg2) => Result
type VariadicCallable<Args extends any[], Result> = (...args: Args) => Result

export const idiot = <T>(t: T) => t

export const kestrel = <T>(t: T) => () => t

export const bluebird = <T extends any[], U, R>(outer: UnaryCallable<U, R>, inner: VariadicCallable<T, U>) => (...args: T) => outer(inner(...args))

export const bluebirdVariadic = <T extends any[]>(...t: T) => t.reduce((l, r) => bluebird(l, r))

export const cardinal = <T, U, R>(f: BinaryCallable<T, U, R>) => (u: U, t: T) => f(t, u)