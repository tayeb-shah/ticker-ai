import { resolve } from "path";
import { definceConfig  } from "vite";

export default definceConfig({
    build: {
        input: {
            main: resolve(__dirname, "index.html"),
            news: resolve(__dirname, "news.html"),
        },
    },
});