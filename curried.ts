import * as TT from './lib/typetraits'
export { idiot, kestrel, cardinal, applicator } from './flocked'


export const bluebird = <T extends any[], U, R>(outer: TT.UnaryCallable<U, R>) => (inner: TT.VariadicCallable<T, U>) => (...args: T) => outer(inner(...args))

export const psi = <T, R>(bin: TT.BinaryCallable<T, T, R>) => <U>(unary: TT.UnaryCallable<U, T>) => (a: U) => (b: U) => bin(unary(a), unary(b))

export const becard = <C, D>(cd: TT.UnaryCallable<C, D>) => <B>(bc: TT.UnaryCallable<B, C>) => <A>(ab: TT.UnaryCallable<A, B>) => (a: A) => cd(bc(ab(a))) 