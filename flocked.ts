import * as TT from './lib/typetraits'

export const idiot = <T>(t: T) => t

export const kestrel = <T>(t: T) => <U extends any[]>(...args: U) => t

export const cardinal = <T, U, R>(f: TT.BinaryCallable<T, U, R>) => (u: U, t: T) => f(t, u)

export const applicator = <T extends any[], U>(f: TT.VariadicCallable<T, U>) => (...t: T) => f(...t);

export const bluebird = <T extends any[], U, R>(outer: TT.UnaryCallable<U, R>) => (inner: TT.VariadicCallable<T, U>) => (...args: T) => outer(inner(...args))
export const bluebirdVariadic = <T extends any[]>(...t: T) => t.reduce((l, r) => bluebird(l)(r))

export const psi = <T, R>(bin: TT.BinaryCallable<T, T, R>) => <U>(unary: TT.UnaryCallable<U, T>) => (a: U) => (b: U) => bin(unary(a), unary(b))
export const psivVariadic = <T, U, R>(f: TT.VariadicCallableSameType<T, R>, g: TT.UnaryCallable<U, T>) => (...args: U[]) => f(...args.map(g))

export const becard = <C, D>(cd: TT.UnaryCallable<C, D>) => <B>(bc: TT.UnaryCallable<B, C>) => <A extends any[]>(ab: TT.VariadicCallable<A, B>) => (...a: A) => cd(bc(ab(...a)))

export const blackbird = <C, D>(cd: TT.UnaryCallable<C, D>) => <A, B>(abc: TT.BinaryCallable<A, B, C>) => (a: A) => (b: B) => cd(abc(a, b))

export const bluebirdPrime = <A, C, D>(acd: TT.BinaryCallable<A, C, D>) => (a: A) => <B>(bc: TT.UnaryCallable<B, C>) => (b: B) => acd(a, bc(b))

export const bunting = <D, E>(de: TT.UnaryCallable<D, E>) => <A, B, C>(abcd: TT.TernaryCallable<A, B, C, D>) => (a: A) => (b: B) => (c: C) => de(abcd(a, b, c))

export const cardinalPrime = <C, A, D>(cad: TT.BinaryCallable<C, A, D>) => <B>(bc: TT.UnaryCallable<B, C>) => (a: A) => (b: B) => cad(bc(b), a)