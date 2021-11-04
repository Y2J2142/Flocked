export const idiot = <T>(t: T) => t;

export const kestrel = <T>(t: T) => () => t;

type Callable<T, R> = (t: T) => R;
export const bluebird = <T extends any[], U, R>(outer: Callable<U, R>, inner: Callable<T, U>) => (t: T) => outer(inner(t))
