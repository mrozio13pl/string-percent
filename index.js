'use strict';

/**
 * Checks if a value is a percentage.
 * @param {number|string} input - The value to check.
 * @returns {boolean} `true` if the value is a percentage, otherwise `false`.
 * 
 * @example
 * ```javascript
 * const { isPercent } = require('string-percent');
 * 
 * isPercent('50%'); // <= true
 * isPercent('2.5 %'); // <= true
 * isPercent(0.9); // <= true
 * isPercent('foo%'); // <= false
 * ```
 */
function isPercent(input) {
    if (typeof input === 'number') return true;

    if (typeof input === 'string') {
        const val = input.trim();
        if (val.endsWith('%')) {
            return !isNaN(parseFloat(val));
        }
    }

    return false;
}

/**
 * Converts a percentage value to a number.
 * 
 * @param {number|string} input - The value to convert.
 * @returns {number} The converted value.
 * @throws {TypeError} If the input is not a valid percentage.
 * 
 * @example
 * ```javascript
 * const { getPercent } = require('string-percent');
 * 
 * getPercent('50%'); // <= 50
 * getPercent('2.5 %'); // <= 2.5
 * getPercent(0.9); // <= 90
 * ```
 */
function getPercent(input) {
    if (!isPercent(input)) {
        throw new TypeError(`Expected input to be a \`number\` or a \`string with percent symbol\`, received \`${typeof input}\``);
    }

    if (typeof input === 'number') return input * 100;

    if (typeof input === 'string') {
        const val = input.trim();
        return parseFloat(val);
    }
}

module.exports = {
    isPercent,
    getPercent,
};
