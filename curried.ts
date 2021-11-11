import * as TT from './lib/typetraits'
export { idiot, kestrel, cardinal, applicator } from './flocked'


export const bluebird = <T extends any[], U, R>(outer: TT.UnaryCallable<U, R>) => (inner: TT.VariadicCallable<T, U>) => (...args: T) => outer(inner(...args))

export const psi = <T, R>(bin: TT.BinaryCallable<T, T, R>) => <U>(unary: TT.UnaryCallable<U, T>) => (a: U) => (b: U) => bin(unary(a), unary(b))

export const becard = <C, D>(cd: TT.UnaryCallable<C, D>) => <B>(bc: TT.UnaryCallable<B, C>) => <A>(ab: TT.UnaryCallable<A, B>) => (a: A) => cd(bc(ab(a)))

export const blackbird = <C, D>(cd: TT.UnaryCallable<C, D>) => <A, B>(abc: TT.BinaryCallable<A, B, C>) => (a: A) => (b: B) => cd(abc(a, b))

export const bluebirdPrime = <A, C, D>(acd: TT.BinaryCallable<A, C, D>) => (a: A) => <B>(bc: TT.UnaryCallable<B, C>) => (b: B) => acd(a, bc(b))

export const bunting = <D, E>(de: TT.UnaryCallable<D, E>) => <A, B, C>(abcd: TT.TernaryCallable<A, B, C, D>) => (a: A) => (b: B) => (c: C) => de(abcd(a, b, c))