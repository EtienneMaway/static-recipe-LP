/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./build/*.html", "./build/js/*.js"],
	theme: {
		extend: {
			colors: {
				primary: "#ff6363",
				secondary: {
					100: "#E2E2D5",
					200: "#888883",
				},
			},
			fontFamily: {
				body: ["Nunito"],
			},
			// screens: {
			// 	widescreen: { raw: "(min-aspect-ratio: 3/2)" },
			// 	tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
			// },
			// keyframes: {
			// 	"open-menu": {
			// 		"0%": { transform: "scale(0)" },
			// 		"80%": { transform: "scale(1.2)" },
			// 		"100%": { transform: "scale(1)" },
			// 	},
			// },
			// animation: {
			// 	"open-menu": "open-menu 0.5s ease-in-out forwards",
			// },
		},
	},
	plugins: [],
};
