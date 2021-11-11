import * as TT from './lib/typetraits'
export const idiot = <T>(t: T) => t

export const kestrel = <T>(t: T) => <U extends any[]>(...args: U) => t

export const bluebird = <T extends any[], U, R>(outer: TT.UnaryCallable<U, R>, inner: TT.VariadicCallable<T, U>) => (...args: T) => outer(inner(...args))

export const bluebirdVariadic = <T extends any[]>(...t: T) => t.reduce((l, r) => bluebird(l, r))

export const cardinal = <T, U, R>(f: TT.BinaryCallable<T, U, R>) => (u: U, t: T) => f(t, u)

export const applicator = <T extends any[], U>(f: TT.VariadicCallable<T, U>) => (...t: T) => f(...t);

export const psi = <T, U, R>(f: TT.BinaryCallable<T, T, R>, g: TT.UnaryCallable<U, T>) => (a: U, b: U) => f(g(a), g(b))

export const psivVariadic = <T, U, R>(f: TT.VariadicCallableSameType<T, R>, g: TT.UnaryCallable<U, T>) => (...args: U[]) => f(...args.map(g))

export const becard = <A extends any[], B, C, D>(cd: TT.UnaryCallable<C, D>, bc: TT.UnaryCallable<B, C>, ab: TT.VariadicCallable<A, B>) => (...args: A) => cd(bc(ab(...args)))

export const blackbird = <A, B, C, D>(cd: TT.UnaryCallable<C, D>, abc: TT.BinaryCallable<A, B, C>) => (a: A, b: B) => cd(abc(a, b))

export const bluebirdPrime = <A, B, C, D>(acd: TT.BinaryCallable<A, C, D>, a: A, bc: TT.UnaryCallable<B, C>) => (b: B) => acd(a, bc(b))

export const bunting = <A, B, C, D, E>(de: TT.UnaryCallable<D, E>, abcd: TT.TernaryCallable<A, B, C, D>) => (a: A, b: B, c: C) => de(abcd(a, b, c))