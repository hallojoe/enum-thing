"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandFlag = exports.removeFlag = exports.addFlag = exports.hasFlag = void 0;
/**
 * Checks if a given value has a specific flag.
 *
 * @param value - The value to check for the flag.
 * @param flag - The flag to check.
 * @returns A boolean indicating whether the value has the flag.
 */
function hasFlag(value, flag) {
    // Use bitwise AND operator to check if the flag is present in the value
    return flag === (flag & value); // Returns true if flag is present, false otherwise
}
exports.hasFlag = hasFlag;
/**
 * Adds a flag to a given value.
 *
 * @param value - The value to add the flag to.
 * @param flag - The flag to add.
 * @returns The updated value with the flag added.
 */
function addFlag(value, flag) {
    // Use bitwise OR operator to add the flag to the value
    return value | flag; // Returns the updated value with the flag added
}
exports.addFlag = addFlag;
/**
 * Removes a flag from a given value.
 *
 * @param value - The value to remove the flag from.
 * @param flag - The flag to remove.
 * @returns The updated value with the flag removed.
 */
function removeFlag(value, flag) {
    // Use bitwise XOR operator to remove the flag from the value
    return value ^ flag; // Returns the updated value with the flag removed
}
exports.removeFlag = removeFlag;
/**
 * Expands a flag to all its contained flags based on a given enum type.
 *
 * @param flag - The flag to expand.
 * @returns An array containing all the contained flags.
 */
function expandFlag(flag) {
    const result = [];
    let currentFlag = 1;
    while (currentFlag <= flag) {
        if (flag & currentFlag) {
            result.push(currentFlag);
        }
        currentFlag <<= 1;
    }
    return result;
}
exports.expandFlag = expandFlag;
