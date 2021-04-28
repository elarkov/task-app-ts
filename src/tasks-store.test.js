const tasks = [
	{id:1, text: 'washing car', user_id:1, isComplete: false},
	{id:2, text: 'cooking food', user_id:2, isComplete: false},
	{id:3, text: 'doing homework', user_id:3, isComplete: false}
];

const removeElement = (id, array) => {
	
	const result = array.filter((el) => el.id !== id);
	return result;
};

describe('Remove items', () => {
	test("it should remove id", () => {

		const output = [
			{id:2, text: 'cooking food', user_id:2, isComplete: false},
			{id:3, text: 'doing homework', user_id:3, isComplete: false }
		];

		expect(removeElement(1, tasks)).toMatchObject(output);
	});
})
