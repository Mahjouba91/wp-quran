const attributes = {
	surahOptions: {
		type: 'array',
		default: []
	},
	currentSurah: {
		type: 'string',
		default: "1"
	},
	currentSurahText: {
		type: 'string',
		default: ""
	},
	currentAyahNum: {
		type: 'string',
		default: "0"
	},
	currentAyahText: {
		type: 'string',
		default: ""
	},
	currentAyahTextInArabic: {
		type: 'string',
		default: ""
	},
	currentSurahAyahs: {
		type: 'array',
		default: []
	},
	showVerseInArabic: {
		type: 'boolean',
		default: false
	},
};

export default attributes;
