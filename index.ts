/**
 * Checks if a given value has a specific flag.
 * 
 * @param value - The value to check for the flag.
 * @param flag - The flag to check.
 * @returns A boolean indicating whether the value has the flag.
 */
export function hasFlag(value: number, flag: number): boolean {
    // Use bitwise AND operator to check if the flag is present in the value
    return flag === (flag & value) // Returns true if flag is present, false otherwise
}

/**
 * Adds a flag to a given value.
 * 
 * @param value - The value to add the flag to.
 * @param flag - The flag to add.
 * @returns The updated value with the flag added.
 */
export function addFlag(value: number, flag: number): number {
    // Use bitwise OR operator to add the flag to the value
    return value | flag // Returns the updated value with the flag added
}

/**
 * Removes a flag from a given value.
 * 
 * @param value - The value to remove the flag from.
 * @param flag - The flag to remove.
 * @returns The updated value with the flag removed.
 */
export function removeFlag(value: number, flag: number): number {
    // Use bitwise XOR operator to remove the flag from the value
    return value ^ flag // Returns the updated value with the flag removed
}

/**
 * Expands a flag to all its contained flags based on a given enum type.
 * 
 * @param flag - The flag to expand.
 * @returns An array containing all the contained flags.
 */
export function expandFlag(flag: number): number[] {
    const result: number[] = []
    let currentFlag = 1
    while (currentFlag <= flag) {
        if (flag & currentFlag) {
            result.push(currentFlag)
        }
        currentFlag <<= 1
    }
    return result
}