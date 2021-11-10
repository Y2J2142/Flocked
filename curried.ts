import * as TT from './lib/typetraits'
export { idiot, kestrel, cardinal, applicator } from './flocked'


export const bluebird = <T extends any[], U, R>(outer: TT.UnaryCallable<U, R>) => (inner: TT.VariadicCallable<T, U>) => (...args: T) => outer(inner(...args))
