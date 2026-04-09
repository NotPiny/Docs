// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Embers Project Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/NotPiny' }],
			sidebar: [
				{
					label: 'PineLib',
					autogenerate: {
						directory: 'PineLib',
					},
					collapsed: true
				}
			],
		}),
	],
});
