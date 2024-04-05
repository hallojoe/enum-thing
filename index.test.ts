import {
    hasFlag,
    addFlag,
    removeFlag,
    expandFlag
} from "./index" 

// Mock enum for testing
enum TestOptions {
    None = 0,
    Add = 1,
    Remove = 2,
    Copy = 4,
    MoveUp = 8,
    MoveDown = 16,
    All = Add | Remove | Copy | MoveUp | MoveDown,
    AllButMoveUp = Add | Remove | Copy | MoveDown,
    AllButMoveDown = Add | Remove | Copy | MoveUp
}

// Tests for hasFlag function
describe("hasFlag function", () => {
    it("should return true if value has the flag", () => {
        expect(hasFlag(TestOptions.All, TestOptions.Copy)).toBe(true)
    })

    it("should return false if value does not have the flag", () => {
        expect(hasFlag(TestOptions.Add, TestOptions.MoveUp)).toBe(false)
    })
})

// Tests for addFlag function
describe("addFlag function", () => {
    it("should add the flag to the value", () => {
        expect(addFlag(TestOptions.None, TestOptions.MoveDown)).toBe(TestOptions.MoveDown)
    })
})

// Tests for removeFlag function
describe("removeFlag function", () => {
    it("should remove the flag from the value", () => {
        expect(removeFlag(TestOptions.All, TestOptions.Copy)).toBe(TestOptions.All & ~TestOptions.Copy)
    })
})

// Tests for expandFlag function
describe("expandFlag function", () => {
    it("should return an array containing all the contained flags", () => {
        expect(expandFlag(TestOptions.AllButMoveDown)).toEqual([TestOptions.Add, TestOptions.Remove, TestOptions.Copy, TestOptions.MoveUp])
    })

    it("should return an empty array if no flags are contained", () => {
        expect(expandFlag(TestOptions.None)).toEqual([])
    })
})
