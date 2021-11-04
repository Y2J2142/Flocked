type Callable<Args, Result> = (t: Args) => Result
type VariadicCallable<Args extends any[], Result> = (...args: Args) => Result

export const idiot = <T>(t: T) => t

export const kestrel = <T>(t: T) => () => t


export const bluebird = <T extends any[], U, R>(outer: Callable<U, R>, inner: VariadicCallable<T, U>) => (...args: T) => outer(inner(...args))

export const bluebirdVariadic = <T extends any[]>(...t: T) => t.reduce((l, r) => bluebird(l, r))
