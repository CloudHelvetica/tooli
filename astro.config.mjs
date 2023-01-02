import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import { SITE } from './src/config.mjs';
import { remarkReadingTime } from './src/utils/frontmatter.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
	SITE.googleAnalyticsId ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
	site: SITE.origin,
	base: SITE.basePathname,
	trailingSlash: SITE.trailingSlash ? 'always' : 'never',

	output: 'static',

	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		sitemap(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
		mdx(),

		...whenExternalScripts(() =>
			partytown({
				config: { forward: ['dataLayer.push'] },
			})
		),
	],

	markdown: {
		remarkPlugins: [remarkReadingTime],
		extendDefaultPlugins: true,
	},

	vite: {
		// define: {
		// 	global: {}
		// },
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
				https: "https-browserify",
				http: "http-browserify",
				stream: "stream-browserify",
			},
		},
	},
});
