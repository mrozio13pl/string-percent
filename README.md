# string-percent

> Get percentage value from a string.

## Usage

### isPercent(input, options?)

Checks if a value is a percentage.

- `input` (`number|string`): The value to check.
- `options` (`options`): Options for checking a given value:
    - `allowNumber` (`boolean`): Returns **false** if an input is a number. Set to **true** by default.
- Returns: `boolean` - **true** if the value is a percentage, otherwise **false**.

**Examples:**

```javascript
const { isPercent } = require('string-percent');

isPercent('50%'); // <= true
isPercent('2.5 %'); // <= true
isPercent(0.9); // <= true
isPercent('foo%'); // <= false
isPercent(30, { allowNumber: false }); // <= false
```

### getPercent(input)

Converts a percentage value to a number.

- `input` (`number|string`): The value to convert.
- Returns: `number` - The converted value.percentage, otherwise **false**.
- Throws: `TypeError` - If the input is not a valid percentage.

**Examples:**

```javascript
const { getPercent } = require('string-percent');

getPercent('50%'); // <= 50
getPercent('2.5 %'); // <= 2.5
getPercent(0.9); // <= 90
```

### License

Released under the [MIT License](https://github.com/mrozio13pl/string-percent/blob/main/LICENSE).