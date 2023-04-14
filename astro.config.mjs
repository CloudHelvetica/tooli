import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import inject from '@rollup/plugin-inject';
// const webpack = require('webpack');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   configureWebpack: {
//   plugins: [

import { SITE } from './src/config.mjs';
import { remarkReadingTime } from './src/utils/frontmatter.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
	SITE.googleAnalyticsId ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

import GlobalsPolyfills from "@esbuild-plugins/node-globals-polyfill";
import nodePolyfills from 'rollup-plugin-polyfill-node';
 
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
				Buffer:'buffer',
				// Buffer:'buffer/',
				buffer:'buffer/',
				buf:'buffer/',
				dgram:'dgram-browserify'
			},
		},
	},
	build: {
		rollupOptions: {
			plugins: [
				nodePolyfills(),
				inject({
					// include: ['node_modules/@ledgerhq/**'],
					modules: { Buffer: ['buffer', 'Buffer'], }
				})
			],
		},
	},
	optimizeDeps: {
		// https://github.com/vitejs/vite/discussions/2785
		esbuildOptions: {
		  // Node.js global to browser globalThis
		  define: {
			global: "globalThis",
		  },
		  // Enable esbuild polyfill plugins
		  plugins: [
			GlobalsPolyfills({
			  process: true,
			  buffer: true,
			}),
		  ],
		},
	  },
});
