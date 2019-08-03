// export default {
// 	apiEndpoint: 'https://marks-personal-website.cdn.prismic.io/api/v2'
// }

import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

const config = {
	baseUrl: 'https://marks-personal-website.cdn.prismic.io/api/v2'
}

export const initApi = req => {
	return Prismic.getApi(config.baseUrl, {
		req: req
	})
}

export const linkResolver = doc => {
	if (doc.type === 'blog_posts') return `/blog/${doc.uid}`
	return `/${doc.uid}`
}

export const generatePageData = (documentType, data) => {
	switch (documentType) {
		case 'blog_page':
			return {
				posts: data
			}
		case 'blog_posts':
			return {
				title: PrismicDOM.RichText.asText(data.title),
				description: PrismicDOM.RichText.asText(data.description),
				image: data.image.url,
				content: PrismicDOM.RichText.asText(data.content)
			}
	}
}
