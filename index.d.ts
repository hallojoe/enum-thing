/**
 * Checks if a given value has a specific flag.
 *
 * @param value - The value to check for the flag.
 * @param flag - The flag to check.
 * @returns A boolean indicating whether the value has the flag.
 */
export declare function hasFlag(value: number, flag: number): boolean;
/**
 * Adds a flag to a given value.
 *
 * @param value - The value to add the flag to.
 * @param flag - The flag to add.
 * @returns The updated value with the flag added.
 */
export declare function addFlag(value: number, flag: number): number;
/**
 * Removes a flag from a given value.
 *
 * @param value - The value to remove the flag from.
 * @param flag - The flag to remove.
 * @returns The updated value with the flag removed.
 */
export declare function removeFlag(value: number, flag: number): number;
/**
 * Expands a flag to all its contained flags based on a given enum type.
 *
 * @param flag - The flag to expand.
 * @returns An array containing all the contained flags.
 */
export declare function expandFlag(flag: number): number[];
