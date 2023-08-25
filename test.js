const { isPercent, getPercent } = require('.');
const { default: test } = require('ava');

test('isPercent detects valid percentages', t => {
    t.true(isPercent(50));
    t.true(isPercent('75%'));
    t.true(isPercent('  25%   '));
    t.true(isPercent('45%', { allowNumber: false }));
});

test('isPercent detects invalid inputs', t => {
    t.false(isPercent('abc'));
    t.false(isPercent('100'));
    t.false(isPercent('foo%'));
    t.false(isPercent(' %50'));
    t.false(isPercent(30, { allowNumber: false }));
});

test('getPercent converts valid inputs', t => {
    t.is(getPercent(0.5), 50);
    t.is(getPercent('75%'), 75);
    t.is(getPercent('  25%   '), 25);
});

test('getPercent throws error on invalid inputs', t => {
    t.throws(() => getPercent('abc'), { instanceOf: TypeError, message: 'Expected input to be a `number` or a `string with percent symbol`, received `string`' });
    t.throws(() => getPercent('100'), { instanceOf: TypeError, message: 'Expected input to be a `number` or a `string with percent symbol`, received `string`' });
    t.throws(() => getPercent(' %50'), { instanceOf: TypeError, message: 'Expected input to be a `number` or a `string with percent symbol`, received `string`' });
    t.throws(() => getPercent(undefined), { instanceOf: TypeError, message: 'Expected input to be a `number` or a `string with percent symbol`, received `undefined`' });
    t.notThrows(() => getPercent('50% '));
});
