export function taskFirst() {
	const task = 'I prefer const when I can.';  // Utilisation de const
	return task;
}

export function getLast() {
	return ' is okay';
}

export function taskNext() {
	let combination = 'But sometimes let';  // Utilisation de let ici
	combination += getLast();  // Modification de combination

	return combination;
}
