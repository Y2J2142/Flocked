import { idiot } from '../flocked'
import { kestrel } from '../flocked'
import { bluebird } from '../flocked'
import { cardinal } from '../flocked'
describe("Testing idiot combinator", () => {
    const randomNumber = (min: number, max: number): number => Math.random() * (max - min) + min
    const numbers = [...Array(1000)].map(_ => randomNumber(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER))
    const strings = numbers.map(n => n.toString(randomNumber(2, 36)))

    function zip<T, U>(lhs: T[], rhs: U[]): [T, U][] {
        if (lhs.length !== rhs.length)
            throw new Error('Mismatched lengths')
        return lhs.map((l, i) => [l, rhs[i]])
    }


    it("number", () => {
        expect(numbers.every(n => n === idiot(n))).toEqual(true)
    })
    it("string", () => {
        expect(strings.every(s => s === idiot(s))).toEqual(true)
    })
    it("tuples", () => {
        expect(zip(numbers, strings).every(t => t === idiot(t))).toEqual(true)
    })
})

describe("Testing kestrel combinator", () => {
    it("number", () => {
        const numbers = [...Array(10)]
        const functions = numbers.map(kestrel)

        expect(numbers.every((elem, idx) => elem == functions[idx]())).toEqual(true)
    })
})


describe("Testing bluebird combinator", () => {
    const f = (n: number) => n * 2
    const parse = (str: string): number => Number.parseInt(str, 10)
    const makeString = (n: number) => n.toString(10)
    const add = (a: number, b: number) => a + b
    it("combining two functions", () => {
        const combined = bluebird(f, parse)
        const combined2 = bluebird(f, add)
        expect(combined("10")).toEqual(20)
        expect(combined2(5, 5)).toEqual(20)
    })
    it("combining multiple functions", () => {
        const combined = bluebird(bluebird(f, parse), makeString)
        expect(combined(10)).toEqual(20)
    })

})

describe("Testing cardinal combinator", () => {
    it("fliping binary function", () => {
        const f = (n: number, str: string) => str + n.toString(10)
        const flip = cardinal(f)
        expect(flip("test", 10)).toEqual(f(10, "test"))

    })
})