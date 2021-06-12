const test = require('ava')
const Minimum = require('./dist/minimum.cjs')

const obj = Symbol('obj');

test('It works with promise', async t => {
	let result = await Minimum(Promise.resolve(obj), 200)
	t.is(result, obj)
});

test('It can throw exception and it can be catched', async t => {
	await Minimum(Promise.reject(), 200).catch(() => {})
	t.pass()
});
