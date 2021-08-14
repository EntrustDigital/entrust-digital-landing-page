export const stringToHTML = (string) => {
	var parser = new DOMParser();
	var doc = parser.parseFromString(string, 'text/html');
	return doc.body;
};