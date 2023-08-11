# string-percent

> Get percentage value from a string.

## Usage

### isPercent(input)

Checks if a value is a percentage.

- `input` (`number|string`): The value to check.
- Returns: `boolean` - **true** if the value is a percentage, otherwise **false**.

**Examples:**

```javascript
const { isPercent } = require('string-percent');

isPercent('50%'); // <= true
isPercent('2.5 %'); // <= true
isPercent(0.9); // <= true
isPercent('foo%'); // <= false
```

### getPercent(input)

Converts a percentage value to a number.

- `input` (`number|string`): The value to convert.
- Returns: `number` - The converted value.percentage, otherwise **false**.
- Throws: `TypeError` - If the input is not a valid percentage.

**Examples:**

```javascript
const { isPercent } = require('string-percent');

isPercent('50%'); // <= true
isPercent('2.5 %'); // <= true
isPercent(0.9); // <= true
isPercent('foo%'); // <= false
```

### License

Released under the [MIT License](https://github.com/mrozio13pl/string-percent/blob/main/LICENSE).