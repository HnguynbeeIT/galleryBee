import {defineConfig} from "vite";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/galleryBee/", // 👈 rất quan trọng
  server: {
    host: "0.0.0.0",
  },
	css: {
		postcss: {
			plugins: [
				autoprefixer({
					overrideBrowserslist: [
						"Android 4.1",
						"iOS 7.1",
						"Chrome > 31",
						"ff > 31",
						"ie >= 8",
						"> 1%",
					]
				})
			]
		}
	}
});
