const attributes = {
	quranEditions: {
		type: 'array',
		default: []
	},
	surahOptions: {
		type: 'array',
		default: []
	},
	currentEdition: {
		type: 'object',
		default: {
			"identifier": "fr.hamidullah",
			"language": "fr",
			"name": "Hamidullah",
			"englishName": "Muhammad Hamidullah",
			"format": "text",
			"type": "translation",
			"direction": "ltr",
			"label": "Muhammad Hamidullah",
			"value": "fr.hamidullah"
		}
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
