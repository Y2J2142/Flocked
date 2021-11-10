export type UnaryCallable<Arg, Result> = (t: Arg) => Result
export type BinaryCallable<Arg1, Arg2, Result> = (l: Arg1, r: Arg2) => Result
export type VariadicCallableSameType<Args, Result> = (...args: Args[]) => Result
export type VariadicCallable<Args extends any[], Result> = (...args: Args) => Result
export type ArrayOfLength<T, Size extends number> = Array<T> & { readonly length: Size }
export type LengthOf<T extends any[]> = T["length"] & { length: number }
export type ParamCount<T extends (...args: any[]) => any> = LengthOf<Parameters<T>>

