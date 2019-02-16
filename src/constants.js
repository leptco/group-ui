export const FORMAT_DATE = 'MM/dd/yyyy';

export const TYPE_ITEM = {
	Date: 'date',
	Number: 'number',
	String: 'text',
};

export const OPERATE = {
	date: [{ value: 'on', text: 'on' }, { value: 'before', text: 'before' }, { value: 'after', text: 'after' }],
	text: [
		{ value: 'contain', text: 'contain' },
		{ value: 'equal', text: 'equal' },
		{ value: 'not contain', text: 'not contain' },
	],
	number: [
		{ value: 'equal', text: 'equal' },
		{ value: 'greater than', text: 'greater than' },
		{ value: 'less than', text: 'less than' },
		{ value: 'between', text: 'between' },
	],
};

export const DEFAUL_VALUE = {
	date: Date.now(),
	number: 0,
	text: '',
};
