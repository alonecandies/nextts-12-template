import removeVietnameseAccent from "./removeVietnameseAccent";

const slugify = (char: string): string => {
	char = removeVietnameseAccent(char);
	char = char.replace(/^\s+|\s+$/g, ''); // trim
	char = char
		.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
		.replace(/\s+/g, '-') // collapse whitespace and replace by -
		.replace(/-+/g, '-'); // collapse dashes

	return char;
};

export default slugify;