const splitName = (char: string): string[] => {
	let name = char.split(' ');
	if (name.length > 1) {
		return new Array(name[0], name[name.length - 1]);
	} else return new Array(name[0]);
};

export default splitName;