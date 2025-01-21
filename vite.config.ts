import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		createHtmlPlugin({
			inject: {
				tags: [
					{
						tag: "link",
						attrs: {
							rel: "icon",
							type: "image/svg+xml",
							href: "/SCP_logo.svg",
						},
					},
				],
			},
		}),
	],
});
