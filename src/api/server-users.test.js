const sum = (a = 0,b = 0 ) => {
	return +a + +b;
};

test('sum a + b', () => {
	expect(sum(2,4)).toBe(6);
});

test('get one number', () => {
	expect(sum(2)).toBe(2);
});

test('get a string', () => {
	expect(sum('2', '3')).toBe(5);
})
