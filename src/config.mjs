export const SITE = {
	name: 'TooliTools',

	origin: 'https://tooli.tools',
	basePathname: process.env['NODE_ENV'] == 'development' ? '/' : '/tooli',
	trailingSlash: false,

	title: 'TooliTools — Powerful developer tools provided in a smooth ad-free environment',
	description: 'TODO',
};
console.log(process.env['NODE_ENV'] == 'development' ? '/' : '/tooli') 