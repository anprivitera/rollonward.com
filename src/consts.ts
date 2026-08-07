// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { getCollection } from "astro:content";

export const SITE_TITLE = 'Roll Onward';
export const SITE_DESCRIPTION = '';
export const publishedPosts = (
	await getCollection('blog', ({ data }) => {
		const postDate = new Date(data.pubDate)
		return data.draft !== true && postDate <= new Date()
	})
).sort(
	(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
);
