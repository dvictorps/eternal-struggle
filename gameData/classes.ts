export const CHARACTER_CLASSES = {
	classWarrior: {
		id: "classWarrior",
		name: "Warrior",
		strength: 12,
		dexterity: 8,
		intelligence: 8,
		hp: 110,
		mp: 80,
	},
	classMage: {
		id: "classMage",
		name: "Mage",
		strength: 8,
		dexterity: 8,
		intelligence: 12,
		hp: 80,
		mp: 110,
	},
	classRogue: {
		id: "classRogue",
		name: "Rogue",
		strength: 8,
		dexterity: 12,
		intelligence: 8,
		hp: 90,
		mp: 90,
	},
}

export type ClassId = keyof typeof CHARACTER_CLASSES;