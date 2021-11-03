import { idiot } from '../avian';


describe("Testing idiot combinator", () => {
    it("number", () => {
        expect(1).toEqual(idiot(1));
    })
    it("string", () => {
        expect("test").toEqual(idiot("test"));
    })
})